import React, { Children, isValidElement, ReactNode, useState, MouseEvent } from 'react'
import { StyledProps } from '../types/StyledProps'
import { mixClassNames } from '../utils/mixClassNames'

//
// Button menu
//

const UNCLICKED = ''
const GET_NUM = (eventTarget: EventTarget) => {
    const num = (eventTarget as HTMLElement).getAttribute('num')
    if (num.includes('button')) {
        return num
    }
}

export const ButtonMenu = ({ className, children, ...props }: StyledProps) => {
    const numChildren = Children.count(children)
    const [ clicked, setClicked ] = useState(UNCLICKED)

    const clickButton = (ev: MouseEvent) => {
        const num = GET_NUM(ev.target)
        if (num) {
            setClicked(num === clicked ? UNCLICKED : num)
        }
    }
    const maybeMoveClick = (ev: MouseEvent) => {
        ev.stopPropagation()
        if (clicked !== UNCLICKED) {
            const num = GET_NUM(ev.target)
            if (num) {
                setClicked(num)
            }
        }
    }

    const classes = [ 'no-drag' ]

    const toButton = (child: ReactNode, i: number) => {
        const num = `button${i}`
        return isValidElement(child) ? (
            <child.type {...child.props} clicked={clicked === num} num={num} key={i} />
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

//
// Dropdown menu
//

export interface DropdownMenuProps extends StyledProps {
    itemProps: DropdownItemProps[]
}

export const DropdownMenu = ({
    children,
    className,
    itemProps,
    ...props
}: DropdownMenuProps) => {
    const classes = [
        '-mx-4 py-1',
        'flex flex-col',
        'rounded-lg',
        'cursor-default select-none'
    ]

    const items = itemProps.map((props, idx) => <DropdownItem {...props} key={idx} />)

    return (
        <div {...props} className={mixClassNames(className, classes)} onClick={() => {}}>
            {items}
        </div>
    )
}

//
// Dropdown menu item
//

export interface DropdownItemProps extends StyledProps {
    onClick?: Function
}

export const DropdownItem = ({ children, className, ...props }: StyledProps) => {
    const classes = [
        'px-4 -mx-2 py-1.5 pr-16',
        'cursor-default select-none',
        'rounded-md',
        'hover:bg-gray'
    ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
        </div>
    )
}
