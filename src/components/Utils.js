export default {
  parseUrl,
}

function parseUrl(url){
  let urlParts = url.split("/");
  let tableID = urlParts[7];
  let query = extractQuery(urlParts);
  let params = extractParams(query);

  return createOptions(tableID, params);
}

function extractQuery(parsedUrl){
  return parsedUrl[parsedUrl.length - 1].split("?")[1];
}

function extractParams(queryString){
  return queryString.split("&")
}

function createOptions(tableID, params){
  let options = {};
  options.tableID = tableID;

  params.forEach(param => {
      let paramPair = param.split("=");
          options[`${paramPair[0]}`] = paramPair[1];
  })
  return options;
}