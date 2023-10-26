// // First, create a function to fetch the data from the API

// const fetchData = async () => {
//     const response = await fetch("https://thronesapi.com/api/v2/Characters");
//     const data = await response.json();
//     console.log(data)
//     return data;
//   };
  
//   // Next, create a function to display the data on the user interface
//   const displayData = (data) => {
//     const charactersContainer = document.querySelector("#characters-container");
//     // Clear the characters container before adding new data
//     charactersContainer.innerHTML = "";
  
//     // Iterate over the data and create a new element for each character
//     data.forEach((character) => {
//       const characterElement = document.createElement("div");
//        characterElement.classList.add("character");
//       characterElement.innerHTML = `<button id="like-button">Like</button>
//       <i class="fa-solid fa-heart"></i>

//       <script>
//         const likeButton = document.querySelector('button');
      
//         do.addEventListener('click', () => {
//           console.log("I've been clicked")
//         });
//       </script>
//       `
//       // Add the character's image to the element
//       const imageElement = document.createElement("img");  //likebutton.style.color= "red"
//       imageElement.src = character.imageUrl;
//       characterElement.appendChild(imageElement);
  
//       // Add the character's name to the element
//       const nameElement = document.createElement("h3");
//       nameElement.textContent = character.fullName
//       characterElement.appendChild(nameElement);
  
//       // Add the character's title to the element
//       const titleElement = document.createElement("p");
//       titleElement.textContent = character.title;
//       characterElement.appendChild(titleElement);
  
//       // Add the character's family to the element
//       const familyElement = document.createElement("p");
//       familyElement.textContent = character.family;
//       characterElement.appendChild(familyElement);
  
//       // Add the character element to the characters container
//       charactersContainer.appendChild(characterElement);
//     });
//   };
  
//   // Finally, call the fetchData() function and then the displayData() function
//   fetchData().then((data) => displayData(data));