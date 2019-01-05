const book = require('../lib/grades').book

exports["setUp"] = function(cb) {
    book.reset()
    cb()
}

exports["test for add grade"] = (test) => {
    book.addGrade(90)
    let count = book.getGradesCount()
    test.equal(count,1)
    test.done()
}

exports["get student grade"] = (test) => {
   
    let count =  book.getGrade(95)
    test.equal(count, "A")
    test.done()
}

exports["test for get avg"] = (test) => {
    book.addGrade(100)
    book.addGrade(100)
    let count = book.getGradesAvg()
    test.equal(count,100)
    test.done()
}