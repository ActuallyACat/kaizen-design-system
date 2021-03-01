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

// START TEMPORARY LOTTIEFILE STUFF --------------------------------------------

// eslint-disable-next-line
const { Player } = require("@lottiefiles/react-lottie-player")

const lottieFiles: Record<ModalType, any> = {
  cautionary: require("../lottiefiles/Cautionary_Timed_v02.lottie"),
  informative: require("../lottiefiles/Info_Timed_v02.lottie"),
  negative: require("../lottiefiles/Negative_Timed_v02.lottie"),
  positive: require("../lottiefiles/Positive_Timed_v01.lottie"),
  // roadblock: require("../lottiefiles/Roadblock_Timed_v03.lottie"),
}

const getIcon = (type: ModalType) => (
  <Player
    autoplay
    loop
    src={lottieFiles[type]}
    style={{ height: "300px", width: "300px" }}
  />
)

// END TEMPORARY LOTTIEFILE STUFF ----------------------------------------------

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
              <div className={styles.spotIcon}>{getIcon(type)}</div>
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
