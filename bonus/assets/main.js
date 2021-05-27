var root = new Vue(
    {
        el: '#root',
        data: {
            emailList: [],
        },
        methods: {
        },
        mounted() {
            for(let i = 0; i < 10; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=> {
                    this.email = response.data.response;
                    this.emailList.push(this.email);
                });
            }
            
        },
    }
);