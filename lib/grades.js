const book = {

    _grade:[],

    addGrade: function(deg)  {
        this._grade.push(deg)
    },
    getGradesCount: function() {
     return this._grade.length
    },
    getGradesAvg: function() {
        let total = 0 
        this._grade.map(deg => {
            total += deg
        })

        return total/this._grade.length

       },
       getGrade:function(grade) {
        if(grade >= 90){
            return "A"
        }
        else if(grade >= 80){
            return "B"
        }
        else if(grade >= 70){
            return "C"
        }
        else if(grade >= 60){
            return "D"
        } else{
            return "F"
        }
       }, 
       reset: function() {
         this._grade = []
       },

}

exports.book = book