
import {marked} from 'marked';

function Markdown(props :String) {
  return getContent(`${props}`);   
 };
  
    async function getContent(fileName: string){
      let fileContent :String;
      return fileContent = await fetch(`/Markdown/${fileName}`)
          .then(function (response) {
            console.log(response.text())
            return response.text();         
          })
          .then(function (datac) {
            console.log("4.")
            return console.log(marked(datac));         
          }) || "Loading..."; 
        };
     
export default Markdown



