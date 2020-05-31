// const openNavBtn = document.getElement
window.addEventListener("DOMContentLoaded", () => {

  // Tabs
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  tabs.forEach(tab => {
    tab.addEventListener("click", changeTabs);
  });

  let tabFocus = 0;

  tabList.addEventListener("keydown", e => {
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === 39) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
      } else if (e.keyCode === 37) {
        tabFocus--;
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });

  // Dropdown button
  const dropdowns = document.querySelectorAll('.js-dropdown');

  dropdowns.forEach(drop => {
    const panel = drop.nextElementSibling
    drop.onclick = () => panel.classList.toggle('active');
  })

  // Burger menu
  const toggle = document.getElementById('toggle-burger');
  const nav = document.getElementById('nav');

  toggle.onclick = () => nav.classList.toggle('active');



});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute("aria-selected", false));

  target.setAttribute("aria-selected", true);

  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.setAttribute("hidden", true));

  grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}
