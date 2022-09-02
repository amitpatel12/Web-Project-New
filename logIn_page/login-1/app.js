let eye = document.getElementById('eye')
let eyeclass = document.querySelector('#eye')
console.log(eyeclass.className)
let pass = document.getElementById('pass')

eye.addEventListener('click',function(){
    if(pass.type === 'password'){
        pass.type = 'text'
        eyeclass.className = 'fa fa-eye-slash';
    }
    else{
        pass.type = 'password'
        eyeclass.className = 'fa fa-eye';
    }
})