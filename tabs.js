const tabLists = document.querySelector('[role="tablist"]');
const tabs = tabLists.querySelectorAll('[role="tab"]');

tabLists.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;

function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  // change the tabindex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabIndex", -1);
  }

  if (e.keyCode === keydownRight) {
    tabFocus++;
  }

  if (e.keyCode === keydownLeft) {
    tabFocus--;
  }

  if (tabFocus > 3) {
    tabFocus = 0;
  } else if (tabFocus < 0) {
    tabFocus = tabs.length - 1;
  }

  tabs[tabFocus].setAttribute("tabIndex", 0);
  tabs[tabFocus].focus();
}

function changeTabPanel(e) {
  const targetTab = e.target;

  console.log(targetTab);
  const targetPanel = targetTab
    .getAttribute("aria-controls")
    .split(" ")
    .shift();

  const targetImage = targetTab.getAttribute("aria-controls").split(" ").pop();

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  mainContainer.querySelectorAll("[role='tabpanel']").forEach((panel) => {
    panel.setAttribute("hidden", true);
  });

  mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

  mainContainer.querySelectorAll("picture").forEach((img) => {
    img.setAttribute("hidden", true);
  });

  mainContainer.querySelector([`#${targetImage}`]).removeAttribute("hidden");
}
