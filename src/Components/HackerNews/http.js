const jsonNewsData = () => {
  return fetch('https://hacker-news.firebaseio.com/v0/showstories.json')
    .then(response => response.json())
    .then(jsonNewsData => {
      jsonNewsData.splice(10, 56)
      return jsonNewsData;
    })
    .catch(error => console.log(error))
}
module.exports = { jsonNewsData }