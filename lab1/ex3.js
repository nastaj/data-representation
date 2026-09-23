// 3a)
// Create an array of tasks
const tasks = ["Mop the floors", "Complete the lab", "Cook dinner"];

// 3b)
// addTask arrow function
const addTask = (newTask) => {
    // Create new array of previous tasks and new task for immutability
    const newTasks = [...tasks, newTask];
    // Log the operation
    console.log("New task has been added.");
    // Log the number of items in the new, updated array
    console.log(`Number of items in the array: ${newTasks.length}`);
};

addTask("Wash dishes");

// 3c)
// listAllTasks arrow function
const listAllTasks = () => {
    // Log each task in the tasks array using forEach loop
    tasks.forEach(task => console.log(task));
}

listAllTasks();

// 3d)
// deleteTask arrow function
const deleteTask = (task) => {
    // Create new array for immutability
    // Filter the tasks array, creating the newTasks array from all the values that are not equal to the specified task
    // Essentialy deletes the specified value
    const newTasks = tasks.filter(value => value !== task);
    // Log the operation
    console.log("Task successfully removed.")
    // Log the number of items in the new, updated array
    console.log(`Number of items in the array: ${newTasks.length}`);
}

deleteTask("Cook dinner");