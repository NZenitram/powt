function loadCalender() {
  document.getElementById('main').innerHTML = `<div id="calender-text"><p>Missing your appointment because of time zone differences is considered a missed appointment. We are in the Mountain Standard Time Zone all year around. Check to make certain you know the difference in time before scheduling your appointment.
  If you are not familiar with time zones, please refer to the chart below.
  <p>During Daylight Savings Time
  5:00 PM MST (our time) is the same as . . .
  5:00 PDT, 6:00 MDT, 7:00 CDT, 8:00 EDT</p>
  <p>During Standard Time
  5:00 PM MST (our time) is the same as . . .
  4:00 PST, 5:00 MST, 6:00 CST, 7:00 EST</p></div>`;
}
