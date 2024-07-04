let first_choice, second_choice;
let selected_operator;
let currentInput = '';


function update_output(){
    document.getElementById('calculation-output').innerText = 'Current Input: ' + currentInput;
}

function clear_calc(){
    first_choice = undefined;
    second_choice = undefined;
    selected_operator = undefined;
    currentInput = '';
    update_output();
}

function assign_values(value) {
    if (first_choice === undefined) {
        currentInput = '';
        first_choice = value;
    
    }else if( first_choice !== undefined && selected_operator === undefined){
        first_choice = Number(String(first_choice) + String(value));
    }
    
    else if (second_choice === undefined){
        second_choice = value;

    }else if( second_choice !== undefined){
        second_choice = Number(String(second_choice) + String(value));
    }
    currentInput += String(value);
    update_output();
    console.log(first_choice, second_choice);
}

function assign_operator(value) {
    selected_operator = value;
    currentInput += ' ' + value + ' ';
    update_output();
}

function operator_switch(){
    switch (selected_operator) {
        case '+':
            final_choice = parseFloat(first_choice) + parseFloat(second_choice);
            break;
        case '-':
            final_choice = parseFloat(first_choice) - parseFloat(second_choice);
            break;
        case '*':
            final_choice = parseFloat(first_choice) * parseFloat(second_choice);
            break;
        case '/':
            if (second_choice != 0){
                final_choice = parseFloat(first_choice) / parseFloat(second_choice);
                
            }else{
                alert("Can't Divide by zero");
                clear_calc()
            }
            break;
    
        default:
            break;
    }
    return final_choice;
}

function operator_result(){
    
    if (first_choice !== undefined && second_choice !== undefined){
        let final_choice = operator_switch();
        currentInput+= " = " + final_choice;
        first_choice = undefined;
        second_choice = undefined;
        selected_operator = undefined;
        update_output();
        
    } 
}

