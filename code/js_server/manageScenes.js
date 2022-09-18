var fs = require("fs") //Gestion de fichier

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
    },

    sendDataToUser: function () {
        var data = this.generateDataToSend();
        this.response.writeHead(200, { 'Content-Type': data.contentType })
        this.response.write(data.content)
        this.response.end()
    },

    generateDataToSend: function () {
        var data = {}
        var folder = ""

        if (this.extension === ".html" || this.url.pathname === "/") {
            if (this.url.pathname === "/") {
                this.url.pathname = "/index.html"
            }
            folder = "html"
            data.contentType = "text/html"
            data.content = this.generatePageHtml(folder);
        } else if (this.extension === ".css") {
            folder = "css";
            data.contentType = "text/css";
            data.content = fs.readFileSync(folder + this.url.pathname);
        }
        return data;
    },

    generatePageHtml: function (folder) {
        var htmlPage = ""
        var headerHTML = fs.readFileSync(folder + "/common/header.html", "UTF-8");
        var footerHTML = fs.readFileSync(folder + "/common/footer.html", "UTF-8");
        var page = fs.readFileSync(folder + this.url.pathname, "UTF-8");
        htmlPage = headerHTML + page + footerHTML;
        return htmlPage;
    }
}

module.exports = manageScenes;