// Import your dependencies
import 'dotenv/config';
import Nylas from "nylas";

// Configure your Nylas client
Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);

// list calendars
const listCalendars = async function() {
  try {
    const calendars = await nylas.calendars.list({ limit: 5 });
    calendars.map(({ name, description, id}) => console.log({ name, description, id }));
  } catch (error) {
    console.error("Error:\n", error);
  }
}

export default listCalendars;