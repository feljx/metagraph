import { WindowController } from './controller'
import { WindowModel } from './model'

import '../assets/tailwind.css'

const model = new WindowModel()
const controller = new WindowController(model)
controller.render()
