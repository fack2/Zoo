const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", () => {
  let inputValue = searchBar.value.toLowerCase();

  if (inputValue.length !== 0 && inputValue !== /\S/) {
    fetch(`/search/${inputValue}`)
      .then(response => response.json())
      .then(data => {
		  
	    
		document.getElementById("list").textContent = "";
	for (var i=0;i<5;i++) { 
		var node = document.createElement("LI");        
		var textnode = document.createTextNode(`${data.filteredData[i]}`);  
                	      
		node.appendChild(textnode);   
		if(data.filteredData[i] !== undefined){                            
		document.getElementById("list").appendChild(node); 
		}
	} 
		

	})
      .catch(error => console.log(error));
  }else {

	document.getElementById("list").textContent = "";

  }
});

// const request = ()=>{
// 	document.getElementById("list").textContent = "";
// 	for (var i=0;i<5;i++) { 
// 		var node = document.createElement("LI");        
// 		var textnode = document.createTextNode(`${data.filteredData[i]}`);  
                	      
// 		node.appendChild(textnode);                               
// 		document.getElementById("list").appendChild(node); 
		
// 	} 
// }