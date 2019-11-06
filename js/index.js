import View from './createView.js';
import Article from './createArticle.js';
import requestFactory from './requestFactory';

const pageView = new View();
pageView.addCheckBoxexSection();
pageView.createNumSection();
pageView.createGetNewsButton();

const fetchData = async () => {
    const source = await pageView.getCheckedSources();
    const filter = pageView.getFilter() > 100 ? 100 :
    pageView.getFilter() <= 0 ? 1 : pageView.getFilter();

    let data = requestFactory.create('data', source, filter);
    return data.getData();
}

const articlesHash = async () => {
    const articleHash = fetchData();
    return await articleHash.then(response => response.map(articleData => {
        let article = new Article(articleData);
        return article.createArticle();
    }).join(""));
}

getNews.addEventListener("click", async () => {
    const content = await articlesHash();
    document.body.appendChild(document.createElement('form')).outerHTML = content;
});
getNews.addEventListener("click", () => root.style.display = 'none');
getNews.addEventListener("click", () => errorBlock.style.display = 'block');