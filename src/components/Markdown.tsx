// import React, {useState, useEffect} from 'react';
//  import second from 'markdown-to-jsx';
import React from 'react';
import {marked} from 'marked';
import { Pipe } from 'stream';

// import file from '../pages/Markdown/home'
{/* <template>
     <Markdown [src] ='${file_name}' /> 
</template> */}

function Markdown(file_name :string) {

   fetch(file_name)
   .then(file_name => {
    return console.log(file_name.text())
  })
  .then(text => {
    return console.log(text)
//     this.setState({
//       markdown: marked(text)
      
//     })
  })
   
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
}




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

export default Markdown