var IndigoPalette={init:function(){$().select2?$(".form-control-select2").select2():console.warn("Warning - select2.min.js is not loaded."),$().multiselect?($(".form-control-multiselect").multiselect({buttonClass:"btn bg-indigo",nonSelectedText:"Select your state"}),$(".form-control-multiselect-material").multiselect({buttonClass:"btn btn-light text-indigo"})):console.warn("Warning - bootstrap-multiselect.js is not loaded."),$().jGrowl?$(".growl-launch").on("click",function(){$.jGrowl("Check me out! I'm a jGrowl notice.",{header:"Well highlighted",theme:"bg-indigo-400"})}):console.warn("Warning - jgrowl.min.js is not loaded."),"undefined"!=typeof PNotify?$(".pnotify-launch").on("click",function(){new PNotify({title:"Notification",text:"Check me out! I'm a PNotify notice.",icon:"icon-info22",addclass:"bg-indigo-400 border-indigo"})}):console.warn("Warning - pnotify.min.js is not loaded."),"undefined"!=typeof Noty?$(".noty-launch").on("click",function(){new Noty({layout:"topRight",theme:" alert bg-indigo text-white p-0",text:"Check me out! I'm a Noty notice.",timeout:2500}).show()}):console.warn("Warning - noty.min.js is not loaded."),function(){if("undefined"!=typeof Switchery){var o=document.querySelector(".form-input-switchery");new Switchery(o,{color:"#3F51B5"})}else console.warn("Warning - switchery.min.js is not loaded.")}(),$().uniform?($(".form-input-styled").uniform({wrapperClass:"border-indigo text-indigo-600",selectClass:"uniform-select bg-indigo border-indigo",fileButtonClass:"action btn bg-indigo"}),$(".form-input-styled-material").uniform({selectClass:"uniform-select text-indigo"})):console.warn("Warning - uniform.min.js is not loaded."),$("[data-popup=tooltip-custom]").tooltip({template:'<div class="tooltip"><div class="arrow border-indigo"></div><div class="tooltip-inner bg-indigo"></div></div>'}),$("[data-popup=popover-custom]").popover({template:'<div class="popover border-indigo"><div class="arrow"></div><h3 class="popover-header bg-indigo"></h3><div class="popover-body"></div></div>'}),$("[data-popup=popover-solid]").popover({template:'<div class="popover bg-indigo border-indigo"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body text-white"></div></div>'})}};document.addEventListener("DOMContentLoaded",function(){IndigoPalette.init()});