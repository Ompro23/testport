import{A as o}from"./UIcon.7a955050.js";function u(r,...l){const t=Object.assign({},r);return Object.keys(t).forEach(a=>{l.includes(a)&&delete t[a]}),t}const s=r=>r,p=[s({name:"Programming Languages",slug:"pro-lang"}),s({name:"Frameworks",slug:"framework"}),s({name:"Libraries",slug:"library"}),s({name:"Other Langauges",slug:"lang"}),s({name:"Databases",slug:"db"}),s({name:"ORMs",slug:"orm"}),s({name:"DevOps",slug:"devops"}),s({name:"Testing",slug:"test"}),s({name:"Dev Tools",slug:"devtools"}),s({name:"Markup & Style",slug:"markup-style"}),s({name:"Design",slug:"design"}),s({name:"Soft Skills",slug:"soft"})],e=r=>{const l=u(r,"category");return r.category&&(l.category=p.find(t=>t.slug===r.category)),l},c=[e({slug:"js",color:"yellow",description:"I had worked in Many projects using Js .",logo:o.JavaScript,name:"Javascript",category:"pro-lang"}),e({slug:"Sql",color:"blue",description:"",logo:o.Sql,name:"Sql",category:"lang"}),e({slug:"Git",color:"orange",description:"",logo:o.Git,name:"Git",category:"lang"}),e({slug:"Shell",color:"yellow",description:"",logo:o.Shell,name:"Shell",category:"lang"}),e({slug:"css",color:"blue",description:"",logo:o.CSS,name:"CSS",category:"markup-style"}),e({slug:"html",color:"orange",description:"",logo:o.HTML,name:"HTML",category:"markup-style"}),e({slug:"sass",color:"pink",description:"",logo:o.Sass,name:"Sass",category:"markup-style"}),e({slug:"reactjs",color:"cyan",description:"",logo:o.ReactJs,name:"React Js",category:"library"}),e({slug:"python",color:"blue",description:"",logo:o.Python,name:"Python",category:"pro-lang"}),e({slug:"java",color:"red",description:"",logo:o.Java,name:"Java",category:"pro-lang"}),e({slug:"Php",color:"blue",description:"I implemtnted the basic concepts in the php fore the CURD operation and manadaging reviews",logo:o.Php,name:"Php",category:"pro-lang"}),e({slug:"Illustrator",color:"orange",description:"",logo:o.Illustrator,name:"Illustrator",category:"design"}),e({slug:"Vite",color:"purple",description:"",logo:o.Vite,name:"Vite",category:"devtools"}),e({slug:"Photoshop",color:"darkblue",description:"",logo:o.Photoshop,name:"Photoshop",category:"design"}),e({slug:"MongoDB",color:"lightgreen",description:"",logo:o.MongoDB,name:"MongoDB",category:"db"}),e({slug:"Firebase",color:"yellow",description:"",logo:o.Firebase,name:"Firebase",category:"db"}),e({slug:"Android",color:"green",description:"",logo:o.Android,name:"Android",category:"pro-lang"}),e({slug:"C",color:"white",description:"",logo:o.C,name:"C",category:"pro-lang"}),e({slug:"Cpp",color:"white",description:"",logo:o.Cpp,name:"Cpp",category:"pro-lang"}),e({slug:"Bootstrap",color:"purple",description:"",logo:o.Bootstrap,name:"Bootstrap",category:"framework"}),e({slug:"Flask",color:"white",description:"",logo:o.Flask,name:"Flask",category:"framework"}),e({slug:"Postman",color:"orange",description:"",logo:o.Postman,name:"Postman",category:"devtools"}),e({slug:"Nodejs",color:"lightgreen",description:"",logo:o.NodeJs,name:"Nodejs",category:"pro-lang"}),e({slug:"ExpressJs",color:"gray",description:"",logo:o.ExpressJs,name:"ExpressJs",category:"pro-lang"}),e({slug:"FullPageJs",color:"lightgreen",description:"",logo:o.Fullpage,name:"FullPageJs",category:"framework"}),e({slug:"Arduino",color:"lightgreen",description:"",logo:o.Arduino,name:"Ardunio",category:"pro-lang"}),e({slug:"Azure",color:"blue",description:"",logo:o.azure,name:"Azure",category:"devops"})],m="Skills",y=(...r)=>c.filter(l=>r.includes(l.slug)),h=r=>{const l=[],t=[];return c.forEach(a=>{if(r.trim()&&!a.name.toLowerCase().includes(r.trim().toLowerCase()))return;if(!a.category){console.log(a.category),t.push(a);return}let g=l.find(i=>{var n;return i.category.slug===((n=a.category)==null?void 0:n.slug)});g||(g={items:[],category:a.category},l.push(g)),g.items.push(a)}),t.length!==0&&l.push({category:{name:"Others",slug:"others"},items:t}),l};export{h as a,y as g,c as i,m as t};
