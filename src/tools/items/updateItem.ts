import { z } from "zod";
import { server } from "../../server.js";
import { updateTodoItemDescription } from "../../services/todoItemService.js";

export function updateItemTool() {
    server.tool(
        "update-todoitem",
        "Tool to update a ToDo item description in a list.",
        {
            todoItemName: z.string().describe("Name of the ToDo list"),
            description: z.string().describe("New description of the ToDo item"),
            todoListName: z.string().describe("Name of the ToDo list")
        },
        async ({ todoItemName, description, todoListName }) => {
            const data = await updateTodoItemDescription(todoItemName, description, todoListName);
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