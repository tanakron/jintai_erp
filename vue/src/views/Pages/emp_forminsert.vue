<template>
  <div>
    <b-row>
      <b-col col lg="8">
        <b-container>
          <div>
            <b-card>
              <b-card-header class="border-0">
                <h3 class="mb-0">เพิ่มข้อมูลพนักงาน</h3>
              </b-card-header>

              <b-form
                v-on:submit.prevent="submit"
                @reset="onReset"
                v-if="show"
                enctype="multipart/form-data"
              >
                <b-form-group>
                  <b-form-input
                    id="input-type"
                    type="number"
                    name="emp_type"
                    v-model.trim="insertform.emp_type"
                    value=""
                    hidden
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="ID พนักงาน:"
                  label-for="input-1"
                >
           
                  <b-form-input
                    id="input-1"
                    v-model.number="insertform.emp_id"
                    name="emp_id"
                    type="number"
                    placeholder="กรอก ไอดีพนักงาน"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="ชื่อ-นามสกุล :"
                  label-for="input-2"
                >
                
                  <b-form-input
                    id="input-2"
                    v-model="insertform.emp_fullname"
                    type="text"
                    name="emp_fullname"
                    value=""
                    placeholder="ชื่อ-นามสกุล "
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-input
                  id="input-type"
                  type="number"
                  name="emp_status"
                  value=""
                  hidden
                >
                </b-form-input>
                <b-form-group
                  id="input-group-4"
                  label="วันเกิด:"
                  label-for="input-4"
                >
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="insertform.emp_bithday"
                    class="col-md-6"
                  ></b-form-datepicker>
                </b-form-group>

                <b-form-group
                  id="input-group-4"
                  label="วันเริ่มงาน:"
                  label-for="input-4"
                >
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="insertform.emp_start"
                    class="col-md-6"
                  ></b-form-datepicker>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>

              <!-- {{ JSON.stringify(insertform) }} -->
            </b-card>
          </div>
        </b-container></b-col
      >

      <b-col col lg="3">
        <b-container>
          <b-card>
            <b-card-header class="border-0"> 
      <b-button variant="outline-primary" href="#/Emp_user">Back</b-button>
            </b-card-header>
            <!-- <div v-for="item in item" :key="item._id" class="viewform"> -->
              <h1>ข้อมูลล่าสุด</h1>
              <b-card
                bg-variant="primary"
                text-variant="white"
                header="Primary"
                class="text-center"
              >
                <b-card-text>
                  <b-icon
                    icon="check-circle-fill"
                    scale="2"
                    variant="danger"
                  ></b-icon>
                  <p>
                    {{ insertform.emp_type == 0 ? "พนักงานใหม่" : "พนักงานเก่า" }}
                  </p>
                  <b-icon
                    icon="check-circle-fill"
                    scale="2"
                    variant="danger"
                  ></b-icon>
                  <p>ID พนักงาน: {{ insertform.emp_id }}</p>
                  <b-icon
                    icon="check-circle-fill"
                    scale="2"
                    variant="danger"
                  ></b-icon>
                  <p>ชื่อ-นามสกุล : {{ insertform.emp_fullname }}</p>
                  <b-icon
                    icon="check-circle-fill"
                    scale="2"
                    variant="danger"
                  ></b-icon>
                  <p>วันเริ่มงาน: {{ insertform.emp_start }}</p>
                  <b-icon
                    icon="check-circle-fill"
                    scale="2"
                    variant="danger"
                  ></b-icon>
                  <p>วันเกิด: {{ insertform.emp_bithday }}</p>
                  <b-icon
                    icon="check-circle-fill"
                    scale="2"
                    variant="danger"
                  ></b-icon>
                  <p>
                    Status: {{ insertform.emp_status == 0 ? "ทำงาน" : "" }}
                  </p>
                  <b-icon
                    icon="check-circle-fill"
                    scale="2"
                    variant="danger"
                  ></b-icon>
              
                </b-card-text>
              </b-card>
            <!-- </div> -->
          </b-card>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    await axios
      .get("http://localhost:3000/admin/emp_allusers_updatenew")
      .then((res) => {
        this.item = res.data;
      });
  },

  data() {
    return {
      insertform: {
        emp_type: "0",
        emp_id: "",
        emp_fullname: "",
        emp_start: "",
        emp_bithday: "",
        emp_status: "0",
        emp_url: "http://localhost:3000/backend/img_users/",

        file1: null,
        type: ["date"],
      },

      item: [
        {
          _id: "name",
          emp_id: "",
          emp_url: "http://localhost:3000/backend/img_users/",
        },
      ],

      show: true,
    };
  },
  methods: {
    clearFiles() {
      this.$refs["file-input"].reset();
    },
  },
  methods: {
    async submit() {
      let result = await axios.post(
        "http://localhost:3000/admin/forminsert",
        this.insertform
      );
      // alert(JSON.stringify(result));
      this.insertform.push(result.data);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.insertform.emp_type = "";
      this.insertform.emp_id = "";
      this.insertform.emp_fullname = "";
      this.insertform.emp_start = "";
      this.insertform.emp_bithday = "";
      this.insertform.emp_status = "";
      this.insertform.emp_url = "";
      // this.insertform.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.uplond {
  margin: 10px 10px 20px;
}
.viewform {
  display: inline;
  flex: 10em;
}
.dateadd {
  margin-top: 1em;
}
</style>
