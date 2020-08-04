// Your code goes here

// Your code goes here

//1)mouseover
const links = document.querySelectorAll('a');

links.forEach( (item) => {
    item.addEventListener('mouseover', (event) => {
        item.style.backgroundColor = "black";
        item.style.color = "white"
      })
})

//2)mouseleave
links.forEach( (item) => {
    item.addEventListener('mouseleave', (event) => {
        item.style.backgroundColor = "white";
        item.style.color = "black"
      })
})



//3)wheel
const logoHeading = document.querySelector('.logo-heading')

 logoHeading.addEventListener ('wheel', (event)=>{
    logoHeading.style.fontSize = "50px"
 })


//4)dblclick
const busImg = document.querySelector('.intro img')
busImg.addEventListener('dblclick', (event)=> {
    busImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ-P8cQTPRtpIiGCV0CvcUzzptYGnBGXp15A&usqp=CAU"
})

//4)mouseenter
const h2 = document.querySelectorAll('h2')

h2.forEach( (item)=> {
    item.addEventListener('mouseenter', (event)=> {
        item.style.fontWeight = "bold"
    })
})

h2.forEach( (item)=> {
    item.addEventListener('mouseleave', (event)=> {
        item.style.fontWeight = "normal"
    })
})

//5)click
const imgContent =  document.querySelector('.img-content img')
imgContent.addEventListener('click', (event)=> {
    imgContent.style.border= "10px solid orange"
})

//6)keydown
document.addEventListener('keydown', event=> {
    if(event.key === 'Escape')
    alert("Ready to escape to a vacation? Try pressing 'v' ")
})

//7)load
window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });

//8)contextmenu
const p = document.querySelectorAll('p')
p.forEach((item)=>{
    item.addEventListener('contextmenu', (event)=> {
        item.style.fontStyle = "italic"
    })
})

//9)mousedown
//executes no matter where the pointer is after releasing
const btn = document.querySelectorAll('.btn')
btn.forEach( (item)=> {
    item.addEventListener('mousedown', (event)=> {
        alert("You signed up")
        item.style.backgroundColor="black"
        item.textContent = "Thank You!"
    })
    
})

//10)mouseup
// release key to execute


const containerHome = document.querySelector('.container.home')


document.addEventListener('keyup', (event)=> {
    containerHome.style.backgroundColor = "#FEBA51"
})












