(this["webpackJsonpcorona-tracker-app"]=this["webpackJsonpcorona-tracker-app"]||[]).push([[0],{60:function(e,t,a){e.exports=a(77)},65:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),s=(a(65),a(49),a(27)),i=a(14),c=a(26),m=a.n(c),u=a(31),h=a(19),d=a(20),p=a(23),f=a(21),y=a(24),E=a(30),g=a(59),v=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).state={selectedCountry:""},e}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{expand:"lg",variant:"dark",className:"navbar-container"},r.a.createElement(E.a.Brand,{href:"#home"},r.a.createElement("img",{alt:"",src:"img/logo.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","Corona Tracker"),r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(s.b,{to:"/",className:"text-light nav-link"},"World Stats"),r.a.createElement(s.b,{to:"/byCountry",className:"text-light nav-link"},"Country Stats"),r.a.createElement(s.b,{to:"/aboutCorona",className:"text-light nav-link"},"About COVID-19"))))}}]),t}(r.a.Component),b=function(e){return r.a.createElement("div",{className:"globalStats-container"},r.a.createElement("h1",null,"World Stats"),r.a.createElement("h2",null,"Cases: ",e.cases),r.a.createElement("h2",null,"Deaths: ",e.deaths),r.a.createElement("h2",null,"Recovered: ",e.recovered),r.a.createElement("h2",null,"Unresolved: ",e.cases-e.recovered-e.deaths),r.a.createElement("p",null,"Updated on: ",function(e){var t=new Date(e);return("0"+t.getDate()).slice(-2)+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+t.getFullYear()}(e.time)))},w=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer container-fluid mt-3"},r.a.createElement("div",{className:"pt-5 pb-1 footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 col-sm-12"},r.a.createElement("h2",null,"CoronaTracker"),r.a.createElement("h6",null,"Developed by MML"),r.a.createElement("p",null,r.a.createElement("span",{className:"span-element"},r.a.createElement("a",{href:"https://www.linkedin.com/in/marko-lazic-74583a170/"},r.a.createElement("i",{className:"fa fa-linkedin-square"}))),r.a.createElement("span",{className:"span-element"},r.a.createElement("a",{href:"https://twitter.com/MarkoLa16617366"},r.a.createElement("i",{className:"fa fa-twitter-square"}))),r.a.createElement("span",{className:"span-element"},r.a.createElement("a",{href:"mailto: marko.m.lazic@gmail.com?subject=Corona React App"},r.a.createElement("i",{className:"fa fa-envelope-square mr-3"}))))),r.a.createElement("div",{className:"col-md-3 col-sm-12 links"},r.a.createElement("h4",{className:"mt-lg-0 mt-sm-3"},"Links"),r.a.createElement("ul",{className:"m-0 p-0"},r.a.createElement("li",{key:"corona-1"},r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",target:"_blank",rel:"noopener noreferrer"},"Coronavirus disease (COVID-19) advice for the public")),r.a.createElement("li",{key:"corona-2"},r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",target:"_blank",rel:"noopener noreferrer"},"WHO latest news")),r.a.createElement("li",{key:"corona-3"},r.a.createElement("a",{href:"https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases",target:"_blank",rel:"noopener noreferrer"},"European Centre for Disease Prevention and Control")))),r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement("br",null),r.a.createElement("ul",{className:"m-0 p-0"},r.a.createElement("li",{key:"corona-4"},r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-nCoV/index.html",target:"_blank",rel:"noopener noreferrer"},"Centers for Disease Control and Prevention")),r.a.createElement("li",{key:"corona-5"},r.a.createElement("a",{href:"https://www.bundesgesundheitsministerium.de/coronavirus.html",target:"_blank",rel:"noopener noreferrer"},"Information on Corona virus (in German)")),r.a.createElement("li",{key:"corona-6"},r.a.createElement("a",{href:"https://www.nejm.org/coronavirus",target:"_blank",rel:"noopener noreferrer"},"The New England Journal of Medicine")),r.a.createElement("li",{key:"corona-7"},r.a.createElement("a",{href:"https://www.thelancet.com/coronavirus",target:"_blank",rel:"noopener noreferrer"},"The Lancet"))))),r.a.createElement("div",{className:"row border-top border-bottom border-secondary"},r.a.createElement("h4",{className:"data-source"},"Data Source:",r.a.createElement("a",{href:"https://github.com/pomber/covid19"},"pomber/covid19"))),r.a.createElement("div",{className:"border-secondary disclaimer"},"All data and information provided on this site is for informational purposes only. I make no representations as to accuracy, completeness, suitability, or validity of any information and will not be liable for any errors, omissions, or delays in this information. All information is provided on an as-is basis.")))))},k=a(84),D=a(85),C=a(83),N=a(86),O=(a(73),a(80)),j=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={error:null,isLoaded:!1,globalData:[],countries:[],selectedCountry:null,countryData:[]},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://corona.lmao.ninja/v2/all").then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,globalData:e})}),(function(e){t.setState({isLoaded:!0,error:e})})),fetch("https://corona.lmao.ninja/v2/countries").then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,countryData:e})}),(function(e){t.setState({isLoaded:!0,error:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=[],t=[],a=0;a<this.state.countryData.length;a++)e.push({country:this.state.countryData[a].countryInfo.iso3,casesPerMil:this.state.countryData[a].casesPerOneMillion,deathsPerMil:this.state.countryData[a].deathsPerOneMillion}),t.push({name:this.state.countryData[a].country,coordinates:[this.state.countryData[a].countryInfo.lat,this.state.countryData[a].countryInfo.long],cases:this.state.countryData[a].cases,deaths:this.state.countryData[a].deaths,casesPerMil:this.state.countryData[a].casesPerOneMillion,deathsPerMil:this.state.countryData[a].deathsPerOneMillion});return this.state.isLoaded?this.state.error?r.a.createElement("div",{className:"dark-blue"},r.a.createElement(v,null),r.a.createElement("h1",null,this.state.error),r.a.createElement(w,null)):r.a.createElement("div",{className:"dark-blue"},r.a.createElement(v,null),r.a.createElement(b,{cases:this.state.globalData.cases,recovered:this.state.globalData.recovered,deaths:this.state.globalData.deaths,time:this.state.globalData.updated}),r.a.createElement(k.a,{style:{height:"500px",width:"80%",margin:"0 auto"},zoom:2,center:[15.5,17.5]},">",r.a.createElement(D.a,{url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return r.a.createElement(C.a,{key:e.name,center:[e.coordinates[0],e.coordinates[1]],radius:2*Math.log(e.cases+1)},r.a.createElement(N.a,{direction:"right",offset:[-8,-2],opacity:1},r.a.createElement("span",null,e.name),r.a.createElement("br",null),r.a.createElement("span",{className:"blue"},e.cases+" cases"),r.a.createElement("span",{className:"red"}," | "+e.deaths+" deaths"),r.a.createElement("br",null),r.a.createElement("span",{className:"blue"},e.casesPerMil+" cases / 1M"),r.a.createElement("span",{className:"red"}," | "+e.deathsPerMil+" deaths / 1M")))}))),r.a.createElement(w,null)):r.a.createElement("div",{className:"dark-blue"},r.a.createElement(v,null),r.a.createElement(O.a,{className:"loading-spinner",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement(w,null))}}]),t}(r.a.Component),F=a(28),x=function(e){return r.a.createElement("div",{className:"globalStats-container countryStats-container"},r.a.createElement("h1",null,"Stats for ",e.country),r.a.createElement("img",{src:e.img,alt:"country flag",className:"country-flag"}),r.a.createElement("h2",null,"Cases: ",e.cases),r.a.createElement("h2",null,"Today cases: ",e.todayCases),r.a.createElement("h2",null,"Deaths: ",e.deaths),r.a.createElement("h2",null,"Today deaths: ",e.todayDeaths),r.a.createElement("h2",null,"Recovered: ",e.recovered),r.a.createElement("h2",null,"Active: ",e.active),r.a.createElement("h2",null,"Critical: ",e.critical),r.a.createElement("h2",null,"Unresolved: ",e.cases-e.recovered-e.deaths),r.a.createElement("h2",null,"Cases per one Million: ",e.casesPerMillion),r.a.createElement("h2",null,"Deaths per one Million: ",e.deathsPerMillion))},S=[{country:"italy",province:null,timeline:{cases:{"1/22/20":0,"1/23/20":0,"1/24/20":0,"1/25/20":0,"1/26/20":0,"1/27/20":0,"1/28/20":0,"1/29/20":0,"1/30/20":0},deaths:{"1/22/20":0,"1/23/20":0,"1/24/20":0,"1/25/20":0,"1/26/20":0,"1/27/20":0,"1/28/20":0,"1/29/20":0,"1/30/20":0},recovered:{"1/22/20":0,"1/23/20":0,"1/24/20":0,"1/25/20":0,"1/26/20":0,"1/27/20":0,"1/28/20":0,"1/29/20":0,"1/30/20":0}}}],M=a(45),I=a.n(M),A=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={countryData:[],countrySelected:"Italy",isLoaded:!1,filterData:[],historicalData:[],historicalDataFilter:S,timeLine:[]},a.handleCountryChange=a.handleCountryChange.bind(Object(F.a)(a)),a.handleFilter=a.handleFilter.bind(Object(F.a)(a)),a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://corona.lmao.ninja/v2/countries").then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,countryData:e})}),(function(e){t.setState({isLoaded:!0,error:e})})),fetch("https://corona.lmao.ninja/v2/historical").then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,historicalData:e})}),(function(e){t.setState({isLoaded:!0,error:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleCountryChange",value:function(e){var t=e.target.value;this.setState({countrySelected:t}),this.handleFilter(t)}},{key:"handleFilter",value:function(e){this.setState({filterData:this.state.countryData.filter((function(t){return t.country===e||t.country.toLowerCase()===e})),historicalDataFilter:this.state.historicalData.filter((function(t){return t.country===e||t.country.toLowerCase()===e}))})}},{key:"render",value:function(){var e,t,a,n,l,o,s=this.state.countryData.map((function(e){return e.country})),i=[];return this.state.historicalDataFilter.length<=1?(e=Object.keys(this.state.historicalDataFilter[0].timeline.cases),t=Object.values(this.state.historicalDataFilter[0].timeline.cases),a=Object.keys(this.state.historicalDataFilter[0].timeline.deaths),n=Object.values(this.state.historicalDataFilter[0].timeline.deaths),l=Object.keys(this.state.historicalDataFilter[0].timeline.recovered),o=Object.values(this.state.historicalDataFilter[0].timeline.recovered),i=t.map((function(e,t){return e-n[t]-o[t]}))):(t=this.state.historicalDataFilter.map((function(e){return Object.values(e.timeline.cases)})).reduce((function(e,t){return t.map((function(t,a){return(e[a]||0)+t}))}),[]),e=Object.keys(this.state.historicalDataFilter[0].timeline.cases),n=this.state.historicalDataFilter.map((function(e){return Object.values(e.timeline.deaths)})).reduce((function(e,t){return t.map((function(t,a){return(e[a]||0)+t}))}),[]),a=Object.keys(this.state.historicalDataFilter[0].timeline.deaths),o=this.state.historicalDataFilter.map((function(e){return Object.values(e.timeline.deaths)})).reduce((function(e,t){return t.map((function(t,a){return(e[a]||0)+t}))}),[]),l=Object.keys(this.state.historicalDataFilter[0].timeline.deaths),i=t.map((function(e,t){return e-n[t]-o[t]}))),this.state.isLoaded?this.state.error?r.a.createElement("div",{className:"dark-blue"},r.a.createElement(v,null),r.a.createElement("h1",null,this.state.error),r.a.createElement(w,null)):0===this.state.filterData.length?r.a.createElement("div",{className:"dark-blue"},r.a.createElement(v,null),r.a.createElement("div",{className:"mt-2 ml-3"},r.a.createElement("label",{htmlFor:"country"},"Choose a country:"),r.a.createElement("select",{id:"country",onChange:this.handleCountryChange},s.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("h1",{className:"text-center"},"Please select a Country"),r.a.createElement("div",{className:"plot-container"},r.a.createElement(I.a,{config:{displayModeBar:!1},data:[{x:e,y:t,name:"Total",type:"scatter",marker:{color:"#2E84A5",line:{color:"black",width:1}}},{x:a,y:i,name:"Active",type:"scatter",marker:{color:"orange",line:{color:"black",width:1}}},{x:l,y:o,name:"Recovered",type:"scatter",marker:{color:"green",line:{color:"black",width:1}}},{x:a,y:n,name:"Deaths",type:"scatter",marker:{color:"#E14A50",line:{color:"black",width:1}}}],className:"plot plot-deaths",layout:{showlegend:!0,legend:{x:.3,y:1.2,orientation:"h"},margin:{l:50,r:20,b:80,t:80,pad:2},align:"center",autosize:!0,plot_bgcolor:"#FDF9F1",paper_bgcolor:"#FDF9F1",xaxis:{title:{text:"Date",font:{family:"Courier New, monospace",size:18,color:"#7f7f7f"}}},yaxis:{title:{text:"Total Number",font:{family:"Courier New, monospace",size:18,color:"#7f7f7f"}}},displayModeBar:!1},useResizeHandler:!0})),r.a.createElement(w,null)):r.a.createElement("div",{className:"dark-blue"},r.a.createElement(v,null),r.a.createElement("div",{className:"mt-2 ml-3"},r.a.createElement("label",{htmlFor:"country"},"Choose a country:"),r.a.createElement("select",{id:"country",onChange:this.handleCountryChange},s.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement(x,{country:this.state.filterData[0].country,cases:this.state.filterData[0].cases,todayCases:this.state.filterData[0].todayCases,deaths:this.state.filterData[0].deaths,todayDeaths:this.state.filterData[0].todayDeaths,recovered:this.state.filterData[0].recovered,active:this.state.filterData[0].active,critical:this.state.filterData[0].critical,casesPerMillion:this.state.filterData[0].casesPerOneMillion,deathsPerMillion:this.state.filterData[0].deathsPerOneMillion,img:this.state.filterData[0].countryInfo.flag}),r.a.createElement("div",{className:"plot-container"},r.a.createElement(I.a,{config:{displayModeBar:!1},data:[{x:e,y:t,name:"Total",type:"scatter",marker:{color:"#2E84A5",line:{color:"black",width:1}}},{x:a,y:i,name:"Active",type:"scatter",marker:{color:"orange",line:{color:"black",width:1}}},{x:l,y:o,name:"Recovered",type:"scatter",marker:{color:"green",line:{color:"black",width:1}}},{x:a,y:n,name:"Deaths",type:"scatter",marker:{color:"#E14A50",line:{color:"black",width:1}}}],className:"plot plot-deaths",layout:{showlegend:!0,legend:{x:.3,y:1.2,orientation:"h"},margin:{l:50,r:20,b:80,t:80,pad:2},align:"center",autosize:!0,plot_bgcolor:"#FDF9F1",paper_bgcolor:"#FDF9F1",xaxis:{title:{text:"Date",font:{family:"Courier New, monospace",size:18,color:"#7f7f7f"}}},yaxis:{title:{text:"Total Number",font:{family:"Courier New, monospace",size:18,color:"#7f7f7f"}}}},useResizeHandler:!0})),r.a.createElement(w,null)):r.a.createElement("div",{className:"dark-blue"},r.a.createElement(v,null),r.a.createElement(O.a,{className:"loading-spinner",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement(w,null))}}]),t}(r.a.Component),P=a(82),L=a(81),T=function(){return r.a.createElement("div",{className:"about-container"},r.a.createElement(v,null),r.a.createElement("div",{className:"about-virus"},r.a.createElement("h1",null,"Coronavirus"),r.a.createElement("p",null,"Corona virus disease or COVID-19 is an infectious disease caused by a newly found severe acute respiratory syndrome corona virus 2 (SARS-CoV-2). It belongs to a family of RNA-viruses calleds",r.a.createElement("em",null," Coronaviridae")," which cause diseases in birds and mammals. In humans, the viruses cause, usually mild respiratory infections, like the common cold. However, newly discovered forms such as SARS, MERS and COVID-19 can be lethal. Currently, there are no vaccines or treatments for the COVID-19. However, there are ongoing clinical trials around the world."),r.a.createElement("p",null,"Most people infected with the new corona virus will experience mild respiratory symptoms without the need for any special treatment. However, older people and those with medical problems such as diabetes, cardiovascular disease, chronic respiratory disease are in higher risk of developing serious illness. It is therefore of huge importance to slow down the transmission of the virus. The best way to protect yourself and the surrounding ones is to wash your hands and not touching your face."),r.a.createElement("h2",null,"How does COVID-19 spread?"),r.a.createElement("p",null,"People catch COVID-19 from other people infected with the virus, usually through small droplets from mouth or nose which are spread when people who are infected cough or sneeze. When a person breathes in these droplets they can catch the disease. Also, people can get sick after touching their mouth, eyes or nose after touching surfaces contaminated by these droplets."),r.a.createElement("h2",null,"Symptoms"),r.a.createElement("p",null,"Common symptoms:",r.a.createElement("ul",null,r.a.createElement("li",null,"Fever"),r.a.createElement("li",null,"Tierdness"),r.a.createElement("li",null,"Dry cough")),"Other symptoms:",r.a.createElement("ul",null,r.a.createElement("li",null,"Shortness of breath"),r.a.createElement("li",null,"Aches and pain"),r.a.createElement("li",null,"Sore troat"),r.a.createElement("li",null,"In few people, diarrhoea, nausea or a runny nose")),"In few people, diarrhea, nausea or a runny nose If you have mild symptoms and are otherwise healthy you should self-isolate and contact your doctor or call your local COVID-19 information line for advice on testing. People with fever, cough or those with difficulty breading should contact their doctor immediately and seek medical attention."),r.a.createElement("h2",null,"Prevention"),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Wash your hands with hot water and soap or clean them with alcohol-based solutions"),r.a.createElement("li",null,"Keep distance between you and the surrounding people. 2 m should be enough to protect you and others"),r.a.createElement("li",null,"Avoid touching your face"),r.a.createElement("li",null,"When coughing or sneezing cover your mouth"),r.a.createElement("li",null,"Stay home if you feel ill"),r.a.createElement("li",null,"Avoid unnecessary travel and stay away from large groups of people"))),r.a.createElement("h2",null,"Flattening the Curve"),r.a.createElement("p",null,"During epidemic, slowing down the spread of disease is of critical importance. As the healthcare resources are limited in every country, these can be easily overwhelmed when the number of patients is beyond the capacity of the system. At this point, patients may not get the best possible care and the mortality rate increases."),r.a.createElement("p",null,"Flattening the curve keeps the number of active cases below the maximum capacity of the healthcare system. Although, ultimately the same number of people end up being infected by the virus, with flattened curve this happens over a longer period of time which gives doctors, nurses and hospitals time to prepare. This means that patients infected with the virus get better treatment and the mortality rate decreases."),r.a.createElement("img",{className:"who-image mb-4",src:"./img/800px-Covid-19-curves-graphic-social-v3.gif",alt:"Flatten the curve"}),r.a.createElement("h2",null,"How to flatten the curve?"),r.a.createElement("p",null,"Key factor is keeping people apart in time and space. Measures such as social distancing, isolation and quarantine can help reduce the speed of spreading the virus as they reduce the probability of infected people being in close contact with those not infected, thus reducing transmission rates. Also, maintaining hygiene by frequently washing hands with hot water and soap and by cleaning frequently touched surfaces can help slow down the spread."),r.a.createElement("h2",null,"Stop the Spread"),r.a.createElement("p",null,'One alternative strategy to "Flattening the curve" is to stop the spread of the virus at the very early stage of the outbreak. Good examples of how this can be achieved are Taiwan and South Korea. In these countries, authorities acted quickly and were able to contain the spread through quarantine measures and rigorous testing (including people not showing any symptoms). This strategy turned out to be rather successful: on 29 February 813 people tested positive in whole of South Korea and by mid March the number of new daily cases was well below 100.'),r.a.createElement("img",{className:"who-image mb-4",src:"./img/800px-Covid-19-curves-graphic2-stopthespread-v3.gif",alt:"Stop the spread of the virus"}),r.a.createElement("h2",null,"Advices from the WHO"),r.a.createElement(P.a,null,r.a.createElement(P.a.Item,null,r.a.createElement(L.a,{fluid:!0,className:"d-block",src:"./img/1_safe-greetings.png",alt:"Avoid Shaking Hands"}),r.a.createElement(P.a.Caption,null)),r.a.createElement(P.a.Item,null,r.a.createElement(L.a,{fluid:!0,className:"d-block",src:"./img/2_handshaking.png",alt:"Avoid Shaking Hands"}),r.a.createElement(P.a.Caption,null)),r.a.createElement(P.a.Item,null,r.a.createElement(L.a,{fluid:!0,className:"d-block",src:"./img/wearing-gloves.png",alt:"Wear Gloves"}),r.a.createElement(P.a.Caption,null))),r.a.createElement("br",null),r.a.createElement("h2",null,"How to protect yourself and others from getting sick"),r.a.createElement(P.a,null,r.a.createElement(P.a.Item,null,r.a.createElement(L.a,{fluid:!0,className:"d-block",src:"./img/blue-1.png",alt:"Wash your hands"}),r.a.createElement(P.a.Caption,null)),r.a.createElement(P.a.Item,null,r.a.createElement(L.a,{fluid:!0,className:"d-block",src:"./img/blue-2.png",alt:"Wash your hands"}),r.a.createElement(P.a.Caption,null)),r.a.createElement(P.a.Item,null,r.a.createElement(L.a,{fluid:!0,className:"d-block",src:"./img/blue-3.png",alt:"Protect others from getting sick"}),r.a.createElement(P.a.Caption,null)),r.a.createElement(P.a.Item,null,r.a.createElement(L.a,{fluid:!0,className:"d-block",src:"./img/blue-4.png",alt:"Protect others from getting sick"}),r.a.createElement(P.a.Caption,null))),r.a.createElement("div",null,"Sources:"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Coronaviridae",target:"_blank",rel:"noopener noreferrer"},"Wikipedia"),",",r.a.createElement("span",null," "),r.a.createElement("a",{href:"https://www.who.int/health-topics/coronavirus#tab=tab_1",target:"_blank",rel:"noopener noreferrer"},"WHO"))),r.a.createElement(w,null))};var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:j}),r.a.createElement(i.a,{path:"/byCountry",exact:!0,component:A}),r.a.createElement(i.a,{path:"/aboutCorona",exact:!0,component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.d345a6a6.chunk.js.map