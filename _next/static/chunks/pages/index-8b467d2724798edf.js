(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4943)}])},4943:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>K});var a={};n.r(a),n.d(a,{about:()=>m,banner:()=>N,bing:()=>k,date:()=>_,donate:()=>g,duckduckgo:()=>b,echo:()=>j,email:()=>y,github:()=>w,google:()=>f,help:()=>d,reddit:()=>x,repo:()=>h,resume:()=>p,sudo:()=>O,sumfetch:()=>D,whoami:()=>v});var r={};n.r(r),n.d(r,{projects:()=>S,readme:()=>R,weather:()=>H});var c={};n.r(c),n.d(c,{acqua:()=>L});var o=n(4848),s=n(3368),l=n.n(s),i=n(6540);let u=JSON.parse('{"oJ":"https://raw.githubusercontent.com/ZerolAcqua/ZerolAcqua/master/README.md","DD":"AcquaTerm","UU":"Lechen Hu","OD":{"M":"ZerolAcqua"},"Rp":"hlc118@whu.edu.cn","RW":"acquaterm","SQ":"visitor","LB":"https://github.com/ZerolAcqua/acqua-term","Cc":""}'),d=async()=>{let e="";for(let t=1;t<=Object.keys(M).sort().length;t++)t%7==0?e+=Object.keys(M).sort()[t-1]+"\n":e+=Object.keys(M).sort()[t-1]+" ";return"Welcome! Here are all the available commands:\n\n".concat(e,"\n\n[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\n\nType 'sumfetch' to display summary.\n")},h=async()=>(window.open("".concat(u.LB)),"Opening Github repository..."),m=async()=>"Hi, I am ".concat(u.UU,". \nWelcome to my website!\nMore about me:\n'sumfetch' - short summary.\n'resume' - my latest resume.\n'readme' - my github readme."),p=async()=>(window.open("".concat(u.Cc)),"Opening resume..."),g=async()=>"thank you for your interest. \nbut i don't need donations at the moment.\n",y=async()=>(window.open("mailto:".concat(u.Rp)),"Opening mailto:".concat(u.Rp,"...")),w=async()=>(window.open("https://github.com/".concat(u.OD.M,"/")),"Opening github..."),f=async e=>(window.open("https://google.com/search?q=".concat(e.join(" "))),"Searching google for ".concat(e.join(" "),"...")),b=async e=>(window.open("https://duckduckgo.com/?q=".concat(e.join(" "))),"Searching duckduckgo for ".concat(e.join(" "),"...")),k=async e=>(window.open("https://bing.com/search?q=".concat(e.join(" "))),"Wow, really? You are using bing for ".concat(e.join(" "),"?")),x=async e=>(window.open("https://www.reddit.com/search/?q=".concat(e.join(" "))),"Searching reddit for ".concat(e.join(" "),"...")),j=async e=>e.join(" "),v=async()=>"".concat(u.SQ),_=async()=>new Date().toString(),O=async()=>(navigator.language.includes("zh")?window.open("https://www.bilibili.com/video/BV1GJ411x7h7/","_blank"):window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank"),"Permission denied: with little power comes... no responsibility? "),D=async()=>"\n   sumfetch\n  -----------\n   ABOUT\n   ".concat(u.UU,'\n   <u><a href="').concat(u.Cc,'" target="_blank">resume</a></u>\n  爵 <u><a href="').concat(u.LB,'" target="_blank">Github repo</a></u>\n  -----------\n   CONTACT \n   <u><a href="mailto:').concat(u.Rp,'" target="_blank">').concat(u.Rp,'</a></u>\n   <u><a href="https://github.com/').concat(u.OD.M,'" target="_blank">github.com/').concat(u.OD.M,"</a></u>\n  \n"),N=()=>"\n █████╗  ██████╗ ██████╗ ██╗   ██╗ █████╗ ████████╗███████╗██████╗ ███╗   ███╗\n██╔══██╗██╔════╝██╔═══██╗██║   ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗████╗ ████║\n███████║██║     ██║   ██║██║   ██║███████║   ██║   █████╗  ██████╔╝██╔████╔██║\n██╔══██║██║     ██║▄▄ ██║██║   ██║██╔══██║   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║\n██║  ██║╚██████╗╚██████╔╝╚██████╔╝██║  ██║   ██║   ███████╗██║  ██║██║ ╚═╝ ██║\n╚═╝  ╚═╝ ╚═════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝\n                                                                              \nType 'help' to see the list of available commands.\nType 'sumfetch' to display summary.\nType 'repo' or click <u><a class=\"text-light-blue dark:text-dark-blue underline\" href=\"".concat(u.LB,'" target="_blank">here</a></u> for the Github repository.\n');var q=n(2505),C=n.n(q);let T=async()=>{let{data:e}=await C().get("https://api.github.com/users/".concat(u.OD.M,"/repos"));return e},A=async()=>{let{data:e}=await C().get(u.oJ);return e},E=async e=>{try{let{data:t}=await C().get("https://wttr.in/".concat(e,"?ATm"));return t}catch(e){return e}},S=async()=>(await T()).map(e=>"".concat(e.name,' - <a class="text-light-blue dark:text-dark-blue underline" href="').concat(e.html_url,'" target="_blank">').concat(e.html_url,"</a>")).join("\n"),R=async()=>{let e=await A();return"Opening GitHub README...\n\n  ".concat(e)},H=async e=>{let t=e.join("+");return t?await E(t):"Usage: weather [city]. Example: weather casablanca"},L=async()=>'Acqua is the cutest pony!\n	<img src="https://cdn.zerolacqua.top/images/acqua_qrcode.png" alt="Acqua" width="200" height="200">',M={...a,...r},U={...c},W={...M,...U},B=e=>-1!==["clear",...Object.keys(M)].indexOf(e.split(" ")[0].toLowerCase()),G=async(e,t,n,a)=>{let r=e.split(" ");r[0]=r[0].toLowerCase(),"clear"===r[0]?n():t(""===e?"":-1===Object.keys(W).indexOf(r[0])?"shell: command not found: ".concat(r[0],". Try 'help' to get started."):await W[r[0]](r.slice(1))),a("")},I=(e,t)=>{let n=["clear",...Object.keys(M)].filter(t=>t.startsWith(e));console.log(n),1===n.length&&t(n[0])},Q=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"text-light-yellow dark:text-dark-yellow",children:u.SQ}),(0,o.jsx)("span",{className:"text-light-gray dark:text-dark-gray",children:"@"}),(0,o.jsx)("span",{className:"text-light-green dark:text-dark-green",children:u.RW}),(0,o.jsx)("span",{className:"text-light-gray dark:text-dark-gray",children:":$ ~ "})]}),F=e=>{let{inputRef:t,containerRef:n,command:a,history:r,lastCommandIndex:c,setCommand:s,setHistory:l,setLastCommandIndex:i,clearHistory:u}=e,d=async e=>{let t=r.map(e=>{let{command:t}=e;return t}).filter(e=>e);if("c"===e.key&&e.ctrlKey&&(e.preventDefault(),s(""),l(""),i(0)),"l"===e.key&&e.ctrlKey&&(e.preventDefault(),u()),"Tab"===e.key&&(e.preventDefault(),I(a,s)),("Enter"===e.key||"13"===e.code)&&(e.preventDefault(),i(0),await G(a,l,u,s),n.current&&n.current.scrollTo(0,n.current.scrollHeight)),"ArrowUp"===e.key){if(e.preventDefault(),!t.length)return;let n=c+1;n<=t.length&&(i(n),s(t[t.length-n]))}if("ArrowDown"===e.key){if(e.preventDefault(),!t.length)return;let n=c-1;n>0?(i(n),s(t[t.length-n])):(i(0),s(""))}};return(0,o.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,o.jsx)("label",{htmlFor:"prompt",className:"flex-shrink",children:(0,o.jsx)(Q,{})}),(0,o.jsx)("input",{ref:t,id:"prompt",type:"text",className:"bg-light-background dark:bg-dark-background focus:outline-none flex-grow ".concat(B(a)||""===a?"text-dark-green":"text-dark-red"),value:a,onChange:e=>{let{target:{value:t}}=e;s(t)},autoFocus:!0,onKeyDown:d,autoComplete:"off",spellCheck:"false"})]})},J=e=>{let[t,n]=i.useState(e),[a,r]=i.useState(""),[c,o]=i.useState(0);return{history:t,command:a,lastCommandIndex:c,setHistory:e=>n([...t,{id:t.length,date:new Date,command:a,output:e}]),setCommand:r,setLastCommandIndex:o,clearHistory:()=>n([])}},Z=e=>{let{history:t}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e,t)=>(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,o.jsx)("div",{className:"flex-shrink",children:(0,o.jsx)(Q,{})}),(0,o.jsx)("div",{className:"flex-grow",children:e.command})]}),(0,o.jsx)("p",{className:"whitespace-pre-wrap mb-2",style:{lineHeight:"normal"},dangerouslySetInnerHTML:{__html:e.output}})]},e.command+t))})},K=e=>{let{inputRef:t}=e,n=i.useRef(null),{history:a,command:r,lastCommandIndex:c,setCommand:s,setHistory:d,clearHistory:h,setLastCommandIndex:m}=J([]),p=i.useCallback(()=>d(N()),[]);return i.useEffect(()=>{p()},[p]),i.useEffect(()=>{t.current&&(t.current.scrollIntoView(),t.current.focus({preventScroll:!0}))},[a,t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l(),{children:(0,o.jsx)("title",{children:u.DD})}),(0,o.jsx)("div",{className:"p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow",children:(0,o.jsxs)("div",{ref:n,className:"overflow-y-auto h-full",children:[(0,o.jsx)(Z,{history:a}),(0,o.jsx)(F,{inputRef:t,containerRef:n,command:r,history:a,lastCommandIndex:c,setCommand:s,setHistory:d,setLastCommandIndex:m,clearHistory:h})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[505,636,593,792],()=>t(2022)),_N_E=e.O()}]);