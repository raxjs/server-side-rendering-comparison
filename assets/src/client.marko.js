import MyTemplate from "./app/index.marko";
 
MyTemplate.renderSync({...window.GLOBAL}).appendTo(document.getElementById('container'));