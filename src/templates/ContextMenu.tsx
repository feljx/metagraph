import React, { FunctionComponent } from 'react'
import { mixClassNames } from '../utils/mixClassNames'

interface StyledProps {
    className?: string
}

export const ContextMenu: FunctionComponent<StyledProps> = ({
    children,
    className,
    ...props
}) => {
    const classes = [ '' ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
        </div>
    )
}

export const MenuItem: FunctionComponent<StyledProps> = ({
    children,
    className,
    ...props
}) => {
    const classes = [ '' ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
        </div>
    )
}
