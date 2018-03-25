import loadProjects from "./presLoader";
import addListeners from "./listeners";
import topPannel from "./topPannel";

try{
  loadProjects();
  addListeners();
  topPannel.init();
}
catch(e) {
  console.error("An error ocurred while executing this site's script:\n", e);//eslint-disable-line
}