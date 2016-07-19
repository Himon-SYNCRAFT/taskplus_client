app.directive('scTable', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/table.html',
        scope: {
            items: '=',
            columns: '=',
            attributes: '=',
            add: '=',
            edit: '=',
            delete: '=',
            save: '=',
            mode: '='
        }
    };
});
