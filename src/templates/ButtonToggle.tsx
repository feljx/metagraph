import React, { FunctionComponent, useState } from 'react'
import { mixClassNames } from '../utils/mixClassNames'

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
    // const [ clicked, setClicked ] = useState(false)
    // const toggleClicked = () => setClicked(!clicked)

    const classes = [
        'py-2 px-3 -mx-0.5',
        'rounded-md',
        'leading-none',
        'transition duration-100',
        'cursor-default select-none',
        clicked ? 'bg-gray' : 'hover:bg-gray-dark  '
    ]

    return (
        <div
            {...props}
            className={mixClassNames(className, classes)}
            // onClick={toggleClicked}
        >
            {children}
        </div>
    )
}
