import leftPad from 'left-pad';

class Counter {
  constructor(
    elementSelector = '.js-counter',
    numberSelector = '.js-counter-number',
    btnUpSelector = '.js-counter-up',
    btnDownSelector = '.js-counter-down'
  ) {
    let $element = document.querySelector(elementSelector);
    this.$number = $element.querySelector(numberSelector);
    this.$btnUp = $element.querySelector(btnUpSelector);
    this.$btnDown = $element.querySelector(btnDownSelector);
    
    this.digits = 3;

    this._bindEvents();
  }

  _bindEvents() {
    this.$btnUp.addEventListener('click', () => this.countUp());
    this.$btnDown.addEventListener('click', () => this.countDown());
  }

  _formatNumber(number) {
    return leftPad(number, this.digits, 0);
  }

  countUp(increment = 1) {
    this.setNumber(this.getNumber() + increment);
  }

  countDown(increment = 1) {
    this.setNumber(this.getNumber() - increment);
  }

  setNumber(number) {
    this.$number.innerText = this._formatNumber(number);
  }

  getNumber() {
    return parseInt(this.$number.innerText);
  }
}

new Counter();
