# Что это?

Тестовое задание на вакансию [Frontend-разработчик](https://samara.hh.ru/vacancy/52900927) в компании Dating Tech Group Ltd ([макет](https://www.figma.com/file/mmGul1X8gXv1gJqkeUGUju/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0%3A1)).

# Описание работы

Приложение реализовано как SPA, состоит из двух логических страниц: приветственной страницы с опросником и страницы с анкетами.

## Страница-опросник

Загружается при первом посещении сайта (и последующих, если не завершить прохождение). Для прохождения опросника необходимо последовательно отвечать «Да» или «Продолжить». Ответ «Нет» не приводит к продвижению и вызывает браузерное уведомление.  

После прохождения опросника предлагается заполнить форму. Пока не заполнены обязательные поля формы кнопка отправки неактивна. При попытке отправки формы к заполненным полям применяется базовая HTML-валидация.  

Прогресс прохождения опросника и формы сохраняются внутри компонентов и в localStorage. При обновлении страницы в браузере прогресс будет восстановлен из localStorage.

## Страница с анкетами

Загружается после отправки формы в опроснике. Если опросник уже был пройден ранее, загружается сразу при обновлении страницы. Статус прохождения опросника восстанавливается из localStorage.  

Анкеты загружаются с удаленного сервера и отрисовываются сразу после загрузки. При нажатии на кпопку «Написать» или адрес электронной почты в антете происходит открытие почтовой программы, реализованное базовыми средствами HTML.

# Используемый стэк

- ReactJS
- Sass/SCSS
- classnames

