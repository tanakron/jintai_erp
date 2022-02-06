<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
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
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? "Hide" : "Show" }} Details
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <b-form-checkbox
          v-model="row.detailsShowing"
          @change="row.toggleDetails"
        >
          Details via check
        </b-form-checkbox>
      </template>
      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>{{ row.item.age }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
    </b-table>
  </div>
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
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
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
        {
          key: "emp_bithday",
          label: "วันเกิด",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          variant: "",
        },
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

<style></style>
