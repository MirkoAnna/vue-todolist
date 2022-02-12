const root = new Vue (
    {
        el: '#root',
        data: {
            newToDo: '',
            toDos: [
                {
                    text: 'ToDo1',
                    done: false
                },
                {
                    text: 'ToDo2',
                    done: true
                },
                {
                    text: 'ToDo3',
                    done: true
                },
            ],
        },
        methods: {
            addToDo() {
                if (this.newToDo != '') {
                    this.toDos.push({text: this.newToDo, done: false});
                    this.newToDo = '';
                }
            },
            doneUndone(toDo) {
                toDo.done = !toDo.done;
            },
        }
    }
);