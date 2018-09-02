import { BOOTSTRAP_VERSION } from "./../../Tokens/tokens";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MessagesComponent } from "./messages.component";
import { By } from "@angular/platform-browser";
import { BootstrapVersion } from "../../Enums";

describe("MessagesComponent", () => {
  const messages = ["message one", "message two"];
  const getMessages = () => messages;
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
    component.messages = getMessages;
    fixture.detectChanges();
  });

  it("should create a span element for every message", () => {
    const spans = fixture.debugElement.queryAll(By.css("span"));
    expect(spans.length).toEqual(messages.length);
  });
});
