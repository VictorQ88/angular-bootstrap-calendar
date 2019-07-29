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
    displayAllMonthEvents: false,
    templates: {},
    colorTypes: {
      task: {
        primary: '#69aa46',
        secondary: '#dbffc7',
        icon: 'fa fa-file-text'
      },
      activity: {
        primary: '#478fca',
        secondary: '#d6edff',
        icon: 'fa fa-book'
      },
      exam: {
        primary: '#ffb752',
        secondary: '#fffad6',
        icon: 'fa fa-calculator'
      },
      event: {
        primary: '#800080',
        secondary: '#ffe0ff',
        icon: 'fa fa-newspaper-o'
      },
      attendance_late: {
        primary: '#d15b47',
        secondary: '#ffd6cf',
        icon: 'icon-minus-sign'
      }
    }
  });
