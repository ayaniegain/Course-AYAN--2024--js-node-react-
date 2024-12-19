
let submit=document.getElementById('submit')
let failed=document.getElementById('failed')
let info=document.getElementById('info')
let warning=document.getElementById('warning')
let alerttext=document.getElementById('alertText')

let clr
alerttext.addEventListener("click",function () {
    

    alerttext.innerText=''
    alerttext.style.background=''
    clearTimeout(clr)
    
    
})


submit.style.background='green'
failed.style.background='orange'
info.style.background='skyBlue'
warning.style.background='yellow'

const handleSubmit=()=>{
    alerttext.innerText='successfully submited'
    alerttext.style.background='green'
    
    clearValue()
}

const handleFailed=()=>{
     alerttext.innerText='failed '
    alerttext.style.background='orange'
    
    clearValue()
}

const handleInfo=()=>{
    alerttext.innerText='info  showed'
    alerttext.style.background='skyBlue'
    alerttext.style.color='black'
    clearValue()
    
}

const handleWarning=()=>{
     alerttext.innerText='Warning showed'
    alerttext.style.background='yellow'
    alerttext.style.color='black'
    clearValue()
}

function clearValue() {
    
    
    clearTimeout(clr)
    
   clr=setTimeout(() => {
        
        alerttext.innerText=''
        alerttext.style.background=''
        
        
    }, 5000);

}