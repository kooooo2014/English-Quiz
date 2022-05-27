<template>
  <div class="test">
    <div class="container">  
        <Question   v-if="test_countup <= test_counts"
                    :test_countup="test_countup"
                    :choice1="questions[tests[test_countup-1]].choice1"
                    :choice2="questions[tests[test_countup-1]].choice2"
                    @nextQuestion='next'>
        </Question>
        <Result     v-else 
                    :correct_count="results_correct"
                    :wrong_count="results_wrong"
                    :count_all="test_counts">
        </Result>
    </div>
  </div>
</template>

<script>
import randomQuestion from '../core.js'
import Question from '../components/Question.vue'
import Result from './Result.vue'
export default {
    name: 'Test',
    components: {
        Question,
        Result
    },
    data() {
        return {
            questions : [
                {id: 1, choice1: "play", choice2: "pray"},
                {id: 2, choice1: "light", choice2: "right"},
                {id: 3, choice1: "lice", choice2: "rice"},
                {id: 4, choice1: "liver", choice2: "river"},
                {id: 5, choice1: "fly", choice2: "fry"},
                {id: 6, choice1: "flight", choice2: "fright"},
                {id: 7, choice1: "love", choice2: "rub"},
                {id: 8, choice1: "elect", choice2: "erect"},
                {id: 9, choice1: "flea", choice2: "frea"},
                {id: 10, choice1: "alive", choice2: "arrive"},
                {id: 11, choice1: "allow", choice2: "arrow"},
                {id: 12, choice1: "bleed", choice2: "breed"},
                {id: 13, choice1: "glow", choice2: "grow"},
                {id: 14, choice1: "glass", choice2: "grass"},
                {id: 15, choice1: "load", choice2: "road"},
                {id: 16, choice1: "elect", choice2: "erect"},
                {id: 17, choice1: "lace", choice2: "race"},
                {id: 18, choice1: "blue", choice2: "brew"},
                {id: 19, choice1: "blanch", choice2: "branch"},
                {id: 20, choice1: "bleak", choice2: "break"},
            ],
            test_countup: 1,
            test_counts: 20,
            tests: [],
            results: [],
            results_correct: 0,
            results_wrong: 0,
        }

    },
    computed: {
    },
    created: function(){
        this.tests = randomQuestion(this.test_counts, this.questions.length);
    },
    methods: {
        next: function(value) {
            this.results.push(value);
            this.test_countup ++; 
            if(value === "〇"){
                this.results_correct ++;
            }else if(value === "✕"){
                this.results_wrong ++;
            }
        },
    }

}
</script>

<style scoped>
.test {
    background-color: #97C3FF;
    height: calc(100vh - 50px);
    padding: 30px 20px 20px 20px;
}

.container {
    background-color: #fff;
    border-radius: 15px;
    height: 100%;
}



</style>