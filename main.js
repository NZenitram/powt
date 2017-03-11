window.onload = function(){
  loadHome()
  var services = document.getElementById('services')
  var home = document.getElementById('home')
  services.addEventListener('click', loadServices)
  home.addEventListener('click', loadHome)

}

function loadServices() {
  document.getElementById('body').innerHTML = `<object type="text/html" data="services.html" ></object>`;
}

function loadHome() {
  document.getElementById('body').innerHTML = `<h4 class="column-head">The Power Of Working Together</h4>
    <p><a href="https://www.elpomar.org/" target="_blank"><img class="elpomar" src="./images/elpomar.png" align="left"/></p>
    <p><b>POWT Founded in 1980</b></p></a>
    For more than three decades we have assisted thousands of families with the process of planning and funding college through the Power of Working Together with Students, their parents, teachers and counselors and a network of community volunteers dedicated to helping students have the very best possible college experience.  This organization and our members and volunteers serve that mission. The Power of Working Together was formally started by a group of 5 families in 1980. The concept and vision began in 1975 through the personal encouragement of Russell Thayer Tutt, Sr. <a download="SQQ-POWT.pdf" href="./files/SQQ-POWT.pdf" title="hand-shake"><img class="hand-shake "src="./images/circlehandshake.png" align="right" /></a>of the El Pomar Foundation of Colorado. With the research and support of a group of interns from Colorado College in the 1970's, POWT makes available valuable information about the process of college selection as well as the application and funding process. Understanding the process is the first step to a successful admission to the school of your choice.
    <p><b>The Power of Working Together Process</b></p>
    In partnership with community members, educators, business leaders and every citizen who dreams of helping serve the needs of college bound students and their parents, POWT provides resources and tools that make getting into and funding college a reality for every student we serve who follows our step by step admission and funding process.
    Click the Handshake Icon to print your student qualification questionnaire and send it to us as outlined on the form.</p>
  </div>
`;
}
