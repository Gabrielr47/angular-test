import { Observable, from } from 'rxjs';
import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  // it('should set todos property with the items returned from the server', () => {
  //   spyOn(service, 'getTodos').and.callFake(() => {
  //     return Observable.from([1, 2, 3]);
  //   });

  //   component.ngOnInit();

  //   expect(component.todos.length).toBeGreaterThan(0);
  // });
});
