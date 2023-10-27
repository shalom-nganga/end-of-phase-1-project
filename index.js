// function to fetch the data from the API

const fetchData = async () => {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await response.json();
    console.log(data)
    return data;
  };
  

  const displayData = (data) => {
    const charactersContainer = document.querySelector("#characters-container");
   
    charactersContainer.innerHTML = "";
  
  
    data.forEach((character) => {
      const characterElement = document.createElement("div");
       characterElement.classList.add("character");
      characterElement.innerHTML = `<button id="like-button">Like</button>
      <i class="fa-solid fa-heart"></i>

      <script>
        const likeButton = document.querySelector('button');
      
        do.addEventListener('click', () => {
          console.log("I've been clicked")
        });
      </script>
      `
     
      const imageElement = document.createElement("img");  //likebutton.style.color= "red"
      imageElement.src = character.imageUrl;
      characterElement.appendChild(imageElement);
  
    
      const nameElement = document.createElement("h3");
      nameElement.textContent = character.fullName
      characterElement.appendChild(nameElement);
  
      
      const titleElement = document.createElement("p");
      titleElement.textContent = character.title;
      characterElement.appendChild(titleElement);
  
      const familyElement = document.createElement("p");
      familyElement.textContent = character.family;
      characterElement.appendChild(familyElement);
  
     
      charactersContainer.appendChild(characterElement);
    });
  };
  
  
  fetchData().then((data) => displayData(data));

  