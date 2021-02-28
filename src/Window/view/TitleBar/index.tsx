import React from 'react'

import { ApplicationMenu } from '../ApplicationMenu'
import { WindowButtons } from '../WindowButtons'
import { Title } from '../Title'
import { Button } from '../Button'

export function TitleBar ({ className, ...props }) {
    const classes = [
        className,
        'bg-yellow',
        'flex',
        'justify-between',
        'col-span-full'
    ].join(' ')
    return (
        <div {...props} className={classes}>
            <ApplicationMenu />
            <Title>metagraph</Title>
            <WindowButtons>
                <Button>min</Button>
                <Button>max</Button>
                <Button>X</Button>
            </WindowButtons>
        </div>
    )
}
