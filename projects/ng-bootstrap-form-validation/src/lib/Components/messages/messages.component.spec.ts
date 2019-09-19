import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BOOTSTRAP_VERSION } from "../../Tokens/tokens";
import { BootstrapVersion } from "../../Enums/BootstrapVersion";
import { MessagesComponent } from "./messages.component";

describe("MessagesComponent", () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      providers: [
        {
          provide: BOOTSTRAP_VERSION,
          useValue: BootstrapVersion.Four
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
