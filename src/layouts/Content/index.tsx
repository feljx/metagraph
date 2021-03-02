import React, { FunctionComponent } from 'react'
import { StyledProps } from '../../types/StyledProps'
import { mixClassNames } from '../../utils/mixClassNames'

export const Content: FunctionComponent<StyledProps> = ({ className, ...props }) => {
    const classes = [ '' ]

    return <div {...props} className={mixClassNames(className, classes)} />
}
