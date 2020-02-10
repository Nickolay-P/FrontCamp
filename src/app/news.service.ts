import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }
  readonly API_URL = 'https://newsapi.org/v1/articles?source=the-verge&apiKey=20127fe787434a88a4a0f9c21431765c';
  private localNews = [
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
  private myNews = [
    {
      id: 1,
      author:	"Me",
      title:	"Amazing title",
      description:	"My name is John Catsvill and here is my story...",
      urlToImage:	"https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
    }
  ];

  getNewsFromAPI() {
    return this.http.get(this.API_URL);
  }

  getLocalNews() {
    return this.localNews;
  }

  getMyNews() {
    return this.myNews;
  }

  getArticleById(id){
    return this.myNews.find(article => article.id == id)
  }

  changeArticle(_article) {
    this.myNews.splice(this.myNews.findIndex((article) => {article.id == _article.id}), 1, _article);
  }

  deleteArticleById(id) {
    this.myNews.splice(this.myNews.findIndex((article) => {article.id == id}), 1);
  }

  addArticle(article) {
    this.myNews.push(article);
  }

}