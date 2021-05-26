import classnames from "classnames"
import * as React from "react"
import { Heading } from "@kaizen/component-library"
import { ButtonProps } from "@kaizen/draft-button"
import {
  Cautionary,
  Informative,
  Negative,
  PositiveFemale,
} from "@kaizen/draft-illustration"
import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

import styles from "./ConfirmationModal.scss"

export interface ConfirmationModalProps {
  readonly isOpen: boolean
  readonly type: ModalType
  readonly title: string
  readonly onConfirm?: () => void
  readonly onDismiss: () => void
  readonly confirmLabel?: string
  readonly dismissLabel?: string
  readonly confirmWorking?: { label: string; labelHidden?: boolean }
  readonly automationId?: string
  readonly children: React.ReactNode
}

type ConfirmationModal = React.FunctionComponent<ConfirmationModalProps>
type ModalType = "positive" | "informative" | "negative" | "cautionary"

const ConfirmationModal = ({
  isOpen,
  type,
  title,
  onConfirm,
  confirmLabel = "Confirm",
  dismissLabel = "Cancel",
  confirmWorking,
  automationId,
  children,
  ...props
}: ConfirmationModalProps) => {
  const onDismiss = confirmWorking ? undefined : props.onDismiss

  const footerActions: ButtonProps[] = []
  if (onConfirm) {
    const confirmAction = { label: confirmLabel, onClick: onConfirm }
    const workingProps = confirmWorking
      ? {
          working: true,
          workingLabel: confirmWorking.label,
          workingLabelHidden: confirmWorking.labelHidden,
        }
      : {}

    footerActions.push({ ...confirmAction, ...workingProps })
  }

  footerActions.push({
    label: dismissLabel,
    onClick: onDismiss,
    disabled: !!confirmWorking,
  })

  const getIllustration = (modalType: ModalType) => {
    switch (modalType) {
      case "positive":
        return <PositiveFemale alt="" isAnimated loop={false} />
      case "informative":
        return <Informative alt="" isAnimated loop={false} />
      case "negative":
        return <Negative alt="" isAnimated loop={false} />
      case "cautionary":
        return <Cautionary alt="" isAnimated loop={false} />
      default:
        return <PositiveFemale alt="" isAnimated loop={false} />
    }
  }

  return (
    <GenericModal
      isOpen={isOpen}
      onEscapeKeyup={onDismiss}
      onOutsideModalClick={onDismiss}
      automationId={automationId}
    >
      <div className={styles.modal}>
        <ModalHeader unpadded onDismiss={onDismiss}>
          <div
            className={classnames(styles.header, {
              [styles.cautionaryHeader]: type === "cautionary",
              [styles.informativeHeader]: type === "informative",
              [styles.negativeHeader]: type === "negative",
              [styles.positiveHeader]: type === "positive",
            })}
          >
            <div className={styles.iconContainer}>
              <div className={styles.spotIcon}>{getIllustration(type)}</div>
            </div>
            <ModalAccessibleLabel>
              <Heading tag="h1" variant="heading-1">
                {title}
              </Heading>
            </ModalAccessibleLabel>
          </div>
        </ModalHeader>
        <ModalBody unpadded>
          <div className={styles.body}>
            <ModalAccessibleDescription>{children}</ModalAccessibleDescription>
          </div>
        </ModalBody>
        <ModalFooter
          actions={footerActions}
          appearance={type === "negative" ? "destructive" : "primary"}
          automationId={automationId}
        />
      </div>
    </GenericModal>
  )
}

export default ConfirmationModal
