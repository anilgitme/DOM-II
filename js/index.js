// Your code goes here

//1 'mouseover' changes bg color when mouse is over target
const nav = document.querySelector('.nav')
nav.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'pink';
});

// 2 'CLICK' changes font size on click on the first a tag
const a = document.querySelector('a')
a.addEventListener('click', event => {
    event.stopPropagation();
    event.target.style.fontSize = '2rem'
})


//3 'mouseleave' change bg color when mouse leaves
const container = document.querySelector('.container')
container.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.borderColor = 'red';
})

//4 'wheel' swap img when wheel is used on img
const img = document.querySelector('.img-content img')
img.addEventListener('wheel', event => {
    event.target.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCOrVrNWtohbGxFgPspz6VL6A-2YlmpW7HTw&usqp=CAU')

})

//5 'load' alert a message when page loads
window.addEventListener("load", myScript);

function myScript() {
    alert("welcome to fun bus")
}

//6 'focus' focused element should change color
a.addEventListener('focus', event => {
    event.target.style.color = 'blue';
    //stop propagation
    event.preventDefault();
})

//7 'resize'should alert when window is resized

window.addEventListener('resize', windowSize);
const height = window.innerHeight;
const width = window.innerWidth;

function windowSize() {
    alert(`height:${height} + width:${width}`)
}

window.onresize = windowSize;

//8'dblclick' adds a border around the bus
const bus = document.querySelector('.intro img')
bus.addEventListener('dblclick', event => {
    event.target.style.border = 'solid green';

})

//9 'keydown' logs the pressed key "z"
document.addEventListener('keydown', event => {
    const key = event.key;
    if (key === 'z') {
        alert(`You press ${key} you will be booted from the site!`)
    }
});

//10 'blur' changes back the style to original when clicked out of target

a.addEventListener('blur', (event) => {
    event.target.style.fontSize = '';
});

//11 stops propagation from "click"
a.addEventListener('click', event => {
    event.target.style.fontSize = '3rem'
})