"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const auth_js_1 = __importDefault(require("./routes/auth.js"));
const todo_js_1 = __importDefault(require("./routes/todo.js"));
const app = (0, express_1.default)();
const port = 3000;
// ... rest of your express app setup ...
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/auth", auth_js_1.default);
app.use("/todo", todo_js_1.default);
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});
mongoose_1.default.connect('mongodb+srv://pallavsharma0202:47FZtLTiNozxbfYK@cluster0.sdvxp5u.mongodb.net/', { dbName: 'todo' });
