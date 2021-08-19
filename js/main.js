$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");

    // при наведении курсором на этаж:
    floorPath.on('mouseover', function () {
        floorPath.removeClass("current-floor"); /* удаляем класс с подсветой у этажа */
        currentFloor = $(this).attr("data-floor"); /* получаем номер этажа, на который наведён курсор */
        $(".counter").text(currentFloor); /* подставляем номер этажа в счетчик */
    })

    counterUp.on('click', function () { /* при нажатии на стрелку вверх: */
       if (currentFloor < 18) { /* если указанный этаж меньше 18, то */
            currentFloor++; /* увеличиваем номер этажа на 1 */
            usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false}); /*меняем формат отображения этажа - 02 вместо 2*/
            $(".counter").text(usCurrentFloor); /* подставляем номер этажа в счетчик между стрелок */
            floorPath.removeClass("current-floor"); /* удаляем класс с синей подсветкой у других элементов */
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /* и добавляем его только для указанного этажа */
       }
    })

    counterDown.on("click", function () {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-Us", { minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
});