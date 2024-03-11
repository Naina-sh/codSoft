document.addEventListener('DOMContentLoaded',function() {
    const inputField = document.querySelector('.input');

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click',() => {
            const buttonText = button.textContent;

            if( buttonText == '='){
                calculateResult();
                                   
            } else if(buttonText == 'AC'){

                clearDisplay();
            }else if(buttonText == 'DEL'){
                deleteLastChar();
            }else{
                appendToDisplay(buttonText);
            }
        });
    });
    function appendToDisplay(value){
        inputField.value += value;

    }
    function clearDisplay(){
        inputField.value='';
    }
    function deleteLastChar(){
        inputField.value = inputField.value.slice(0,-1);
    }
    function calculateResult(){
        const expression =inputField.value;
        if(expression){
            try{
                const result =eval(expression);
                inputField.value=result;
            }catch(error){
                alert('Invalid expression!')

            }
        }
    }

});