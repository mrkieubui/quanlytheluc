var DatatableFixedColumns={init:function(){!function(){if($().DataTable){$.extend($.fn.dataTable.defaults,{columnDefs:[{orderable:!1,width:100,targets:[5]}],dom:'<"datatable-header"fl><"datatable-scroll datatable-scroll-wrap"t><"datatable-footer"ip>',language:{search:"<span>Filter:</span> _INPUT_",searchPlaceholder:"Type to filter...",lengthMenu:"<span>Show:</span> _MENU_",paginate:{first:"First",last:"Last",next:"rtl"==$("html").attr("dir")?"&larr;":"&rarr;",previous:"rtl"==$("html").attr("dir")?"&rarr;":"&larr;"}}}),$(".datatable-fixed-left").DataTable({columnDefs:[{orderable:!1,targets:[5]},{width:"200px",targets:[0]},{width:"300px",targets:[1]},{width:"200px",targets:[5,6]},{width:"100px",targets:[4]}],scrollX:!0,scrollY:"350px",scrollCollapse:!0,fixedColumns:!0}),$(".datatable-fixed-right").DataTable({columnDefs:[{orderable:!1,targets:[5]},{width:"300px",targets:[0]},{width:"300px",targets:[1]},{width:"200px",targets:[5,6]},{width:"100px",targets:[3,4]}],scrollX:!0,scrollY:"350px",scrollCollapse:!0,fixedColumns:{leftColumns:0,rightColumns:1}}),$(".datatable-fixed-both").DataTable({columnDefs:[{orderable:!1,targets:[5]},{width:"200px",targets:[0]},{width:"100px",targets:[1]},{width:"200px",targets:[5,6]},{width:"100px",targets:[4]}],scrollX:!0,scrollY:"350px",scrollCollapse:!0,fixedColumns:{leftColumns:1,rightColumns:1}});var t=$(".datatable-fixed-complex").DataTable({autoWidth:!1,columnDefs:[{orderable:!1,targets:[5]},{width:"250px",targets:[0]},{width:"250px",targets:[1]},{width:"200px",targets:[5,6]},{width:"100px",targets:[4]}],scrollX:!0,scrollY:"350px",scrollCollapse:!0,fixedColumns:!0});setTimeout(function(){$(window).on("resize",function(){t.columns.adjust()})},100)}else console.warn("Warning - datatables.min.js is not loaded.")}(),$().select2?$(".dataTables_length select").select2({minimumResultsForSearch:1/0,dropdownAutoWidth:!0,width:"auto"}):console.warn("Warning - select2.min.js is not loaded.")}};document.addEventListener("DOMContentLoaded",function(){DatatableFixedColumns.init()});