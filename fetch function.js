async function fetchData() {

// use https://corsproxy.io/ to convert url
  const url = 'https://corsproxy.io/?https%3A%2F%2Fapi.scratch.mit.edu%2F';
  
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Process the retrieved data here
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchData();


