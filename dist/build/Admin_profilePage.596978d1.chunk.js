"use strict";(self.webpackChunksmarthomedoctor_strapi=self.webpackChunksmarthomedoctor_strapi||[]).push([[9497],{50166:(j,E,t)=>{t.r(E),t.d(E,{default:()=>le});var e=t(67294),o=t(71893),r=t(68547),H=t(97132),S=t(80831),U=t(11700),L=t.n(U),v=t(23724),A=t(78718),f=t.n(A),m=t(15482),p=t(185),w=t(75515),P=t(41580),D=t(67838),N=t(49066),X=t(29728),y=t(11276),c=t(74571),g=t(7681),Y=t(14087),B=t(91216),G=t(82562),$=t(25752),V=t(16364),T=t(8934),x=t(94123),J=t(85018),k=t(50592),q=t(48474),_=t(57557),ee=t.n(_),O=t(23998);const te=async()=>{const{data:i}=await O.be.get("/admin/users/me");return i.data},ae=async i=>{const b=ee()(i,["confirmPassword","currentTheme"]),{data:h}=await O.be.put("/admin/users/me",b);return{...h.data,currentTheme:i.currentTheme}};var se=t(53209),ne=t(17405);const re=se.Ry().shape(ne.Rw);var K=t(38683);const oe=o.default.a`
  color: ${({theme:i})=>i.colors.primary600};
`,C=(0,o.default)(V.o)`
  ::-ms-reveal {
    display: none;
  }
`,I=(0,o.default)($.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:i})=>i.colors.neutral600};
    }
  }
`,le=()=>{const[i,b]=(0,e.useState)(!1),[h,ie]=(0,e.useState)(!1),[Z,de]=(0,e.useState)(!1),{changeLocale:ce,localeNames:z}=(0,k.Z)(),{setUserDisplayName:me}=(0,r.useAppInfos)(),ue=(0,v.useQueryClient)(),{formatMessage:a}=(0,H.useIntl)(),{trackUsage:fe}=(0,r.useTracking)(),R=(0,r.useNotification)(),{lockApp:pe,unlockApp:ge}=(0,r.useOverlayBlocker)(),{notifyStatus:he}=(0,Y.G)(),{currentTheme:Ee,themes:W,onChangeTheme:ve}=(0,q.M1)();(0,r.useFocusWhenNavigate)();const{status:we,data:M}=(0,v.useQuery)("user",()=>te(),{onSuccess(){he(a({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){R({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Pe=we!=="success",Q=(0,v.useMutation)(s=>ae(s),{async onSuccess(s){await ue.invalidateQueries("user"),r.auth.setUserInfo(f()(s,["email","firstname","lastname","username","preferedLanguage"]));const l=s.username||(0,K.Pp)(s.firstname,s.lastname);me(l),ce(s.preferedLanguage),ve(s.currentTheme),fe("didChangeMode",{newMode:s.currentTheme}),R({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},onSettled(){ge()},refetchActive:!0}),{isLoading:ye}=Q,Me=async(s,{setErrors:l})=>{pe();const d=s.username||null;Q.mutate({...s,username:d},{onError(F){const n=F?.response?.data;return n?.data?l(n.data):R({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Se=["currentTheme","email","firstname","lastname","username","preferedLanguage"],Le=f()({...M,currentTheme:Ee},Se);if(Pe)return e.createElement(p.o,{"aria-busy":"true"},e.createElement(m.Helmet,{title:a({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(D.T,{title:a({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(N.D,null,e.createElement(r.LoadingIndicatorPage,null)));const Ae=Object.keys(W).filter(s=>W[s]);return e.createElement(p.o,{"aria-busy":ye},e.createElement(m.Helmet,{title:a({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(S.Formik,{onSubmit:Me,initialValues:Le,validateOnChange:!1,validationSchema:re,enableReinitialize:!0},({errors:s,values:l,handleChange:d,isSubmitting:F})=>e.createElement(r.Form,null,e.createElement(D.T,{title:M.username||(0,K.Pp)(M.firstname,M.lastname),primaryAction:e.createElement(X.z,{startIcon:e.createElement(J.Z,null),loading:F,type:"submit"},a({id:"global.save",defaultMessage:"Save"}))}),e.createElement(P.x,{paddingBottom:10},e.createElement(N.D,null,e.createElement(g.K,{spacing:6},e.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.K,{spacing:4},e.createElement(w.Z,{variant:"delta",as:"h2"},a({id:"global.profile",defaultMessage:"Profile"})),e.createElement(y.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(r.GenericInput,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:s.firstname,onChange:d,value:l.firstname||"",type:"text",name:"firstname",required:!0})),e.createElement(c.P,{s:12,col:6},e.createElement(r.GenericInput,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:s.lastname,onChange:d,value:l.lastname||"",type:"text",name:"lastname"})),e.createElement(c.P,{s:12,col:6},e.createElement(r.GenericInput,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:s.email,onChange:d,value:l.email||"",type:"email",name:"email",required:!0})),e.createElement(c.P,{s:12,col:6},e.createElement(r.GenericInput,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:s.username,onChange:d,value:l.username||"",type:"text",name:"username"}))))),e.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.K,{spacing:4},e.createElement(w.Z,{variant:"delta",as:"h2"},a({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(y.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(C,{error:s.currentPassword?a({id:s.currentPassword,defaultMessage:s.currentPassword}):"",onChange:d,value:l.currentPassword||"",label:a({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:Z?"text":"password",endAction:e.createElement(I,{onClick:n=>{n.stopPropagation(),de(u=>!u)},label:a(Z?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},Z?e.createElement(T.default,null):e.createElement(x.default,null))}))),e.createElement(y.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(C,{error:s.password?a({id:s.password,defaultMessage:s.password}):"",onChange:d,value:l.password||"",label:a({id:"global.password",defaultMessage:"Password"}),name:"password",type:i?"text":"password",autoComplete:"new-password",endAction:e.createElement(I,{onClick:n=>{n.stopPropagation(),b(u=>!u)},label:a(i?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},i?e.createElement(T.default,null):e.createElement(x.default,null))})),e.createElement(c.P,{s:12,col:6},e.createElement(C,{error:s.confirmPassword?a({id:s.confirmPassword,defaultMessage:s.confirmPassword}):"",onChange:d,value:l.confirmPassword||"",label:a({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:h?"text":"password",autoComplete:"new-password",endAction:e.createElement(I,{onClick:n=>{n.stopPropagation(),ie(u=>!u)},label:a(h?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},h?e.createElement(T.default,null):e.createElement(x.default,null))}))))),e.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.K,{spacing:4},e.createElement(g.K,{spacing:1},e.createElement(w.Z,{variant:"delta",as:"h2"},a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(w.Z,null,a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(oe,{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"}))}))),e.createElement(y.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(B.P,{label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:a({id:"global.select",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{d({target:{name:"preferedLanguage",value:null}})},clearLabel:a({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:l.preferedLanguage,onChange:n=>{d({target:{name:"preferedLanguage",value:n}})}},Object.keys(z).map(n=>{const u=z[n];return e.createElement(G.W,{value:n,key:n},u)}))),e.createElement(c.P,{s:12,col:6},e.createElement(B.P,{label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:l.currentTheme,onChange:n=>{d({target:{name:"currentTheme",value:n}})}},Ae.map(n=>e.createElement(G.W,{value:n,key:n},a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:n,defaultMessage:L()(n)})}))))))))))))))}},17405:(j,E,t)=>{t.d(E,{YM:()=>A,Rw:()=>S});var e=t(53209),o=t(68547);const r={firstname:e.Z_().trim().required(o.translatedErrors.required),lastname:e.Z_(),email:e.Z_().email(o.translatedErrors.email).lowercase().required(o.translatedErrors.required),username:e.Z_().nullable(),password:e.Z_().min(8,o.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,o.translatedErrors.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(f,m)=>f?m.required(o.translatedErrors.required):m)},S={...r,currentPassword:e.Z_().when(["password","confirmPassword"],(f,m,p)=>f||m?p.required(o.translatedErrors.required):p),preferedLanguage:e.Z_().nullable()},L={roles:e.IX().min(1,o.translatedErrors.required).required(o.translatedErrors.required)},A=e.Ry().shape({...r,isActive:e.Xg(),...L})}}]);
