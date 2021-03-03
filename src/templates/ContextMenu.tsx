import React, { FunctionComponent } from 'react'
import { mixClassNames } from '../utils/mixClassNames'

interface StyledProps {
    className?: string
}

interface ContextMenuProps extends StyledProps {
    menuData: string[]
}

export const ContextMenu: FunctionComponent<ContextMenuProps> = ({
    children,
    className,
    menuData,
    ...props
}) => {
    const classes = [ 'flex flex-col', 'rounded-md', 'cursor-default select-none' ]

    const items = menuData.map((label, idx) => <MenuItem key={idx}>{label}</MenuItem>)

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {items}
        </div>
    )
}

export const MenuItem: FunctionComponent<StyledProps> = ({
    children,
    className,
    ...props
}) => {
    const classes = [ 'cursor-default select-none' ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
        </div>
    )
}
