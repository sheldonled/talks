
import dom from './dom';

const showHideHandler = (elem, classElem, classOpen, classParent, classTarget) => {
  if(!elem.classList.contains(classElem)) return;

  const targetElem = dom.findSiblind(elem, classParent, classTarget);
  if(!targetElem) return;

  targetElem.classList.toggle(classOpen);
};

export default () => {
  document.addEventListener("click", (event) => {
    const element = event.target;

    showHideHandler(element, "icon__settings", "config__menu--open", "site-header", "config__menu");
    showHideHandler(element, "talk__showdesc", "talk__description--open", "site-talks__item", "talk__description");
  });
};