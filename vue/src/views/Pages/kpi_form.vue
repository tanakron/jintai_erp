<template>
  <b-container>
    <div>
      <b-card>
        <b-row align-v="center" slot="header">
          <b-col cols="8">
            <h3 class="mb-0">ฟอรม์แจ้งเพื่อทราบในการบันทึกKPI(พนักงาน)</h3>
          </b-col>
          <b-col cols="4" class="text-right">
            <a href="#/kpi_users" class="btn btn-sm btn-primary">Back</a>
          </b-col>
        </b-row>
      </b-card>

      <b-form v-on:submit.prevent="submit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="เอกสารเลขที่:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model.number="form.kpi_documentnumber"
            type="nubmer"
            placeholder="เลขที่ KPI"
            class="col-md-2"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="ไอดีพนักงาน:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model.number="form.emp_id"
            type="ืnumber"
            placeholder="ไอดีพนักงาน"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="ชื่อ - นามสกุล:"
          label-for="input-2"
        >
          <b-form-input
            id="input-3"
            v-model.trim="form.kpi_name"
            placeholder="ชื่อ - นามสกุล"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="ตำแหน่งงาน:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.kpi_department"
            :options="kpi_department"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.kpi_beunder"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
            ><span class="checked">สังกัดงาน </span>
            <b-form-checkbox value="1">โรงงาน</b-form-checkbox>
            <b-form-checkbox value="0">สำนักงาน</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group
          label="แจ้งเพื่อทราบในการบันทึกKPI(พนักงาน)"
          label-for="kpi_beunder"
          class="mb-0"
        >
          <b-form-textarea
            id="kpi_subject"
            v-model.trim="form.kpi_subject"
            placeholder="กรอก ข้อมูลKPIเพื่อบันทึก"
            lazy-formatter
            :formatter="formatter"
          ></b-form-textarea>
          <p class="mb-0" style="white-space: pre-line">
            <b>เรื่องที่ได้รับการบันทึก KPI:</b> {{ form.kpi_subject }}
          </p>
        </b-form-group>
        <b-form-group label="วันที่เริ่ม" class="mb-0">
          <b-datepicker
            id="datepicker"
            v-model="form.kpi_dateend"
            placeholder="วันที่เริ่ม"
            class="col-md-3"
          >
          </b-datepicker>
        </b-form-group>

        <hr />
        <input type="text" value="" name="isActive" hidden />

        {{ JSON.stringify(form) }}
        <br />

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </b-container>
</template>
<script>
import axios from "axios";
export default {
  el: "#random",
  data() {
    return {
      types: ["number"],
      form: {
        kpi_documentnumber: "",
        emp_id: "",
        kpi_name: "",
        kpi_department: null,
        kpi_subject: "",
        isActive: "true",
        kpi_beunder:null,
      },
      kpi_department: [
        { text: "Select One", value: null },
        "การตลาด",
        "บุคคล",
        "พนักงานทั้วไป",
        "ไอที",
      ],
      show: true,
    };
  },

  methods: {
   async submit() {
      let result = await axios.post(
        "http://localhost:3000/admin/kpi_from",
        this.form
      );
      alert(JSON.stringify(result));
      this.form.push(result.data);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.kpi_documentnumber = "";
      this.form.emp_id = "";
      this.form.kpi_name = "";
      this.form.kpi_department = "";
      this.form.kpi_beunder = null;
      this.form.kpi_subject = "";
      this.form.isActive = "";
      this.form.kpi_dateend ="";
   
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    formatter(value) {
      return value.toLowerCase();
    },
  },
  
};
</script>

<style>
.checked {
  margin-right: 20px;
}
</style>
