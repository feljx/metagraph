import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import { MetaIcon, MetaPanel } from './MetaPanel'
import { MetaCanvas } from './MetaCanvas'
import { defaultConfig, IConfig } from '../config'

// Render app
const domContainer = document.getElementById('reactContainer')
render(<App />, domContainer)

// App Component (Main Layout)
function App ({ state: IState, ...props }) {
    return (
        <Fragment>
            <MetaCanvas config={defaultConfig} />
        </Fragment>
    )
}
