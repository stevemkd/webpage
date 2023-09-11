function updateCity() {
    
    var state = document.getElementById("state");
    var city = document.getElementById("city");

   
    city.innerHTML = "";

   
    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "Select your city";
    city.appendChild(defaultOption);

    
    var cities = {
      kerala: ["Eranad", "Kozhikode", "Thiruvananthapuram"],
      tamilnadu: ["Chennai", "Coimbatore", "Madurai"]
      
    };

   
    var stateValue = state.value;

    for (var i = 0; i < cities[stateValue].length; i++) {
     
      var option = document.createElement("option");
      
      option.value = cities[stateValue][i];
      option.text = cities[stateValue][i];
      
      city.appendChild(option);
    }
  }