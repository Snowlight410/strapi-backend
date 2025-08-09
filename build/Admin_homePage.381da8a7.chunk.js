"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3981],{18450:(A,M,t)=>{t.d(M,{G:()=>x});var e=t(27279),l=t(75307),C=t(53532),T=t(40464);function x(){const{get:E}=(0,l.kY)(),{formatAPIError:a}=(0,l.So)(),S=(0,l.lm)(),b=(0,T.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:r}}=await E("/content-manager/components");return r},onError(r){r instanceof C.d7&&S({type:"warning",message:a(r)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:r}}=await E("/content-manager/content-types");return r},onError(r){r instanceof C.d7&&S({type:"warning",message:a(r)})}}]),[g,k]=b,I=g.isLoading||k.isLoading,j=e.useMemo(()=>(k?.data??[]).filter(r=>r.kind==="collectionType"&&r.isDisplayed),[k?.data]),D=e.useMemo(()=>(k?.data??[]).filter(r=>r.kind!=="collectionType"&&r.isDisplayed),[k?.data]);return{isLoading:I,components:e.useMemo(()=>g?.data??[],[g?.data]),collectionTypes:j,singleTypes:D}}},46961:(A,M,t)=>{t.r(M),t.d(M,{HomePageCE:()=>Y,default:()=>He});var e=t(27279),l=t(93415),C=t(27997),T=t(9941),x=t(23298),E=t(74577),a=t(75307),S=t(364),b=t(48627),g=t(61020),k=t(80174);function I(n,s){var o=n.values,m=(0,b._T)(n,["values"]),f=s.values,y=(0,b._T)(s,["values"]);return(0,k.wU)(f,o)&&(0,k.wU)(m,y)}function j(n){var s=(0,g.Z)(),o=s.formatMessage,m=s.textComponent,f=m===void 0?e.Fragment:m,y=n.id,H=n.description,u=n.defaultMessage,p=n.values,v=n.children,h=n.tagName,L=h===void 0?f:h,F=n.ignoreTag,Oe={id:y,description:H,defaultMessage:u},O=o(Oe,p,{ignoreTag:F});return typeof v=="function"?v(Array.isArray(O)?O:[O]):L?e.createElement(L,null,e.Children.toArray(O)):e.createElement(e.Fragment,null,O)}j.displayName="FormattedMessage";var D=e.memo(j,I);D.displayName="MemoizedFormattedMessage";const r=D;var G=t(51447),c=t(19003),i=t(74081),d=t(10701),P=t(32370),U=t(48102),K=t(37370),N=t(53274),V=t(47533),B=t(58704),z=t(29261);const w=()=>{const{guidedTourState:n,setSkipped:s}=(0,a.c1)(),{formatMessage:o}=(0,g.Z)(),{trackUsage:m}=(0,a.rS)(),f=Object.entries(B.o).map(([u,p])=>({key:u,title:p.home.title,content:(0,i.jsx)(K.Q,{onClick:()=>m(p.home.trackingEvent),as:V.OL,to:p.home.cta.target,endIcon:(0,i.jsx)(N.Z,{}),children:o(p.home.cta.title)}),isDone:Object.entries(n[u]).every(([,v])=>v)})),y=f.findIndex(u=>!u.isDone),H=()=>{s(!0),m("didSkipGuidedtour")};return(0,i.jsxs)(l.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0",children:[(0,i.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,i.jsx)(P.Z,{variant:"beta",as:"h2",children:o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})}),(0,i.jsx)(l.x,{children:f.map((u,p)=>{const v=J(y,p);return(0,i.jsxs)(l.x,{children:[(0,i.jsxs)(d.k,{children:[(0,i.jsx)(l.x,{minWidth:(0,a.Q1)(30),marginRight:5,children:(0,i.jsx)(z.M,{state:v,children:p+1})}),(0,i.jsx)(P.Z,{variant:"delta",as:"h3",children:o(u.title)})]}),(0,i.jsxs)(d.k,{alignItems:"flex-start",children:[(0,i.jsx)(d.k,{justifyContent:"center",minWidth:(0,a.Q1)(30),marginBottom:3,marginTop:3,marginRight:5,children:p===f.length-1?null:(0,i.jsx)(z.p,{state:v})}),(0,i.jsx)(l.x,{marginTop:2,children:v===B.P.IS_ACTIVE?u.content:null})]})]},u.key)})})]}),(0,i.jsx)(d.k,{justifyContent:"flex-end",children:(0,i.jsx)(U.z,{variant:"tertiary",onClick:H,children:o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})})})]})},J=(n,s)=>n===-1||s<n?B.P.IS_DONE:s>n?B.P.IS_NOT_DONE:B.P.IS_ACTIVE;var X=t(18450),q=t(48232);const _=t.p+"7e9af4fb7e723fcebf1f.svg";var ee=t(87050),te=t(23227),ne=t(75682),ae=t(96700);const oe=t.p+"27d16aefee06412db90a.png",se=t.p+"bb4d0d527bdfb161bc5a.svg",le=t.p+"bb3108f7fd1e6179bde1.svg",re=c.default.a`
  text-decoration: none;
`,ie=(0,c.default)(l.x)`
  background-image: url(${({backgroundImage:n})=>n});
`,ce=(0,c.default)(d.k)`
  background: rgba(255, 255, 255, 0.3);
`,de=()=>{const{formatMessage:n}=(0,g.Z)(),{trackUsage:s}=(0,a.rS)();return e.createElement(re,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{s("didClickOnTryStrapiCloudSection")}},e.createElement(d.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(ie,{backgroundImage:oe,hasRadius:!0,padding:3},e.createElement(ce,{width:(0,a.Q1)(32),height:(0,a.Q1)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:le,alt:n({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(d.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(d.k,null,e.createElement(P.Z,{fontWeight:"semiBold",variant:"pi"},n({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(P.Z,{textColor:"neutral600"},n({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(l.x,{src:se,position:"absolute",top:0,right:0,as:"img"}))))},Z=c.default.a`
  text-decoration: none;
`,me=()=>{const{formatMessage:n}=(0,g.Z)(),{trackUsage:s}=(0,a.rS)(),o=m=>{s(m)};return e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(de,null),e.createElement(Z,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(a.Y_,{title:n({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:n({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(ee.Z,null),iconBackground:"primary100"})),e.createElement(Z,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(a.Y_,{title:n({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:n({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(te.Z,null),iconBackground:"warning100"})),e.createElement(Z,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(a.Y_,{title:n({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:n({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(ne.Z,null),iconBackground:"secondary100"})),e.createElement(Z,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(a.Y_,{title:n({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:n({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ae.Z,null),iconBackground:"alternative100"})))};var Q=t(79213),ue=t(70627),$=t.n(ue);const pe=(0,c.default)(P.Z)`
  word-break: break-word;
`,R=({hasCreatedContentType:n,onCreateCT:s})=>{const{formatMessage:o}=(0,g.Z)();return e.createElement("div",null,e.createElement(l.x,{paddingLeft:6,paddingBottom:10},e.createElement(d.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(P.Z,{as:"h1",variant:"alpha"},o(n?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(pe,{textColor:"neutral600",variant:"epsilon"},o(n?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),n?e.createElement(Q.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(U.z,{size:"L",onClick:s,endIcon:e.createElement(N.Z,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};R.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},R.propTypes={hasCreatedContentType:$().bool,onCreateCT:$().func};const ge=R;var fe=t(73352),he=t(82063),Ee=t(70525),ye=t(1072),ve=t(73354),Ce=t(66770),ke=t(48157);const Me=(0,c.default)(fe.Z)`
  path {
    fill: #7289da !important;
  }
`,xe=(0,c.default)(he.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,W=(0,c.default)(Ee.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,Pe=(0,c.default)(ye.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Se=(0,c.default)(ve.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Te=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(Ce.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(Me,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(xe,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(Pe,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Se,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(W,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(W,null),alt:"career"}],Be=(0,c.default)(K.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:n})=>n.spaces[6]};
    height: ${({theme:n})=>n.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Le=(0,c.default)(x.r)`
  row-gap: ${({theme:n})=>n.spaces[2]};
  column-gap: ${({theme:n})=>n.spaces[4]};
`,be=()=>{const{formatMessage:n}=(0,g.Z)(),{communityEdition:s}=(0,a.L7)(),o=[...Te,{icon:e.createElement(W,null),link:s?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(l.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(l.x,{paddingBottom:7},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(P.Z,{variant:"delta",as:"h2",id:"join-the-community"},n({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(P.Z,{textColor:"neutral600"},n({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(Q.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(ke.Z,null)},n({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Le,null,o.map(({icon:m,link:f,name:y})=>e.createElement(E.P,{col:6,s:12,key:y.id},e.createElement(Be,{size:"L",startIcon:m,variant:"tertiary",href:f,isExternal:!0},n(y))))))},je=(0,c.default)(l.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,Y=()=>{const{collectionTypes:n,singleTypes:s,isLoading:o}=(0,X.G)(),{guidedTourState:m,isGuidedTourVisible:f,isSkipped:y}=(0,a.c1)(),H=!Object.values(m).every(h=>Object.values(h).every(L=>L))&&f&&!y,{push:u}=(0,G.k6)(),p=h=>{h.preventDefault(),u("/plugins/content-type-builder/content-types/create-content-type")},v=(0,e.useMemo)(()=>{const h=L=>L.filter(F=>F.isDisplayed);return h(n).length>1||h(s).length>0},[n,s]);return o?e.createElement(a.dO,null):e.createElement(C.A,null,e.createElement(r,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},h=>e.createElement(S.q,{title:h[0]})),e.createElement(T.o,null,e.createElement(je,null,e.createElement("img",{alt:"","aria-hidden":!0,src:_})),e.createElement(l.x,{padding:10},e.createElement(x.r,null,e.createElement(E.P,{col:8,s:12},e.createElement(ge,{onCreateCT:p,hasCreatedContentType:v}))),e.createElement(x.r,{gap:6},e.createElement(E.P,{col:8,s:12},H?e.createElement(w,null):e.createElement(me,null)),e.createElement(E.P,{col:4,s:12},e.createElement(be,null))))))};function De(){const n=(0,q.c)(Y,async()=>(await t.e(8296).then(t.bind(t,66831))).HomePageEE);return n?e.createElement(n,null):null}const He=De},27997:(A,M,t)=>{t.d(M,{A:()=>E});var e=t(74081),l=t(19003),C=t(93415);const T=(0,l.default)(C.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,x=(0,l.default)(C.x)`
  overflow-x: hidden;
`,E=({sideNav:a,children:S})=>(0,e.jsxs)(T,{hasSideNav:Boolean(a),children:[a,(0,e.jsx)(x,{paddingBottom:10,children:S})]})},53532:(A,M,t)=>{t.d(M,{d7:()=>C});var e=t(5466);const{Axios:l,AxiosError:C,CanceledError:T,isCancel:x,CancelToken:E,VERSION:a,all:S,Cancel:b,isAxiosError:g,spread:k,toFormData:I,AxiosHeaders:j,HttpStatusCode:D,formToJSON:r,getAdapter:G,mergeConfig:c}=e.default}}]);
