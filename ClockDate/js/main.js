window.onload = function () {
	document.registerElement('clock-calendar', ClockCalendar);
}
class ClockCalendarData {

	getValue (state, clockFormat, calendarFormat) {
		let result;

		if (state === 'clock') {
			result = this.getTime(clockFormat);
		} else if (state === 'calendar') {
			result = this.getDate(calendarFormat);
		}

		return result;
	}

	getTime (format) {
		let result;

		if (format === 'HH:MM') {
			result = new Date().toLocaleTimeString('en-US', {
				hour12: false,
				hour: "numeric",
				minute: "numeric"
			});
		} else {
			result = new Date().toLocaleTimeString('en-US', {
				hour12: false,
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			});
		}

		return result;
	}

	getDate (format) {
		let result;
		let today = new Date();
		let day = today.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 });
		let month = (today.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
		let year = today.getFullYear();

		if (format === 'MM/DD/YY') {
			result = month + '/' + day + '/' + year.toString().slice(-2);
		} else {
			result = day + '.' + month + '.' + year;
		}

		return result;
	}
};
class ClockCalendar extends HTMLElement {

  get state () {
    return this.getAttribute('data-state');
  }
  set state (value) {
    this.setAttribute('data-state', value);
  }

  get calendarFormat () {
    return this.getAttribute('data-calendarFormat');
  }
  set calendarFormat (value) {
    this.setAttribute('data-calendarFormat', value);
  }

  get clockFormat () {
    return this.getAttribute('data-clockFormat');
  }
  set clockFormat (value) {
    this.setAttribute('data-clockFormat', value);
  }

  attachedCallback () {
    this.createShadowRoot().innerHTML = document.querySelector('#clockCalendarTemplate').innerHTML;
    this.body = document.body;
    this.container = this.shadowRoot.querySelector('#clock-calendar');
    this.data = new ClockCalendarData();
    this.oldValue = '';
    this.addEvents();
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

  addEvents () {
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
    });
  }

  updateValue () {
    let newValue = this.data.getValue(this.state, this.clockFormat, this.calendarFormat);

    if (newValue !== this.oldValue) {
      this.container.innerHTML = newValue;
      this.oldValue = newValue;
    }
  }
};