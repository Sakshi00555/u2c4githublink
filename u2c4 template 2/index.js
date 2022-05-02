// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm ").addEventListener("submit",mplsubmit);
var mplArr=JSON.parse(localStorage.getItem("mplList")) || [];
function mplsubmit(){
    event.preventDefault();
        var mplObj={
            matchnum: masaiForm.matchNum.value,
            teamA:masaiForm.teamA.value,
            teamB:masaiForm.teamB.value,
            date:masaiForm.date.value,
            venue:masaiForm.venue.value,



        };
        mplArr.push(mplObj)
        console.log(mplArr)
        localStorage.setItem("mplList",JSON.stringify(mplArr));
        window.location.href="matches.html";
    
}