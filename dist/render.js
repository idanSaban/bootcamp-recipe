class Renderer{
    constructor(){
        // Create a new class for your Renderer
        // Add a render method to the class for rendering ingredients
        // This method should receive one parameter: data
        // It should then use Handlebars to render the data on the page
        // You'll need to create a Handlebars template which can process this data.
        
        // Each Recipe should be in it's own div and should display the following:
        // The title of the recipe, which is also a link to the recipe page
        // The image of the recipe
        // A list of the ingredients
    }
    
    render(data){
        console.log("trying to render")
        console.log(data)
        $('#recipes-container').empty()
        const source = $('#recipes-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        $('#recipes-container').append(newHTML); 
    }
}
