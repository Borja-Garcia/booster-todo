import { Booster } from '@boostercloud/framework-core'
import { BoosterConfig } from '@boostercloud/framework-types'

Booster.configure((config: BoosterConfig): void => {
  config.appName = 'theam-bgg-todo-test'
})
