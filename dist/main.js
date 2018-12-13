const renderer = new Renderer()

$("#search").on("click",function(){
    const input=$("#food-input").val()
    $.get(`/recipes/${input}`,function(res){
        renderer.render(res)
        console.log(res)
        
    })
    
})

$("#recipes-container").on("click","img",function(){
    const text =$(this).closest(".recipe").find("li").first().text()
    console.log(text)
})