(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{442:function(e,t,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("0348c759",content,!0,{sourceMap:!1})},445:function(e,t,r){"use strict";r(442)},446:function(e,t,r){var l=r(24)((function(i){return i[1]}));l.push([e.i,".v-tooltip__content{\n  pointer-events:auto\n}",""]),e.exports=l},467:function(e,t,r){"use strict";r.r(t),r.d(t,"UserDetails",(function(){return T}));r(32);var l=r(14),o=r(12),n=r(5),c=r(7),v=r(6),f=(r(8),r(4)),d=r(208),D=r(209),k=r(210),_=r(205),m=r(211),h=r(207),x=r(206),y=r(199),V=r(200),w=r(201),O=r(204),j=r(202),E=r(203),z=r(198),$=r(197),R=r(196);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,l=Object(n.a)(e);if(t){var c=Object(n.a)(this).constructor;r=Reflect.construct(l,arguments,c)}else r=l.apply(this,arguments);return Object(o.a)(this,r)}}var P=function(e,t,r,desc){var l,o=arguments.length,n=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(n=(o<3?l(n):o>3?l(t,r,n):l(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n},T=function e(){Object(c.a)(this,e),this.age=18,this.maritalStatus=!1,this.eb5money=!1,this.msc=!1,this.extraordinaryAbility=!1,this.professor=!1,this.bsc=!1,this.experienceOfTwoYears=!1,this.manager=!1,this.selfPetition=!1},C=function(e){Object(l.a)(r,e);var t=S(r);function r(){var e;return Object(c.a)(this,r),(e=t.apply(this,arguments)).userDetails=new T,e}return r}(f.Vue),A=C=P([Object(f.Component)({components:{F1Visa:x.default,H1bVisa:h.default,O1Visa:m.default,Eb1VisaExtraOrdinary:R.default,Eb1VisaManager:$.default,Eb1VisaOutstanding:z.default,Eb3VisaUnskilled:O.default,Eb3VisaProfessional:j.default,Eb3VisaSkilled:E.default,Eb5Visa:_.default,Marriage:k.default,L1Visa:D.default,J1Visa:d.default,Eb2VisaAd:y.default,Eb2VisaEa:V.default,Eb2VisaNiw:w.default}})],C),B=(r(445),r(21)),M=r(10),Y=r.n(M),J=r(190),N=r(186),F=r(3),H=r(468),K=r(431),L=r(440),U=r(187),I=r(436),G=r(469),Q=r(471),component=Object(B.a)(A,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"9"}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",[e._v(" Személyes adatok ")]),e._v(" "),r("v-card-text",[r("v-row",{attrs:{justify:"space-between"}},[r("v-col",{attrs:{lg:"3"}},[r("v-text-field",{attrs:{label:"Eletkor"},model:{value:e.userDetails.age,callback:function(t){e.$set(e.userDetails,"age",t)},expression:"userDetails.age"}})],1),e._v(" "),r("v-col",{attrs:{lg:"3"}},[r("v-checkbox",{attrs:{label:"Házas vagyok"},model:{value:e.userDetails.maritalStatus,callback:function(t){e.$set(e.userDetails,"maritalStatus",t)},expression:"userDetails.maritalStatus"}})],1),e._v(" "),r("v-col",{attrs:{lg:"3"}},[r("v-checkbox",{attrs:{label:"Van msc/phd"},model:{value:e.userDetails.msc,callback:function(t){e.$set(e.userDetails,"msc",t)},expression:"userDetails.msc"}})],1),e._v(" "),r("v-col",{attrs:{lg:"3"}},[r("v-checkbox",{attrs:{label:"Van BSc/főiskolai végzettség"},model:{value:e.userDetails.bsc,callback:function(t){e.$set(e.userDetails,"bsc",t)},expression:"userDetails.bsc"}})],1)],1)],1)],1),e._v(" "),r("v-card",[r("v-card-text",[r("v-row",[r("v-col",{attrs:{lg:"3"}},[r("v-checkbox",{attrs:{label:"Befektetek $900.000-t"},model:{value:e.userDetails.eb5money,callback:function(t){e.$set(e.userDetails,"eb5money",t)},expression:"userDetails.eb5money"}})],1),e._v(" "),r("v-col",{attrs:{lg:"3"}},[r("v-checkbox",{attrs:{label:"Legalább 2 év szakmai gyakorlat"},model:{value:e.userDetails.experienceOfTwoYears,callback:function(t){e.$set(e.userDetails,"experienceOfTwoYears",t)},expression:"userDetails.experienceOfTwoYears"}})],1),e._v(" "),r("v-col",{attrs:{lg:"3"}},[r("v-row",{attrs:{align:"center","no-gutters":""}},[r("v-checkbox",{attrs:{label:"Rendkívüli képesség/eredmény"},model:{value:e.userDetails.extraordinaryAbility,callback:function(t){e.$set(e.userDetails,"extraordinaryAbility",t)},expression:"userDetails.extraordinaryAbility"}}),e._v(" "),r("v-tooltip",{attrs:{top:"","close-delay":"2000"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),l),[r("v-icon",{attrs:{dense:""}},[e._v("mdi-help-circle")])],1)]}}])},[e._v(" "),r("span",[e._v("\n                    Kivételes képesség: - tudományokban - művészetekben -\n                    üzleti életben - oktatásban - sportban\n                  ")])])],1)],1),e._v(" "),r("v-col",{attrs:{lg:"3"}},[r("v-row",{attrs:{align:"center","no-gutters":""}},[r("v-col",[r("v-checkbox",{attrs:{label:"Kutató/professzor"},model:{value:e.userDetails.professor,callback:function(t){e.$set(e.userDetails,"professor",t)},expression:"userDetails.professor"}})],1),e._v(" "),r("v-col",[r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),l),[r("v-icon",{attrs:{dense:""}},[e._v("mdi-help-circle")])],1)]}}])},[e._v(" "),r("span",[e._v("This is a tooltip")])])],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-checkbox",{attrs:{label:"Nemzetközi cégnél vezető"},model:{value:e.userDetails.manager,callback:function(t){e.$set(e.userDetails,"manager",t)},expression:"userDetails.manager"}})],1),e._v(" "),r("v-col",{attrs:{cols:"9"}},[r("v-checkbox",{attrs:{label:"Saját jogon adom be (SelfPetition) / Nem kell munkáltató/iskola hozzá"},model:{value:e.userDetails.selfPetition,callback:function(t){e.$set(e.userDetails,"selfPetition",t)},expression:"userDetails.selfPetition"}})],1)],1)],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-col",[r("o1-visa",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",[r("eb1-visa-extra-ordinary",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",[r("eb1-visa-manager",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",[r("eb1-visa-outstanding",{attrs:{"user-details":e.userDetails}})],1)],1),e._v(" "),r("v-row",[r("v-col",[r("eb5-visa",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",[r("eb2-visa-ea",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",[r("eb2-visa-ad",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",[r("eb2-visa-niw",{attrs:{"user-details":e.userDetails}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("eb3-visa-professional",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",{attrs:{cols:"3"}},[r("eb3-visa-skilled",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",{attrs:{cols:"3"}},[r("eb3-visa-unskilled",{attrs:{"user-details":e.userDetails}})],1)],1),e._v(" "),r("v-row",[r("v-col",[r("f1-visa",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",[r("j1-visa",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",[r("h1b-visa",{attrs:{"user-details":e.userDetails}})],1),e._v(" "),r("v-col",[r("l1-visa",{attrs:{"user-details":e.userDetails}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;Y()(component,{VBtn:J.a,VCard:N.a,VCardText:F.b,VCardTitle:F.c,VCheckbox:H.a,VCol:K.a,VContainer:L.a,VIcon:U.a,VRow:I.a,VTextField:G.a,VTooltip:Q.a})}}]);