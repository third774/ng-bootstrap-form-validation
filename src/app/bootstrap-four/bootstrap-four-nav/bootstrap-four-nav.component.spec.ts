import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapFourNavComponent } from "./bootstrap-four-nav.component";

describe("BootstrapFourNavComponent", () => {
  let component: BootstrapFourNavComponent;
  let fixture: ComponentFixture<BootstrapFourNavComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BootstrapFourNavComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFourNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
