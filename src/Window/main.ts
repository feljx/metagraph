import { WindowController } from './controller'
import { WindowModel } from './model'

const model = new WindowModel()
const controller = new WindowController(model)
controller.render()
