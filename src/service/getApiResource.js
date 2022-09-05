export const getApiResource = async url => {
  try {
    const result = await fetch(url);

    if (!result.ok) {
      console.error('Could not fetch.', result.status);
    }

    return await result.json();
  } catch(error) {
    console.error('Could not fetch.', error);
  }
};