// const input = document.getElementById('taskInput');
// const addButton = document.getElementById('addButton');
// const taskList = document.getElementById('taskList');

// addButton.addEventListener('click', () => {
//   const taskText = input.value.trim();
//   if (taskText !== '') {
//     const listItem = document.createElement('li');
//     listItem.textContent = taskText;

//     const doneButton = document.createElement('button');
//     doneButton.textContent = 'Done';
//     doneButton.addEventListener('click', () => {
//       taskList.removeChild(listItem);
//     });

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', () => {
//       taskList.removeChild(listItem);
//     });

//     listItem.appendChild(doneButton);
//     listItem.appendChild(deleteButton);
//     taskList.appendChild(listItem);
//     input.value = '';
//   }
// });
const input = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', () => {
      listItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    input.value = '';
  }
});
