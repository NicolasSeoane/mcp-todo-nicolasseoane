import { z } from "zod";
import { server } from "../../server.js";
import { createTodoList } from "../../services/todoListService.js";

export function createListTool() {
    server.tool(
        "create-todolist",
        "Tool to create a ToDo list.",
        {
            name: z.string().describe("Name of the Todo list")
        },
        async ({ name }) => {
            const data = await createTodoList(name);
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