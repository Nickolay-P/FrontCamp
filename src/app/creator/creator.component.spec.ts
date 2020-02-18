import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorComponent } from './creator.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {AppModule} from "../app.module";
import {NewsService} from "../news.service";
import {By} from "@angular/platform-browser";

describe('CreatorComponent', () => {
  let component: CreatorComponent;
  let fixture: ComponentFixture<CreatorComponent>;
  let http: HttpTestingController;
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppModule],
      providers: [NewsService]
    });
    fixture = TestBed.createComponent(CreatorComponent);
    component = fixture.componentInstance;
    service = TestBed.get(NewsService);
    http = TestBed.get(HttpTestingController);
  });

  it('should create article', () => {
    const length = service.getMyNews().length;
    fixture.whenStable().then(() => {
      let titleInput = fixture.debugElement.query(By.css('.title'));
      let descriptionInput = fixture.debugElement.query(By.css('.description'));
      let imgUrlInput = fixture.debugElement.query(By.css('.url'));
      let titleEl = titleInput.nativeElement;
      let descriptionEl = descriptionInput.nativeElement;
      let imgEl = imgUrlInput.nativeElement;
      titleEl.value = '1';
      titleEl.dispatchEvent(new Event('input'));
      descriptionEl.value = '2';
      descriptionEl.dispatchEvent(new Event('input'));
      imgEl.value = '3';
      imgEl.dispatchEvent(new Event('input'));
      component.addArticle();

      expect(service.getMyNews().length).toEqual(length + 1);
    });
  });
});
