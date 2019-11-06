export default class ErrorPage {
    constructor(message) {
        // Singleton
        if (ErrorPage.instance) {
            this.message = message;
            return ErrorPage.instance;
        }

        ErrorPage.instance = this;
        return this;
    }
    networkError() {
        return document.body.innerHTML = `<div id='errorBlock'> Ooops, smth gonna wrong, ${this.message}
                                <img id="errorMedia" src="media/train.gif"></div>`
    }
}