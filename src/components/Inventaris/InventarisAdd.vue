<template>
        <div class="container">
            <div class="form">
                <div class="alert-success" v-if="this.add.success !== false">{{ this.add.success }}</div>
                <div class="alert alert-danger" v-if="this.add.error !== false">
                    {{ this.add.error }}
                </div>
                <h3>Add inventaris</h3>
                <div class="card-body">
                    <form action="" @submit.prevent="addInventaris()">
                        <select v-model="add.gudang_id" class='form-control'>
                            <option disabled value="0">Pilih gudang</option>
                            <option v-for="gudang in gudangOptions" :value="gudang.id">{{ gudang.kode_gudang }} - {{ gudang.nama_gudang }}</option>
                        </select>
                        <select v-model="add.barang_id" class='form-control'>
                            <option disabled value="0">Pilih barang</option>
                            <option v-for="barang in barangOptions" :value="barang.id">{{ barang.kode_barang }} - {{ barang.nama_barang }}</option>
                        </select>
                        <input type="number" placeholder="Stok Inventaris..." class='form-control' v-model="add.stok">
                        <input type="submit" value="Add inventaris" class='btn float-right'>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    mounted() {
        this.check()
        this.getBarangOptions()
        this.getGudangOptions()
    },
    data() {
        return {
            add: {
                barang_id: 0,
                gudang_id: 0,
                stok: 0,
                success: false,
                error: false
            },
            barangOptions: [],
            gudangOptions: [],
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
        async addInventaris() {
            try {
                const res = await this.$axios.post(`/inventaris`, {
                    gudang_id: this.add.gudang_id,
                    barang_id: this.add.barang_id,
                    stok: this.add.stok,
                })

                if (res) {
                    this.add.success = `Inventaris successfully added`;
                    this.add.gudang_id = 0;
                    this.add.barang_id = 0;
                    this.add.stok = 0;
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
        },
        async getBarangOptions() {
            try {
                const barang = await this.$axios.get(`/barang`)

                if (barang) {
                    this.barangOptions = barang.data.data.data;
                }
            }
            catch(err) {

            }
        },
        async getGudangOptions() {
            try {
                const gudang = await this.$axios.get(`/gudang`)

                if (gudang) {
                    this.gudangOptions = gudang.data.data.data;
                }
            }
            catch(err) {
                
            }
        }
    }
}
</script>