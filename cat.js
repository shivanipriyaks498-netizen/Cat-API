const apiURL = "https://api.thecatapi.com/v1/images/search";

async function getCatImage() {
    try {
        console.log("Fetching cat information...");

        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        const cat = data[0];

        console.log("=================================");
        console.log("       RANDOM CAT DETAILS");
        console.log("=================================");

        console.log(`Cat ID    : ${cat.id}`);
        console.log(`Image URL : ${cat.url}`);
        console.log(`Width     : ${cat.width}px`);
        console.log(`Height    : ${cat.height}px`);

        console.log("---------------------------------");
        console.log(`Image Link: ${cat.url}`);
        console.log("=================================");

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

getCatImage();