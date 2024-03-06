import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";

const initHomePage = (element) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode1 = document.querySelector(".page");
const rootNode2 = document.querySelector(".page2");
// const rootNode2 = document.querySelector("#root2");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage(rootNode1);
  // initHomePage(rootNode2);

  // инициализация шапки страницы с мок датой
  initHeader(rootNode1);
  // initHeader(rootNode2);

  // инициализация хиро раздела
  initHero(rootNode1);
  // initHero(rootNode2);

  // инициализация хиро раздела
  initBrands();

  // инициализация хиро раздела
  initWhatIsGpt();

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();



  // инициализация бургера для адаптивного меню
  initBurger();
};

export default homePage;
