<template>
    <div class="container">
        <div class="card books">
            <div class="card-header">
                <h4>Barang</h4>
            </div>
            <div class="card-body">
                <router-link to="/barang/add" class='btn float-right'>Add Barang</router-link>
                <div class="table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Kode Barang</th>
                                <th>Nama Barang</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="barang in barangs" :key="barang.id">
                                <td>{{ barang.kode_barang }}</td>
                                <td>{{ barang.nama_barang }}</td>
                                <td><router-link :to="`/barang/${barang.id}`" class='btn'>Open</router-link></td>
                                <td><router-link :to="`/barang/edit/${barang.id}`" class='btn'>Edit</router-link></td>
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
            barangs: []
        }
    },
    methods: {
        async getData() {
            try {
                const res = await this.$axios.post(`/auth/token`);
                const barang = await this.$axios.get(`barang`);
                
                if (barang) this.barangs = barang.data.data.data;
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