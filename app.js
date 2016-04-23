new Vue({
    el: '#app',
    data: function(){
        return {
            user: ''
        }
    },
    ready: function(){},
    methods: {
        'getUser': function(username){
            this.$http
            .get('https://api.github.com/users/' + username, function(data){
                this.user = data;
                document.querySelector('#username-input').value = '';
            })
            .error(function(error){
                console.log(error);
            })
        }
    }

});
