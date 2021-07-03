var D3BarStacked={init:function(){!function(){if("undefined"!=typeof d3){var t=document.getElementById("d3-bar-stacked"),e=400;if(t){var a=d3.select(t),n={top:5,right:10,bottom:20,left:40},r=a.node().getBoundingClientRect().width-n.left-n.right,d=(e=e-n.top-n.bottom-5,d3.scale.ordinal().rangeRoundBands([0,r],.1,.5)),l=d3.scale.linear().rangeRound([e,0]),o=d3.scale.ordinal().range(["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56","#d0743c","#ff8c00"]),i=d3.svg.axis().scale(d).orient("bottom"),s=d3.svg.axis().scale(l).orient("left").tickFormat(d3.format(".2s")),c=a.append("svg"),u=c.attr("width",r+n.left+n.right).attr("height",e+n.top+n.bottom).append("g").attr("transform","translate("+n.left+","+n.top+")");d3.csv("../../../../global_assets/demo_data/d3/bars/bars_stacked.csv",function(t,a){o.domain(d3.keys(a[0]).filter(function(t){return"State"!==t})),a.forEach(function(t){var e=0;t.ages=o.domain().map(function(a){return{name:a,y0:e,y1:e+=+t[a]}}),t.total=t.ages[t.ages.length-1].y1}),a.sort(function(t,e){return e.total-t.total}),d.domain(a.map(function(t){return t.State})),l.domain([0,d3.max(a,function(t){return t.total})]),u.append("g").attr("class","d3-axis d3-axis-horizontal").attr("transform","translate(0,"+e+")").call(i),u.append("g").attr("class","d3-axis d3-axis-vertical").call(s).append("text").attr("class","d3-axis-title").attr("transform","rotate(-90)").attr("y",10).attr("dy",".71em").style("text-anchor","end").text("Population"),u.selectAll(".bar-group").data(a).enter().append("g").attr("class","bar-group").attr("transform",function(t){return"translate("+d(t.State)+",0)"}).selectAll(".d3-bar").data(function(t){return t.ages}).enter().append("rect").attr("class","d3-bar").attr("width",d.rangeBand()).attr("y",function(t){return l(t.y1)}).attr("height",function(t){return l(t.y0)-l(t.y1)}).style("fill",function(t){return o(t.name)});var n=u.selectAll(".d3-legend").data(o.domain().slice().reverse()).enter().append("g").attr("class","d3-legend").attr("transform",function(t,e){return"translate(0,"+20*e+")"});n.append("rect").attr("x",r-18).attr("width",18).attr("height",18).style("fill",o),n.append("text").attr("x",r-24).attr("y",9).attr("dy",".35em").style("text-anchor","end").text(function(t){return t})}),window.addEventListener("resize",g);var f=document.querySelector(".sidebar-control");function g(){r=a.node().getBoundingClientRect().width-n.left-n.right,c.attr("width",r+n.left+n.right),u.attr("width",r+n.left+n.right),d.rangeRoundBands([0,r],.1,.5),u.selectAll(".d3-axis-horizontal").call(i),u.selectAll(".bar-group").attr("transform",function(t){return"translate("+d(t.State)+",0)"}),u.selectAll(".d3-bar").attr("width",d.rangeBand()).attr("x",function(t){return d(t.name)}),u.selectAll(".d3-legend text").attr("x",r-24),u.selectAll(".d3-legend rect").attr("x",r-18)}f&&f.addEventListener("click",g)}}else console.warn("Warning - d3.min.js is not loaded.")}()}};document.addEventListener("DOMContentLoaded",function(){D3BarStacked.init()});