import React from 'react'

export function Dialog (props) {
    const classes = [ 'border-solid', 'rounded-lg' ]
    return <div {...props} className={classes.join('')} />
}
