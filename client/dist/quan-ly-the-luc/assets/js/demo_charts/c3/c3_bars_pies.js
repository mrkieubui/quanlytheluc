var \u04213BarsPies={init:function(){!function(){if("undefined"!=typeof c3){var t=document.getElementById("c3-pie-chart"),e=document.getElementById("c3-donut-chart"),a=document.getElementById("c3-bar-chart"),i=document.getElementById("c3-bar-stacked-chart"),n=document.getElementById("c3-combined-chart"),o=document.getElementById("c3-scatter-chart"),d=document.querySelector(".sidebar-control");if(t){var c=c3.generate({bindto:t,size:{width:350},color:{pattern:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80"]},data:{columns:[["data1",30],["data2",120]],type:"pie"}});setTimeout(function(){c.load({columns:[["setosa",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2],["versicolor",1.4,1.5,1.5,1.3,1.5,1.3,1.6,1,1.3,1.4,1,1.5,1,1.4,1.3,1.4,1.5,1,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1,1.1,1,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1,1.3,1.2,1.3,1.3,1.1,1.3],["virginica",2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2,1.9,2.1,2,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2,2,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2,2.3,1.8]]})},4e3),setTimeout(function(){c.unload({ids:"data1"}),c.unload({ids:"data2"})},8e3),d&&d.addEventListener("click",function(){c.resize()})}if(e){var s=c3.generate({bindto:e,size:{width:350},color:{pattern:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80"]},data:{columns:[["data1",30],["data2",120]],type:"donut"},donut:{title:"Iris Petal Width"}});setTimeout(function(){s.load({columns:[["setosa",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2],["versicolor",1.4,1.5,1.5,1.3,1.5,1.3,1.6,1,1.3,1.4,1,1.5,1,1.4,1.3,1.4,1.5,1,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1,1.1,1,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1,1.3,1.2,1.3,1.3,1.1,1.3],["virginica",2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2,1.9,2.1,2,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2,2,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2,2.3,1.8]]})},4e3),setTimeout(function(){s.unload({ids:"data1"}),s.unload({ids:"data2"})},8e3),d&&d.addEventListener("click",function(){s.resize()})}if(a){var r=c3.generate({bindto:a,size:{height:400},data:{columns:[["data1",30,200,100,400,150,250],["data2",130,100,140,200,150,50]],type:"bar"},color:{pattern:["#66bb6a","#ffb980","#2ec7c9"]},bar:{width:{ratio:.5}},grid:{y:{show:!0}}});setTimeout(function(){r.load({columns:[["data3",130,-150,200,300,-200,100]]})},6e3),d&&d.addEventListener("click",function(){r.resize()})}if(i){var u=c3.generate({bindto:i,size:{height:400},color:{pattern:["#66bb6a","#42a5f5","#d87a80","#ffb980"]},data:{columns:[["data1",-30,200,200,400,-150,250],["data2",130,100,-100,200,-150,50],["data3",-230,200,200,-300,250,250]],type:"bar",groups:[["data1","data2"]]},grid:{x:{show:!0},y:{lines:[{value:0}]}}});setTimeout(function(){u.groups([["data1","data2","data3"]])},4e3),setTimeout(function(){u.load({columns:[["data4",100,-50,150,200,-300,-100]]})},8e3),setTimeout(function(){u.groups([["data1","data2","data3","data4"]])},1e4),d&&d.addEventListener("click",function(){u.resize()})}if(n){var l=c3.generate({bindto:n,size:{height:400},color:{pattern:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3"]},data:{columns:[["data1",30,20,50,40,60,50],["data2",200,130,90,240,130,220],["data3",300,200,160,400,250,250],["data4",200,130,90,240,130,220],["data5",130,120,150,140,160,150],["data6",90,70,20,50,60,120]],type:"bar",types:{data3:"spline",data4:"line",data6:"area"},groups:[["data1","data2"]]}});d&&d.addEventListener("click",function(){l.resize()})}if(o){var f=c3.generate({size:{height:400},bindto:o,data:{xs:{setosa:"setosa_x",versicolor:"versicolor_x"},columns:[["setosa_x",3.5,3,3.2,3.1,3.6,3.9,3.4,3.4,2.9,3.1,3.7,3.4,3,3,4,4.4,3.9,3.5,3.8,3.8,3.4,3.7,3.6,3.3,3.4,3,3.4,3.5,3.4,3.2,3.1,3.4,4.1,4.2,3.1,3.2,3.5,3.6,3,3.4,3.5,2.3,3.2,3.5,3.8,3,3.8,3.2,3.7,3.3],["versicolor_x",3.2,3.2,3.1,2.3,2.8,2.8,3.3,2.4,2.9,2.7,2,3,2.2,2.9,2.9,3.1,3,2.7,2.2,2.5,3.2,2.8,2.5,2.8,2.9,3,2.8,3,2.9,2.6,2.4,2.4,2.7,2.7,3,3.4,3.1,2.3,3,2.5,2.6,3,2.6,2.3,2.7,3,2.9,2.9,2.5,2.8],["setosa",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2],["versicolor",1.4,1.5,1.5,1.3,1.5,1.3,1.6,1,1.3,1.4,1,1.5,1,1.4,1.3,1.4,1.5,1,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1,1.1,1,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1,1.3,1.2,1.3,1.3,1.1,1.3]],type:"scatter"},color:{pattern:["#4CAF50","#ef534f"]},grid:{y:{show:!0}},point:{r:5},axis:{x:{label:"Sepal.Width",tick:{fit:!1}},y:{label:"Petal.Width"}}});setTimeout(function(){f.load({xs:{virginica:"virginica_x"},columns:[["virginica_x",3.3,2.7,3,2.9,3,3,2.5,2.9,2.5,3.6,3.2,2.7,3,2.5,2.8,3.2,3,3.8,2.6,2.2,3.2,2.8,2.8,2.7,3.3,3.2,2.8,3,2.8,3,2.8,3.8,2.8,2.8,2.6,3,3.4,3.1,3,3.1,3.1,3.1,2.7,3.2,3.3,3,2.5,3,3.4,3],["virginica",2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2,1.9,2.1,2,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2,2,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2,2.3,1.8]]})},4e3),setTimeout(function(){f.unload({ids:"setosa"})},8e3),setTimeout(function(){f.load({columns:[["virginica",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2]]})},1e4),d&&d.addEventListener("click",function(){f.resize()})}}else console.warn("Warning - c3.min.js is not loaded.")}()}};document.addEventListener("DOMContentLoaded",function(){\u04213BarsPies.init()});