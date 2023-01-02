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
var current = 0;

let apiCollection = [];
getAPI();
async function getAPI() {
    let reslut = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    apiCollection = await reslut.json();
    apiCollection = apiCollection.meals;
    let meal = document.getElementById("meal");

    function mealDisplay() {
    let box = "";
    for (let i = 0; i < apiCollection.length; i++) {
        box += `
                <div class="col-sm-6 col-md-3" onclick='showData()'>
                    <div class="box mb-4" onclick="detailDisplay('${apiCollection[i].strMealThumb}')">
                    
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

let showDetails = document.getElementById("showDetails");
function detailDisplay(i) {
    current = i;
  // window.location.href="details.html"
    console.log(current);
    let content = "";
    content += `
    <div class="col-sm-12 col-md-4">
    
                    <div class="image">
                        <img src=${i} class="w-100 rounded-3" alt="meal">
                    </div>
                    <h3 class="text-light text-center">Tourtiere</h3>
                </div>
                <div class="col-sm-12 col-md-8 text-light">
                <div class="toggel">
        <i class="fa-solid fa-xmark fa-3x float-end" onclick='toggelIcon()'></i>
    </div>
                    <h3>instructions</h3>
                    <p>Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside. Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later In a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes. Add the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells. Immediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil. After it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked. After the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary. Serve with crushed-up crackers, torn up bread, or something else to add some extra thickness. You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness. Makes great leftovers, stays good in the fridge for about a week.</p>
                    <h4>Area : <span>Turkish</span></h4>
                    <h4>Category : <span>Side</span></h4>
                    <h3>Recipes :</h3>
                    <div class="recipes">
                        <span class="badge bg-success p-3">1 cup Lentils</span>
                        <span class="badge bg-success p-3">1 cup Lentils</span>
                        <span class="badge bg-success p-3">1 cup Lentils</span>
                        <span class="badge bg-success p-3">1 cup Lentils</span>
                        <span class="badge bg-success p-3">1 cup Lentils</span>
                        <span class="badge bg-success p-3">1 cup Lentils</span>
                    </div>
                    <h3>Tags :</h3>
                    <p class="badge bg-danger"></p>
                    <div>
                        <button class="btn btn-success">source</button>
                        <button class="btn btn-danger">youtype</button>
                    </div>
                </div>
    `;
    showDetails.innerHTML = content;
}
detailDisplay();
console.log(showDetails);
let article = document.getElementById("article");
function showData() {
    article.classList.add("d-block");
    article.classList.remove("d-none");
}

function toggelIcon(){
    article.classList.remove("d-block")
    article.classList.add("d-none")
}
// console.log(article)
