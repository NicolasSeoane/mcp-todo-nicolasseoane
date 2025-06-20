import { z } from "zod";
import { server } from "../../server.js";
import { deleteTodoList } from "../../services/todoListService.js";

export function deleteTodoListTool() {
    server.tool(
        "delete-todolist",
        "Tool to delete a ToDo list.",
        {
            name: z.string().describe("Name of the Todo list to delete")
        },
        async ({ name }) => {
            const data = await deleteTodoList(name);
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