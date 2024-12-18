// Simple Queueing System for Customer Service

// Hash function to determine the index for customer names
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 5; // Using modulo 5 for a table of size 5
}

// Customer service queue
const customers = new Array(5).fill(null); // Hashed table for customers
const queue = []; // Array to manage the order of customers

// Function to add a customer
function addCustomer(name) {
    const index = hashFunction(name);
    customers[index] = name; // Store in hashed table
    queue.push(name); // Add to the queue
    console.log(`Customer ${name} added with number ${queue.length}`);
}

// Function to service a customer
function serviceCustomer(number) {
    if (number < 1 || number > queue.length) {
        alert("Invalid number. Please enter a valid customer number.");
        return;
    }
    
    const customerName = queue[number - 1];
    customers[hashFunction(customerName)] = null; // Remove from hashed table
    queue.pop(number - 1, 1); // Remove from queue
    console.log(`Servicing customer: ${customerName}`);
    console.log("Updated hashed table:", customers);
}

// Adding customers to the queue
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
addCustomer("Lito");
addCustomer("Engelbert");

// Display current queue
console.log("Current Queue:", queue);

// Simulate servicing a customer by asking for their number
const serviceNumber = parseInt(prompt("Enter the customer number to be serviced (1-5):"));
serviceCustomer(serviceNumber);

// Final display of the updated queue and hashed table
console.log("Final Queue:", queue);
console.log("Final Hashed Table:", customers);
