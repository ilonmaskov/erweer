let inp = document.querySelector('input')
let text = document.querySelectorAll('h3')
let row = document.querySelectorAll('#row > a')

inp.addEventListener('input' , function(){
    text.forEach(function(item ,index){
        if(item.textContent.toLocaleLowerCase().indexOf(inp.value.toLocaleLowerCase()) > -1){
            row[index].style.display = 'block'
        }else{
            row[index].style.display = 'none'
        }
    })
})  