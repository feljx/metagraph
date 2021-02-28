import React from 'react'
import { Button } from '../Button'

export function ApplicationMenu (props) {
    const classes = [].join(' ')
    return (
        <div {...props} className={classes}>
            <Button>File</Button>
            <Button>Edit</Button>
            <Button>View</Button>
            <Button>Settings</Button>
            <Button>Help</Button>
        </div>
    )
}
