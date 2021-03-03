import React, { FunctionComponent } from 'react'

interface WindowButtonsProps {
    className?: string
}

export const WindowButtons: FunctionComponent<WindowButtonsProps> = ({
    children,
    ...props
}) => {
    const className = 'flex flex-row'
    if (props.className) props.className += ' ' + className
    else props.className = className

    return <div {...props}>{children}</div>
}
