<template>
  <div class="container">
    <div class="frontpage">
      <img src="../assets/bg.png" >
    </div>
      <div class="team">
      <h1 class="about-us">ABOUT US</h1>
      <v-container class="my-3">
        <v-layout row wrap>
          <div class="us">
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-xs-center ma-3" elevation='2' outlined width="350">
              <img contain class="developers" v-bind:src="person.image" width="350" height="350">
              <v-card-text>
                <div class="name black--text font-weight-bold">{{ person.name }}</div>
                <div class="role black--text">{{ person.role }}</div>
                <div class="school black--text">{{ person.school }}</div>
              </v-card-text>
            </v-card>
          </v-flex>
          </div>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: function() {
    return {
      team: [
        {
          name: 'Jonathan Edson Bayot',
          role: 'Back End Developer',
          school: 'De La Salle University-Dasmariñas',
          image: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/118070366_3333655216693237_6303651569048784417_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=XexOtlPF6mgAX-LGeuy&_nc_ht=scontent.fmnl4-3.fna&oh=bbb4521e4a048ca2f893b3bb8c41882b&oe=60EBF34C'
        },
        {
          name: 'Karl Jairu Lagarde',
          role: 'Front End Developer',
          school:'De La Salle University-Dasmariñas',
          image: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/120562039_3552528731434428_7578388316283781570_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=m49PeFu-54YAX-d-J_6&_nc_ht=scontent.fmnl4-6.fna&oh=9abe4b65de769d182a5f5be28aafcb1e&oe=60ED08F7'
        },
        {
          name: 'Halleyne Sheleni Romero',
          role: 'Front End Developer',
          school: 'De La Salle University-Dasmariñas',
          image: 'https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.6435-9/151692194_3706722576083684_6532713991263223400_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=M9s7RT7nvq4AX8LlRVZ&_nc_oc=AQk879vozktfHFCUvBpjruwsY75Q_QhRnJXui9Sf7qh_eDn3SLN2giGAAoW-vhMcBsI&_nc_ht=scontent.fmnl4-1.fna&oh=ffcb75a491e35f49b8a7bd14570b7d25&oe=60EC8612'
        },
      ]
    }
  }
}
</script>

<style scoped>
.frontpage {
  display: flex;
  align-self: center;
  justify-content: center;
  vertical-align: middle;
  width: 100%;
  overflow: hidden;
  height: 900px;
}

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.team{
    color: white;
    background: rgba(15, 15, 15, 0.5);
    border-radius: 20px 20px 20px 20px;
    max-width: 1500px;
    margin: 1rem auto;
    overflow: auto;
    padding: 0 2rem;
    margin-top: 40px;
}

.us{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 70px;
}
.developers{
  justify-content: center;
}
.about-us {
  padding-top: .5in;
  padding-bottom: 0.5in;
  color: white;
  font-family: 'Bebas Neue', cursive;
  font-size: 0.5in;
  line-height: 30px;
  min-height: 38px;
  text-align: center;
}
.name {
  font-family: 'Bebas Neue', cursive;
  font-size: 35px;
  height: 50px;
  letter-spacing: 0;
  min-height: 20;
  text-align: center;
  text-transform: uppercase;
  background: #444444;
}
.role {
  font-family: 'Bebas Neue', cursive;
  font-size: 0.2in;
  letter-spacing: 0;
  text-align: center;
  background: #444444;
}
.school {
  font-family: 'Bebas Neue', cursive;
  font-size: 0.2in;
  height: 50px;
  letter-spacing: 0;
  line-height: 30px;
  min-height: 38px;
  text-align: center;
  background: #444444;
}
.pt {
  color: #ffffff;
  padding-top: 0.5in;
  font-family: 'Bebas Neue', cursive;
  font-size: 40;
  height: 50px;
  letter-spacing: 0;
  line-height: 30px;
  min-height: 38px;
  text-align: center;
}
</style>
