import React from "react"
import cx from "classnames"
import arrowBackward from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import arrowForward from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import { Icon } from "@kaizen/component-library"
import { PageIndicator } from "./PageIndicator"
import { TruncateIndicator } from "./TruncateIndicator"
import styles from "./Pagination.scss"
import { createRange } from "./utils"

export interface PaginationProps {
  currentPage: number
  pageCount: number
  ariaLabelNextPage: string
  ariaLabelPreviousPage: string
  ariaLabelPage: string
  onPageChange: (newPage: number) => void
}

export enum PageAction {
  PREV = "prev",
  NEXT = "next",
}

export const Pagination = ({
  currentPage = 1,
  pageCount,
  ariaLabelNextPage,
  ariaLabelPreviousPage,
  ariaLabelPage,
  onPageChange,
}: PaginationProps) => {
  // Click event for all pagination buttons (next, prev, and the actual numbers)
  const handleButtonClick = (newPage: number | PageAction) => {
    if (newPage === PageAction.PREV) {
      onPageChange(currentPage - 1)
      return
    }
    if (newPage === PageAction.NEXT) {
      onPageChange(currentPage + 1)
      return
    }
    onPageChange(newPage)
  }

  const paginationIndicator = (page: number) => (
    <PageIndicator
      key={page}
      page={page}
      selected={currentPage === page}
      ariaLabelPage={ariaLabelPage}
      onPageClick={handleButtonClick}
    />
  )

  const pagination = () => {
    const items: JSX.Element[] = []

    const boundaryPagesRange = 1
    const siblingPagesRange = 1

    // truncateSize is 1 now but could be 0 if we add the ability to hide it.
    const truncateSize = 1

    const showAllPages =
      1 + 2 * truncateSize + 2 * siblingPagesRange + 2 * boundaryPagesRange >=
      pageCount

    // Simplify generation of pages if number of available items is equal or greater than total pages to show
    if (showAllPages) {
      return createRange(1, pageCount).map(paginationIndicator)
    } else {
      // Calculate group of first pages
      const firstPagesStart = 1
      const firstPagesEnd = boundaryPagesRange
      const firstPages = createRange(firstPagesStart, firstPagesEnd).map(
        paginationIndicator
      )

      // Calculate group of last pages
      const lastPagesStart = pageCount + 1 - boundaryPagesRange
      const lastPagesEnd = pageCount
      const lastPages = createRange(lastPagesStart, lastPagesEnd).map(
        paginationIndicator
      )

      // Calculate group of main pages
      const mainPagesStart = Math.min(
        Math.max(
          currentPage - siblingPagesRange,
          firstPagesEnd + truncateSize + 1
        ),
        lastPagesStart - truncateSize - 2 * siblingPagesRange - 1
      )
      const mainPagesEnd = mainPagesStart + 2 * siblingPagesRange
      const mainPages = createRange(mainPagesStart, mainPagesEnd).map(
        paginationIndicator
      )

      // Add group of first pages
      items.push(...firstPages)

      // Calculate and add truncate before group of main pages
      const firstEllipsisPageNumber = mainPagesStart - 1
      const showPageInsteadOfFirstEllipsis =
        firstEllipsisPageNumber === firstPagesEnd + 1
      items.push(
        showPageInsteadOfFirstEllipsis ? (
          paginationIndicator(firstEllipsisPageNumber)
        ) : (
          <TruncateIndicator key={firstEllipsisPageNumber} />
        )
      )

      // Add group of main pages
      items.push(...mainPages)

      // Calculate and add truncate after group of main pages
      const secondEllipsisPageNumber = mainPagesEnd + 1
      const showPageInsteadOfSecondEllipsis =
        secondEllipsisPageNumber === lastPagesStart - 1
      items.push(
        showPageInsteadOfSecondEllipsis ? (
          paginationIndicator(secondEllipsisPageNumber)
        ) : (
          <TruncateIndicator key={secondEllipsisPageNumber} />
        )
      )

      // Add group of last pages
      items.push(...lastPages)
    }
    return items
  }

  const previousPageDisabled = currentPage <= 1
  const nextPageDisabled = currentPage >= pageCount

  return (
    <nav className={styles.container}>
      <button
        className={cx(styles.arrowIconWrapper)}
        aria-label={ariaLabelPreviousPage}
        disabled={previousPageDisabled}
        onClick={() => handleButtonClick(PageAction.PREV)}
      >
        <Icon icon={arrowBackward} role="presentation" />
        <div className={styles.pageIndicatorFocusRing} />
      </button>
      <div className={styles.pagesIndicatorWrapper}>{pagination()}</div>
      <button
        className={cx(styles.arrowIconWrapper, {
          [styles.arrowIconWrapperDisabled]: nextPageDisabled,
        })}
        aria-label={ariaLabelNextPage}
        disabled={nextPageDisabled}
        onClick={() => handleButtonClick(PageAction.NEXT)}
      >
        <Icon icon={arrowForward} role="presentation" />
        <div className={styles.pageIndicatorFocusRing} />
      </button>
    </nav>
  )
}
