import { render } from 'react-dom'
import { createElement } from 'react'
import { Controller } from '../abstract/Controller'
import { WindowView } from './view'
import { WindowModel } from './model'
import { BrowserWindow } from 'electron'

export class WindowController extends Controller {
    private electronWindow: BrowserWindow

    constructor (private model: WindowModel) {
        super()
    }

    render () {
        const domContainer = document.getElementById('react-container')
        render(createElement(WindowView), domContainer)
    }
}
