
(async function getMoreData() {
    try {
      let response = await axios('https://api.thedogapi.com/v1/breeds', {
        headers: {
          'x-api-key': 'live_JRNZji0VvhVzvk5OO6DvYvdQBiD3dhGawfbsco18dkdmp3hGGZTix0g2AK9bnR4V'
        }
      });
  
      let breeds = response.data;
      let body = document.getElementsByTagName('body')[0];
      let picDiv = document.getElementById('picDiv');
  
      function postData(breed) {
        let newPost = document.createElement('div');
        newPost.innerHTML = `
          <h3>${breed.name}</h3>
          <p><strong>Origin:</strong> ${breed.origin}</p>
          <p>${breed.description}</p>
        `;
        body.appendChild(newPost);
      }
  
      breeds.forEach(async (breed) => {
        postData(breed);
  
        // Optional: fetch an image for each breed
        try {
          let imageRes = await axios.get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breed.id}`, {
            headers: {
              'x-api-key': 'live_JRNZji0VvhVzvk5OO6DvYvdQBiD3dhGawfbsco18dkdmp3hGGZTix0g2AK9bnR4V'
            }
          });
  
          if (imageRes.data.length > 0) {
            let img = document.createElement('img');
            img.src = imageRes.data[0].url;
            img.alt = breed.name;
            img.style.height = '200px';
            body.appendChild(img);
          }
        } catch (imgErr) {
          console.error(`Image not found for ${breed.name}:`, imgErr);
        }
      });
  
    } catch (error) {
      console.error('Error fetching cat breeds:', error);
    }
  })();

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
        `https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`,
        {
          headers: {
            'x-api-key': 'live_JRNZji0VvhVzvk5OO6DvYvdQBiD3dhGawfbsco18dkdmp3hGGZTix0g2AK9bnR4V'
          },
        }
      );
  
      // Show image
      const picDiv = document.getElementById('picDiv');
      if (res.data.length > 0) {
        picDiv.innerHTML = `<img height='50px' src='${res.data[0].url}' alt='${breedId}' />`;
      } else {
        picDiv.innerHTML = 'No image found for that breed.';
      }
  
      console.log(res.data[0].url);
    } catch (err) {
      console.error('Error fetching cat image:', err);
    }
  }