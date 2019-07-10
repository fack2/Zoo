//  
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", () => {
  let inputValue = searchBar.value.toLowerCase();

  if (inputValue.length !== 0 && inputValue !== /\S/) {
    fetch(`/search/${inputValue}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("list").textContent = "";
        for (var i = 0; i < 5; i++) {
          var node = document.createElement("LI");
          var textnode = document.createTextNode(`${data.filteredData[i]}`);

          node.appendChild(textnode);
          if (data.filteredData[i] !== undefined) {
            document.getElementById("list").appendChild(node);
          }
        }
	  }
	  
	  )
      .catch(error => console.log(error));
  } else {
    document.getElementById("list").textContent = "";
  }
});

const request = (url,cb)=>{
	fetch(url)
	.then(response => response.json())
	.then(data => cb(data))
	.catch(error => error)
}

const search = document.getElementById("search");
search.addEventListener("click", ()=>{
	document.getElementById("list").innerText = "";
	const div = document.querySelector("#images");
  div.textContent = "";
	
	request("http://api.giphy.com/v1/gifs/search?q=" +
	searchBar.value +
	"&api_key=p0FMwmf9fytJSZw4DQgJq6Vurt4S8oHv&limit=4", (result)=>{
		console.log(result.data);
		result.data.forEach(element => {
			const img = document.createElement("img");
			img.src = `https://media.giphy.com/media/${element.id}/giphy.gif`;
			div.appendChild(img);
			
		});
}
)
});

