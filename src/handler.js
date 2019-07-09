const fs = require("fs");
const path = require("path");

const homeHandler = (request, response) => {
	const filePath = path.join(__dirname, "..", "public", "index.html");
	fs.readFile(filePath, (error, file) => {
		if (error) {
			response.writeHead(500, {
				"Content-Type": "text/html"
			});
			response.end("<h1>server error</h1>");
		} else {
			response.writeHead(200, {
				"Content-Type": "text/html"
			});
			response.end(file);
		}
	});
};

const searchHandler = (request, response, url) => {
	const url = request.url;
	const extension = url.split(".")[1];
	const extensionType = {
		html: "text/html",
		css: "text/css",
		js: "application/javascript",
        jpg: "img/jpg",
        txt: "plain/text"
	};

	const filePath = path.join(__dirname, "..", "public", url);
	console.log("filePath", filePath);
	fs.readFile(filePath, (error, file) => {
		if (error) {
			response.writeHead(500, {
				"Content-Type": "text/html"
			});
			response.end("<h1>server error</h1>");
		} else {
			response.writeHead(200, {
				"Content-Type": extensionType[extension]
			});
			response.end(file);
		}
	});
};

module.exports = { homeHandler, searchHandler };
