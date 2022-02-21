<template>
<div id="app4">
    <b-container>
  <card>
    <b-row align-v="center" slot="header" >
      <b-col cols="8">
        <h3 class="mb-0">Administator </h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <a href="#/dashboard" class="btn btn-sm btn-primary">Back</a>
      </b-col>
    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">Administator information</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Username"
              placeholder="Username"
              v-model="user.username"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="email"
              label="Email address"
              placeholder="mike@email.com"
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="First Name"
              placeholder="First Name"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Administator Settings</h6>
<label for="input-with-list">admin </label>
    <b-form-input list="input-list" id="input-with-list"></b-form-input>
    <b-form-datalist id="input-list" :options="options"></b-form-datalist>
    

    <b-form-checkbox v-model="checked" name="check-button" switch>
     เปิด - ปิด <b>(อนุญาติ: {{ checked == false ?'ปิด':'เปิด' }})</b>
    </b-form-checkbox>
<br>
<b-form-group>
      <template #label>
        <b>เลือกจำกัดข้อมูล:</b><br>
        <b-form-checkbox
          v-model="allSelected"
          :indeterminate="indeterminate"
          aria-describedby="flavours"
          aria-controls="flavours"
          @change="toggleAll"
        >
          {{ allSelected ? 'Un-select All' : 'Select All' }}
        </b-form-checkbox>
      </template>

      <template v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="flavors"
          v-model="selected"
          :options="flavours"
          :aria-describedby="ariaDescribedby"
          name="flavors"
          class="ml-4"
          aria-label="Individual flavours"
          stacked
        ></b-form-checkbox-group>
      </template>
      </b-form-group>

      <div>
       เลือกจำกัดข้อมูล: <strong>{{ selected }}</strong><br>
        All Selected: <strong>{{ allSelected ? 'เลือกทั้งหมด':'เลือกบางหัวข้อ'}}</strong><br>
        <!-- Indeterminate: <strong>{{ indeterminate }}</strong> -->
      </div>
</b-form>
  </card>
  
    </b-container>
  </div>

</template>
<script>
export default {
  data() {
    return {
        flavours: ['จัดการuser', 'จัดการเงินเดือน', 'บันทึกKPI', 'ตารางการทำงาน', 'แก้ไขข้อมูล'],
        selected: [],
        allSelected: false ,
        indeterminate: false,
        watch: {
      selected(newValue, oldValue) {
        // Handle changes in individual flavour checkboxes
        if (newValue.length === 0) {
          this.indeterminate = false
          this.allSelected = false
        } else if (newValue.length === this.flavours.length) {
          this.indeterminate = false
          this.allSelected = true
        } else {
          this.indeterminate = true
          this.allSelected = false
        }
      }
    },
        methods: {
      toggleAll(checked) {
        this.selected = checked ? this.flavours.slice() : []
      }
    },
        checked: false,
        options: ['Admin01', 'Admin02', 'Admin03', 'Admin04', 'Admin05'],
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
