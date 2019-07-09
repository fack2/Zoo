const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keydown", () => {
	fetch("./search/")
		.then(response => response.json())
		.then(data => console.log(data.sort()))
		.catch(error => console.log(error));
});
