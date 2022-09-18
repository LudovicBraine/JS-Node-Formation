var manageScenes = {
    url: null,
    extension: null,
    request: null,
    response: null,
    queryString: null,

    init: function (url, extension, request, response, queryString) {
        this.url = url;
        this.extension = extension;
        this.request = request;
        this.response = response;
        this.queryString = queryString;
    }
}

module.exports = manageScenes;