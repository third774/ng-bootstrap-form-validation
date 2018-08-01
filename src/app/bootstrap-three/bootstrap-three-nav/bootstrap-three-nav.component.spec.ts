import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapThreeNavComponent } from "./bootstrap-three-nav.component";

describe("NavBarComponent", () => {
  let component: BootstrapThreeNavComponent;
  let fixture: ComponentFixture<BootstrapThreeNavComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BootstrapThreeNavComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapThreeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
