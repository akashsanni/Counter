const decreaseBtn = document.querySelector('.btn-decrease')
const increaseBtn = document.querySelector('.btn-increase')
const resetBtn = document.querySelector('.btn-reset')

let count = 0

function decreaseFunction(){
    count = count-1
    document.querySelector('.counter').innerText=count
    if(count<0)
    document.querySelector('.counter').style.color='red'
    else if(count>0)
    document.querySelector('.counter').style.color='green' 
    else
    document.querySelector('.counter').style.color='black'
}

function increaseFunction(){
    count++
    document.querySelector('.counter').innerText=count
    if(count<0)
        document.querySelector('.counter').style.color='red'
    else if(count>0)
        document.querySelector('.counter').style.color='green' 
    else
        document.querySelector('.counter').style.color='black'
}

function resetFunction(){
    count=0
    document.querySelector('.counter').innerText=count
    if(count<0)
        document.querySelector('.counter').style.color='red'
    else if(count>0)
        document.querySelector('.counter').style.color='green' 
    else
        document.querySelector('.counter').style.color='black'

}

decreaseBtn.addEventListener('click',decreaseFunction)
increaseBtn.addEventListener('click',increaseFunction)
resetBtn.addEventListener('click',resetFunction)