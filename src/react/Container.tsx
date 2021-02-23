import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import { MetaIcon, MetaPanel } from './MetaPanel'
import { MetaCanvas } from './MetaProjection'
import { defaultConfig, ConfigState } from '../state/Config'

// Render app
const domContainer = document.getElementById('reactContainer')
render(<Container />, domContainer)

// App Component (Main Layout)
function Container ({ state: IState, ...props }) {
    return (
        <Fragment>
            <MetaCanvas config={defaultConfig} />
        </Fragment>
    )
}
