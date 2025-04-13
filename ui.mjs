// ui.mjs
export function renderBreeds(breeds) {
  const main = document.getElementById('main');
  main.innerHTML = '';
  breeds.forEach(breed => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${breed.name}</h3>
      <p>${breed.description}</p>
      <p><strong>Origin:</strong> ${breed.origin}</p>
    `;
    main.appendChild(div);
  });
}

export function renderImage(imageUrl) {
  const picDiv = document.getElementById('picDiv');
  picDiv.innerHTML = `<img src="${imageUrl}" height="200" />`;
}

export function clearImage() {
  document.getElementById('picDiv').innerHTML = '';
}
