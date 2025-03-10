import React, { useState, useEffect, useRef } from "react"
import cx from "classnames"
import { Icon } from "@kaizen/component-library"
import { Textfit } from "react-textfit"
import userIcon from "@kaizen/component-library/icons/user.icon.svg"
import styles from "./styles.module.scss"

type AvatarSizes = "small" | "medium" | "large" | "xlarge"

const getInitials: (fullName?: string, max2Characters?: boolean) => string = (
  fullName,
  max2Characters = false
) =>
  fullName == null
    ? ""
    : fullName
        .split(/\s/)
        .reduce((acc, name) => `${acc}${name.slice(0, 1)}`, "")
        .toUpperCase()
        .substring(0, max2Characters ? 2 : 8)

const getMaxFontSizePixels: (size: AvatarSizes) => number = size => {
  if (size === "small") return 8
  if (size === "medium") return 16
  if (size === "xlarge") return 34
  return 22
}

export interface AvatarProps {
  /**
   * We use this for the alt text of the avatar, and to derive intials when user has no avatar image.
   */
  fullName?: string
  /**
   * Default behaviour when an avatarSrc is not provided is to generate initials from the username.
   * This disables this feature and shows the generic avatar.
   * Enable this prop when there is no specific individual or group identified.
   */
  disableInitials?: boolean
  /**
   * Src for the avatar image to load, if not passed we will derive initials from the full name.
   */
  avatarSrc?: string
  /**
   * Shows a different background colour if the avatar is the current user.
   * @default "true"
   */
  isCurrentUser?: boolean
  /**
   * There are 3 fixed avatar sizes. "small" will remove border and box shadow to save space.
   * @default "medium"
   */
  size?: AvatarSizes
}

export const Avatar = ({
  fullName,
  avatarSrc,
  disableInitials,
  size = "medium",
  isCurrentUser = true,
}: AvatarProps) => {
  const [avatarState, setAvatarState] = useState<
    "none" | "error" | "loading" | "success"
  >(avatarSrc ? "loading" : "none")
  const image = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setAvatarState(avatarSrc ? "loading" : "none")
  }, [avatarSrc])

  const initials = getInitials(fullName)
  const isLongName = initials.length > 2 && size !== "small"

  const onImageFailure = () => setAvatarState("error")
  const onImageSuccess = () => setAvatarState("success")

  // if the image is cached onLoad may not trigger: https://stackoverflow.com/a/59809184
  useEffect(() => {
    if (image?.current?.complete) onImageSuccess()
  }, [image])

  const fallbackIcon = (
    <span className={styles.fallbackIcon}>
      <Icon inheritSize role="presentation" icon={userIcon} />
    </span>
  )
  return (
    <span
      className={cx(styles.wrapper, styles[size], {
        [styles.personal]:
          isCurrentUser && (avatarState === "none" || avatarState === "error"),
        [styles.otherUser]:
          !isCurrentUser && (avatarState === "none" || avatarState === "error"),
        [styles.loading]: avatarState === "loading" || avatarState === "error",
      })}
    >
      {avatarState !== "none" && (
        <img
          ref={image}
          className={styles.avatarImage}
          src={avatarSrc}
          onError={onImageFailure}
          onLoad={onImageSuccess}
          alt={fullName}
        />
      )}
      {(avatarState === "none" || avatarState === "error") &&
        (disableInitials || initials === "" ? (
          fallbackIcon
        ) : (
          <span
            className={cx(styles.initials, {
              [styles.longName]: isLongName,
            })}
          >
            {isLongName ? (
              // Only called if 3 or more initials, fits text width for long names
              <Textfit mode="single" max={getMaxFontSizePixels(size)}>
                {initials}
              </Textfit>
            ) : (
              getInitials(fullName, size === "small")
            )}
          </span>
        ))}
    </span>
  )
}
