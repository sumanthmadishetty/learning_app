import { put, takeEvery, delay } from 'redux-saga/effects';
function* fetchNews() {
     const newsData = yield fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
          .then(response => response.json());
     const data = [];
     newsData.quotes.map((news) => {
          return data.push(news);
     })
     yield delay(2000)
     yield put({ type: "QUOTES", news: data });
}
export default function* action() {
     yield takeEvery('GETQUOTES', fetchNews)
}

//https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc