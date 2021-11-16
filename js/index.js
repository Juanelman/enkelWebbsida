//pausar tiden om man skriver await sleep("antal millisekunder")
// OBS funkar bara med async funktioner
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleClassList(element, klass) {
  document.getElementById(element).classList.toggle(klass);
}

function showDropdown(element) {
  toggleDropdownContent(element);
  toggleMenuButton();
}


//Visar och gömmer själva dropdown menyn med alla a-taggar
async function toggleDropdownContent(element) {
  if (document.getElementById(element).classList.contains("show")) {
    toggleClassList(element, "show");
    toggleClassList(element, "exit");
    await sleep(500);
    toggleClassList(element, "exit");
  } else {
    toggleClassList(element, "show");
  }
}

async function toggleMenuButton() {
  if (document.getElementById("dropdownMenuMiddleBar").classList.contains("hide")) {
    //lägger till animateOut classerna i 0.7 sek innan den tar bort de
    toggleClassList("dropdownMenuTopBar", "animateOut-dropdownMenuTopBar");
    toggleClassList("dropdownMenuBottomBar", "animateOut-dropdownMenuBottomBar");
    await sleep(230);

    //tar bort animate classen från top, middle och bottom elementen
    toggleMenuButtonClasslists();

    toggleClassList("dropdownMenuTopBar", "animateOut-dropdownMenuTopBar");
    toggleClassList("dropdownMenuBottomBar", "animateOut-dropdownMenuBottomBar");
  } else {
    //lägger till animate classen från top, middle och bottom elementen
    toggleMenuButtonClasslists();
  }
}

function toggleMenuButtonClasslists() {
  toggleClassList("dropdownMenuTopBar", "animate-dropdownMenuTopBar");
  toggleClassList("dropdownMenuMiddleBar", "hide");
  toggleClassList("dropdownMenuBottomBar", "animate-dropdownMenuBottomBar");

  //tar bort animationerna som sker när man minskar sidan
  toggleClassList("dropdownMenuTopBar", "dropdownMenuTopBar");
  toggleClassList("dropdownMenuBottomBar", "dropdownMenuBottomBar");
}