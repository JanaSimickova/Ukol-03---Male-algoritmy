const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

// console.log(numbers)
// document.body.innerHTML += numbers

// 1. Vypište do stránky všechna čísla.
document.body.innerHTML += "<h3>1. Vypište do stránky všechna čísla</h3>"
numbers.forEach(item => {
  document.body.innerHTML += `${item}, `
})

// 2. Vypište do stránky druhé mocniny všech čísel.
document.body.innerHTML += "<h3>2. Vypište do stránky druhé mocniny všech čísel</h3>"
numbers.forEach(item => {
  document.body.innerHTML += `${item * item}, `
})

// 3. Vypište do stránky pouze záporná čísla.
document.body.innerHTML += "<h3>3. Vypište do stránky pouze záporná čísla</h3>"
numbers.forEach(item => {
  if(item < 0) {
    document.body.innerHTML += `${item}, `
  }
})

// 4. Vypište do stránky absolutní hodnotu všech čísel.
document.body.innerHTML += "<h3>4. Vypište do stránky absolutní hodnotu všech čísel</h3>"
numbers.forEach(item => {
  if(item < 0) {
    document.body.innerHTML += `${item * - 1}, `
  } else {
    document.body.innerHTML += `${item}, `
  }
})

// 5. Vypište do stránky pouze sudá čísla.
document.body.innerHTML += "<h3>5. Vypište do stránky pouze sudá čísla</h3>"
numbers.forEach(item => {
  if(item % 2 === 0) {
    document.body.innerHTML += `${item}, `
  }
})

// 6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
document.body.innerHTML += "<h3>6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi</h3>"
numbers.forEach(item => { 
  if(item % 3 === 0 && item < 0) {
    document.body.innerHTML += `${item * -1}, `
  } else if(item % 3 === 0 && item > 0) {
    document.body.innerHTML += `${item}, `
  }
})

// 7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
document.body.innerHTML += "<h3>7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5</h3>"
numbers.forEach(item => {
  if(item > 5) {
    document.body.innerHTML += `${item - 5}, `
  } else if(item <= 5) {
    document.body.innerHTML += `${5 - item}, `
  }
})

// 8. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
document.body.innerHTML += "<h3>8. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5</h3>"
numbers.forEach(item => {
  if(item > 5) {
    document.body.innerHTML += `${(item - 5) * (item - 5)}, `
  } else if(item <= 5) {
    document.body.innerHTML += `${(5 - item) * (5 - item)}, `
  }
})

// 9. Spočítejte, kolik je v seznamu záporných čísel.
document.body.innerHTML += "<h3>9. Spočítejte, kolik je v seznamu záporných čísel</h3>"
const zaporna = []
numbers.forEach(item => {
  if(item < 0) {
    zaporna.push(item)
  }
})
document.body.innerHTML += `<p>V seznamu je ${zaporna.length} záporných čísel.</p>`


// 10. Spočítejte součet všech čísel v poli.
document.body.innerHTML += "<h3>10. Spočítejte součet všech čísel v poli</h3>"
let soucet = 0
numbers.forEach(item => {
  soucet += item
})
document.body.innerHTML += `<p>Součet všech čísel v poli je ${soucet}.</p>`

// 11. Spočítejte průměr všech čísel v poli.
document.body.innerHTML += "<h3>11. Spočítejte průměr všech čísel v poli</h3>"
const prumer = soucet / numbers.length
document.body.innerHTML += `<p>Průměr všech čísel v poli je ${prumer}.</p>`


// 12. Spočítejte součet všech kladných čísel v poli.
document.body.innerHTML += "<h3>12. Spočítejte součet všech kladných čísel v poli</h3>"
let soucetKladnych = 0
numbers.forEach(item => {
  if(item > 0) {
    soucetKladnych += item
  }
})
document.body.innerHTML += `<p>Součet všech čísel v poli je ${soucetKladnych}.</p>`
