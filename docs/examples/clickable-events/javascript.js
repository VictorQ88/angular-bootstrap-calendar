angular
  .module('mwl.calendar.docs')
  .controller('ClickableEventsCtrl', function($window, $ocLazyLoad, $scope, moment, alert, calendarConfig, calendarEventTitle) {

    var vm = this;

    vm.events = [];

    function random() {
      var events = [];
      var days = _(31).range();
      _(days).each(function(day) {
        var event_for_day = all_events(day);
        events = events.concat(event_for_day);
      });
      console.log('events :', events);
      // events = _(events).flatten();
      // console.log('events :', events);
      vm.events = events;

    }

    random();

    function special_events(day) {
      var number_day = day + 1;
      var start_date = new Date(2019, 06, number_day);
      return [
        {
          title: 'event',
          type: 'event',
          color: calendarConfig.colorTypes.event,
          startsAt: start_date
        },
        {
          title: 'task',
          type: 'task',
          color: calendarConfig.colorTypes.task,
          startsAt: start_date
        },
        {
          title: 'exam',
          type: 'exam',
          color: calendarConfig.colorTypes.exam,
          startsAt: start_date
        }
      ];
    }

    function all_events(day) {
      var number_day = day + 1;

      var start_date = new Date(2019, 06, number_day);
      return [
        {
          title: 'event',
          type: 'event',
          color: calendarConfig.colorTypes.event,
          startsAt: start_date
        },
        {
          title: 'task',
          type: 'task',
          color: calendarConfig.colorTypes.task,
          startsAt: start_date
        },
        {
          title: 'exam',
          type: 'exam',
          color: calendarConfig.colorTypes.exam,
          startsAt: start_date
        },
        {
          title: 'activity',
          type: 'activity',
          color: calendarConfig.colorTypes.activity,
          startsAt: start_date
        }
      ];
    }

    $scope.types = [];

    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();
    vm.cellIsOpen = false;
    vm.incrementsBadgeTotal = false;

    vm.eventClicked = function(event) {
      console.log('event :', event);
      alert.show('Clicked', event);
    };

    $window.moment = $window.moment || moment;

    $ocLazyLoad.load('node_modules/moment/locale/es.js').then(function() {
      $scope.types = _(vm.events).uniq(_('type').property());
      moment.locale('es');
    });

    calendarEventTitle.monthViewTooltip = calendarEventTitle.weekViewTooltip = calendarEventTitle.dayViewTooltip = function(event) {
      return event.title;
    };

    // vm.cellModifier = function(cell) {
    //   cell.badgeTotal = '';
    // };
  });
