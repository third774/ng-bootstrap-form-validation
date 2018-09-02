import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BootstrapThreeNavComponent } from "./bootstrap-three-nav.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("NavBarComponent", () => {
  let component: BootstrapThreeNavComponent;
  let fixture: ComponentFixture<BootstrapThreeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BootstrapThreeNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapThreeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
