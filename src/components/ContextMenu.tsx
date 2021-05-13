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
    const classes = [ 'flex flex-col', 'rounded-lg', 'cursor-default select-none' ]

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
    const classes = [ 'py-1.5 pl-4 pr-16 -mx-4', 'cursor-default select-none' ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
        </div>
    )
}
