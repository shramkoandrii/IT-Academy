class ClockCalendar extends HTMLElement {

  get state () {
    return this.getAttribute('state');
  }
  set state (value) {
    this.setAttribute('state', value);
  }

  get calendarFormat () {
    return this.getAttribute('calendarFormat');
  }
  set calendarFormat (value) {
    this.setAttribute('calendarFormat', value);
  }

  get clockFormat () {
    return this.getAttribute('clockFormat');
  }
  set clockFormat (value) {
    this.setAttribute('clockFormat', value);
  }

  attachedCallback () {
    this.createShadowRoot().innerHTML = document.querySelector('#clockCalendarTemplate').innerHTML;
    this.body = document.body;
    this.container = this.shadowRoot.querySelector('#clock-calendar');
    this.model = new ClockCalendarData();
    this.oldValue = '';
    this.attachEvents();
    this.start();
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (newValue !== oldValue) {
    this[name] = newValue;
    this.updateValue();
    }
  }

  start () {
    this.updateValue();

    this.intervalId = setInterval(() => {
        this.updateValue();
    }, 1000 );
  }

  attachEvents () {
      this.container.addEventListener('mouseover', () => this.body.classList.add("hover"));
      this.container.addEventListener('mouseleave', () => this.body.classList.remove("hover"));

      this.container.addEventListener('click', () => {
        if (this.state === 'clock') {
          this.clockFormat = this.clockFormat === 'HH:MM' ? 'HH:MM::SS' : 'HH:MM';
        } else {
        this.calendarFormat = this.calendarFormat === 'MM/DD/YY' ? 'DD.MM.YYYY' : 'MM/DD/YY';
        }
      });

      this.container.addEventListener('contextmenu', (event) => {
          event.preventDefault();
          this.state = this.state === 'clock' ? 'calendar' : 'clock';
      }, false);
  }

  updateValue () {
      let newValue = this.model.getValue(this.state, this.clockFormat, this.calendarFormat);

      if (newValue !== this.oldValue) {
        this.container.innerHTML = newValue;
        this.oldValue = newValue;
      }
  }
};