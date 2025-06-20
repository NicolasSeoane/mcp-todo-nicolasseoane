import { API_BASE_URL } from "./util";

// -------------------- Get All Todo Lists ---------------------
export async function getAllTodoLists() {
    const response = await fetch(`${API_BASE_URL}/todolists`);
    return await response.json();
}
// ------------------- END Get All Todo Lists ---------------------


// ------------------- Create Todo List ---------------------
export async function createTodoList(name: string) {
    const response = await fetch(`${API_BASE_URL}/todolists`, {
        method: "POST",
        headers: { 
            "accept": "text/plain",
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ name })
    });

    if (response.status === 204) return null; // NoContent
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al crear la lista: ${response.status} - ${errorText}`);
    }
    const text = await response.text();
    return text ? JSON.parse(text) : null;
}

// ------------------- END Create Todo List ---------------------

// ------------------- Update Todo List Name ---------------------
export async function updateTodoListName(oldName: string, newName: string) {
    const listId = await getListIdByName(oldName);

    const response = await fetch(`${API_BASE_URL}/todolists/${listId}?descripcion=${encodeURIComponent(newName)}`, {
        method: "PUT",
        headers: { "Accept": "*/*", "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName })
    });
    return await response.json();
}
// ------------------- END Update Todo List Name ---------------------

// ------------------- Delete Todo List ---------------------
export async function deleteTodoList(name: string) {
    const listId = await getListIdByName(name);

    const response = await fetch(`${API_BASE_URL}/todolists/${listId}`, {
        method: "DELETE",
        headers: { "Accept": "*/*", "Content-Type": "application/json" }
    });
    return await response.json();
}
// ------------------- END Delete Todo List ---------------------







// ------------------ UTILS ---------------------
export async function getListIdByName(todoListName: string): Promise<number> {
  const response = await fetch(`${API_BASE_URL}/todolists`);
  
  const lists = await response.json();

  const list = lists.find((l: any) => l.name.toLowerCase() === todoListName.toLowerCase());
  if (!list) throw new Error(`List "${todoListName}" not found`);
  return list.id;
}