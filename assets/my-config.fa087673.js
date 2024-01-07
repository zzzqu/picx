import{d as e,E as a,k as t,j as l,n as o,z as n,o as i,c as s,p as r,w as c,G as d,T as u,a as p,ad as g,l as f,m as h,q as m,t as b,B as y,s as v,r as w,N as _,Q as k,a4 as D,a5 as $,ag as x,ah as I,a7 as L,a8 as T,R as C,S as M,x as B,y as z,J as U,F as V,A}from"./vendor.35a3a7d3.js";import{r as R,P as S,I as E,a as G,u as O,g as H,_ as N,b as P,i as F,c as j,d as q,s as X,e as W,L as Z,E as J,f as K,D as Q,h as Y,j as ee,B as ae,k as te,l as le,m as oe,G as ne}from"./index.f010ea43.js";const ie=(e,a=1)=>new Promise((async t=>{const l=await R({url:`users/${e}/repos`,method:"GET",params:{type:"owner",sort:"created",direction:"desc",per_page:100,page:a}});l&&l.length?t(l.filter((e=>!e.fork&&!e.private)).map((e=>({value:e.name,label:e.name})))):t(null)})),se=async e=>{const a=[];for(let t=1;t<=3;t++){const l=await ie(e,t);l&&a.push(...l)}return Promise.resolve(a.length?a:null)},re=async(t,l=!0)=>{const{owner:o,selectedRepo:n,selectedBranch:i}=t;let s=null;l&&(s=e.service({text:"正在初始化仓库..."}));await R({url:`/repos/${o}/${n}/contents/README.md`,method:"PUT",data:{message:S,branch:i,content:window.btoa("\n# Welcome to use PicX\n\n[PicX](https://github.com/XPoet/picx) is a simple and powerful image hosting tool. It supports image hosting services via GitHub repository.\n\nPicX is completely open source, and you can use it for free.\n\nIf you like it, please give it a star on [GitHub](https://github.com/XPoet/picx).\n        ")},noShowErrorMsg:!0})?null==s||s.close():l&&a.error("仓库初始化失败")};var ce=P(t({__name:"refresh-config",props:{boxWidth:{type:Number,default:20},dataType:{type:String,default:"repo"}},setup(a){const t=u(),p=O(),g=l((()=>p.getters.getUserConfigInfo)).value,f=a,h=async()=>{const a=e.service({lock:!0,text:t.proxy.$t("config.loading4",{type:t.proxy.$t(f.dataType)})}),{owner:l,selectedRepo:o}=g;if("repo"===f.dataType){const e=await se(l);e&&(g.repoList=e)}else if("branch"===f.dataType){const e=await H(l,o);e.length&&(g.branchList=e)}a.close(),await p.dispatch("USER_CONFIG_INFO_PERSIST")};return(e,t)=>{const l=N,u=o,p=n;return i(),s("div",{class:"refresh-config-box",style:d({width:a.boxWidth+"rem"})},[r(p,{placement:"top",content:e.$t("config.reload",{type:e.$t(a.dataType)})},{default:c((()=>[r(u,{class:"icon",onClick:h},{default:c((()=>[r(l)])),_:1})])),_:1},8,["content"])],4)}}}),[["__scopeId","data-v-99b4db60"]]);const de={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},ue=[p("path",{fill:"currentColor",d:"M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344M64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32"},null,-1)];var pe={name:"ep-switch",render:function(e,a){return i(),s("svg",de,[...ue])}};const ge={key:0},fe={key:0},he={key:1},me={key:1};var be=P(t({__name:"authorization-status-bar",setup(e){const a=g({IEpCheck:j,IEpClose:q,IEpSwitch:pe}),{token:t,isAutoAuthorize:o,installed:d}=l((()=>X.getters.getGitHubAuthorizationInfo)).value,u=()=>{W.push({path:"/login",query:{jump:"0"}})};return f((()=>{})),(e,l)=>{const g=h,f=n;return i(),s("div",{class:y(["authorization-status-box border-box",{error:m(o)&&m(t)&&m(F)(),warning:m(o)&&m(t)&&!m(d),success:m(o)&&m(t)&&!m(F)()}])},[p("div",null,[m(o)?(i(),s("span",ge,[m(F)()?(i(),s("span",fe,b(e.$t("authorization.text_4")),1)):(i(),s("span",he,b(e.$t("authorization.text_3")),1))])):(i(),s("span",me,b(e.$t("authorization.text_5")),1))]),r(f,{placement:"top",content:e.$t("authorization.text_6")},{default:c((()=>[r(g,{type:"primary",text:"",icon:a.value.IEpSwitch,onClick:u},{default:c((()=>[v(b(e.$t("authorization.text_7")),1)])),_:1},8,["icon"])])),_:1},8,["content"])],2)}}}),[["__scopeId","data-v-25a67682"]]);const ye=l((()=>X.getters.getUserConfigInfo)).value,ve=async()=>{await X.dispatch("LOGOUT")},we=async()=>{await X.dispatch("USER_CONFIG_INFO_PERSIST")};async function _e(e){ye.logined=!0,ye.id=e.id,ye.owner=e.login,ye.name=e.name,ye.email=e.email,ye.avatarUrl=e.avatar_url,await we()}const ke=async()=>{const{selectedDir:e,dirMode:t}=ye;let l=K.global.t("config.message6");if(""===e){switch(t){case Q.newDir:l=K.global.t("config.message7");break;case Q.repoDir:l=K.global.t("config.message8",{repo:ye.selectedRepo})}a.warning({message:l})}else await W.push("/upload")},De=async()=>{const{token:t}=ye;if(!t)return void a.error({message:K.global.t("config.message1")});const o=e.service({lock:!0,text:K.global.t("config.loading6")});try{const e=await Y(ye.token);if(!e)return o.close(),void a.error({message:K.global.t("config.message2")});X.getters.getGitHubAuthorizationInfo.isAutoAuthorize||await X.dispatch("SET_GITHUB_AUTHORIZATION_INFO",{manualToken:ye.token}),await _e(e);const t=await(e=>R({url:"/user/repos",method:"POST",params:{name:E,description:G,private:!1},headers:{Authorization:`Bearer ${e}`},success422:!0,noShowErrorMsg:!0}))(ye.token),n=l((()=>X.getters.getGitHubAuthorizationInfo)).value,{token:i,authorized:s}=n;if(await(async(e,t,l)=>{var o;if(t&&l)if(e)await X.dispatch("SET_GITHUB_AUTHORIZATION_INFO",{installed:!0});else{const e=a({customClass:"custom-message-container",duration:0,offset:20,type:"warning",message:`<div class="content-box authorization">\n                    <span class="msg">${K.global.t("authorization.msg_2")}</span>\n                    <spna class="btn-box">\n                      <span class="confirm btn">${K.global.t("authorization.btn_1")}</span>\n                    </spna>\n                  </div>`,dangerouslyUseHTMLString:!0});null==(o=document.querySelector(".custom-message-container .authorization .confirm"))||o.addEventListener("click",(()=>{e.close();let a="https://github.com/apps/picx-app/installations/select_target";ye.id&&(a="https://github.com/apps/picx-app/installations/new/permissions?target_id="+ye.id),window.location.href=a}))}})(t,s,i),!t)return o.close(),void(s&&i||a.error({message:K.global.t("config.message3")}));ye.repoList=[{value:E,label:E}],ye.selectedRepo=E,ye.branchList=[{value:ee,label:ee}],ye.selectedBranch=ee,ye.branchMode=ae.repoBranch,ye.selectedDir=te("yyyyMMdd"),ye.dirMode=Q.autoDir,ye.dirList=[],await we(),await re(ye,!1),o.close(),a.success({message:K.global.t("config.message4")}),await W.push("/upload")}catch(n){a.error({message:K.global.t("config.message5")}),console.error("oneClickAutoConfig >> ",n)}},$e=e=>e.language===Z.en?"100rem":"70rem",xe=e=>e.elementPlusSize===J.large?"right":"top";const Ie={class:"page-container config-page-container"};var Le=P(t({__name:"my-config",setup(e){const t=O(),o=u(),p=w(!1),g=w(!1),y=w(!1),R=w(32),S=l((()=>t.getters.getUserConfigInfo)).value,E=l((()=>t.getters.getUserLoginStatus)).value,G=l((()=>t.getters.getUserSettings)).value,N=l((()=>!S.token||!S.owner)),P=l((()=>p.value||g.value||y.value)),j=w(null),q=w("repoDirCascaderKey"),X=w(null),Z=e=>{var a;switch(e){case Q.rootDir:S.selectedDir="/";break;case Q.autoDir:S.selectedDir=te("yyyyMMdd");break;case Q.newDir:S.selectedDir="xxx",null==(a=j.value)||a.focus();break;case Q.repoDir:S.dirList.length||(S.selectedDir="",S.selectedDirList=[]);break;default:S.selectedDir="/"}we()};async function J(){g.value=!0;const e=await oe(S);g.value=!1,e&&(S.dirList=e),await we()}async function K(){var e,l;if(!S.token)return void a.error({message:null==(e=null==o?void 0:o.proxy)?void 0:e.$t("config.message1")});N.value||(ye.selectedRepo="",ye.repoList=[],ye.selectedBranch="",ye.branchMode=ae.repoBranch,ye.branchList=[],ye.selectedDir="",ye.dirMode=Q.repoDir,ye.dirList=[]),p.value=!0;const n=await Y(S.token);n?(t.getters.getGitHubAuthorizationInfo.isAutoAuthorize||await t.dispatch("SET_GITHUB_AUTHORIZATION_INFO",{manualToken:S.token}),await _e(n),await async function(e){var t;const l=await se(e);p.value=!1,l?(S.repoList=l,await we()):a.error({message:null==(t=null==o?void 0:o.proxy)?void 0:t.$t("config.message9")})}(n.login)):a.error({message:null==(l=null==o?void 0:o.proxy)?void 0:l.$t("config.message11")})}function ie(e){S.branchList=[],S.dirList=[],t.dispatch("DIR_IMAGE_LOGOUT"),async function(e){y.value=!0;const{owner:a,dirMode:t}=S,l=await H(a,e);y.value=!1,l.length>0?(S.branchList=l.filter((e=>e.value!==ne)),S.selectedBranch=S.branchList[0].value,S.branchMode=ae.repoBranch,await J()):(S.selectedBranch=ee,S.branchMode=ae.newBranch,await re(S)),Z(t),await we()}(e),we()}async function de(e){S.selectedBranch=e,await J(),q.value=S.selectedBranch,S.selectedDir=S.dirList[0].value,S.selectedDirList=[S.selectedDir],await we()}return _((()=>E),(e=>{e||(p.value=!1,g.value=!1,y.value=!1)})),f((()=>{setTimeout((()=>{var e;S.token&&"1"!==W.currentRoute.value.query.focus||null==(e=X.value)||e.focus(),(()=>{const{token:e,isAutoAuthorize:a}=l((()=>t.getters.getGitHubAuthorizationInfo)).value;a&&e&&!F()&&W.currentRoute.value.query.auto&&De()})()}),100)})),(e,a)=>{const t=be,l=k,o=D,u=h,f=n,w=$,_=x,E=I,O=ce,H=L,F=T,W=le,J=C;return i(),s("div",Ie,[r(t,{style:{"margin-bottom":"20rem"}}),r(w,{"label-width":m($e)(m(G)),"label-position":m(xe)(m(G))},{default:c((()=>[r(o,{label:"Token"},{default:c((()=>[r(l,{ref_key:"tokenInputRef",ref:X,modelValue:m(S).token,"onUpdate:modelValue":a[0]||(a[0]=e=>m(S).token=e),clearable:"",autofocus:!m(S).token,type:"password","show-password":"",placeholder:e.$t("config.inputToken")},null,8,["modelValue","autofocus","placeholder"])])),_:1}),r(o,{class:"operation"},{default:c((()=>[r(f,{placement:"top",content:e.$t("config.manualConfiguration3")},{default:c((()=>[r(u,{disabled:P.value,plain:"",type:"info","native-type":"submit",onClick:a[1]||(a[1]=U((e=>K()),["prevent"]))},{default:c((()=>[v(b(N.value?e.$t("config.manualConfiguration1"):e.$t("config.manualConfiguration2")),1)])),_:1},8,["disabled"])])),_:1},8,["content"]),r(f,{placement:"top",content:e.$t("config.autoConfiguration3")},{default:c((()=>[r(u,{plain:"",disabled:P.value,type:"primary",onClick:U(m(De),["prevent"])},{default:c((()=>[v(b(N.value?e.$t("config.autoConfiguration1"):e.$t("config.autoConfiguration2")),1)])),_:1},8,["disabled","onClick"])])),_:1},8,["content"])])),_:1})])),_:1},8,["label-width","label-position"]),m(S).token&&m(S).owner?M((i(),B(w,{key:0,"label-width":m($e)(m(G)),"label-position":m(xe)(m(G)),"element-loading-text":e.$t("config.loading1")},{default:c((()=>[m(S).owner?(i(),B(o,{key:0,label:e.$t("config.username")},{default:c((()=>[r(l,{modelValue:m(S).owner,"onUpdate:modelValue":a[2]||(a[2]=e=>m(S).owner=e),readonly:""},null,8,["modelValue"])])),_:1},8,["label"])):z("",!0),m(S).email?(i(),B(o,{key:1,label:e.$t("config.email")},{default:c((()=>[r(l,{modelValue:m(S).email,"onUpdate:modelValue":a[3]||(a[3]=e=>m(S).email=e),readonly:""},null,8,["modelValue"])])),_:1},8,["label"])):z("",!0),m(S).repoList.length?(i(),B(o,{key:2,label:e.$t("config.selectRepo")},{default:c((()=>[r(E,{modelValue:m(S).selectedRepo,"onUpdate:modelValue":a[4]||(a[4]=e=>m(S).selectedRepo=e),filterable:!0,style:d({width:"calc(100% - "+R.value+"rem)"}),placeholder:e.$t("config.placeholder1"),onChange:ie},{default:c((()=>[(i(!0),s(V,null,A(m(S).repoList,((e,a)=>(i(),B(_,{key:a,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","style","placeholder"]),r(O,{"box-width":R.value,"data-type":"repo"},null,8,["box-width"])])),_:1},8,["label"])):z("",!0)])),_:1},8,["label-width","label-position","element-loading-text"])),[[J,p.value]]):z("",!0),m(S).token&&m(S).selectedRepo&&m(S).branchList.length?M((i(),B(w,{key:1,"label-width":m($e)(m(G)),"label-position":m(xe)(m(G)),"element-loading-text":e.$t("config.loading2")},{default:c((()=>[m(S).branchList.length&&m(S).branchMode===m(ae).repoBranch?(i(),B(o,{key:0,label:e.$t("config.selectBranch")},{default:c((()=>[r(E,{modelValue:m(S).selectedBranch,"onUpdate:modelValue":a[5]||(a[5]=e=>m(S).selectedBranch=e),filterable:!0,style:d({width:"calc(100% - "+R.value+"rem)"}),placeholder:e.$t("config.placeholder2"),onChange:de},{default:c((()=>[(i(!0),s(V,null,A(m(S).branchList,((e,a)=>(i(),B(_,{key:a,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","style","placeholder"]),r(O,{"box-width":R.value,"data-type":"branch"},null,8,["box-width"])])),_:1},8,["label"])):z("",!0)])),_:1},8,["label-width","label-position","element-loading-text"])),[[J,y.value]]):z("",!0),m(S).token&&m(S).selectedBranch?M((i(),B(w,{key:2,"label-width":m($e)(m(G)),"label-position":m(xe)(m(G)),"element-loading-text":e.$t("config.loading5")},{default:c((()=>[m(S).selectedBranch?(i(),B(o,{key:0,label:e.$t("config.dirMode")},{default:c((()=>[r(F,{modelValue:m(S).dirMode,"onUpdate:modelValue":a[6]||(a[6]=e=>m(S).dirMode=e),onChange:Z},{default:c((()=>[r(f,{content:e.$t("config.inputNewDir"),placement:"top",offset:-1},{default:c((()=>[r(H,{label:"newDir"},{default:c((()=>[v(b(e.$t("config.createNewDir")),1)])),_:1})])),_:1},8,["content"]),r(f,{content:e.$t("config.rootDir2",{branch:m(S).selectedBranch}),placement:"top",offset:-1},{default:c((()=>[r(H,{label:"rootDir"},{default:c((()=>[v(b(e.$t("config.rootDir")),1)])),_:1})])),_:1},8,["content"]),r(f,{content:e.$t("config.autoDir2"),placement:"top",offset:-1},{default:c((()=>[r(H,{label:"autoDir"},{default:c((()=>[v(b(e.$t("config.autoDir")),1)])),_:1})])),_:1},8,["content"]),m(S).dirList.length&&"newBranch"!==m(S).branchMode?(i(),B(f,{key:0,content:e.$t("config.repoDir2",{branch:m(S).selectedBranch}),placement:"top",offset:-1},{default:c((()=>[r(H,{label:"repoDir"},{default:c((()=>[v(b(e.$t("config.repoDir",{repo:m(S).selectedRepo})),1)])),_:1})])),_:1},8,["content"])):z("",!0)])),_:1},8,["modelValue"])])),_:1},8,["label"])):z("",!0),"autoDir"===m(S).dirMode?(i(),B(o,{key:1,label:e.$t("config.autoDir")},{default:c((()=>[r(l,{modelValue:m(S).selectedDir,"onUpdate:modelValue":a[7]||(a[7]=e=>m(S).selectedDir=e),readonly:""},null,8,["modelValue"])])),_:1},8,["label"])):z("",!0),"rootDir"===m(S).dirMode?(i(),B(o,{key:2,label:e.$t("config.rootDir")},{default:c((()=>[r(l,{modelValue:m(S).selectedDir,"onUpdate:modelValue":a[8]||(a[8]=e=>m(S).selectedDir=e),readonly:""},null,8,["modelValue"])])),_:1},8,["label"])):z("",!0),"newDir"===m(S).dirMode?(i(),B(o,{key:3,label:e.$t("config.createNewDir")},{default:c((()=>[r(l,{ref_key:"newDirInputRef",ref:j,modelValue:m(S).selectedDir,"onUpdate:modelValue":a[9]||(a[9]=e=>m(S).selectedDir=e),onInput:a[10]||(a[10]=e=>m(we)()),clearable:"",placeholder:e.$t("config.placeholder4")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])):z("",!0),m(S).dirList.length&&"repoDir"===m(S).dirMode&&"newBranch"!==m(S).branchMode?(i(),B(o,{key:4,label:e.$t("config.selectDir")},{default:c((()=>[r(W,{"el-key":q.value,"el-size":m(G).elementPlusSize},null,8,["el-key","el-size"])])),_:1},8,["label"])):z("",!0)])),_:1},8,["label-width","label-position","element-loading-text"])),[[J,g.value]]):z("",!0),m(S).token?(i(),B(w,{key:3,"label-width":m($e)(m(G)),"label-position":m(xe)(m(G))},{default:c((()=>[r(o,{class:"operation"},{default:c((()=>[m(S).owner?(i(),B(u,{key:0,plain:"",disabled:P.value,type:"warning",onClick:a[11]||(a[11]=e=>m(ve)())},{default:c((()=>[v(b(e.$t("reset")),1)])),_:1},8,["disabled"])):z("",!0),m(S).selectedRepo?(i(),B(u,{key:1,plain:"",disabled:P.value,type:"primary",onClick:m(ke)},{default:c((()=>[v(b(e.$t("confirm")),1)])),_:1},8,["disabled","onClick"])):z("",!0)])),_:1})])),_:1},8,["label-width","label-position"])):z("",!0)])}}}),[["__scopeId","data-v-16673559"]]);export{Le as default};