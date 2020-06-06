<template>
    <div class="container detail">
        <div class="book-title">
            <h3>{{user.nama}}</h3>
        </div>
        <!-- <div class="book-author">
            by 
        </div> -->
        <table class='table table-bordered'>
            <tr>
                <td>Nama:</td>
                <td>{{ user.nama }}</td>
            </tr>
            <tr>
                <td>Username:</td>
                <td>{{ user.username }}</td>
            </tr>
        </table>
    </div>        
</template>
<script>
export default {
    mounted() {
        this.getData();
    },
    data(){
        return {
            user: {},
            user_id: this.$route.params.id,
            success: false,
            error: false
        }   
    },
    methods: {
        async getData() {
            try {
                const user = await this.$axios.get(`/user/${this.user_id}`);
                
                if (user)
                    this.success = true; 
                    this.user = user.data.data;
            }
            catch(err) {
                if(err.response.data.message == 'token authentication is required' ||
                    err.response.data.message == 'invalid token') {
                    this.$router.push('/login');
                }
                else {
                    this.error = err.response.message;
                }
            }
        }
    }
}
</script>