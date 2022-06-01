# node-manage-calendar-events

This sample repo will show you how to easily work with calendars using the Nylas Node.js SDK.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values:

```text
ACCESS_TOKEN = ""
CLIENT_ID = ""
CLIENT_SECRET = ""
```

Add the above values to a `.env` file:

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using following commands:

```bash
$ npm run build
$ node build/index.js
```

The `index.js` consists of functions for different calendar functions:
- `listCalendars` lists all calendars
- `listCalendarEvents` list events for a specific calendar
- `createCalendarEvent` creates a new calendar event
- `updateCalendarEvent` updates a calendar event
- `deleteCalendarEvent` deletes a calendar event

By commenting out the function (and import), you can run the specific function as follows:

```
import listCalendars from './listCalendars';
\\...commented out imports

listCalendars();
\\...commented out function calls
```

Be sure to check if any specific data is required. For example `createCalendarEvent.ts` requires a few pieces of data like replacing `<CALENDAR_ID>`.

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.
