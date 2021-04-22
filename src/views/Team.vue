<template>
  <div class="mt-44 flex justify-between mx-44">
    <div v-for="member in teams" :key="member.studentId">
      <h3>{{ member.studentId }}</h3>
      <h3>{{ member.name }}</h3>
      <h3>roles</h3>
      <ul v-for="role in member.roles" :key="role" class="flex">
          <li>{{ role }}</li>
      </ul>
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
        },
        {
          studentId: "62130500027",
          name: "Traitawat Jitchana",
          roles: ["Frontend", "DataBase", "Backend"],
        },
        {
          studentId: "62130500118",
          name: "Apisit kaewnongsaeng",
          roles: ["Frontend", "DataBase", "Devops"],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
