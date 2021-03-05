import React, { FunctionComponent, useState } from 'react'
import { mixClassNames } from '../utils/mixClassNames'
import { ContextMenu } from './ContextMenu'

const commonButtonStyles = [
    'py-2 px-4 -mx-1',
    'rounded-md',
    'leading-none',
    'transition duration-100',
    'cursor-default select-none',
]
const backgroundStyle = 'bg-gray'
const hoverBackgroundStyle = 'hover:bg-gray-dark'



interface ButtonProps {
    className?: string
    clicked?: boolean
}

export const Button: FunctionComponent<ButtonProps> = ({
    className,
    children,
    clicked,
    ...props
}) => {
    const classes = [
        ...commonButtonStyles,
        clicked ? backgroundStyle : hoverBackgroundStyle

    ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
        </div>
    )
}



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
        ...commonButtonStyles,
        clicked ? backgroundStyle : hoverBackgroundStyle
    ]
    const menuClasses = [
        'px-3 -mx-3 my-2',
        'bg-gray-darkest',
        clicked ? 'absolute' : 'hidden'
    ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
            <ContextMenu menuData={menuData} className={mixClassNames('', menuClasses)} />
        </div>
    )
}
