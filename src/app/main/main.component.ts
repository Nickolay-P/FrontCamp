import { Component, OnInit} from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private newsService: NewsService){}
  private news = [];
  private searchValue = '';
  private disableSelect = false;
  private selectedNewsType = 'Verge';
  private loadMore = false;


  // ['The Verge', 'the-verge'],

  ngOnInit(){
    this.newsService.getNewsFromAPI().subscribe(data => {
      this.news = data["articles"];
    });
  }

  showNews(type) {
    switch (type) {
      case 'Verge':
        this.showBBCNews();
        break;
      case  'local':
        this.showLocalNews();
        break;
      default:
        this.showAllNews()
    }
  }

  showBBCNews() {
    this.newsService.getNewsFromAPI().subscribe(data => {
      this.news = data["articles"];
    });
  }

  showAllNews() {
    this.newsService.getNewsFromAPI().subscribe(data => {
      this.news = [...this.newsService.getMyNews(), ...this.newsService.getLocalNews(), ...data["articles"]];
    });
  }

  showLocalNews() {
    this.news = this.newsService.getLocalNews();
  }

  showMyNews() {
    if(!this.disableSelect) {
      this.news = this.newsService.getMyNews();
    } else {
      this.showNews(this.selectedNewsType)
    }
    this.disableSelect = !this.disableSelect;
  }

  deleteArticle(id) {
    this.newsService.deleteArticleById(id);
  }
}
