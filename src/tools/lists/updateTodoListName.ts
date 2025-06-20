import { z } from "zod";
import { server } from "../../server.js";
import { updateTodoListName } from "../../services/todoListService.js";

export function updateTodoListNameTool() {
    server.tool(
        "update-todolist-name",
        "Tool to update the name of a ToDo list.",
        {
            oldName: z.string().describe("Current name of the Todo list"),
            newName: z.string().describe("New name for the Todo list")
        },
        async ({ oldName, newName }) => {
            const data = await updateTodoListName(oldName, newName);
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