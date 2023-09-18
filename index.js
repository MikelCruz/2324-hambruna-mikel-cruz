

const getAllDonuts = async () => {
    return fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}

const fetchAsyncDonuts = async() => {
    try {
        const getResult = await getAllDonuts()
        const allDonuts = getResult.items.item

        //Parte 1
        // showTheHighestSugarDonut             (allDonuts);
        // showTheHighestIronDonut              (allDonuts);
        // showTheHighestProteinDonut           (allDonuts);
        // showTheHighestFibreDonut             (allDonuts);

        //Parte 2
        // showAllDonutsAndCalories             (allDonuts);
        // showAllDonutsAndCarbs                (allDonuts);
        // showDonutCaloriesAverage             (allDonuts);
        // showDonutsAllSaturatedFat            (allDonuts);
        // showDonutsVitamineAverage            (allDonuts);

        //parte 3
        // showDonutsBatter                     (allDonuts);
        // showDonutsExtraToppings              (allDonuts);

        //parte 4
        showHowManyTypeOfDonutsCanWeBuy         (allDonuts)

        //Parte 5 

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



function showAllDonutsAndCarbs (allDonuts)
{
    console.log("Donuts Names: ")
    allDonuts.forEach((element) => {
        console.log(element.name + ", carbs: " + element.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount);
    })
    

}

function showAllDonutsAndCalories (allDonuts)
{
    console.log("Donuts Names: ")
    allDonuts.forEach((element) => {
        console.log(element.name + ", calories: " + element.nutrition_facts.nutrition.calories);
    })
    

}

function showDonutCaloriesAverage(allDonuts)
{
    let result = 0;
    allDonuts.forEach((element) => {
       result += element.nutrition_facts.nutrition.calories
    })

    console.log("Media de calorias es: " + (result/allDonuts.length));
}


function showDonutsAllSaturatedFat(allDonuts)
{
    let result = 0;

    allDonuts.forEach((element) => {
      result += parseInt(element.nutrition_facts.nutrition.fat.fat_type.saturated);
    })

    console.log("La Suma de todas las grasasa saturadas es de: " + result);
}

function showDonutsVitamineAverage(allDonuts)
{
    const vitaminesA    = 0;
    const vitaminesC    = 1;

    let resultVitamin   = 0;

    allDonuts.forEach((element) => {
        resultVitamin   += parseInt(element.nutrition_facts.nutrition.vitamines[vitaminesA].percent);
        resultVitamin   += parseInt(element.nutrition_facts.nutrition.vitamines[vitaminesC].percent);
    })


    console.log("La Media de vitaminas es de: " + (resultVitamin /(allDonuts.length*2)));
}

function showDonutsBatter(allDonuts)
{
    console.log("======================");
    
    allDonuts.forEach((element) => {
        console.log("Donuts Names: " + element.name + " | Batters: ");
        let Batters = element.batters.batter

        Batters.forEach((element2) => {
            console.log(element2.type);
        });
        
        console.log("======================");
    })
}

function showDonutsExtraToppings(allDonuts)
{
    console.log("======================");
    
    allDonuts.forEach((element) => {
        console.log("Donuts Names: " + element.name + " | Toppings: ");
        let Toppings = element.topping

        Toppings.forEach((element2) => {
            if (element2.type !== "None")
                console.log(element2.type);
        });
        
        console.log("======================");
    })
}


function showHowManyTypeOfDonutsCanWeBuy(allDonuts)
{
    let cuantityResult = 0;

    allDonuts.forEach((element) => {
        console.log("Con el " + element.name + " Donut puedes comprar: " + Math.floor((4 / element.ppu)));
        });
}