"use strict";var c=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var y=(t,n)=>{for(var i in n)c(t,i,{get:n[i],enumerable:!0})},S=(t,n,i,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let h of p(n))!d.call(t,h)&&h!==i&&c(t,h,{get:()=>n[h],enumerable:!(a=T(n,h))||a.enumerable});return t};var f=t=>S(c({},"__esModule",{value:!0}),t);var v={};y(v,{default:()=>u,removeTheThing:()=>m,setTheThing:()=>r});module.exports=f(v);var e=require("@raycast/api"),o=require("react/jsx-runtime"),s=new e.Cache,l=["Eat more healthily","Exercise","Reply to Sarah\u2019s email","Be happy","Stop procrastinating","Finish the \u{1F984} project","Important meeting today"],x=l[Math.floor(Math.random()*l.length)];function g(){(0,e.launchCommand)({name:"show-one-thing",type:e.LaunchType.Background}),(0,e.popToRoot)(),(0,e.closeMainWindow)()}async function m(){s.remove("onething"),g(),await(0,e.showToast)({title:"Removed One Thing",style:e.Toast.Style.Success})}async function r(t){s.set("onething",t),g(),await(0,e.showToast)({title:"Set One Thing",style:e.Toast.Style.Success})}function u(t){let n=t.arguments?.oneThing??t.launchContext?.oneThing;if(n)return r(n);let i=s.get("onething");return(0,o.jsx)(e.Form,{actions:(0,o.jsxs)(e.ActionPanel,{children:[(0,o.jsx)(e.Action.SubmitForm,{icon:e.Icon.Pencil,title:"Set the Thing",onSubmit:a=>r(a.text)}),i?(0,o.jsx)(e.Action,{style:e.Action.Style.Destructive,icon:e.Icon.Trash,title:"Remove the Thing",shortcut:e.Keyboard.Shortcut.Common.Remove,onAction:m}):null]}),children:(0,o.jsx)(e.Form.TextField,{id:"text",placeholder:x,title:"One Thing"})})}0&&(module.exports={removeTheThing,setTheThing});