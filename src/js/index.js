import mobileNav from './modules/mobile-nav.js';
import Choices from 'choices.js';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:

mobileNav();

// Получаем все радио-кнопки с именем "rating"
const ratingItems = document.querySelectorAll('input[name="stars"]');

// Получаем элемент для отображения значения
const selectedValueElement = document.getElementById('selectedValue');

// Добавляем обработчик события для каждой радио-кнопки
ratingItems.forEach((item) => {
	item.addEventListener('change', function () {
		selectedValueElement.innerText = this.value;
	});
});

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
	searchEnabled: false,
	shouldSort: false,
});

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
