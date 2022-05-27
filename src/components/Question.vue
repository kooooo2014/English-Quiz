<template>
    <div class="question">
        <p class="counts">{{ test_countup }}/20</p>
        <div class="audio">
            <svg @click="speak" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">     
                <g>
                    <path class="st0" d="M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256c141.374,0,256-114.626,256-256
                        C512,114.625,397.374,0,256,0z M351.062,258.898l-144,85.945c-1.031,0.626-2.344,0.657-3.406,0.031
                        c-1.031-0.594-1.687-1.702-1.687-2.937v-85.946v-85.946c0-1.218,0.656-2.343,1.687-2.938c1.062-0.609,2.375-0.578,3.406,0.031
                        l144,85.962c1.031,0.586,1.641,1.718,1.641,2.89C352.703,257.187,352.094,258.297,351.062,258.898z">
                    </path>
                </g>
            </svg>
        </div>
        <div v-if="status != 'text'" class="next">
            <p @click="next">next</p>
            <img src="../assets/tri.png" @click="next">   
        </div>
        <div v-else class="not-next"></div>
        
        <div v-if="status == 'text'" :class="status">正解を選んでください</div>
        <div v-else-if="status == 'correct'" :class="status">〇 正解は{{ answer }}です！</div>
        <div v-else :class="status">✕ 正解は{{ answer }}です...</div>
        <div class="buttons">
            <button @click="button1" :class="isButtonClick" :disabled="isclick">{{ choice1 }}</button>
            <button @click="button2" :class="isButtonClick" :disabled="isclick">{{ choice2 }}</button>  
        </div>
  </div>
</template>

<script>
export default {
    name: 'Question',
    data() {
        return{
            status: "text",
            correct_bgm: new Audio(require('../assets/sounds/Correct_Answer.mp3')),
            wrong_bgm: new Audio(require('../assets/sounds/Wrong_Buzzer.mp3')),
            isclick: false,
            isButtonClick: "blue-button",
            randomChoice: 0
        }
    },
    props: [
        "choice1",
        "choice2",
        "test_countup"
    ],
    watch: {
        choice1: function() {
            this.randomChoice = Math.floor(Math.random() * 2);
        }
    },
    computed: {
        voiceUrl: function(){
            if(this.randomChoice == 0){
                return "/voice/" + this.choice1 + ".mp3"
            }else{
                return "/voice/" + this.choice2 + ".mp3"
            }
        },
        answer: function() {
            if(this.randomChoice == 0){
                return this.choice1
            }else{
                return this.choice2
            }
        }
    },
    methods: {
        speak: function() {
            const uttr = new SpeechSynthesisUtterance()
            if(this.randomChoice == 0){
                uttr.text = this.choice1
            }else{
                uttr.text = this.choice2
            }
            uttr.lang = "en-US"
            
            // 発言を再生 (発言キューに発言を追加)
            speechSynthesis.speak(uttr)
        },
        button1: function(){
            if(this.randomChoice == 0){
                this.status = "correct"
                this.correct_sound()
            }else{
                this.status = "wrong"
                this.wrong_sound()
            }
            this.isclick = true
            this.isButtonClick = "disabled-blue-button"
        },
        button2: function(){
            if(this.randomChoice == 0){
                this.status = "wrong"
                this.wrong_sound()
            }else{
                this.status = "correct"
                this.correct_sound()
            }
            this.isclick = true
            this.isButtonClick = "disabled-blue-button"
        },
        correct_sound: function() {
            this.correct_bgm.play() 
        },
        wrong_sound: function() {
            this.wrong_bgm.play() 
        },
        next: function() {
            if(this.status == "wrong"){
                this.$emit("nextQuestion", "✕");
            }else if(this.status == "correct"){
                this.$emit("nextQuestion", "〇");
            }            
            this.status = "text";
            this.isclick = false;
            this.isButtonClick = "blue-button";
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

.counts {
    font-size: 20px;
    padding: 20px;
    margin: 0;
}

svg {
    margin: 70px 0 30px 0;
    width: 100px;
    height: 100px;
    cursor: pointer;
}

.audio {
    fill: #97C3FF;
} 

.audio :hover {
    fill: #71acff;
}

.next{
    display: flex;
    justify-content: flex-end;
    margin: 0 80px 40px auto;
    cursor: pointer;
}

.next p {
    margin: 0 10px 0 0;
    font-size: 20px;
}
.next img {
    width: 35px;
}

.not-next {
    height: 90px;
}

.text{
    font-size: 30px;
}

.correct {
    font-size: 30px;
    font-weight: bold;
    color: #fa873b;   
}

.wrong {
    font-size: 30px;
    font-weight: bold;
    color: #4587e3;
}

.blue-button {
    margin: 20px;
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
    text-decoration: none;
    border: none;
}

.blue-button :hover {
    background: #71acff;
}

.disabled-blue-button {
    display: inline-block;
    height: 70px;
    width: 280px;
    border-radius: 20px;
    background: #ebf3f6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Alef';
    font-size: 24px;
    line-height: 70px;
    color: rgb(118, 118, 118);  
    margin: 20px; 
    text-decoration: none;
    border: none; 
}
</style>