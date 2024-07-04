let first_choice, second_choice;
let selected_operator;

function assign_Values(value) {
    if (first_choice === undefined) {
        first_choice = value;
    
    }else if( first_choice !== undefined && selected_operator === undefined){
        first_choice = Number(String(first_choice) + String(value));
    }
    
    else if (second_choice === undefined){
        second_choice = value;

    }else if( second_choice !== undefined){
        second_choice = Number(String(second_choice) + String(value));
    }
}

function assign_Operator(value) {
    selected_operator = value;
}

function Oprator_Switch(){
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
            }
            break;
    
        default:
            break;
    }
}

function Operator_result(){
    if (first_choice !== undefined && second_choice !== undefined){
        let final_choice;
        OpratorSwitch()
        alert('Your result is:' + final_choice);
        first_choice = undefined;
        second_choice = undefined;
        selected_operator = undefined;
        
    } 
}

