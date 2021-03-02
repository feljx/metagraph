import React, { FunctionComponent } from 'react'
import { Menu } from '../Menu'
import { WindowButtons } from '../WindowButtons'
import { Button } from '../../templates/ButtonToggle'
import { styledClassName } from '../../utils/styledClassName'
import { StyledProps } from '../../types/StyledProps'

export const TitleBar: FunctionComponent<StyledProps> = ({ className, ...props }) => {
    const classes = [
        'drag',
        'bg-gray-darker',
        'flex justify-between',
        'text-stone-light'
    ]

    return (
        <div {...props} className={styledClassName(className, classes)}>
            <Menu className="no-drag ml-0.5" />
            <Title className="select-none">metagraph</Title>
            {/* <WindowButtons className="no-drag">
                <Button>min</Button>
                <Button>max</Button>
                <Button>X</Button>
            </WindowButtons> */}
        </div>
    )
}

export const Title: FunctionComponent<StyledProps> = ({
    children,
    className,
    ...props
}) => {
    const classes = [ 'p-1' ]

    return (
        <div {...props} className={styledClassName(className, classes)}>
            {children}
        </div>
    )
}