const fs = require("fs");
const path = require("path");
const matchedResults = require("./match");

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

const publicHandler = (request, response, url) => {
	const extension = url.split(".")[1];
	const extensionType = {
		html: "text/html",
		css: "text/css",
		js: "application/javascript",
		jpg: "img/jpg",
		txt: "text/plain",
	};

	const filePath = path.join(__dirname, "..", "public", url);
	// console.log("filePath", filePath);
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

const searchHandler = (request, response) => {
	const inputValue = request.url.split("/")[2];

	// console.log(request.url);
	const filePath = path.join(__dirname, "animals.txt");
	fs.readFile(filePath, "utf8", (error, file) => {
		if (error) {
			response.writeHead(500, {
				"Content-Type": "text/html"
			});
			console.log(error);
			response.end("<h1>server error</h1>");
		} else {
			response.writeHead(200, {
				"Content-Type": "application/JSON"
			});
			const text = file.split("\n").map(x=>x.toLowerCase());
			
			const filteredData = matchedResults(text, inputValue);
			const animals = JSON.stringify({
				filteredData
			});
			console.log(text);
			// console.log("i am filterd", filteredData);
			// console.log("input", inputValue);
			response.end(animals);
		}
	});
};

module.exports = { homeHandler, publicHandler, searchHandler };
