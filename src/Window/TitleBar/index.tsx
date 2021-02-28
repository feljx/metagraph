import React from 'react'

export function TitleBar ({ children, ...props }) {
    const classes = [ 'border-solid', 'rounded-lg' ]
    return (
        <div {...props} className={classes.join('')}>
            {children}
        </div>
    )
}
