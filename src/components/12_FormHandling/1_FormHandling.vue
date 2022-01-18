<template>
  <div>
    <div>
      <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre
      >
    </div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model="formValues.firstName" />
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model.trim="formValues.lastName" />
      </div>
      <div>
        <label for="gender">Gender</label>
        <select id="gender" v-model="formValues.gender">
          <option value="">Select a gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer Not to Say">Prefer Not to Say</option>
        </select>
      </div>
      <div>
        <label for="job-location">Job location</label>
        <select id="job-location" v-model="formValues.jobLocation" multiple>
          <option value="india">India</option>
          <option value="vietnam">Vietnam</option>
          <option value="singapore">Singapore</option>
        </select>
      </div>
      <div style="margin-left: 0px">
        <div>
          <input
            id="remoteWork"
            type="checkbox"
            v-model="formValues.workType"
            true-value="yes"
            false-value="no"
          />
          <label for="remoteWork">Open to remote work?</label>
        </div>
        <div>
          <input id="relocate" type="checkbox" v-model="formValues.relocate" />
          <label for="relocate">relocate</label>
        </div>
        <div>
          <label>Skill set</label>
          <input
            type="checkbox"
            id="html"
            value="html"
            v-model="formValues.skillSet"
          />
          <label for="html">HTML</label>
          <input
            type="checkbox"
            id="css"
            value="css"
            v-model="formValues.skillSet"
          />
          <label for="css">CSS</label>
          <input
            type="checkbox"
            id="javascript"
            value="javascript"
            v-model="formValues.skillSet"
          />
          <label for="javascript">JavaScript</label>
        </div>
      </div>
      <div>
        <label>Years of Experience</label>
        <input
          type="radio"
          id="0-2"
          value="0-2"
          v-model="formValues.yearsOfExperience"
        />
        <label for="0-2">0-2</label>
        <input
          type="radio"
          id="3-5"
          value="3-5"
          v-model="formValues.yearsOfExperience"
        />
        <label for="3-5">3-5</label>
        <input
          type="radio"
          id="6-10"
          value="6-10"
          v-model="formValues.yearsOfExperience"
        />
        <label for="6-10">5-10</label>
        <input
          type="radio"
          id="10+"
          value="10+"
          v-model="formValues.yearsOfExperience"
        />
        <label for="10+">10+</label>
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" id="age" v-model.number="formValues.age" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormHandling",
  data() {
    return {
      formValues: {
        firstName: "",
        lastName: "",
        gender: "",
        jobLocation: [],
        workType: "No",
        relocate: false,
        skillSet: [],
        yearsOfExperience: "",
        age: null,
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.formValues);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>