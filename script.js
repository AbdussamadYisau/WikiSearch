fetch('https://en.wikipedia.org/w/api.php', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    }
})
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data)));