"use strict";(self.webpackChunksmarthomedoctor_strapi=self.webpackChunksmarthomedoctor_strapi||[]).push([[8056],{8421:(ue,M,t)=>{t.r(M),t.d(M,{default:()=>le});var e=t(67294),a=t(68547),R=t(87751),v=t(97132),A=t(23724),h=t(49656),V=t(80129),x=t.n(V),$=t(67838),H=t(49066),Z=t(185),F=t(29728),S=t(96315),P=t(23998);const O=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}];var Q=t(45697),n=t.n(Q),y=t(75515),W=t(550),z=t(47144),p=t(18374),G=t(11047),j=t(20022),Y=t(12028),J=t(41580);const B=({tokenName:l,onClickDelete:o})=>{const{formatMessage:d}=(0,v.useIntl)(),{trackUsage:c}=(0,a.useTracking)();return e.createElement(J.x,{paddingLeft:1,...a.stopPropagation},e.createElement(Y.h,{onClick:()=>{c("willDeleteToken"),o()},label:d({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${l}`}),name:"delete",noBorder:!0,icon:e.createElement(j.default,null)}))};B.propTypes={tokenName:n().string.isRequired,onClickDelete:n().func.isRequired};const K=B;var X=t(4585),q=t(71893);const _={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},ee=(0,q.default)(a.Link)`
  svg {
    path {
      fill: ${({theme:l})=>l.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.neutral800};
      }
    }
  }
`,C=({tokenName:l,tokenId:o,buttonType:d,children:c})=>{const{formatMessage:u}=(0,v.useIntl)(),{location:{pathname:m}}=(0,h.useHistory)();return e.createElement(ee,{to:`${m}/${o}`,title:u(_[d],{target:l})},c)};C.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired,buttonType:n().string,children:n().node.isRequired},C.defaultProps={buttonType:"edit"};const I=C,N=({tokenName:l,tokenId:o})=>e.createElement(I,{tokenName:l,tokenId:o},e.createElement(X.Z,null));N.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const te=N;var ne=t(8934);const w=({tokenName:l,tokenId:o})=>e.createElement(I,{tokenName:l,tokenId:o,buttonType:"read"},e.createElement(ne.default,null));w.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};const ae=w,D=({canDelete:l,canUpdate:o,canRead:d,onClickDelete:c,withBulkActions:u,rows:m})=>{const[{query:r}]=(0,a.useQueryParams)(),[,T]=r.sort.split(":"),{push:g,location:{pathname:L}}=(0,h.useHistory)(),{trackUsage:E}=(0,a.useTracking)(),b=m.sort((s,f)=>{const k=s.name.localeCompare(f.name);return T==="DESC"?-k:k});return e.createElement(W.p,null,b.map(s=>e.createElement(z.Tr,{key:s.id,...(0,a.onRowClick)({fn(){E("willEditTokenFromList"),g(`${L}/${s.id}`)},condition:o})},e.createElement(p.Td,null,e.createElement(y.Z,{textColor:"neutral800",fontWeight:"bold"},s.name)),e.createElement(p.Td,{maxWidth:(0,a.pxToRem)(250)},e.createElement(y.Z,{textColor:"neutral800",ellipsis:!0},s.description)),e.createElement(p.Td,null,e.createElement(y.Z,{textColor:"neutral800"},e.createElement(a.RelativeTime,{timestamp:new Date(s.createdAt)}))),e.createElement(p.Td,null,s.lastUsedAt&&e.createElement(y.Z,{textColor:"neutral800"},e.createElement(a.RelativeTime,{timestamp:new Date(s.lastUsedAt)}))),u&&e.createElement(p.Td,null,e.createElement(G.k,{justifyContent:"end"},o&&e.createElement(te,{tokenName:s.name,tokenId:s.id}),!o&&d&&e.createElement(ae,{tokenName:s.name,tokenId:s.id}),l&&e.createElement(K,{tokenName:s.name,onClickDelete:()=>c(s.id)}))))))};D.defaultProps={canDelete:!1,canUpdate:!1,canRead:!1,onClickDelete(){},rows:[],withBulkActions:!1},D.propTypes={canDelete:n().bool,canUpdate:n().bool,canRead:n().bool,onClickDelete:n().func,rows:n().array,withBulkActions:n().bool};const se=D,oe=()=>{(0,a.useFocusWhenNavigate)();const l=(0,A.useQueryClient)(),{formatMessage:o}=(0,v.useIntl)(),d=(0,a.useNotification)(),{allowedActions:{canCreate:c,canDelete:u,canUpdate:m,canRead:r}}=(0,a.useRBAC)(R.Z.settings["api-tokens"]),{push:T}=(0,h.useHistory)(),{trackUsage:g}=(0,a.useTracking)(),{startSection:L}=(0,a.useGuidedTour)(),E=(0,e.useRef)(L);(0,e.useEffect)(()=>{E.current&&E.current("apiTokens")},[]),(0,e.useEffect)(()=>{T({search:x().stringify({sort:"name:ASC"},{encode:!1})})},[T]);const b=O.map(i=>({...i,metadatas:{...i.metadatas,label:o(i.metadatas.label)}})),{data:s,status:f,isFetching:k}=(0,A.useQuery)(["api-tokens"],async()=>{g("willAccessTokenList");const{data:{data:i}}=await P.be.get("/admin/api-tokens");return g("didAccessTokenList",{number:i.length}),i},{enabled:r,onError(){d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),U=r&&(f!=="success"&&f!=="error"||f==="success"&&k),ie=(0,A.useMutation)(async i=>{await P.be.delete(`/admin/api-tokens/${i}`)},{async onSuccess(){await l.invalidateQueries(["api-tokens"]),g("didDeleteToken")},onError(i){i?.response?.data?.data?d({type:"warning",message:i.response.data.data}):d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),re=r&&s,de=r&&!s&&!c,ce=r&&!s&&c;return e.createElement(Z.o,{"aria-busy":U},e.createElement(a.SettingsPageTitle,{name:"API Tokens"}),e.createElement($.T,{title:o({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:o({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:c?e.createElement(a.LinkButton,{"data-testid":"create-api-token-button",startIcon:e.createElement(S.default,null),size:"S",onClick:()=>g("willAddTokenFromList"),to:"/settings/api-tokens/create"},o({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})):void 0}),e.createElement(H.D,null,!r&&e.createElement(a.NoPermissions,null),re&&e.createElement(a.DynamicTable,{headers:b,contentType:"api-tokens",rows:s,withBulkActions:u||m||r,isLoading:U,onConfirmDelete:i=>ie.mutateAsync(i)},e.createElement(se,{canRead:r,canDelete:u,canUpdate:m,rows:s,withBulkActions:u||m||r})),ce&&e.createElement(a.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:e.createElement(F.z,{variant:"secondary",startIcon:e.createElement(S.default,null)},o({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),de&&e.createElement(a.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},le=()=>e.createElement(a.CheckPagePermissions,{permissions:R.Z.settings["api-tokens"].main},e.createElement(oe,null))}}]);
