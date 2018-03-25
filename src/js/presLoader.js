import presentations from "./presentations";
import labels from "./presLabels";

const getPresentationsByYear = (presArray) => (presArray.reduce((yearsObj, presentation) => {
  let [year] = presentation.date.split("-");

  if(!yearsObj[year]) yearsObj[year] = [];

  yearsObj[year].push(presentation);
  return yearsObj;
}, {}));

const loadPresentations = () => {
  const talksContainer = document.querySelector(".site-talks");
  if(!talksContainer) return;

  const presentationsByYear = getPresentationsByYear(presentations);
  const years = Object.keys(presentationsByYear).sort((a, b) => b-a);
  talksContainer.innerHTML="";

  years.forEach(year => {
    const yearTitle = document.createElement('h2');
    const yearSection = document.createElement('section');
    yearSection.classList.add(`talks-${year}`);

    yearTitle.textContent = year;
    yearTitle.classList.add('title__year');
    yearSection.appendChild(yearTitle);

    presentationsByYear[year].forEach(talk => {
      let locale = Object.keys(talk.description).find(d => d === document.documentElement.lang) || "en";
      let [talkYear, talkMonth, talkDay] = talk.date.split("-");
      const article = document.createElement('article');
      article.classList.add("site-talks__item");
      article.innerHTML = `
      <header class="talk__header">
        <h3 class="talk__title">${talk.conference}</h3>
        <section class="talk__details">
          <span class="talk__date">${labels.month[parseInt(talkMonth)][locale]}, ${talkDay}. ${talkYear}</span>
          <span class="talk__venue"><strong>${labels.venue[locale]}:</strong> ${talk.venue}</span>
          <span class="talk__presentation"><strong>${labels.presentation[locale]}:</strong> ${(talk.presentation) ? `<a href="${talk.presentation}" target="_blank">${talk.title}</a>` : talk.title}</span>
          <section class="talk__actions">
            ${(talk.article) ? `<span class="talk__article"><a href="${talk.article}" target="_blank">${labels.article[locale]}</a></span>` : ``}
            ${(talk.description[locale]) ? `<button class="talk__showdesc" type="button">${labels.showDesc[locale]}</button>` : ``}
          </section>
        </section>
      </header>
      ${(talk.description[locale]) ? `<section class="talk__description">${talk.description[locale]}</section>` : ``}
      `;
      yearSection.appendChild(article);
    });
    talksContainer.appendChild(yearSection);
  });
};

export default () => (loadPresentations());

/*

case "moneyfs":
prjDesc.innerHTML = "<p>Nowadays, with more than 30 years of Free Software Movement, "+
"and more than 20 years of Linux, a lot of things changed! With the coming of this "+
"revolutionary way of seeing the world, new business models has been developed or matured. "+
"I give you then, 15 ways of making your success with this phylosophy of like  and work.</p>";
break;
case "sl15":
prjDesc.innerHTML = "<p>Hoje, com mais de 30 anos do Movimento do Software Livre, "+
"e mais de 20 anos de Linux, muita coisa mudou! Com o surgimento desta revolucionária "+
"maneira de ver o mundo, novos modelos negócios foram criados ou amadurecidos. "+
"Apresento-vos então, 15 maneiras de obter sucesso com esta filosofia de vida e trabalho</p>";
break;
case "mozcontribute":
prjDesc.innerHTML = "<p>The intention of this talk is to inspire, help and emancipate people and groups "+
"so they can embrace Mozilla's mission and colaborate with Mozilla's products and Free/Open Projects. The "+
"main projects of Mozilla will be presented and it will be showed what Mozilla Brazil has been done. "+
"Get involved and start today to contribute with mozilla.</p>";
break;
case "mozcontr":
prjDesc.innerHTML = "<p>A intenção dessa palestra é inspirar, ajudar e emancipar pessoas e grupos "+
"para que possam abraçar a missão da Mozilla e colaborar com seus produtos e projetos livres. Serão "+
"apresentados os principais projetos da Mozilla e será abordado o que a comunidade Mozilla Brasil "+
"tem feito. Envolva-se e comece hoje mesmo a contribuir com a Mozilla.</p>";
break;
case "conndev":
prjDesc.innerHTML = "<p>In 2015 Mozilla announced that Firefox OS will stop being developed and the "+
"team will focus on Internet of Things. A lot of knowledge from Firefox OS development could be reused "+
"to ensure Security, Privacy, Interoperability and Openness on IoT. Mozilla wants to influence on IoT "+
"protocols and solve real world problems, and this talk present the changing from Firefox OS to IoT, "+
"and Mozilla main projects in this area.</p>";
break;
case "googledrive":
prjDesc.innerHTML = "<p>Most users over the internet has the acknowledgement of how useful are "+
"the services provided by Google. One of the most known is Google Drive, and who uses knows "+
"its practice on creating and sharing files. The Google Drive Platform provides a group of "+
"APIs, with client libraries, code samples in several programming languages and documentation "+
"to help you build your apps that integrate with Drive.</p>"+
"<p>The goal of this material is to show an introduction to this API and explain the first steps "+
"to build your app integrating it with Google Drive, so that you can distribute or edit your files online.</p>";
break;
default:

*/