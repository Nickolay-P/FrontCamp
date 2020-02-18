import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {FilterPipe} from "./fitlter.pipe";
import {LoadMorePipe} from "./loadmore.pipe";
import {AppModule} from "../app.module";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {NewsService} from "../news.service";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let http: HttpTestingController;
  let service: NewsService;
  const localNews = [
    {
      author:	"Local",
      title:	"Nice try",
      description:	"This last act of sacrifice is mine. \n Phasellus faucibus tortor at vestibulum condimentum. Etiam tincidunt nibh et fringilla lacinia. Integer dapibus viverra neque, in maximus ante porta a.",
      urlToImage:	"https://vignette.wikia.nocookie.net/rehero/images/4/44/Megumin.jpg/revision/latest?cb=20180330001646"
    },
    {
      author:	"Local",
      title:	"Do your best",
      description:	"POOOOOOWEEEEEER!!!!! \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium, velit at tempus pellentesque, nisl lorem dignissim tellus, a pharetra risus velit aliquet leo. Fusce nulla ipsum, porta id vestibulum vitae, fringilla id elit",
      urlToImage:	"https://s3.gaming-cdn.com/images/products/2348/orig/brutal-legend-cover.jpg"
    }
    ];
  const myNews = [
    {
      id: 1,
      author:	"Me",
      title:	"Test",
      description:	"Test",
      urlToImage:	"https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppModule],
      providers: [NewsService]
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    service = TestBed.get(NewsService);
    http = TestBed.get(HttpTestingController);
  });

  it('should check filter pipe', () => {
    const pipe = new FilterPipe();
    const news = [
      {
        title: 'asd',
        description: 'dfg'
      },
      {
        title: 'fdf',
        description: 'rty'
      }
    ];
    const filteredNews = [
      {
        title: 'asd',
        description: 'dfg'
      }
    ];
    const result = pipe.transform(news, 'a');
    expect(result).toEqual(filteredNews);
  });

  it('should check loadmore pipe', () => {
    const pipe = new LoadMorePipe();
    const news = [1, 2, 3 ,4 , 5, 6];

    const result = pipe.transform(news, false);
    expect(result.length).toBeLessThanOrEqual(4);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('should respond data', () => {
    expect(service.getLocalNews()).toEqual(localNews);
    expect(service.getMyNews()).toEqual(myNews);
    component.showMyNews();
    expect(component.news).toEqual(service.getMyNews());
  });
});
