$(".toggle .open").click(function () {
    let widthBox = $(".sideBar .list").outerWidth();
    console.log(widthBox);
    if ($(".sideBar").css("left") == "0px") {
    $(".sideBar").animate({ left: `-${widthBox}` }, 1000);
    } else {
    $(".sideBar").animate({ left: "0px" }, 1000);
        }
});

// fetch api
let apiCollection = [];
getAPI();
async function getAPI() {
    let reslut = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian`
    );
    apiCollection = await reslut.json();
    apiCollection = apiCollection.meals;
    let meal = document.getElementById("meal");

    function mealDisplay() {
    let box = "";
    for (let i = 0; i < apiCollection.length; i++) {
        box += `
                <div class="col-sm-6 col-md-3" onclick='showData()'>
                    <div class="box mb-4">
                    
                        <div class="image">
                            <img src="${apiCollection[i].strMealThumb}" alt="meal" class="w-100 rounded-2" >
                        </div>
                        <div class="overlay">
                            <h3 class="fw-lighter pt-5 ps-3">${apiCollection[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
        `;
    }

    meal.innerHTML = box;
}

mealDisplay();
console.log(apiCollection)
}

