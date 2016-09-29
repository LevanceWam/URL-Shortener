exports.resturantUrl = (http) => {
  const fullURL = 'resturant.com';
  http.longURL = fullURL;

  return http;
};

exports.resturantUrlShort = (http) => {
  const restURL = '';
  http.shortURL = restURL;

  return http;
};


exports.shortenURL = (finalURL) => {
  const newUrl = finalURL;
  return this.resturantUrlShort(this.resturantUrl(newUrl))
};
