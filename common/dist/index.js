"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpInputProps = void 0;
const zod_1 = require("zod");
exports.signUpInputProps = zod_1.z.object({
    username: zod_1.z.string().min(1).max(20).email(),
    password: zod_1.z.string().min(1).max(8)
});
