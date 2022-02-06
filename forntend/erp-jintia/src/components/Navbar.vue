<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        class="d-flex justify-content-center mb-3"
        is-nav
      >
        <b-navbar-nav>
          <div class="d-flex justify-content-center mb-3">
            <router-link class="nav-link" to="/Dashboard">หน้าหลัก</router-link>
            <router-link class="nav-link" to="/Emp_alluser"
              >ข้อมูลพนักงานทั้งหมด</router-link
            >
            <router-link class="nav-link" to="/Emp_user"
              >ข้อมูลพนักงานรายบุคคล</router-link
            >
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
