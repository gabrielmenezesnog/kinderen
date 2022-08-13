(()=>{"use strict";new class{constructor(t,e){this.funcionamento=document.querySelector(t),this.activeClass=e}dadosFuncionamento(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}dadosAgora(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}estaAberto(){const t=-1!==this.diasSemana.indexOf(this.diaAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&e}ativaAberto(){this.estaAberto()&&(this.funcionamento.classList.add(this.activeClass),this.funcionamento.innerText="Aberto agora")}init(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.ativaAberto()),this}}("[data-semana]","aberto").init(),new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scroll=this.scroll.bind(this)}scroll(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addEventLink(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scroll)}))}init(){return this.linksInternos.length&&this.addEventLink(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.6*window.innerHeight,this.checkDistance=function(t,e){let o;return(...e)=>{o&&clearTimeout(o),o=setTimeout((()=>{t(...e),o=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowMetade)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset&&t.element.classList.add("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anime='scroll']").init(),new class{constructor(t){this.tooltip=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-145+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarToolTip(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.criarToolTip(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltip.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltip.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init()})();