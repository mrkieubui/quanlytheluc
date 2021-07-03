var D3LineDifference={init:function(){!function(){if("undefined"!=typeof d3){var t=document.getElementById("d3-difference"),e=400;if(t){var a=d3.select(t),n={top:5,right:10,bottom:20,left:40},r=a.node().getBoundingClientRect().width-n.left-n.right,i=(e=e-n.top-n.bottom-5,d3.time.format("%Y%m%d").parse),d=d3.time.scale().range([0,r]),o=d3.scale.linear().range([e,0]),l=d3.svg.axis().scale(d).orient("bottom").ticks(6),c=d3.svg.axis().scale(o).orient("left"),s=a.append("svg"),p=s.attr("width",r+n.left+n.right).attr("height",e+n.top+n.bottom).append("g").attr("transform","translate("+n.left+","+n.top+")"),f=d3.svg.area().interpolate("basis").x(function(t){return d(t.date)}).y(function(t){return o(t["New York"])}),u=d3.svg.area().interpolate("basis").x(function(t){return d(t.date)}).y1(function(t){return o(t["New York"])});d3.tsv("http://demo.interface.club/limitless/demo/Template/global_assets/demo_data/d3/lines/lines_difference.tsv",function(t,a){a.forEach(function(t){t.date=i(t.date),t["New York"]=+t["New York"],t["San Francisco"]=+t["San Francisco"]}),p.datum(a),d.domain(d3.extent(a,function(t){return t.date})),o.domain([d3.min(a,function(t){return Math.min(t["New York"],t["San Francisco"])}),d3.max(a,function(t){return Math.max(t["New York"],t["San Francisco"])})]),p.append("clipPath").attr("id","clip-below").append("path").attr("d",u.y0(e)),p.append("clipPath").attr("id","clip-above").append("path").attr("d",u.y0(0)),p.append("path").attr("class","area mask-above").attr("clip-path","url(#clip-above)").attr("fill","#d87a80").attr("d",u.y0(function(t){return o(t["San Francisco"])})),p.append("path").attr("class","area mask-below").attr("clip-path","url(#clip-below)").attr("fill","#5ab1ef").attr("d",u),p.append("path").attr("class","d3-line d3-line-medium").style("stroke","#e5cf0d").attr("d",f),p.append("g").attr("class","d3-axis d3-axis-horizontal").attr("transform","translate(0,"+e+")").call(l),p.append("g").attr("class","d3-axis d3-axis-vertical").call(c).append("text").attr("class","d3-axis-title").attr("transform","rotate(-90)").attr("y",10).attr("dy",".71em").style("text-anchor","end").text("Temperature (\xbaF)")}),window.addEventListener("resize",h);var m=document.querySelector(".sidebar-control");function h(){r=a.node().getBoundingClientRect().width-n.left-n.right,s.attr("width",r+n.left+n.right),p.attr("width",r+n.left+n.right),d.range([0,r]),p.selectAll(".d3-axis-horizontal").call(l),p.selectAll(".d3-line").attr("d",f),p.select("#clip-below path").attr("d",u.y0(e)),p.select("#clip-above path").attr("d",u.y0(0)),p.select(".mask-above").attr("d",u.y0(function(t){return o(t["San Francisco"])})),p.select(".mask-below").attr("d",u)}m&&m.addEventListener("click",h)}}else console.warn("Warning - d3.min.js is not loaded.")}()}};document.addEventListener("DOMContentLoaded",function(){D3LineDifference.init()});