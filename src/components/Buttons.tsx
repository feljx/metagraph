import React, { FunctionComponent, useState } from 'react'
import { style } from '../utils/style'
import { ContextMenu } from './ContextMenu'

//
// Styles
//

const button_styles = `
    py-2 px-4 -mx-1
    rounded-md
    leading-none
    transition duration-100
    cursor-default select-none
`
const conditional_button_styles = {
    isClicked: (x: boolean) => (x ? 'bg-gray' : 'hover:bg-gray-dark')
}
const menu_styles = `
    px-3 -mx-3 my-2
    bg-gray-darkest
`
const conditional_menu_styles = {
    isClicked: (x: boolean) => (x ? 'absolute' : 'hidden')
}

//
// Button
//

interface Button_Props {
    className?: string
    isClicked?: boolean
}

// React component
const Button: FunctionComponent<Button_Props> = (props) => {
    // Return styled component
    const button_classes = style(button_styles, conditional_button_styles, props)
    return (
        <div {...props} className={button_classes}>
            {props.children}
        </div>
    )
}

//
// Button with menu
//

interface ButtonWithMenu_Props {
    className?: string
    isClicked?: boolean
    menuData: string[]
}

// React component
const ButtonWithMenu: FunctionComponent<ButtonWithMenu_Props> = ({
    className,
    children,
    isClicked,
    menuData,
    ...props
}) => {
    // Return styled component
    const button_classes = style(button_styles, conditional_button_styles, props)
    const menu_classes = style(menu_styles, conditional_menu_styles, props)
    return (
        <div {...props} className={button_classes}>
            {children}
            <ContextMenu className={menu_classes} menuData={menuData} />
        </div>
    )
}

//
// Exports
//

export { Button, ButtonWithMenu }
