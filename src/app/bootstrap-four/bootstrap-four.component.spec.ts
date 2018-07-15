import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapFourComponent } from "./bootstrap-four.component";

describe("BootstrapFourComponent", () => {
  let component: BootstrapFourComponent;
  let fixture: ComponentFixture<BootstrapFourComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BootstrapFourComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
