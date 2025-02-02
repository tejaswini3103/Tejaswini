// Function to simulate putting the cake in the oven (takes time)
function bakeCake() {
    return new Promise((resolve) => {
        console.log("🧑‍🍳 Cake is baking... (this will take 3 seconds)");
        setTimeout(() => {
            resolve("🎂 Cake is ready!");
        }, 3000); // Simulate 3 seconds delay
    });
}

// Function to simulate preparing the frosting (happens while cake is baking)
function prepareFrosting() {
    console.log("🍫 Preparing the frosting...");
}

// Async function to manage the cake-making process
async function makeCake() {
    prepareFrosting(); // This runs immediately
    let cake = await bakeCake(); // Wait for cake to bake
    console.log(cake); // Cake is ready now
    console.log("🧁 Frosting the cake...");
    console.log("🎉 Cake is ready to serve!");
}

// Call the function to start the process
makeCake();
