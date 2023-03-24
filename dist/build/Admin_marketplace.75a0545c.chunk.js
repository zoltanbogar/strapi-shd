"use strict";(self.webpackChunksmarthomedoctor_strapi=self.webpackChunksmarthomedoctor_strapi||[]).push([[5516],{82679:(D,M,n)=>{n.r(M),n.d(M,{MarketPlacePage:()=>Pe,default:()=>Mt});var e=n(67294),f=n(97132),x=n(15482),j=n(63852),u=n(68547),N=n(17034),q=n(49066),A=n(185),Te=n(49123),g=n(41580),Se=n(14087),y=n(75515),k=n(11047),we=n(82777),L=n(60633),O=n(42761),X=n(45697),a=n.n(X),b=n(52624),Ie=n(86031),w=n(71893);const _=w.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:t})=>t.spaces[4]};
`;_.propTypes={children:X.node.isRequired};const Ne=(0,w.default)(g.x)`
  background: ${({theme:t})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${t.colors.neutral150} 100%)`};
  opacity: 0.33;
`,Be=()=>e.createElement(_,null,Array(12).fill(null).map((t,s)=>e.createElement(Ne,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),ee=({content:t})=>e.createElement(g.x,{position:"relative"},e.createElement(Be,null),e.createElement(g.x,{position:"absolute",top:11,width:"100%"},e.createElement(k.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(b.J,{as:Ie.default,color:"",width:"160px",height:"88px"}),e.createElement(g.x,{paddingTop:6},e.createElement(y.Z,{variant:"delta",as:"p",textColor:"neutral600"},t)))));ee.propTypes={content:a().string.isRequired};const te=ee;var De=n(67838),ae=n(80994),C=n(85893);function je(t){return(0,C.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,C.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 01-.14-.343L11.858.058a.2.2 0 01.282 0l9.513 9.4a.2.2 0 01-.14.343H13.57v8.47zM2.2 21.095a.2.2 0 00-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 00.2-.2v-2.424a.2.2 0 00-.2-.2H2.2z",fill:"#212134"})})}const z=({isOnline:t,npmPackageType:s})=>{const{formatMessage:i}=(0,f.useIntl)(),{trackUsage:r}=(0,u.useTracking)(),o=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(De.T,{title:i({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:i({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:t&&e.createElement(ae.Q,{startIcon:e.createElement(je,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>r(o),isExternal:!0},i({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},ne=z;z.defaultProps={npmPackageType:"plugin"},z.propTypes={isOnline:a().bool.isRequired,npmPackageType:a().string};var se=n(23724),ie=n(11817);const Ae="https://market-api.strapi.io",Le=async(t={})=>{const{data:s}=await ie.Z.get(`${Ae}/providers`,{params:t});return s},Oe=(t,s)=>{const i=(0,u.useNotification)();return(0,se.useQuery)(["list-marketplace-providers",s],()=>Le(s),{onSuccess(){t&&t()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},ze="https://market-api.strapi.io",Fe=async(t={})=>{const{data:s}=await ie.Z.get(`${ze}/plugins`,{params:t});return{...s,data:s.data.filter(r=>r.attributes.strapiCompatibility==="v4")}},Ze=(t,s)=>{const i=(0,u.useNotification)();return(0,se.useQuery)(["list-marketplace-plugins",s],()=>Fe(s),{onSuccess(){t&&t()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};var $e=n(87751);const Ve=n.p+"9d5d788027e86620c234.svg",He=()=>{const t=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,i]=(0,e.useState)(t),r=()=>i(!0),o=()=>i(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",r),window.addEventListener("offline",o),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}),[]),s};function Ue(t){return(0,C.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,C.jsx)("path",{d:"M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",fill:"#AC73E6"}),(0,C.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0z",fill:"#fff"})]})}var re=n(17772);const Ge=()=>{const{formatMessage:t}=(0,f.useIntl)(),{trackUsage:s}=(0,u.useTracking)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(u.ContentBox,{title:t({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:t({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(Ue,null),iconBackground:"alternative100",endAction:e.createElement(b.J,{as:re.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var We=n(11276),Qe=n(74571),Je=n(23450),Ke=n.n(Je),F=n(7681),Z=n(84495),Ye=n(86783),qe=n(61473),Xe=n(85018),_e=n(81249),le=n.n(_e),$=n(29728),oe=n(65186);const B=({description:t,installMessage:s,disabled:i,handleCopy:r,pluginName:o})=>e.createElement(Z.u,{"data-testid":`tooltip-${o}`,description:t},e.createElement(g.x,null,e.createElement($.z,{size:"S",startIcon:e.createElement(oe.Z,null),variant:"secondary",disabled:i,onClick:r},s))),V=({strapiPeerDepVersion:t,strapiAppVersion:s,handleCopy:i,pluginName:r})=>{const{formatMessage:o}=(0,f.useIntl)(),d=le().validRange(t),c=le().satisfies(s,d),l=o({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!d)return e.createElement(B,{installMessage:l,pluginName:r,description:o({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:i});if(!c)return e.createElement(B,{installMessage:l,pluginName:r,description:o({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:d}),disabled:!0})}return e.createElement($.z,{size:"S",startIcon:e.createElement(oe.Z,null),variant:"secondary",onClick:i},l)};B.defaultProps={disabled:!1,handleCopy:null},B.propTypes={description:a().string.isRequired,installMessage:a().string.isRequired,disabled:a().bool,handleCopy:a().func,pluginName:a().string.isRequired},V.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},V.propTypes={strapiAppVersion:a().string,strapiPeerDepVersion:a().string,handleCopy:a().func.isRequired,pluginName:a().string.isRequired};const et=V,H=({isInstalled:t,isInDevelopmentMode:s,commandToCopy:i,strapiAppVersion:r,strapiPeerDepVersion:o,pluginName:d})=>{const c=(0,u.useNotification)(),{formatMessage:l}=(0,f.useIntl)(),{trackUsage:p}=(0,u.useTracking)(),m=()=>{navigator.clipboard.writeText(i),p("willInstallPlugin"),c({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}})};return t?e.createElement(g.x,{paddingLeft:4},e.createElement(b.J,{as:Xe.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(y.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},l({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement(et,{strapiAppVersion:r,strapiPeerDepVersion:o,handleCopy:m,pluginName:d}):null};H.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},H.propTypes={isInstalled:a().bool.isRequired,isInDevelopmentMode:a().bool.isRequired,commandToCopy:a().string.isRequired,strapiAppVersion:a().string,strapiPeerDepVersion:a().string,pluginName:a().string.isRequired};const tt=H;var at=n(70004),nt=n(57750),st=n(7217);function it(t){return(0,C.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,C.jsx)("path",{d:"M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z",fill:"#212134"})})}const rt=(0,w.default)(at.i)`
  width: ${(0,u.pxToRem)(12)};
  transform: rotate(90deg);
`,U=({githubStars:t,npmDownloads:s,npmPackageType:i})=>{const{formatMessage:r}=(0,f.useIntl)();return e.createElement(F.K,{horizontal:!0,spacing:1},!!t&&e.createElement(e.Fragment,null,e.createElement(b.J,{as:nt.Z,height:(0,u.pxToRem)(12),width:(0,u.pxToRem)(12),"aria-hidden":!0}),e.createElement(b.J,{as:it,height:(0,u.pxToRem)(12),width:(0,u.pxToRem)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":r({id:`admin.pages.MarketPlacePage.${i}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:t,package:i})},e.createElement(y.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},t)),e.createElement(rt,{unsetMargin:!1,background:"neutral200"})),e.createElement(b.J,{as:st.Z,height:(0,u.pxToRem)(12),width:(0,u.pxToRem)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":r({id:`admin.pages.MarketPlacePage.${i}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:i})},e.createElement(y.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},s)))};U.defaultProps={githubStars:0,npmDownloads:0},U.propTypes={githubStars:a().number,npmDownloads:a().number,npmPackageType:a().string.isRequired};const lt=U,ot=(0,w.default)(y.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,G=({npmPackage:t,isInstalled:s,useYarn:i,isInDevelopmentMode:r,npmPackageType:o,strapiAppVersion:d})=>{const{attributes:c}=t,{formatMessage:l}=(0,f.useIntl)(),{trackUsage:p}=(0,u.useTracking)(),m=i?`yarn add ${c.npmPackageName}`:`npm install ${c.npmPackageName}`,E=l({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),T=`https://market.strapi.io/${Ke().plural(o)}/${c.slug}`;return e.createElement(k.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(g.x,null,e.createElement(k.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(g.x,{as:"img",src:c.logo.url,alt:`${c.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(lt,{githubStars:c.githubStars,npmDownloads:c.npmDownloads,npmPackageType:o})),e.createElement(g.x,{paddingTop:4},e.createElement(y.Z,{as:"h3",variant:"delta"},e.createElement(k.k,{alignItems:"center"},c.name,c.validated&&!c.madeByStrapi&&e.createElement(Z.u,{description:l({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(k.k,null,e.createElement(b.J,{as:Ye.Z,marginLeft:2,color:"success600"}))),c.madeByStrapi&&e.createElement(Z.u,{description:E},e.createElement(k.k,null,e.createElement(g.x,{as:"img",src:qe,alt:E,marginLeft:1,width:6,height:"auto"})))))),e.createElement(g.x,{paddingTop:2},e.createElement(ot,{as:"p",variant:"omega",textColor:"neutral600"},c.description))),e.createElement(F.K,{horizontal:!0,spacing:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(ae.Q,{size:"S",href:T,isExternal:!0,endIcon:e.createElement(re.Z,null),"aria-label":l({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:c.name}),variant:"tertiary",onClick:()=>p("didPluginLearnMore")},l({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(tt,{isInstalled:s,isInDevelopmentMode:r,commandToCopy:m,strapiAppVersion:d,strapiPeerDepVersion:c.strapiVersion,pluginName:c.name})))};G.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},G.propTypes={npmPackage:a().shape({id:a().string.isRequired,attributes:a().shape({name:a().string.isRequired,description:a().string.isRequired,slug:a().string.isRequired,npmPackageName:a().string.isRequired,npmPackageUrl:a().string.isRequired,repositoryUrl:a().string.isRequired,logo:a().object.isRequired,developerName:a().string.isRequired,validated:a().bool.isRequired,madeByStrapi:a().bool.isRequired,strapiCompatibility:a().oneOf(["v3","v4"]),strapiVersion:a().string,githubStars:a().number,npmDownloads:a().number}).isRequired}).isRequired,isInstalled:a().bool.isRequired,useYarn:a().bool.isRequired,isInDevelopmentMode:a().bool,npmPackageType:a().string.isRequired,strapiAppVersion:a().string};const ct=G,W=({npmPackages:t,installedPackageNames:s,useYarn:i,isInDevelopmentMode:r,npmPackageType:o,strapiAppVersion:d})=>{const c=(0,e.useCallback)(l=>s.includes(l),[s]);return e.createElement(We.r,{gap:4},t.map(l=>e.createElement(Qe.P,{col:4,s:6,xs:12,style:{height:"100%"},key:l.id},e.createElement(ct,{npmPackage:l,isInstalled:c(l.attributes.npmPackageName),useYarn:i,isInDevelopmentMode:r,npmPackageType:o,strapiAppVersion:d}))))};W.defaultProps={installedPackageNames:[],strapiAppVersion:null},W.propTypes={npmPackages:a().array.isRequired,installedPackageNames:a().arrayOf(a().string),useYarn:a().bool.isRequired,isInDevelopmentMode:a().bool.isRequired,npmPackageType:a().string.isRequired,strapiAppVersion:a().string};const ce=W;var de=n(91216),ue=n(82562);const dt=(0,w.default)(g.x)`
  font-weight: ${({theme:t})=>t.fontWeights.semiBold};

  span {
    font-size: ${({theme:t})=>t.fontSizes[1]};
  }
`,ge=({sortQuery:t,handleSelectChange:s})=>{const{formatMessage:i}=(0,f.useIntl)(),r={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(dt,null,e.createElement(de.P,{size:"S",id:"sort-by-select",value:t,customizeContent:()=>i(r[t].selected),onChange:o=>{s({sort:o})}},Object.entries(r).map(([o,d])=>e.createElement(ue.W,{key:o,value:o},i(d.option)))))};ge.propTypes={sortQuery:a().string.isRequired,handleSelectChange:a().func.isRequired};const ut=ge;var gt=n(72775),pt=n(70968),mt=n(89597),ft=n(88533),ht=n(25896);const pe=({message:t,value:s,onChange:i,possibleFilters:r,onClear:o,customizeContent:d})=>{const c=(l,p)=>`${l} (${p})`;return e.createElement(de.P,{"data-testid":`${t}-button`,"aria-label":t,placeholder:t,size:"M",onChange:i,onClear:o,value:s,customizeContent:d,multi:!0},Object.entries(r).map(([l,p])=>e.createElement(ue.W,{"data-testid":`${l}-${p}`,key:l,value:l},c(l,p))))};pe.propTypes={message:a().string.isRequired,value:a().array.isRequired,onChange:a().func.isRequired,possibleFilters:a().object.isRequired,onClear:a().func.isRequired,customizeContent:a().func.isRequired};const me=pe,fe=({source:t,onToggle:s,query:i,npmPackageType:r,possibleCategories:o,possibleCollections:d,handleSelectChange:c,handleSelectClear:l})=>{const{formatMessage:p}=(0,f.useIntl)();return e.createElement(ft.J,{source:t,padding:3,spacing:4,onBlur:()=>{}},e.createElement(ht.i,{onEscape:s},e.createElement(F.K,{spacing:1},e.createElement(g.x,null,e.createElement(me,{message:p({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:i?.collections||[],onChange:m=>{c({collections:m})},onClear:()=>l("collections"),possibleFilters:d,customizeContent:m=>p({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:m.length})})),r==="plugin"&&e.createElement(g.x,null,e.createElement(me,{message:p({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:i?.categories||[],onChange:m=>{c({categories:m})},onClear:()=>l("categories"),possibleFilters:o,customizeContent:m=>p({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:m.length}),name:"categories"})))))};fe.propTypes={onToggle:a().func.isRequired,source:a().shape({current:a().instanceOf(Element)}).isRequired,query:a().object.isRequired,npmPackageType:a().oneOf(["plugin","provider"]).isRequired,possibleCollections:a().object.isRequired,possibleCategories:a().object.isRequired,handleSelectChange:a().func.isRequired,handleSelectClear:a().func.isRequired};const vt=fe,Q=({name:t,handleRemove:s})=>e.createElement(g.x,{padding:1},e.createElement(gt.V,{icon:e.createElement(pt.default,null),onClick:s},t)),Pt=(0,w.default)($.z)`
  height: ${({theme:t})=>t.sizes.input.S};
`,he=({possibleCollections:t,possibleCategories:s,npmPackageType:i,query:r,handleSelectClear:o,handleSelectChange:d})=>{const[c,l]=(0,e.useState)(!1),p=(0,e.useRef)(),{formatMessage:m}=(0,f.useIntl)(),E=()=>l(h=>!h),T=(h,I)=>{const v={[I]:r[I].filter(S=>S!==h)};d(v)};return e.createElement(e.Fragment,null,e.createElement(g.x,{paddingTop:1,paddingBottom:1},e.createElement(Pt,{variant:"tertiary",ref:p,"data-testid":"filters-button",startIcon:e.createElement(mt.Z,null),onClick:E,size:"S"},m({id:"app.utils.filters",defaultMessage:"Filters"})),c&&e.createElement(vt,{onToggle:E,source:p,query:r,handleSelectClear:o,handleSelectChange:d,possibleCollections:t,possibleCategories:s,npmPackageType:i})),r.collections?.map(h=>e.createElement(Q,{name:h,key:h,handleRemove:()=>T(h,"collections")})),i==="plugin"&&r.categories?.map(h=>e.createElement(Q,{name:h,key:h,handleRemove:()=>T(h,"categories")})))};Q.propTypes={name:a().string.isRequired,handleRemove:a().func.isRequired},he.propTypes={npmPackageType:a().oneOf(["plugin","provider"]).isRequired,possibleCollections:a().object.isRequired,possibleCategories:a().object.isRequired,query:a().object.isRequired,handleSelectChange:a().func.isRequired,handleSelectClear:a().func.isRequired};const Et=he,ve=(t,s)=>(0,j.ZP)(t,s,{keys:[{threshold:j.ZP.rankings.WORD_STARTS_WITH,key:"attributes.name"},{threshold:j.ZP.rankings.WORD_STARTS_WITH,key:"attributes.description"}],baseSort:(i,r)=>i.index<r.index?-1:1}),Pe=()=>{const{formatMessage:t}=(0,f.useIntl)(),{trackUsage:s}=(0,u.useTracking)(),{notifyStatus:i}=(0,Se.G)(),r=(0,e.useRef)(s),o=(0,u.useNotification)(),[d,c]=(0,e.useState)(""),[{query:l},p]=(0,u.useQueryParams)(),{autoReload:m,dependencies:E,useYarn:T,strapiVersion:h}=(0,u.useAppInfos)(),I=He(),v=l?.npmPackageType||"plugin",[S,Ee]=(0,e.useState)({plugin:v==="plugin"?{...l}:{},provider:v==="provider"?{...l}:{}});(0,u.useFocusWhenNavigate)();const yt=t({id:"global.marketplace",defaultMessage:"Marketplace"}),Me=()=>{i(t({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:yt}))},{status:ye,data:ke}=Oe(Me,S.provider),{status:Re,data:J}=Ze(Me,S.plugin),kt=[Re,ye].includes("loading"),Rt=[Re,ye].includes("error");if((0,e.useEffect)(()=>{r.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{m||o({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"},blockTransition:!0})},[o,m]),!I)return e.createElement(N.A,null,e.createElement(A.o,null,e.createElement(ne,{isOnline:I}),e.createElement(k.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",style:{paddingTop:"120px"}},e.createElement(g.x,{paddingBottom:2},e.createElement(y.Z,{textColor:"neutral700",variant:"alpha"},t({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(g.x,{paddingBottom:6},e.createElement(y.Z,{textColor:"neutral700",variant:"epsilon"},t({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:Ve,alt:"offline",style:{width:"88px",height:"88px"}}))));if(Rt)return e.createElement(N.A,null,e.createElement(q.D,null,e.createElement(g.x,{paddingTop:8},e.createElement(u.AnErrorOccurred,null))));if(kt)return e.createElement(N.A,null,e.createElement(A.o,{"aria-busy":!0},e.createElement(u.LoadingIndicatorPage,null)));const K=ve(J.data,d),Y=ve(ke.data,d),xe=t({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:d}),xt=R=>{const P=R===0?"plugin":"provider",St=S[P]&&Object.keys(S[P]).length;p(St?{...S[P],npmPackageType:P}:{npmPackageType:P,collections:[],categories:[],sort:"name:asc"})},be=R=>{p(R),Ee(P=>({...P,[v]:{...P[v],...R}}))},bt=R=>{p({[R]:[]},"remove"),Ee(P=>({...P,[v]:{}}))},Ce=Object.keys(E),Ct=v==="plugin"?J.meta.collections:ke.meta.collections,Tt=J.meta.categories;return e.createElement(N.A,null,e.createElement(A.o,null,e.createElement(x.Helmet,{title:t({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(ne,{isOnline:I,npmPackageType:v}),e.createElement(q.D,null,e.createElement(g.x,{width:"25%",paddingBottom:4},e.createElement(Te.w,{name:"searchbar",onClear:()=>c(""),value:d,onChange:R=>c(R.target.value),clearLabel:t({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:t({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},t({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"}))),e.createElement(we.v,{label:t({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(v),onTabChange:xt},e.createElement(g.x,{paddingBottom:4},e.createElement(L.m,null,e.createElement(L.O,null,t({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ","(",K.length,")"),e.createElement(L.O,null,t({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ","(",Y.length,")"))),e.createElement(k.k,{paddingBottom:4,gap:2},e.createElement(ut,{sortQuery:l?.sort||"name:asc",handleSelectChange:be}),e.createElement(Et,{npmPackageType:v,possibleCollections:Ct,possibleCategories:Tt,query:l||{},handleSelectChange:be,handleSelectClear:bt})),e.createElement(O.n,null,e.createElement(O.x,null,d.length>0&&!K.length?e.createElement(te,{content:xe}):e.createElement(ce,{npmPackages:K,installedPackageNames:Ce,useYarn:T,isInDevelopmentMode:m,npmPackageType:"plugin",strapiAppVersion:h})),e.createElement(O.x,null,d.length>0&&!Y.length?e.createElement(te,{content:xe}):e.createElement(ce,{npmPackages:Y,installedPackageNames:Ce,useYarn:T,isInDevelopmentMode:m,npmPackageType:"provider"})))),e.createElement(g.x,{paddingTop:7},e.createElement(Ge,null)))))},Mt=()=>e.createElement(u.CheckPagePermissions,{permissions:$e.Z.marketplace.main},e.createElement(Pe,null))},86783:(D,M,n)=>{n.d(M,{Z:()=>f});var e=n(85893);function f(x){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...x,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm-1.438-11.066L16.158 7.5 18 9.245l-7.438 7.18-4.462-4.1 1.84-1.745 2.622 2.354z",fill:"#212134"})})}},17772:(D,M,n)=>{n.d(M,{Z:()=>f});var e=n(85893);function f(x){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...x,children:(0,e.jsx)("path",{d:"M16.235 2.824a1.412 1.412 0 010-2.824h6.353C23.368 0 24 .633 24 1.412v6.353a1.412 1.412 0 01-2.823 0V4.82l-8.179 8.178a1.412 1.412 0 01-1.996-1.996l8.178-8.178h-2.945zm4.942 10.588a1.412 1.412 0 012.823 0v9.176c0 .78-.632 1.412-1.412 1.412H1.412C.632 24 0 23.368 0 22.588V1.412C0 .632.632 0 1.412 0h9.176a1.412 1.412 0 010 2.824H2.824v18.353h18.353v-7.765z",fill:"#32324D"})})}},57750:(D,M,n)=>{n.d(M,{Z:()=>f});var e=n(85893);function f(x){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...x,children:(0,e.jsx)("path",{d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0112 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0z",fill:"#161614"})})}}}]);
