(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"0Zqt":function(t,e){t.exports="//_next/static/images/self-beeple-222ef6146b66cf6626d0185ac4c77f2e.webp"},"4fdI":function(t,e){t.exports="//_next/static/images/gemini-beeple-a10fa48a7404da03be79d42033f3933d.webp"},ELNm:function(t,e,n){var s;s=function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={exports:{},id:s,loaded:!1};return t[s].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),r=n(1),a=n(3),i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r.initializer.load(this,n,e),this.begin()}return s(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=a.htmlParser.typeHtmlChars(t,e,n);var s=0,i=t.substr(e);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var o=1;o+=(i=/\d+/.exec(i)[0]).length,s=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+o),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==t.substr(e+r).charAt(0)&&(r++,!(e+r>t.length)););var c=t.substring(0,e),u=t.substring(c.length+1,e+r),l=t.substring(e+r+1);t=c+u+l,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var s=t.substr(0,e);this.replaceText(s),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=a.htmlParser.backSpaceHtmlChars(t,e,n);var s=t.substr(0,e);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];r&&s===r.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),s)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=i,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),i=n(2),o=(s=i)&&s.__esModule?s:{default:s},c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return a(t,[{key:"load",value:function(t,e,n){if(t.el="string"===typeof n?document.querySelector(n):n,t.options=r({},o.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"===typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var s=Array.prototype.slice.apply(t.stringsElement.children),a=s.length;if(a)for(var i=0;i<a;i+=1){var c=s[i];t.strings.push(c.innerHTML.trim())}}for(var i in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[i]=i;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var e=document.createElement("style");e.type="text/css",e.setAttribute("data-typed-js-css",!0);var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=n,document.body.appendChild(e))}}}]),t}();e.default=c;var u=new c;e.initializer=u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=n,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if("<"===s||"&"===s){var r="";for(r="<"===s?">":";";t.substr(e+1).charAt(0)!==r&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if(">"===s||";"===s){var r="";for(r=">"===s?"<":"&";t.substr(e-1).charAt(0)!==r&&!(--e<0););e--}return e}}]),t}();e.default=s;var r=new s;e.htmlParser=r}])},t.exports=s()},QeBL:function(t,e,n){"use strict";n.r(e);var s=n("1OyB"),r=n("vuIU"),a=n("Ji7U"),i=n("md7G"),o=n("foSv"),c=n("q1tI"),u=n.n(c),l=n("AO0C"),p=n("ELNm"),f=n.n(p),h=u.a.createElement;function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=Object(o.a)(t);if(e){var r=Object(o.a)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return Object(i.a)(this,n)}}var d=function(t){Object(a.a)(n,t);var e=m(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t={strings:this.props.strings,typeSpeed:50,backSpeed:50};this.typed=new f.a(this.el,t)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var t=this;return h("div",{className:"wrap"},h("div",{className:"type-wrap"},h("h1",null,h("span",{style:{whiteSpace:"pre"},ref:function(e){t.el=e}}))))}}]),n}(u.a.Component),y=n("4fdI"),g=n.n(y),b=n("X135"),v=n.n(b),k=n("0Zqt"),C=n.n(k),N=n("RVWH"),w=n("VEet"),O=n.n(w),E=u.a.createElement;function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=Object(o.a)(t);if(e){var r=Object(o.a)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return Object(i.a)(this,n)}}var S=function(t){Object(a.a)(n,t);var e=x(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return E(l.m,{md:"6",lg:"4",sm:"12",xs:"12"},E(l.f,{className:"text-center ",border:"0",style:{backgroundColor:"transparent"}},E(l.g,{className:"mt-5 mb-5 ml-3"},E(l.l,{className:"card-title h2"},this.props.icon," "),E(l.l,{className:"card-title h2"}," ",this.props.title," "),E(l.k,{className:"mt-2"}," ",this.props.text))))}}]),n}(u.a.Component),P=u.a.createElement;function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=Object(o.a)(t);if(e){var r=Object(o.a)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return Object(i.a)(this,n)}}var T=function(t){Object(a.a)(n,t);var e=j(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return P(l.m,{lg:"12",className:"mb-3 mt-5"},P(l.h,null,P(l.m,{lg:"6"},this.props.image),P(l.m,{lg:"6"},P(l.f,{cascade:!0,className:" h-80",border:"0"},P(l.g,{cascade:!0,className:"mt-2 card-margin mb-2"},P(l.l,{className:"card-title  h1"}," ",this.props.title," "),this.props.children)))))}}]),n}(u.a.Component),R=n("P+JV"),I=u.a.createElement;function L(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=Object(o.a)(t);if(e){var r=Object(o.a)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return Object(i.a)(this,n)}}var B=function(t){Object(a.a)(n,t);var e=L(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return I("div",{className:"mainBackground"},I(N.a,null),I(l.s,{fluid:!0},I(l.o,{className:"mt-5"},I(l.E,null,I(l.m,{lg:"4",md:"12",middle:!0},I(l.b,{type:"fadeIn",duration:"2s"},I(l.l,{className:"jumbo-title text-center"},"Hybrid Formation Portal"))),I(l.m,{lg:"4",md:"6",sm:"12",xs:"12",middle:!0,className:"text-center"},I(l.b,{type:"fadeIn",duration:"2s"},I("img",{src:O.a,style:{maxWidth:"300px"},className:"img-fluid",alt:""}))),I(l.m,{lg:"4",md:"6",sm:"12",xs:"12",middle:!0},I(l.b,{type:"fadeIn",duration:"0.5s"},I(l.l,{className:"text-center overflow"},"summon your ",I("br",null),I(d,{strings:["^3000 DAO LLC^5000","Multi-Sig Non-Profit^5000","Hybrid Entity"]})))),I(l.o,{className:"text-center"},I(l.m,{className:"text-center mb-4 mt-5",lg:"12"},I(l.b,{type:"fadeIn",reveal:!0},I(l.l,null,I(l.b,{type:"fadeIn",reveal:!0},I("h4",null,"Rally your team.")),I(l.b,{type:"fadeIn",reveal:!0},I("h4",null,"Cultivate shared incentives.")),I(l.b,{type:"fadeIn",reveal:!0},I("h4",null,"Organize legal and ethereal forces."))))),I("br",null),I(l.m,{className:"text-center mb-5",lg:"12"},I(l.b,{type:"fadeIn",reveal:!0},I(l.e,{size:"lg",href:"#products",className:"btn-primary"},I("h2",{className:"ethericText"},"summon")))))))),I(l.E,{className:"mt-1 mainBackground2"},I(l.o,{className:"mb-5"},I(l.E,{className:"mb-5 mt-5",id:"features"},I(S,{title:"Fast",text:"Our legal automation makes things quick and easy",icon:I(l.q,{className:"mb-3",icon:"skiing"})}),I(S,{title:"Easy",text:"Filling out the necessary information won't take longer than a few minutes",icon:I(l.q,{className:"mb-3",far:!0,icon:"clock"})}),I(S,{title:"Secure",text:"Keep your assets secure with Wyoming's generous statutes",icon:I(l.q,{className:"mb-3",icon:"lock"})}),I(S,{title:"Private",text:"Create a company using your blockchain wallet address",icon:I(l.q,{className:"mb-3",icon:"key"})}),I(S,{title:"Tamper-Proof",text:"With a single source of truth, investors won't worry about fraud",icon:I(l.q,{className:"mb-3",icon:"fingerprint"})}),I(S,{title:"Blockchain Ready",text:"Incorporate in the most blockchain-friendly state in the U.S.",icon:I(l.q,{className:"mb-3",icon:"briefcase"})}))),I(l.o,{className:"purple darken-4 rounded-pill",style:{padding:"1rem"}},I(l.E,{className:"w-80 h-100 align-items-center justify-content-center "},I(l.m,{className:"text-center",md:"8"},I("h5",{style:{color:"white",padding:"10pt"}},"Questions on how to form an Entity?")),I(l.m,{className:"text-center",md:"4"},I(l.e,{tag:"a",href:"https://calendly.com/etherize/consultation?month=2020-09",target:"_blank",role:"button",className:"btn-primary",style:{margin:"5pt"}},I("h6",null,I("small",null,"Book a meeting today!")))))),I(l.o,null,I(l.E,{id:"products",className:"no-gutters products"},I(T,{title:"Form Hybrid Entity",image:I("img",{alt:"design",className:"img-fluid cardCorners",src:C.a,style:{height:"568px",width:"100%",objectFit:"cover"}})},I(l.k,{className:"mb-2 mt-3"},"A Hybrid Entity exists both in our world and some place beyond.",I("br",null),"Long theorized, yet only recently attainable, they are just as capable of transacting with mortals as they are executing smart contracts.",I("br",null),"Bring your existing multi-signature wallet, ERC20 token, or DAO; alternatively, allow us to help you deploy one.",I("br",null),"Our team will form a legal entity to specification, wrapping the experimental organization in the safety of limited liability."),I(l.k,{className:"btn-tags"},I(l.c,{className:"mr-2 mt-2 badge-info"},"Includes Services Below"),I(l.c,{className:"mr-2 mt-2 badge-info"},"Ethereum: Multi-Sig, ERC20, DAO"),I(l.c,{className:"mr-2 mt-2 badge-info"},"Wyoming: Non-Profit/LLC/Series LLC")),I(l.e,{size:"lg",href:"/create?type="+R.a.hybridEntity,className:"btn-secondary btn-card"},"Start ",I(l.q,{icon:"bolt"}))),I(T,{title:"Form Legal Entity",image:I("img",{alt:"design",className:"img-fluid cardCorners fullWidth",src:v.a,style:{height:"504px",width:"100%",objectFit:"cover"}})},I(l.k,{className:"mb-2 mt-3"},"Protect your personal assets or rally your team around a new entity. ",I("br",null),"Form the Entity without having to sign a single piece of paper.",I("br",null),"The EIN and Formation Certificate will be sent to your inbox. ",I("br",null),"Enjoy Wyoming's incredibly low taxes and strong asset protections. ",I("br",null),"One hour of consultation is included to help you get things rolling.",I("br",null)),I(l.k,{className:"btn-tags"},I(l.c,{className:"mr-2 mt-2 badge-info"},"Wyoming:Non-Profit, LLC, Series LLC"),I(l.c,{className:"mr-2 mt-2 badge-info"},"EIN & Filing Receipt"),I(l.c,{className:"mr-2 mt-2 badge-info"},"1 hour of consultation"),I(l.c,{className:"mr-2 mt-2 badge-info"},"Optional: Operating Agreement")),I(l.e,{size:"lg",href:"/create?type="+R.a.legalEntity,className:"btn-secondary btn-card"},"Start ",I(l.q,{icon:"bolt"}))),I(T,{title:"Form Ethereal Entity",image:I("img",{alt:"design",className:"img-fluid cardCorners fullWidth",src:g.a,style:{height:"536px",width:"100%",objectFit:"cover"}})},I(l.k,{className:"mb-2 mt-3"},"Curious to play with Ethereal matter, but aren't quite ready to call forth a Hybrid from the Summoning Portal?",I("br",null),"Our form will allow you to issue Crypto-Tokens, around which you & your co-founders' efforts may coalscence.",I("br",null),"After the 'Entity Information' document is signed, your chosen Ethereal component can be deployed via one click using MetaMask.",I("br",null)),I(l.k,{className:"btn-tags"},I(l.c,{className:"mr-2 mt-2 badge-info"},"Free"),I(l.c,{className:"mr-2 mt-2 badge-info"},"ERC20 Token Generation"),I(l.c,{className:"mr-2 mt-2 badge-info"},"\ud83e\udd85 DAO: Coming Soon"),I(l.c,{className:"mr-2 mt-2 badge-info"},"\ud83d\udc79 DAO: Coming Soon"),I(l.c,{className:"mr-2 mt-2 badge-info"},"\ud83e\udd89 MultiSig: Coming Soon")),I(l.e,{size:"lg",href:"https://dao.openlaw.io/",className:"btn-secondary btn-card"},"Start ",I(l.q,{icon:"bolt"})))))))}}]),n}(u.a.Component),D=n("8Kt/"),q=n.n(D),A=n("b2pr"),F=u.a.createElement;function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=Object(o.a)(t);if(e){var r=Object(o.a)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return Object(i.a)(this,n)}}var M=function(t){Object(a.a)(n,t);var e=_(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return F(u.a.Fragment,null,F(q.a,null,F("title",null,"Etherize: Formation & Identity Services"),F("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),F(B,null),F(A.a,null))}}]),n}(c.Component);e.default=M},VEet:function(t,e){t.exports="//_next/static/images/portal-6-f75e9537d7a587062e973a3eedfe9e86.svg"},X135:function(t,e){t.exports="//_next/static/images/sleeping-giant-beeple-aba4d3448adc588add9c3e6b85054c1b.webp"}},[["/EDR",0,2,4,1,3]]]);