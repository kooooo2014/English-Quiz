function randomQuestion(qcount, datalength) {
    let Question = [];
    for (let i = 0; i < qcount; i++){
        let tmp = Math.floor(Math.random() * datalength);
        if(!Question.includes(tmp)){
            Question.push(tmp);
        }else{
            i --;
        }
    }
    return Question;
}

export default randomQuestion;