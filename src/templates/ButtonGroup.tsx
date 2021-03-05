import React, { Children, isValidElement, ReactNode, useState, MouseEvent, FunctionComponent } from 'react'
import { mixClassNames } from '../utils/mixClassNames'

interface ButtonGroupProps {
    className?: string
}

const UNCLICKED = -1
const GET_NUM = (eventTarget: EventTarget) =>
    (eventTarget as HTMLElement).hasAttribute('num') && Number((eventTarget as HTMLElement).getAttribute('num'))

export const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({ className, children, ...props }) => {
    const numChildren = Children.count(children)
    const [ clicked, setClicked ] = useState(UNCLICKED)

    const clickButton = (ev: MouseEvent) => {
        const num = GET_NUM(ev.target)
        if (!isNaN(num) && num > UNCLICKED) {
            setClicked(num === clicked ? UNCLICKED : num)
        }
    }
    const maybeMoveClick = (ev: MouseEvent) => {
        if (clicked !== UNCLICKED) {
            const num = GET_NUM(ev.target)
            if (num < numChildren && num > UNCLICKED) {
                setClicked(num)
            } else {
                ev.stopPropagation()
            }
        } else {
            ev.stopPropagation()
        }
    }

    const classes = [ 'no-drag' ]

    const toButton = (child: ReactNode, i: number) => {
        return isValidElement(child) ? <child.type {...child.props} clicked={i === clicked} num={i} key={i} /> : child
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
