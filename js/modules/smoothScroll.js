export default class SmoothScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      // quando o parâmetro options não é definido no código,
      // o padrão adotado para a animação de scroll será
      // sempre o informado abaixo.
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    // redireciona o this para que possa ser usado
    // referenciando sempre o objeto de SmoothScroll
    // e não o this de cada método. This = SmoothScroll
    // (SmoothScroll.addEventLink(), por exemplo)
    this.scroll = this.scroll.bind(this);
  }

  scroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addEventLink() {
    this.linksInternos.forEach((item) => {
      item.addEventListener('click', this.scroll);
    });
  }

  init() {
    // verifica se existe algum parametro informado
    // em linksinternos
    if (this.linksInternos.length) {
      this.addEventLink();
    }
    return this;
  }
}
