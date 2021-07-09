<template>
  <section>
      <div v-if="loading" class="loading">
        <h3>Loading...</h3>
      </div>

    <div v-if="error" class="error">
      <h1>{{error}}</h1>
      <router-link to="/apex">Go Back</router-link>
    </div>

    <div v-if="profileData" class="container">
      <h1 class="gamertag">
        <img :src="profileData.platformInfo.avatarUrl" alt class="platform-avatar" />
        {{profileData.platformInfo.platformUserId}}
        <img :src="profileData.segments[0].stats.rankScore.metadata.iconUrl" alt class="rank-icon" />
      </h1>
      <div class="grid">
        <div>
          <img :src="profileData.segments[1].metadata.imageUrl" alt />
        </div>
        <div>
          <ul>
            <li>
              <h4>Active Legend</h4>
              <p>{{profileData.metadata.activeLegendName}}</p>
            </li>
            <li v-if="profileData.segments[0].stats.season8Kills">
              <h4>Season 8 kills: </h4>
              <p>
                {{profileData.segments[0].stats.season8Kills.value}}
                <span>({{profileData.segments[0].stats.season8Kills.percentile}}%)</span>
              </p>
            </li>
            <li v-if="profileData.segments[0].stats.season9Kills">
              <h4>Season 9 kills: </h4>
              <p>
                {{profileData.segments[0].stats.season9Kills.value}}
                <span>({{profileData.segments[0].stats.season9Kills.percentile}}%)</span>
              </p>
            </li>

            <li v-if="profileData.segments[0].stats.season9Wins">
              <h4>Season 9 Wins</h4>
              <p>
                {{profileData.segments[0].stats.season9Wins.displayValue}}
                <span>({{profileData.segments[0].stats.season9Wins.percentile}}%)</span>
              </p>
            </li>
            <li v-if="profileData.segments[0].stats.level">
              <h4>Apex Level</h4>
              <p>
                {{profileData.segments[0].stats.level.displayValue}}
                <span>({{profileData.segments[0].stats.level.percentile}}%)</span>
              </p>
            </li>
            <li v-if="profileData.segments[0].stats.kills">
              <h4>Lifetime Kills</h4>
              <p>
                {{profileData.segments[0].stats.kills.value}}
                <span>({{profileData.segments[0].stats.kills.percentile}}%)</span>
              </p>
            </li>   
            <li v-if="profileData.segments[0].stats.damage">
              <h4>Damage Done</h4>
              <p>
                {{profileData.segments[0].stats.damage.displayValue}}
                <span>({{profileData.segments[0].stats.damage.percentile}}%)</span>
              </p>
            </li>

            <li v-if="profileData.segments[0].stats.rankScore">
              <h4>Player Rank</h4>
              <p>
                {{profileData.segments[0].stats.rankScore.metadata.rankName}}
              </p>
            </li>
            <li>
              <h4>Rank Score</h4>
              <p>
                 {{profileData.segments[0].stats.rankScore.value}}
              </p>
            </li>
            <h5>TOP LEGEND!</h5>
            <li v-if="profileData.segments[2].metadata.name">
              <h4>{{profileData.segments[2].metadata.name}}</h4>
              <p v-if="profileData.segments[2].metadata.imageUrl">
                <img :src="profileData.segments[2].metadata.imageUrl" alt class="legend-image" /><br>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="/apex">Go Back</router-link>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      error: null,
      profileData: null
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-no-image";
  },
  async created() {
    this.loading = true; 
    try {
      const res = await axios.get(
        `/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`
      );
      this.profileData = res.data.data;
      console.log(this.profileData);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = "No players found matching your query.";
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.error{
  max-width: 1200px;
  margin: 1rem auto;
  overflow: auto;
  padding: 0 2rem;
  background: rgba(15, 15, 15, 0.5);
  margin-top: 1rem;
  border-radius: 20px 20px 20px 20px;
  padding: 2rem;
}

.loading{
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  font-size: 75px;
}

.container {
  background: rgba(15, 15, 15, 0.5);
  color: #fff;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  max-width: 1200px;
  overflow: auto;

}
h1.gamertag {
  font-size: 2rem;
  background: rgba(15, 15, 15, 0.5);
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}
a {
  display: inline-block;
  margin-top: 2rem;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
}
a:hover {
  border: #ccc 2px solid;
  color: #ccc;
}
.platform-avatar {
  width: 40px;
  margin-right: 0.7rem;
  border-radius:20px 20px 20px 20px;
}
img {
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
li {
  background: rgba(15, 15, 15, 0.5);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}
li p {
  font-size: 2rem;
}
li:first-child p {
  font-size: 1.5rem;
}
li span {
  font-size: 1rem;
  color: #ccc;
}
.rank-icon{
  width: 10%;
  margin-left: 56%;
}
.legend-image{
  width: 40%;
}

h5{
  font-size: 200%;
  text-align: center;
}
span2{
  font-size: 100%;
}

@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }

  .platform-avatar {
    display: none;
    width: 8%;
    border-radius: 50px 50px 50px 50px;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  li p {
    font-size: 1.5rem;
  }
}

</style>