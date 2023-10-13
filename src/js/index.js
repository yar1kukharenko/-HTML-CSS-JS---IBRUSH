import { closeMobileNav, mobileNav } from './modules/mobile-nav.js';
import Choices from 'choices.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
	},
});

document.querySelectorAll('.showPopup').forEach((button) => {
	button.addEventListener('click', function () {
		document.getElementById('overlay').style.display = 'block';
	});
});

document.getElementById('overlay').addEventListener('click', function (event) {
	if (event.target === document.getElementById('overlay')) {
		document.getElementById('overlay').style.display = 'none';
	}
});

document.getElementById('closePopup').addEventListener('click', function () {
	document.getElementById('overlay').style.display = 'none';
});
