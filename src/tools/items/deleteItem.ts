import { z } from "zod";
import { server } from "../../server.js";
import { deleteTodoItem } from "../../services/todoItemService.js";

export function deleteItemTool() {
    server.tool(
        "delete-todoitem",
        "Tool to delete a ToDo item from a list.",
        {
            todoItemName: z.string().describe("Name of the ToDo item"),
            todoListName: z.string().describe("Name of the ToDo list")
        },
        async ({ todoItemName, todoListName }) => {
            const data = await deleteTodoItem(todoItemName, todoListName);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(data, null, 2),
                    }
                ]
            }
        }
    );
}