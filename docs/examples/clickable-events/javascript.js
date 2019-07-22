angular
  .module('mwl.calendar.docs')
  .controller('ClickableEventsCtrl', function ($window, $ocLazyLoad, $scope, moment, alert, calendarConfig, calendarEventTitle) {

    var vm = this;

    vm.events = [
      {
        title: 'Click me',
        type: 'task',
        color: calendarConfig.colorTypes.info,
        startsAt: new Date('2019-07-20'),
        endsAt: new Date('2019-07-23'),
        cssClass: 'fa fa-calendar-check-o'
      },

      {
        title: 'Click me',
        type: 'task',
        color: calendarConfig.colorTypes.warning,
        startsAt: new Date('2019-07-18'),
        endsAt: new Date('2019-07-20'),
        cssClass: 'fa fa-warning'
      },
      {
        title: 'Or click me',
        type: 'task',
        color: calendarConfig.colorTypes.special,
        startsAt: moment().startOf('month').toDate(),
        cssClass: 'fa fa-graduation-cap'
      },
      {
        title: 'assistance',
        type: 'assistance',
        color: calendarConfig.colorTypes.inverse,
        startsAt: new Date('2019-07-23'),
        cssClass: 'fa fa-group'
      },
      {
        title: 'other',
        type: 'other',
        color: calendarConfig.colorTypes.success,
        startsAt: new Date('2019-07-15'),
        cssClass: 'fa fa-times-circle-o red'
      }
    ];

    $scope.types = [];

    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();
    vm.cellIsOpen = false;
    vm.incrementsBadgeTotal = false;

    vm.eventClicked = function (event) {
      console.log('event :', event);
      alert.show('Clicked', event);
    };

    $window.moment = $window.moment || moment;

    $ocLazyLoad.load('node_modules/moment/locale/es.js').then(function () {
      $scope.types = _(vm.events).uniq(_('type').property());
      moment.locale('es');
    });

    calendarEventTitle.monthViewTooltip = calendarEventTitle.weekViewTooltip = calendarEventTitle.dayViewTooltip = function () {
      return '';
    };

    vm.cellModifier = function (cell) {
      cell.badgeTotal = '';
    };

  });
