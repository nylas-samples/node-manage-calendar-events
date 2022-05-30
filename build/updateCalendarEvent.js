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
// Provide the event Id to modify
const EVENT_ID = '<EVENT_ID>';
// Update the event event
const updateCalendarEvent = async function () {
    try {
        const event = await nylas.events.find(EVENT_ID);
        event.title = 'Build Awesome Apps with Nylas Node SDK!';
        const { id, calendarId, title } = await event.save();
        console.log({ id, calendarId, title });
    }
    catch (error) {
        console.error("Error:\n", error);
    }
};
exports.default = updateCalendarEvent;
