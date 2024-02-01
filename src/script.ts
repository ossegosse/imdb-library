
// base-url
// https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com

fetch('https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Hantera den returnerade datan här
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });