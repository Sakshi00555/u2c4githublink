// write js code here corresponding to favourites.html
var mplArr=JSON.parse(localStorage.getItem("mplObj")) || [];
mplArr.map(function(elem){
    
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
        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.style.color="red";

        td6.addEventListener("click",deleteRow);
        
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
})


function deleteRow(){
    event.target.parentNode.remove();
    event.target.parentNode.innerHTML="";
    
}

