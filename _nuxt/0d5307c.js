(window.webpackJsonp=window.webpackJsonp||[]).push([[16,22,24],{377:function(t,e,n){"use strict";n.r(e),n.d(e,"VisaType",(function(){return r})),n.d(e,"VisaInformationData",(function(){return v}));var r,o=n(389),c=n(39),l=n(23),f=function t(text,e){Object(l.a)(this,t),this.text=text,this.href=e};!function(t){t[t.IMMIGRANT=0]="IMMIGRANT",t[t.NON_IMMIGRANT=1]="NON_IMMIGRANT",t[t.DUAL_INTENT=2]="DUAL_INTENT"}(r||(r={}));var v=function(){function t(){Object(l.a)(this,t),this._basicRequirements=[],this._basicInformation=[],this._groupedRequirements={},this._links=[]}return Object(c.a)(t,[{key:"withVisaType",value:function(t){return this._visaType=t,this}},{key:"withLink",value:function(text,t){return this._links.push(new f(text,t)),this}},{key:"withBasicInformation",value:function(text){return this._basicInformation.push(text),this}},{key:"withBasicRequirement",value:function(text){return this._basicRequirements.push(text),this}},{key:"withExpandableInformation",value:function(t,e){var n;t in this._groupedRequirements?(n=this._groupedRequirements[t]).push.apply(n,Object(o.a)(e)):this._groupedRequirements[t]=e;return this}},{key:"basicRequirements",get:function(){return this._basicRequirements}},{key:"groupedRequirements",get:function(){return this._groupedRequirements}},{key:"links",get:function(){return this._links}},{key:"basicInformation",get:function(){return this._basicInformation}},{key:"visaType",get:function(){return this._visaType}}]),t}()},380:function(t,e,n){"use strict";n.r(e);n(78);var r=n(23),o=n(39),c=n(38),l=n(33),f=n(22),v=n(24),d=(n(12),n(378)),m=n(377);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"visaType",get:function(){switch(this.data){case m.VisaType.DUAL_INTENT:return"Nem bevándorló vízum(de kérhet letelepedési jogot)";case m.VisaType.IMMIGRANT:return"Bevándorló vízum";case m.VisaType.NON_IMMIGRANT:return"Nem bevándorló vízum";default:return}}}]),n}(d.Vue);h([Object(d.Prop)({})],k.prototype,"data",void 0);var _=k=h([Object(d.Component)({})],k),j=n(85),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visaType?n("div",{staticClass:"text-center"},[t._v(t._s(t.visaType))]):t._e()}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("c358bf52",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("86c25d92",content,!0,{sourceMap:!1})},383:function(t,e,n){"use strict";n.r(e);n(78);var r=n(23),o=n(38),c=n(33),l=n(22),f=n(24),v=(n(12),n(378)),d=n(377),m=n(380);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(o.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(v.Vue);h([Object(v.Prop)({default:function(){return new d.VisaInformationData}})],k.prototype,"visaInformation",void 0);var _=k=h([Object(v.Component)({components:{VisaType:m.default}})],k),j=(n(385),n(85)),z=n(110),O=n.n(z),R=n(169),I=n(167),w=n(138),V=n(368),C=n(462),x=n(458),T=n(459),B=n(460),P=n(461),M=n(168),N=n(396),A=n(393),E=n(376),D=n(397),L=n(394),G=n(371),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",t._g(t._b({},"v-btn",o,!1),r),[t._v("Követelmények")])],1),t._v(" "),n("v-card-text",{staticClass:"justify-center"},[n("VisaType",{attrs:{data:t.visaInformation.visaType}})],1)]}}])},[t._v(" "),t.visaInformation.basicInformation&&t.visaInformation.basicInformation.length>0?n("v-card",[n("v-card-title",{staticClass:"justify-center"},[t._v("Általános információk")]),t._v(" "),n("v-card-text",{staticClass:"tw-pt-6"},[n("v-list",{staticClass:"details"},t._l(t.visaInformation.basicInformation,(function(e){return n("v-list-item",{key:e},[n("v-list-item-content",[t._v(t._s(e))])],1)})),1)],1)],1):t._e(),t._v(" "),t.visaInformation?n("v-card",[n("v-card-title",{staticClass:"justify-center"},[t._v("Követelmények")]),t._v(" "),n("v-card-text",{staticClass:"justify-center tw-pt-6"},[t.visaInformation.basicRequirements&&t.visaInformation.basicRequirements.length>0?n("v-list",{staticClass:"details",attrs:{dense:"",disabled:""}},[n("v-list-item-group",t._l(t.visaInformation.basicRequirements,(function(e){return n("v-list-item",{key:e},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-square-small")])],1),t._v(" "),n("v-list-item-content",[t._v(t._s(e))])],1)})),1)],1):t._e(),t._v(" "),t.visaInformation.groupedRequirements?n("v-expansion-panels",t._l(t.visaInformation.groupedRequirements,(function(e,title){return n("v-expansion-panel",{key:title,staticClass:"tw-bg-gray-500"},[n("v-expansion-panel-header",[t._v(t._s(title))]),t._v(" "),n("v-expansion-panel-content",[n("v-list",t._l(e,(function(e){return n("v-list-item",{key:e},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-square-small")])],1),t._v(" "),n("v-list-item-content",[t._v(t._s(e))])],1)})),1)],1)],1)})),1):t._e()],1)],1):t._e(),t._v(" "),t.visaInformation.links&&t.visaInformation.links.length>0?n("v-card",[n("v-card-title",[t._v("Hasznos linkek")]),t._v(" "),n("v-card-text",t._l(t.visaInformation.links,(function(link){return n("v-row",{key:link.href},[n("v-col",[n("a",{attrs:{href:link.href}},[t._v("\n            "+t._s(link.text)+"\n          ")])])],1)})),1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VisaType:n(380).default}),O()(component,{VBtn:R.a,VCard:I.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:V.a,VDialog:C.a,VExpansionPanel:x.a,VExpansionPanelContent:T.a,VExpansionPanelHeader:B.a,VExpansionPanels:P.a,VIcon:M.a,VList:N.a,VListItem:A.a,VListItemContent:E.a,VListItemGroup:D.a,VListItemIcon:L.a,VRow:G.a})},384:function(t,e,n){"use strict";n.r(e);n(78);var r=n(23),o=n(38),c=n(33),l=n(22),f=n(24),v=(n(12),n(378));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(v.Vue);m([Object(v.Prop)({default:!1})],y.prototype,"greencard",void 0),m([Object(v.Prop)({default:!1})],y.prototype,"eligibleForWork",void 0),m([Object(v.Prop)({default:!1})],y.prototype,"eligibleForGreenCard",void 0),m([Object(v.Prop)({default:""})],y.prototype,"greenCardEligibilityMessage",void 0);var h=y=m([v.Component],y),k=(n(387),n(85)),_=n(110),j=n.n(_),z=n(368),O=n(375),R=n(168),I=n(371),component=Object(k.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[t.greencard?n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v("Zöldkártya")]):t._e(),t._v(" "),t.greencard?n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("v-icon",[t._v(t._s(t.greencard?"mdi-check":"mdi-close"))])],1):t._e(),t._v(" "),t.greencard?t._e():n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v("Munka")]),t._v(" "),t.greencard?t._e():n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("v-icon",[t._v(t._s(t.eligibleForWork?"mdi-check":"mdi-close"))])],1),t._v(" "),!1===t.greencard?n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v("\n      Zöldkártya szerezhető\n    ")]):t._e(),t._v(" "),!1===t.greencard?n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("v-icon",[t._v("\n        "+t._s(t.eligibleForGreenCard?"mdi-check":"mdi-close")+"\n      ")]),t._v(" "),t.greenCardEligibilityMessage&&t.greenCardEligibilityMessage.length>0?n("span",[t._v("\n        ("+t._s(t.greenCardEligibilityMessage)+")\n      ")]):t._e()],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VCol:z.a,VContainer:O.a,VIcon:R.a,VRow:I.a})},385:function(t,e,n){"use strict";n(381)},386:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".details{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity)) !important;\n  border-radius:0.25rem !important\n}",""]),t.exports=r},387:function(t,e,n){"use strict";n(382)},388:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".center-margin{\n  margin:auto\n}",""]),t.exports=r},405:function(t,e,n){"use strict";n.r(e);n(78);var r=n(23),o=n(39),c=n(38),l=n(33),f=n(22),v=n(24),d=(n(12),n(378)),m=n(377);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(c.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visaInformation=(new m.VisaInformationData).withVisaType(m.VisaType.DUAL_INTENT).withBasicInformation("H-1B vízumot kell igényelnie, ha azért utazik az Egyesült Államokba, hogy egy előre egyeztetett szakmai feladattal kapcsolatos szolgáltatást nyújtson. Az erre való jogosultsághoz legalább bachelor (vagy azzal egyenértékű) diplomával kell rendelkeznie azon a szakterületen, amelyben a munkát végezni fogja.").withBasicRequirement("A külföldi szakember rendelkezzen a meghirdetett vagy ahhoz közeli szakterületen alapszakon, vagy magasabb fokozaton felőfokú végzettséggel. Az is elfogadható, ha a szakembernek a felsőoktatással egyenértékű munkában eltöltött gyakorlata van, és az is, ha azonos területről rendelkezik munkahelyi tapasztalattal és felsőfokú tanulmányokkal. 3 év gyakorlati tapasztalat egyenértékű egy év felsőfokú tanulmánnyal").withBasicRequirement("Állásajánlat egy Egyesült Államokbeli munkáltatótól").withBasicRequirement("A szakismeretet igénylő munkakör definició szerint olyan munkakör, melynek ellátásához felsőfokokú végzettség szükséges legalább alapszakon (BA, BSc, BEng) és amely munkakört az iparágban rendszeresen ilyen végzettséggel látnak el").withBasicRequirement("Az USA munkáltatónak a H-1B vízummal rendelkező számára az u.n. szokásos bért kell fizetnie, azaz azt az átlagbért, amit az adott munkakörben az USA adott régiójában dolgozóknak fizetnek").withLink("USCIS","https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations-dod-cooperative-research-and-development-project-workers-and-fashion").withLink("ImmigrationVisaUSA","https://immigrationvisausa.com/hu/munkavallalasi-vizumok#H-1BvizumHung").withLink("ustraveldocs","https://www.ustraveldocs.com/hu_hu/hu-niv-typework.asp#"),t}return Object(o.a)(n,[{key:"enabled",get:function(){return this.userDetails.selfPetition||!this.userDetails.bsc&&!this.userDetails.msc?"colorInactive":"colorActive"}}]),n}(d.Vue);h([Object(d.Prop)()],k.prototype,"userDetails",void 0);var _=k=h([d.Component],k),j=n(85),z=n(110),O=n.n(z),R=n(167),I=n(138),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:t.enabled,height:"100%"}},[n("v-card-title",{staticClass:"justify-center"},[t._v("H1B")]),t._v(" "),n("v-card-text",[n("VisaInformation",{attrs:{"visa-information":t.visaInformation}}),t._v(" "),n("VisaOpportunities",{attrs:{greencard:!1,"eligible-for-work":"true","eligible-for-green-card":!0,"green-card-eligibility-message":"Munkaltaton keresztul"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VisaInformation:n(383).default,VisaOpportunities:n(384).default}),O()(component,{VCard:R.a,VCardText:I.b,VCardTitle:I.c})}}]);