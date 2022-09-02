const lables = document.querySelectorAll('.form-control label')

lables.forEach(lable =>{
    lable.innerHTML = lable.innerText
    .split('')
    .map((letter,idx) => `<span style = "transition-delay:${idx * 50}ms"> ${letter}</span>`)
    .join('')
    console.log(lable.innerHTML)
}) 