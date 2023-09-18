

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
    
    
}