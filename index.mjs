// IIFE to fetch all breeds initially
(async function getData() {
    try {
      let res = await axios.get('https://api.thecatapi.com/v1/breeds', {
        headers: {
          'x-api-key': 'live_UXqbFhQ52jb7NOdPOoQCba6MCzOCxJ2VRs0POXfJIIo2MByYSibNxKfABMalQ65t'
        },
      });
  
      createDisplay(res.data);
    } catch (err) {
      console.error('Error fetching breed list:', err);
    }
  })();
  
  // Handle form submission
  let form = document.getElementById('breedForm');
  form.addEventListener('submit', handleSubmit);
  
  // 🛠️ Helper: Display list of all breeds
  function createDisplay(dataArray) {
    const main = document.getElementById('main');
    const list = document.createElement('ul');
    main.innerHTML = ''; // clear previous content
    main.appendChild(list);
  
    dataArray.forEach((el) => {
      const listItem = document.createElement('li');
  
      // 🐞 FIX: Correct string interpolation using backticks and proper syntax
      listItem.innerHTML = `Name: ${el.name} - ID: ${el.id} <button>Visit Animal!</button>`;
  
      list.appendChild(listItem); // 🐞 FIX: typo `apendChild` → `appendChild`
    });
  }
  
  // 🐱 Handle form input and show cat image
  async function handleSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('breedID');
    const breedId = input.value.trim();
  
    try {
      // 🐞 FIX: Throwing error must use new Error(), not just error()
      if (breedId.length === 0 || breedId.length > 10) {
        alert('Incorrect or empty search term');
        throw new Error('Invalid breed ID');
      }
  
    const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
        {
          headers: {
            'x-api-key': 'live_UXqbFhQ52jb7NOdPOoQCba6MCzOCxJ2VRs0POXfJIIo2MByYSibNxKfABMalQ65t'
          },
        }
      );
  
      // Show image
      const picDiv = document.getElementById('picDiv');
      if (res.data.length > 0) {
        picDiv.innerHTML = `<img height='200px' src='${res.data[0].url}' alt='${breedId}' />`;
      } else {
        picDiv.innerHTML = 'No image found for that breed.';
      }
  
      console.log(res.data[0].url);
    } catch (err) {
      console.error('Error fetching cat image:', err);
    }
  }