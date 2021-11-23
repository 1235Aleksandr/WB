const getGoods = () => {
  /*     fetch('https://myweb-d9fba-default-rtdb.firebaseio.com/db.json') firebase работа с БД
    .then((res)  => res.json()
    )
    .then((data) =>{
        console.log(data);
    })
} */
  const links = document.querySelectorAll(".navigation-link");

  const getData = (value, category) => {
    fetch("/db/db.json")
      .then((res) => res.json())
      .then((data) => {
          const array = data.filter(function(item){
              return item[category] === value
          })

        localStorage.setItem('goods', json.stringify(data))
      });

    links.forEach(function (link) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const linkValue = link.textContent
        const category = lonk.dataset.field

        getData(linkValue, category)
      });
    });
  };
};

getGoods();
