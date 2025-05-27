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

// 3.4.появление модальных форм при клике на карточку
const promo= document.querySelectorAll(".promo__item");
const modalNews = document.querySelectorAll (".modal__hews");
promo.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        modalNews[index].style.display="block";
        console.log("кнопка нажата");
    });


});
    const modalClose= document.querySelector(".modal__close");
    modalClose.addEventListener("click", () => {
        modalNews.style.display="none";
        });
//3.5
const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
    const headerList = headerMenu.querySelector('.header__list');
    const menuData = {
        link1: {
            link: '#',
            title: 'Главная',
        },
        link2: {
            link: '#',
            title: 'Выставки',
        },
        link3: {
            link: '#',
            title: 'Билеты',
        },
        link4: {
            link: '#',
            title: 'Адрес',
        },
    }
    const createLink = (UrlLink, title) =>{
        const link = `
        <li class="header__item"><a href="${UrlLink}" class="header__item-link">${title}</a></li>
        `;
        return link;
    }
    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.UrlLink, link.title);
        headerList.insertAdjacentHTML('beforeend', linkIndex);

    }
}
const cardsCon = document.querySelector(".reviews");
    if (cardsCon) {
        const cardList = cardsCon.querySelector(".reviews__list");
 
        // Пример URL для получения данных с сервера
        const apiUrl = "data.json";

         // Функция для создания карточки
        const createCard = (
            image,
            imageAlt,
            imageWidth,
            imageHeight,
            subtitle,
            description
        ) => {
            // Шаблонные строки и подстановки
            const card = `
                <li class="reviews__item">
                      <img class="reviews__icon" src="${image}" alt="${imageAlt}" width="${imageWidth}" height="${imageHeight}">
                    <h3 class="reviews__subtitle">${subtitle}</h3>                    
                    <div class="reviews__score">
                       <span class="reviews__score-item  reviews__score-mask"></span>
                        <span class="reviews__score-item reviews__score-item--three">
                        </span>
                    
                    </div>
                    <p class="reviews__text">${description}</p>
                </li>
            `;            
            return card; 
        };
              // Загрузка данных с сервера
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Данные
            console.log(typeof data); // Тип полученных данных

            data.forEach((item) => {
                const cardElement = createCard(
                    item.image,
                    item.imageAlt,
                    item.imageWidth,
                    item.imageHeight,
                    item.subtitle,
                    item.description
                );
                cardList.insertAdjacentHTML("beforeend", cardElement);
            });
        })
        .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
        });

        const preloader = document.querySelector(".preloader");
        const content = document.querySelector(".content");
        if (preloader && content) {
            setTimeout(() => {
                // Скрываем прелоадер
                preloader.style.opacity = "0";
                preloader.style.visibility = "hidden";
    
                // Показываем контент
                content.style.display = "block";
    
                // Удаляем элемент из DOM
                preloader.remove();
            }, 1000); // Задержка 3 секунды
        }
    
    };
});