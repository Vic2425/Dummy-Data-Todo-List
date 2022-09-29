    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
        // fetch("https://jsonplaceholder.typicode.com/todos")
        //   .then((response) => {
        //     console.log('response:', response)
        //     // console.log('response.json():', response.json())
        //     return response.json()
        //   })
        //   .then((json) => {
        //     console.log('json:', json)
        //     arrayOfTodos = json
        //     console.log('arrayOfTodos:', arrayOfTodos)
        //   });

    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
      console.log('arrayOfTodos In POPULATE:', arrayOfTodos)
      for (let i = 0; i < arrayOfTodos.length; i++) {
        const todo = arrayOfTodos[i];
        console.log('todo:', todo)
        console.log('todo["title"]:', todo['title'])
      
      let newList = document.getElementById('todo-list')
      let userTitle = document.createElement('LI')
      userTitle.innerHTML = todo.title
      newList.appendChild(userTitle)
      
      let idInsert = document.createTextNode(todo.id)
      let userId = document.createTextNode(todo.userId)
      let completed = document.createTextNode(todo.completed)
      newList.append("User ID: ", userId, "ID: ", idInsert, "Completed? ", completed)
         
      
      }
    }