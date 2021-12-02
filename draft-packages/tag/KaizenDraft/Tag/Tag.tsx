import { Icon } from "@kaizen/component-library"
import { Avatar, AvatarProps } from "@kaizen/draft-avatar"
import classNames from "classnames"
import * as React from "react"
import clearIcon from "@kaizen/component-library/icons/clear.icon.svg"
import exclamationIcon from "@kaizen/component-library/icons/exclamation.icon.svg"
import informationIcon from "@kaizen/component-library/icons/information.icon.svg"
import successIcon from "@kaizen/component-library/icons/success.icon.svg"
import styles from "./Tag.scss"

type Variant =
  | "default"
  | "sentimentPositive"
  | "sentimentNeutral"
  | "sentimentNegative"
  | "sentimentNone"
  | "validationPositive"
  | "validationInformative"
  | "validationNegative"
  | "validationCautionary"
  | "statusLive"
  | "statusDraft"
  | "statusClosed"
  | "statusAction"
export interface TagWithAvatarProps extends Omit<DefaultTagProps, "variant"> {
  variant: "profile"
  avatar: JSX.Element | AvatarProps
}

export interface DefaultTagProps {
  variant?: Variant
  children: React.ReactNode
  size?: "medium" | "small"
  inline?: boolean
  dismissible?: boolean
  onDismiss?: React.MouseEventHandler<HTMLSpanElement>
  onMouseDown?: React.MouseEventHandler<HTMLSpanElement>
  onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>
  truncateWidth?: number
}

type TagProps = DefaultTagProps | TagWithAvatarProps

const successIconVariants: Variant[] = ["validationPositive"]

const exclamationIconVariants: Variant[] = [
  "validationNegative",
  "validationCautionary",
]

const isJSXElement = (
  imageElementOrAvatarProps: JSX.Element | AvatarProps
): imageElementOrAvatarProps is JSX.Element =>
  "props" in imageElementOrAvatarProps

const renderAvatar = (imageElementOrAvatarProps: JSX.Element | AvatarProps) =>
  isJSXElement(imageElementOrAvatarProps) ? (
    <>{imageElementOrAvatarProps}</>
  ) : (
    <Avatar {...imageElementOrAvatarProps} size="small" />
  )

const Tag = (props: TagProps) => {
  const {
    children,
    variant = "default",
    size = "medium",
    inline = false,
    dismissible = false,
    onDismiss,
    onMouseDown,
    onMouseLeave,
    truncateWidth,
  } = props

  const isTruncated = truncateWidth && truncateWidth > 0
  const canShowIcon = size === "medium"
  return (
    <div
      className={classNames(styles.root, {
        [styles.default]: variant === "default" || variant === "profile",
        [styles.sentimentPositive]: variant === "sentimentPositive",
        [styles.sentimentNeutral]: variant === "sentimentNeutral",
        [styles.sentimentNegative]: variant === "sentimentNegative",
        [styles.sentimentNone]: variant === "sentimentNone",
        [styles.validationPositive]: variant === "validationPositive",
        [styles.validationInformative]: variant === "validationInformative",
        [styles.validationNegative]: variant === "validationNegative",
        [styles.validationCautionary]: variant === "validationCautionary",
        [styles.statusLive]: variant === "statusLive",
        [styles.statusDraft]: variant === "statusDraft",
        [styles.statusClosed]: variant === "statusClosed",
        [styles.statusAction]: variant === "statusAction",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
        [styles.inline]: inline,
        [styles.dismissible]: dismissible,
      })}
    >
      <div className={styles.layoutContainer}>
        {canShowIcon &&
          (() => {
            switch (props.variant) {
              case "validationPositive":
                return (
                  <span className={styles.validationIcon}>
                    <Icon icon={successIcon} role="presentation" />
                  </span>
                )
              case "validationNegative":
                return (
                  <span className={styles.validationIcon}>
                    <Icon icon={exclamationIcon} role="presentation" />
                  </span>
                )
              case "validationCautionary":
                return (
                  <span className={styles.validationIcon}>
                    <Icon icon={exclamationIcon} role="presentation" />
                  </span>
                )
              case "validationInformative":
                return (
                  <span className={styles.validationIcon}>
                    <Icon icon={informationIcon} role="presentation" />
                  </span>
                )
              case "profile":
                return (
                  <span className={styles.validationIcon}>
                    {props.avatar && renderAvatar(props.avatar)}
                  </span>
                )
              default:
                return
            }
          })()}
        <span
          className={classNames(styles.textContent, {
            [styles.truncate]: isTruncated,
          })}
          style={{
            maxWidth: isTruncated ? truncateWidth : undefined,
          }}
        >
          {children}
        </span>
        {dismissible && (
          <>
            <button
              className={styles.dismissButton}
              onClick={onDismiss}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
            >
              <span className={styles.background} />
              <div className={styles.iconWrapper}>
                <Icon icon={clearIcon} inheritSize role="img" title="Dismiss" />
              </div>
            </button>
          </>
        )}
        {variant === "statusLive" && (
          <span className={styles.pulse}>
            <span className={styles.pulseRing} />
          </span>
        )}
      </div>
    </div>
  )
}

export default Tag
