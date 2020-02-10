import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private newsService: NewsService) {}
  private article = <any>{};

  ngOnInit() {
    this.article = this.newsService.getArticleById(this.route.snapshot.paramMap.get('id'));
  }

  save() {
    this.newsService.changeArticle(this.article);
    this.router.navigate(['/']);
  }

  disableSave() {
    return !(this.article.title && this.article.description! && this.article.urlToImage!);
  }
}
