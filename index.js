

const getAllDonuts = async () => {
    return fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}

const fetchAsyncDonuts = async() => {
    try {
        const getResult = await getAllDonuts()
        const allDonuts = getResult.items.item

        // showTheHighestSugarDonut    (allDonuts);
        // showTheHighestIronDonut     (allDonuts);
        // showTheHighestProteinDonut  (allDonuts);
        // showTheHighestFibreDonut    (allDonuts);

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

function showTheHighestIronDonut(allDonuts)
{
    //Creo array para meter todos los datos del Hierro
    const ironValuesArray = [];

    //Guardo todos los datos del hierro
    allDonuts.forEach((element) =>{
        let ironValue    = element.nutrition_facts.nutrition.vitamines[3].percent
        ironValuesArray.push(ironValue);

    });

    //Reordeno los datos del array de hierro
    reOrderMaxToMin(ironValuesArray);
    let maxArrLenght = ironValuesArray.length

    //Una vez tenemos el array ordenado cogemos el valor max del array y hacemos un map Filter para buscar esa cantidad de hierro y sacar el nombre 
    let resultado = allDonuts.filter((element) => {
        if (element.nutrition_facts.nutrition.vitamines[3].percent === ironValuesArray[maxArrLenght-1])
            return element.name;
    });

    //mostramos el resultado 
    console.log("El donut con más hierro es: " + resultado[0].name);
}

function showTheHighestProteinDonut(allDonuts)
{
    const proteineValuesArray = [];

    allDonuts.forEach((element) =>{
        let proteineValue    = element.nutrition_facts.nutrition.proteine
        proteineValuesArray.push(proteineValue);
    });

    console.log(proteineValuesArray);

    reOrderMaxToMin(proteineValuesArray);

    let maxArrLenght = proteineValuesArray.length

    let resultado = allDonuts.filter((element) => {
        if (element.nutrition_facts.nutrition.proteine === proteineValuesArray[maxArrLenght-1])
            return element.name;
    });

    console.log("El donut con más proteina es: " + resultado[0].name);
}

function showTheHighestFibreDonut(allDonuts)
{
    const fibreValuesArray = [];

    allDonuts.forEach((element) =>{
        let fibreValue    = element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre
        fibreValuesArray.push(fibreValue);
    });

    fibreValuesArray.sort((a,b) =>{
        if (a < b) 
          return 1;
        
        if (a > b )
          return -1;
      
      
        return 0;
      });


    let maxArrLenght = fibreValuesArray.length - 2;

    let resultado = allDonuts.filter((element) => {
        if (element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre === fibreValuesArray[maxArrLenght])
            return element.name;
    });

    console.log("El donut con más fibra es: " + resultado[0].name);
}


function reOrderMaxToMin(array)
{
    array.sort((a, b) => a - b)
}
