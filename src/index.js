function $(id) {
  return document.getElementById(id);
}
function hide(id) {
  $(id).style.display = "none";

}
function show(id) {
  $(id).style.display = "block";

}

function hideElement(el) {
  el.style.display = 'none';
}

//$("home-menu").onclick = showHomePage;
//$("skills-menu").onclick = showSkillsPage;
//$("education-menu").onclick = showEducationPage;
//$("languages-menu").onclick = showLanguagesPage;

function hideAllPages() {
  var pages = document.querySelectorAll(".page-block");
  pages.forEach(hideElement);

}

function initMenu() {
  var links = document.querySelectorAll("#top-menu-bar a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      hideAllPages();
      var page = this.getAttribute('data-page');
      show(page + "-page");
    };
  }
}

function initSkillsPage() {
  var skills = [
    ['Microsoft Office Tools',7, "Andrei"], 
    ['HTML',6, "Cristian"], 
    ['JS',2, "Matei"], 
    ['Oracle ERP',1, ""]
  ];
  var resultList = document.querySelector('#skills-page ul');

var listItems = skills.map(function(skill) {
  console.log('map skill', skill);
  var EndorsedBy = ' - Endorsed by'
  if (skill[2] == "") {
    EndorsedBy = "";
  }
  var name = skill[0].toUpperCase();
  return `<li>${name}  
  <span style="color: gray">- ${skill[1]} ${EndorsedBy}</span> 
  ${skill[2]}
  </li>`;
});


  console.log('resultList:', listItems)
  resultList.innerHTML = listItems.join('');
}

initMenu();
show("skills-page");
initSkillsPage();

