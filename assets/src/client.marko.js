import MyTemplate from "./app/index.marko";
 
MyTemplate.renderSync({...window.GLOBAL}).replaceChildrenOf(document.getElementById('container'));