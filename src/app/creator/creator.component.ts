import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NewsService} from "../news.service";

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {
  constructor(private router: Router, private newsService: NewsService) { }
  private article = {
    author: 'Me',
    title: '',
    description: '',
    urlToImage: ''
  };

  addArticle() {
    this.newsService.addArticle(this.article);
    this.router.navigate(['/']);
  }

  disableSave() {
    return !(this.article.title && this.article.description && this.article.urlToImage);
  }

}
