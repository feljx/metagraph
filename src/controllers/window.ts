import { render } from 'react-dom'
import { Controller } from './index'
import { WindowView } from '../views'

export class WindowController extends Controller {
    render = () => {
        // Render app
        const domContainer = document.getElementById('reactContainer')
        render(<Container />, domContainer)
    }

    createWindow = () => {
        const window = new BrowserWindow(options)
        window.loadFile('index.html')
        this.windows.push(window)
    }
}
