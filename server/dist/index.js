"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const helmet_1 = __importDefault(require("helmet"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
app.use((0, helmet_1.default)());
const PORT = process.env.PORT;
const DB_LINK = process.env.DB_LINK;
app.use('/auth', authRoutes_1.default);
mongoose_1.default.connect(DB_LINK).then(() => {
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`);
    });
}).catch((err) => console.log(err));
