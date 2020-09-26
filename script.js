let lastOperand = 0
let operation = null

const inputWindow = document.getElementById('inputWindow');
const inputWindow2 = document.getElementById('inputWindow2');


document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1'
    inputWindow2.value += '1'
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2'
    inputWindow2.value += '2'  
}) 

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3' 
    inputWindow2.value += '3' 
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4'  
    inputWindow2.value += '4'
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5'  
    inputWindow2.value += '5'
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6' 
    inputWindow2.value += '6' 
})

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7'  
    inputWindow2.value += '7'
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8'  
    inputWindow2.value += '8'
})

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9'  
    inputWindow2.value += '9'
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0' 
    inputWindow2.value += '0' 
})

document.getElementById('btn_dot').addEventListener('click', function () {
    inputWindow.value += '.'
    inputWindow2.value += '.'
    lastOperand = parseFloat(inputWindow.value)  
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = 'sum'
    inputWindow.value = ''
    inputWindow2.value += '+'
    
})

document.getElementById('btn_sub').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = 'sub'
    inputWindow.value = ''
    inputWindow2.value += '-'
})

document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = 'mult'
    inputWindow.value = ''
    inputWindow2.value += '*'
})

document.getElementById('btn_division').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = 'division'
    inputWindow.value = ''
    inputWindow2.value += '÷'
})

document.getElementById('btn_root').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = null
    const result =  Math.sqrt(inputWindow.value)
    inputWindow.value = result
    inputWindow2.value += '√=' + result 
})

document.getElementById('btn_notion').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = null
    const result = lastOperand * (-1)
    inputWindow.value = result
    inputWindow2.value = result
})

document.getElementById('btn_calc').addEventListener('click', function () {
     if (operation === 'sum'){
         const result = lastOperand + parseFloat(inputWindow.value)
         operation = null
         lastOperand = 0
         inputWindow.value = result
         inputWindow2.value += '=' + result + ' '
     }

     if (operation === 'sub'){
        const result = lastOperand - parseFloat(inputWindow.value)
        operation = null
        lastOperand = 0
        inputWindow.value = result
        inputWindow2.value += '=' + result + ' '
    }

     if (operation === 'mult'){
        const result = lastOperand * parseFloat(inputWindow.value)
        operation = null
        lastOperand = 0
        inputWindow.value = result
        inputWindow2.value += '=' + result + ' '
    }

     if (operation === 'division'){
        const result = lastOperand / parseFloat(inputWindow.value)
        operation = null
        lastOperand = 0
        inputWindow.value = result
        inputWindow2.value += '=' + result + ' '
    }
  

})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0
    operation = null
    inputWindow.value = ''
   
})


