"use strict";(self.webpackChunksmarthomedoctor_strapi=self.webpackChunksmarthomedoctor_strapi||[]).push([[9460],{98352:(T,f,t)=>{t.r(f),t.d(f,{default:()=>H});var e=t(67294),d=t(23724),s=t(97132),c=t(80831),i=t(68547),v=t(14087),l=t(185),O=t(67838),h=t(49066),b=t(29728),y=t(41580),M=t(7681),E=t(91216),n=t(82562),r=t(75515),u=t(11276),o=t(74571),m=t(85018),A=t(81912),a=t(89031);const S=[{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,a.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,a.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,a.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var B=t(53209);const D=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),Z=B.Ry().shape({email_confirmation_redirection:B.nK().when("email_confirmation",{is:!0,then:B.Z_().matches(D).required(),otherwise:B.Z_().nullable()}),email_reset_password:B.Z_(i.translatedErrors.string).matches(D,i.translatedErrors.regex).nullable()}),z=async()=>{const{data:g}=await a.be.get((0,a.Gc)("advanced"));return g},W=g=>a.be.put((0,a.Gc)("advanced"),g),K=()=>e.createElement(i.CheckPagePermissions,{permissions:A.Z.readAdvancedSettings},e.createElement(N,null)),N=()=>{const{formatMessage:g}=(0,s.useIntl)(),x=(0,i.useNotification)(),{lockApp:j,unlockApp:F}=(0,i.useOverlayBlocker)(),{notifyStatus:G}=(0,v.G)(),$=(0,d.useQueryClient)();(0,i.useFocusWhenNavigate)();const Q=(0,e.useMemo)(()=>({update:A.Z.updateAdvancedSettings}),[]),{isLoading:V,allowedActions:{canUpdate:X}}=(0,i.useRBAC)(Q),{status:Y,data:I}=(0,d.useQuery)("advanced",()=>z(),{onSuccess(){G(g({id:(0,a.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){x({type:"warning",message:{id:(0,a.OB)("notification.error"),defaultMessage:"An error occured"}})}}),k=V||Y!=="success",w=(0,d.useMutation)(R=>W(R),{async onSuccess(){await $.invalidateQueries("advanced"),x({type:"success",message:{id:(0,a.OB)("notification.success.saved"),defaultMessage:"Saved"}}),F()},onError(){x({type:"warning",message:{id:(0,a.OB)("notification.error"),defaultMessage:"An error occured"}}),F()},refetchActive:!0}),{isLoading:J}=w,q=async R=>{j();const L=R.email_confirmation?R.email_confirmation_redirection:"";await w.mutateAsync({...R,email_confirmation_redirection:L})};return k?e.createElement(l.o,{"aria-busy":"true"},e.createElement(i.SettingsPageTitle,{name:g({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(O.T,{title:g({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(h.D,null,e.createElement(i.LoadingIndicatorPage,null))):e.createElement(l.o,{"aria-busy":J},e.createElement(i.SettingsPageTitle,{name:g({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(c.Formik,{onSubmit:q,initialValues:I.settings,validateOnChange:!1,validationSchema:Z,enableReinitialize:!0},({errors:R,values:L,handleChange:U,isSubmitting:_})=>e.createElement(i.Form,null,e.createElement(O.T,{title:g({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(b.z,{loading:_,type:"submit",disabled:!X,startIcon:e.createElement(m.Z,null),size:"S"},g({id:"global.save",defaultMessage:"Save"}))}),e.createElement(h.D,null,e.createElement(y.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(M.K,{spacing:4},e.createElement(r.Z,{variant:"delta",as:"h2"},g({id:"global.settings",defaultMessage:"Settings"})),e.createElement(u.r,{gap:6},e.createElement(o.P,{col:6,s:12},e.createElement(E.P,{label:g({id:(0,a.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:L.default_role,hint:g({id:(0,a.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:p=>U({target:{name:"default_role",value:p}})},I.roles.map(p=>e.createElement(n.W,{key:p.type,value:p.type},p.name)))),S.map(p=>{let C=L[p.name];return C||(C=p.type==="bool"?!1:""),e.createElement(o.P,{key:p.name,...p.size},e.createElement(i.GenericInput,{...p,value:C,error:R[p.name],disabled:p.name==="email_confirmation_redirection"&&L.email_confirmation===!1,onChange:U}))}))))))))},H=K},46979:(T,f,t)=>{t.d(f,{Z:()=>v});var e=t(11817),d=t(68547),s=t.n(d);const c=e.Z.create({baseURL:""});c.interceptors.request.use(async l=>(l.headers={Authorization:`Bearer ${d.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},l),l=>{Promise.reject(l)}),c.interceptors.response.use(l=>l,l=>{throw l.response?.status===401&&(d.auth.clearAppStorage(),window.location.reload()),l});const v=(0,d.wrapAxiosInstance)(c)},89031:(T,f,t)=>{t.d(f,{be:()=>e.Z,YX:()=>c,Gc:()=>l,OB:()=>O.Z});var e=t(46979),d=t(96486);const c=h=>Object.keys(h).reduce((b,y)=>{const M=h[y].controllers,E=Object.keys(M).reduce((n,r)=>((0,d.isEmpty)(M[r])||(n[r]=M[r]),n),{});return(0,d.isEmpty)(E)||(b[y]={controllers:E}),b},{});var i=t(31498);const l=h=>`/${i.Z}/${h}`;var O=t(84757)},49066:(T,f,t)=>{t.d(f,{D:()=>c});var e=t(67294),d=t(45697),s=t(41580);const c=({children:i})=>e.createElement(s.x,{paddingLeft:10,paddingRight:10},i);c.propTypes={children:d.node.isRequired}},67838:(T,f,t)=>{t.d(f,{T:()=>y});var e=t(67294),d=t(71893),s=t(45697),c=t(75515),i=t(41580),v=t(11047);const l=n=>{const r=(0,e.useRef)(null),[u,o]=(0,e.useState)(!0),m=([A])=>{o(A.isIntersecting)};return(0,e.useEffect)(()=>{const A=r.current,a=new IntersectionObserver(m,n);return A&&a.observe(r.current),()=>{A&&a.disconnect()}},[r,n]),[r,u]};var O=t(98402);const h=(n,r)=>{const u=(0,O.useCallbackRef)(r);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(u);return Array.isArray(n)?n.forEach(m=>{m.current&&o.observe(m.current)}):n.current&&o.observe(n.current),()=>{o.disconnect()}},[n,u])},b=()=>{const n=(0,e.useRef)(null),[r,u]=(0,e.useState)(null),[o,m]=l({root:null,rootMargin:"0px",threshold:0});return h(o,()=>{o.current&&u(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&u(n.current.getBoundingClientRect())},[n]),{containerRef:o,isVisible:m,baseHeaderLayoutRef:n,headerSize:r}},y=n=>{const{containerRef:r,isVisible:u,baseHeaderLayoutRef:o,headerSize:m}=b();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:m?.height},ref:r},u&&e.createElement(E,{ref:o,...n})),!u&&e.createElement(E,{...n,sticky:!0,width:m?.width}))};y.displayName="HeaderLayout";const M=(0,d.default)(i.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${n=>n.width}px;
  z-index: 4;
  box-shadow: ${({theme:n})=>n.shadows.tableShadow};
`,E=e.forwardRef(({navigationAction:n,primaryAction:r,secondaryAction:u,subtitle:o,title:m,sticky:A,width:a,...P},S)=>{const B=typeof o=="string";return A?e.createElement(M,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:a,"data-strapi-header-sticky":!0},e.createElement(v.k,{justifyContent:"space-between"},e.createElement(v.k,null,n&&e.createElement(i.x,{paddingRight:3},n),e.createElement(i.x,null,e.createElement(c.Z,{variant:"beta",as:"h1",...P},m),B?e.createElement(c.Z,{variant:"pi",textColor:"neutral600"},o):o),u?e.createElement(i.x,{paddingLeft:4},u):null),e.createElement(v.k,null,r?e.createElement(i.x,{paddingLeft:2},r):void 0))):e.createElement(i.x,{ref:S,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0},n?e.createElement(i.x,{paddingBottom:2},n):null,e.createElement(v.k,{justifyContent:"space-between"},e.createElement(v.k,null,e.createElement(c.Z,{as:"h1",variant:"alpha",...P},m),u?e.createElement(i.x,{paddingLeft:4},u):null),r),B?e.createElement(c.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},o):o)});E.displayName="BaseHeaderLayout",E.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},E.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,sticky:s.bool,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired,width:s.number},y.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},y.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired}},185:(T,f,t)=>{t.d(f,{o:()=>i});var e=t(67294),d=t(45697),s=t(71893);const c=s.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,i=({labelledBy:v,...l})=>{const O=v||"main-content-title";return e.createElement(c,{"aria-labelledby":O,id:"main-content",tabIndex:-1,...l})};i.defaultProps={labelledBy:void 0},i.propTypes={labelledBy:d.string}}}]);
