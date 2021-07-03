var FileUpload={init:function(){!function(){if($().fileinput){var i='<div class="modal-dialog modal-lg" role="document">\n  <div class="modal-content">\n    <div class="modal-header align-items-center">\n      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons btn-group"></div>\n      <div class="kv-zoom-body file-zoom-content"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n',e={toggleheader:"btn btn-light btn-icon btn-header-toggle btn-sm",fullscreen:"btn btn-light btn-icon btn-sm",borderless:"btn btn-light btn-icon btn-sm",close:"btn btn-light btn-icon btn-sm"},o={prev:'<i class="icon-arrow-left32"></i>',next:'<i class="icon-arrow-right32"></i>',toggleheader:'<i class="icon-menu-open"></i>',fullscreen:'<i class="icon-screen-full"></i>',borderless:'<i class="icon-alignment-unalign"></i>',close:'<i class="icon-cross2 font-size-base"></i>'},s={zoomClass:"",zoomIcon:'<i class="icon-zoomin3"></i>',dragClass:"p-2",dragIcon:'<i class="icon-three-bars"></i>',removeClass:"",removeErrorClass:"text-danger",removeIcon:'<i class="icon-bin"></i>',indicatorNew:'<i class="icon-file-plus text-success"></i>',indicatorSuccess:'<i class="icon-checkmark3 file-icon-large text-success"></i>',indicatorError:'<i class="icon-cross2 text-danger"></i>',indicatorLoading:'<i class="icon-spinner2 spinner text-muted"></i>'};$(".file-input").fileinput({browseLabel:"Browse",browseIcon:'<i class="icon-file-plus mr-2"></i>',uploadIcon:'<i class="icon-file-upload2 mr-2"></i>',removeIcon:'<i class="icon-cross2 font-size-base mr-2"></i>',layoutTemplates:{icon:'<i class="icon-file-check"></i>',modal:i},initialCaption:"No file selected",previewZoomButtonClasses:e,previewZoomButtonIcons:o,fileActionSettings:s}),$(".file-input-custom").fileinput({previewFileType:"image",browseLabel:"Select",browseClass:"btn bg-slate-700",browseIcon:'<i class="icon-image2 mr-2"></i>',removeLabel:"Remove",removeClass:"btn btn-danger",removeIcon:'<i class="icon-cancel-square mr-2"></i>',uploadClass:"btn bg-teal-400",uploadIcon:'<i class="icon-file-upload mr-2"></i>',layoutTemplates:{icon:'<i class="icon-file-check"></i>',modal:i},initialCaption:"Please select image",mainClass:"input-group",previewZoomButtonClasses:e,previewZoomButtonIcons:o,fileActionSettings:s}),$(".file-input-advanced").fileinput({browseLabel:"Browse",browseClass:"btn btn-light",removeClass:"btn btn-light",uploadClass:"btn bg-success-400",browseIcon:'<i class="icon-file-plus mr-2"></i>',uploadIcon:'<i class="icon-file-upload2 mr-2"></i>',removeIcon:'<i class="icon-cross2 font-size-base mr-2"></i>',layoutTemplates:{icon:'<i class="icon-file-check"></i>',main1:"{preview}\n<div class='input-group {class}'>\n   <div class='input-group-prepend'>\n       {browse}\n   </div>\n   {caption}\n   <div class='input-group-append'>\n       {upload}\n       {remove}\n   </div>\n</div>",modal:i},initialCaption:"No file selected",previewZoomButtonClasses:e,previewZoomButtonIcons:o,fileActionSettings:s}),$(".file-input-extensions").fileinput({browseLabel:"Browse",browseIcon:'<i class="icon-file-plus mr-2"></i>',uploadIcon:'<i class="icon-file-upload2 mr-2"></i>',removeIcon:'<i class="icon-cross2 font-size-base mr-2"></i>',layoutTemplates:{icon:'<i class="icon-file-check"></i>',modal:i},maxFilesNum:10,allowedFileExtensions:["jpg","gif","png","txt"],initialCaption:"No file selected",previewZoomButtonClasses:e,previewZoomButtonIcons:o,fileActionSettings:s}),$(".file-input-preview").fileinput({browseLabel:"Browse",browseIcon:'<i class="icon-file-plus mr-2"></i>',uploadIcon:'<i class="icon-file-upload2 mr-2"></i>',removeIcon:'<i class="icon-cross2 font-size-base mr-2"></i>',layoutTemplates:{icon:'<i class="icon-file-check"></i>',modal:i},initialPreview:["../../../../global_assets/images/demo/images/1.png","../../../../global_assets/images/demo/images/2.png"],initialPreviewConfig:[{caption:"Jane.jpg",size:930321,key:1,url:"{$url}",showDrag:!1},{caption:"Anna.jpg",size:1218822,key:2,url:"{$url}",showDrag:!1}],initialPreviewAsData:!0,overwriteInitial:!1,maxFileSize:100,previewZoomButtonClasses:e,previewZoomButtonIcons:o,fileActionSettings:s}),$(".file-input-overwrite").fileinput({browseLabel:"Browse",browseIcon:'<i class="icon-file-plus mr-2"></i>',uploadIcon:'<i class="icon-file-upload2 mr-2"></i>',removeIcon:'<i class="icon-cross2 font-size-base mr-2"></i>',layoutTemplates:{icon:'<i class="icon-file-check"></i>',modal:i},initialPreview:["../../../../global_assets/images/demo/images/1.png","../../../../global_assets/images/demo/images/2.png"],initialPreviewConfig:[{caption:"Jane.jpg",size:930321,key:1,url:"{$url}"},{caption:"Anna.jpg",size:1218822,key:2,url:"{$url}"}],initialPreviewAsData:!0,overwriteInitial:!0,previewZoomButtonClasses:e,previewZoomButtonIcons:o,fileActionSettings:s}),$(".file-input-ajax").fileinput({browseLabel:"Browse",uploadUrl:"http://localhost",uploadAsync:!0,maxFileCount:5,initialPreview:[],browseIcon:'<i class="icon-file-plus mr-2"></i>',uploadIcon:'<i class="icon-file-upload2 mr-2"></i>',removeIcon:'<i class="icon-cross2 font-size-base mr-2"></i>',fileActionSettings:{removeIcon:'<i class="icon-bin"></i>',removeClass:"",uploadIcon:'<i class="icon-upload"></i>',uploadClass:"",zoomIcon:'<i class="icon-zoomin3"></i>',zoomClass:"",indicatorNew:'<i class="icon-file-plus text-success"></i>',indicatorSuccess:'<i class="icon-checkmark3 file-icon-large text-success"></i>',indicatorError:'<i class="icon-cross2 text-danger"></i>',indicatorLoading:'<i class="icon-spinner2 spinner text-muted"></i>'},layoutTemplates:{icon:'<i class="icon-file-check"></i>',modal:i},initialCaption:"No file selected",previewZoomButtonClasses:e,previewZoomButtonIcons:o}),$("#btn-modify").on("click",function(){$btn=$(this),"Disable file input"==$btn.text()?($("#file-input-methods").fileinput("disable"),$btn.html("Enable file input"),alert("Hurray! I have disabled the input and hidden the upload button.")):($("#file-input-methods").fileinput("enable"),$btn.html("Disable file input"),alert("Hurray! I have reverted back the input to enabled with the upload button."))})}else console.warn("Warning - fileinput.min.js is not loaded.")}()}};document.addEventListener("DOMContentLoaded",function(){FileUpload.init()});