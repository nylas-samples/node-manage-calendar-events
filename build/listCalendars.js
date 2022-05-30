"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import your dependencies
require("dotenv/config");
const nylas_1 = __importDefault(require("nylas"));
// Configure your Nylas client
nylas_1.default.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
const nylas = nylas_1.default.with(process.env.ACCESS_TOKEN);
// list calendars
const listCalendars = async function () {
    try {
        const calendars = await nylas.calendars.list({ limit: 5 });
        calendars.map(({ name, description, id }) => console.log({ name, description, id }));
    }
    catch (error) {
        console.error("Error:\n", error);
    }
};
exports.default = listCalendars;
