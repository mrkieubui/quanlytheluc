var LoginValidation={init:function(){$().uniform?$(".form-input-styled").uniform():console.warn("Warning - uniform.min.js is not loaded."),$().validate?$(".form-validate").validate({ignore:"input[type=hidden], .select2-search__field",errorClass:"validation-invalid-label",successClass:"validation-valid-label",validClass:"validation-valid-label",highlight:function(a,e){$(a).removeClass(e)},unhighlight:function(a,e){$(a).removeClass(e)},success:function(a){a.addClass("validation-valid-label").text("Success.")},errorPlacement:function(a,e){e.parents().hasClass("form-check")?a.appendTo(e.parents(".form-check").parent()):e.parents().hasClass("form-group-feedback")||e.hasClass("select2-hidden-accessible")?a.appendTo(e.parent()):e.parent().is(".uniform-uploader, .uniform-select")||e.parents().hasClass("input-group")?a.appendTo(e.parent().parent()):a.insertAfter(e)},rules:{password:{minlength:5}},messages:{username:"Enter your username",password:{required:"Enter your password",minlength:jQuery.validator.format("At least {0} characters required")}}}):console.warn("Warning - validate.min.js is not loaded.")}};document.addEventListener("DOMContentLoaded",function(){LoginValidation.init()});