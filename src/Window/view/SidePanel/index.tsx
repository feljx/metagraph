import React from 'react'

import { ProjectInfo } from '../ProjectInfo'

export function SidePanel ({ ...props }) {
    const classes = [
        'w-1/4',
        'min-w-0',
        'flex-nowrap',
        'bg-gray-dark',
        'border-gray-darkest',
        'border-r-2'
    ]
    return (
        <div {...props} className={classes.join('')}>
            <ProjectInfo />
        </div>
    )
}
