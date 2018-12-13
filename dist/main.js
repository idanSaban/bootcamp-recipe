const renderer = new Renderer()

$("#search").on("click", function () {
    const foodInput = $("#food-input").val()
    const ingredientInput = $("#ingredient-input").val()

    if(!foodInput && !ingredientInput){
        alert("you must pass some information")
        renderer.render()
        return
    }

    let url = `/recipes/`
    if (foodInput && ingredientInput) {
        url += `?food=${foodInput}&ingredients=${ingredientInput}`
    }
    else if (foodInput) {
        url += `?food=${foodInput}`
    }
    else {
        url += `?ingredients=${ingredientInput}`
    }


    $.get(url, function (res) {
        renderer.render(res)
        console.log(res)

    })

})

$("#recipes-container").on("click", "img", function () {
    const text = $(this).closest(".recipe").find("li").first().text()
    console.log(text)
})


$(".input").keypress(function (e) {
    const key = e.which;
    if(key == 13)
     {
       $("#search").trigger("click")
     }
   });   