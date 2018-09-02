import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapFourComponent } from "./bootstrap-four.component";
import { BootstrapFourNavComponent } from "./bootstrap-four-nav/bootstrap-four-nav.component";

describe("BootstrapFourComponent", () => {
  let component: BootstrapFourComponent;
  let fixture: ComponentFixture<BootstrapFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BootstrapFourComponent, BootstrapFourNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
