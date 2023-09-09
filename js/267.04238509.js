"use strict";(globalThis["webpackChunkmonbarar"]=globalThis["webpackChunkmonbarar"]||[]).push([[267],{5267:(e,l,t)=>{t.r(l),t.d(l,{default:()=>F});t(9665);var o=t(9835),s=t(499),a=t(1957),i=t(6970),n=t(6330),u=t(164),d=t(705),c=t(8339);const r={class:"row"},m={class:"col-4"},b={class:"col row justify-center"},p={class:"col-10"},v={class:"row justify-end q-py-xl q-mb-md"},y={class:"text-semi text-subtitle1"},g={class:"column items-center"},x={class:"col"},h={key:0,class:""},_=(0,o._)("div",{class:"text-h2 text-center text-bold"},"Login",-1),S=(0,o._)("div",{class:"text-body1 text-grey-8 q-my-xl"}," Enter your email in the field below to reset your password. Monbarra will send you an email with instructions to reset your password. ",-1),w={class:"col q-mt-md q-mx-none column"},U=(0,o._)("label",{class:"q-mt-lg q-mb-sm",for:"calendar"}," Phone Number ",-1),f=(0,o._)("u",null,"Try using email",-1),q={class:"row q-my-lg q-ml-none justify-center"},M={key:1,class:""},k=(0,o._)("div",{class:"text-h4 text-center text-bold"},"OTP CODE",-1),V=(0,o._)("div",{class:"text-body1 text-grey-8 q-my-xl"}," Please check your email again, Monbarra has sent the OTP code for you. please don't give it to anyone! ",-1),W={class:"row justify-center"},C={class:"q-my-xl"},O={class:"row justify-center q-my-xl"},R={__name:"FormAuthLoginOtp",setup(e){const l=(0,c.tv)(),t=(0,s.iH)(null);console.log("results",t.value);let R=(0,s.iH)(!1);const T=e=>{Z.value.bindModal=e,console.log("OTP completed: ",Z.value.bindModal)};let Z=(0,s.iH)({}),j=e=>{console.log("sublit"),t.value?.isValid&&(R.value=!R.value)},P=e=>{console.log("onReset")},D=()=>{console.log("onSubmitOtp"),l.push("/home")},z=()=>{console.log("onResetOtp")};return(e,l)=>{const c=(0,o.up)("q-img"),F=(0,o.up)("q-btn"),H=(0,o.up)("q-form");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",m,[(0,o.Wm)(c,{src:"img/vecteur-1.svg",style:{height:"100vh"},position:"40% 100%"})]),(0,o._)("div",b,[(0,o._)("div",p,[(0,o._)("div",v,[(0,o._)("span",y,[(0,o.Uk)(" Already have an acount? "),(0,o.Wm)(F,{flat:"",color:"primary","no-caps":"",label:"Sign Up",to:"/sign-up",class:"no-padding"})])]),(0,o._)("div",g,[(0,o._)("div",x,[(0,s.SU)(R)?((0,o.wg)(),(0,o.iD)("div",M,[k,V,(0,o._)("div",W,[(0,o.Wm)(H,{onSubmit:(0,s.SU)(D),onReset:(0,s.SU)(z),class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o._)("div",C,[(0,o.Wm)((0,s.SU)(u.Z),{ref:"otpInput",value:(0,s.SU)(Z).bindModal,"onUpdate:value":l[2]||(l[2]=e=>(0,s.SU)(Z).bindModal=e),"input-classes":"otp-input",separator:"-","num-inputs":4,"should-auto-focus":!0,"input-type":"tel",conditionalClass:["one","two","three","four"],placeholder:["-","-","-","-"],onOnComplete:T},null,8,["value"])]),(0,o._)("div",O,[(0,o.Wm)(F,{label:"submit","no-caps":"",size:"lg",type:"submit",unelevated:"",disable:!(0,s.SU)(Z).bindModal,color:(0,s.SU)(Z).bindModal&&void 0!==(0,s.SU)(Z).bindModal?"primary":"blue-grey-2",class:(0,i.C_)((0,s.SU)(Z).bindModal&&void 0!==(0,s.SU)(Z).bindModal?"text-bold text-subtitle1 col-3":"text-bold text-subtitle1 text-black col-3"),style:{"border-radius":"10px"}},null,8,["disable","color","class"])])])),_:1},8,["onSubmit","onReset"])])])):((0,o.wg)(),(0,o.iD)("div",h,[_,S,(0,o.Wm)(H,{onSubmit:(0,a.iM)((0,s.SU)(j),["prevent"]),onReset:(0,s.SU)(P),class:"q-gutter-md text-bold text-subtitle1",ref:"myForm"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("div",w,[U,(0,o.Wm)((0,s.SU)(n.Z),{modelValue:(0,s.SU)(Z).phoneNumber,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,s.SU)(Z).phoneNumber=e),"show-code-on-list":"",color:"primary","default-country-code":"CI",onUpdate:l[1]||(l[1]=e=>t.value=e),success:t.value?.isValid},null,8,["modelValue","success"])]),(0,o.Wm)(F,{color:"primary",to:"/sign-in",size:"",class:"no-margin no-padding",flat:"",ripple:!1,"no-caps":""},{default:(0,o.w5)((()=>[f])),_:1}),(0,o._)("div",q,[(0,o.Wm)(F,{label:"submit","no-caps":"",size:"lg",type:"submit",unelevated:"",disable:!t.value?.isValid,color:t.value?.isValid&&void 0!==t.value?.isValid?"primary":"blue-grey-2",class:(0,i.C_)(t.value?.isValid&&void 0!==t.value?.isValid?"text-bold text-subtitle1 col-3":"text-bold text-subtitle1 text-black col-3"),style:{"border-radius":"10px"}},null,8,["disable","color","class"])]),(0,o.Wm)(d.Z)])])),_:1},8,["onSubmit","onReset"])]))])])])])])}}};var T=t(335),Z=t(8879),j=t(8326),P=t(9984),D=t.n(P);const z=R,F=z;D()(R,"components",{QImg:T.Z,QBtn:Z.Z,QForm:j.Z})}}]);