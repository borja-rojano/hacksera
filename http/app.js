
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

var app = new Vue({
    el: '#app',
    data: {
        message: 'Pic Viewer',
        pics: null,
        viewer: false,
        scrollViewer: false,
        pointer: 0,

    },

    computed: {

    },

    methods: {
        getPics: function () {
            var vm = this

            getJSON('https://jsonplaceholder.typicode.com/albums/1/photos',
                function(err, data) {
                    if (err !== null) {
                        console.log('Something went wrong: ' + err)
                    } else {
                        vm.pics = data
                        console.log("Fetched");
                    }
                })
        },

        showScroll: function () {

            this.scrollViewer = true
            this.viewer = false

        },

        showViewer: function () {
            this.viewer = true
            this.scrollViewer = false
        }
    },

    mounted(){
        this.getPics()
    },
})



