import React from 'react'

export function RouteBrowser ({ ...props }) {
    const classes = []
    return <div {...props} className={classes.join('')} />
}
