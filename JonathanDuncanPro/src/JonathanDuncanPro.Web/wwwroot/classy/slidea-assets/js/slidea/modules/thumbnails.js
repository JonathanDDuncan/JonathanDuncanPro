(function(){!function(t,i,s){"use strict";return t.fn.slidea.thumbnails=function(){var i,s,n;this.settings={enabled:!1,visible:{xs:12,sm:6,md:6,lg:5,xl:5},position:"bottom","class":""},s=function(i){var s,n;i<0&&(i=0),s=0,this.thumbnails.elements.each(function(n){return function(a,e){return a!==i&&void("horizontal"===n.settings.thumbnails.orientation?s+=t(e).width():"vertical"===n.settings.thumbnails.orientation&&(s+=t(e).height()))}}(this)),this.thumbnails.size-s<this.thumbnails.parent_size&&(s=this.thumbnails.size-this.thumbnails.parent_size),this.thumbnails.starting_position=-s,"horizontal"===this.settings.thumbnails.orientation?n="translate3d("+-s+"px, 0, 0)":"vertical"===this.settings.thumbnails.orientation&&(n="translate3d(0, "+-s+"px, 0)"),this.thumbnails.inner.addClass("animating").css({transform:n,"-o-transform":n,"-ms-transform":n,"-moz-transform":n,"-webkit-transform":n}),setTimeout(function(t){return function(){t.thumbnails.inner.removeClass("animating")}}(this),700)},n=function(){this.slides.each(function(i){return function(s,n){var a,e;n=t(n),a=t(i.settings.selector.background,n),null==i.data[s].thumbnail&&(e=n.attr("data-slidea-thumbnail"),null!=e?i.data[s].thumbnail=e:null!=a.attr("data-slidea-src")?i.data[s].thumbnail=a.attr("data-slidea-src"):i.data[s].thumbnail=a.attr("src"))}}(this))},this.initialize=function(){this.thumbnails.loaded=!1},this.wrap_objects=function(){this.thumbnails={},this.element.wrap('<div class="slidea-with-thumbnails '+this.settings.thumbnails.position+"\"><div class='slidea-with-thumbnails-container'></div></div>"),this.parent=this.element.parent(),this.thumbnails.parent=this.parent.parent()},this.load=function(){var i,a,e,h,l,r,o,m,u,b;n.call(this),["left","right"].indexOf(this.settings.thumbnails.position)!==-1?this.settings.thumbnails.orientation="vertical":this.settings.thumbnails.orientation="horizontal",u=this.settings.thumbnails.visible[this.current_responsive_size],o=this.wrapper_height,m=this.wrapper_width,"horizontal"===this.settings.thumbnails.orientation?(h=m/u,l=h*this.slides_length,i="width"):"vertical"===this.settings.thumbnails.orientation&&(h=o/u,l=h*this.slides_length,i="height"),a="",a+='<div class="slidea-thumbnails-container">',a+='<div class="slidea-thumbnails '+this.settings.thumbnails["class"]+" "+this.settings.thumbnails.orientation+'">',a+='<div class="slidea-thumbnails-inner" style="'+i+": "+l+'px;">',t.each(this.data,function(t,s){return a+='<div class="slidea-thumbnail-wrapper" style="'+i+": "+h+'px;">',a+='<img class="slidea-thumbnail" src="'+s.thumbnail+'" alt="Slide '+t+'" />',a+="</div>"}),a+="</div>",a+="</div>",a+="</div>",this.thumbnails.wrapper=t(a),["top","left","right"].indexOf(this.settings.thumbnails.position)!==-1?this.element.closest(".slidea-with-thumbnails").prepend(this.thumbnails.wrapper):"bottom"===this.settings.thumbnails.position?this.element.closest(".slidea-with-thumbnails").append(this.thumbnails.wrapper):this.settings.thumbnails.position.append(this.thumbnails.wrapper),this.thumbnails.inner=t(".slidea-thumbnails-inner",this.thumbnails.wrapper),this.thumbnails.elements=t(".slidea-thumbnail-wrapper",this.thumbnails.wrapper),this.thumbnails.container=t(".slidea-thumbnails-container",this.thumbnails.parent),"horizontal"===this.settings.thumbnails.orientation?(this.thumbnails.size=this.thumbnails.inner.width(),this.thumbnails.parent_size=this.thumbnails.wrapper.width()):"vertical"===this.settings.thumbnails.orientation&&(this.thumbnails.size=this.thumbnails.inner.height(),this.thumbnails.parent_size=this.thumbnails.wrapper.height()),this.thumbnails.elements.each(function(i){return function(s,n){var a;a=t(n),a.on("click",function(){i.thumbnails.elements.filter(".active").removeClass("active"),a.addClass("active"),i.slide(s)})}}(this)),t("img",this.thumbnails.elements).on("dragstart",function(t){t.preventDefault()}),this.thumbnails.starting_position=0,this.thumbnails.starting_direction=void 0,this.settings.touch===!0&&(b=new Hammer(this.thumbnails.wrapper[0]),"horizontal"===this.settings.thumbnails.orientation?(r="panleft panright",b.get("pan").set({direction:Hammer.DIRECTION_HORIZONTAL})):"vertical"===this.settings.thumbnails.orientation&&(r="panup pandown",b.get("pan").set({direction:Hammer.DIRECTION_VERTICAL})),b.on("panstart pancancel panend "+r,function(i){return function(n){var a,e,h;"horizontal"===i.settings.thumbnails.orientation?a=n.deltaX:"vertical"===i.settings.thumbnails.orientation&&(a=n.deltaY),"horizontal"===i.settings.thumbnails.orientation&&"panleft"===n.type||"panright"===n.type?n.direction!==Hammer.DIRECTION_LEFT&&n.direction!==Hammer.DIRECTION_RIGHT||(h="translate3d("+(i.thumbnails.starting_position+a)+"px, 0, 0)",i.thumbnails.inner.css({transform:h,"-o-transform":h,"-ms-transform":h,"-moz-transform":h,"-webkit-transform":h})):"vertical"===i.settings.thumbnails.orientation&&"panup"===n.type||"pandown"===n.type?n.direction!==Hammer.DIRECTION_UP&&n.direction!==Hammer.DIRECTION_DOWN||(h="translate3d(0, "+(i.thumbnails.starting_position+a)+"px, 0)",i.thumbnails.inner.css({transform:h,"-o-transform":h,"-ms-transform":h,"-moz-transform":h,"-webkit-transform":h})):"panstart"!==n.type||i.thumbnails.inner.hasClass("animating")?"panend"===n.type&&(i.thumbnails.inner.removeClass("slidea-dragging"),i.thumbnails.starting_position+=a,i.thumbnails.starting_position<-i.thumbnails.size+i.thumbnails.parent_size?s.call(i,i.slides_length-1):i.thumbnails.starting_position>0?s.call(i,0):(e=0,i.thumbnails.elements.each(function(n,a){return i.thumbnails.starting_position>-e?(s.call(i,n),!1):void("horizontal"===i.settings.thumbnails.orientation?e+=t(a).width():"vertical"===i.settings.thumbnails.orientation&&(e+=t(a).height()))}))):(i.thumbnails.inner.addClass("slidea-dragging"),i.thumbnails.starting_direction=n.direction),n.preventDefault()}}(this))),e=t("<img>",{src:t("img",this.thumbnails.elements.eq(0)).attr("src")}),e.load(function(t){return function(){t.thumbnails.loaded=!0,t.resize()}}(this))},i=function(){var i,s,n;this.thumbnails.loaded&&("horizontal"===this.settings.thumbnails.orientation?(s=t("img",this.thumbnails.elements.eq(0)).height(),this.thumbnails.container.height(s)):"vertical"===this.settings.thumbnails.orientation&&(n=t("img",this.thumbnails.elements.eq(0)).width(),this.parent.css((i={},i["padding-"+this.settings.thumbnails.position]=n+"px",i)),this.thumbnails.container.width(n)))},this.resize=function(){var t,n,a,e,h,l;this.thumbnails.loaded&&(l=this.settings.thumbnails.visible[this.current_responsive_size],e=this.wrapper_height,h=this.wrapper_width,"horizontal"===this.settings.thumbnails.orientation?(n=h/l,a=n*this.slides_length,t="width"):"vertical"===this.settings.thumbnails.orientation&&(n=e/l,a=n*this.slides_length,t="height"),console.log(this.id,e,n,a),this.thumbnails.inner[t](a),this.thumbnails.elements[t](n),"horizontal"===this.settings.thumbnails.orientation?this.thumbnails.size=a:"vertical"===this.settings.thumbnails.orientation&&(this.thumbnails.size=a),this.thumbnails.parent_size=this.thumbnails.wrapper[t](),s.call(this,this.current),i.call(this))},this.slide=function(t,i){this.thumbnails.loaded&&(this.thumbnails.elements.filter(".active").removeClass("active"),this.thumbnails.elements.eq(i).addClass("active"),s.call(this,i),this.log("Scrolled to thumbnail "+i+"."))}},t.slidea.register_module("thumbnails",t.fn.slidea.thumbnails)}(window.jQuery,window,document)}).call(this);