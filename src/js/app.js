import 'jquery'
import '../css/main.scss'
import '../users.html'
import {RandomGenerator} from "./random-generator";

const outputParagraph = $("#outputParagraph");
const outputRandomInt = () => {
    outputParagraph.text(RandomGenerator.randomInteger());
};
const outputRandomRange = function () {
    outputParagraph.text(RandomGenerator.randomRange(1, 1000));
};
const buttonRandInt = jQuery("#randomInt");
const buttonRandRange = document.querySelector("#randomRange");

buttonRandInt.click(outputRandomInt);
buttonRandRange.addEventListener('click', outputRandomRange);