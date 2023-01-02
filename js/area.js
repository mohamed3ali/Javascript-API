$(".toggle .open").click(function () {
    let widthBox = $(".sideBar .list").outerWidth()
    console.log(widthBox)
    if ($('.sideBar').css("left") == "0px") {
        $('.sideBar').animate({ left: `-${widthBox}` }, 1000)
    } else {
        $('.sideBar').animate({ left: "0px" }, 1000)
    }
})

// fetch api
let apiCollection = []
getAPI()
async function getAPI(){
    let reslut = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    apiCollection = await reslut.json()
    apiCollection = apiCollection.meals

    console.log(apiCollection)
// display area

let mealArea = document.getElementById("mealArea")

function mealDisplay(){
    let boxies = ""
    for(let i = 0 ; i < apiCollection.length ; i++){
        boxies += `
        <div class="col-sm-6 col-md-3">
        <div class="box text-center dark py-3 rounded-2 my-3" onclick='location.href="areaDetails.html"'>
            <i class="fa-solid fa-city fa-3x mb-2"></i>
            <h3 class="text-light">${apiCollection[i].strArea}</h3>
        </div>
    </div>
        `
    }
    mealArea.innerHTML = boxies
}

mealDisplay()
}
