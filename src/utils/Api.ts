const sendRequest = async (url: string, method = 'POST', data = {}, headers = { 'Content-Type': 'application/json' }) => {
  try {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};

export default sendRequest;
