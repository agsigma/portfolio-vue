const FetchService = function(url) {
  this.url = url;
}

FetchService.prototype = {
  fetch: function() {
    this.fetchPromise = fetch(this.url)
      .then(response => response.json())
      .then(data => {
        this.data = data;
        return data;
      })
      .catch(err => {
        console.error(err);
        return [];
      });
  },
  getData: function() {
    // if (!this.fetchPromise) {
    //   this.fetch();
    // }
    return this.fetchPromise;
  },
  getRecord: function(id) {
    return this.fetchPromise
      .then(data => {
        return data.find(datum => datum.id === id);
      }) || null;
  }
}


const fetchService = new FetchService('http://35.246.69.24/portfolio/wordpress/portfolio.php');
fetchService.fetch();

export default fetchService;