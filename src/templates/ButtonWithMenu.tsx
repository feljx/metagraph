import React, { FunctionComponent, useState } from 'react'
import { mixClassNames } from '../utils/mixClassNames'
import { ContextMenu } from './ContextMenu'

interface ButtonWithMenuProps {
    className?: string
    clicked?: boolean
    menuData: string[]
}

export const ButtonWithMenu: FunctionComponent<ButtonWithMenuProps> = ({
    className,
    children,
    clicked,
    menuData,
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
        'px-3 -mx-3 my-2',
        'bg-gray-darker',
        clicked ? 'absolute' : 'hidden'
    ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
            <ContextMenu menuData={menuData} className={mixClassNames('', menuClasses)} />
        </div>
    )
}
