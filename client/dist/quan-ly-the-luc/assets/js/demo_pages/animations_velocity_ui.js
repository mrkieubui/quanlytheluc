var AnimationsVelocityUi={init:function(){$().velocity?($(".velocity-animation").on("click",function(t){var n=$(this).data("animation");$(this).parents(".card").velocity("callout."+n,{stagger:500}),t.preventDefault()}),$(".velocity-transition").on("click",function(t){var n=$(this).data("transition");$(this).parents(".card").velocity("transition."+n,{stagger:1e3,duration:1e3}),t.preventDefault()}),window.setInterval(function(){$(".velocity-transition").parents(".card").removeAttr("style")},2e3)):console.warn("Warning - velocity.min.js is not loaded.")}};document.addEventListener("DOMContentLoaded",function(){AnimationsVelocityUi.init()});