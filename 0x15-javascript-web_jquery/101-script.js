document.addEventListener('DOMContentLoaded', function() {
  const addBtn = document.querySelector('#add_item');
  const removeBtn = document.querySelector('#remove_item');
  const clearBtn = document.querySelector('#clear_list');
  const myList = document.querySelector('.my_list');
  
  addBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode('Item'));
    myList.appendChild(newItem);
  });
  
  removeBtn.addEventListener('click', function() {
    const lastItem = myList.lastElementChild;
    if (lastItem) {
      myList.removeChild(lastItem);
    }
  });
  
  clearBtn.addEventListener('click', function() {
    myList.innerHTML = '';
  });
});
