import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { TodoCreated } from '../events/TodoCreated'

@Command({
  authorize: "all"
})
export class CreateTodo {
  public constructor(
    readonly id: UUID,
    readonly description: string
  ) {}

  public handle(register: Register): void {
    register.events( new TodoCreated(this.id, this.description, new Date(), false, new Date()) )
  }
}
