var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "STOP";
    TrafficLight["Yellow"] = "READY";
    TrafficLight["Green"] = "GO";
})(TrafficLight || (TrafficLight = {}));
function showSignal(light) {
    if (light === TrafficLight.Red) {
        console.log("Red Light → " + TrafficLight.Red);
    }
    else if (light === TrafficLight.Yellow) {
        console.log("Yellow Light → " + TrafficLight.Yellow);
    }
    else if (light === TrafficLight.Green) {
        console.log("Green Light → " + TrafficLight.Green);
    }
}
// Using Enum
var currentLight = TrafficLight.Red;
showSignal(currentLight);
currentLight = TrafficLight.Yellow;
showSignal(currentLight);
currentLight = TrafficLight.Green;
showSignal(currentLight);
// Loop through all values of Enum
console.log("\nAll Signals:");
for (var light in TrafficLight) {
    console.log(light, "=>", TrafficLight[light]);
}
