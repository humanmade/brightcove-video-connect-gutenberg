!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(1)},function(e,t,r){"use strict";var n=r(2),i=(r.n(n),r(3)),o=(r.n(i),function(){function e(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),c=wp.i18n.__,a=(wp.element.Fragment,wp.blocks.registerBlockType),s=(wp.components.ServerSideRender,function(e){if(e.video_id){var t=Object.entries(e).sort(function(e,t){return e[0].localeCompare(t[0])}).reduce(function(e,t){var r=o(t,2),n=r[0],i=r[1];return e[n]=i,e},{});return wp.shortcode.string({tag:"bc_video",attrs:t})}});a("hm/brightcove-video",{title:c("Brightcove Video","brightcove-gutenberg"),icon:"format-video",category:"widgets",keywords:[c("Brightcove","brightcove-gutenberg"),c("video","brightcove-gutenberg")],attributes:{player_id:{type:"string"},account_id:{type:"string"},video_id:{type:"string"},autoplay:{type:"string"},embed:{type:"string"},padding_top:{type:"string"},min_width:{type:"string"},max_width:{type:"string"},height:{type:"string"},width:{type:"string"}},edit:function(e){var t=e.attributes,r=e.setAttributes,n=e.className,i=(e.isSelected,t.player_id),o=t.account_id,a=t.video_id;t.autoplay,t.embed,t.padding_top,t.min_width,t.max_width,t.height,t.width;return wp.element.createElement("div",{className:n+(a?" has-video-preview":"")},wp.element.createElement("div",{class:"components-placeholder editor-brightcove-selector"},a&&wp.element.createElement("iframe",{src:"//players.brightcove.net/"+o+"/"+i+"_default/index.html?videoId="+a,style:{width:"100%",height:"400px"}}),wp.element.createElement("button",{className:"editor-brightcove-selector__button",onClick:function(){wpbc.shortcode=s(t),wpbc.triggerModal(),wpbc.broadcast.off("insert:shortcode"),wpbc.broadcast.once("insert:shortcode",function(){var e=wp.shortcode.next("bc_video",wpbc.shortcode),t=e.shortcode;r(t.attrs.named)})}},c("Select a video"))))},save:function(e){var t=e.attributes,r=e.className;return wp.element.createElement("div",{className:r},s(t))}})},function(e,t){},function(e,t){}]);