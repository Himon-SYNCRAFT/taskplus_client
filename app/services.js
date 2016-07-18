app.factory('User', function($resource) {
    return $resource('http://localhost:5000/user/:id', {
        id: '@id'
    }, {
        query: {
            method: 'POST',
            url: 'http://localhost:5000/users',
            isArray: true,
        },
        update: {
            method: 'PUT',
        },
        all: {
            method: 'GET',
            url: 'http://localhost:5000/users',
            isArray: true,
        },
    });
});

app.factory('Task', function($resource) {
    return $resource('http://localhost:5000/task/:id', {
        id: '@id'
    }, {
        query: {
            method: 'POST',
            url: 'http://localhost:5000/tasks',
            isArray: true,
        },
        update: {
            method: 'PUT',
        },
        all: {
            method: 'GET',
            url: 'http://localhost:5000/tasks',
            isArray: true,
        },
    });
});

app.factory('TaskStatus', function($resource) {
    return $resource('http://localhost:5000/task/status/:id', {
        id: '@id'
    }, {
        query: {
            method: 'POST',
            url: 'http://localhost:5000/task/statuses',
            isArray: true,
        },
        update: {
            method: 'PUT',
        },
        all: {
            method: 'GET',
            url: 'http://localhost:5000/task/statuses',
            isArray: true,
        },
    });
});

app.factory('TaskType', function($resource) {
    return $resource('http://localhost:5000/task/type/:id', {
        id: '@id'
    }, {
        query: {
            method: 'POST',
            url: 'http://localhost:5000/task/types',
            isArray: true,
        },
        update: {
            method: 'PUT',
        }
    });
});

app.factory('TaskAttribute', function($resource) {
    return $resource('http://localhost:5000/task/attribute/:id', {
        id: '@id'
    }, {
        query: {
            method: 'POST',
            url: 'http://localhost:5000/task/attributes',
            isArray: true,
        },
        update: {
            method: 'PUT',
        }
    });
});

app.factory('TaskAttributeToTaskType', function($resource) {
    return $resource('http://localhost:5000/task/attribute-to-type/:task_type_id/:task_attribute_id', {
        task_type_id: '@task_type_id',
        task_attribute_id: '@task_attribute_id'
    }, {
        query: {
            method: 'POST',
            url: 'http://localhost:5000/task/attribute-to-types',
            isArray: true,
        },
        update: {
            method: 'PUT',
        }
    });
});

app.factory('TaskAttributeValue', function($resource) {
    return $resource('http://localhost:5000/task/attribute/value/:task_id/:task_attribute_id', {
        task_id: '@task_id',
        task_attribute_id: '@task_attribute_id'
    }, {
        query: {
            method: 'POST',
            url: 'http://localhost:5000/task/attribute/values',
            isArray: true,
        },
        update: {
            method: 'PUT',
        }
    });
});
