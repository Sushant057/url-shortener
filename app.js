async function shortenUrl() {
    const longUrl = document.getElementById('longUrl').value;
    const Token = '275424d99b8fb5884ce656b0a5bd0e327ad8256c'; 

    const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${Token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ long_url: longUrl })
    });

    const data = await response.json();
    const resultDiv = document.getElementById('result');

    if (response.ok) {
        resultDiv.innerHTML = `Shortened URL: <a href="${data.link}" target="_blank">${data.link}</a>`;
    } else {
        resultDiv.innerHTML = `Error: ${data.message}`;
    }
}
