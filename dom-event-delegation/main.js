const taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const taskListItem = event.target.closest('.task-list-item');
    console.log(taskListItem);
    taskListItem.remove();
  }
});
