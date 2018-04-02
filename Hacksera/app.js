var app = new Vue({
    el: '#app',

//region Data
    data: {
        message: 'Welcome to HACKSERA',
        currentDb: 'KIME',
        history: [ ],
        newQuery: '',

    },
//endregion

    methods: {
        update: function () {
            var updateSS = {
                db: this.currentDb,
                query: this.newQuery,
                results: 169
            }

            this.history.push(updateSS)
            this.newQuery = ''
        }
    },

})