document.getElementById('noun1').addEventListener('click', (event) => {
    event.target.innerText = 'Table';
  
  });
  
  document.getElementById('verb').addEventListener('click', (event) => {
    event.target.innerText = 'Run';
  
  });
  
  document.getElementById('adjective').addEventListener('click', (event) => {
    event.target.innerText = 'Green';
  
  });
  
  document.getElementById('noun2').addEventListener('click', (event) => {
    event.target.innerText = 'Desk';
  
  });
  
  document.getElementById('Day').addEventListener('click', (event) => {
    let element_list = document.getElementById('list');
    element_list.style.color = '#663366';
    element_list.style.backgroundColor = '#33cc00';
  
  });
  
  document.getElementById('Night').addEventListener('click', (event) => {
    let element_list2 = document.getElementById('list');
    element_list2.style.color = '#66ff99';
    element_list2.style.backgroundColor = '#330099';
  
  });
  
  document.getElementById('colour').addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ff99ff';
  
  });
  
  document.getElementById('image').addEventListener('click', (event) => {
    event.target.setAttribute("src", 'https://media.istockphoto.com/photos/fog-in-black-smoke-and-mist-on-wooden-table-halloween-backdrop-picture-id1341515382?s=612x612');
  
  });
  '#ff99ff';
  