import{a as V}from"./axios-L6U4YIEh.js";import{S as D}from"./sweetalert2.all-4VIO0fb_.js";import{h as r,i as P,a as _,c as m,b as e,n as g,v as k,q as E,t as w,r as L,d as x,F as U,j as S}from"./index-H8y83fy8.js";import{u as B}from"./useModal-uQvfG1Bg.js";import{_ as I}from"./DelModal-Lp6DiD58.js";import{_ as N}from"./PaginationComponent-TnWkGGfA.js";const O={class:"modal-dialog",role:"document"},H={class:"modal-content"},j={class:"modal-header"},F={class:"modal-title",id:"exampleModalLabel"},q={key:0},z={key:1},W=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},J={class:"mb-3"},K=e("label",{for:"title"},"標題",-1),Q={class:"mb-3"},X=e("label",{for:"coupon_code"},"優惠碼",-1),Y={class:"mb-3"},Z=e("label",{for:"due_date"},"到期日",-1),ee={class:"mb-3"},te=e("label",{for:"price"},"折扣百分比",-1),oe={class:"mb-3"},le={class:"form-check"},se=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),ae={class:"modal-footer"},ne=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),de={__name:"CouponModal",props:{coupon:Object,isNew:Boolean},emits:["update-coupon"],setup($,{expose:v,emit:b}){const{openModal:h,hideModal:y,modalRef:p}=B(),f=$,s=b,o=r({}),u=r("");return P(()=>f.coupon,c=>{o.value=c;const t=new Date(o.value.due_date*1e3).toISOString().split("T");[u.value]=t}),P(()=>u.value,c=>{o.value.due_date=Math.floor(new Date(c)/1e3)}),v({openModal:h,hideModal:y}),(c,t)=>(_(),m("div",{class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"modalRef",ref:p},[e("div",O,[e("div",H,[e("div",j,[e("h5",F,[$.isNew?(_(),m("span",q,"新增優惠卷")):(_(),m("span",z,"編輯優惠卷"))]),W]),e("div",G,[e("div",J,[K,g(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=a=>o.value.title=a),placeholder:"請輸入標題"},null,512),[[k,o.value.title]])]),e("div",Q,[X,g(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=a=>o.value.code=a),placeholder:"請輸入優惠碼"},null,512),[[k,o.value.code]])]),e("div",Y,[Z,g(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=a=>u.value=a)},null,512),[[k,u.value]])]),e("div",ee,[te,g(e("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":t[3]||(t[3]=a=>o.value.percent=a),placeholder:"請輸入折扣百分比"},null,512),[[k,o.value.percent,void 0,{number:!0}]])]),e("div",oe,[e("div",le,[g(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=a=>o.value.is_enabled=a),id:"is_enabled"},null,512),[[E,o.value.is_enabled]]),se])])]),e("div",ae,[ne,e("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=a=>s("update-coupon",o.value))},w($.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512))}};var ie={VITE_APP_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_PATH:"aca101139",BASE_URL:"/HexVueW8HwAsk/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ue={class:"text-end mt-4"},ce={class:"table mt-4"},re=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),pe={key:0,class:"text-success"},_e={key:1,class:"text-muted"},me={class:"btn-group"},ve=["onClick"],fe=["onClick"],Me={__name:"AdminCoupons",props:{config:Object},setup($){const v=D.mixin({toast:!0,position:"center",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:1500,timerProgressBar:!0}),b=r(null),h=r(null),y=r({}),p=r({title:"",is_enabled:0,percent:100,code:""}),f=r(!1),s=r(!1),o=r({}),{VITE_APP_URL:u,VITE_APP_PATH:c}=ie,t=(l,n)=>{f.value=l,f.value?p.value={due_date:new Date().getTime()/1e3}:p.value={...n},b.value.openModal()},a=l=>{p.value={...l},h.value.openModal()},C=(l=1)=>{const n=`${u}/api/${c}/admin/coupons?page=${l}`;s.value=!0,V.get(n).then(d=>{y.value=d.data.coupons,o.value=d.data.pagination,s.value=!1}).catch(d=>{s.value=!1,v.fire({icon:"warning",title:d.response.data.message})})},R=l=>{s.value=!0;let n=`${u}/api/${c}/admin/coupon`,d="post",i=l;f.value||(n=`${u}/api/${c}/admin/coupon/${l.id}`,d="put",i=l),V[d](n,{data:i}).then(M=>{s.value=!1,v.fire({icon:"success",title:"新增優惠券成功"}),C(),b.value.hideModal()}).catch(M=>{s.value=!1,v.fire({icon:"warning",title:M.response.data.message})})},T=()=>{const l=`${u}/api/${c}/admin/coupon/${p.value.id}`;s.value=!0,V.delete(l).then(n=>{s.value=!1,v.fire({icon:"success",title:"刪除優惠券成功"}),h.value.hideModal(),C()}).catch(n=>{s.value=!1,v.fire({icon:"warning",title:n.response.data.message})})};return C(),(l,n)=>{const d=L("VueLoading");return _(),m("div",null,[x(d,{active:s.value,"z-index":1060},null,8,["active"]),e("div",ue,[e("button",{class:"btn btn-primary",type:"button",onClick:n[0]||(n[0]=i=>t(!0))}," 建立新的優惠券 ")]),e("table",ce,[re,e("tbody",null,[(_(!0),m(U,null,S(y.value,(i,M)=>(_(),m("tr",{key:M},[e("td",null,w(i.title),1),e("td",null,w(i.percent)+"%",1),e("td",null,w(l.$filters.date(i.due_date)),1),e("td",null,[i.is_enabled===1?(_(),m("span",pe,"啟用")):(_(),m("span",_e,"未啟用"))]),e("td",null,[e("div",me,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:A=>t(!1,i)},"編輯",8,ve),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:A=>a(i)},"刪除",8,fe)])])]))),128))])]),x(N,{pages:o.value,onEmitPages:C},null,8,["pages"]),x(de,{coupon:p.value,"is-new":f.value,ref_key:"couponModalRef",ref:b,onUpdateCoupon:R},null,8,["coupon","is-new"]),x(I,{item:p.value,ref_key:"delModalRef",ref:h,onDelItem:T},null,8,["item"])])}}};export{Me as default};
