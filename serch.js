const serch = function(){
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

/*     input.addEventListener('input', function(event){
        console.log(event.target.value);
    }) */           /* выводит каждый раз в консоле то что ввели */
    searchBtn.addEventListener('click', function(){
        console.log(input.value);
    })                  /* выводит в консоле введенное значение при нажатие на поиск */
}

serch()