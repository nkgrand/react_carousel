(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),s=n(2),r=n(3),c=n(5),l=n(4),o=n(1),m=n.n(o),u=(n(13),n(14),n(0)),p=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={step:3,frameSize:3,itemwidth:130,animationDuration:1e3,move:0},e.previousSlide=function(){e.setState((function(e){var t=e.move-e.step*e.itemwidth;return{move:t<0?0:t}}))},e.getMinScroll=function(){var t=e.props.images,n=e.state,a=n.step,i=n.itemwidth;return t.length*i+a*i},e.getMaxScroll=function(){var t=e.props.images,n=e.state,a=n.step,i=n.itemwidth;return t.length*i-a*i},e.nextSlide=function(){e.setState((function(t){var n=t.move+t.step*t.itemwidth;return{move:n>=e.getMaxScroll()?e.getMaxScroll():n}}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.images,n=this.state,a=n.step,i=n.frameSize,s=n.itemwidth,r=n.animationDuration,c=n.move;return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("div",{className:"carousel",children:Object(u.jsxs)("div",{className:"carousel__wrapper",children:[Object(u.jsx)("button",{type:"button",className:"btn btn--prev",disabled:this.state.move<=0,onClick:this.previousSlide,children:"\u27a4"}),Object(u.jsx)("div",{className:"carousel__container",style:{width:"".concat(i*s,"px")},children:Object(u.jsx)("ul",{className:"carousel__list",style:{transform:"translateX(".concat(-c,"px)"),transition:"".concat(r,"ms"),width:"".concat(t.length*s,"px")},children:t.map((function(e){return Object(u.jsx)("li",{className:"carousel__item",children:Object(u.jsx)("img",{src:e,alt:"smile",className:"carousel__img",width:s})},e)}))})}),Object(u.jsx)("button",{type:"button",disabled:this.state.move===this.getMaxScroll(),className:"btn btn--next",onClick:this.nextSlide,children:"\u27a4"})]})}),Object(u.jsxs)("form",{className:"form",children:[Object(u.jsxs)("label",{htmlFor:"frameSize",children:["Frame Size: \xa0",Object(u.jsx)("input",{type:"number",name:"",id:"frameSize",min:1,max:5,step:1,value:i,onChange:function(t){e.setState({frameSize:+(null===t||void 0===t?void 0:t.target.value)})}})]}),Object(u.jsxs)("label",{htmlFor:"step",children:["Rolling step: \xa0",Object(u.jsx)("input",{type:"number",name:"",id:"step",min:1,max:3,step:1,value:a,onChange:function(t){e.setState({step:+(null===t||void 0===t?void 0:t.target.value)})}})]}),Object(u.jsxs)("label",{htmlFor:"itemWidth",children:["Image width: \xa0",Object(u.jsx)("input",{type:"range",name:"",id:"itemWidth",min:60,max:230,value:s,onChange:function(t){e.setState({itemwidth:+(null===t||void 0===t?void 0:t.target.value)})}})]}),Object(u.jsxs)("label",{htmlFor:"animationDuration",children:["Animation Duration: \xa0",Object(u.jsx)("input",{type:"range",name:"",id:"animationDuration",min:500,max:3e3,value:r,onChange:function(t){e.setState({animationDuration:+(null===t||void 0===t?void 0:t.target.value)})}})]})]})]})}}]),n}(m.a.Component),d=p,h=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.images;return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{className:"app__heading",children:"Lets roll :)"}),Object(u.jsx)(d,{images:e})]})}}]),n}(m.a.Component),g=h;i.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.50c40275.chunk.js.map