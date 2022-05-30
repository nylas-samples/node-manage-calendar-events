// Import your dependencies
import 'dotenv/config';
import Nylas from "nylas";

// Configure your Nylas client
Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);
// Provide a time stamp to fetch events after this time
const STARTS_AFTER = '<TIME_STAMP>';
// Provide the calendar id you want to fetch events from
const CALENDAR_ID = '<CALENDAR_ID>';

// List calendar events
const listCalendarEvents = async function() {
  try {
    const calendarEvents = await nylas.events.list({ 
      calendar_id: CALENDAR_ID, 
      starts_after: STARTS_AFTER, 
      limit: 5,
    });
  
    calendarEvents.map(({ title, id, description, when}) => 
      console.log({
        id,
        title,
        description,
        when,
      }));
  } catch (error) {
    console.error("Error:\n", error);
  }
}

export default listCalendarEvents;
