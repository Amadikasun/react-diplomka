// import React, {useState, useEffect} from 'react';
//  import second from 'markdown-to-jsx';
import React from 'react';
import {marked} from 'marked';
// import { Pipe } from 'stream';



function Markdown(markdown :string) {
  getContent(`${markdown}`);
      
};
    async function getContent(fileName: string){
       let fileContent = "Loading...";
       fileContent = await fetch(`/md/${fileName}`)
          .then(function (response) {
            return response.text();         
          })
          .then(function (datac) {
            return marked(datac);         
          }); 
        };
      
    

export default Markdown





// export default ({
//   name: "MarkdownDisplay",
//   props: {
//     markdown: {
//       type: String,
//       required: true,
//     },
//     fileContent: String,
//   },
  
//     data: function () {
//     return {
//       fileContent: "**Loading...**",
//       fileToRender: null,
//       rawContent: null,
//     };
//   },
//   created: function () {
//     this.getContent(`${this.markdown}`);
//   },
//   methods: {
//     async getContent(fileName: string) {
//      this.fileContent = await fetch(`/md/${fileName}`)
//         .then(function (response) {
//           return response.text();         
//         })
//         .then(function (datac) {
//           return marked(datac);         
//         }); 
//     },
//   },
// });











// markdown: String;
// fileContent: "**Loading...**";

// function Markdown(fileName :string) {
//   this.getContent(`${this.markdown}`);

//   };
// //     this.setState({
// //       markdown: marked(text)
      
// //     })
  
//    async getContent(fileName: string) {
//   let fileContent = await fetch(`/md/${fileName}`)
//   .then(function (response) {
//     return response.text();         
//   })
//   .then(function (datac) {
//     return marked(datac);         
//   }); 
// };
//   render() {
//          const { markdown } = this.state;
       
//          return (
//            <section>
//              <article dangerouslySetInnerHTML={{__html: markdown}}></article>
//            </section>)
//   }
//    return marked.parse(file_name)
   
//    fetch(file_name)
//    .then(response => {
//     return response.text()
//   })
//   .then(text => {
//     this.setState({
//       markdown: marked(text)
//     })
//   })
//   render() {
//     const { markdown } = this.state;
  
//     return (
//       <section>
//         <article dangerouslySetInnerHTML={{__html: markdown}}></article>
//       </section>
//     )
//   }
// }




//    var props = 
//    console.log(marked.parse(props));
//    props: {
//          markdown: {
//            require: true;
//          };
//       };
//    const [html, setHTML] = useState("");
//    useEffect(() => {
//     fetch(props)
//         .then(data => data.text())
//         .then(text => {
//             marked.parse(html)
//         })
// }, []);

// return (
//     <div>{html}</div>
// )

// props: {
//     markdown: {
//       type: String,
//       required: true,
//     },
//   },

//   setup(props) {
//     const markdownToHtml = computed(() => {
//       return marked(props.markdown);
//     });
//     return {
//       markdownToHtml,
//     };
//   },
// }

// export default Markdown