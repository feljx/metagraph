import React, { FunctionComponent } from 'react'
import { StyledProps } from '../../types/StyledProps'
import { styledClassName } from '../../utils/styledClassName'

export const Content: FunctionComponent<StyledProps> = ({ className, ...props }) => {
    const classes = [ '' ]

    return <div {...props} className={styledClassName(className, classes)} />
}
