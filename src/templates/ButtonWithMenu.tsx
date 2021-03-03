import React, { FunctionComponent, useState } from 'react'
import { mixClassNames } from '../utils/mixClassNames'
import { ContextMenu } from './ContextMenu'

interface ButtonWithMenuProps {
    className?: string
    clicked?: boolean
    menu: FunctionComponent
}

export const ButtonWithMenu: FunctionComponent<ButtonWithMenuProps> = ({
    className,
    children,
    clicked,
    menu,
    ...props
}) => {
    const classes = [
        'py-2 px-3 -mx-0.5',
        'rounded-md',
        'leading-none',
        'transition duration-100',
        'cursor-default select-none',
        clicked ? 'bg-gray' : 'hover:bg-gray-dark'
        // clicked ? ""
    ]
    const menuClasses = [
        'flex flex-col',
        'bg-green-light',
        clicked ? 'relative' : 'hidden'
    ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
            <menu className={mixClassNames('', menuClasses)} />
        </div>
    )
}
