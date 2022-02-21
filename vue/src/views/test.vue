<template>
  <div>
    <h1>Test</h1>
         <input type="number"  value="2021" v-model="course.id" hidden><br>
        <input type="number" placeholder="เลข" v-model.number="course.number"><br>
    <!-- <input type="text" placeholder="Title" v-model="course.title"><br> -->
    <input type="number" placeholder="ราคา" v-model.number="course.price"><br>
    <input type="checkbox" value="0" name="บน" v-model.number="course.type1"> บน
        <input type="checkbox" value="1" name="ล่าง" v-model="course.type2" >ล่าง
<button @click="addCourse"> submit </button>
    <ul>
      <li v-for="(course,index ) in dynamicCourses"  :key="index">
ID {{course.id}}  <br> Number {{course.number}} <br> Price {{course.price}} <br>  {{course.type1  == type2  ? 'ล่าง' : ' บน' }} 
<button @click="removeCourse(index)">X</button>
      </li>
    </ul>
    <!-- {{course.type2 === "ล่าง"}} -->

{{counter}}

 <button @click="add"> add </button>
       </div>
</template>

<script>

export default {

  methods:{
addCourse(){
  this.dynamicCourses.push(this.course)
  this.course ={ number:0 , price:0 }
},
removeCourse(index){
  this.dynamicCourses.splice(index,1)
},
  },
data(){
  return{
    counter:0,
    course:{id:'2022', number:0, price:0 ,type1:false, type2:false,},
dynamicCourses:[],
mCourses:[
  {title:"IOS",price:11},
],

  }
 
},
methods:{
add(){
  this.counter++;
}
},
 created() {
    consloe.log(created)
  },
  mounted(){
    consloe.log(mounted)
  },
  beforeUpdate(){
console.log(beforeUpdate)
  },
  updated(){
console.log(updated)
  },
}
</script>

<style>

</style>