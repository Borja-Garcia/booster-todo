import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { TodoUpdated } from '../events/TodoUpdated'

@Command({
  authorize: "all"
})
export class UpdateTodo {
  public constructor(
    readonly id: UUID,
    readonly description: string,
    readonly done: boolean,
  ) {}

  public handle(register: Register): void {
    register.events( new TodoUpdated(this.id, this.description, this.done) )
  }
}
