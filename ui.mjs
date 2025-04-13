// ui.mjs
export function renderBreedInfo(breed, container) {
  const newPost = document.createElement('div');
  newPost.innerHTML = `
    <h3>${breed.name}</h3>
    <p><strong>Origin:</strong> ${breed.origin}</p>
    <p>${breed.description || 'No description available.'}</p>
  `;
  container.appendChild(newPost);
}

export function renderImage(imageUrl, altText, container) {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = altText;
  img.style.height = '200px';
  container.appendChild(img);
}

export function showImageInDiv(imageUrl, breedId) {
  const picDiv = document.getElementById('picDiv');
  picDiv.innerHTML = imageUrl
    ? `<img height='200px' src='${imageUrl}' alt='${breedId}' />`
    : 'No image found for that breed.';
}
