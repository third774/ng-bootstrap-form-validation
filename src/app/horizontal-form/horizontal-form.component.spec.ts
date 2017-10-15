import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HorizontalFormComponent } from "./horizontal-form.component";

describe("HorizontalFormComponent", () => {
  let component: HorizontalFormComponent;
  let fixture: ComponentFixture<HorizontalFormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HorizontalFormComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
