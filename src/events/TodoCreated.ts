import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class TodoCreated {
  public constructor(
    readonly id: UUID,
    readonly description: string,
    readonly createdAt: Date,
    readonly done: boolean,
    readonly updatedAt: Date,
  ) {}

  public entityID(): UUID {
    return this.id
  }
}
