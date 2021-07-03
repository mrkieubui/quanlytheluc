var D3BarHierarchy={init:function(){!function(){if("undefined"!=typeof d3){var t=document.getElementById("d3-hierarchical-bars"),e=400;if(t){var n=d3.select(t),r={top:25,right:40,bottom:20,left:130},a=n.node().getBoundingClientRect().width-r.left-r.right,i=(e=e-r.top-r.bottom-5,750),l=d3.scale.linear().range([0,a]),o=d3.scale.ordinal().range(["#31a354","#c7e9bf"]),c=d3.svg.axis().scale(l).orient("top"),s=n.append("svg"),d=s.attr("width",a+r.left+r.right).attr("height",e+r.top+r.bottom).append("g").attr("transform","translate("+r.left+","+r.top+")"),u=d3.layout.partition().value(function(t){return t.size});function f(t,e){if(t.children&&!this.__transition__){var n=i+25*t.children.length,r=d.selectAll(".enter").attr("class","exit");r.selectAll("rect").filter(function(e){return e===t}).style("fill-opacity",1e-6);var a=h(t).attr("transform",p(e)).style("opacity",1);a.select("text").style("fill-opacity",1e-6),a.select("rect").style("fill",o(!0)),l.domain([0,d3.max(t.children,function(t){return t.value})]).nice(),d.selectAll(".d3-axis-horizontal").transition().duration(i).call(c);var s=a.transition().duration(i).delay(function(t,e){return 25*e}).attr("transform",function(t,e){return"translate(0,"+30*e*1.2+")"});s.select("text").style("fill-opacity",1),s.select("rect").attr("width",function(t){return l(t.value)}).style("fill",function(t){return o(!!t.children)}),r.transition().duration(i).style("opacity",1e-6).remove().selectAll("rect").attr("width",function(t){return l(t.value)}),d.select(".d3-bars-background").datum(t).transition().duration(n),t.index=e}}function h(t){var e=d.insert("g",".d3-axis-vertical").attr("class","enter").attr("transform","translate(0,5)").selectAll("g").data(t.children).enter().append("g").style("cursor",function(t){return t.children?"pointer":null}).on("click",f);return e.append("text").attr("class","d3-text").attr("x",-6).attr("y",15).attr("dy",".35em").style("text-anchor","end").text(function(t){return t.name}),e.append("rect").attr("width",function(t){return l(t.value)}).attr("height",30),e}function p(t){var e=0;return function(n){var r="translate("+e+","+30*t*1.2+")";return e+=l(n.value),r}}d3.json("../../../../global_assets/demo_data/d3/bars/bars_hierarchical.json",function(t,e){u.nodes(e),l.domain([0,e.value]).nice(),f(e,0)}),d.append("rect").attr("class","d3-bars-background").attr("width",a).attr("height",e).style("fill","transparent").on("click",function(t){if(t.parent&&!this.__transition__){var e=i+25*t.children.length,n=d.selectAll(".enter").attr("class","exit"),r=h(t.parent).attr("transform",function(t,e){return"translate(0,"+30*e*1.2+")"}).style("opacity",1e-6);r.select("rect").style("fill",function(t){return o(!!t.children)}).filter(function(e){return e===t}).style("fill-opacity",1e-6),l.domain([0,d3.max(t.parent.children,function(t){return t.value})]).nice(),d.selectAll(".d3-axis-horizontal").transition().duration(i).call(c),r.transition().duration(e).style("opacity",1).select("rect").attr("width",function(t){return l(t.value)}).each("end",function(e){e===t&&d3.select(this).style("fill-opacity",null)});var a=n.selectAll("g").transition().duration(i).delay(function(t,e){return 25*e}).attr("transform",p(t.index));a.select("text").style("fill-opacity",1e-6),a.select("rect").attr("width",function(t){return l(t.value)}).style("fill",o(!0)),n.transition().duration(e).remove(),d.select(".d3-bars-background").datum(t.parent).transition().duration(e)}}),d.append("g").attr("class","d3-axis d3-axis-horizontal"),window.addEventListener("resize",g);var y=document.querySelector(".sidebar-control");function g(){a=n.node().getBoundingClientRect().width-r.left-r.right,s.attr("width",a+r.left+r.right),d.attr("width",a+r.left+r.right),l.range([0,a]),d.selectAll(".d3-axis-horizontal").call(c),d.selectAll(".enter rect").attr("width",function(t){return l(t.value)})}y&&y.addEventListener("click",g)}}else console.warn("Warning - d3.min.js is not loaded.")}()}};document.addEventListener("DOMContentLoaded",function(){D3BarHierarchy.init()});