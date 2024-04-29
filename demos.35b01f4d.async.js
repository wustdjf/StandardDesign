"use strict";(self.webpackChunkstandard_component=self.webpackChunkstandard_component||[]).push([[433],{60125:function(L,s,e){e.r(s),e.d(s,{default:function(){return i}});var m=e(79685),a=e(89881),r=e(63342);function i(){var c={margin:"15px 0"};return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.Alert,{type:"info",content:"Here is an info text",style:c}),(0,r.jsx)(a.Alert,{type:"success",content:"Here is an success text",style:c}),(0,r.jsx)(a.Alert,{type:"warning",content:"Here is an warning text",style:c}),(0,r.jsx)(a.Alert,{type:"error",content:"Here is an error text",style:c})]})}},89881:function(L,s,e){e.r(s),e.d(s,{Alert:function(){return fe}});var m=e(7863),a=e.n(m),r=e(79685),i=e(40764),c=e(82499),N=e(84105),F=e(37305),k=e(78663),b=e(3729),M=e.n(b),P=e(53588),o={prefectFontXs:"10px",prefectFontSm:"12px",prefectFontMd:"14px",prefectFontLg:"16px",prefectIconXs:"16px",prefectIconSm:"18px",prefectIconMd:"20px",prefectIconLg:"22px",prefectPrimaryColor:"#325dff",prefectDangerColor:"#f53f3f",prefectInfoColor:"#00b42a",prefectWarningColor:"#ff7d00",prefectDisabledColor:"#f2f3f5",prefectTextColor:"#ffffff",prefectDarkPrimaryColor:"#3C7EFF",prefectDarkDangerColor:"rgba(183, 63, 63, 0.6)",prefectDarkInfoColor:"rgba(39, 195, 70, 0.6)",prefectDarkWarningColor:"rgba(255, 150, 38, 0.6)",prefectDarkDisabledColor:"#f2f3f5",prefectDarkTextColor:"#ffffff",prefectDarkFontColor:"#ffffffe6",prefectRadiusXs:"5px",prefectRadiusSm:"10px",prefectRadiusMd:"20px",prefectRadiusLg:"50%",prefectTransformXs:"5px",prefectTransformSm:"10px",prefectTransformMd:"15px",prefectTransformLg:"20px"},x,B="#e8f3ff",O="#e8ffea",R="#fef7e8",W="#feece8",X="#253757",Z="#22482c",G="#573d25",H="#553332",z="#4e5969",K="#1d2129",U="#ffffffb3",$="#ffffff",w=o.prefectFontMd,V=o.prefectRadiusXs,J=o.prefectPrimaryColor,Q=o.prefectInfoColor,Y=o.prefectWarningColor,q=o.prefectDangerColor,_=o.prefectFontLg,ee=o.prefectFontXs,C=o.prefectTransformSm,ne=`
.prefect-alert,
.prefect-dark-alert {
  padding: 12px 15px;
  font-size: `.concat(w,`;
  text-align: left;
  display: flex;
  border-radius: `).concat(V,`;
  justify-content: space-between;

  .alert-content {
    display: flex;
    color: `).concat(z,`;

    .alert-icon {
      margin-right: `).concat(C,`;

      &-info {
        color: `).concat(J,`;
      }

      &-success {
        color: `).concat(Q,`;
      }

      &-warning {
        color: `).concat(Y,`;
      }

      &-error {
        color: `).concat(q,`;
      }
    }

    .alert-text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: `).concat(_,`;
        margin-bottom: `).concat(C,`;
        color: `).concat(K,`;
      }
    }
  }

  .close-icon {
    font-size: `).concat(ee,`;
    cursor: pointer;
  }
}

.prefect-dark-alert-info {
  background-color: `).concat(X,`;
}

.prefect-dark-alert-success {
  background-color: `).concat(Z,`;
}

.prefect-dark-alert-warning {
  background-color: `).concat(G,`;
}

.prefect-dark-alert-error {
  background-color: `).concat(H,`;
}

.prefect-alert-info {
  background-color: `).concat(B,`;
}

.prefect-alert-success {
  background-color: `).concat(O,`;
}

.prefect-alert-warning {
  background-color: `).concat(R,`;
}

.prefect-alert-error {
  background-color: `).concat(W,`;
}

.prefect-dark-alert {
  .alert-content {
    color: `).concat(U,`;

    .alert-text .title {
      color: `).concat($,`;
    }
  }
}
`),te=`
.fadeContent-enter,
.fadeContent-appear {
  opacity: 0;
}

.fadeContent-enter-active,
.fadeContent-appear-active {
  opacity: 1;
  transition: opacity 200ms;
}

.fadeContent-exit {
  opacity: 1;
}

.fadeContent-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
`,re=P.ZP.div(x||(x=M()([`
	`,`
	`,`
`])),ne,te),t=e(63342),v=(0,r.createContext)({}),he=function(n){var l=n.children;return _jsx(v.Provider,{value:n,children:l})},je=null,oe=e(77566),ae=e.n(oe);function ce(){for(var p=[],n=arguments.length,l=new Array(n),f=0;f<n;f++)l[f]=arguments[f];return l.forEach(function(d){d!==void 0&&d!==""&&p.push(d)}),ae()(new Set(p)).join(" ")}var le=function(n,l){var f=n.style,d=n.className,y=n.type,u=y===void 0?"info":y,h=n.title,se=n.content,j=n.showClear,ie=j===void 0?!1:j,D=n.showIcon,de=D===void 0?!0:D,pe=n.closeElement,E=n.onClose,ue=(0,r.useState)(!0),T=a()(ue,2),ge=T[0],me=T[1],I=(0,r.useContext)(v),xe=I.prefixCls,S=I.darkTheme,Ce=ce(xe,d,"prefect-".concat(S?"dark-":"","alert-").concat(u),S?"prefect-dark-alert":"prefect-alert"),ve=(0,r.useMemo)(function(){switch(u){case"info":return(0,t.jsx)(i.Z,{className:"alert-icon-info"});case"success":return(0,t.jsx)(c.Z,{className:"alert-icon-success"});case"warning":return(0,t.jsx)(i.Z,{className:"alert-icon-warning"});case"error":return(0,t.jsx)(N.Z,{className:"alert-icon-error"});default:return(0,t.jsx)(i.Z,{className:"alert-icon-info"})}},[u]),ye=function(){me(!1),E&&E()};return(0,t.jsx)(re,{children:(0,t.jsx)(k.Z,{in:ge,timeout:200,appear:!0,mountOnEnter:!0,classNames:"fadeContent",unmountOnExit:!0,onEnter:function(g){g.style.display="flex"},onExited:function(g){g.style.display="none"},children:(0,t.jsxs)("div",{className:Ce,style:f,ref:l,children:[(0,t.jsxs)("div",{className:"alert-content",children:[de&&(0,t.jsx)("div",{className:"alert-icon",children:ve}),(0,t.jsxs)("div",{className:"alert-text",children:[h&&(0,t.jsx)("div",{className:"title",children:h}),se]})]}),ie&&(0,t.jsx)("div",{className:"close-icon",onClick:ye,children:pe||(0,t.jsx)(F.Z,{})})]})})})},fe=(0,r.forwardRef)(le)}}]);
