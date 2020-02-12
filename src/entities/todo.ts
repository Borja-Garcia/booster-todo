import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { TodoUpdated } from '../events/TodoUpdated'
import { TodoCreated } from '../events/TodoCreated'

@Entity
export class Todo {
  public constructor(
    public id: UUID,
    readonly description: string,
    readonly createdAt: Date,
    readonly done: boolean,
    readonly doneAt: Date
  ) {}

  @Reduces(TodoUpdated)
  public static projectTodoUpdated(event: TodoUpdated, currenttodo?: Todo): Todo {
    return new Todo(
      currenttodo?.id || event.id,
      currenttodo?.description || event.description || "No description",
      currenttodo?.createdAt || new Date(),
      currenttodo?.done || event.done || false,
      currenttodo?.doneAt || new Date()
    )
  }

  @Reduces(TodoCreated)
  public static projectTodoCreated(event: TodoUpdated, currenttodo?: Todo): Todo {
    return new Todo(
      currenttodo?.id || event.id,
      currenttodo?.description || event.description || "No description",
      currenttodo?.createdAt || new Date(),
      currenttodo?.done || event.done || false,
      currenttodo?.doneAt || new Date()
    )
  }

}
