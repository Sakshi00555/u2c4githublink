// write js code here corresponding to matches.html
var mplmatches=JSON.parse(localStorage.getItem("mplList"));

displayData(mplmatches);
var mplArr=JSON.parse(localStorage.getItem("mplObj")) || [];
window.addEventListener("load",function(){
    displayData(mplmatches);

})
function filtervenue(){
    var selected=document.querySelector("#filterVenue").value;
    console.log(selected)
    var mpllist=mplmatches.filter(function(elem){
        return elem.venue==selected;
    });
    console.log(mpllist)
    displayData(mpllist)
}
function displayData(mplmatches){
    document.querySelector("tbody").innerHTML="";
    mplmatches.map(function(elem){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=elem.matchnum;
        var td2=document.createElement("td");
        td2.innerHTML=elem.teamA;
        var td3=document.createElement("td");
        td3.innerHTML=elem.teamB;
        var td4=document.createElement("td");
        td4.innerText=elem.date;
        var td5=document.createElement("td");
        td5.innerHTML=elem.venue;
        var td6= document.createElement("td");
        td6.innerText="favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function (){
            favourtesFun(elem);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);


    })
}
function favourtesFun(elem){
    console.log(elem);
    mplmatches.push(elem);
    localStorage.setItem("mplObj",JSON.stringify(mplmatches));
}

