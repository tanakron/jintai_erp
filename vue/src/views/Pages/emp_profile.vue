<template>
<b-container>
  <card>
    <b-row align-v="center" slot="header" >
      <b-col cols="8">
        <h3 class="mb-0">Edit profile </h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <a href="#/Emp_user" class="btn btn-sm btn-primary">Back</a>
      </b-col>
    </b-row>


 <b-table :items="items" :fields="fields" striped responsive="sm">
   <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
      
      </template>
            <template #row-details="row">
        <b-card>
           <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>รูป:</b></b-col>
            <b-col> <b-img v-bind="mainProps"  width="100px" rounded="circle" alt="Circle image" :src="'img/img_users/'+`0${row.item.emp_id}.jpg`"></b-img></b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>{{ row.item.emp_id }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
           <b-button size="sm" >แก้ไขข้อมูล</b-button>
        </b-card>
      </template>
    </b-table>


  </card>
  </b-container>
</template>
<script>
import axios from "axios";  
export default {
       created() {
      axios.get("http://localhost:3000/admin/emp_allusers").then((res) => {
       this.items = res.data;
     
      });
         },
  data() {
    return {
      fields: ['emp_id', 'emp_fullname', 'emp_start','show_details'],
   items: [
   
   ]
      
    }
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
