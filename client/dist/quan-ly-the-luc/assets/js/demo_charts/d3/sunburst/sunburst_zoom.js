var D3SunburstZoom={init:function(){!function(){if("undefined"!=typeof d3){var n=document.getElementById("d3-sunburst-zoom");if(n){var t=Math.min(400,400)/2,e=d3.scale.linear().range([0,2*Math.PI]),a=d3.scale.sqrt().range([0,t]),r=d3.scale.category20c(),i=d3.select(n).append("svg").attr("width",400).attr("height",400).append("g").attr("transform","translate(200,200)"),d=d3.layout.partition().value(function(n){return n.size}),o=d3.svg.arc().startAngle(function(n){return Math.max(0,Math.min(2*Math.PI,e(n.x)))}).endAngle(function(n){return Math.max(0,Math.min(2*Math.PI,e(n.x+n.dx)))}).innerRadius(function(n){return Math.max(0,a(n.y))}).outerRadius(function(n){return Math.max(0,a(n.y+n.dy))});d3.json("../../../../global_assets/demo_data/d3/sunburst/sunburst_basic.json",function(n,u){var s=i.selectAll(".d3-sunbirst").data(d.nodes(u)).enter().append("path").attr("class","d3-sunbirst d3-slice-border").attr("d",o).style("stroke-width",1).style("fill",function(n){return r((n.children?n:n.parent).name)}).on("click",function(n){s.transition().duration(750).attrTween("d",function(n){var r=d3.interpolate(e.domain(),[n.x,n.x+n.dx]),i=d3.interpolate(a.domain(),[n.y,1]),d=d3.interpolate(a.range(),[n.y?20:0,t]);return function(n,t){return t?function(t){return o(n)}:function(t){return e.domain(r(t)),a.domain(i(t)).range(d(t)),o(n)}}}(n))})})}}else console.warn("Warning - d3.min.js is not loaded.")}()}};document.addEventListener("DOMContentLoaded",function(){D3SunburstZoom.init()});