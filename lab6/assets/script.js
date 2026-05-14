function updateSlider(value) {
    // 1. Знаходимо наш елемент <span>, де лежить цифра
    const valueSpan = document.getElementById('sliderValue');
    
    // 2. Оновлюємо саму цифру на екрані
    valueSpan.innerText = value;
    
    // 3. Перетворюємо значення на число, щоб можна було його порівнювати
    let num = parseInt(value);
    
    // 4. Перевіряємо умови і змінюємо колір
    if (num >= 0 && num <= 2) {
        valueSpan.style.color = "red";
    } 
    else if (num >= 3 && num <= 7) {
        valueSpan.style.color = "#e6bc03";
    } 
    else if (num >= 8 && num <= 10) {
        valueSpan.style.color = "green";
    }
}