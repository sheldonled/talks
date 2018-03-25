const isRootElem = elem => elem.nodeName.toLocaleLowerCase() === "body" || !elem.parentNode;
const findParendByClass = (elem, className) => {
  if(elem.classList.contains(className) || isRootElem(elem))
    return elem;
  
  return findParendByClass(elem.parentNode, className);
};
const findSiblind = (element, parentClass, siblingClass) => {
  const parentElement = findParendByClass(element, parentClass);
  if(!parentElement || !parentElement.classList.contains(parentClass)) return;

  return parentElement.querySelector(`.${siblingClass}`);
};

export default {isRootElem,findParendByClass,findSiblind};