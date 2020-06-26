<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">All Students</div>

                    <div class="card-body">
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col" idth="170px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in customers" :key="customer.id">
                            <th scope="row">{{customer.id}}</th>
                            <td>{{customer.name}}</td>
                            <td>{{customer.email}}</td>
                            <td width="170px">
                                <router-link class="btn btn-success" :to="{ name:'edit',params:{id:customer.id}}">Edit</router-link>
                                <a class="btn btn-danger" @click="deleteCustomer(customer.id)">Delete</a>
                            </td>
                            </tr>

                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

        <script>
            export default {

        data(){
            return{   customers:[],
        }
        },

        methods:{
            loadcustomers(){

                    axios.get('/api/customer').then(response=>{this.customers=response.data}).catch(err => {
                        console.log(err)
                })
            }
            ,

        deleteCustomer(id){
        axios.delete(`/api/customer/${id}`).then(response=>[
                    console.log(response)
                ]).catch(err => {
                        console.log(err)
                })

                  this.loadcustomers();

        }



        },






                mounted() {

                    this.loadcustomers();
                    console.log('Component mounted.')
                }
            }
        </script>
