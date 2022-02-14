<template>
<b-container>
<div>   <b-card >
   

       <b-row align-v="center" slot="header" >
      <b-col cols="8">
        <h3 class="mb-0"> ฟอรม์แจ้งเพื่อทราบในการบันทึกKPI(พนักงาน)</h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <a href="#/kpi_users" class="btn btn-sm btn-primary">Back</a>
      </b-col>
  
           </b-row>
   </b-card>
เอกสารเลขที่
   <b-form @submit="onSubmit" @reset="onReset" v-if="show">
         <b-row class="my-1" v-for="type in types" :key="type">
       <b-col sm="3">
        <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
      </b-col>
        <b-col sm="2">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
          </b-row>
      
      <b-form-group
        id="input-group-1"
        label="id : พนักงาน"
        label-for="input-1"
        description="ไอดีพนักงาน"
      >
      
        <b-form-input
          id="input-1"
          v-model="form.emp_id"
          type="text"
          placeholder="กรอก ไอดีพนักงาน"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="ชื่อ - นามสกุล:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="กรอกชื่อ - นามสกุล"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="ตำแหน่งงาน:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="kpi_department"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        ><span class="checked" >สังกัดงาน </span>
          <b-form-checkbox value="1">โรงงาน</b-form-checkbox>
          <b-form-checkbox value="0">สำนักงาน</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
  <b-form-group
      label="แจ้งเพื่อทราบในการบันทึกKPI(พนักงาน)"
      label-for="textarea-lazy"
      description="ช่องลงข้อมูล Kip"
      class="mb-0"
    >
    <b-form-textarea
        id="textarea-lazy"
        v-model="text2"
        placeholder="กรอก ข้อมูลKPIเพื่อบันทึก"
        lazy-formatter
        :formatter="formatter"
      ></b-form-textarea>
       <p class="mb-0" style="white-space: pre-line"><b>เรื่องที่ได้รับการบันทึก  KPI:</b> {{ text2 }}</p>
 </b-form-group>
 <br>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>



    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
    </div>
    </b-container>
</template>
<script>
export default {
    el: '#random',
    data() {
        
      return {
        types:[
'number',
        ],
           text2: '',
        form: {
          emp_id: '',
          name: '',
          food: null,
          checked: []
        },
        kpi_department: [{ text: 'Select One', value: null }, 'การตลาด', 'บุคคล', 'พนักงงานทั้วไป', 'ไอที'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    
formatter(value) {
        return value.toLowerCase()
      }
    },
//     methods:{
//     myFunction: function () {		
// 		this.randomNumber = Math.random();
//     }   
//    }

    }

</script>

<style>
.checked{
    margin-right: 20px;
}
</style>