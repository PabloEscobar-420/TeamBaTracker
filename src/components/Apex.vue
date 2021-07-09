<template>
  <section class="search">
    <h1 class="apex">Apex Tracker</h1>
      <h1 class="desc">Detailed Apex Legends Stats Tracker</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
          <option value="origin">Origin</option>
        </select>
        <h1 class="inst">Do not search by Steam Name. Must be connected to an Origin Name.</h1>
      </div>
      <div class="form-group">
        <label for="gamertag">Username</label>
        <input
          type="text"
          name="text"
          v-model="gamertag"
          id="gamertag"
          placeholder="Enter your Username"
        />
      </div>
      <div class="alert">
        <div v-if="error" class="alert alert-danger" role="alert">
          {{error}}
        </div>
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "apex",
  data() {
    return {
      platform: "origin",
      gamertag: "",
      error: "",
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit() {
      if (!this.gamertag) {
        this.error = 'Invalid Username!';
      } else {
        this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.pic{
  width: 400px;
}

 .alert{
   font-family: Arial, Helvetica, sans-serif;
   font-size: 15px;
   margin-left: 15px;
   color: red;
 }

.btn{
  margin-bottom: 15px;
}

.logo{
  display: flex;
  width: 100%;
  height: 150px;
}
.inst{
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}

.apex{
  font-family: 'Bebas Neue', cursive;
  font-size: 75px;
  margin-left: 30px;
  margin-bottom: 0%;
}
.desc{
  font-size: 20px;
  margin-left: 30px;
  font-family: Arial, Helvetica, sans-serif;
}



body {
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  line-height: 1.6;
}

a {
  color: #fff;
  text-decoration: none;
}

ul {
  list-style: none;
}


.form-group {
  font-family: 'Bebas Neue', cursive;
  font-size: 25px;
  margin: 1rem 0;
  max-width: 700px;
  margin-left: 225px;
}
.search {
  background: rgba(15, 15, 15, 0.5);
  border-radius: 20px 20px 20px 20px;
  max-width: 1200px;
  margin: 1rem auto;
  overflow: auto;
  padding: 0 2rem;
  text-align: center;
  align-items: center;
  vertical-align: middle;
}

input,
select,
textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}

.btn {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
}
</style>