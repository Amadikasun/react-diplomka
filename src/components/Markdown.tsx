
import { marked } from 'marked';

function Markdown(props: String) {
  const stopPromise = `${getContent(`${props}`)}`
  console.log(stopPromise)
  return {
    __html: `${stopPromise}`
  };
};

async function getContent(fileName: string) {
  console.log(fileName)
  let fileContent: String;
  return fileContent = await fetch(`/Markdown/${fileName}`)
    .then(function (res) {
      // console.log(res.text())
      return res.text();
    })
    .then(function (datac) {
      // console.log("4.")
      return console.log(marked(datac));
    }) || "Loading...";
};

export default Markdown



