import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesListComponent } from './videogames-list.component';

describe('VideogamesListComponent', () => {
  let component: VideogamesListComponent;
  let fixture: ComponentFixture<VideogamesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideogamesListComponent]
    });
    fixture = TestBed.createComponent(VideogamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
