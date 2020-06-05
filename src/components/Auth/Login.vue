<template>
    <div class="container auth">
        <div class="form">
            <h3>Login</h3>
            <div class="alert alert-danger" v-if="loginData.error !== false">
                {{loginData.error.message}}
            </div>
            <form action="" class='mt-20' @submit.prevent="login()">
                <input type="text" class='form-control' placeholder="Username" v-model="loginData.username">
                <input type="password" class='form-control' placeholder="Password" v-model="loginData.password">
                <input type="submit" value="Login" class='btn float-right'>
            </form>
        </div>
        <div class="form">
            <h3>Register</h3>
            <div class="alert alert-danger" v-if="registerData.error.status == false">
                <ul>
                    <li v-for="(key) in registerData.error.errors" :key="key">
                        {{key[0]}}
                    </li>
                </ul>
            </div>
            <form action="" @submit.prevent="register()">
                <input class='form-control' type="text" placeholder="Nama" v-model="registerData.nama">
                <input class='form-control' type="text" placeholder="Username" v-model="registerData.username">
                <input class='form-control' type="password" placeholder="Password" v-model="registerData.password">
                <input class='form-control' type="password" placeholder="Confirm Password" v-model="registerData.confirm_password">
                <input class='btn float-right' type="submit" value="Register">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    async mounted() {
        try {
            const auth =  await this.$axios.post(`/auth/token`);
            console.log(auth)

            // if (auth.data.status == 'success') this.$router.push('/book');
            // else this.$router.push('/login');
        }
        catch(err) {
            // this.$router.push('/login');
        }
    },
    data() {
        return {
            loginData: {
                username: '',
                password: '',
                success: false,
                error: false,
            },
            registerData: {
                error: '',
                username: '',
                password: '',
                confirm_password: '',
                nama: '',
            }
        }
    },
    methods: {
        async login() {
            try {
                const signin = await this.$axios.post('/auth/login', {
                    username: this.loginData.username, 
                    password: this.loginData.password
                });

                if (signin) {
                    let token = `Bearer ${signin.data.token}`;
                    localStorage.setItem('token', token);
                    this.$axios.defaults.headers.common['Authorization'] = token;
                    this.$router.push('/user');
                }
            }
            catch(err) {
                this.loginData.success = false;
                this.loginData.error = err.response.data.message;
            }
        },
        async register() {
            try {
                const signup = await this.$axios.post("/auth/register", {
                    username: this.registerData.username, 
                    password: this.registerData.password, 
                    nama: this.registerData.nama
                });

                if (signup) {
                    let token = `Bearer ${signup.data.token}`;
                    localStorage.setItem('token',token);
                    this.$axios.defaults.headers.common['Authorization'] = token;
                    this.$router.push('/user');
                    console.log(res);
                }
            }
            catch(err) {
                this.registerData.error = err.response.data;
                console.log(err.response);
            }
        }
    }
}
</script>