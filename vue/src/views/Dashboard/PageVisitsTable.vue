<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>

      <b-row align-v="center">
        <!-- <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination> -->
<!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
        <b-col>
          <h3 class="mb-0">พนักงาน</h3>
             <!-- <b-table
      id="my-table"
      :fields="fields"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
      
    >  
    {{items.emp_id}}
    </b-table>
        -->
        <b-table
            :data="data"
            :columns="columns">
        </b-table>


        <b-table
            :data="data"
            :columns="columns"
            :debounce-search="1000">
        </b-table>
         <b-table
            :data="data">
            <template v-for="column in columns">
                <b-table-column :key="column.id" v-bind="column">
                    <template
                        v-if="column.searchable && !column.numeric"
                        #searchable="props">
                        <b-input
                            v-model="props.filters[props.column.field]"
                            placeholder="Search..."
                            icon="magnify"
                            size="is-small" />
                    </template>
                    <template v-slot="props">
                        {{ props.row[column.field] }}
                    </template>
                </b-table-column>
            </template>
        </b-table>
        </b-col>
        <b-col class="text-right">
          <a href="#/emp_user" class="btn btn-sm btn-primary">See all</a>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table"
              :data="items"
              header-row-class-name="thead-light">
      <el-table-column label="idพนักงาน"
                       min-width="130px"
                       prop="page">
        <template v-slot="{row}">
          
          <div class="font-weight-600">{{ row.emp_id }}</div>
        </template>
      </el-table-column>
      <el-table-column label="ชื่อพนักงาน"
                       min-width="70px"
                       prop="visitors">
                    <template v-slot="{row}">
          
          <div class="font-weight-600">{{ row.emp_fullname }}</div>
        </template>     
      </el-table-column>
      <el-table-column label="วันเริ่มงาน"
                       min-width="90px"
                       prop="unique">
                         <template v-slot="{row}">
          
          <div class="font-weight-600">{{ row.emp_start }}</div>
        </template>
      </el-table-column>

      <el-table-column label="status"
                       min-width="90px"
                       prop="bounceRate">
                       
       <template v-slot="{row}">
          
          <div class="font-weight-600">{{ row.emp_status }}</div>
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
    axios.get("http://localhost:3000/admin/emp_alluserstenshow").then((res) => {
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
       items: [
         
                ],
                count:[],
     
      }
    },
    
  }
</script>
<style>
</style>
