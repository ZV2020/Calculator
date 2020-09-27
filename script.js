let lastOperand = 0
let operation = null


const inputWindow = document.getElementById('inputWindow');
const inputWindow2 = document.getElementById('inputWindow2');

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1'
    addToHistoty('1')
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2'
    addToHistoty('2')  
}) 

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3' 
    addToHistoty('3') 
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4'  
    addToHistoty('4')
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5'  
    addToHistoty('5')
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6' 
    addToHistoty('6') 
})

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7'  
    addToHistoty('7')
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8'  
    addToHistoty('8')
})

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9'  
    addToHistoty('9')
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0' 
    addToHistoty('0') 
})

document.getElementById('btn_dot').addEventListener('click', function () {
    inputWindow.value += '.'
    addToHistoty('.')
    lastOperand = parseFloat(inputWindow.value)  
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = 'sum'
    inputWindow.value = ''
    addToHistoty('+')
    
})

document.getElementById('btn_sub').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = 'sub'
    inputWindow.value = ''
    addToHistoty('-')
})

document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = 'mult'
    inputWindow.value = ''
    addToHistoty('*')
})

document.getElementById('btn_division').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    operation = 'division'
    inputWindow.value = ''
    addToHistoty('÷')
})

document.getElementById('btn_root').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value)
    const result =  Math.sqrt(inputWindow.value)
    inputWindow.value = result
    addToHistoty('√=' + result) 
})

document.getElementById('btn_notion').addEventListener('click', function () {
    const currentValue = parseFloat(inputWindow.value);
    let newValue = -1 * currentValue; 
    inputWindow.value = newValue
    replaceHistory(currentValue, newValue); 
})

document.getElementById('btn_calc').addEventListener('click', function () {
     if (operation === 'sum'){
         const result = lastOperand + parseFloat(inputWindow.value)
         operation = null
         lastOperand = 0
         inputWindow.value = result
         addToHistoty('=' + result + ' ')
     }

     if (operation === 'sub'){
        const result = lastOperand - parseFloat(inputWindow.value)
        operation = null
        lastOperand = 0
        inputWindow.value = result
        addToHistoty('=' + result + ' ')
    }

     if (operation === 'mult'){
        const result = lastOperand * parseFloat(inputWindow.value)
        operation = null
        lastOperand = 0
        inputWindow.value = result
        addToHistoty('=' + result + ' ')
    }

     if (operation === 'division'){
        const result = lastOperand / parseFloat(inputWindow.value)
        operation = null
        lastOperand = 0
        inputWindow.value = result
        addToHistoty('=' + result + ' ');
    }
  

})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0
    operation = null
    inputWindow.value = ''
    addToHistoty(' ')
   
})

function addToHistoty(data){
    inputWindow2.value += data;
    while (inputWindow2.value.length > 30) {
        inputWindow2.value = inputWindow2.value.substring(1)
    }
}

function replaceHistory(currentValue, newValue) {
    inputWindow2.value = inputWindow2.value.substring(0, inputWindow2.value.length - currentValue.toString().length);
    addToHistoty(newValue);
}