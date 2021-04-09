// const arr = new.Array( jaro, w, beczce,)
// console.log(arr)

// function addElement() {
//     const app =document.getElementById('add')
//     for(let i = 0; i < arr.length; i++){
//         let par = document.createElement('p')
//         par.innerText = arr[i]
//         app.appendChild(par)
//     }
// }

// const one = document.querySelector('p')
// console.log(one)
// const all = document.querySelectorAll('p')
// console.log(all)

// const a = 1
// const b = 2
// const c = 3
// console.log(a + b + c)

// const a = 1
// const b = 2
// const c = 3
// function suma(a, b, c){
//     return a + b + c
// }

// const wynik = suma(1, 2, 3)
// console.log(wynik)


// function dzielenie(par1, par2){
//  if (par1 === 0 || par2 === 0) {
//     alert ("nie dziel przez 0 kurde")
// } else {
//     return par1 / par2
// }}
// const koniec = dzielenie(6, 2)
// console.log(koniec)





const posts = [
    {
      autor: "Osamu Dazai",
      tytul: "Owoce Wiśni"
    },
    {
        autor: "Osamu Dazai",
      tytul: "Zatracenie"
    },
    {
      autor: "Holly Black",
      tytul: "Królowa Niczego"
    },
    {
        autor: "Lynn Picknett, Clive Prince",
      tytul: "Templariusze"
    },
    {
      autor: "Karolina  Głogowska",
      tytul: "Mój Ukochany Wróg"
    },
    {
      autor: "J. K. Rowling",
      tytul: "Harry Potter i ..."
    },
    {
        autor: "Agata Adamska",
        tytul: "Lowca Czrerech Żywiołów"
    },
    {
        autor: "Agata Czykierda-Grabowska",
        tytul: "Pierwszy Raz"
    },
    {
      autor: "Melisa Darwood",
      tytul: "Gordian Tom I, II"
    },
    {
        autor: "Anna Todd",
      tytul: "After"
    },
    {
        autor: "Agata Czykierda-Grabowska",
      tytul: "Kiedy Na Mnie Patrzysz"
    },
    {
        autor: "Autor Nieznany",
        tytul: "Killing Stalking"
    },
    {
        autor: "Kohei Horikoshi",
        tytul: "Boku No Hero Academia"
    },
    {
        autor: "Hagi",
        tytul: "Miłość W Twoich Oczach"
    },
    {
        autor: "Autor Nieznany",
        tytul: "Żłote Myśli - Władza"
    }
]


function addElement() {
    // pobieram div z index.html o id = "app"
    const app = document.getElementById('app')
    // czyścimy div o id =app, żeby po drugim kliknięciu nie dodawać ponownie tych samych postów 
    app.innerHTML = ''
    for (let i = 0; i < posts.length; i++) {
      let paragraf = document.createElement('p')
      paragraf.setAttribute('class', 'post')
      paragraf.innerText = posts[i].autor + " " + posts[i].tytul
      app.appendChild(paragraf)
  
    }
  }
  function search() {
    const valueInput = event.target.value
    valueInput.trim()
    const app = document.getElementById('app')
    app.innerHTML = ''
    const input = document.getElementById('inputSearch')
    console.log(input)
    input.disabled = false
    const postsFilter = posts.filter(post => {
      return (post.tytul.search(valueInput) !== -1)
    })
  
  
    for (let i = 0; i < postsFilter.length; i++) {
  
      let paragraf = document.createElement('p')
      paragraf.setAttribute('class', 'post')
      paragraf.innerText = postsFilter[i].autor + " " + postsFilter[i].tytul
      app.appendChild(paragraf)
  
    }
  }
