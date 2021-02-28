import React from 'react'

export function Title ({ children, ...props }) {
    const classes = []
    return (
        <div {...props} className={classes.join('')}>
            {children}
        </div>
    )
}
