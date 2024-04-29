"use strict";(self.webpackChunkstandard_design=self.webpackChunkstandard_design||[]).push([[923],{34577:function(K,l,e){e.r(l),e.d(l,{default:function(){return p}});var x=e(7863),h=e.n(x),a=e(76091),s=e.n(a),i=e(79685),f=e(80408),E=e(11792),m=e(97423),D=e(86935),y=e(89881),j=e(63342),r=s()({},y);function p(){var T=(0,f.pC)(),P=(0,i.useState)(!0),u=h()(P,2),M=u[0],_=u[1],g=(0,i.useRef)(f.m8.location.pathname);return(0,i.useEffect)(function(){return f.m8.listen(function(C){C.location.pathname!==g.current&&(g.current=C.location.pathname,_(!0),document.documentElement.scrollTo(0,0))})},[]),(0,j.jsx)(E.D.Provider,{value:{pkg:{name:"standard-design",description:"https://github.com/wustdjf/standard-design",version:"1.0.0",license:"ISC",author:""},entryExports:r,demos:m.DE,components:m.wx,locales:D.k,loading:M,setLoading:_,themeConfig:{title:"Standard Design",footer:"Copyright \xA9 2000-2024 Standard Design. All Rights Reserved. Standard Design \u7248\u6743\u6240\u6709. \u6CAAICP\u59072024018069\u53F7",prefersColor:{default:"light",switch:!0},name:"Standard Design",carrier:"dumi",hd:!0,rtl:!0,sidebar:{"/components":[{title:"\u7EC4\u4EF6",children:[{title:"alert",link:"/components/alert"}]},{title:"\u5DE5\u5177\u5E93",children:[{title:"i18n",link:"/components/i18n"}]}]},nav:[{title:"\u6307\u5357",link:"/guide"},{title:"\u7EC4\u4EF6",link:"/components/alert"}]}},children:T})}},89881:function(K,l,e){e.r(l),e.d(l,{Alert:function(){return se}});var x=e(7863),h=e.n(x),a=e(79685),s=e(40764),i=e(82499),f=e(84105),E=e(37305),m=e(78663),D=e(3729),y=e.n(D),j=e(53588),r={prefectFontXs:"10px",prefectFontSm:"12px",prefectFontMd:"14px",prefectFontLg:"16px",prefectIconXs:"16px",prefectIconSm:"18px",prefectIconMd:"20px",prefectIconLg:"22px",prefectPrimaryColor:"#325dff",prefectDangerColor:"#f53f3f",prefectInfoColor:"#00b42a",prefectWarningColor:"#ff7d00",prefectDisabledColor:"#f2f3f5",prefectTextColor:"#ffffff",prefectDarkPrimaryColor:"#3C7EFF",prefectDarkDangerColor:"rgba(183, 63, 63, 0.6)",prefectDarkInfoColor:"rgba(39, 195, 70, 0.6)",prefectDarkWarningColor:"rgba(255, 150, 38, 0.6)",prefectDarkDisabledColor:"#f2f3f5",prefectDarkTextColor:"#ffffff",prefectDarkFontColor:"#ffffffe6",prefectRadiusXs:"5px",prefectRadiusSm:"10px",prefectRadiusMd:"20px",prefectRadiusLg:"50%",prefectTransformXs:"5px",prefectTransformSm:"10px",prefectTransformMd:"15px",prefectTransformLg:"20px"},p,T="#e8f3ff",P="#e8ffea",u="#fef7e8",M="#feece8",_="#253757",g="#22482c",C="#573d25",X="#553332",Z="#4e5969",z="#1d2129",G="#ffffffb3",$="#ffffff",V=r.prefectFontMd,H=r.prefectRadiusXs,J=r.prefectPrimaryColor,Q=r.prefectInfoColor,Y=r.prefectWarningColor,w=r.prefectDangerColor,q=r.prefectFontLg,ee=r.prefectFontXs,S=r.prefectTransformSm,ne=`
.prefect-alert,
.prefect-dark-alert {
  padding: 12px 15px;
  font-size: `.concat(V,`;
  text-align: left;
  display: flex;
  border-radius: `).concat(H,`;
  justify-content: space-between;

  .alert-content {
    display: flex;
    color: `).concat(Z,`;

    .alert-icon {
      margin-right: `).concat(S,`;

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
        color: `).concat(w,`;
      }
    }

    .alert-text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: `).concat(q,`;
        margin-bottom: `).concat(S,`;
        color: `).concat(z,`;
      }
    }
  }

  .close-icon {
    font-size: `).concat(ee,`;
    cursor: pointer;
  }
}

.prefect-dark-alert-info {
  background-color: `).concat(_,`;
}

.prefect-dark-alert-success {
  background-color: `).concat(g,`;
}

.prefect-dark-alert-warning {
  background-color: `).concat(C,`;
}

.prefect-dark-alert-error {
  background-color: `).concat(X,`;
}

.prefect-alert-info {
  background-color: `).concat(T,`;
}

.prefect-alert-success {
  background-color: `).concat(P,`;
}

.prefect-alert-warning {
  background-color: `).concat(u,`;
}

.prefect-alert-error {
  background-color: `).concat(M,`;
}

.prefect-dark-alert {
  .alert-content {
    color: `).concat(G,`;

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
`,re=j.ZP.div(p||(p=y()([`
	`,`
	`,`
`])),ne,te),t=e(63342),L=(0,a.createContext)({}),he=function(n){var o=n.children;return _jsx(L.Provider,{value:n,children:o})},Ee=null,ae=e(77566),oe=e.n(ae);function ce(){for(var v=[],n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return o.forEach(function(d){d!==void 0&&d!==""&&v.push(d)}),oe()(new Set(v)).join(" ")}var le=function(n,o){var c=n.style,d=n.className,O=n.type,b=O===void 0?"info":O,A=n.title,ie=n.content,R=n.showClear,fe=R===void 0?!1:R,B=n.showIcon,de=B===void 0?!0:B,me=n.closeElement,W=n.onClose,pe=(0,a.useState)(!0),N=h()(pe,2),ue=N[0],_e=N[1],U=(0,a.useContext)(L),ge=U.prefixCls,F=U.darkTheme,Ce=ce(ge,d,"prefect-".concat(F?"dark-":"","alert-").concat(b),F?"prefect-dark-alert":"prefect-alert"),ve=(0,a.useMemo)(function(){switch(b){case"info":return(0,t.jsx)(s.Z,{className:"alert-icon-info"});case"success":return(0,t.jsx)(i.Z,{className:"alert-icon-success"});case"warning":return(0,t.jsx)(s.Z,{className:"alert-icon-warning"});case"error":return(0,t.jsx)(f.Z,{className:"alert-icon-error"});default:return(0,t.jsx)(s.Z,{className:"alert-icon-info"})}},[b]),xe=function(){_e(!1),W&&W()};return(0,t.jsx)(re,{children:(0,t.jsx)(m.Z,{in:ue,timeout:200,appear:!0,mountOnEnter:!0,classNames:"fadeContent",unmountOnExit:!0,onEnter:function(I){I.style.display="flex"},onExited:function(I){I.style.display="none"},children:(0,t.jsxs)("div",{className:Ce,style:c,ref:o,children:[(0,t.jsxs)("div",{className:"alert-content",children:[de&&(0,t.jsx)("div",{className:"alert-icon",children:ve}),(0,t.jsxs)("div",{className:"alert-text",children:[A&&(0,t.jsx)("div",{className:"title",children:A}),ie]})]}),fe&&(0,t.jsx)("div",{className:"close-icon",onClick:xe,children:me||(0,t.jsx)(E.Z,{})})]})})})},se=(0,a.forwardRef)(le)}}]);
