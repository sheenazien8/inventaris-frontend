<template>
        <div class="container">
            <div class="form">
                <div class="alert-success" v-if="this.add.success !== false">{{ this.add.success }}</div>
                <div class="alert alert-danger" v-if="this.add.error !== false">
                    {{ this.add.error }}
                </div>
                <h3>Add gudang</h3>
                <div class="card-body">
                    <form action="" @submit.prevent="addGudang()">
                        <input type="text" placeholder="Nama Gudang..." class='form-control' v-model="add.nama_gudang">
                        <input type="text" placeholder="Alamat Gudang..." class='form-control' v-model="add.alamat">
                        <input type="submit" value="Add gudang" class='btn float-right'>
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
                nama_gudang: '',
                alamat: '',
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
        async addGudang() {
            try {
                const res = await this.$axios.post(`/gudang`, {
                    nama_gudang: this.add.nama_gudang,
                    alamat: this.add.alamat
                })

                if (res) {
                    this.add.success = `Gudang successfully added`;
                    this.add.nama_gudang = '';
                    this.add.alamat = '';
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