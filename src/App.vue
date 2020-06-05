<template>
  <div id="app">
    <div class="header">
        <router-link to="/book">
        <span class="buku">Simple</span><span class="bagus">Inventaris</span>
        </router-link>
        <div class="right">
            <a href="#" @click="logout">Logout</a>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  mounted() {
    this.check()
  },
  name: 'app',
  components: {

  },
  methods: {
    async logout() {
      try {
        const signout = await this.$axios.post(`/auth/token`);

        if (signout.data.status == 'success') {
          localStorage.removeItem('token');
          this.$axios.defaults.headers.common['Authorization'] = '';
          this.$router.push('/login');
        }
      }
      catch(err) {
        if(err.response.message == 'token authentication is required' ||
          err.response.message == 'invalid token') {
          this.$router.push('/login');
        }
      }
    },
    async check() {
      try {
        const check = await this.$axios.post(`/auth/token`);

        if (check.status == 'success') this.$router.push('/user');
      }
      catch(err) {
        if(err.response.message == 'token authentication is required' ||
          err.response.message == 'invalid token') {
          this.$router.push('/login');
        }
      }
    }
  }
}
</script>

<style>

</style>
