<template>
<base-layout>
<slot>
  <div class="overflow-auto">
   <template>
     <div class="time">
        <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>
     </div>
   </template>
    <p class="mt-3">รายการพนักงาน: {{ currentPage }}</p>

    <b-table
      striped
      hover
      :fields="fields"
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      class="mt-6"
    >
      <template #cell(show_details)="row">
        <b-button
          variant="outline-primary"
          size="sm"
          @click="row.toggleDetails"
          class="mr-2"
        >
          {{ row.detailsShowing ? "Hide" : "" }} ดูข้อมูลรายบุคคล
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <b-form-checkbox
          v-model="row.detailsShowing"
          @change="row.toggleDetails"
        >
          ข้อมูลรายบุคคล
        </b-form-checkbox>
      </template>
      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>ชื่อพนักงาน:</b></b-col>
            <b-col>{{ row.item.emp_fullname }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>IDพนักงาน:</b></b-col>
            <b-col>{{ row.item.emp_id  }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>เริ่มงาน:</b></b-col>
            <b-col>เริ่มงาน{{ row.item.emp_start }} </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right img"><b>รูปพนักงาน:</b> 

<b-img :src="'http://localhost:3000/backend/img_users/'+`0`+(row.item.emp_id)+`.jpg`"></b-img>
            </b-col>
<!-- ${row.item.emp_id} -->

          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>วันเกิด:</b> <span>{{ row.item.emp_bithday | moment("DD-MM-YYYY") }}</span></b-col>
            
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>บัตรประชาชน:</b></b-col>
        {{ row.item.emp_idcard }}
          </b-row>

          <b-button size="md" @click="row.toggleDetails">ปิดข้อมูล</b-button>
          <b-row class="mb-2" >
    <b-dropdown variant="primary">
      <template #button-content>
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
      </template>
      <b-dropdown-item-button>
         <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
         Locked <span class="sr-only">(Click to unlock)</span>
      </b-dropdown-item-button>

      <b-dropdown-item-button>แก้ไขข้อมูล</b-dropdown-item-button>
      <b-dropdown-item-button  >อัพเดทข้อมูล</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
   <form
                    id="delete_position_form"
                    action=""
                    method="GET"
                    style="display: inline-block"
                  >
                    <button
                      class="btn btn-danger"
                      type="submit"
                      id="btn_delete_product"
                    >
                      ลบข้อมูล
                    </button>
                  </form>

    </b-dropdown>

          </b-row>
        </b-card>
      </template>
  
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</slot>
  </base-layout>
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
      perPage: 50,
      currentPage: 1,

      fields: [
        "show_details",
        { isActive: true, emp_bithday: [], emp_fullname: [], emp_start: [] },
        // Type หัวข้อ //
        {
          key: "emp_fullname",
          label: "ชื่อพนักงาน",
          sortable: true,
        },
        {
          key: "emp_start",
          label: "วันเริ่มงาน",
          sortable: true,
       
        },
        
// Type หัวข้อ //
     
      ],

      items: [],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },

};


// console.log(JSON.stringify(this.lists))
// console.log("lists");
</script>

<style>
.time{
  position: absolute;
  left: 60px;}
  </style>
