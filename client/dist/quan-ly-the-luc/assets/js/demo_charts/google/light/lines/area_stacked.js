var GoogleAreaStacked={init:function(){!function(){function e(){var e=document.getElementById("google-area-stacked"),o=google.visualization.arrayToDataTable([["Year","Cars","Trucks","Drones","Segways"],["2013",870,460,310,220],["2014",460,720,220,460],["2015",930,640,340,330],["2016",1e3,400,180,500]]);new google.visualization.AreaChart(e).draw(o,{fontName:"Roboto",height:400,fontSize:12,areaOpacity:.25,chartArea:{left:"5%",width:"94%",height:350},isStacked:!0,pointSize:7,backgroundColor:"transparent",tooltip:{textStyle:{fontName:"Roboto",fontSize:13}},lineWidth:1.5,vAxis:{title:"Number values",titleTextStyle:{fontSize:13,italic:!1,color:"#333"},textStyle:{color:"#333"},baselineColor:"#ccc",gridlines:{color:"#eee",count:10},gridarea:{count:10},minValue:0},hAxis:{textStyle:{color:"#333"}},legend:{position:"top",alignment:"center",textStyle:{color:"#333"}},series:{0:{color:"#2ec7c9"},1:{color:"#b6a2de"},2:{color:"#5ab1ef"},3:{color:"#ffb980"}}})}"undefined"!=typeof google?google.charts.load("current",{callback:function(){e();var o,t=document.querySelector(".sidebar-control");t&&t.addEventListener("click",e),window.addEventListener("resize",function(){clearTimeout(o),o=setTimeout(function(){e()},200)})},packages:["corechart"]}):console.warn("Warning - Google Charts library is not loaded.")}()}};GoogleAreaStacked.init();