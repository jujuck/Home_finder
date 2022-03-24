const houseToRent = [
  {
    name: "Modern flat",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it FIRST",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/177/177622915.jpg",
    available: false
  },
  {
    name: "Beautiful design house",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it SECOND",
    img:
      "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: true
  },
  {
    name: "Beautiful House",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it THIRD",
    available: false
  },
  {
    name: "Wonderful house with Garden",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img:
      "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: true
  },
  {
    name: "My super Flat ",
    type: "Flat",
    desc: "This is the perfect flat for you, come to visit it you'll love it ",
    img: "https://r-cf.bstatic.com/images/hotel/max1024x768/843/84330721.jpg",
    available: false
  }
];

/** Récupération de l'élément du DOM pour injection des cards */
const cards = document.getElementById('cards');

let select = "All";
document.getElementById('select').addEventListener('change', function (event) {
  select = event.target.value;
  createCards();
})

let available = false;
document.getElementById('available').addEventListener('change', function (event) {
  available = event.target.checked;
  createCards();
})

let search = "";
document.getElementById('search').addEventListener('input', function (event) {
  search = event.target.value;
  createCards()
})

const createCards = () => {
  /** Boucler sur le tableau pour mémoriser un template par carte */
  const cardsArray = [];
  for (let i = 0; i < houseToRent.length; i++) {
    /** Mise en place du filtre avec un if pour le type de house*/
    if ((select === "All" || houseToRent[i].type === select)) {
      /** Mise en place d'un filtre pour la dispo */
      if (!available || houseToRent[i].available === available) {//available === false
        /** Mise en place du filtre sur le titre */
        if (houseToRent[i].name.includes(search)) {
          /**Mettre en place le template */
          cardsArray.push(`<div class="card">
            <div class="card-header">
              <div class="card-img" style="background-image:url('${houseToRent[i].img}') "></div>
            </div>
            <div class="card-body">
              <h2 class="card-title">${houseToRent[i].name}</h2>
              <p class="card-description">${houseToRent[i].desc}</p>
              <button class="card-button">I want it!</button>
            </div>
          </div>`)
        }
      }
    }
  }

  /** Injecter le template */
  cards.innerHTML = cardsArray;

}

createCards()


// for (let i = 0; i < houseToRent.length; i++) {
//   const div = document.createElement('div')
//   const card = `<div class="card">
//   <div class="card-header">
//     <div class="card-img" style="background-image:url('${houseToRent[i].img}') "></div>
//   </div>
//   <div class="card-body">
//     <h2 class="card-title">${houseToRent[i].name}</h2>
//     <p class="card-description">${houseToRent[i].desc}</p>
//     <button class="card-button">I want it!</button>
//   </div>`

//   div.innerHTML = card
//   cards.appendChild(div)
// }