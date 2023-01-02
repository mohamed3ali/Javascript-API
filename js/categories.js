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
    let reslut = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    apiCollection = await reslut.json()
    apiCollection = apiCollection.categories

    console.log(apiCollection[0])
// display meals

let mealCategories = document.getElementById("mealCategories")
// console.log(mealCategories)
function mealDisplay(){
    let boxies = ""
    for(let i = 0 ; i < 13 ; i++){
        boxies += `
                <div class="col-sm-6 col-md-3">
                    <div class="box mb-4">
                    <div class="image">
                    <img src=${apiCollection[i].strCategoryThumb} alt="meal" class="w-100 rounded-2">
                </div>
                        <div class="overlay text-center">
                            <h3 class="fw-lighter pt-5 ps-3">${apiCollection[i].strCategory}</h3>
                            <p>${apiCollection[i].strCategoryDescription}</p>
                        </div>
                    </div>
                </div>
        `
    }
    mealCategories.innerHTML = boxies
}

mealDisplay()
}
