var DatatableBasic={init:function(){!function(){if($().DataTable){$.extend($.fn.dataTable.defaults,{autoWidth:!1,columnDefs:[{orderable:!1,width:100,targets:[5]}],dom:'<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',language:{search:"<span>Filter:</span> _INPUT_",searchPlaceholder:"Type to filter...",lengthMenu:"<span>Show:</span> _MENU_",paginate:{first:"First",last:"Last",next:"rtl"==$("html").attr("dir")?"&larr;":"&rarr;",previous:"rtl"==$("html").attr("dir")?"&rarr;":"&larr;"}}}),$(".datatable-basic").DataTable(),$(".datatable-pagination").DataTable({pagingType:"simple",language:{paginate:{next:"rtl"==$("html").attr("dir")?"Next &larr;":"Next &rarr;",previous:"rtl"==$("html").attr("dir")?"&rarr; Prev":"&larr; Prev"}}}),$(".datatable-save-state").DataTable({stateSave:!0});var a=$(".datatable-scroll-y").DataTable({autoWidth:!0,scrollY:300,language:{search:!1,lengthMenu:"<span>Show:</span> _MENU_",paginate:{first:"First",last:"Last",next:"rtl"==$("html").attr("dir")?"&larr;":"&rarr;",previous:"rtl"==$("html").attr("dir")?"&rarr;":"&larr;"}}});$(".sidebar-control").on("click",function(){a.columns.adjust().draw()})}else console.warn("Warning - datatables.min.js is not loaded.")}(),$().select2?$(".dataTables_length select").select2({minimumResultsForSearch:1/0,dropdownAutoWidth:!0,width:"auto"}):console.warn("Warning - select2.min.js is not loaded.")}};document.addEventListener("DOMContentLoaded",function(){DatatableBasic.init()});