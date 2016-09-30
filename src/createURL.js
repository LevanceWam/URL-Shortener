exports.shortURL = (link) => {
  let URLId = 'http://vance.com/' + Math.random().toString(32.5).slice(2);
  return {oldLink : link, sURL: URLId};
};
