// Import your dependencies
import 'dotenv/config';
import Nylas from "nylas"

// Configure your Nylas client
Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);
// Provide the event Id to delete
const EVENT_ID = '<EVENT_ID>';

// Delete the event
const deleteCalendarEvent = async function() {
  try{
    const response = await nylas.events.delete(EVENT_ID);
    console.log({ response });

  } catch (error) {
    console.error("Error:\n", error);
  }
};

export default deleteCalendarEvent;