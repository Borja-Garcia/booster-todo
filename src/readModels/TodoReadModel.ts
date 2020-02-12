import { ReadModel, Projection } from '@boostercloud/framework-core';
import { UUID } from '@boostercloud/framework-types';
import { Todo } from '../entities/todo';

@ReadModel
export class TodoReadModel {
  public constructor(
    readonly id: UUID,
    readonly description: string,
    readonly createdAt: Date,
    readonly done: boolean,
    readonly doneAt: Date
  ) {}

  @Projection(Todo, 'id')
  public static updateWithCart(todo: Todo, oldCartReadModel?: TodoReadModel): TodoReadModel {
    return new TodoReadModel(todo.id, todo.description, todo.createdAt, todo.done, todo.doneAt)
  }
}