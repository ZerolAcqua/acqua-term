(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3270)}])},3270:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var a={};n.r(a),n.d(a,{about:()=>d,acqua:()=>T,banner:()=>C,bing:()=>b,date:()=>v,donate:()=>p,duckduckgo:()=>f,echo:()=>x,emacs:()=>N,email:()=>y,github:()=>g,google:()=>w,help:()=>u,nvim:()=>D,reddit:()=>k,repo:()=>h,resume:()=>m,sudo:()=>q,vi:()=>_,vim:()=>O,whoami:()=>j});var r={};n.r(r),n.d(r,{projects:()=>L,readme:()=>M,weather:()=>U});var c=n(4848),o=n(3368),s=n.n(o),l=n(6540);let i=JSON.parse('{"oJ":"https://raw.githubusercontent.com/ZerolAcqua/ZerolAcqua/master/README.md","DD":"AcquaTerm","UU":"Lechen Hu","OD":{"M":"ZerolAcqua"},"Rp":"hlc118@whu.edu.cn","RW":"acquaterm","SQ":"visitor","LB":"https://github.com/ZerolAcqua/acqua-term","Cc":""}'),u=async()=>{let e="";for(let t=1;t<=Object.keys(B).sort().length;t++)t%7==0?e+=Object.keys(B).sort()[t-1]+"\n":e+=Object.keys(B).sort()[t-1]+" ";return"Welcome! Here are all the available commands:\n\n".concat(e,"\n\n[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\n\nType 'sumfetch' to display summary.\n")},h=async()=>(window.open("".concat(i.LB)),"Opening Github repository..."),d=async()=>"Hi, I am ".concat(i.UU,". \nWelcome to my website!\nMore about me:\n'sumfetch' - short summary.\n'resume' - my latest resume.\n'readme' - my github readme."),m=async()=>(window.open("".concat(i.Cc)),"Opening resume..."),p=async()=>"thank you for your interest. \nbut i don't need donations at the moment.\n",y=async()=>(window.open("mailto:".concat(i.Rp)),"Opening mailto:".concat(i.Rp,"...")),g=async()=>(window.open("https://github.com/".concat(i.OD.M,"/")),"Opening github..."),w=async e=>(window.open("https://google.com/search?q=".concat(e.join(" "))),"Searching google for ".concat(e.join(" "),"...")),f=async e=>(window.open("https://duckduckgo.com/?q=".concat(e.join(" "))),"Searching duckduckgo for ".concat(e.join(" "),"...")),b=async e=>(window.open("https://bing.com/search?q=".concat(e.join(" "))),"Wow, really? You are using bing for ".concat(e.join(" "),"?")),k=async e=>(window.open("https://www.reddit.com/search/?q=".concat(e.join(" "))),"Searching reddit for ".concat(e.join(" "),"...")),x=async e=>e.join(" "),j=async()=>"".concat(i.SQ),v=async()=>new Date().toString(),_=async()=>"woah, you still use 'vi'? just try 'vim'.",O=async()=>"'vim' is so outdated. how about 'nvim'?",D=async()=>"'nvim'? too fancy. why not 'emacs'?",N=async()=>"you know what? just use vscode.",q=async()=>(navigator.language.includes("zh")?window.open("https://www.bilibili.com/video/BV1GJ411x7h7/","_blank"):window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank"),"Permission denied: with little power comes... no responsibility? "),C=()=>"\n █████╗  ██████╗ ██████╗ ██╗   ██╗ █████╗ ████████╗███████╗██████╗ ███╗   ███╗\n██╔══██╗██╔════╝██╔═══██╗██║   ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗████╗ ████║\n███████║██║     ██║   ██║██║   ██║███████║   ██║   █████╗  ██████╔╝██╔████╔██║\n██╔══██║██║     ██║▄▄ ██║██║   ██║██╔══██║   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║\n██║  ██║╚██████╗╚██████╔╝╚██████╔╝██║  ██║   ██║   ███████╗██║  ██║██║ ╚═╝ ██║\n╚═╝  ╚═╝ ╚═════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝\n                                                                              \nType 'help' to see the list of available commands.\nType 'sumfetch' to display summary.\nType 'repo' or click <u><a class=\"text-light-blue dark:text-dark-blue underline\" href=\"".concat(i.LB,'" target="_blank">here</a></u> for the Github repository.\n'),T=async()=>'Acqua is the cutest pony!\n  <img src="https://cdn.zerolacqua.top/images/acqua_qrcode.png" alt="Acqua" width="200" height="200">';var A=n(2505),E=n.n(A);let S=async()=>{let{data:e}=await E().get("https://api.github.com/users/".concat(i.OD.M,"/repos"));return e},R=async()=>{let{data:e}=await E().get(i.oJ);return e},H=async e=>{try{let{data:t}=await E().get("https://wttr.in/".concat(e,"?ATm"));return t}catch(e){return e}},L=async()=>(await S()).map(e=>"".concat(e.name,' - <a class="text-light-blue dark:text-dark-blue underline" href="').concat(e.html_url,'" target="_blank">').concat(e.html_url,"</a>")).join("\n"),M=async()=>{let e=await R();return"Opening GitHub README...\n\n  ".concat(e)},U=async e=>{let t=e.join("+");return t?await H(t):"Usage: weather [city]. Example: weather casablanca"},W=async()=>"\n   sumfetch\n  -----------\n   ABOUT\n   ".concat(i.UU,'\n   <u><a href="').concat(i.Cc,'" target="_blank">resume</a></u>\n  爵 <u><a href="').concat(i.LB,'" target="_blank">Github repo</a></u>\n  -----------\n   CONTACT \n   <u><a href="mailto:').concat(i.Rp,'" target="_blank">').concat(i.Rp,'</a></u>\n   <u><a href="https://github.com/').concat(i.OD.M,'" target="_blank">github.com/').concat(i.OD.M,"</a></u>\n  \n"),B={...a,...r,sumfetch:W},G=e=>-1!==["clear",...Object.keys(B)].indexOf(e.split(" ")[0].toLowerCase()),I=async(e,t,n,a)=>{let r=e.split(" ");r[0]=r[0].toLowerCase(),"clear"===r[0]?n():t(""===e?"":-1===Object.keys(B).indexOf(r[0])?"shell: command not found: ".concat(r[0],". Try 'help' to get started."):await B[r[0]](r.slice(1))),a("")},Q=(e,t)=>{let n=Object.keys(B).filter(t=>t.startsWith(e));console.log(n),1===n.length&&t(n[0])},F=()=>(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"text-light-yellow dark:text-dark-yellow",children:i.SQ}),(0,c.jsx)("span",{className:"text-light-gray dark:text-dark-gray",children:"@"}),(0,c.jsx)("span",{className:"text-light-green dark:text-dark-green",children:i.RW}),(0,c.jsx)("span",{className:"text-light-gray dark:text-dark-gray",children:":$ ~ "})]}),J=e=>{let{inputRef:t,containerRef:n,command:a,history:r,lastCommandIndex:o,setCommand:s,setHistory:l,setLastCommandIndex:i,clearHistory:u}=e,h=async e=>{let t=r.map(e=>{let{command:t}=e;return t}).filter(e=>e);if("c"===e.key&&e.ctrlKey&&(e.preventDefault(),s(""),l(""),i(0)),"l"===e.key&&e.ctrlKey&&(e.preventDefault(),u()),"Tab"===e.key&&(e.preventDefault(),Q(a,s)),("Enter"===e.key||"13"===e.code)&&(e.preventDefault(),i(0),await I(a,l,u,s),n.current&&n.current.scrollTo(0,n.current.scrollHeight)),"ArrowUp"===e.key){if(e.preventDefault(),!t.length)return;let n=o+1;n<=t.length&&(i(n),s(t[t.length-n]))}if("ArrowDown"===e.key){if(e.preventDefault(),!t.length)return;let n=o-1;n>0?(i(n),s(t[t.length-n])):(i(0),s(""))}};return(0,c.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,c.jsx)("label",{htmlFor:"prompt",className:"flex-shrink",children:(0,c.jsx)(F,{})}),(0,c.jsx)("input",{ref:t,id:"prompt",type:"text",className:"bg-light-background dark:bg-dark-background focus:outline-none flex-grow ".concat(G(a)||""===a?"text-dark-green":"text-dark-red"),value:a,onChange:e=>{let{target:{value:t}}=e;s(t)},autoFocus:!0,onKeyDown:h,autoComplete:"off",spellCheck:"false"})]})},Z=e=>{let[t,n]=l.useState(e),[a,r]=l.useState(""),[c,o]=l.useState(0);return{history:t,command:a,lastCommandIndex:c,setHistory:e=>n([...t,{id:t.length,date:new Date,command:a,output:e}]),setCommand:r,setLastCommandIndex:o,clearHistory:()=>n([])}},K=e=>{let{history:t}=e;return(0,c.jsx)(c.Fragment,{children:t.map((e,t)=>(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,c.jsx)("div",{className:"flex-shrink",children:(0,c.jsx)(F,{})}),(0,c.jsx)("div",{className:"flex-grow",children:e.command})]}),(0,c.jsx)("p",{className:"whitespace-pre-wrap mb-2",style:{lineHeight:"normal"},dangerouslySetInnerHTML:{__html:e.output}})]},e.command+t))})},P=e=>{let{inputRef:t}=e,n=l.useRef(null),{history:a,command:r,lastCommandIndex:o,setCommand:u,setHistory:h,clearHistory:d,setLastCommandIndex:m}=Z([]),p=l.useCallback(()=>h(C()),[]);return l.useEffect(()=>{p()},[p]),l.useEffect(()=>{t.current&&(t.current.scrollIntoView(),t.current.focus({preventScroll:!0}))},[a,t]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s(),{children:(0,c.jsx)("title",{children:i.DD})}),(0,c.jsx)("div",{className:"p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow",children:(0,c.jsxs)("div",{ref:n,className:"overflow-y-auto h-full",children:[(0,c.jsx)(K,{history:a}),(0,c.jsx)(J,{inputRef:t,containerRef:n,command:r,history:a,lastCommandIndex:o,setCommand:u,setHistory:h,setLastCommandIndex:m,clearHistory:d})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[505,636,593,792],()=>t(2022)),_N_E=e.O()}]);