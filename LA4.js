// Queue System for Customer Service

// Create a array to hold customer name
let customerName = [];

// Names of customers
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Add customers to the queue using push
for (let i = 0; i < customers.length; i++) {
    customerName.push(customers[i]);
    console.log(`${customers[i]} added to the queue with number ${i + 1}`);
}

// Function to display the current queue
function displayCurrtQueue() {
    console.log("Current Queue: ", customerName);
}

// Display the initial queue
displayCurrtQueue();

// While loop to servicing customers
while (customerName.length > 0) {
    // Prompt for the customer number to be serviced or exit option
    let serviceNumber = prompt("Enter the number of the customer to be serviced (1-5) or type 'exit' to quit:");

    // Check if user wants to exit
    if (serviceNumber.toLowerCase() === 'exit') {
        console.log("Exiting the service. Thank you!");
        break;
    }

    // Convert input to an integer and adjust for zero-based index
    let index = parseInt(serviceNumber) - 1; // Adjust for zero-based index

    // Check if the entered number is valid
    if (index >= 0 && index < customerName.length) {
        // Get the customer's name from the queue
        let servicedCustomer = customerName[index];
        console.log(`${servicedCustomer} is being serviced.`);
        
        // Remove the serviced customer from the queue
        customerName.pop(index, 1);
        
        // Display the updated queue
        displayCurrtQueue();
    } else {
        alert("Invalid number. Please enter a number between 1 and 5.");
    }
}

console.log("Final Queue: ", customerName);
