export async function homepageLoader() {
  const response = await fetch('https://restapi.fr/api/recipes');
  if (response.ok) {
    return new Promise((res) => {
      setTimeout(() => res(response.json()), 3000);
    });
  } else {
    throw new Error('Oups !');
  }
}
