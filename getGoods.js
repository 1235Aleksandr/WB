const getGoods = () => {
  /*     fetch('https://myweb-d9fba-default-rtdb.firebaseio.com/db.json')
    .then((res)  => res.json()
    )
    .then((data) =>{
        console.log(data);
    })
} */
  const links = document.querySelectorAll(".navigation-link");

  const getData = () => {
    fetch("https://myweb-d9fba-default-rtdb.firebaseio.com/db.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    links.forEach(function (link) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        getData();
      });
    });
  };
  localStorage.setItem('goods', json.stringify({name:'all'}))
};

getGoods();
