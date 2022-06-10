let restaurantArray = ["Olive Garden", "The Porch", "Longhorn Steakhouse", "Red Robin", "Blue Fish", "Cupbop", "Maxwells Pizza"]

function chooseRandomRestaurant(){
    restaurantName = restaurantArray[Math.floor(Math.random() * restaurantArray.length)]
    window.alert(`You should try eating at ${restaurantName}!`)
}

let button = document.querySelector("button")
button.addEventListener("click", chooseRandomRestaurant)