function loadCalender() {
  document.getElementById('main').innerHTML = `<div id="calender-text">
  <div id="calender-link">
    <p>To schedule an appointment, please <a href="http://www.appointmentquest.com/scheduler/2150078737" target="_blank">Click Here</a></p>
  </div>
  <p><b>Missing your appointment because of time zone differences is considered a missed appointment. We are in the Mountain Standard Time Zone all year around. Check to make certain you know the difference in time before scheduling your appointment. If you are not familiar with time zones, please refer to the clocks below.</b>
  <div class="row times">
    <div class="col s12 m4 l4">
      <div style="text-align:center;width:400px;padding:1em 0;padding-right:95px;"><a style="text-decoration:none;" href="http://www.zeitverschiebung.net/en/city/5318313">Mountain Standard Time</a><iframe src="http://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&timezone=America%2FPhoenix" width="100%" height="150" frameborder="0" seamless></iframe>
      </div>
    </div>
    <div class="col s12 m4 l4">
      <div style="text-align:center;width:400px;padding:1em 0;padding-right:45px;"><a style="text-decoration:none;" href="http://www.zeitverschiebung.net/en/city/4887398">Central Standard Time</a><iframe src="http://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&timezone=America%2FChicago" width="100%" height="150" frameborder="0" seamless></iframe> <small style="color:gray;">&copy; <a href="http://www.zeitverschiebung.net/en/" style="color: gray;">Time Difference</a></small>
      </div>
    </div>
    <div class="col s12 m4 l4">
      <div style="text-align:center;width:400px;padding:1em 0;"><a style="text-decoration:none;" href="http://www.zeitverschiebung.net/en/city/5128581">Eastern Standard Time</a><iframe src="http://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&timezone=America%2FNew_York" width="100%" height="150" frameborder="0" seamless></iframe>
      </div>
    </div>
  </div>`;
}
