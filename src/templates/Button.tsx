import React, { FunctionComponent, useState } from 'react'
import { StyledProps } from '../types/StyledProps'
import { mixClassNames } from '../utils/mixClassNames'
import { DropdownItemProps, DropdownMenu } from './Menu'

const commonButtonStyles = [
    'py-2 px-4 -mx-1',
    'rounded-md',
    'leading-none',
    'transition duration-100',
    'cursor-default select-none'
]
const backgroundStyle = 'bg-gray'
const hoverBackgroundStyle = 'hover:bg-gray-dark'

//
// Button
//

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

//
// Button with menu
//

interface ButtonWithMenuProps extends StyledProps {
    clicked?: boolean
    itemProps: DropdownItemProps[]
}

export const ButtonWithMenu: FunctionComponent<ButtonWithMenuProps> = ({
    className,
    children,
    clicked,
    itemProps,
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
            <DropdownMenu
                itemProps={itemProps}
                className={mixClassNames('', menuClasses)}
            />
        </div>
    )
}
