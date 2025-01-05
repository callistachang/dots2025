"use strict";require("./__raycast_check_for_updates");var A=Object.create;var m=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,J=Object.prototype.hasOwnProperty;var D=(e,n)=>{for(var r in n)m(e,r,{get:n[r],enumerable:!0})},S=(e,n,r,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of T(n))!J.call(e,i)&&i!==r&&m(e,i,{get:()=>n[i],enumerable:!(s=O(n,i))||s.enumerable});return e};var l=(e,n,r)=>(r=e!=null?A(v(e)):{},S(n||!e||!e.__esModule?m(r,"default",{value:e,enumerable:!0}):r,e)),M=e=>S(m({},"__esModule",{value:!0}),e);var H={};D(H,{default:()=>I});module.exports=M(H);var t=require("@raycast/api"),c=require("react");var F=require("@raycast/api"),p=l(require("fs"));var x=require("@raycast/api");function h(){return(0,x.getPreferenceValues)().build}var k={Code:"vscode","Code - Insiders":"vscode-insiders",Cursor:"cursor",VSCodium:"vscode-oss",Windsurf:"windsurf"};function u(){let e=k[h()];return!e||e.length<=0?k.Code:e}function E(e){return e instanceof Error?e.message:"unknown error"}async function f(e){return p.promises.access(e,p.constants.F_OK).then(()=>!0).catch(()=>!1)}var Z=new Intl.NumberFormat("en",{notation:"compact"});function $(e){return new Promise(n=>setTimeout(n,e))}async function R(e,n=2e3){let r=new Date;for(;r.getTime()>0;){if(await $(10),await f(e))return!0;if(new Date().getTime()-r.getTime()>n)return!1}return!1}function C(e){return`${u()}://tonka3000.raycast/${e}`}async function b(e){await(0,F.open)(C(e))}var a=l(require("fs/promises")),L=l(require("os")),g=l(require("path"));var o=require("react/jsx-runtime");function j(){let e=h();return g.default.join(L.homedir(),`Library/Application Support/${e}/User/globalStorage/tonka3000.raycast/transit`)}function W(e){let n=e.command,r=n.category?`${n.category}: ${n.title}`:n.title;return(0,o.jsx)(t.Action.CreateQuicklink,{shortcut:{modifiers:["cmd"],key:"l"},quicklink:{link:C(`runcommand?cmd=${n.command}`),name:`VSCode - ${r}`}})}async function B(){let e=j();await a.mkdir(e,{recursive:!0});let n=g.default.join(e,"request.json"),r=g.default.join(e,"commands.json");if(await a.writeFile(n,JSON.stringify({command:"writecommands",args:{filename:r}},null,2)),await f(r)&&await a.rm(r),await R(r))return await _(r);throw new Error("Could not get VSCode commands")}function q(e){let n=e.command,r=i=>i.category?`${i.category}: ${i.title}`:i.title,s=async()=>{try{await b(`runcommand?cmd=${n.command}`),(0,t.popToRoot)()}catch(i){(0,t.showToast)({style:t.Toast.Style.Failure,title:"Could not run Command",message:E(i)})}};return(0,o.jsx)(t.List.Item,{title:r(n),actions:(0,o.jsxs)(t.ActionPanel,{children:[(0,o.jsxs)(t.ActionPanel.Section,{children:[(0,o.jsx)(t.Action,{title:"Run Command",onAction:s,icon:{source:t.Icon.Terminal}}),(0,o.jsx)(W,{command:n})]}),(0,o.jsx)(t.ActionPanel.Section,{children:(0,o.jsx)(t.Action.CopyToClipboard,{shortcut:{modifiers:["cmd","shift"],key:"."},title:"Copy Command ID",content:n.command})})]})})}function X(){return(0,o.jsx)(t.Action.OpenInBrowser,{title:"Install Raycast for VSCode",url:`${u()}:extension/tonka3000.raycast`,onOpen:()=>{(0,t.popToRoot)(),(0,t.showHUD)("Open VSCode Extension")}})}function I(){let{isLoading:e,commands:n,error:r,refresh:s}=Q();return r&&(0,t.showToast)({style:t.Toast.Style.Failure,title:"Error",message:r}),(0,o.jsxs)(t.List,{isLoading:e,searchBarPlaceholder:e===!0?"Load Commands from VSCode":"Search Commands",children:[(0,o.jsx)(t.List.Section,{title:"Commands",subtitle:`${n?.length}`,children:n?.map(i=>(0,o.jsx)(q,{command:i},i.command))}),r&&(0,o.jsx)(t.List.EmptyView,{title:"No Response from Raycast for VSCode extension",icon:"\u26A0\uFE0F",actions:(0,o.jsxs)(t.ActionPanel,{children:[(0,o.jsx)(t.Action,{title:"Reload",icon:t.Icon.RotateClockwise,shortcut:{modifiers:["cmd"],key:"r"},onAction:s}),(0,o.jsx)(X,{})]})})]})}async function _(e){let n=await a.readFile(e,"utf-8"),r=JSON.parse(n);return await a.rm(e),r}function Q(){let[e,n]=(0,c.useState)(!0),[r,s]=(0,c.useState)(),[i,w]=(0,c.useState)(),[P,N]=(0,c.useState)(new Date),V=()=>{N(new Date)};return(0,c.useEffect)(()=>{let d=!1;async function U(){if(!d){n(!0),w(void 0);try{let y=await B();d||s(y)}catch(y){d||w(E(y))}finally{d||n(!1)}}}return U(),()=>{d=!0}},[P]),{commands:r,isLoading:e,error:i,refresh:V}}