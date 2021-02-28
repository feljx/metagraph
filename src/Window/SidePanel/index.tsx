import React from 'react'

export function SidePanel ({ children, ...props }) {
    const classes = []
    return (
        <div {...props} className={classes.join('')}>
            {children}
        </div>
    )
}
