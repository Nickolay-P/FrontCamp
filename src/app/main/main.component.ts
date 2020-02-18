import { Component, OnInit} from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private newsService: NewsService){}
  public news = [];
  public sources = [];
  pu
  private searchValue = '';
  private disableSelect = false;
  private selectedNewsSource = 'BBC';
  private loadMore = false;


  ngOnInit(){
    this.newsService.getSources().subscribe(data => {
      this.sources = data["sources"];
      this.sources.forEach(element => {
        if (element.id == 'google-news-uk'){
          this.sources.splice(this.sources.indexOf(element),1);
        }
      });
      console.log();
    });
    this.newsService.getNewsForSingleSource("the-verge").subscribe(data => {
      this.news = data["articles"];
    });
  }

  showNews(source) {
    switch (source) {
      case  'local':
        this.showLocalNews();
        break;
      case  'all':
        this.showAllNews();
        break;
      default:
        this.showNewsFromSource(source)
    }
  }

  showNewsFromSource(source) {
    this.newsService.getNewsForSingleSource(source).subscribe(data => {
      this.news = data["articles"];
    });
  }

  showAllNews() {
    this.sources.forEach(element => {
      this.newsService.getNewsForSingleSource(element.id).subscribe(data => {
        this.news = [...data["articles"]];
      });
    });
    // this.news = [...this.newsService.getMyNews(), ...this.newsService.getLocalNews()];
  }

  showLocalNews() {
    this.news = this.newsService.getLocalNews();
  }

  showMyNews() {
    if(!this.disableSelect) {
      this.news = this.newsService.getMyNews();
    } else {
      this.showNews(this.selectedNewsSource);
    }
    this.disableSelect = !this.disableSelect;
  }

  deleteArticle(id) {
    this.newsService.deleteArticleById(id);
  }
}
