/*--------------- lesson-49 ------------*/
 const ul = document.querySelector('ul')
 const button = document.querySelector('button')
 button.addEventListener('click', () => {
   const li = document.createElement('li')
   li.textContent = 'Ilyos__👨‍💻👨‍💻☝ '
   ul.appendChild(li)
 })
 const items = document.querySelectorAll('li')
 items.forEach((item) => {
    item.addEventListener('click', (e) => {
     // e.target.remove()
     console.log('CLICKED LI')
     // e.stopPropagation()
   })
 })
 ul.addEventListener('click', (e) => {
   if (e.target.nodeName == 'LI') {
     e.target.remove()
   }
 })

// const ul = document.querySelector('ul')
// const button = document.querySelector('button')

// button.addEventListener('click', ()=> {
//     const li = document.createElement('li')
//     li.textContent = 'Ilyos Dasturchi....'
//     ul.appendChild(li)
// })
// const items = document.querySelectorAll('li')
// items.forEach((item) => {
//     item.addEventListener('click', (m)=> {
//         m.target.remove()
//         console.log('Bosildi')
//         m.stopPropagation()
//     })
// })
// ul.addEventListener('click', (m)=> {
//     if (m.target.nodeName == 'Li') {
//         m.target.remove()
//     }
// })