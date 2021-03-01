import classnames from "classnames"
import * as React from "react"

import { Heading } from "@kaizen/component-library"
import {
  Cautionary,
  Informative,
  Negative,
  PositiveFemale,
} from "@kaizen/draft-illustration"

import { ButtonProps } from "@kaizen/draft-button"
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

// START TEMPORARY MP4 STUFF ---------------------------------------------------

const mp4File: Record<ModalType, any> = {
  cautionary: require("../videos/Cautionary_Timed_v02.mp4").default,
  informative: require("../videos/Info_Timed_v02.mp4").default,
  negative: require("../videos/Negative_Timed_v02.mp4").default,
  positive: require("../videos/Positive_Timed_v01.mp4").default,
  // roadblock: require("../videos/Roadblock_Timed_v03.mp4").default,
}

const getIcon = (type: ModalType) => mp4File[type]

// END TEMPORARY MP4 STUFF -----------------------------------------------------

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

  return (
    <GenericModal
      isOpen={isOpen}
      onEscapeKeyup={onDismiss}
      onOutsideModalClick={onDismiss}
      automationId={automationId}
    >
      <div className={styles.modal}>
        <ModalHeader unpadded reversed onDismiss={onDismiss}>
          <div
            className={classnames(styles.header, {
              [styles.cautionaryHeader]: type === "cautionary",
              [styles.informativeHeader]: type === "informative",
              [styles.negativeHeader]: type === "negative",
              [styles.positiveHeader]: type === "positive",
            })}
          >
            <div className={styles.iconContainer}>
              <video className={styles.spotIcon} autoPlay src={getIcon(type)} />
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
