<template>
  <div class="results">  
      <p>あなたの得点は{{ count_all }}問中</p>
      <div class="corrects">{{ correct_count }}点</div>
      <div class="button" @click="back">Homeに戻る</div>
  </div>
</template>

<script>
export default {
    name: "Result",
    props: [
        "correct_count",
        "wrong_count",
        "count_all"
    ],
    data() {
        return{
        }
    },
    methods: {
        back: function() {
            this.$router.push({path: '/'});
        }
    }


}
</script>

<style scoped>
p {
    font-family: 'Gothic A1';
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    font-size: 25px;
}
.results {
    padding: 50px 100px;
}

.corrects {
    font-size: 40px;
    font-weight: bold;
}

.button {
    margin: 50px 20px; 
    text-decoration: none;
    border: none;

    display: inline-block;
    height: 70px;
    width: 280px;
    border-radius: 20px;
    background: #97C3FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Alef';
    font-size: 24px;
    line-height: 70px;
    color: #fff; 
    cursor: pointer; 
}

.button:hover {
    background: #71acff;
}
</style>