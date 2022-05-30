// Import your dependencies
import 'dotenv/config';
import Nylas from "nylas"
import Event from "nylas/lib/models/event";

// Configure your Nylas client
Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);
// Provide a starts and end time for the event as unix timestamps
const START_TIME = 1654023600;
const END_TIME = 1654027200;
// Provide the calendar id you want to add an event to
const CALENDAR_ID = '<CALENDAR_ID>';
// Provide participant details
const PARTICIPANT_EMAIL = '<PARTICIPANT_EMAIL>'
const PARTICIPANT_NAME = '<PARTICIPANT_NAME>'

// Create an event
const createCalendarEvent = async function() {
  try {
    const event = new Event(nylas, {
      calendarId: CALENDAR_ID,
      title: 'Build Apps with Nylas Node SDK',
      when: {
          startTime: START_TIME,
          endTime: END_TIME,
      },
      participants: [
        {
          name: PARTICIPANT_NAME,
          email: PARTICIPANT_EMAIL,
        }
      ],
    });
    
    const { id, calendarId, title } = await event.save();
    console.log({ id, calendarId, title });
  } catch (error) {
    console.error("Error:\n", error);
  }
};

export default createCalendarEvent;