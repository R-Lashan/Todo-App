var todo_ = document.getElementById('todo');
var plus_btn = document.getElementById('plus');

plus_btn.addEventListener('click', addDiv)

function addDiv(event){
    event.preventDefault();
    var div = document.createElement('div')
    div.classList.toggle('todo-div');
    div.innerText = todo_.value;
    document.body.appendChild(div)

    todo_.value = '';

    var delete_btn = document.getElementById('delete');
    delete_btn.addEventListener('click', function(){
        div.remove();
    });

    var checked = document.getElementById('check');
    checked.addEventListener('click', function(){
        div.classList.toggle('completed');
    })

    var btn_delete = document.createElement('btn')
    btn_delete.innerHTML = "X";
    btn_delete.classList.toggle('delete-btn')
    div.appendChild(btn_delete)

    btn_delete.addEventListener('click',() => {
       div.remove();
    })

    var btn_check = document.createElement('btn')
    btn_check.innerHTML = "Check";
    btn_check.classList.toggle('check-btn')
    div.appendChild(btn_check)

    btn_check.addEventListener('click',() => {
       div.classList.toggle('checked')
    })
}