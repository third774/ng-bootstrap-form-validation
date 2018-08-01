import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapFourBasicComponent } from "./bootstrap-four-basic.component";

describe("BootstrapFourBasicComponent", () => {
  let component: BootstrapFourBasicComponent;
  let fixture: ComponentFixture<BootstrapFourBasicComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BootstrapFourBasicComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFourBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
