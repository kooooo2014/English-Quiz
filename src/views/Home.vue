<template>
  <div class="home">
    <div class="container">
      <img src="../assets/image1.png" alt="">
      <div class="right-contents">
        <p>英語の発音の違い<br>を学習する</p>
        <a href="/test" class="blue-button">Let's start!</a>
      </div>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 100vh;
    background: #ffb3001c;
}

.container {
    display: flex;
    justify-content: space-around;
}

img {
    width: 500px;
    height: 500px;

}

.right-contents {
    margin: auto 100px auto 0;
    text-align: center;
}

p {
    font-family: 'Gothic A1';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 50px;
}

.blue-button {
    display: inline-block;
    margin: auto;
    height: 70px;
    width: 280px;
    border-radius: 20px;
    background: #97C3FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Alef';
    font-size: 24px;
    line-height: 70px;
    color: #fff;

    
}
.blue-button :hover {
    background: #71acff;
}
    


</style>