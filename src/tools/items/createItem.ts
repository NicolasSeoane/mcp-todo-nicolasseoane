import { z } from "zod";
import { server } from "../../server.js";
import { createTodoItem } from "../../services/todoItemService.js";

export function createItemTool() {
    server.tool(
  "create-todoitems",
  "Tool to create a ToDo item in a list.",
  {
    description: z.string().describe("Description of the item"),
    todoListName: z.string().describe("Name of the Todo list")
  },
  async ({ description, todoListName }) => {
    const data = await createTodoItem(description, todoListName);
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