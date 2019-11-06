(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{128:function(t,o,n){},251:function(t,o,n){"use strict";var e=n(128);n.n(e).a},27:function(t,o,n){},272:function(t,o,n){"use strict";n.r(o);var e={name:"ZPopover",props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}}},data:function(){return{visible:!1}},mounted:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},destroyed:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},methods:{contentPosition:function(){document.body.appendChild(this.$refs.contentWrapper);var t=this.$refs,o=t.contentWrapper,n=t.triggerWrapper.getBoundingClientRect(),e=n.width,i=n.height,s=n.top,r=n.left,c=o.getBoundingClientRect().height,p={top:{left:r+window.scrollX,top:s+window.scrollY},bottom:{left:r+window.scrollX,top:s+i+window.scrollY},left:{left:r+window.scrollX,top:s+window.scrollY+(i-c)/2},right:{left:r+window.scrollX+e,top:s+window.scrollY+(i-c)/2}};o.style.left=p[this.position].left+"px",o.style.top=p[this.position].top+"px"},onClickDocument:function(t){this.$refs.contentWrapper.contains(t.target)||this.$refs.popover===t.target||this.$refs.popover.contains(t.target)||this.close()},open:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.contentPosition(),document.addEventListener("click",t.onClickDocument)}))},close:function(){this.visible=!1,document.removeEventListener("click",this.onClickDocument)},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())}}},i=(n(251),n(1)),s=Object(i.a)(e,(function(){var t,o=this.$createElement,n=this._self._c||o;return n("div",{ref:"popover",staticClass:"popover"},[this.visible?n("div",{ref:"contentWrapper",staticClass:"content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2):this._e(),this._v(" "),n("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])}),[],!1,null,"2558ec19",null).exports,r={components:{"z-button":n(86).a,"z-popover":s},data:function(){return{code1:'\n      <z-popover trigger="click" position="left" class="popover">\n          <z-button>左</z-button>\n          <div slot="content">提示信息</div>\n      </z-popover>\n      <z-popover trigger="click" position="top" class="popover">\n          <z-button>上</z-button>\n          <div slot="content">提示信息</div>\n      </z-popover>\n      <z-popover trigger="click" position="bottom" class="popover">\n          <z-button>下</z-button>\n          <div slot="content">提示信息</div>\n      </z-popover>\n      <z-popover trigger="click" position="right" class="popover">\n          <z-button>右</z-button>\n          <div slot="content">提示信息</div>\n      </z-popover>        \n      '.trim(),code2:'\n      <z-popover trigger="hover" position="left" class="popover">\n          <z-button>左</z-button>\n          <div slot="content">提示信息</div>\n      </z-popover>\n      <z-popover trigger="hover" position="top" class="popover">\n          <z-button>上</z-button>\n          <div slot="content">提示信息</div>\n      </z-popover>\n      <z-popover trigger="hover" position="bottom" class="popover">\n          <z-button>下</z-button>\n          <div slot="content">提示信息</div>\n      </z-popover>\n      <z-popover trigger="hover" position="right" class="popover">\n          <z-button>右</z-button>\n          <div slot="content">提示信息</div>\n      </z-popover>        \n      '.trim()}}},c=Object(i.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("h3",[t._v("click 触发")]),t._v(" "),n("z-popover",{staticClass:"popover",attrs:{trigger:"click",position:"left"}},[n("z-button",[t._v("左")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[t._v("提示信息")])],1),t._v(" "),n("z-popover",{staticClass:"popover",attrs:{trigger:"click",position:"top"}},[n("z-button",[t._v("上")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("a",{attrs:{href:"/"}},[t._v("中间的提示信息")])])],1),t._v(" "),n("z-popover",{staticClass:"popover",attrs:{trigger:"click",position:"bottom"}},[n("z-button",[t._v("下")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[t._v("提示信息")])],1),t._v(" "),n("z-popover",{staticClass:"popover",attrs:{trigger:"click",position:"right"}},[n("z-button",[t._v("右")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[t._v("提示信息")])],1),t._v(" "),n("pre",[n("code",[t._v("\n      "+t._s(t.code1)+"\n      ")])]),t._v(" "),n("h3",[t._v("hover 触发")]),t._v(" "),n("z-popover",{staticClass:"popover",attrs:{trigger:"hover",position:"left"}},[n("z-button",[t._v("左")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[t._v("提示信息")])],1),t._v(" "),n("z-popover",{staticClass:"popover",attrs:{trigger:"hover",position:"top"}},[n("z-button",[t._v("上")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("a",{attrs:{href:"/"}},[t._v("中间的提示信息")])])],1),t._v(" "),n("z-popover",{staticClass:"popover",attrs:{trigger:"hover",position:"bottom"}},[n("z-button",[t._v("下")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[t._v("提示信息")])],1),t._v(" "),n("z-popover",{staticClass:"popover",attrs:{trigger:"hover",position:"right"}},[n("z-button",[t._v("右")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[t._v("提示信息")])],1),t._v(" "),n("pre",[n("code",[t._v("\n      "+t._s(t.code2)+"\n      ")])])],1)}),[],!1,null,null,null);o.default=c.exports},57:function(t,o,n){"use strict";var e=n(27);n.n(e).a},58:function(t,o,n){},59:function(t,o,n){"use strict";var e={name:"ZIcon",props:["name"],mounted:function(){n.e(30).then(n.t.bind(null,262,7))}},i=(n(57),n(1)),s=Object(i.a)(e,(function(){var t=this.$createElement,o=this._self._c||t;return o("svg",{staticClass:"z-icon"},[o("use",{attrs:{"xlink:href":"#i-"+this.name}})])}),[],!1,null,"4d14838c",null);o.a=s.exports},85:function(t,o,n){"use strict";var e=n(58);n.n(e).a},86:function(t,o,n){"use strict";var e={name:"ZButton",components:{"z-icon":n(59).a},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return["left","right"].indexOf(t)>-1}}}},i=(n(85),n(1)),s=Object(i.a)(e,(function(){var t,o=this,n=o.$createElement,e=o._self._c||n;return e("button",{staticClass:"z-button",class:(t={},t["icon-"+o.iconPosition]=!0,t),on:{click:function(t){return o.$emit("click")}}},[o.loading?e("z-icon",{staticClass:"icon loading",attrs:{name:"loading"}}):o._e(),o._v(" "),o.icon&&!o.loading?e("z-icon",{staticClass:"icon",attrs:{name:o.icon}}):o._e(),o._v(" "),e("div",{staticClass:"content"},[o._t("default")],2)],1)}),[],!1,null,"3a49b670",null);o.a=s.exports}}]);