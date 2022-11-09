let btn = document.querySelector('#new-quote');
let person = document.querySelector('.figure');
let quote = document.querySelector('.text-section');
let quotes = [
    {quote: '"I am gonna make him an offer that he cannot refuse."',
    person: '~ Don Vito Corleone, The GodFather'}, 
    {quote: '"I have learned more in streets than in any classroom."',
    person: '~ Don Vito Corleone, The GodFather'},
    {quote: '"I believe in America, America has made my fortune."',
    person: '~ Don Vito Corleone, The GodFather'},
    {quote: '"Great Men are not born Great they Grow Great."',
    person: '~ Don Vito Corleone, The GodFather'},
    {quote: '"Keep your friends close, but your enemies closer"',
    person: '~ Michael Corleone'},
    {quote: '"A man does not spend time with his family can never be a man."',
    person: '~ Don Vito Corleone, The GodFather'},
    {quote: '"Forgive, forget, life is full of misfortunes."',
    person: '~ Don Vito Corleone, The GodFather'}
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    person.innerText = quotes[random].person;
    quote.innerText = quotes[random].quote;
});

function displayTime() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    document.querySelector('#hour').innerText = hours;
    document.querySelector('#minutes').innerText = minutes;
    document.querySelector('#seconds').innerText = seconds;
    let session = document.querySelector('#session');
    if (hours >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }
}
setInterval(displayTime, 10);

// let image = document.querySelector('#Images');
// let images = ['behind-the-scenes-1.jpeg', 'behind-the-scenes-2.jpeg',
// 'behind-the-scenes-3.jpeg','behind-the-scenes-4.jpeg', 'behind.jpeg'];
// function displayImage() {
//     let random = Math.floor(Math.random() * 5);
//     image.src = images[random];
// }
// setInterval(displayImage(), 800);








