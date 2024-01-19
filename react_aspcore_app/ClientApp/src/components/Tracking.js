const Tracking = {
    init: function (userId) {
      this.userId = userId;
  
      // Add event listener for button clicks
      const buttons = document.getElementsByTagName('button');
      Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => this.logEvent('buttonClicked', e, { buttonId: e.target.id }));
        button.addEventListener('focus', (e) => this.logEvent('buttonFocused', e, { buttonId: e.target.id }));
        button.addEventListener('blur', (e) => this.logEvent('buttonBlurred', e, { buttonId: e.target.id }));
      });
  
      // Add event listener for keydown (to detect tabbing navigation on buttons)
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          const focusedElement = document.activeElement;
          if (focusedElement.tagName === 'BUTTON') {
            this.logEvent('buttonTabbed', e, { buttonId: focusedElement.id });
          } else if (focusedElement.tagName === 'INPUT') {
            this.logEvent('inputTabbed', e, { inputId: focusedElement.id });
          }
        }
      });
  
      // Add event listener for input fields focus and blur
      const inputs = document.getElementsByTagName('input');
      Array.from(inputs).forEach((input) => {
        input.addEventListener('focus', (e) => this.logEvent('inputFocused', e, { inputId: e.target.id }));
        input.addEventListener('blur', (e) => this.logEvent('inputBlurred', e, { inputId: e.target.id }));
      });
    },
  
    logEvent: function (eventName, event, additionalData = {}) {
      const req = {
        UserId: this.userId,
        Element: event.target.tagName,
        TimeEvent: Date.now(),
        EventDurance: 110009,
        EventName: eventName,
        ...additionalData,
      };
  
      const headers = {
        type: 'application/json',
      };
  
      const blob = new Blob([JSON.stringify(req)], headers);
      navigator.sendBeacon('https://localhost:7259/tracking', blob);
    },
  };