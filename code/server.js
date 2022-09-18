var http = require("http");
var url = require("url");
var fs = require("fs") //Gestion de fichier
require("remedial"); //Remplir les template
var querystring = require("querystring");
var manageScenes = require("./js_server/manageScenes");

var manageServer = function (request, response) {
    var thisUrl = url.parse(request.url);
    var extension = thisUrl.pathname.substring(thisUrl.pathname.indexOf('.'), thisUrl.pathname.length);
    var urlQueryString = new URLSearchParams(thisUrl.query)
    manageScenes.init(thisUrl, extension, request, response, urlQueryString)
    console.log(manageScenes.queryString)
}

var server = http.createServer(manageServer);
server.listen(8080);
