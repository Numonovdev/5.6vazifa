const add = document.querySelector('#btn');
const field = document.getElementById('todo-text');
const time = document.querySelector('#todo-data');
const filter = document.querySelector('#filter');
const wrapper = document.querySelector('#wrapper');

function validate(field, time){
     if(field.value.length < 5){
          alert('5ta belgidan ko`p yozing ')
          inputtext.focus();
          return false
     }
     if(!time.value){
          alert('Sana va vaqtni tanlash shart')
          inputtext.focus();
          return false
     }
     return true
}

function getData(){
     let data = [];
     
     if(localStorage.getItem('todos')){
          data = JSON.parse(localStorage.getItem('todos'));
     }

     return data;
}

function createItem(todo){
     return `
     <div class="block">
                    <div class="box-first">
                         <div class="check">
                              <input id="check" type="checkbox">
                         </div>
                         <div class="text">
                              <h6>${todo.name}</h6>
                              <p>${todo.time}</p>
                         </div>
                    </div>
                    <div class="box-two">
                         <i class="fa-solid fa-trash"></i>
                         <i class="fa-solid fa-pen"></i>
                    </div>
               </div>
     `;
}

add && add.addEventListener('click', function(event){
     event.preventDefault();
     const isValid = validate(field, time)     
     
     if(!isValid){
          return;
     }
     let todo = {
          name: field.value,
          time: time.value,
          status: "active",
          id: Date.now(),
     }

     let todos = getData();
     todos.push(todo);
     localStorage.setItem("todos", JSON.stringify(todos));
     field.value = null;
     time.value = null;

     let item = createItem(todo);
     wrapper.innerHTML += item;
})


document.addEventListener('DOMContentLoaded',function(){
     let todos = getData();
     todos.forEach(element => {
          let item = createItem(element);
          wrapper.innerHTML += item;
     })
})
























// function createCard(reja){
//      const block = document.createElement('div');
//      block.setAttribute('class','block');

//      const boxfirst = document.createElement('div');
//      boxfirst.setAttribute('class','box-first');
//      block.appendChild(boxfirst);

//      const check = document.createElement('div');
//      check.setAttribute('class','check');
//      boxfirst.appendChild(check);

//      const inputcheck = document.createElement('input');
//      inputcheck.setAttribute('id','check');
//      inputcheck.setAttribute('type','checkbox');
//      check.appendChild(inputcheck);


//      const text = document.createElement('div');
//      text.setAttribute('class','text');
//      boxfirst.appendChild(text);
     
//      const info = document.createElement('h6');
//      info.innerHTML = reja.rejainfo;
//      text.appendChild(info);
 
//      const vaqt = document.createElement('p');
//      vaqt.innerHTML = reja.rejatime;
//      text.appendChild(vaqt);

//      const boxtwo =document.createElement('div')
//      boxtwo.setAttribute('class','box-two');
//      block.appendChild(boxtwo);

//      const iconka1 = document.createElement('i')
//      iconka1.setAttribute('class','fa-solid fa-trash');
//      boxtwo.appendChild(iconka1);

//      const iconka2 = document.createElement('i')
//      iconka2.setAttribute('class','fa-solid fa-pen');
//      boxtwo.appendChild(iconka12);
     
//      return block;   

// }
