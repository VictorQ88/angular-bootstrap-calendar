'use strict';

var angular = require('angular');

angular
  .module('mwl.calendar')
  .constant('calendarConfig', {
    allDateFormats: {
      moment: {
        date: {
          hour: 'ha',
          day: 'D MMM',
          month: 'MMMM',
          weekDay: 'dddd',
          time: 'HH:mm',
          datetime: 'MMM D, h:mm a'
        },
        title: {
          day: 'dddd D MMMM, YYYY',
          week: 'Semana {week} de {year}',
          month: 'MMMM, YYYY',
          year: 'YYYY'
        }
      }
    },
    get dateFormats() {
      return this.allDateFormats[this.dateFormatter].date;
    },
    get titleFormats() {
      return this.allDateFormats[this.dateFormatter].title;
    },
    dateFormatter: 'moment',
    showTimesOnWeekView: false,
    displayAllMonthEvents: true,
    i18nStrings: {
      weekNumber: 'Semana {week}'
    },
    templates: {},
    colorTypes: {
      info: {
        primary: '#1e90ff',
        secondary: '#d1e8ff'
      },
      important: {
        primary: '#ad2121',
        secondary: '#fae3e3'
      },
      warning: {
        primary: '#e3bc08',
        secondary: '#fdf1ba'
      },
      inverse: {
        primary: '#1b1b1b',
        secondary: '#c1c1c1'
      },
      special: {
        primary: '#800080',
        secondary: '#ffe6ff'
      },
      success: {
        primary: '#006400',
        secondary: '#caffca'
      }
    }
  });
