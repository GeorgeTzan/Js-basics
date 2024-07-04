let first_choice, second_choice;
let selected_operator;


function assignValues(value) {
    if (first_choice === undefined) {
        first_choice = value;
    }else if (second_choice === undefined){
        second_choice = value;
    }
}
function assignOperator(value) {
    selected_operator = value;
}

function Operator(){
    if (first_choice !== undefined && second_choice !== undefined){
        let final_choice;
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
                if (first_choice != 0){
                    final_choice = parseFloat(first_choice) / parseFloat(second_choice);
                    
                }else{
                    alert("Can't Divide by zero");
                }
                break;
        
            default:
                break;
        }
        alert('Your result is:' + final_choice);
        first_choice = undefined;
        second_choice = undefined;
        selected_operator = undefined;
        
    } 
}

