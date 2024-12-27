let elementsId = [
                     {
                       "id":"overlay",
                       "id":"user_form",
                       "id":"add_button",
                       "id":"cancel_form",
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
        {id:"first_name", message:"nom is required"},
        {id:"last_name", message:"prénom is required"},
        {id:"email", message:"numéro de téléphone is required"},
        {id:"phone", message:"email is required"}
    ];

    requiredFields.forEach(inputs => {
         
        let input = document.getElementById(inputs.id);
        console.log(input.value);

        if (!input.value.trim()) {
            event.preventDefault();
            input.classList.add("bg-red-50","border-red-500","text-red-900","placeholder-red-700");
            input.classList.remove("bg-gray-50","border-gray-300", "text-gray-900");
        }else{
            input.classList.remove("bg-red-50","border-red-500","text-red-900","placeholder-red-700");
            input.classList.add("bg-green-50", "border-green-300", "text-green-900");
        }

    })

    // let numberPhone = document.getElementById("phone");
    // console.log(numberPhone.value);

    // if (!numberPhone.value.trim()) {
    //     event.preventDefault();
    //     numberPhone.classList.add("bg-red-50","border-red-500","text-red-900","placeholder-red-700");
    //     numberPhone.classList.remove("bg-gray-50","border-gray-300", "text-gray-900");
    // }else{
    //     numberPhone.classList.remove("bg-red-50","border-red-500","text-red-900","placeholder-red-700");
    //     numberPhone.classList.add("bg-gray-50", "border-gray-300", "text-gray-900");
    // }

    
})




 