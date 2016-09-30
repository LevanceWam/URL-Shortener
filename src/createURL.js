exports.shortURL = (link) => {
  // I am running a math.random to generate a random url for vance.com
  let URLId = 'http://vance.com/' + Math.random().toString(32.5).slice(2);

  // I will return the old link and the new shortened link
  return {oldLink : link, sURL: URLId};
};
