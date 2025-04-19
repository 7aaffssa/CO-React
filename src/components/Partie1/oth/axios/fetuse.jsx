import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => console.log(data)) // Log the data to the console
      .catch(error => console.error('Error fetching data:', error)); // Handle errors
  }, []);

  return null; // No UI to render
}