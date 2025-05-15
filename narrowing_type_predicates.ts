type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
function getSmallPet(): Fish | Bird {
    return {
        swim: () => {
            console.log("Just swimming!");
        }
    };
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}
