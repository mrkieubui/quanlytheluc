var FormLayouts={init:function(){!function(){function n(n){return n.id?"<i class='icon-"+$(n.element).data("icon")+"'></i>"+n.text:n.text}$().select2?($(".form-control-select2").select2(),$(".form-control-select2-icons").select2({templateResult:n,minimumResultsForSearch:1/0,templateSelection:n,escapeMarkup:function(n){return n}})):console.warn("Warning - select2.min.js is not loaded.")}(),$().uniform?$(".form-input-styled").uniform({fileButtonClass:"action btn bg-pink-400"}):console.warn("Warning - uniform.min.js is not loaded.")}};document.addEventListener("DOMContentLoaded",function(){FormLayouts.init()});