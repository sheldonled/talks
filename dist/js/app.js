(function () {
  'use strict';

  var presentations = [
    {
      "date": "2019-03-18",
      "conference": "UniAlfa Internal Conference",
      "venue": "UniAlfa - Perimetral Norte - Goiânia",
      "title": "Career Abroad",
      "presentation": "https://github.sheldonled.com/talks/p/career-abroad.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p>In 2016 I decided to move away from Brazil and develop new experiences abroad. I started a journey with the help of our lovely internet and landed a job in Ireland, in the beginning of 2017. This talk highlights some topics I found important during this journey and I hope it helps you on yours.</p>`,

        "pt-BR": `<p>Em 2016 eu decidi mudar para fora do Brasil, e desenvolver novas experiências no exterior. Eu comecei essa jornada com a ajuda da nossa amada internet e consegui um emprego na Irlanda no começo de 2017. Essa palestra destaca alguns tópicos que eu achei importante durante essa jornada e eu espero que possa ajudar você na sua.</p>`,
      },
    },
    {
      "date": "2018-09-28",
      "conference": "SymfonyLive - London",
      "venue": "Park Plaza Westminster Bridge Hotel",
      "title": "Application Frontend Decoupling",
      "presentation": "https://docs.google.com/presentation/d/1ITM1YGYVCcEutLd0DLu1r2Ns4Dq59F2cB9clQH0OgSM",
      "article": "",
      "video": "",
      "description": {
        "en": `<p>As frontend gets more and more complex, having it tied to the backend  might not be the best solution nowadays. This talk gives an overview about a possible solution to have the frontend of your application served decoupled from the backend, what are the benefits, and how to implement.</p>`,

        "pt-BR": `<p>Como Frontend está ficando cada vez mais complexo, tê-lo amarrado ao backend pode não ser a melhor solução hoje em dia. Essa mini-palestra dá uma visão geral sobre uma possível solução para ter o Frontend de sua aplicação desacoplado do backend, quais são os benefícios, e como implementar.</p>`,
      },
    },
    {
      "date": "2018-06-05",
      "conference": "DublinJS June Meetup",
      "venue": "Intercom, Dublin, Ireland",
      "title": "Improving performance with CSS Grid, PWA, and a few other things",
      "presentation": "https://github.sheldonled.com/talks/p/performance-grid-pwa.html",
      "article": "",
      "description": {
        "en": `<p>As web developers we’re constantly seeking ways to mitigate the network friction and deliver web applications faster, but there’s much more to be done to improve user’s experience on the web. This talk shows how to use what’s new on the web to get your web app even faster.</p>`,

        "pt-BR": `<p>Como desenvolvedores web, nós estamos constantemente procurando maneiras de mitigar a frição na rede e entregar aplicações web mais rápidas, mas existe muito mais a ser feito para melhorar a experiência do usuário na web. Esta palestra mostra como utilizar o que há de novo na web para deixar sua web app ainda mais rápida.</p>`,
      },
    },
    {
      "date": "2018-05-09",
      "conference": "DublinJS Lightning Talks",
      "venue": "Dogpatch Labs, Dublin, Ireland",
      "title": "Getting Started with Google Drive API",
      "presentation": "https://github.sheldonled.com/talks/p/gdrive-lightning.html",
      "article": "",
      "video": "https://www.youtube.com/watch?v=zW62srSHFoY",
      "description": {
        "en": `<p>One of the most famous Google services is Google Drive and you can use it in your application through its API. In this lightning talk we're going to briefly dive into it and see how easy it is to get started.</p>`,

        "pt-BR": `<p>Um dos serviços mais famosos do Google é o Google Drive, e você pode usá-lo em sua aplicação através de sua API. Nesta rápida palestra vamos dar uma breve olhada nessa API e ver o quão fácil é para começar a usá-la</p>`,
      },
    },
    {
      "date": "2017-12-18",
      "conference": "Technical Show & Tell",
      "venue": "Smartbox Group, Dublin, Ireland",
      "title": "How web performance, CSS Grid and PWA are related",
      "presentation": "https://github.sheldonled.com/talks/p/grid-pwa-performance.html",
      "article": "https://medium.com/@sheldonled/how-web-performance-css-grid-and-pwa-are-related-873c68f385a9",
      "video": "",
      "description": {
        "en": `<p>As web developers we’re constantly seeking ways to mitigate the network friction and deliver web applications faster, but there’s much more to be done to improve user’s experience on the web. This talk shows how to use what’s new on the web to get your web app even faster.</p>`,

        "pt-BR": `<p>Como desenvolvedores web, estamos constantemente buscando por maneiras de mitigar a fricção entre navegador e dispositivo para entregar aplicaçōes web rápidas. Mas existe muito mais a ser feito para melhorar a experiencia do usuário na web. Esta palestra fala sobre como usar o que há de novo na web para deixar sua web app ainda mais rápida</p>`,
      },
    },
    {
      "date": "2016-10-01",
      "conference": "Semana da inovação, Ciência e Computação",
      "venue": "IFG, Uruaçu, Brazil",
      "title": "Mozilla connected devices.",
      "presentation": "https://github.sheldonled.com/talks/p/conndev.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p>In 2015 it was announced that Firefox OS effort would move towards IoT, a big trend to explore and we could leverage the Firefox OS way of using the Web to build stuff. In this talk it'll be presented a few details on how to know Mozilla IoT projects, what's happening already and what'll be the future.</p>`,

        "pt-BR": `<p>No ano de 2015 foi anunciado que o sistema operacional Firefox OS começaria a focar na internet das coisas, um grande mercado a ser explorado principalmente pelo Firefox OS e todo seu conceito de ser construído com linguagens web. Nesta atividade será apresentado todos os detalhes necessários para conhecer projetos da Mozilla focados na IoT. Confira o que já está pronto e o que já pode ser feito utilizando o Firefox OS como base para a IoT
      </p>`,
      },
    },
    {
      "date": "2016-09-25",
      "conference": "TIVASP",
      "venue": "UEG, Ceres, Brazil",
      "title": "Mozilla connected devices.",
      "presentation": "https://github.sheldonled.com/talks/p/conndev.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p>In 2015 it was announced that Firefox OS effort would move towards IoT, a big trend to explore and we could leverage the Firefox OS way of using the Web to build stuff. In this talk it'll be presented a few details on how to know Mozilla IoT projects, what's happening already and what'll be the future.</p>`,

        "pt-BR": `<p>No ano de 2015 foi anunciado que o sistema operacional Firefox OS começaria a focar na internet das coisas, um grande mercado a ser explorado principalmente pelo Firefox OS e todo seu conceito de ser construído com linguagens web. Nesta atividade será apresentado todos os detalhes necessários para conhecer projetos da Mozilla focados na IoT. Confira o que já está pronto e o que já pode ser feito utilizando o Firefox OS como base para a IoT
      </p>`,
      },
    },
    {
      "date": "2016-09-17",
      "conference": "Software Freedom Day - Brasília",
      "venue": "Faculdade Projeção, Brasília, Brazil",
      "title": "How to contribute with Mozilla.",
      "presentation": "https://github.sheldonled.com/talks/p/mozcontribute.html",
      "article": "https://medium.com/@sheldonled/volunteering-with-mozilla-20737756d439",
      "video": "",
      "description": {
        "en": `<p>The aim of this talk is to inspire and help people and groups to embrace the Mozilla mission and colaborate with their products and projects for the open web. It's presented the main Mozilla projects and how Mozilla Brazil has been working so far. Get involved and start today to contribute with Mozilla</p>`,

        "pt-BR": `<p>A intenção dessa palestra é inspirar, ajudar e emancipar pessoas e grupos para que possam abraçar a missão da Mozilla e colaborar com seus produtos e projetos livres. Serão apresentados os principais projetos da Mozilla e será abordado o que a comunidade Mozilla Brasil tem feito. Envolva-se e comece hoje mesmo a contribuir com a Mozilla. 
      </p>`,
      },
    },
    {
      "date": "2016-07-16",
      "conference": "17 FISL (Festival Internacional de Software Livre)",
      "venue": "PUC RS, Porto Alegre, Brazil",
      "title": "15 maneiras de ganhar dinheiro com software livre",
      "presentation": "https://github.sheldonled.com/talks/p/15waysfs.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> Today, with more than 30 years of Free Software history, and more than 20 years of the first version of Linux, a lot of things have changed! With this revolutionary way of seeing the world, new business models have been created or matured. In this talk it's mentioned 15 forms of being successful with this philosophy of life and word  </p>`,

        "pt-BR": `<p> Hoje, com mais de 30 anos de história do Software livre e mais de 20 anos da criação da primeira versão do Linux, muita coisa  mudou! Com o surgimento dessa revolucionária maneira de ver o mundo, novos modelos de negócio foram criados ou amadurecidos. Apresento-vos então 15 maneiras de conseguir sucesso com esta filosofia de vida e trabalho</p>`,
      },
    },
    {
      "date": "2016-05-21",
      "conference": "joinCommunity",
      "venue": "FATESG/SENAI, Goiânia, Brazil",
      "title": "Google Drive API.",
      "presentation": "https://github.sheldonled.com/talks/p/gdrive-easydg.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> One of the most famous Google services is Google Drive. Google provides a bunch of APIs with examples in several languages and documentation to help you develop applications that integrate with Google Drive. In this talk we're going to see why and how I used it and how easy it is. </p>`,

        "pt-BR": `<p> Um dos serviços mais conhecidos do Google é o Google Drive. A Google provê um grupo de APIs com exemplos em várias linguagens e documentação para ajudá-lo a desenvolver aplicativos que se integram com Drive. Nesta palestra vamos ver como e porque usei esta API and o quão simples foi.</p>`,
      },
    },
    {
      "date": "2016-04-16",
      "conference": "FLISOL Goiânia",
      "venue": "FATESG/SENAI, Goiânia, Brazil",
      "title": "15 maneiras de ganhar dinheiro com software livre",
      "presentation": "https://github.sheldonled.com/talks/p/15maneirassl.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> Today, with more than 30 years of Free Software history, and more than 20 years of the first version of Linux, a lot of things have changed! With this revolutionary way of seeing the world, new business models have been created or matured. In this talk it's mentioned 15 forms of being successful with this philosophy of life and word  </p>`,

        "pt-BR": `<p> Hoje, com mais de 30 anos de história do Software livre e mais de 20 anos da criação da primeira versão do Linux, muita coisa  mudou! Com o surgimento dessa revolucionária maneira de ver o mundo, novos modelos de negócio foram criados ou amadurecidos. Apresento-vos então 15 maneiras de conseguir sucesso com esta filosofia de vida e trabalho</p>`,
      },
    },
    {
      "date": "2015-04-25",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "15 maneiras de ganhar dinheiro com software livre",
      "presentation": "https://github.sheldonled.com/talks/p/15maneirassl.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> Today, with more than 30 years of Free Software history, and more than 20 years of the first version of Linux, a lot of things have changed! With this revolutionary way of seeing the world, new business models have been created or matured. In this talk it's mentioned 15 forms of being successful with this philosophy of life and word  </p>`,

        "pt-BR": `<p> Hoje, com mais de 30 anos de história do Software livre e mais de 20 anos da criação da primeira versão do Linux, muita coisa  mudou! Com o surgimento dessa revolucionária maneira de ver o mundo, novos modelos de negócio foram criados ou amadurecidos. Apresento-vos então 15 maneiras de conseguir sucesso com esta filosofia de vida e trabalho</p>`,
      },
    },
    {
      "date": "2015-04-25",
      "conference": "FLISOL Anápolis",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "Desenvolvendo aplicativos para Firefox OS.",
      "presentation": "https://github.sheldonled.com/talks/p/firefoxos.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> We're going to run through an overview of Firefox OS, basic concepts of Web Mobile, and see how it is to publish an app in Firefox Marketplace</p>`,

        "pt-BR": `<p>O objetivo dessa palestra é apresentar o Firefox OS e suas características, os conceitos básicos da Web Mobile e conhecer na prática como fazer um aplicativo e publicá-lo na loja virtual do Firefox.</p>`,
      },
    },
    {
      "date": "2015-04-25",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "Desenvolvendo aplicativos para Firefox OS.",
      "presentation": "https://github.sheldonled.com/talks/p/firefoxos.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> We're going to run through an overview of Firefox OS, basic concepts of Web Mobile, and see how it is to publish an app in Firefox Marketplace</p>`,

        "pt-BR": `<p>O objetivo dessa palestra é apresentar o Firefox OS e suas características, os conceitos básicos da Web Mobile e conhecer na prática como fazer um aplicativo e publicá-lo na loja virtual do Firefox.</p>`,
      },
    },
    {
      "date": "2015-04-25",
      "conference": "ENATI",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "Firefox OS Workshop (8h).",
      "presentation": "https://github.sheldonled.com/talks/p/firefoxos.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> In this workshop we'll go through an overview of Firefox OS, basic concepts of Web Mobile, and see how it is to publish an app in Firefox Marketplace</p>
              <p><a href="https://github.com/sheldonled/playcompras">App built in this course</a></p>`,

        "pt-BR": `<p>O objetivo desse curso é apresentar o Firefox OS e suas características, os conceitos básicos da Web Mobile e conhecer na prática como fazer um aplicativo e publicá-lo na loja virtual do Firefox.</p>
      <p><a href="https://github.com/sheldonled/playcompras">Applicativo construído no curso</a></p>`,
      },
    },
    {
      "date": "2014-09-27",
      "conference": "DevFest Centro Oeste",
      "venue": "ACIEG, Goiânia, Brazil",
      "title": "Web Audio API - Fazendo Música com o navegador.",
      "presentation": "",
      "article": "",
      "video": "",
      "description": {
        "en": `<p>It's very exciting to see how the web has evolved along the years, mostly when it comes to its audiovisual capacity. The Audio Web API gives developers a very powerful and versatile system to control audio on the web, allowing developers to sintetize, process, mix, add effects and much more, with audio. It very promising to use it and avoid third party APIs to use such features on the web. The aim of this talk is to show a little bit of the Web Audio API and a few of what it's capable of </p>`,

        "pt-BR": `<p> É animador ver a evolução da Web ao longo dos anos, principalmente quando se trata de sua capacidade audiovisual. A API de audio para a Web disponibiliza um poderoso e versátil sistema de controle de áudio para a Web, permitindo aos desenvolvedores sintetizar, processar, mixar, adicionar efeitos de áudio, criar reprodutores de áudio etc, dispensando a necessidade de API’s de terceiros para tais recursos na Web. O objetivo desta palestra é mostrar um pouco da API de áudio para a web, e algumas de suas capacidades </p>`,
      },
    },
    {
      "date": "2014-08-29",
      "conference": "IX Semana Tecnológica do Curso Superior de Tecnologia em Redes de Computadores",
      "venue": "UEG, Pires do Rio, Brazil",
      "title": "2014 - 14 maneiras de ganhar dinheiro com Software Livre.",
      "presentation": "https://github.sheldonled.com/talks/p/15maneirassl.html",
      "article": "",
      "video": "",
      "description": {
        "en": ``,

        "pt-BR": `<p> 2014 nos mostra 30 anos de história do Software livre e mais de 20 anos da criação da primeira versão do Linux. Muita coisa aconteceu com o surgimento dessa revolucionária maneira de ver o mundo. Então apresento-vos 14 maneiras de conseguir sucesso com esta filosofia de vida e trabalho </p>`,
      },
    },
    {
      "date": "2014-05-31",
      "conference": "joinCommunity",
      "venue": "Faculdade Senac, Goiânia, Brazil",
      "title": "Utilizando MongoDB em suas aplicações.",
      "presentation": "https://github.sheldonled.com/talks/p/mongodb.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> MongoDB is a high performance Open Source system to store and manage data of your application. It brings the well known concept of no-relational (NoSQL) database and it's very easy to deal with data. This presentation is an introduction that aims to show in a very basic manner this new way of dealing with data in MongoDB</p>`,

        "pt-BR": `<p>MongoDB é uma aplicação de código aberto e de alta performance, para gerenciar e guardar informações de sua aplicação. Ele traz consigo um conceito já difundido de ser não-relacional (NoSQL) e muita facilidade no tratamento dos dados. Essa é uma apresentação introdutória, que visa mostrar de forma básica todo o universo MongoDB.</p>`,
      },
    },
    {
      "date": "2014-04-26",
      "conference": "FLISOL Goiânia",
      "venue": "UFG, Goiânia, Brazil",
      "title": "2014 - 14 maneiras de ganhar dinheiro com Software Livre.",
      "presentation": "https://github.sheldonled.com/talks/p/15maneirassl.html",
      "article": "",
      "video": "",
      "description": {
        "en": ``,

        "pt-BR": ``,
      },
    },
    {
      "date": "2014-04-26",
      "conference": "FLISOL Goiânia",
      "venue": "UFG, Goiânia, Brazil",
      "title": "Utilizando MongoDB em suas aplicações.",
      "presentation": "https://github.sheldonled.com/talks/p/mongodb.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> MongoDB is a high performance Open Source system to store and manage data of your application. It brings the well known concept of no-relational (NoSQL) database and it's very easy to deal with data. This presentation is an introduction that aims to show in a very basic manner this new way of dealing with data in MongoDB</p>`,

        "pt-BR": `<p>MongoDB é uma aplicação de código aberto e de alta performance, para gerenciar e guardar informações de sua aplicação. Ele traz consigo um conceito já difundido de ser não-relacional (NoSQL) e muita facilidade no tratamento dos dados. Essa é uma apresentação introdutória, que visa mostrar de forma básica todo o universo MongoDB.</p>`,
      },
    },
    {
      "date": "2013-10-08",
      "conference": "10 Encontro de Iniciação Científica Alfa",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "HTML Interativo com AngularJS.",
      "presentation": "https://www.slideshare.net/sheldonled/html-interativoangularjs",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2013-09-13",
      "conference": "Presentation for Information Systems Students",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "Exploring the Web Mobile.",
      "presentation": "https://github.sheldonled.com/talks/p/webmobile.html",
      "description": {
        "en": `<p>In the last couple of years the web access via mobile has grown a lot. The web also has evolved a lot and brings several resources that make its usage more friendly. The aim of this presentation is to show a few tips for web development, thinking more about people who access it via mobile devices, and also show a few ways of building apps using only web technologies.</p>`,

        "pt-BR": `<p> Nos últimos anos o acesso à web com dispositivos mobile tem crescido muito. A web também evoluiu muito e traz vários recursos que tornam seu uso mais agradável. O Objetivo dessa apresentação é mostrar algumas dicas de desenvolvimento web, pensando em quem acessa via dispositivos móveis, e finalizar mostrando maneiras de construir aplicativos utilizando apenas tecnologias web. </p>`,
      },
    },
    {
      "date": "2013-08-31",
      "conference": "joinCommunity",
      "venue": "FASAM, Goiânia, Brazil",
      "title": "Entendendo a arquitetura de um Documento web.",
      "presentation": "https://github.sheldonled.com/talks/p/dom.html",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> The Web is not just a bunch of pages anymore, it is now a platform with a pool of applications that can be executed in the browser. One of the main facts that made this happen is the precise manipulation of the HTML elements. Understand now how they're specified through the DOM (Document Object Model) and how this influenciate in the Front End development.</p>`,

        "pt-BR": `<p> A web deixou de ser um amontoado de páginas e passou a ser uma plataforma com um pool de aplicações que podem ser executadas pelo navegador. Um dos principais fatos que proporcionaram este avanço foi a manipulação precisa dos elementos do HTML. Entenda como são especificados estes elementos através do DOM (Document Object Model) e como isso influencia na sua programação Front End.</p>`,
      },
    },
    {
      "date": "2013-05-18",
      "conference": "ENATI",
      "venue": "IFG, Ipora, Brazil",
      "title": "Joomla Workshop (4h).",
      "presentation": "https://www.slideshare.net/sheldonled/intro-joomlaminicurso",
      "article": "https://sheldonled.com/pdf/intro-joomla.pdf",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2013-05-18",
      "conference": "ENATI",
      "venue": "IFG, Ipora, Brazil",
      "title": "PHP Workshop (4h).",
      "presentation": "",
      "article": "https://sheldonled.com/pdf/intro-php.pdf",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2013-04-27",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "2013 - 13 Maneiras de Ganhar dinheiro com Software Livre.",
      "presentation": "https://github.sheldonled.com/talks/p/15maneirassl.html",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2012-12-01",
      "conference": "9 FGSL",
      "venue": "IFG, Goiânia, Brazil",
      "title": "Gerenciando projetos com dotProject.",
      "presentation": "https://github.sheldonled.com/talks/p/dotProject-slide.pdf",
      "article": "https://github.sheldonled.com/talks/p/dotProject-artigo.pdf",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2012-11-01",
      "conference": "III Jornada Alfa de Tecnologia",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "Gerenciando projetos com dotProject.",
      "presentation": "https://github.sheldonled.com/talks/p/dotProject-slide.pdf",
      "article": "https://github.sheldonled.com/talks/p/dotProject-artigo.pdf",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2012-04-28",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "(R)evolução dos Sistemas Operacionais.",
      "presentation": "https://www.slideshare.net/sheldonled/histria-dos-sistemas-operacionais-12719535",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2011-04-09",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "Introdução a Web Semântica.",
      "presentation": "",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2011-04-09",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "Qual linguagem de programação combina com você?",
      "presentation": "",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2011-04-09",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "Software Livre - o que é e como funciona?",
      "presentation": "https://www.slideshare.net/sheldonled/int-tosl",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2011-04-09",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Alfa, Goiânia, Brazil",
      "title": "Desenvolvimento Open Source é uma evolução natural.",
      "presentation": "",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2010-12-11",
      "conference": "7 FGSL",
      "venue": "Faculdade Cambury, Goiânia, Brazil",
      "title": "Desenvolvimento Open Source é uma evolução natural.",
      "presentation": "",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2010-12-11",
      "conference": "7 FGSL",
      "venue": "Faculdade Cambury, Goiânia, Brazil",
      "title": "Qual linguagem de programação combina com você?",
      "presentation": "",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2010-11-12",
      "conference": "VII Latinoware",
      "venue": "Itaipu, Foz do Iguaçu, Brazil",
      "title": "Instalando Debian em Netbooks",
      "presentation": "",
      "article": "http://tribodoci.net/artigos/debian-netbook/",
      "video": "",
      "description": {
        "en": `A talk about how to install debian with a flashdrive and common issues I've faced. Very useful for computers that doesn't have a CD/DVD port`,
        "pt-BR": `Nesta palestra você irá aprender a como fazer um PenDrive bootável, e instalar o Debian em computadores pessoais que não possuem mídia de CD/DVD`,
      },
    },
    {
      "date": "2010-08-14",
      "conference": "Debian Day",
      "venue": "IFG, Itumbiara, Brazil",
      "title": "Instalando Debian em Netbooks",
      "presentation": "",
      "article": "http://tribodoci.net/artigos/debian-netbook/",
      "video": "",
      "description": {
        "en": `A talk about how to install debian with a flashdrive and common issues I've faced. Very useful for computers that doesn't have a CD/DVD port`,
        "pt-BR": `Nesta palestra você irá aprender a como fazer um PenDrive bootável, e instalar o Debian em computadores pessoais que não possuem mídia de CD/DVD`,
      },
    },
    {
      "date": "2010-04-24",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Cambury, Goiânia, Brazil",
      "title": "Software Livre, o que é e como funciona.",
      "presentation": "https://www.slideshare.net/sheldonled/int-tosl",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2010-04-24",
      "conference": "FLISOL Goiânia",
      "venue": "Faculdade Cambury, Goiânia, Brazil",
      "title": "(R)evolução dos Sistemas Operacionais.",
      "presentation": "https://www.slideshare.net/sheldonled/histria-dos-sistemas-operacionais-12719535",
      "article": "",
      "video": "",
      "description": {
        "en": ``,
        "pt-BR": ``,
      },
    },
    {
      "date": "2009-10-03",
      "conference": "6 FGSL",
      "venue": "Senac Cora Coralina, Goiânia, Brazil",
      "title": "Primeiros passos com programação C.",
      "presentation": "",
      "article": "",
      "video": "",
      "description": {
        "en": `<p>Inside the macro theme of digital inclusion, this talk is about programming logic, wich is the first step for a software developer, using examples in C language, which is one of the most traditional non-proprietary languages. C is a language that gets people attention for being used in Operating Sistems like Linux and Unix and their applications. </p>`,

        "pt-BR": `<p>Dentro do macrotema inclusão digital, esta palestra fala sobre lógica de programação, que é o primeiro passo para um desenvolvedor de software, usando exemplos na linguagem C, que é uma das mais tradicionais linguagens não-proprietarias. C é uma linguagem que desperta maior interesse nas pessoas por ser muito usada em Sistemas Operacionais Linux e Unix e seus aplicativos </p>`,
      },
    },
    {
      "date": "2009-09-19",
      "conference": "Show me the code",
      "venue": "IFG, Goiânia, Brazil",
      "title": "Introdução ao Java.",
      "presentation": "",
      "article": "",
      "video": "",
      "description": {
        "en": `<p> The most popular language at the moment is seen usually like a hard brain to learn when you don't know it yet. It's very interesting to the developers to get to know this technology because it's growing exponentially each year and companies have chosen it giving its advantages. In this talk it'll be presented the general view of the language, it's evolution, and the first steps to learn it and why it is so atractive. </p>`,

        "pt-BR": `<p>A linguagem mais popular da atualidade é vista geralmente como um bicho de sete cabeças por pessoas que não a conhecem ainda. É super interessante, aos desenvolvedores, aproximarem-se dessa tecnologia, visto que ela cresce exponencialmente a cada ano e as empresas a preferem por suas vantagens. Nesta palestra será apresentada uma visão geral sobre a linguagem, sua evolução, os primeiros passos para aprendê-la e porque ela é tão atrativa.</p>`,
      },
    },
  ];

  var labels = {
    "venue": {
      "en": "Venue",
      "pt-BR": "Local",
    },
    "presentation": {
      "en": "Presentation",
      "pt-BR": "Palestra",
    },
    "demo": {
      "en": "Check Demo/Project",
      "pt-BR": "Veja Demo/Projeto",
    },
    "video": {
      "en": "Watch video",
      "pt-BR": "Assista ao vídeo",
    },
    "article": {
      "en": "Read article",
      "pt-BR": "Leia o artigo",
    },
    "showDesc": {
      "en": "show description",
      "pt-BR": "veja descrição",
    },
    "month": {
      "1": {
        "en": "January",
        "pt-BR": "Janeiro",
      },
      "2": {
        "en": "February",
        "pt-BR": "Fevereiro",
      },
      "3": {
        "en": "March",
        "pt-BR": "Março",
      },
      "4": {
        "en": "April",
        "pt-BR": "Abril",
      },
      "5": {
        "en": "May",
        "pt-BR": "Maio",
      },
      "6": {
        "en": "June",
        "pt-BR": "Junho",
      },
      "7": {
        "en": "July",
        "pt-BR": "Julho",
      },
      "8": {
        "en": "August",
        "pt-BR": "Agosto",
      },
      "9": {
        "en": "September",
        "pt-BR": "Setembro",
      },
      "10": {
        "en": "October",
        "pt-BR": "Outubro",
      },
      "11": {
        "en": "Novembro",
        "pt-BR": "November",
      },
      "12": {
        "en": "December",
        "pt-BR": "Dezembro",
      },
    }
  };

  const getPresentationsByYear = (presArray) => (presArray.reduce((yearsObj, presentation) => {
    let [year] = presentation.date.split("-");

    if(!yearsObj[year]) yearsObj[year] = [];

    yearsObj[year].push(presentation);
    return yearsObj;
  }, {}));

  const getPresentationActions = (talk, locale) => `
  ${(talk.demo) ? `<span class="talk__article"><a href="${talk.demo}" target="_blank">${labels.demo[locale]}</a></span>` : ``}
  ${(talk.video) ? `<span class="talk__article"><a href="${talk.video}" target="_blank">${labels.video[locale]}</a></span>` : ``}
  ${(talk.article) ? `<span class="talk__article"><a href="${talk.article}" target="_blank">${labels.article[locale]}</a></span>` : ``}
  ${(talk.description[locale]) ? `<button class="talk__showdesc" type="button">${labels.showDesc[locale]}</button>` : ``}
`;

  const getPresentationTemplate = talk => {
    let locale = Object.keys(talk.description).find(d => d === document.documentElement.lang) || "en";
    let [talkYear, talkMonth, talkDay] = talk.date.split("-");
    return `
  <header class="talk__header">
    <h3 class="talk__title">${talk.conference}</h3>
    <section class="talk__details">
      <span class="talk__date">${labels.month[parseInt(talkMonth)][locale]}, ${talkDay}. ${talkYear}</span>
      <span class="talk__venue"><strong>${labels.venue[locale]}:</strong> ${talk.venue}</span>
      <span class="talk__presentation"><strong>${labels.presentation[locale]}:</strong> ${(talk.presentation) ? `<a href="${talk.presentation}" target="_blank">${talk.title}</a>` : talk.title}</span>
      <section class="talk__actions">
      ${getPresentationActions(talk, locale)}
      </section>
    </section>
  </header>
  ${(talk.description[locale]) ? `<section class="talk__description">${talk.description[locale]}</section>` : ``}
  `;
  };

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
        const article = document.createElement('article');
        article.classList.add("site-talks__item");
        article.innerHTML = getPresentationTemplate(talk);
        yearSection.appendChild(article);
      });
      talksContainer.appendChild(yearSection);
    });
  };

  var loadProjects = () => (loadPresentations());

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

  var dom = {isRootElem,findParendByClass,findSiblind};

  const showHideHandler = (elem, classElem, classOpen, classParent, classTarget) => {
    if(!elem.classList.contains(classElem)) return;

    const targetElem = dom.findSiblind(elem, classParent, classTarget);
    if(!targetElem) return;

    targetElem.classList.toggle(classOpen);
  };

  var addListeners = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;

      showHideHandler(element, "config__button", "config__menu--open", "site-header", "config__menu");
      showHideHandler(element, "talk__showdesc", "talk__description--open", "site-talks__item", "talk__description");
    });
  };

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

  var topPannel = {init, hide, message, warn, error};

  try{
    loadProjects();
    addListeners();
    topPannel.init();
  }
  catch(e) {
    console.error("An error ocurred while executing this site's script:\n", e);//eslint-disable-line
  }

}());
//# sourceMappingURL=app.js.map
