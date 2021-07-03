var D3BarHorizontal={init:function(){!function(){if("undefined"!=typeof d3){var t=document.getElementById("d3-bar-horizontal"),e=400;if(t){var a=d3.select(t),n={top:20,right:10,bottom:5,left:40},r=a.node().getBoundingClientRect().width-n.left-n.right,l=(e=e-n.top-n.bottom-5,d3.format(",.0f")),i=d3.scale.category20c(),d=d3.scale.linear().range([0,r]),o=d3.scale.ordinal().rangeRoundBands([0,e],.1),s=d3.svg.axis().scale(d).orient("top").tickSize(-e),c=d3.svg.axis().scale(o).orient("left").tickSize(5),u=a.append("svg"),f=u.attr("width",r+n.left+n.right).attr("height",e+n.top+n.bottom).append("g").attr("transform","translate("+n.left+","+n.top+")");d3.csv("../../../../global_assets/demo_data/d3/bars/bars_horizontal.csv",function(t){t.forEach(function(t){t.value=+t.value}),t.sort(function(t,e){return e.value-t.value}),d.domain([0,d3.max(t,function(t){return t.value})]),o.domain(t.map(function(t){return t.name})),f.append("g").attr("class","d3-axis d3-axis-horizontal").call(s),f.append("g").attr("class","d3-axis d3-axis-vertical").call(c),f.selectAll(".d3-axis line, .d3-axis path").attr("stroke-width",0);var e=f.selectAll(".d3-bar-group").data(t).enter().append("g").attr("class","d3-bar-group").attr("fill",function(t,e){return i(e)}).attr("transform",function(t){return"translate(0,"+o(t.name)+")"});e.append("rect").attr("class","d3-bar").attr("width",function(t){return d(t.value)}).attr("height",o.rangeBand()),e.append("text").attr("class","d3-label-value").attr("x",function(t){return d(t.value)}).attr("y",o.rangeBand()/2).attr("dx",-10).attr("dy",".35em").style("text-anchor","end").style("fill","#fff").style("font-size",12).text(function(t){return l(t.value)})}),window.addEventListener("resize",v);var g=document.querySelector(".sidebar-control");function v(){r=a.node().getBoundingClientRect().width-n.left-n.right,u.attr("width",r+n.left+n.right),f.attr("width",r+n.left+n.right),d.range([0,r]),f.selectAll(".d3-axis-horizontal").call(s),f.selectAll(".d3-bar").attr("width",function(t){return d(t.value)}),f.selectAll(".d3-label-value").attr("x",function(t){return d(t.value)})}g&&g.addEventListener("click",v)}}else console.warn("Warning - d3.min.js is not loaded.")}()}};document.addEventListener("DOMContentLoaded",function(){D3BarHorizontal.init()});