# 📘 README – Getting Started with TypeScript

## 🚀 Introduction to TypeScript

TypeScript (TS) is a superset of JavaScript developed by Microsoft. It adds static typing, interfaces, classes, and modern features on top of JavaScript.

### 🔑 Key Points:

- **TypeScript code cannot run directly in the browser.** The browser only understands JavaScript (JS).
- That’s why TypeScript is first **compiled** (transpiled) into JavaScript using the TypeScript compiler (`tsc`).
- After compilation, the generated **.js** file runs normally in the browser or Node.js environment.

---

## ⚡ TypeScript vs JavaScript

| Feature | JavaScript (JS) | TypeScript (TS) |
| :--- | :--- | :--- |
| **Typing** | Dynamic (no types) | Static typing (with types like `string`, `number`, `boolean`, etc.) |
| **Error Checking** | At runtime | At compile-time (before execution) |
| **Browser Support** | Runs directly | Needs compilation to JS |
| **IDE Support** | Limited | Excellent (IntelliSense, autocompletion, refactoring) |
| **Learning Curve** | Easy | Slightly more but gives more control |
| **Use Case** | Small scripts, frontend logic | Large applications, scalable projects |

---

## ⚙️ Setup Instructions

### 1. Install Node.js (includes npm)

Download & install from 👉 [https://nodejs.org](https://nodejs.org)

**Check installation:**

```bash
node -v   # Node.js version
npm -v    # npm version

2. Install TypeScript
npm install -g typescript

Check version:
tsc -v

3. (Optional but Recommended) Install ts-node

Run TypeScript directly without compiling manually:

npm install -g ts-node


Check version:

ts-node -v

🖥️ Running TypeScript Code
Step 1: Create a hello.ts file
let message: string = "Hello from TypeScript!";
console.log(message);

Step 2: Compile to JavaScript
tsc hello.ts


This generates hello.js.

Step 3: Run with Node.js
node hello.js


✅ Output:

Hello from TypeScript!

⚡ Alternative: Run Directly with ts-node

Skip the compilation step:

ts-node hello.ts

🔄 How TypeScript Works

You write code in .ts files.

The TypeScript compiler (tsc) converts .ts → .js.

The browser (or Node.js) runs the generated .js file.

➡️ Example

TypeScript (example.ts):

let age: number = 25;
console.log("Age is: " + age);


Generated JavaScript (example.js):

var age = 25;
console.log("Age is: " + age);

✅ Advantages of TypeScript

Detects errors at compile-time (before execution).

Scalable for large applications.

Better tooling support (IntelliSense, code navigation).

Supports OOP concepts (classes, interfaces).

❌ Limitations

Requires compilation step.

Slightly higher learning curve than JS.

Browser doesn’t support TS directly.
