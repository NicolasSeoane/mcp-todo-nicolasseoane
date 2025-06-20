import { z } from "zod";
import { server } from "../../server.js";
import { markItemAsCompleted } from "../../services/todoItemService.js";

export function markAsCompleteItemTool() {
    server.tool(
        "mark-todoitem-completed",
        "Tool to mark a ToDo item as completed in a list.",
        {
            todoItemName: z.string().describe("Name of the ToDo item"),
            todoListName: z.string().describe("Name of the ToDo list")
        },
        async ({ todoItemName, todoListName }) => {
            const data = await markItemAsCompleted(todoItemName, todoListName);
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