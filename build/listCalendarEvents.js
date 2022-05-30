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
// Provide a time stamp to fetch events after this time
const STARTS_AFTER = '<TIME_STAMP>';
// Provide the calendar id you want to fetch events from
const CALENDAR_ID = '<CALENDAR_ID>';
// List calendar events
const listCalendarEvents = async function () {
    try {
        const calendarEvents = await nylas.events.list({
            calendar_id: CALENDAR_ID,
            starts_after: STARTS_AFTER,
            limit: 5,
        });
        calendarEvents.map(({ title, id, description, when }) => console.log({
            id,
            title,
            description,
            when,
        }));
    }
    catch (error) {
        console.error("Error:\n", error);
    }
};
exports.default = listCalendarEvents;
