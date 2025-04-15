//Function to calculate and display the total cost
function calculateTotal() {
    //Get the input values
    const price = parseFloat(document.getElementById('pricePerLiter').value);
    const liters = parseFloat(document.getElementById('litersPurchased').value);
  
    //Check for NaN values and fallback to 0
    const validPrice = isNaN(price) ? 0 : price;
    const validLiters = isNaN(liters) ? 0 : liters;
  
    //Calculate the total cost
    const total = validPrice * validLiters;
  
    //Display the total cost formatted to two decimal places
    document.getElementById('totalCost').textContent = `Total: $${total.toFixed(2)}`;
}