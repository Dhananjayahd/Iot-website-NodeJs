const button1 = document.getElementById('btn1')
button1.addEventListener('click',()=>{
    fetch('/api/state/ledon',{method:'POST'})
    .then((click)=>{
        if(click){
            console.log('ledon clicked')
        }
    })
    .catch(err=> console.log(err))
})

const button2 = document.getElementById('btn2')
button2.addEventListener('click',()=>{
    fetch('/api/state/ledoff',{method:'POST'})
    .then((click)=>{
        if(click){
            console.log('ledoff clicked')
        }
    })
    .catch(err =>console.log(err))
})

// if(button.value=='LedOff'&& i==0){
//     fetch('/ledoff',{method:'POST'})
//     .then(()=>{
//         button.value='LedON'
//     })
//     .catch(err => console.log(err))

// }

function button(){
    document.getElementById('btns1').innerHTML='led 1 is turnned on'
}

function buttonoff(){
    document.getElementById('btns1').innerHTML='led 1 is turnned off'
}