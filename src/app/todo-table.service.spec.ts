import { TestBed } from '@angular/core/testing';

import { TodoTableService } from './todo-table.service';

describe('TodoTableService', () => {
  let service: TodoTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
