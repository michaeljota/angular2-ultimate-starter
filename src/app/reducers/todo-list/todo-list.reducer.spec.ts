import { O } from './../../utils';

import { TodoListActions } from './../../actions';
import { TODOS_REDUCER, TodosState } from './todo-list.reducer';

describe('Todos Reducer', () => {
  it('should add a todo', () => {
    const originalState: TodosState = [];
    O.deepFreeze<TodosState>(originalState);

    const expectedState: TodosState = [
      {
        id: 0,
        text: 'Learn @ngrx',
        completed: false,
      },
    ];

    expect(
      TODOS_REDUCER(
        originalState,
        new TodoListActions().addTodo(
          {
            id: 0,
            text: 'Learn @ngrx',
          },
        ),
      ),
    ).toEqual(expectedState);
  });

  it('should toggle todo', () => {
    const originalState: TodosState = [
      {
        id: 0,
        text: 'Learn @ngrx',
        completed: false,
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: false,
      },
    ];
    O.deepFreeze(originalState);

    const expectedState: TodosState = [
      {
        id: 0,
        text: 'Learn @ngrx',
        completed: false,
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: true,
      },
    ];
    O.deepFreeze(expectedState);

    expect(
      TODOS_REDUCER(originalState, new TodoListActions().toggleTodo(1)),
    ).toEqual(expectedState);
  });

});
