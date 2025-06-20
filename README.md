# Servidor MCP local con Claude
Este repositorio contiene un servidor MCP (Model Context Protocol) desarrollado TypeScript. Este servidor expone tools que pueden ser invocadas desde Claude Desktop mediante lenguaje natural.

## Requisitos previos
- Node.js (versión 18 o superior)
- npm (v9 o superior)
- Claude Desktop
- (Opcional) Visual Studio Code

## Instalación
1. **Clona este repositorio:**
```bash
git clone https://github.com/NicolasSeoane/mcp-todo-nicolasseoane.git
cd mcp-todo-nicolasseoane
```

2. Instala las dependencias:
```bash
npm install
```

## Claude 
Editar la configuracion de Claude
![image](https://github.com/user-attachments/assets/f613b2d5-93a7-4438-b601-c7eadeab9f1a)

y en el archivo claude_desktop_config.json copiar el siguiente codigo
```json
{
  "mcpServers": {
    "TodoApi": {
      "command": "npx",
      "args": [
        "-y",
        "tsx",
        "C:/Users/nicol/Documents/GitHub/MCP-TodoChallenge/src/index.ts"
      ]
    }
  }
}
```
Siendo el tercer argumento la direccion del index.ts donde hayan clonado el repositorio.
