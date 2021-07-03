!function(e){"function"==typeof define&&define.amd?define("picker",["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):this.Picker=e(jQuery)}(function(e){function t(r,a,u,l){function f(){return t._.node("div",t._.node("div",t._.node("div",t._.node("div",k.component.nodes(v.open),_.box),_.wrap),_.frame),_.holder,'tabindex="-1"')}function p(){k.$holder.on({keydown:m,"focus.toOpen":h,blur:function(){$.removeClass(_.target)},focusin:function(e){k.$root.removeClass(_.focused),e.stopPropagation()},"mousedown click":function(t){var n=t.target;n!=k.$holder[0]&&(t.stopPropagation(),"mousedown"!=t.type||e(n).is("input, select, textarea, button, option")||(t.preventDefault(),k.$holder[0].focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var t=e(this),n=t.data(),o=t.hasClass(_.navDisabled)||t.hasClass(_.disabled),r=i();r=r&&(r.type||r.href),(o||r&&!e.contains(k.$root[0],r))&&k.$holder[0].focus(),!o&&n.nav?k.set("highlight",k.component.item.highlight,{nav:n.nav}):!o&&"pick"in n?(k.set("select",n.pick),y.closeOnSelect&&k.close(!0)):n.clear?(k.clear(),y.closeOnClear&&k.close(!0)):n.close&&k.close(!0)})}function h(e){e.stopPropagation(),$.addClass(_.target),k.$root.addClass(_.focused),k.open()}function m(e){var t=e.keyCode,n=/^(8|46)$/.test(t);return 27==t?(k.close(!0),!1):void((32==t||n||!v.open&&k.component.key[t])&&(e.preventDefault(),e.stopPropagation(),n?k.clear().close():k.open()))}if(!r)return t;var g=!1,v={id:r.id||"P"+Math.abs(~~(Math.random()*new Date))},y=u?e.extend(!0,{},u.defaults,l):l||{},_=e.extend({},t.klasses(),y.klass),$=e(r),b=function(){return this.start()},k=b.prototype={constructor:b,$node:$,start:function(){return v&&v.start?k:(v.methods={},v.start=!0,v.open=!1,v.type=r.type,r.autofocus=r==i(),r.readOnly=!y.editable,r.id=r.id||v.id,"text"!=r.type&&(r.type="text"),k.component=new u(k,y),k.$root=e('<div class="'+_.picker+'" id="'+r.id+'_root" />'),o(k.$root[0],"hidden",!0),k.$holder=e(f()).appendTo(k.$root),p(),y.formatSubmit&&function(){var t;!0===y.hiddenName?(t=r.name,r.name=""):t=(t=["string"==typeof y.hiddenPrefix?y.hiddenPrefix:"","string"==typeof y.hiddenSuffix?y.hiddenSuffix:"_submit"])[0]+r.name+t[1],k._hidden=e('<input type=hidden name="'+t+'"'+($.data("value")||r.value?' value="'+k.get("select",y.formatSubmit)+'"':"")+">")[0],$.on("change."+v.id,function(){k._hidden.value=r.value?k.get("select",y.formatSubmit):""})}(),$.data(a,k).addClass(_.input).val($.data("value")?k.get("select",y.format):r.value),y.editable||$.on("focus."+v.id+" click."+v.id,function(e){e.preventDefault(),k.open()}).on("keydown."+v.id,m),o(r,{haspopup:!0,expanded:!1,readonly:!1,owns:r.id+"_root"}),y.containerHidden?e(y.containerHidden).append(k._hidden):$.after(k._hidden),y.container?e(y.container).append(k.$root):$.after(k.$root),k.on({start:k.component.onStart,render:k.component.onRender,stop:k.component.onStop,open:k.component.onOpen,close:k.component.onClose,set:k.component.onSet}).on({start:y.onStart,render:y.onRender,stop:y.onStop,open:y.onOpen,close:y.onClose,set:y.onSet}),g=function(e){var t,n="position";return e.currentStyle?t=e.currentStyle[n]:window.getComputedStyle&&(t=getComputedStyle(e)[n]),"fixed"==t}(k.$holder[0]),r.autofocus&&k.open(),k.trigger("start").trigger("render"))},render:function(t){return t?(k.$holder=e(f()),p(),k.$root.html(k.$holder)):k.$root.find("."+_.box).html(k.component.nodes(v.open)),k.trigger("render")},stop:function(){return v.start?(k.close(),k._hidden&&k._hidden.parentNode.removeChild(k._hidden),k.$root.remove(),$.removeClass(_.input).removeData(a),setTimeout(function(){$.off("."+v.id)},0),r.type=v.type,r.readOnly=!1,k.trigger("stop"),v.methods={},v.start=!1,k):k},open:function(i){return v.open?k:($.addClass(_.active),o(r,"expanded",!0),setTimeout(function(){k.$root.addClass(_.opened),o(k.$root[0],"hidden",!1)},0),!1!==i&&(v.open=!0,g&&s.css("overflow","hidden").css("padding-right","+="+n()),g&&c?k.$holder.find("."+_.frame).one("transitionend",function(){k.$holder[0].focus()}):k.$holder[0].focus(),d.on("click."+v.id+" focusin."+v.id,function(e){var t=e.target;t!=r&&t!=document&&3!=e.which&&k.close(t===k.$holder[0])}).on("keydown."+v.id,function(n){var o=n.keyCode,r=k.component.key[o],i=n.target;27==o?k.close(!0):i!=k.$holder[0]||!r&&13!=o?e.contains(k.$root[0],i)&&13==o&&(n.preventDefault(),i.click()):(n.preventDefault(),r?t._.trigger(k.component.key.go,k,[t._.trigger(r)]):k.$root.find("."+_.highlighted).hasClass(_.disabled)||(k.set("select",k.component.item.highlight),y.closeOnSelect&&k.close(!0)))})),k.trigger("open"))},close:function(e){return e&&(y.editable?r.focus():(k.$holder.off("focus.toOpen").focus(),setTimeout(function(){k.$holder.on("focus.toOpen",h)},0))),$.removeClass(_.active),o(r,"expanded",!1),setTimeout(function(){k.$root.removeClass(_.opened+" "+_.focused),o(k.$root[0],"hidden",!0)},0),v.open?(v.open=!1,g&&s.css("overflow","").css("padding-right","-="+n()),d.off("."+v.id),k.trigger("close")):k},clear:function(e){return k.set("clear",null,e)},set:function(t,n,o){var r,i,a=e.isPlainObject(t),d=a?t:{};if(o=a&&e.isPlainObject(n)?n:o||{},t){for(r in a||(d[t]=n),d)i=d[r],r in k.component.item&&(void 0===i&&(i=null),k.component.set(r,i,o)),("select"==r||"clear"==r)&&$.val("clear"==r?"":k.get(r,y.format)).trigger("change");k.render()}return o.muted?k:k.trigger("set",d)},get:function(e,n){if(null!=v[e=e||"value"])return v[e];if("valueSubmit"==e){if(k._hidden)return k._hidden.value;e="value"}if("value"==e)return r.value;if(e in k.component.item){if("string"==typeof n){var o=k.component.get(e);return o?t._.trigger(k.component.formats.toString,k.component,[n,o]):""}return k.component.get(e)}},on:function(t,n,o){var r,i,a=e.isPlainObject(t),d=a?t:{};if(t)for(r in a||(d[t]=n),d)i=d[r],o&&(r="_"+r),v.methods[r]=v.methods[r]||[],v.methods[r].push(i);return k},off:function(){var e,t,n=arguments;for(e=0,namesCount=n.length;e<namesCount;e+=1)(t=n[e])in v.methods&&delete v.methods[t];return k},trigger:function(e,n){var o=function(e){var o=v.methods[e];o&&o.map(function(e){t._.trigger(e,k,[n])})};return o("_"+e),o(e),k}};return new b}function n(){if(s.height()<=a.height())return 0;var t=e('<div style="visibility:hidden;width:100px" />').appendTo("body"),n=t[0].offsetWidth;t.css("overflow","scroll");var o=e('<div style="width:100%" />').appendTo(t)[0].offsetWidth;return t.remove(),n-o}function o(t,n,o){if(e.isPlainObject(n))for(var i in n)r(t,i,n[i]);else r(t,n,o)}function r(e,t,n){e.setAttribute(("role"==t?"":"aria-")+t,n)}function i(){try{return document.activeElement}catch(e){}}var a=e(window),d=e(document),s=e(document.documentElement),c=null!=document.documentElement.style.transition;return t.klasses=function(e){return{picker:e=e||"picker",opened:e+"--opened",focused:e+"--focused",input:e+"__input",active:e+"__input--active",target:e+"__input--target",holder:e+"__holder",frame:e+"__frame",wrap:e+"__wrap",box:e+"__box"}},t._={group:function(e){for(var n,o="",r=t._.trigger(e.min,e);r<=t._.trigger(e.max,e,[r]);r+=e.i)n=t._.trigger(e.item,e,[r]),o+=t._.node(e.node,n[0],n[1],n[2]);return o},node:function(t,n,o,r){return n?"<"+t+(o=o?' class="'+o+'"':"")+(r=r?" "+r:"")+">"+(n=e.isArray(n)?n.join(""):n)+"</"+t+">":""},lead:function(e){return(10>e?"0":"")+e},trigger:function(e,t,n){return"function"==typeof e?e.apply(t,n||[]):e},digits:function(e){return/\d/.test(e[1])?2:1},isDate:function(e){return{}.toString.call(e).indexOf("Date")>-1&&this.isInteger(e.getDate())},isInteger:function(e){return{}.toString.call(e).indexOf("Number")>-1&&e%1==0},ariaAttr:function(t,n){for(var o in e.isPlainObject(t)||(t={attribute:n}),n="",t)n+=null==t[o]?"":("role"==o?"":"aria-")+o+'="'+t[o]+'"';return n}},t.extend=function(n,o){e.fn[n]=function(r,i){var a=this.data(n);return"picker"==r?a:a&&"string"==typeof r?t._.trigger(a[r],a,[i]):this.each(function(){e(this).data(n)||new t(this,n,o,r)})},e.fn[n].defaults=o.defaults},t});