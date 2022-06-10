function alertColor(event){
    event.preventDefault()

    window.alert("My favorite color is Aqua")
}
function alertPlace(event){
    event.preventDefault()
    window.alert("Don't have a favorite place yet, haven't been to many places. Definitely not New York though, way too filthy.")
}
function alertRitual(event){
    event.preventDefault()
    window.alert("My favorite ritual is camping deep within the Utah desert where you can see the entire galaxy.")
}

colorButton = document.querySelector("#color")
placeButton = document.querySelector("#place")
ritualButton = document.querySelector("#ritual")
colorButton.addEventListener("click", alertColor)
placeButton.addEventListener("click", alertPlace)
ritualButton.addEventListener("click", alertRitual)