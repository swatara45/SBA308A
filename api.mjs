// api.mjs
const API_KEY = 'your-api-key-here';
const BASE_URL = 'https://api.thecatapi.com/v1';

export async function getBreeds() {
  const res = await fetch(`${BASE_URL}/breeds`, {
    headers: { 'x-api-key': API_KEY }
  });
  return res.json();
}

export async function getBreedImage(breedId) {
  const res = await fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
    headers: { 'x-api-key': API_KEY }
  });
  return res.json();
}

// Example POST request (if supported)
export async function postVote(imageId, value = 1) {
  const res = await fetch(`${BASE_URL}/votes`, {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image_id: imageId, value })
  });
  return res.json();
}
