var MediaLibrary={init:function(){$().DataTable?($(".media-library").DataTable({autoWidth:!1,columnDefs:[{orderable:!1,width:20,targets:0},{orderable:!1,width:100,targets:1},{orderable:!1,width:90,targets:6}],order:[[2,"asc"]],lengthMenu:[25,50,75,100],displayLength:25,dom:'<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',language:{search:"<span>Filter:</span> _INPUT_",searchPlaceholder:"Type to filter...",lengthMenu:"<span>Show:</span> _MENU_",paginate:{first:"First",last:"Last",next:"rtl"==$("html").attr("dir")?"&larr;":"&rarr;",previous:"rtl"==$("html").attr("dir")?"&rarr;":"&larr;"}}}),$(".media-library tbody td input[type=checkbox]").on("change",function(){$(this).is(":checked")?($(this).parents("tr").addClass("table-active"),$.uniform.update()):($(this).parents("tr").removeClass("table-active"),$.uniform.update())})):console.warn("Warning - datatables.min.js is not loaded."),$().fancybox?$('[data-popup="lightbox"]').fancybox({padding:3}):console.warn("Warning - fancybox.min.js is not loaded."),$().uniform?$(".form-input-styled").uniform():console.warn("Warning - uniform.min.js is not loaded."),$().select2?$(".dataTables_length select").select2({minimumResultsForSearch:1/0,dropdownAutoWidth:!0,width:"auto"}):console.warn("Warning - select2.min.js is not loaded.")}};document.addEventListener("DOMContentLoaded",function(){MediaLibrary.init()});