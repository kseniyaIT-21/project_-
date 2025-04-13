'use strict'

document.addEventListener("DOMContentLoaded", () => {
    // * 1. Начало.
    // * 2. Получаем все элементы изображений с описанием.   
    // * 3. Для каждого изображения (проверяем есть ли такие изображения):
    // *   3.1. Добавляем обработчик наведения курсора на изображение:
    // *       3.1.1. Да:
    // *             3.1.1.1. показываем текст при наведении.
    // *             3.1.2. Нет, ну что поделать: продолжаем
    // *   3.2. Добавляем обработчик курсор уходит с изображения:
    // *       3.3.1. Да:
    // *             3.3.1.1. Скрываем элемент с описанием.
    // *       3.3.2. Нет, ну что поделать: продолжаем.
    // * 4. Конец.
    console.log('Скрипт отработал корректно')

    const header = document.querySelector('.header');

    if (header) {
        console.log('Константа header существует');
        const heightHeader = header.offsetHeight;

        document.addEventListener('scroll', () => {

            console.log('Страница скролится');

            let scrollPageY = this.scrollY;
            {
                if (scrollPageY > heightHeader) {
                    header.classList.add('header--background');

                } else {
                    header.classList.remove('header--background');
                }
            }
        });
    }

    //модальное окно для войти
    const welcоmeButtonModal = document.querySelector(".header__login");
    const modalApplication = document.querySelector(".window");
    const modalLogin = document.querySelector(".popup__login");

    if (welcоmeButtonModal && modalApplication && modalLogin) {
        welcоmeButtonModal.addEventListener("click", () => {
            modalApplication.removeAttribute("hidden");
        });

        const closeModalButton = document.querySelector(".popup__end");
        closeModalButton.addEventListener("click", () => {
            modalApplication.setAttribute("hidden", true);
        });
        window.addEventListener("click", (event) => {
            if (event.target === modalApplication) {
                modalApplication.setAttribute("hidden", true);
            }
        });
    };
    const modalButtonReg = document.querySelector(".header__reg");
    const modalApplicationReg = document.querySelector(".dialog");
    const modalReg = document.querySelector(".popup__reg");
    if (modalButtonReg && modalApplicationReg && modalReg) {
        modalButtonReg.addEventListener("click", () => {
            modalApplicationReg.removeAttribute("hidden");
        });

        const closeModalButtonReg = document.querySelector(".popup__close");
        closeModalButtonReg.addEventListener("click", () => {
            modalApplicationReg.setAttribute("hidden", true);
        });
        window.addEventListener("click", (event) => {
            if (event.target === modalApplicationReg) {
                modalApplicationReg.setAttribute("hidden", true);
            }
        });
    };
    // 3.4.формирование массива
    const reviewsContainer = document.querySelector(".reviews");
    if (reviewsContainer) {
        const dataTitleReviews = [
            "Афродита Богиня Красоты",
            "Зевс Бог Грома и Молний",
            "Дионис Бог Виноделия",
        ];
        const titleReviews =
        reviewsContainer.querySelectorAll(".reviews__subtitle");
        titleReviews.forEach((item, index) => {
            item.textContent = dataTitleReviews[index];
           });
    }




});