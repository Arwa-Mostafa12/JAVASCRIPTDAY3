fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    data.forEach(item => {
      const newRow = tableBody.insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      cell1.textContent = item.id;
      cell2.textContent = item.title;
    });
  });
