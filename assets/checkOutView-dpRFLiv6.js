import{q as T,g as f,o as U,r as _,a as r,c,e,F as A,k as E,t as i,b as o,w as g,x as p,l as S,v as R,d as $}from"./index-Jhb1N8Ck.js";import{a as V}from"./axios-L6U4YIEh.js";import{S as j}from"./sweetAlertStore-WHtX4ur7.js";import"./sweetalert2.all-wcduGZfU.js";var q={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HwAsk/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const M={class:"container"},N=e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-10"},[e("h3",{class:"fw-bold mb-4 pt-3"},"結帳頁面")])],-1),C={class:"row flex-row-reverse justify-content-center pb-5"},D={key:0,class:"col-md-4"},H={class:"border p-4 mb-4"},O=["src"],B={class:"w-100 mb-2"},L={class:"d-flex justify-content-between"},F={class:"mb-0 fw-bold"},z={class:"mb-0"},W={class:"mb-0 fw-bold"},G={class:"table mt-4 border-top border-bottom text-muted"},I=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),J={class:"text-end border-0 px-0 pt-4"},K=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款方式"),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),Q={class:"d-flex justify-content-between mt-4"},X=e("p",{class:"mb-0 h4 fw-bold"},"總計",-1),Y={class:"mb-0 h4 fw-bold"},Z={key:1,class:"col-md-4"},ee=e("h2",null,"再去選購一些商品吧！",-1),se=[ee],te={class:"col-md-6"},le={class:"mb-3"},oe=e("label",{for:"email",class:"form-label"},"電子郵件",-1),ae={class:"mb-3"},ne=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),de={class:"mb-3"},re=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),ce={class:"mb-3"},ie=e("label",{for:"address",class:"form-label"},"收件人地址",-1),me={class:"mb-3"},ue=e("label",{for:"message",class:"form-label"},"留言",-1),_e={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"},pe=e("i",{class:"fas fa-chevron-left me-2"},null,-1),we={__name:"checkOutView",setup(fe){const y=T(),n=f({}),{VITE_APP_URL:v,VITE_APP_PATH:h}=q,b=f(null),t=f({user:{name:"",email:"",tel:"",address:""},message:""}),x=()=>{if(n.value.carts.length===0)alert("購物車內沒有品項");else{const m=`${v}/api/${h}/order`,s=t.value;V.post(m,{data:s}).then(d=>{j.showSuccessMsg("結帳成功!"),b.value.resetForm(),w(),y.push("/checkOutSuccess")}).catch(d=>{alert(d.response.data.message)})}},w=()=>{const m=`${v}/api/${h}/cart`;V.get(m).then(s=>{n.value=s.data.data}).catch(s=>{alert(s.response.data.message)})};return U(()=>{w()}),(m,s)=>{const d=_("v-field"),u=_("error-message"),k=_("v-form"),P=_("router-link");return r(),c("div",M,[N,e("div",C,[n.value.carts&&n.value.carts.length!==0?(r(),c("div",D,[e("div",H,[(r(!0),c(A,null,E(n.value.carts,l=>(r(),c("div",{class:"d-flex mt-2",key:l.id},[e("img",{src:l.product.imageUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,O),e("div",B,[e("div",L,[e("p",F,i(l.product.title),1),e("p",z,"NT$"+i(l.product.price),1)]),e("p",W,"x"+i(l.qty),1)])]))),128)),e("table",G,[e("tbody",null,[e("tr",null,[I,e("td",J,"NT$"+i(Math.floor(n.value.final_total)),1)]),K])]),e("div",Q,[X,e("p",Y,"NT$"+i(Math.floor(n.value.final_total)),1)])])])):(r(),c("div",Z,se)),e("div",te,[o(k,{ref_key:"formRef",ref:b,onSubmit:x},{default:g(({errors:l})=>[e("div",le,[oe,o(d,{id:"email",name:"email",type:"email",class:p(["form-control",{"is-invalid":l.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:t.value.user.email,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value.user.email=a)},null,8,["class","modelValue"]),o(u,{name:"email",class:"invalid-feedback"})]),e("div",ae,[ne,o(d,{id:"name",name:"姓名",type:"text",class:p(["form-control",{"is-invalid":l.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.value.user.name,"onUpdate:modelValue":s[1]||(s[1]=a=>t.value.user.name=a)},null,8,["class","modelValue"]),o(u,{name:"姓名",class:"invalid-feedback"})]),e("div",de,[re,o(d,{id:"tel",name:"電話",type:"text",class:p(["form-control",{"is-invalid":l.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:t.value.user.tel,"onUpdate:modelValue":s[2]||(s[2]=a=>t.value.user.tel=a)},null,8,["class","modelValue"]),o(u,{name:"電話",class:"invalid-feedback"})]),e("div",ce,[ie,o(d,{id:"address",name:"地址",type:"text",class:p(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.value.user.address,"onUpdate:modelValue":s[3]||(s[3]=a=>t.value.user.address=a)},null,8,["class","modelValue"]),o(u,{name:"地址",class:"invalid-feedback"})]),e("div",me,[ue,S(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=a=>t.value.message=a)},null,512),[[R,t.value.message]])])]),_:1},512),e("div",_e,[o(P,{to:"/cart",class:"text-dark mt-md-0 mt-3"},{default:g(()=>[pe,$("回到購物車")]),_:1}),e("button",{type:"submit",class:"btn btn-danger",onClick:x},"送出訂單")])])])])}}};export{we as default};
