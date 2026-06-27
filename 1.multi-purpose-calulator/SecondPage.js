

const Subtotal_Input = document.getElementById('price');  
const taxRate_Input = document.getElementById('tax');    
const calculate_Button = document.getElementById('tax-button');
const tax_result = document.getElementById('tax-result');

calculate_Button.addEventListener('click', () => {

    tax_result.textContent = ""; 
    tax_result.value = "";

    try {
        //defult value

        const subtotal = Subtotal_Input.valueAsNumber || 0;
        const taxRate = taxRate_Input.valueAsNumber || 0;

        //check number

        if (subtotal < 0 || taxRate < 0) {
            throw new Error("error enter +ve value");
        }

        // calculation

        const taxAmount = subtotal * (taxRate / 100);
        const finalTotal = subtotal + taxAmount;
        const taxValue = finalTotal - subtotal;
        tax_result.value = finalTotal.toFixed(2) + `$ | the tax value is : ` + taxValue.toFixed(2) + `$` ;
        
    } catch (error) {
    tax_result.value = error.message;

    }
});
