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
    {name: 'MICROSOFT OFFICE TOOLS', endorsments : 7, EndorsedBy: 'Andrei'},
    {name: 'HTML', endorsments : 6, EndorsedBy: 'Cristian'},
    {name: 'JS', endorsments : 2, EndorsedBy: 'Matei'},
    {name: 'Oracle ERP', endorsments : 1, EndorsedBy: ''}
  ];
  var resultList = document.querySelector('#skills-page ul');

var listItems = skills.map(function(skill) {
  var EndorsedBy = ' - Endorsed by'
  if (skill.EndorsedBy == "") {
    EndorsedBy = "";
  }
  var name = skill.name.toUpperCase();
  return `<li>${name}
  <span style="color: gray">- ${skill.endorsments} ${EndorsedBy}</span> 
  ${skill.EndorsedBy}
  </li>`;
});
  resultList.innerHTML = listItems.join('');
}

initMenu();
show("skills-page");
initSkillsPage();

