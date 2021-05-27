import React, {
    Children,
    isValidElement,
    ReactNode,
    useState,
    MouseEvent,
    FunctionComponent
} from 'react'
import { mixClassNames } from '../utils/mixClassNames'
import { style } from '../utils/style'

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
// Button group
//

interface ButtonGroup_Props {
    className?: string
}

// Constants
const UNCLICKED = -1
const GET_NUM = (eventTarget: EventTarget) =>
    (eventTarget as HTMLElement).hasAttribute('num') &&
    Number((eventTarget as HTMLElement).getAttribute('num'))

// React component
export const Button: FunctionComponent<ButtonGroup_Props> = (props) => {
    // Return styled component
    const button_classes = style(button_styles, conditional_button_styles, props)
    return (
        <div {...props} className={button_classes}>
            {props.children}
        </div>
    )
}

interface ButtonGroup_Props {
    className?: string
}

export const ButtonGroup: FunctionComponent<ButtonGroup_Props> = ({
    className,
    children,
    ...props
}) => {
    const numChildren = Children.count(children)
    const [ isClicked, setIsClicked ] = useState(UNCLICKED)

    const clickButton = (ev: MouseEvent) => {
        const num = GET_NUM(ev.target)
        if (!isNaN(num) && num > UNCLICKED) {
            setIsClicked(num === isClicked ? UNCLICKED : num)
        }
    }
    const maybeMoveClick = (ev: MouseEvent) => {
        if (isClicked !== UNCLICKED) {
            const num = GET_NUM(ev.target)
            if (num < numChildren && num > UNCLICKED) {
                setIsClicked(num)
            }
            else {
                ev.stopPropagation()
            }
        }
        else {
            ev.stopPropagation()
        }
    }

    const classes = [ 'no-drag' ]

    const toButton = (child: ReactNode, i: number) => {
        return isValidElement(child) ? (
            <child.type {...child.props} clicked={i === isClicked} num={i} key={i} />
        ) : (
            child
        )
    }
    const mappedChildren = Children.map(children, toButton)

    return (
        <div
            {...props}
            className={mixClassNames(className, classes)}
            onClick={clickButton}
            onMouseMove={maybeMoveClick}
        >
            {mappedChildren}
        </div>
    )
}
