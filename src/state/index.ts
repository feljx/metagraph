import { Config } from './Config'
import { UI } from './UI'
import { History } from './History'

//
// BoxedState
//

export class BoxedState {
    public config = new Config()
    public ui = new UI()
    public history = new History()
}

// State takes in local user's saved app data (Application Support / AppData)
// State takes in default UI config
// State takes in default Server config
