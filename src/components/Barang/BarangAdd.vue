<template>
        <div class="container">
            <div class="form">
                <div class="alert-success" v-if="this.add.success !== false">{{ this.add.success }}</div>
                <div class="alert alert-danger" v-if="this.add.error !== false">
                    {{ this.add.error }}
                </div>
                <h3>Add barang</h3>
                <div class="card-body">
                    <form action="" @submit.prevent="addBarang()">
                        <input type="text" placeholder="Nama Barang..." class='form-control' v-model="add.nama_barang">
                        <input type="submit" value="Add barang" class='btn float-right'>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    mounted() {
        this.check()
    },
    data() {
        return {
            add: {
                nama_barang: '',
                success: false,
                error: false
            },
            errors: []
        }
    },
    methods: {
        async check() {
            try {
                const res = await this.$axios.post(`/auth/token`);
            }
            catch(err) {
                if(err.response.data.message == 'token authentication is required' ||
                    err.response.data.message == 'invalid token') {
                    this.$router.push('/login');
                }
            }
        },
        async addBarang() {
            try {
                const res = await this.$axios.post(`/barang`, {
                    nama_barang:this.add.nama_barang
                })

                if (res) {
                    this.add.success = `Barang successfully added`;
                    this.add.nama_barang = '';
                }
            }
            catch(err) {
                if(err.response.data.message == 'token authentication is required' ||
                    err.response.data.message == 'invalid token') {
                    this.$router.push('/login');
                } else {
                    this.add.success = false;
                    this.add.error = err.response.data.message;
                    error.response.data.errors.map((error) => {
                        this.errors.push(error);
                    });
                }
            }
        }
    }
}
</script>