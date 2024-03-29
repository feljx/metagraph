import React, { FunctionComponent } from 'react'
import { MainMenu } from './MainMenu'
import { WindowButtons } from './WindowButtons'
import { Button } from '../components/Buttons'
import { mixClassNames } from '../utils/mixClassNames'
import { StyledProps } from '../types/StyledProps'

export const TitleBar: FunctionComponent<StyledProps> = ({ className, ...props }) => {
    const classes = [
        'drag',
        'bg-gray-darkest',
        'flex justify-between',
        'text-stone-light'
    ]

    return (
        <div {...props} className={mixClassNames(className, classes)}>
            <MainMenu className="no-drag ml-0.5" />
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
        <div {...props} className={mixClassNames(className, classes)}>
            {children}
        </div>
    )
}
