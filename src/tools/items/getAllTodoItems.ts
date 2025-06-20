import { server } from "../../server.js";
import { getAllTodoItems } from "../../services/todoItemService.js";

export function getAllTodoItemsTool() {
    server.tool(
        "get-all-todoitems",
        "Tool to get all ToDo items in a list.",
        async () => {
            const data = await getAllTodoItems();
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