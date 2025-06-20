import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createItemTool } from "./tools/items/createItem";
import { updateItemTool } from "./tools/items/updateItem";
import { markAsCompleteItemTool } from "./tools/items/markAsCompleteItem";
import { deleteItemTool } from "./tools/items/deleteItem";
import { getAllTodoItemsTool } from "./tools/items/getAllTodoItems";
import { getTodoItemsByListNameTool } from "./tools/items/getTodoItemsByListNameTool";
import { createListTool } from "./tools/lists/createList";
import { getAllTodoListTool } from "./tools/lists/getAllTodoList";
import { updateTodoListNameTool } from "./tools/lists/updateTodoListName";
import { deleteTodoListTool } from "./tools/lists/deleteTodoList";


const server = new McpServer({
    name: "ToDo Api challenge",
    version: "1.0.0"
});

// ------ TOOLS -------
//items
getAllTodoItemsTool();
getTodoItemsByListNameTool();
createItemTool();
updateItemTool();
markAsCompleteItemTool();
deleteItemTool();

//lists
getAllTodoListTool();
createListTool();
updateTodoListNameTool();
deleteTodoListTool();

export { server };