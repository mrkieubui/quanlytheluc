var CardFooter={init:function(){"undefined"!=typeof Switchery?Array.prototype.slice.call(document.querySelectorAll(".form-input-switchery")).forEach(function(n){new Switchery(n)}):console.warn("Warning - switchery.min.js is not loaded."),$().bootstrapSwitch?$(".form-input-switch").bootstrapSwitch():console.warn("Warning - switch.min.js is not loaded."),$().select2?$(".form-control-select2").select2({minimumResultsForSearch:1/0}):console.warn("Warning - select2.min.js is not loaded."),$().TouchSpin?($(".form-control-touchspin").TouchSpin({min:0,max:100,step:.1,decimals:2,postfix:"%"}),$(".form-control-touchspin-vertical").TouchSpin({verticalbuttons:!0,verticalupclass:"icon-arrow-up22",verticaldownclass:"icon-arrow-down22"})):console.warn("Warning - touchspin.min.js is not loaded."),$().multiselect?$(".form-control-multiselect").multiselect():console.warn("Warning - bootstrap-multiselect.js is not loaded."),function(){if("undefined"!=typeof noUiSlider){var n=document.getElementById("noui-slider-demo");noUiSlider.create(n,{start:60,connect:"lower",tooltips:!0,range:{min:0,max:100}});var o=document.getElementById("noui-slider-demo2");noUiSlider.create(o,{start:[20,80],behaviour:"drag",connect:!0,tooltips:!0,range:{min:0,max:100}})}else console.warn("Warning - nouislider.min.js is not loaded.")}(),$().uniform?$(".form-input-styled").uniform({fileButtonClass:"action btn bg-pink-400 btn-icon",fileButtonHtml:'<i class="icon-plus2"></i>'}):console.warn("Warning - switch.min.js is not loaded."),$().slider?($(".jui-slider-basic").slider({range:"min",value:50,disabled:!0}),$(".jui-slider-range").slider({range:!0,min:0,max:60,values:[10,50]})):console.warn("Warning - jQuery UI components are not loaded.")}};document.addEventListener("DOMContentLoaded",function(){CardFooter.init()});