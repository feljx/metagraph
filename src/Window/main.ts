import { WindowController } from './controller'
import { WindowModel } from './model'

import '../assets/tailwind.css'

const model = new WindowModel()
const controller = new WindowController(model)
controller.render()

declare global {
    interface Window {
        api: {
            send: (channel: string, data: any) => void
            receive: (channel: string, callback: (data: any) => void) => void
        }
    }
}

window.api.receive('fromMain', (data) => {
    console.log('Received stuff from main process', data)
})
window.api.send('toMain', 'some data')
