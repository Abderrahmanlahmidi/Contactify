const elementsId = [
                     {
                       "id":"overlay",
                       "id":"user_form",
                       "id":"add_button",
                       "id":"cancel_form",
                       "id":"first_name",
                       "id":"last_name",
                       "id":"phone",
                       "id":"email"
                      }
                   ];
  
function selectElement(elementsId){
   elementsId.forEach(element => {
    document.getElementById(`${element.id}`);
   });
}

selectElement(elementsId);


add_button.addEventListener("click", function(){
   user_form.classList.remove("hidden");
   user_form.classList.add("flex");
   overlay.classList.remove("hidden");
})


cancel_form.addEventListener("click", function(){
    user_form.classList.add("hidden");
    user_form.classList.remove("flex");
    overlay.classList.add("hidden");
})


user_form.addEventListener("submit", function(event){
     
    requiredFields = [
        {"id":"", "errorMessage":""},
        {"id":"", "errorMessage":""},
        {"id":"", "errorMessage":""},
        {"id":"", "errorMessage":""}
    ];

    
})




