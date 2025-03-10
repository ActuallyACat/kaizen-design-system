import * as React from "react"
import { v4 } from "uuid"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"
import { addToastNotification } from "./ToastNotificationManager"
import { ToastNotificationWithOptionals } from "./types"

type Props = Omit<ToastNotificationWithOptionals, "message"> & {
  hideCloseIcon?: boolean
  children: React.ReactNode
}

const ToastNotification = ({
  id,
  hideCloseIcon = false,
  autohide = true,
  autohideDelay = "short",
  ...otherProps
}: Props) => {
  const [localID] = React.useState(id || v4())
  const persistent = autohide && hideCloseIcon

  addToastNotification({
    id: localID,
    type: otherProps.type,
    title: otherProps.title,
    automationId: otherProps.automationId,
    autohide,
    autohideDelay,
    message: otherProps.children,
    persistent,
    onHide: otherProps.onHide,
  })

  return null
}

export default withDeprecatedComponent(ToastNotification, {
  warning:
    "ToastNotification component API is deprecated. Use addToastNotification from @kaizen/notification instead.",
})
