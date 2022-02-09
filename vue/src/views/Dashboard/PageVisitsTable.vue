<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">พนักงาน</h3>
            
       
        </b-col>
        <b-col class="text-right">
          <a href="#!" class="btn btn-sm btn-primary">See all</a>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table"
              :data="tableData"
              header-row-class-name="thead-light">
      <el-table-column label="ชื่อพนักงาน"
                       min-width="130px"
                       prop="page">
        <template v-slot="{row}">
          
          <div class="font-weight-600">{{ row.emp_id }}</div>
        </template>
      </el-table-column>
      <el-table-column label="Visitors"
                       min-width="70px"
                       prop="visitors">
      </el-table-column>
      <el-table-column label="Unique users"
                       min-width="90px"
                       prop="unique">
      </el-table-column>

      <el-table-column label="Bounce rate"
                       min-width="90px"
                       prop="bounceRate">
        <template v-slot="{row}">
          {{row.bounceRate}}
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
import axios from "axios";
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
       created() {
    axios.get("http://localhost:3000/admin/emp_allusers").then((res) => {
      this.items = res.data;
     
    });
  },
    name: 'page-visits-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    
    },
    data() {
      return {
        data: [
          {
           emp_id: emp_id,
          
          },
          
        
        ]
      }
    }
  }
</script>
<style>
</style>
