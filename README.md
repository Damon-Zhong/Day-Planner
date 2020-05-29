# Day-Planner
This is a daily schedule planning application using moment.js

- The header section shows the current time (EST)

- An agenda list will be displayed based on local storage information

- If the time-block is earlier than current time, agenda area will be grey
    - If current time falls in the time-block, agenda area will be red
    - If time-block is later than current time, agenda area will green

- After input agenda text, user can click save button to save their agenda to local storage 
- Refreshing the page will show whatever is saved in local storage and user is allowed to modify and save the agenda freely