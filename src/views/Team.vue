<template>
  <div class="w-4/5 mx-auto mt-44">
    <div class="flex flex-col items-stretch sm:flex-row">
      
      <div class="sm:w-1/3 p-4" v-for="member in teams" :key="member.studentId">
        <div class="px-6 py-8 rounded-lg shadow-2xl text-center backdrop-filter backdrop-blur-3xl ">
          <div class="mb-5">
              <img class="w-auto mx-auto rounded-full mb-3" src="https://i.pravatar.cc/150?img=66"  alt=""/>
              <h2 class="text-xl font-medium">{{ member.name }}</h2>
              <p>{{ member.studentId }}</p>
              <p class="my-2 pb-2 border-b-2 border-gray-400">ROLE</p>
              <div class="">
                  <span class="text-blue-500 block"  v-for="role in member.roles" :key="role" >{{ role }}</span>
              </div>
          </div>
          <a :href="member.github" class="px-4 py-2 bg-blue-500 text-white rounded-full" >Git Hub</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          studentId: "62130500014",
          name: "Jakkapong Praditthanachot",
          roles: ["Frontend", "DataBase", "Network"],
          github:"https://github.com/jakkapongqcue"
        },
        {
          studentId: "62130500027",
          name: "Traitawat Jitchana",
          roles: ["Frontend", "DataBase", "Backend"],
          github:"https://github.com/actlook25957"
        },
        {
          studentId: "62130500118",
          name: "Apisit kaewnongsaeng",
          roles: ["Frontend", "DataBase", "Devops"],
          github:"https://github.com/Top1568"
        },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
