import React from 'react'

import { RouteBrowser } from '../RouteBrowser'
import { SidePanelMenu } from '../SidePanelMenu'

export function TopBar ({ ...props }) {
    const classes = []
    return (
        <div {...props} className={classes.join('')}>
            <SidePanelMenu />
            <RouteBrowser />
        </div>
    )
}
