<template>
    <div class="container">
        <div class="card books">
            <div class="card-header">
                <h4>Users</h4>
            </div>
            <div class="card-body">
                <router-link to="/user/add" class='btn float-right'>Add User</router-link>
                <div class="table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{user.username}}</td>
                                <td><router-link :to="`/user/${user.id}`" class='btn'>Open</router-link></td>
                                <td><router-link :to="`/user/edit/${user.id}`" class='btn'>Edit</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.getData();
    },
    data() {
        return {
            users: []
        }
    },
    methods: {
        async getData() {
            try {
                const res = await this.$axios.post(`/auth/token`);
                const user = await this.$axios.get(`user`);
                
                if (user) this.users = user.data.data.data;
            }
            catch(err) {
                if(err.response.data.message == 'token authentication is required' ||
                    err.response.data.message == 'invalid token') {
                    this.$router.push('/login');
                }
            }                
        }
    }
}
</script>
<style>

</style>