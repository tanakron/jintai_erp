<template>

    <b-card >
     
        <b-card-header class="border-0">
            <h3 class="mb-0">ข้อมูลพนักงานทั้งหมด</h3>
        </b-card-header>
          <b-button variant="danger" class="btadd" href="#/emp_forminsert">เพิ่มข้อมูล</b-button>
      
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
            <b-col> <b-img v-bind="mainProps"  width="100px" rounded="circle" alt="Circle image" :src="row.item.emp_url + `0` + row.item.emp_id + `.jpg`"></b-img></b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>
              <span>
                {{row.item.emp_bithday| moment("from", "now",true)}}
              </span>
            </b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Status: {{row.item.emp_status === 0 ?"Online":"Offline" }}</b></b-col>
            <b-col> </b-col>
          </b-row>

 <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>วันเริ่มงาน: {{row.item.emp_start }}</b></b-col>
            <b-col> </b-col>
          </b-row>
          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
           <b-button size="sm" >แก้ไขข้อมูล</b-button>
                   <b-button size="sm" >ลบ</b-button>

        </b-card>
      </template>
    </b-table>


     </b-card >
</template>
<script>


import axios from "axios";  

  export default {
   
    //  created() {
    //   axios.get("http://localhost:3000/admin/emp_allusers").then((res) => {
    //    this.items = res.data;
     
    //   });
 
    // },

    async mounted(){
let items = await axios.get("http://localhost:3000/admin/emp_allusers")
this.items = items.data;
    },
    data() {
      
      return {
      fields: ['emp_id', 'emp_fullname', 'emp_start','show_details'],
  items: 
   {
     emp_url:"http://localhost:3000/backend/img_users/",
   },
  
      };
    },
    computed: {
      rows() {
        return this.items.length
      }
      
    },
 
    mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}
    
  }
  
</script>
<style>
.btadd{
  margin-top: 2%;
  margin-bottom: 3%;
}
</style>