import { ApplicationController } from './controller'
import { ApplicationModel } from './model'

const model = new ApplicationModel()
const controller = new ApplicationController(model)
