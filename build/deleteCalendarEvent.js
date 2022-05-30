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
// Provide the event Id to delete
const EVENT_ID = '<EVENT_ID>';
// Delete the event
const deleteCalendarEvent = async function () {
    try {
        const response = await nylas.events.delete(EVENT_ID);
        console.log({ response });
    }
    catch (error) {
        console.error("Error:\n", error);
    }
};
exports.default = deleteCalendarEvent;
