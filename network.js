// Replace 'YOUR_API_KEY' with your actual IPinfo API token
var apiKey = '62762ce44d067b';
// Specify the IP address (or use your own IP address by setting ip to 'myIP')
var ip = 'myIP';

// Step 1: Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Step 2: Configure it: GET-request for the URL with the IP address details
var url = `https://ipinfo.io/${ip}?token=${apiKey}`;
xhr.open('GET', url, true);

// Step 3: Set up a function to handle the response
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Success! Parse the JSON response
    var data = JSON.parse(xhr.responseText);
    console.log(data); // Log the response data to the console

    // Update the DOM with the network service provider information
    var networkDiv = document.getElementById('network-info');
    var networkHtml = `
      <h2><i class="fas fa-network-wired icon"></i>Network Service Provider Details</h2>
      <p><i class="fas fa-info-circle icon"></i>IP Address: ${data.ip}</p>
      <p><i class="fas fa-city icon"></i>City: ${data.city}</p>
      <p><i class="fas fa-map-marker-alt icon"></i>Region: ${data.region}</p>
      <p><i class="fas fa-flag icon"></i>Country: ${data.country}</p>
      <p><i class="fas fa-building icon"></i>ISP: ${data.org}</p>
      <p><i class="fas fa-map icon"></i>Location: ${data.loc}</p>
    `;
    networkDiv.innerHTML = networkHtml;
  } else {
    // Handle error
    var networkDiv = document.getElementById('network-info');
    networkDiv.innerHTML = `<p>Error: Unable to fetch network details</p>`;
    console.error('Error: ' + xhr.status);
  }
};

// Set up a function to handle any errors that occur
xhr.onerror = function() {
  var networkDiv = document.getElementById('network-info');
  networkDiv.innerHTML = `<p>Error: Request failed</p>`;
  console.error('Request failed');
};

// Step 4: Send the request
xhr.send();
