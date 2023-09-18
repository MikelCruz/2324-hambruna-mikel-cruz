

const getAllDonuts = async () => {
    return fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}

const fetchAsyncDonuts = async() => {
    try {
        const getResult = await getAllDonuts()
        const allDonuts = getResult.items.item

        showTheHighestSugarDonut(allDonuts);


    } catch (error){
        console.log(error.message)
    }
}

fetchAsyncDonuts();




// ==========================================
//               FUNCIONES 
// ==========================================


function showTheHighestSugarDonut(allDonuts)
{
    const sugarValuesArray = [];

    allDonuts.forEach((element) =>{
        //sacamos todos los valores de los azucares
        const sugarValue    = element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars
        // console.log(element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
        
        // Los almacenamos en un array y ordenamos de mayor a menor
        sugarValuesArray.push(sugarValue);

    });
    
    // Ordenamos el array y sacamos la cerveza con mayor cantidad de azucar
    sugarValuesArray.sort((a,b) =>{
        if (a < b) 
          return 1;
        
        if (a > b )
          return -1;
      
      
        return 0;
      });

      //Una vez tenemos el array ordenado cogemos el valor 0 del array y hacemos un map Filter para buscar esa cantidad de azucar y sacar el nombre 
      let resultado = allDonuts.filter((element) => {
        if (element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars === sugarValuesArray[0])
            return element.name;
    });

    console.log("El donut con más azucar es: " + resultado[0].name);


}