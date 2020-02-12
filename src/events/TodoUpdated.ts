import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class TodoUpdated {
  public constructor(
    readonly id: UUID,
    readonly description?: string,
    readonly done?: boolean
  ) {}

  public entityID(): UUID {
    return this.id
  }
}
