import { NAVBAR_COMPONENTS } from './navbar';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';
import { FooterComponent } from './footer/footer.component';
import { StoreStateComponent } from './store-state/store-state.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { VisibleTodoListComponent } from './visible-todo-list/visible-todo-list.component';

export const COMPONENTS = [
  ...NAVBAR_COMPONENTS,
  AddTodoComponent,
  FilterButtonComponent,
  FooterComponent,
  StoreStateComponent,
  TodoItemComponent,
  VisibleTodoListComponent,
];
