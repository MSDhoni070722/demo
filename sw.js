fetch('https://chat.openai.com/backend-api/accounts/fddbd1d3-85d7-49a8-93ac-96cf05042a48/settings', {
  method: 'GET',
  headers: {
    'Authorization': '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',
    // Add other headers as needed
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the API response data
    console.log(data);
  })
  .catch(error => {
    console.error('API request failed:', error.message);
  });
