import classNames from "classnames"
import * as React from "react"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"
import { Icon } from "../Icon"
import chevronDownIcon from "../../icons/chevron-down.icon.svg"
import ellipsisIcon from "../../icons/ellipsis.icon.svg"
import DropdownMenu from "./DropdownMenu"

import styles from "./Dropdown.module.scss"

type DropdownState = {
  isMenuVisible: boolean
}

export type DropdownProps = {
  icon?: React.SVGAttributes<SVGSymbolElement>
  label?: React.ReactNode
  menuVisible?: boolean
  controlAction?: boolean
  automationId?: string
  reversedColor?: boolean
  iconPosition?: "start" | "end"
}

/**
 * @deprecated Dropdown is deprecated. Please use draft-menu instead.
 */
class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static displayName = "Dropdown"
  static defaultProps: DropdownProps = {
    iconPosition: "start",
  }

  dropdownButton = React.createRef<HTMLButtonElement>()

  constructor(props: DropdownProps) {
    super(props)

    this.state = {
      isMenuVisible: Boolean(props.menuVisible),
    }
  }

  toggleDropdownMenu = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    const currentState = this.state.isMenuVisible
    this.setState({
      isMenuVisible: !currentState,
    })
  }

  hideDropdownMenu = () => {
    this.setState({
      isMenuVisible: false,
    })
  }

  getPosition() {
    return this.dropdownButton && this.dropdownButton.current
      ? this.dropdownButton.current.getBoundingClientRect()
      : null
  }

  renderDropdownMenu() {
    return (
      <DropdownMenu
        hideDropdownMenu={this.hideDropdownMenu}
        position={this.getPosition()}
      >
        {this.props.children}
      </DropdownMenu>
    )
  }

  renderIcon = (icon?: React.SVGAttributes<SVGSymbolElement>) => {
    if (!icon) return

    return (
      <span className={styles.dropdownIcon}>
        <Icon icon={icon} role="img" title="Open menu" />
      </span>
    )
  }

  renderDownArrow = () => {
    const { label, controlAction } = this.props
    if (!label || !controlAction) return

    return (
      <span className={styles.chevronIcon}>
        <Icon icon={chevronDownIcon} role="img" title="Open menu" />
      </span>
    )
  }

  renderButtonContent = () => {
    const { label } = this.props
    let { icon } = this.props

    if (!icon && !label) {
      icon = ellipsisIcon
    }

    return (
      <React.Fragment>
        {this.renderIcon(icon)}
        {label && <span className={styles.dropdownLabel}>{label}</span>}
        {this.renderDownArrow()}
      </React.Fragment>
    )
  }

  renderReversedButtonContent = () => {
    const { icon, label } = this.props

    return (
      <React.Fragment>
        {this.renderDownArrow()}
        {label && <span className={styles.dropdownLabel}>{label}</span>}
        {this.renderIcon(icon)}
      </React.Fragment>
    )
  }

  render() {
    const {
      controlAction,
      automationId,
      iconPosition,
      reversedColor,
    } = this.props

    const reverseIcon = iconPosition === "end"
    const btnClass = classNames(styles.dropdownButton, {
      [styles.dropdownControlAction]: controlAction,
      [styles.isOpen]: this.state.isMenuVisible,
      [styles.reversedColor]: reversedColor,
    })
    return (
      <div className={styles.dropdown}>
        <button
          className={btnClass}
          onClick={this.toggleDropdownMenu}
          onMouseDown={e => e.preventDefault()}
          ref={this.dropdownButton}
          data-automation-id={automationId}
        >
          {!reverseIcon && this.renderButtonContent()}
          {reverseIcon && this.renderReversedButtonContent()}
        </button>
        {this.state.isMenuVisible && this.renderDropdownMenu()}
      </div>
    )
  }
}

export default withDeprecatedComponent(Dropdown, {
  warning: "Dropdown is deprecated. Use @kaizen/draft-menu instead.",
})
