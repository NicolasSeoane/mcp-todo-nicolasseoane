import { server } from "../../server.js";
import { getAllTodoLists } from "../../services/todoListService.js";

export function getAllTodoListTool() {
    server.tool(
        "get-all-todolists",
        "Tool to get all ToDo lists.",
        {},
        async () => {
            const data = await getAllTodoLists();
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