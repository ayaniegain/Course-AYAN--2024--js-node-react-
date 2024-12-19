const jsonDataFetching = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }
  
  export default jsonDataFetching;
  