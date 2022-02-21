<template>

<div id="app">
 
  <header>
    <slot name="header">  <Navbar /></slot>
    <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

 

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>
  </header>
  <main>
         <div id="wrapper">
<Sidebar/>
</div>
  </main>
  <footer>
    <slot name="footer"> <Footer /></slot>
   
  </footer>
   <router-view />
</div>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
Sidebar,

  },

};

</script>
   
<style>
#app {

font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@600&display=swap');
@import "~bootstrap/dist/css/bootstrap.css";
</style>
