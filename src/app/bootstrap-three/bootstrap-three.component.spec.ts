import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapThreeComponent } from "./bootstrap-three.component";

describe("BootstrapThreeComponent", () => {
  let component: BootstrapThreeComponent;
  let fixture: ComponentFixture<BootstrapThreeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BootstrapThreeComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
