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
    let reslut = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    apiCollection = await reslut.json()
    apiCollection = apiCollection.meals

    console.log(apiCollection[5].strDescription)
// display area

let mealIngredients = document.getElementById("mealIngredients")

function mealDisplay(){
    let boxies = ""
    for(let i = 0 ; i < 25 ; i++){
        let des = apiCollection[i].strDescription
        console.log(des)
        boxies += `
        <div class="col-sm-6 col-md-3">
                    <div class="box h-90 text-center dark py-3 rounded-2 my-3 p-2">
                        <i class="fa-solid fa-bowl-food fa-3x"></i>
                        <h3 class="text-light">${apiCollection[i].strIngredient}</h3>
                        <p class="text-light fw-lighter">${des.split(" ").splice(0,18).join(" ")}</p>
                    </div>
                </div>
        `
    }
    mealIngredients.innerHTML = boxies
}

mealDisplay()
}
