import React from 'react'

export function Button ({ children, ...props }) {
    const classes = []
    return (
        <div {...props} className={classes.join(' ')}>
            {children}
        </div>
    )
}
