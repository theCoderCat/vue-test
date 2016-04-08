(function() {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello from the other world'
        }
    });

    var todoApp = new Vue({
        el: '#todo',
        data: {
            newTask: '',
            todo: [{
                text: 'get up at 6'
            }, {
                text: 'execise'
            }, {
                text: 'breakfast'
            }, {
                text: 'go to work'
            }]
        },
        methods: {
            addTask: function() {
                var text = this.newTask.trim();
                if (text) {
                    this.todo.push({
                        text: text
                    });
                    this.newTask = '';
                }
            },
            removeTask: function(index) {
                this.todo.splice(index, 1);
            },
            reverseTasks: function() {
                this.todo.reverse();
            }
        }
    });

    var nameApp = new Vue({
        el: '#name',
        data: {
            firstName: 'Wild',
            lastName: 'Cat'
        },
        computed: {
            fullName: {
                get: function() {
                    return this.firstName + ' ' + this.lastName
                },
                set: function(newVal) {
                    var names = newVal.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[names.length - 1];
                }
            }
        }
    });
})();