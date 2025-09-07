enum TrafficLight{
    Red = "STOP",
    Yellow = "READY",
    Green = "GO",
}

function showSignal(light: TrafficLight):void{
    if(light === TrafficLight.Red){
        console.log("Red Light → " + TrafficLight.Red);
    }
    else if(light === TrafficLight.Yellow){
        console.log("Yellow Light → " + TrafficLight.Yellow);
    }
    else if(light === TrafficLight.Green){
        console.log("Green Light → " + TrafficLight.Green);
    }
}

// Using Enum
let currentLight: TrafficLight = TrafficLight.Red;
showSignal(currentLight);

currentLight = TrafficLight.Yellow;
showSignal(currentLight);

currentLight = TrafficLight.Green;
showSignal(currentLight);

// Loop through all values of Enum
console.log("\nAll Signals:");
for (let light in TrafficLight) {
  console.log(light, "=>", TrafficLight[light as keyof typeof TrafficLight]);
}