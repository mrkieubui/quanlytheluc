var EchartsFunnelLeftLight={init:function(){!function(){if("undefined"!=typeof echarts){var e=document.getElementById("funnel_left");if(e){var t=echarts.init(e);t.setOption({color:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],textStyle:{fontFamily:"Roboto, Arial, Verdana, sans-serif",fontSize:13},title:{text:"Browser popularity",subtext:"Open source information",left:"center",textStyle:{fontSize:17,fontWeight:500},subtextStyle:{fontSize:12}},tooltip:{trigger:"item",backgroundColor:"rgba(0,0,0,0.75)",padding:[10,15],textStyle:{fontSize:13,fontFamily:"Roboto, sans-serif"},formatter:"{a} <br/>{b}: {c}%"},legend:{orient:"vertical",top:"center",left:0,data:["IE","Opera","Safari","Firefox","Chrome"],itemHeight:8,itemWidth:8},series:[{name:"Statistics",type:"funnel",left:"25%",right:"25%",top:"16%",height:"84%",funnelAlign:"left",itemStyle:{normal:{borderColor:"#fff",borderWidth:1,label:{position:"right"}}},data:[{value:60,name:"Safari"},{value:40,name:"Firefox"},{value:20,name:"Chrome"},{value:80,name:"Opera"},{value:100,name:"IE"}]}]})}var n,i=function(){e&&t.resize()},a=document.querySelector(".sidebar-control");a&&a.addEventListener("click",i),window.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(function(){i()},200)})}else console.warn("Warning - echarts.min.js is not loaded.")}()}};document.addEventListener("DOMContentLoaded",function(){EchartsFunnelLeftLight.init()});