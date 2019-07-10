const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", () => {
	let inputValue = searchBar.value;
	if (inputValue.length !== 0 && inputValue !== /\S/) {
		fetch(`/search/${inputValue}`)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	}
});
