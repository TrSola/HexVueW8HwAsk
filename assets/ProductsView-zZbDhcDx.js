/* empty css            */import{a as g}from"./axios-L6U4YIEh.js";import{_ as k}from"./PaginationComponent-3hVzbtnU.js";import{g as P,h as _,o as $,i as w,r as E,a as o,c as a,e as t,b as n,w as u,F as p,j as v,t as c,d as l}from"./index-_CDjE_z8.js";var T={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HwAsk/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const V=t("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"400px"}},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)","background-position":"center center",opacity:"0.1"}}),t("h2",{class:"fw-bold"},"挑選一些自己喜歡的商品吧！")],-1),A={class:"container mt-md-5 mt-3 mb-7"},R={class:"row"},O={class:"col-md-4"},j={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},D={class:"card border-0"},L=t("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[t("div",{class:"d-flex justify-content-between align-items-center pe-1"},[t("h4",{class:"mb-0"}," sideUl ")])],-1),B={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},H={class:"card-body py-0"},N={class:"list-unstyled"},U={class:"col-md-8"},I={key:0},S={key:1},q={class:"row"},M={class:"card border-0 mb-4 position-relative position-relative"},W=["src"],C=t("a",{href:"#",class:"text-dark"},null,-1),F={class:"card-body p-0"},z={class:"mb-0 mt-3"},J={class:"card-text mb-0"},Q={class:"text-muted"},G=t("p",{class:"text-muted mt-3"},null,-1),K={class:"d-flex justify-content-center"},X={class:"pagination"},ot={__name:"ProductsView",setup(Y){const h=P(),{VITE_APP_URL:f,VITE_APP_PATH:y}=T,i=_([]),m=_({}),x=_(["動物","食物"]),r=(d=1)=>{const{category:b=""}=h.query;g.get(`${f}/api/${y}/products?category=${b}&page=${d}`).then(s=>{i.value=s.data.products,m.value=s.data.pagination}).catch(s=>alert(s.response.data.message))};return $(()=>{const d=document.cookie.replace(/(?:(?:^|.*;\s*)WillyToken\s*=\s*([^;]*).*$)|^.*$/,"$1");g.defaults.headers.common.Authorization=d,r()}),w(()=>h.query,()=>{r()}),(d,b)=>{const s=E("RouterLink");return o(),a(p,null,[V,t("div",A,[t("div",R,[t("div",O,[t("div",j,[t("div",D,[L,t("div",B,[t("div",H,[t("ul",N,[t("li",null,[n(s,{to:"/products",class:"py-2 d-block text-muted"},{default:u(()=>[l("全部商品")]),_:1})]),(o(!0),a(p,null,v(x.value,e=>(o(),a("li",{key:"categories"+e},[n(s,{to:`/products?category=${e}`,class:"py-2 d-block text-muted"},{default:u(()=>[l(c(e),1)]),_:2},1032,["to"])]))),128))])])])])])]),t("div",U,[i.value.length?(o(),a("div",S,c(`此頁有 ${i.value.length} 項產品`),1)):(o(),a("div",I," 載入中 ")),t("div",q,[(o(!0),a(p,null,v(i.value,e=>(o(),a("div",{class:"col-md-6",key:e.id},[t("div",M,[t("img",{src:e.imageUrl,class:"card-img-top rounded-0 object-fit-cover",alt:"商品圖片",height:"500"},null,8,W),C,t("div",F,[t("h4",z,[n(s,{class:"mb-0 mt-3",to:`/product/${e.id}`},{default:u(()=>[l(c(e.title),1)]),_:2},1032,["to"])]),t("p",J,[l("NT$"+c(e.price)+" ",1),t("span",Q,[t("del",null,"NT$"+c(e.origin_price),1)])]),G])])]))),128))])]),t("nav",K,[t("ul",X,[n(k,{pages:m.value,onEmitPages:r},null,8,["pages"])])])])])],64)}}};export{ot as default};