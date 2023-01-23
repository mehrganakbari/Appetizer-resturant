import "../common/index.css"

// navbar links responsive
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// numbers
let num1 = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('#Number1');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (num1 !== percentageNumberValue) {
        num1++;
        percentageNumber.innerHTML = `${num1}+`;
    }
}, 50);

let num2 = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('#Number2');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (num2 !== percentageNumberValue) {
        num2++;
        percentageNumber.innerHTML = `${num2}+`;
    }
}, 25);

let num3 = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('#Number3');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (num3 !== percentageNumberValue) {
        num3++;
        percentageNumber.innerHTML = `${num3}+`;
    }
}, 100);

let num4 = 0;
setInterval(() => {
    const percentageNumber = document.querySelector('#Number4');
    const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
    if (num4 !== percentageNumberValue) {
        num4++;
        percentageNumber.innerHTML = `${num4}+`;
    }
}, 25);

// slider
var elem = document.getElementById('carrusel')
var Testimony = [{
        id: 1,
        name: 'Jason McClean',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        img: '/assets/images/person_1.jpg',
        company: 'Customer'
    },
    {
        id: 1,
        name: 'Mark Stevenson',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        img: '/assets/images/person_2.jpg',
        company: 'Customer'
    },
    {
        id: 1,
        name: 'Ian Boner',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        img: '/assets/images/person_3.jpg',
        company: 'Customer'
    },
    {
        id: 1,
        name: 'Cleibert Mora',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        img: '/assets/images/person_4.jpg',
        company: 'Customer'
    },
    {
        id: 1,
        name: 'Jason McClean',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        img: '/assets/images/person_1.jpg',
        company: 'Customer'
    },
    {
        id: 1,
        name: 'Mark Stevenson',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        img: '/assets/images/person_3.jpg',
        company: 'Customer'
    },
    {
        id: 1,
        name: 'Ian Boner',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        img: '/assets/images/person_2.jpg',
        company: 'Customer'
    },
]

var cards = ''

Testimony.forEach(el => {
    let template = `
    <div class="card flex flex-col items-center w-64 bg-white text-center p-4">
    <img src="${el.img}" class="rounded-full w-28 mb-6">
    <p class=" text-lite-text">${el.text}</p>
    <p class="font-bold mt-4">${el.name}</p>
    <p class="mt-4 text-sm text-lite-text">${el.company}</p>
    </div>
  `

    cards += template
})

elem.insertAdjacentHTML('beforeend', cards)

// ARROWS

var right = document.getElementById('carrousel-right')

var left = document.getElementById('carrousel-left')

right.addEventListener('click', function () {
    elem.scrollLeft += 260
})

left.addEventListener('click', function () {
    elem.scrollLeft -= 260
})