function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  const content = document.getElementById(cityName);
  content.style.display = "block";
  evt.currentTarget.className += " active";

  // firsChild img and lastChild iruka first button
  content.firstElementChild.style.display = "block";
  content.lastElementChild.firstElementChild.classList.add("active");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openTab(evt, cityName) {
  var i, tabcontent1, tablinks;
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

const london = document.getElementById("site1");
const lBtn = document.getElementById("Lbtn");

london.style.display = "block";
lBtn.classList.add("active");

//   const room = documnet.getElementById('Room1');
//   const rBtn = document.getElementById('rbtn');

//   room.style.display = 'block';
//   rBtn.classList.add('active');

//   const floor = documnet.getElementById('floor1');
//   const fBtn = document.getElementById('fbtn');

//   floor.style.display = 'block';
//   fBtn.classList.add('active');

//   const track = documnet.getElementById('track');
//   const tBtn = document.getElementById('tbtn');

//   track.style.display = 'block';
//   tBtn.classList.add('active');

//   const usable = documnet.getElementById('usable');
//   const uBtn = document.getElementById('ubtn');

//   usable.style.display = 'block';
//   uBtn.classList.add('active');

//   const parking = documnet.getElementById('parking1');
//   const pBtn = document.getElementById('pbtn');

//   parking.style.display = 'block';
//   pBtn.classList.add('active');
