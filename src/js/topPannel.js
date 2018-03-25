const messages = {
  outdatedBrowser: {
    "en": "You're using an outdated browser. This beautiful message is to advise you to get an up to date browser and have a better experience online =)",
    "pt-BR": "Você está usando um navegador desatualizado. Esta linda mensagem está aqui para lembrá-lo de atualizar seu navegador e ter uma vida melhor =)",
  }
};

const handleEs6Support = () => {
  //Leverage the same global function used to load es5 scripts
  if(window.supportEs6()) return;
  
  let locale = Object.keys(messages.outdatedBrowser).find(d => d === document.documentElement.lang) || "en";
  error(messages.outdatedBrowser[locale]);
};

const setTopPannelState = state => {
  const topPannel = document.querySelector('.top-pannel');
  if(!topPannel) return;

  window.requestAnimationFrame(() => {
    topPannel.innerHTML = state.content;
    topPannel.style.display = state.display;
    topPannel.style.backgroundColor = state.backgroundColor;
  });
};

const hide = () => setTopPannelState({
  display: "none",
  backgroundColor: "rgb(141, 197, 197)",
  content: ""
});

const message = text => setTopPannelState({
  display: "block",
  backgroundColor: "rgb(141, 197, 197)",
  content: `<span>${text}</span>`
});

const warn = text => setTopPannelState({
  display: "block",
  backgroundColor: "rgb(255, 243, 202)",
  content: `<span>${text}</span>`
});

const error = text => setTopPannelState({
  display: "block",
  backgroundColor: "rgb(255, 182, 182)",
  content: `<marquee>${text}</marquee>`
});

const init = () => {
  handleEs6Support();
};

export default {init, hide, message, warn, error};