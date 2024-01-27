(()=>{
    let todoArray =[];

    const form = document.querySelector(".form");
    const input = form.querySelector("form-input");
    const ul = document.querySelector("todolist");


    form.addEventListener('submit', e=>{
        e.preventDefault();

        let itemId = String(Date.now());
         
        let itemTodo = input.value;

        addItemToDom= (itemId , itemTodo);

        addItemToArray=(itemId , itemTodo);

        input.value='';
    });

    ul.addEventListener('click' ,e=>{
       let id =e.target.getAttribute('data_id');

       if(!id) return
       removeItemFromDOM(id);
       removeItemFromArray(id)
    });


    function addItemToDom(itemId, itemTodo){
        const li = document.createElement('id');

        li.setAttribute("data-id" , itemId);
        li.innerText=itemTodo;
        ul.appendChild(id);
    }

    function addItemToArray(itemId , itemTodo){
        todoArray.push({itemId,itemTodo});
        console.log(todoArray)
    }
  
    function removeItemFromDOM(id) {
        // get the list item by data ID
        var li = document.querySelector('[data-id="' + id + '"]');
        // remove list item
        ul.removeChild(li);
      }
    
      function removeItemFromArray(id) {
        // create a new toDoListArray with all li's that don't match the ID
        todoArray = todoArray.filter(item => item.itemId !== id);
        console.log(todoArray);
      }

})();