$(".toggle .open").click(function () {
    let widthBox = $(".sideBar .list").outerWidth()
    console.log(widthBox)
    if ($('.sideBar').css("left") == "0px") {
        $('.sideBar').animate({ left: `-${widthBox}` }, 1000)
    } else {
        $('.sideBar').animate({ left: "0px" }, 1000)
    }
})

let apiCollection = []
async function getAPI(e){
    let reslut = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`)
    apiCollection = await reslut.json()
    apiCollection = apiCollection.meals

// search

let mealSearch = document.getElementById("mealSearch")
function mealDisplaySearch(){
    let box = ""
    for(let i = 0 ; i < apiCollection.length ; i++){
        box += `
                <div class="col-sm-6 col-md-3">
                    <div class="box mb-4">
                        <div class="image">
                            <img src="${apiCollection[i].strMealThumb}" alt="meal" class="w-100 rounded-2">
                        </div>
                        <div class="overlay">
                            <h3 class="fw-lighter pt-5 ps-3">${apiCollection[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
        `
    }
    mealSearch.innerHTML = box
}
mealDisplaySearch()
}

let searchName = document.getElementById("searchName")
let searchLetter = document.getElementById("searchLetter")

searchName.addEventListener("input" , (e)=>{
    getAPI(e.target.value)
})
searchLetter.addEventListener("keyup" , (e)=>{
    getAPI(e.target.value)
})