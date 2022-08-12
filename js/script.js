import Funcionamento from './modules/funcionamento.js';
import SmoothScroll from './modules/smoothScroll.js';
import ScrollAnimation from './modules/scrollAnimation.js';
import ToolTip from './modules/tooltip.js';

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const scrollAnimation = new ScrollAnimation("[data-anime='scroll']");
scrollAnimation.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();
