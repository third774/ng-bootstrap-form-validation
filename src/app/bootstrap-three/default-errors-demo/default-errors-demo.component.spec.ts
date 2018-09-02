import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DefaultErrorsDemoComponent } from "./default-errors-demo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("DefaultErrorsDemoComponent", () => {
  let component: DefaultErrorsDemoComponent;
  let fixture: ComponentFixture<DefaultErrorsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [DefaultErrorsDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultErrorsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
