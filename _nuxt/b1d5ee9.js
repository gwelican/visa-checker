(window.webpackJsonp=window.webpackJsonp||[]).push([[16,22,23],{365:function(t,e,n){"use strict";n.r(e),n.d(e,"VisaInformation",(function(){return f}));var r=n(371),o=n(29),c=n(14),l=function t(text,e){Object(c.a)(this,t),this.text=text,this.href=e},f=function(){function t(){Object(c.a)(this,t),this._basicRequirements=[],this._groupedRequirements={},this._links=[],this._additionalInformation=[]}return Object(o.a)(t,[{key:"withLink",value:function(text,t){return this._links.push(new l(text,t)),this}},{key:"withBasicInformation",value:function(text){return this._basicRequirements.push(text),this}},{key:"withExpandableInformation",value:function(t,e){var n;t in this._groupedRequirements?(n=this._groupedRequirements[t]).push.apply(n,Object(r.a)(e)):this._groupedRequirements[t]=e;return this}},{key:"basicRequirements",get:function(){return this._basicRequirements}},{key:"groupedRequirements",get:function(){return this._groupedRequirements}},{key:"links",get:function(){return this._links}},{key:"withAdditionalInformation",value:function(text){return this._additionalInformation.push(text),this}},{key:"additionalInformation",get:function(){return this._additionalInformation}}]),t}()},366:function(t,e,n){var content=n(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("07dfdfd1",content,!0,{sourceMap:!1})},367:function(t,e,n){"use strict";n.r(e);n(363);var r=n(14),o=n(28),c=n(24),l=n(13),f=n(15),v=n(364),d=n(365);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},h=function(t){Object(o.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(v.Vue);_([Object(v.Prop)({default:function(){return new d.VisaInformation}})],h.prototype,"visaInformation",void 0);var y=h=_([v.Component],h),j=n(73),O=n(101),R=n.n(O),k=n(157),I=n(155),x=n(133),C=n(473),V=n(468),w=n(469),P=n(470),E=n(471),B=n(156),F=n(400),L=n(380),M=n(361),D=n(401),T=n(381),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",t._g(t._b({},"v-btn",o,!1),r),[t._v("Követelmények")])],1)]}}])},[t._v(" "),t.visaInformation.additionalInformation&&t.visaInformation.additionalInformation.length>0?n("v-card",[n("v-card-title",{staticClass:"justify-center"},[t._v("Általános információk")]),t._v(" "),n("v-card-text",[n("v-list",t._l(t.visaInformation.additionalInformation,(function(e){return n("v-list-item",{key:e},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-square-small")])],1),t._v(" "),n("v-list-item-content",[t._v(t._s(e))])],1)})),1)],1)],1):t._e(),t._v(" "),t.visaInformation?n("v-card",[n("v-card-title",{staticClass:"justify-center"},[t._v("Követelmények")]),t._v(" "),n("v-card-text",{staticClass:"justify-center"},[n("v-list",{attrs:{dense:"",disabled:""}},[n("v-list-item-group",t._l(t.visaInformation.basicRequirements,(function(e){return n("v-list-item",{key:e},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-square-small")])],1),t._v(" "),n("v-list-item-content",[t._v(t._s(e))])],1)})),1)],1),t._v(" "),t.visaInformation.groupedRequirements?n("v-expansion-panels",t._l(t.visaInformation.groupedRequirements,(function(e,title){return n("v-expansion-panel",{key:title},[n("v-expansion-panel-header",[t._v(t._s(title))]),t._v(" "),n("v-expansion-panel-content",[n("v-list",t._l(e,(function(e){return n("v-list-item",{key:e},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-square-small")])],1),t._v(" "),n("v-list-item-content",[t._v(t._s(e))])],1)})),1)],1)],1)})),1):t._e()],1)],1):t._e(),t._v(" "),t.visaInformation.links&&t.visaInformation.links.length>0?n("v-card",[n("v-card-title",[t._v("Hasznos linkek")]),t._v(" "),n("v-card-text",t._l(t.visaInformation.links,(function(link){return n("a",{key:link.href,attrs:{href:link.href}},[t._v("\n        "+t._s(link.text)+"\n      ")])})),0)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;R()(component,{VBtn:k.a,VCard:I.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VDialog:C.a,VExpansionPanel:V.a,VExpansionPanelContent:w.a,VExpansionPanelHeader:P.a,VExpansionPanels:E.a,VIcon:B.a,VList:F.a,VListItem:L.a,VListItemContent:M.a,VListItemGroup:D.a,VListItemIcon:T.a})},368:function(t,e,n){"use strict";n.r(e);n(363);var r=n(14),o=n(28),c=n(24),l=n(13),f=n(15),v=n(364);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(o.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(v.Vue);m([Object(v.Prop)({default:!1})],_.prototype,"greencard",void 0),m([Object(v.Prop)({default:!1})],_.prototype,"eligibleForWork",void 0),m([Object(v.Prop)({default:!1})],_.prototype,"eligibleForGreenCard",void 0),m([Object(v.Prop)({default:""})],_.prototype,"greenCardEligibilityMessage",void 0);var h=_=m([v.Component],_),y=(n(369),n(73)),j=n(101),O=n.n(j),R=n(466),k=n(360),I=n(156),x=n(467),component=Object(y.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[t.greencard?n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v("Zöldkártya")]):t._e(),t._v(" "),t.greencard?n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("v-icon",[t._v(t._s(t.greencard?"mdi-check":"mdi-close"))])],1):t._e(),t._v(" "),t.greencard?t._e():n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v("Munka")]),t._v(" "),t.greencard?t._e():n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("v-icon",[t._v(t._s(t.eligibleForWork?"mdi-check":"mdi-close"))])],1),t._v(" "),!1===t.greencard?n("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v("\n      Zöldkártya szerezhető\n    ")]):t._e(),t._v(" "),!1===t.greencard?n("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[n("v-icon",[t._v("\n        "+t._s(t.eligibleForGreenCard?"mdi-check":"mdi-close")+"\n      ")]),t._v(" "),t.greenCardEligibilityMessage&&t.greenCardEligibilityMessage.length>0?n("span",[t._v("\n        ("+t._s(t.greenCardEligibilityMessage)+")\n      ")]):t._e()],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VCol:R.a,VContainer:k.a,VIcon:I.a,VRow:x.a})},369:function(t,e,n){"use strict";n(366)},370:function(t,e,n){var r=n(11)(!1);r.push([t.i,".center-margin{margin:auto}",""]),t.exports=r},409:function(t,e,n){"use strict";n.r(e);n(363);var r=n(14),o=n(28),c=n(24),l=n(13),f=n(15),v=n(364),d=n(365);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},h=function(t){Object(o.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visaInformation=(new d.VisaInformation).withBasicInformation("Felvétel elnyerése amerikai egyetemre esetben").withBasicInformation("Tanulmányok idejére érvényes"),t}return n}(v.Vue);_([Object(v.Prop)()],h.prototype,"userDetails",void 0);var y=h=_([v.Component],h),j=n(73),O=n(101),R=n.n(O),k=n(155),I=n(133),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"100%"}},[n("v-card-title",{staticClass:"justify-center"},[t._v("F1")]),t._v(" "),n("v-card-text",[n("requirements",{attrs:{"visa-information":t.visaInformation}}),t._v(" "),n("VisaOpportunities",{attrs:{greencard:!1,"eligible-for-work":"true"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;R()(component,{Requirements:n(367).default,VisaOpportunities:n(368).default}),R()(component,{VCard:k.a,VCardText:I.b,VCardTitle:I.c})}}]);