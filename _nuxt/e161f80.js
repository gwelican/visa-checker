(window.webpackJsonp=window.webpackJsonp||[]).push([[21,22,23],{364:function(t,e,n){"use strict";n.r(e),n.d(e,"VisaInformation",(function(){return f}));var r=n(370),o=n(28),l=n(14),c=function t(text,e){Object(l.a)(this,t),this.text=text,this.href=e},f=function(){function t(){Object(l.a)(this,t),this._basicRequirements=[],this._groupedRequirements={},this._links=[],this._additionalInformation=[]}return Object(o.a)(t,[{key:"withLink",value:function(text,t){return this._links.push(new c(text,t)),this}},{key:"withBasicInformation",value:function(text){return this._basicRequirements.push(text),this}},{key:"withExpandableInformation",value:function(t,e){var n;t in this._groupedRequirements?(n=this._groupedRequirements[t]).push.apply(n,Object(r.a)(e)):this._groupedRequirements[t]=e;return this}},{key:"basicRequirements",get:function(){return this._basicRequirements}},{key:"groupedRequirements",get:function(){return this._groupedRequirements}},{key:"links",get:function(){return this._links}},{key:"withAdditionalInformation",value:function(text){return this._additionalInformation.push(text),this}},{key:"additionalInformation",get:function(){return this._additionalInformation}}]),t}()},365:function(t,e,n){var content=n(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("07dfdfd1",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";n.r(e);n(362);var r=n(14),o=n(27),l=n(23),c=n(13),f=n(15),v=n(363),d=n(364);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},h=function(t){Object(o.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(v.Vue);y([Object(v.Prop)({default:function(){return new d.VisaInformation}})],h.prototype,"visaInformation",void 0);var k=h=y([v.Component],h),_=n(72),j=n(102),O=n.n(j),R=n(156),z=n(154),I=n(133),x=n(472),C=n(467),V=n(468),w=n(469),P=n(470),E=n(155),B=n(399),L=n(379),D=n(360),M=n(400),A=n(380),component=Object(_.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",t._g(t._b({},"v-btn",o,!1),r),[t._v("Követelmények")])],1)]}}])},[t._v(" "),t.visaInformation.additionalInformation&&t.visaInformation.additionalInformation.length>0?n("v-card",[n("v-card-title",{staticClass:"justify-center"},[t._v("Általános információk")]),t._v(" "),n("v-card-text",[n("v-list",t._l(t.visaInformation.additionalInformation,(function(e){return n("v-list-item",{key:e},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-square-small")])],1),t._v(" "),n("v-list-item-content",[t._v(t._s(e))])],1)})),1)],1)],1):t._e(),t._v(" "),t.visaInformation?n("v-card",[n("v-card-title",{staticClass:"justify-center"},[t._v("Követelmények")]),t._v(" "),n("v-card-text",{staticClass:"justify-center"},[n("v-list",{attrs:{dense:"",disabled:""}},[n("v-list-item-group",t._l(t.visaInformation.basicRequirements,(function(e){return n("v-list-item",{key:e},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-square-small")])],1),t._v(" "),n("v-list-item-content",[t._v(t._s(e))])],1)})),1)],1),t._v(" "),t.visaInformation.groupedRequirements?n("v-expansion-panels",t._l(t.visaInformation.groupedRequirements,(function(e,title){return n("v-expansion-panel",{key:title},[n("v-expansion-panel-header",[t._v(t._s(title))]),t._v(" "),n("v-expansion-panel-content",[n("v-list",t._l(e,(function(e){return n("v-list-item",{key:e},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-square-small")])],1),t._v(" "),n("v-list-item-content",[t._v(t._s(e))])],1)})),1)],1)],1)})),1):t._e()],1)],1):t._e(),t._v(" "),t.visaInformation.links&&t.visaInformation.links.length>0?n("v-card",[n("v-card-title",[t._v("Hasznos linkek")]),t._v(" "),n("v-card-text",t._l(t.visaInformation.links,(function(link){return n("a",{key:link.href,attrs:{href:link.href}},[t._v("\n        "+t._s(link.text)+"\n      ")])})),0)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VBtn:R.a,VCard:z.a,VCardActions:I.a,VCardText:I.b,VCardTitle:I.c,VDialog:x.a,VExpansionPanel:C.a,VExpansionPanelContent:V.a,VExpansionPanelHeader:w.a,VExpansionPanels:P.a,VIcon:E.a,VList:B.a,VListItem:L.a,VListItemContent:D.a,VListItemGroup:M.a,VListItemIcon:A.a})},367:function(t,e,n){"use strict";n.r(e);n(362);var r=n(14),o=n(27),l=n(23),c=n(13),f=n(15),v=n(363);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){Object(o.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(v.Vue);m([Object(v.Prop)({default:!1})],y.prototype,"greencard",void 0),m([Object(v.Prop)({default:!1})],y.prototype,"eligibleForWork",void 0),m([Object(v.Prop)({default:!1})],y.prototype,"eligibleForGreenCard",void 0),m([Object(v.Prop)({default:""})],y.prototype,"greenCardEligibilityMessage",void 0);var h=y=m([v.Component],y),k=(n(368),n(72)),_=n(102),j=n.n(_),O=n(465),R=n(359),z=n(155),I=n(466),component=Object(k.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[t.greencard?n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v("Zöldkártya")]):t._e(),t._v(" "),t.greencard?n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("v-icon",[t._v(t._s(t.greencard?"mdi-check":"mdi-close"))])],1):t._e(),t._v(" "),t.greencard?t._e():n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v("Munka")]),t._v(" "),t.greencard?t._e():n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("v-icon",[t._v(t._s(t.eligibleForWork?"mdi-check":"mdi-close"))])],1),t._v(" "),!1===t.greencard?n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v("\n      Zöldkártya szerezhető\n    ")]):t._e(),t._v(" "),!1===t.greencard?n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("v-icon",[t._v("\n        "+t._s(t.eligibleForGreenCard?"mdi-check":"mdi-close")+"\n      ")]),t._v(" "),t.greenCardEligibilityMessage&&t.greenCardEligibilityMessage.length>0?n("span",[t._v("\n        ("+t._s(t.greenCardEligibilityMessage)+")\n      ")]):t._e()],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VCol:O.a,VContainer:R.a,VIcon:z.a,VRow:I.a})},368:function(t,e,n){"use strict";n(365)},369:function(t,e,n){var r=n(11)(!1);r.push([t.i,".center-margin{margin:auto}",""]),t.exports=r},406:function(t,e,n){"use strict";n.r(e);n(362);var r=n(14),o=n(28),l=n(27),c=n(23),f=n(13),v=n(15),d=n(363),m=n(364);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},k=function(t){Object(l.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visaInformation=(new m.VisaInformation).withBasicInformation("Nem bevándorló vizum, maximum 3 évnyi tartózkodásra, eb1re váltható").withExpandableInformation("Kimagasló, nemzetközileg elismert díjat vagy legalább három dokumentumot az alábbiak közül",["hazailag vagy nemzetközileg elismert díj vagy kitüntetés a kérelmező szakterületéről","tagság olyan nemzetközi szervezetben, mely elismerten kiemelkedő teljesítményeket kiván meg tagságától","szakfolyóiratokban és jelentős kereskedelmi publikációkban megjelent méltatás a külföldi kérelmező tevékenységéről az adott területen","szakmabeliek munkáinak elbirálója egyéni vagy bizottsági szinten","jelentős hozzájárulások a tudomány, az oktatás vagy az üzleti élet területén","tudományos cikkek publikálása szakfolyóiratokban és egyéb jelentős médiában","valamely neves intezményben kulcsfontosságú vagy magas beosztásban való alkalmazás","magas fizetés vagy dijazás amelyet a jelentkező korábbi munkája elismeréseként kiérdemelt","egyéb hasonló tanúbizonyságok, pl. kiváló szakemberek ajánlólevelei"]).withLink("Info","https://immigrationvisausa.com/hu/munkavallalasi-vizumok#O-1vizumHung").withLink("USCIS","https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement"),t}return Object(o.a)(n,[{key:"enabled",get:function(){return this.userDetails.extraordinaryAbility?"colorActive":"colorInactive"}}]),n}(d.Vue);h([Object(d.Prop)()],k.prototype,"userDetails",void 0);var _=k=h([d.Component],k),j=n(72),O=n(102),R=n.n(O),z=n(154),I=n(133),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:t.enabled,height:"100%"}},[n("v-card-title",{staticClass:"justify-center"},[t._v("O1 Kivételes képességek")]),t._v(" "),n("v-card-text",[n("requirements",{attrs:{"visa-information":t.visaInformation}}),t._v(" "),n("VisaOpportunities",{attrs:{greencard:!0,"eligible-for-work":"true"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;R()(component,{Requirements:n(366).default,VisaOpportunities:n(367).default}),R()(component,{VCard:z.a,VCardText:I.b,VCardTitle:I.c})}}]);