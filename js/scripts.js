function handleForm(event) {
    event.preventDefault();
    const userSelections = document.querySelectorAll("input[name='grocery-option']:checked");
    let userSelectionsArray = Array.from(userSelections);

    userSelectionsArray = userSelectionsArray.map(function (item) {
        return item.value.toUpperCase();
    })

    userSelectionsArray = userSelectionsArray.sort();

    const previousResults = document.querySelectorAll("h2, ul")
    previousResults.forEach(element => element.remove());

    const resultsHeading = document.createElement("h2");
    resultsHeading.append("Your grocery list:");
    document.body.append(resultsHeading);

    const listOfGroceries = document.createElement("ul")
    document.body.append(listOfGroceries)

    userSelectionsArray.forEach(function (element) {
        const li = document.createElement("li");
        li.append(element);
        listOfGroceries.prepend(li);
    });
}

window.addEventListener("load", function () {
    document.querySelector("form#grocery-items").addEventListener("submit", handleForm);
});