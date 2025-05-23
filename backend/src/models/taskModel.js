import db from "../config/db.js";


// Get all tasks
const getTasks = async () => {
  try {
    const tasks = await db("Tasks").select("*")
    return tasks
  } catch (err) {
    console.error("Error fetching tasks:", err); throw err
  }
}

// Get task by ID
const getTaskById = async (taskId) => {
  try {
    const task = await db("Tasks").where({ id: taskId }).first()
    return task
  } catch (err) {
    console.error("Error fetching task:", err);
  }
}

// Create a new task
const createTask = async (title, body, time, lane_id) => {
  try {
    const data = {
      [TASK_FIELDS.title]: title,
      [TASK_FIELDS.body]: body,
      [TASK_FIELDS.time]: time,
      [TASK_FIELDS.lane_id]: lane_id,
    }
    const newTask = await db("Tasks")
      .insert(data)
      .returning("*")
    return newTask[0] 
  } catch (err) {
    console.error("Error creating task:", err)
  }
}

// Update a task
const updateTask = async (id, updates) => {
  try {
    const result = await db('Tasks')
      .where({ id })
      .update(updates);

    return result > 0;
  } catch (err) {
    console.error("Error updating task:", err);
    throw err;
  }
}

// Delete a task
const deleteTask = async (taskId) => {
  try {
    const rowsAffected = await db("Tasks").where({ id: taskId }).del()
    return rowsAffected > 0
  } catch (err) {
    console.error("Error deleting task:", err);
  }
}


export { getTasks, getTaskById, createTask, updateTask, deleteTask };

// Constants for task fields
const TASK_FIELDS = {
  title: `title`,
  body: `body`,
  time: `time`,
  lane_id: `lane_id`
}