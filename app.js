var todo_ = document.getElementById('todo');
var plus_btn = document.getElementById('plus');


plus_btn.addEventListener('click', addDiv)


function addDiv(){
    var div = document.createElement('div')
    div.classList.toggle('btn-width');
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



    
}