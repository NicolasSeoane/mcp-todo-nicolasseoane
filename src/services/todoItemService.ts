import { API_BASE_URL } from "./util";
import { getListIdByName } from "./todoListService";

// -------------------- Get All Todo Items ---------------------
export async function getAllTodoItems() {
  const response = await fetch(`${API_BASE_URL}/items`);
  const data = await response.json();
  return Array.isArray(data) ? data : data.items ?? [];
}
// ------------------- END Get All Todo Items ---------------------

// ------------------- Get Todo Items by List Name ---------------------
export async function getTodoItemsByListName(todoListName: string) {
  const listId = await getListIdByName(todoListName);
  const response = await fetch(`${API_BASE_URL}/todolists/${listId}`);
  const data = await response.json();
  return Array.isArray(data) ? data : data.items ?? [];
}
// ------------------- END Get Todo Items by List Name ---------------------


// ------------------- Create Todo Item ---------------------
export async function createTodoItem(description: string, todoListName: string) {
    const listId = await getListIdByName(todoListName);
    const response = await fetch(`${API_BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description, todoListId: listId })
  });
  return await response.json();
}
// ------------------- END Create Todo Item ---------------------

// ------------------- Update Todo Item (change description)---------------------

export async function updateTodoItemDescription(itemName: string, newDescription: string, todoListName: string) {
  const itemId = await getItemIdByName(itemName, todoListName);

  const response = await fetch(`${API_BASE_URL}/items/ChangeDescription?id=${itemId}&todoItemDescription=${newDescription}`, {
    method: "PUT",
    headers: { 
      "Accept": "*/*",
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({ description: newDescription })
  });
  return await response.json();
}



// ------------------- END Update Todo Item (change description)---------------------


// ------------------- Mark item as completed ----------------------

export async function markItemAsCompleted(itemName: string, todoListName: string) {
  const itemId = await getItemIdByName(itemName, todoListName);

  const response = await fetch(`${API_BASE_URL}/items/MarkAsCompleted?id=${itemId}`, {
    method: "PUT",
    headers: { "Accept": "*/*", "Content-Type": "application/json" }
  });
  return await response.json();
}

// ------------------- END Mark item as completed ----------------------
// 


// ------------------- Delete Todo Item ---------------------
export async function deleteTodoItem(itemName: string, todoListName: string) {
  const itemId = await getItemIdByName(itemName, todoListName);

  const response = await fetch(`${API_BASE_URL}/items/${itemId}`, {
    method: "DELETE",
    headers: { "Accept": "*/*", "Content-Type": "application/json" }
  });
  return await response.json();
}



//------------------ UTILS ---------------------
// Function to get item ID by name and list name
async function getItemIdByName(itemName: string, todoListName: string): Promise<number> {
  const response = await fetch(`${API_BASE_URL}/items`);
  const data = await response.json();
  const items = Array.isArray(data) ? data : data.items ?? [];
  const item = items.find((i: any) => i.description.toLowerCase() === itemName.toLowerCase() && i.todoListName.toLowerCase() === todoListName.toLowerCase());
  if (!item) throw new Error(`Item "${itemName}" not found`);
  return item.id;
}

