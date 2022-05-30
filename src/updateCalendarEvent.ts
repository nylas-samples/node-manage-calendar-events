// Import your dependencies
import 'dotenv/config';
import Nylas from "nylas"

// Configure your Nylas client
Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);

// Provide the event Id to modify
const EVENT_ID = '<EVENT_ID>';

// Update the event event
const updateCalendarEvent = async function() {
  try {
    const event = await nylas.events.find(EVENT_ID)
    event.title = 'Build Awesome Apps with Nylas Node SDK!'   
    const { id, calendarId, title } = await event.save();
    console.log({ id, calendarId, title });
  } catch (error) {
    console.error("Error:\n", error);
  }
};

export default updateCalendarEvent;