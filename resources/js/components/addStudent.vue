<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                   <div class="card-header d-flex justify-content-between align-items-center">
                <h4>Add Student</h4>
                <router-link :to="{name :'home'}" class="btn btn-warning">Back All Student</router-link>

                </div>

                    <div class="card-body">
                 <form @submit.prevent=" createCustomer">

                    <div class="form-group">

                        <label for="name" >Name</label>
                        <input type="text" class="form-control" v-model="name" name="name" placeholder="Name">
                         </div>

                         <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" v-model="email" placeholder="Enter Email">
                         </div>



                       <button type="submit" class="btn btn-success">submit</button>

                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return {

                    name:'',
                    email:'',
            }

        },
methods:{

    createCustomer(){

        axios.post('/api/customer',{name:this.name,email:this.email}).then(response=>[
            console.log(response)
        ]).catch(err => {
                console.log(err)
        })
        this.name=''
        this.email=''

    }

}


    }
</script>
