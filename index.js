// newTask object bundle to express all related state and behaviors
function newTask(title, description) {
  // object task
  const task = {
    // index 0-2
    title: title,
    description: description,
    complete: false,
    // index 3
    logState: function () {
      console.log(`${this.title} has${this.complete ?' ':' not '}been completed`);
    },
    // index 4
    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
