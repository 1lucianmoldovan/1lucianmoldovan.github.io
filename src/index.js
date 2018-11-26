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
  var skills = ['Microsoft Office Tools', 'HTML', 'JS', 'Oracle ERP'];
  var resultList = document.querySelector('#skills-page ul');

var skillsLi = skills.map(function(skill) {
  return `<li>${skill.toUpperCase()}</li>`;
});


  console.log('resultList:', skillsLi)
  resultList.innerHTML = skillsLi.join('');
}

initMenu();
show("skills-page");
initSkillsPage();

