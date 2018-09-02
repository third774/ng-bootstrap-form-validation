import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapFourNavComponent } from "./bootstrap-four-nav.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("BootstrapFourNavComponent", () => {
  let component: BootstrapFourNavComponent;
  let fixture: ComponentFixture<BootstrapFourNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BootstrapFourNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFourNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
