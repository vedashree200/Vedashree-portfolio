const roles = [
  "Frontend Developer",
  "Web Developer",
  "CSE Student",
  "UI/UX Enthusiast"
];

let index = 0;

setInterval(() => {
  document.getElementById("typing-text").textContent =
    roles[index];

  index++;

  if(index >= roles.length){
    index = 0;
  }
}, 2000);