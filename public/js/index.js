const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keydown", () => {
	fetch(`/search/${searchBar.value}`)
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error));
});
