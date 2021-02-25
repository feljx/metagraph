import React from 'react'

export function MetaPanel ({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export function MetaIcon ({ vertical: bool, ...props }) {
    return <span>{props.children}</span>
}
