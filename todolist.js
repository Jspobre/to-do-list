


const submitBtn = document.getElementById('submit');


const todoLists = [
    {
        name: 'Clean the dishes',
        date: '2024-02-07'
    },
    {
        name: 'Feed Maki',
        date: '2024-02-07'
    }
];

const todo = () => {
    const todoName = document.getElementById('todoName').value;
    const dueDate = document.getElementById('dueDate').value;


    todoLists.push({
        name: todoName,
        date: dueDate
    });

    document.getElementById('todoName').value = '';
    displayTodoLists();
};

const displayTodoLists = () => {
    let todoHtml = '';

    todoLists.forEach((todoObject, index) => {
        const name1 = todoObject.name;
        const date1 = todoObject.date;

        const html = `
            <div class="todoDetails">${name1} - ${date1} <button class="delete" onclick="todoLists.splice(${index}, 1); displayTodoLists();">Delete</button></div>
        
          
        `;
        todoHtml += html;
    });

    const displayHtml = document.getElementById('todoHtml');
    displayHtml.innerHTML = todoHtml;
    console.log(todoHtml);
};

submitBtn.addEventListener('click', (event) => {
    submitBtn.innerText = 'Submitted!';
    if(todoName.value === '' || dueDate.value === ''){
        console.log('Please include a name and a date');
        document.getElementById('todoName').value = '';


    } else{
        todo();
    }
    setTimeout(() => {
        submitBtn.innerText = 'Submit';
    }, 1000)
 
});

// Call displayTodoLists after functions are defined
displayTodoLists();
