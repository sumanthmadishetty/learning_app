import { put, takeEvery, delay } from 'redux-saga/effects';
function* fetchData() {
     const newsData = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
          .then(response => response.json());
     const data = [];
     newsData.articles.map((news) => {
          return data.push(news);
     })
     yield delay(2000)
     yield put({ type: "QUOTES", news: data });
}
export default function* action() {
     yield takeEvery('GETQUOTES', fetchData)
}

//https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc