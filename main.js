window.onload = function(){
  loadHome()
  var services = document.getElementById('services')
  var home = document.getElementById('home')
  services.addEventListener('click', loadServices)
  home.addEventListener('click', loadHome)

}

function loadServices() {
  document.getElementById('main').innerHTML = `<div id="services-body">
    <p id="services-text"><h2 id="services-header">Our Member Services</h2></p>
  </div>
  <div id="services-columns" class="row">
    <div class="col s12 m4 l4">
    <p><b>One on One member coaching for both students and parents.</b>

      Members schedule one on one coaching sessions with their personal coach who has over 35 years of college admission and funding experience with students from all backgrounds. Sessions recorded for your review with detailed directions and video guides.</p>
    <p><b>Financial Aid Form Guidance and Filing Service.</b>

      Assist students and parents with the completion of all financial aid forms including suggested strategies for enhancing the liklihood of receiving both need and especially merit based aid. Over $750,000,000 in NON LOAN awards to our members to date</p>

    <p><b>Negotiation and Financial Aid Strategies</b>
      Proven techniques for enhancing the awards your student receives using time tested strategies that expand your funding offers.</p>
  </div>
    <div class="col s12 m4 l4">
    <p><b>PSAT, SAT, ACT in depth preparation guide.</b>

    Provides comprehensive state of the art tutorial services mirroring step by step guide for preparing and excelling in the college preparation and planning process. Timed and geared to tutor student in areas needing improvement to increase scores by 25%.</p>

    <p id="col2-pad"><b>Personality Profile and Career Assessment.</b>
      Student driven personality and career assessment guides that evaluate student strengths making career recommendations bases on student's areas of interest and personality styles. Highly effective at helping students determine college choices and careers.</p>
  </div>
    <div class="col s12 m4 l4">
    <p><b>College Selection and Notification to colleges.</b>

    Upon identifying student areas of interest and career direction, POWT identifies multiple colleges, both public and private, that are interested in recruiting student and would be willing to offer funding incentives to assist student in attending.</p>

    <p id="col2-pad"><b>Backed by our "Promise of Value"</b>

    Our "Promise of Value" makes a written financial commitment that you will receive value for your participation and membership. You will receive the value promised in writing or ALL dues paid will be returned. You win or you pay nothing.</p>
  </div>
  </div>`;
}

function loadHome() {
  document.getElementById('main').innerHTML = `<div id="body"><h4 class="column-head">The Power Of Working Together</h4>
    <p><a href="https://www.elpomar.org/" target="_blank"><img class="elpomar" src="./images/elpomar.png" align="left"/></p>
    <p><b>POWT Founded in 1980</b></p></a>
    For more than three decades we have assisted thousands of families with the process of planning and funding college through the Power of Working Together with Students, their parents, teachers and counselors and a network of community volunteers dedicated to helping students have the very best possible college experience.  This organization and our members and volunteers serve that mission. The Power of Working Together was formally started by a group of 5 families in 1980. The concept and vision began in 1975 through the personal encouragement of Russell Thayer Tutt, Sr. <a download="SQQ-POWT.pdf" href="./files/SQQ-POWT.pdf" title="hand-shake"><img class="hand-shake "src="./images/circlehandshake.png" align="right" /></a>of the El Pomar Foundation of Colorado. With the research and support of a group of interns from Colorado College in the 1970's, POWT makes available valuable information about the process of college selection as well as the application and funding process. Understanding the process is the first step to a successful admission to the school of your choice.
    <p><b>The Power of Working Together Process</b></p>
    In partnership with community members, educators, business leaders and every citizen who dreams of helping serve the needs of college bound students and their parents, POWT provides resources and tools that make getting into and funding college a reality for every student we serve who follows our step by step admission and funding process.
    Click the Handshake Icon to print your student qualification questionnaire and send it to us as outlined on the form.</p>
  </div></div>
`;
}
