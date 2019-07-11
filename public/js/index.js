//
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", () => {
	let inputValue = searchBar.value.toLowerCase();

	if (inputValue.length !== 0 && inputValue !== /\S/) {
		fetch(`/search/${inputValue}`)
			.then(response => response.json())
			.then(data => {
				document.getElementById("list").textContent = "";
				data.filteredData.forEach((ele, index) => {
					if (index < 5) {
						const node = document.createElement("LI");
						const textnode = document.createTextNode(`${ele}`);
						node.addEventListener("click", event => {
							searchBar.value = event.target.innerText;
							document.getElementById("list").textContent = "";
						});
						node.appendChild(textnode);
						if (ele !== undefined) {
							document.getElementById("list").appendChild(node);
						}
					}
				});
			})
			.catch(error => console.log(error));
	} else {
		document.getElementById("list").textContent = "";
	}
});

const request = (url, cb) => {
	fetch(url)
		.then(response => response.json())
		.then(data => cb(data))
		.catch(error => error);
};

const search = document.getElementById("search");
search.addEventListener("click", () => {
	document.getElementById("list").innerText = "";
	const div = document.querySelector("#images");
	div.textContent = "";

	request(
		"https://api.giphy.com/v1/gifs/search?q=" +
			searchBar.value +
			"&api_key=p0FMwmf9fytJSZw4DQgJq6Vurt4S8oHv&limit=4",
		result => {
			result.data.forEach(element => {
				const img = document.createElement("img");
				img.src = `https://media.giphy.com/media/${element.id}/giphy.gif`;
				div.appendChild(img);
			});
		}
	);
});
