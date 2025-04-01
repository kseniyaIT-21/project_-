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
}

const heightHeader = header.offsetHeight;           

        document.addEventListener('scroll', () => {         

            console.log('Страница скролится');

            let scrollPageY = this.scrollY;  // получаем значение насколько прокрутили страницу
            {
                if (scrollPageY > heightHeader) {               
                    header.classList.add('header--background')      
                    header.classList.remove('header--background')  
                }
            }
        });
    });
