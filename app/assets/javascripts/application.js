import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import 'controllers';

Rails.start();
Turbolinks.start();

const application = Application.start();
const context = require.context("../controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

document.addEventListener("DOMContentLoaded", function() {
    const customSlider = document.querySelector('.custom-slider');
    const customSlides = document.querySelectorAll('.custom-slide');
    const customPrevButton = document.querySelector('.custom-prev-button');
    const customNextButton = document.querySelector('.custom-next-button');
    let currentCustomSlide = 0;
  
    function showCustomSlide(index) {
      customSlides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
    }
  
    customPrevButton.addEventListener('click', () => {
      currentCustomSlide = (currentCustomSlide - 1 + customSlides.length) % customSlides.length;
      showCustomSlide(currentCustomSlide);
    });
  
    customNextButton.addEventListener('click', () => {
      currentCustomSlide = (currentCustomSlide + 1) % customSlides.length;
      showCustomSlide(currentCustomSlide);
    });
  
    showCustomSlide(currentCustomSlide);
  });

  // your-script.js

// Başka bir modülden fonksiyon veya değişkenleri içe aktarın
import { functionName } from './other-module.js';

// Bu modülün bir parçası olarak bir fonksiyon veya değişkeni dışa aktarın
export function myFunction() {
  // Fonksiyonunuzun kodu burada
}