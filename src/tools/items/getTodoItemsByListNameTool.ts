import { z } from "zod";
import { server } from "../../server.js";
import { getTodoItemsByListName } from "../../services/todoItemService.js";

export function getTodoItemsByListNameTool() {
    server.tool(
        "get-todoitems-by-listname",
        "Tool to get all ToDo items in a specific list by its name.",
        {
            todoListName: z.string().describe("Name of the ToDo list")
        },
        async ({ todoListName }) => {
            const data = await getTodoItemsByListName(todoListName);
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