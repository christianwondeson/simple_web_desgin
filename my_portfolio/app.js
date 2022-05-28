const body = document.body;

const section_main = document.createElement("section");
section_main.setAttribute("class", "main");
section_main.setAttribute("id", "main_section");
body.append(section_main);
///my main section

const div_nav = document.createElement("div");
div_nav.setAttribute("class", "navbar");
div_nav.setAttribute("id", "navbar");
section_main.append(div_nav);

const nav_bar = document.createElement("nav");
nav_bar.setAttribute("class", "header_bar");
nav_bar.setAttribute("id", "header_nav");
div_nav.append(nav_bar);

const imageLogo = document.createElement("img");
imageLogo.setAttribute("src", "./image/my project.png");
imageLogo.setAttribute("alt", "my_logo");
imageLogo.setAttribute("id", "logoImg");
div_nav.append(imageLogo);

const unordered = document.createElement("ul");
unordered.setAttribute("class", "unordered");
unordered.setAttribute("id", "unordered");
nav_bar.append(unordered);

const listContent = ["home", "contact me", "skills"];

for (let i = 0; i < listContent.length; i++) {
  let list = [];
  let listlink = [];

  list[i] = document.createElement("li");
  list[i].setAttribute("id", "s" + i);
  listlink[i] = document.createElement("a");
  listlink[i].setAttribute("href", "#");
  listlink[i].innerHTML = listContent[i];
  unordered.append(list[i]);
  list[i].append(listlink[i]);
}

///////////////section mainTWOhome

const section_home = document.createElement("section");
section_home.setAttribute("class", "home");
section_home.setAttribute("id", "home");
body.append(section_home);

const home_div = document.createElement("div");
home_div.setAttribute("class", "homeDiv");
home_div.setAttribute("id", "homeDiv");
section_home.append(home_div);

const homeLeft = document.createElement("div");
homeLeft.setAttribute("class", "leftDiv");
home_div.append(homeLeft);

const homeright = document.createElement("div");
homeright.setAttribute("class", "rightDiv");
home_div.append(homeright);

const titleHome = document.createElement("h1");
titleHome.setAttribute("class", "homeHeader");
titleHome.innerHTML =
  "hi i am christian wondeson am a computer engineer. i am triving to be a software engineer who solves problems!";
homeright.append(titleHome);

const titlespan = document.createElement("span");
titlespan.setAttribute("class", "typed");
titleHome.append(titlespan);

///let us use the typedjs script
var typed = new Typed(".typed", {
  strings: [
    "though creative thinking",
    "by being team player",
    "working hard",
    "playing by the rules",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
