<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                   <div class="card-header d-flex justify-content-between align-items-center">
                <h4>Update Student</h4>
                <router-link :to="{name :'home'}" class="btn btn-warning">Back All Student</router-link>

                </div>

                    <div class="card-body ">
                 <form  @submit.prevent="Update">

                    <div class="form-group col-md-8">

                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" placeholder="Name" v-model="name">
                         </div>

                         <div class="form-group col-md-8">
                        <label for="email">eamil</label>
                        <input type="email" class="form-control" name="email" placeholder="Enter email" v-model="email">
                         </div>

                         <div class="form-group col-md-8">

                       <button type="submit" class="btn btn-success">Update</button>
                         </div>




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
         return{
              name:'',
              email:'',
        }},
methods:{
    loadcustomers(){
            let id = this.$route.params.id;
            axios.get(`/api/customer/${id}/edit`).then(response=>{this.name=response.data.name,this.email=response.data.email}).catch(err => {
                console.log(err)
        })
    },

    Update()
    {
          let id = this.$route.params.id;
        axios.post(`/api/customer/${id}`,{name:this.name,email:this.email}).then(response=>[
            console.log(response)
        ]).catch(err => {
                console.log(err)
        })
            this.name=''
            this.email=''
    }


},

        mounted() {

            this.loadcustomers();
            console.log('Successfull')
        }
    }
</script>
