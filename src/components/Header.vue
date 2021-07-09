<template>
  <nav>
    <ul>
      <li>
        <div class="menu">
            <div class="menu-item">
                <router-link to="/" exact>HOME</router-link>
            </div>
            <div class="menu-item">
                <router-link to="/apex" exact>APEX</router-link>
            </div>
            <div class="menu-item-center">
                <div class="menu-logo" exact>
                    <router-link to="/">
                    <img src="../assets/123.svg" >
                    </router-link>
                </div>
            </div>
            <div class="menu-item">
                <router-link to="/Ab" exact>ABOUT US</router-link>
            </div>
            <div class="menu-item">
                <router-link to="/guide" exact>GUIDES</router-link>
            </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
a{
    color: white;
    text-decoration: none;
}
.menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.menu-item{
    flex: 1;
    text-align: center;
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-size: 25px;
    cursor: pointer;
    padding: 4px;
}
.menu-item:hover{
    border-bottom: 4px solid rgb(161, 161, 161) ;
}
.menu-item-center{
    flex: 1;
    text-align: center;
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-size: 25px;
}
.menu-logo{
    size: 10px;
    margin-top: 10px;
}
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
    margin-right: 40px;
}
nav{
    background: #444444;
    padding: 2mm;
    margin-bottom: 10px;
}
.router-link-active{
    color: rgb(161, 161, 161);
    margin: 0;
}

</style>