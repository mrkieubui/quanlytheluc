var DualListboxes={init:function(){$().bootstrapDualListbox?($(".listbox").bootstrapDualListbox(),$(".listbox-no-selection").bootstrapDualListbox({preserveSelectionOnMove:"moved",moveOnSelect:!1}),$(".listbox-filtered-results").bootstrapDualListbox({nonSelectedListLabel:"Non-selected",selectedListLabel:"Selected",preserveSelectionOnMove:"moved",moveOnSelect:!1,nonSelectedFilter:"Biophysics|Econophysics|Geophysics|Thermodynamics"}),$(".listbox-filter-disabled").bootstrapDualListbox({showFilterInputs:!1}),$(".listbox-tall").bootstrapDualListbox({selectorMinimalHeight:300}),$(".listbox-custom-text").bootstrapDualListbox({moveOnSelect:!1,infoText:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 {0}",infoTextFiltered:'<span class="badge bg-warning-400">\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u043d\u043e</span> {0} \u0438\u0437 {1}',infoTextEmpty:"\u041f\u0443\u0441\u0442\u043e\u0439 \u043b\u0438\u0441\u0442",filterPlaceHolder:"\u0424\u0438\u043b\u044c\u0442\u0440",filterTextClear:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),$(".listbox-dynamic-options").bootstrapDualListbox({moveOnSelect:!1}),$(".listbox-add").on("click",function(){$(".listbox-dynamic-options").append('<option value="apples">Apples</option><option value="oranges" selected>Oranges</option>'),$(".listbox-dynamic-options").trigger("bootstrapDualListbox.refresh")}),$(".listbox-add-clear").on("click",function(){$(".listbox-dynamic-options").append('<option value="apples">Apples</option><option value="oranges" selected>Oranges</option>'),$(".listbox-dynamic-options").trigger("bootstrapDualListbox.refresh",!0)})):console.warn("Warning - duallistbox.min.js is not loaded.")}};document.addEventListener("DOMContentLoaded",function(){DualListboxes.init()});