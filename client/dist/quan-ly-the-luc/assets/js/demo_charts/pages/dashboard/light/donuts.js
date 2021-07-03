var DashboardDonuts={init:function(){!function(t,e){if("undefined"!=typeof d3){if($(t).length>0){var n=[{browser:"Google Adwords",icon:"<i class='icon-google mr-2'></i>",value:1047},{browser:"Social media",icon:"<i class='icon-share4 mr-2'></i>",value:2948},{browser:"Youtube video",icon:"<i class='icon-youtube mr-2'></i>",value:3909}],a=d3.select(t),s=d3.sum(n,function(t){return t.value}),i=d3.tip().attr("class","d3-tip").offset([-10,0]).direction("e").html(function(t){return'<ul class="list-unstyled mb-1"><li><div class="font-size-base mb-1 mt-1">'+t.data.icon+t.data.browser+'</div></li><li>Visits: &nbsp;<span class="font-weight-semibold float-right">'+t.value+'</span></li><li>Share: &nbsp;<span class="font-weight-semibold float-right">'+(100/(s/t.value)).toFixed(2)+"%</span></li></ul>"}),l=a.append("svg").call(i).attr("width",42).attr("height",42).append("g").attr("transform","translate(21,21)"),r=d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3*Math.PI).value(function(t){return t.value}),o=d3.svg.arc().outerRadius(19).innerRadius(9.5),d=d3.scale.ordinal().range(["#66BB6A","#9575CD","#FF7043"]),u=l.selectAll(".d3-arc").data(r(n)).enter().append("g").attr("class","d3-arc d3-slice-border").style("cursor","pointer").append("path").style("fill",function(t){return d(t.data.value)});u.on("mouseover",function(t,e){d3.select(this).transition().duration(500).ease("elastic").attr("transform",function(t){return t.midAngle=(t.endAngle-t.startAngle)/2+t.startAngle,"translate("+2*Math.sin(t.midAngle)+","+2*-Math.cos(t.midAngle)+")"})}).on("mousemove",function(t){i.show(t).style("top",d3.event.pageY-40+"px").style("left",d3.event.pageX+30+"px")}).on("mouseout",function(t,e){d3.select(this).transition().duration(500).ease("bounce").attr("transform","translate(0,0)"),i.hide(t)}),u.transition().delay(function(t,e){return 500*e}).duration(500).attrTween("d",function(t){var e=d3.interpolate(t.startAngle,t.endAngle);return function(n){return t.endAngle=e(n),o(t)}})}}else console.warn("Warning - d3.min.js is not loaded.")}("#campaigns-donut"),function(t,e){if("undefined"!=typeof d3){if($(t).length>0){var n=[{status:"Active campaigns",icon:"<i class='icon-checkmark3 text-success mr-2'></i>",value:439},{status:"Closed campaigns",icon:"<i class='icon-cross2 text-danger mr-2'></i>",value:290},{status:"Pending campaigns",icon:"<i class='icon-history text-blue mr-2'></i>",value:190},{status:"Campaigns on hold",icon:"<i class='icon-infinite text-grey mr-2'></i>",value:148}],a=d3.select(t),s=d3.sum(n,function(t){return t.value}),i=d3.tip().attr("class","d3-tip").offset([-10,0]).direction("e").html(function(t){return'<ul class="list-unstyled mb-1"><li><div class="font-size-base mb-1 mt-1">'+t.data.icon+t.data.status+'</div></li><li>Total: &nbsp;<span class="font-weight-semibold float-right">'+t.value+'</span></li><li>Share: &nbsp;<span class="font-weight-semibold float-right">'+(100/(s/t.value)).toFixed(2)+"%</span></li></ul>"}),l=a.append("svg").call(i).attr("width",42).attr("height",42).append("g").attr("transform","translate(21,21)"),r=d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3*Math.PI).value(function(t){return t.value}),o=d3.svg.arc().outerRadius(19).innerRadius(9.5),d=d3.scale.ordinal().range(["#29B6F6","#EF5350","#81C784","#999"]),u=l.selectAll(".d3-arc").data(r(n)).enter().append("g").attr("class","d3-arc d3-slice-border").style("cursor","pointer").append("path").style("fill",function(t){return d(t.data.value)});u.on("mouseover",function(t,e){d3.select(this).transition().duration(500).ease("elastic").attr("transform",function(t){return t.midAngle=(t.endAngle-t.startAngle)/2+t.startAngle,"translate("+2*Math.sin(t.midAngle)+","+2*-Math.cos(t.midAngle)+")"})}).on("mousemove",function(t){i.show(t).style("top",d3.event.pageY-40+"px").style("left",d3.event.pageX+30+"px")}).on("mouseout",function(t,e){d3.select(this).transition().duration(500).ease("bounce").attr("transform","translate(0,0)"),i.hide(t)}),u.transition().delay(function(t,e){return 500*e}).duration(500).attrTween("d",function(t){var e=d3.interpolate(t.startAngle,t.endAngle);return function(n){return t.endAngle=e(n),o(t)}})}}else console.warn("Warning - d3.min.js is not loaded.")}("#campaign-status-pie"),function(t,e){if("undefined"!=typeof d3){if($(t).length>0){var n=[{status:"Pending tickets",icon:"<i class='icon-history text-blue mr-2'></i>",value:295},{status:"Resolved tickets",icon:"<i class='icon-checkmark3 text-success mr-2'></i>",value:189},{status:"Closed tickets",icon:"<i class='icon-cross2 text-danger mr-2'></i>",value:277}],a=d3.select(t),s=d3.sum(n,function(t){return t.value}),i=d3.tip().attr("class","d3-tip").offset([-10,0]).direction("e").html(function(t){return'<ul class="list-unstyled mb-1"><li><div class="font-size-base mb-1 mt-1">'+t.data.icon+t.data.status+'</div></li><li>Total: &nbsp;<span class="font-weight-semibold float-right">'+t.value+'</span></li><li>Share: &nbsp;<span class="font-weight-semibold float-right">'+(100/(s/t.value)).toFixed(2)+"%</span></li></ul>"}),l=a.append("svg").call(i).attr("width",42).attr("height",42).append("g").attr("transform","translate(21,21)"),r=d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3*Math.PI).value(function(t){return t.value}),o=d3.svg.arc().outerRadius(19).innerRadius(9.5),d=d3.scale.ordinal().range(["#29B6F6","#66BB6A","#EF5350"]),u=l.selectAll(".d3-arc").data(r(n)).enter().append("g").attr("class","d3-arc d3-slice-border").style("cursor","pointer").append("path").style("fill",function(t){return d(t.data.value)});u.on("mouseover",function(t,e){d3.select(this).transition().duration(500).ease("elastic").attr("transform",function(t){return t.midAngle=(t.endAngle-t.startAngle)/2+t.startAngle,"translate("+2*Math.sin(t.midAngle)+","+2*-Math.cos(t.midAngle)+")"})}).on("mousemove",function(t){i.show(t).style("top",d3.event.pageY-40+"px").style("left",d3.event.pageX+30+"px")}).on("mouseout",function(t,e){d3.select(this).transition().duration(500).ease("bounce").attr("transform","translate(0,0)"),i.hide(t)}),u.transition().delay(function(t,e){return 500*e}).duration(500).attrTween("d",function(t){var e=d3.interpolate(t.startAngle,t.endAngle);return function(n){return t.endAngle=e(n),o(t)}})}}else console.warn("Warning - d3.min.js is not loaded.")}("#tickets-status")}};document.addEventListener("DOMContentLoaded",function(){DashboardDonuts.init()});