// api.mjs
const API_KEY = 'live_JRNZji0VvhVzvk5OO6DvYvdQBiD3dhGawfbsco18dkdmp3hGGZTix0g2AK9bnR4V';
const BASE_URL = 'https://api.thedogapi.com/v1';

export async function getDogBreeds() {
  const res = await axios(`${BASE_URL}/breeds`, {
    headers: { 'x-api-key': API_KEY },
  });
  return res.data;
}

export async function getDogImageByBreed(breedId) {
  const res = await axios(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
    headers: { 'x-api-key': API_KEY },
  });
  return res.data;
}

