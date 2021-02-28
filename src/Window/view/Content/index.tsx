import React from 'react'

export function Content (props) {
    const classes = [ 'w-full', 'h-full', 'bg-gray' ]
    return <div {...props} className={classes.join('')} />
}
