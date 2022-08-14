export default class ToolTip {
  constructor(tooltips) {
    this.tooltip = document.querySelectorAll(tooltips);
    // redireciona o this para que possa ser usado
    // referenciando sempre o objeto de SmoothScroll
    // e não o this de cada método. This = Tooltip
    // (Tooltip.addTooltipsEvent(), por exemplo)
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 145}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Quando o mouse sai do perímetro do alvo, remove a tooltip
  // e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    if (window.screen.width > 600) {
      this.tooltipBox.remove();
    }
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // cria a tolltip box e coloca no body
  criarToolTip(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  closeTooltip(event) {
    const { target } = event;
    if (target.classList.contains('tooltip')) {
      target.remove();
    }
    return this;
  }

  clickWatcher() {
    if (window.screen.width <= 600) {
      window.addEventListener('click', this.closeTooltip);
    }
  }

  // Cria a tooltip e adiciona os eventos de
  // mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarToolTip(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Adiciona os eventos de mouseover a cada tooltip existente
  addTooltipsEvent() {
    this.tooltip.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipsEvent();
    }
    this.clickWatcher();
    return this;
  }
}
