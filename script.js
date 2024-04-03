function lifeTime() {
    let yearInput = document.getElementById("year");
    let valueYear = yearInput.value;
    
    let monthInput = document.getElementById("month");
    let valueMonth = monthInput.value;

    let dayInput = document.getElementById("day");    
    let valueDay = dayInput.value;

    let isValid = false;

    const now =  new Date()

    const options = [
        {day: 'numeric' },
        {month: 'numeric'}, 
        {year: 'numeric'} 
    ];

    let dateYearString = now.toLocaleDateString('eu-US', options[2])
    let dateYearValue = dateYearString.valueOf(dateYearString)

    let dateMonthString = now.toLocaleDateString('eu-US', options[1])
    let dateMonthValue = dateMonthString.valueOf(dateMonthString)

    let dateDayString = now.toLocaleDateString('eu-US', options[0])
    let dateDayValue = dateDayString.valueOf(dateDayString)

    let yearTag = document.getElementById("yearTag")
    let yearErrorMessage = document.querySelector("#yearErrorMessage")
    let dayTag = document.getElementById("dayTag")
    let dayErrorMessage = document.querySelector("#dayErrorMessage")
    let monthTag = document.getElementById("monthTag")
    let monthErrorMessage = document.querySelector("#monthErrorMessage")

    if (valueDay > 31) {
        dayInput.style.border = "1px solid var(--Light-red)"
        dayTag.style.color = "var(--Light-red)"
        dayErrorMessage.textContent = "Must be a valid day";
        isValid = false
    } else {
        isValid = true
    }

    if (valueDay < 1) {
        dayInput.style.border = "1px solid var(--Light-red)"
        dayTag.style.color = "var(--Light-red)"
        dayErrorMessage.textContent = "This field id required";
        isValid = false;
    } else {
        isValid = true;
    }
    
    if (valueMonth > 12) {
        monthInput.style.border = "1px solid var(--Light-red)"
        monthTag.style.color = "var(--Light-red)"
        monthErrorMessage.textContent = "Must be a valid month";
        isValid = false
    } else {
        isValid = true
    }

    if (valueMonth < 1) {
        monthInput.style.border = "1px solid var(--Light-red)"
        monthTag.style.color = "var(--Light-red)"
        monthErrorMessage.textContent = "This field id required";
        isValid = false;
    } else {
        isValid = true;
    }
    
    if (valueYear > dateYearValue) {
        yearInput.style.border = "1px solid var(--Light-red)"
        yearTag.style.color = "var(--Light-red)"
        yearErrorMessage.textContent = "Must be in the past";
        isValid = false
    } else {
        isValid = true
    }

    if (valueYear < 1) {
        yearInput.style.border = "1px solid var(--Light-red)"
        yearTag.style.color = "var(--Light-red)"
        yearErrorMessage.textContent = "Must be a valid year";
        isValid = false;
    } else {
        isValid = true;
    }
    
    const monthsResult = document.getElementById("monthsResult")
    const daysResult = document.getElementById("daysResult")
    const yearsResult = document.getElementById("yearsResult")

    if (isValid) {
        let birthday = `${valueMonth}/${valueDay}/${valueYear}`
        let birthdayObj = new Date(birthday)
        let ageDiffMill = Date.now() - birthdayObj
        let ageDate = new Date(ageDiffMill)
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonths = ageDate.getUTCMonth();
        let ageDays = ageDate.getUTCDay();
        daysResult.textContent = ageDays
        monthsResult.textContent = ageMonths
        yearsResult.textContent = ageYears
    } else {
    
    }
}
/*
            yearInput.style.border = "1px solid var(--Light-red)"
            yearErrorMessage.innerHTML = "This field is required"
            yearTag.style.color = "var(--Light-red)"
*/