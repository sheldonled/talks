(function() {
  document.addEventListener('DOMContentLoaded', function(){

  //Adding Listeners
  window.onload = function(){
    document.querySelectorAll("#prjDetails .close")[0].addEventListener('click',function(e){closeDetailProject();});

    //15 Ways of making money with Free Software
    document.querySelectorAll(".moneyfs img")[0].addEventListener('click',function(e){
      detailProject({"id":"moneyfs","name":"15 Ways of making money with Free Software","img":"img/floss.png","slides":"15waysfs.html","essay":"http://sheldonled.com/pdf/15waysFS.pdf"});
    });
    //Google Drive API
    document.querySelectorAll(".googledrive img")[0].addEventListener('click',function(e){
      detailProject({"id":"googledrive","name":"Google Drive API","img":"img/googledrive.png","slides":"googledrive.html","essay":""});
    });
  };

    /**
     * Handling the view in about page
     */
    (function(){
      var items = getList();
      if (items){
        for (var i in items){
          items[i].addEventListener('click',toggleActive);
        }
        removeInfoClass();
        document.getElementById("resume").click();
      }
      function getList(){
        var items = document.getElementsByClassName("aboutmenu")[0];
        var list= [], j = 0;
        if (items){
          for(var i in items.childNodes) {
            var item = items.childNodes[i];
            if (item.nodeType == 1) {
              list[j] = item;
              j++;
            }
          }
          return list;
        } else {
          return null;
        }
      }

      function removeInfoClass(){
        var items = getList();
        for (var i in items){
          items[i].className = "";
          document.getElementById(items[i].id+"info").style.display = "none";
        }
      }
      function toggleActive(){
        removeInfoClass();
        this.className = "active";
        document.getElementById(this.id+"info").style.display = "block";
      }
    }());
    
    /**
     * Alerting if the browser doesn't support box-shaddow
     */
    var supports = (function() {
      var div = document.createElement('div'),
        vendors = 'Khtml Ms O Moz Webkit'.split(' '),
        len = vendors.length;
      return function(prop) {
        if (prop in div.style) {
          return true;
        }
        prop = prop.replace(/^[a-z]/, function(val) {
          return val.toUpperCase();
        });
        while (len--) {
          if (vendors[len] + prop in div.style) {
            // browser supports box-shadow. Do what you need.
            // Or use a bang (!) to test if the browser doesn't.
            return true;
          } 
        }
        return false;
     };
    }());
    if (!supports('boxShadow')) { 
       alert("You wouldn't see this site right! \n\nGet a modern browser like: Firefox or Chrome!");
    }
  });


  //Closing the detail view by ESC key
  document.onkeyup = function(e){
    if(e.keyCode == 27) {
      closeDetailProject();
    }
  };
  
  /**
   * Do the work of closing the detail view
   */
  function closeDetailProject(){
    el = document.getElementById("prjDetails");
    hiddenPos = (document.documentElement.scrollTop || document.body.scrollTop)+window.innerHeight;
    showDetail(el,hiddenPos,5,true);
    window.onscroll = "";
  }
  /**
   * Function that shows the detail view of a project
   */
  function detailProject(prj) {
    var view = document.getElementById("prjDetails"),
    prjName = document.getElementById("detail-prjName"),
    prjDesc = document.getElementById("detail-prjDesc"),
    prjSlides = document.getElementById("detail-prjSlides"),
    prjEssay = document.getElementById("detail-prjEssay"),
    prjImg = document.getElementById("detail-prjImg");
    if(view.style.display == "block"){
      closeDetailProject();
      return;
    }
    //Adding content to the detail view
    prjName.textContent = prj.name;
    prjImg.src  = prj.img;
    prjImg.alt  = prj.name;
    prjSlides.href = prj.slides;
    prjEssay.href = prj.essay;
    //Adding the description of each project
    switch(prj.id) {
      case "moneyfs":
        prjDesc.innerHTML = "<p>Nowadays, with more than 30 years of Free Software Movement, "+
        "and more than 20 years of Linux, a lot of things changed! With the coming of this "+
        "revolutionary way of seeing the world, new business models has been developed or matured. "+
        "I give you then, 15 ways of making your success with this phylosophy of like  and work.</p>";
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
        prjDesc.innerHTML = "<p>=)</p>"; 
        break;
    }
    hiddenPos = (document.documentElement.scrollTop || document.body.scrollTop)+window.innerHeight;  
    view.style.display = "block";
    view.style.top = hiddenPos+"px";
    showDetail(view,(document.documentElement.scrollTop || document.body.scrollTop),5); 
    window.onscroll = function(){
      var detailTop     = parseInt(document.getElementById("prjDetails").style.top),
          windowTop     = (document.documentElement.scrollTop || document.body.scrollTop),
          detailHeight  = document.getElementById("prjDetails").offsetHeight,
          windowHeight  = window.innerHeight;

          if(detailTop >= windowTop) {
            document.getElementById("prjDetails").style.top = (document.documentElement.scrollTop || document.body.scrollTop)+"px";
          } else {
            diffBottom = Math.abs(detailTop - windowTop) - Math.abs(detailHeight - windowHeight);
            if(diffBottom > 0) {
              document.getElementById("prjDetails").style.top = (detailTop+diffBottom)+"px";
            }
          }
    };
  }


  function showDetail(el,y,interval,hide) {
    elTop = parseInt(el.style.top);
    if (elTop == y){
      if(hide)el.style.display="none";
      return;
    } else if(Math.abs(elTop-y) < 25) {
      el.style.top = y+"px";
      if(hide)el.style.display="none";
      return;
    }

    el.style.top = ((elTop > y) ? elTop-20 : ((elTop < y) ? elTop+20 : y))+"px";
    
    setTimeout(function() { showDetail(el, y, interval,hide); }, interval);
  }
}());