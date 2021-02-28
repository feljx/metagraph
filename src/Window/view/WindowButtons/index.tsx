import React from 'react'

export function WindowButtons ({ children, ...props }) {
    const classes = [ 'flex', 'flex-row' ].join(' ')
    return (
        <div {...props} className={classes}>
            {children}
        </div>
    )
}
