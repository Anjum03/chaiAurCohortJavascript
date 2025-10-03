
//task - make a calculator 

function calculateGrade(marks) {

    switch (true) {
        case marks > 90:
            return "A";

        case marks > 80:
            return "B";

        case marks > 70:
            return "C";

        case marks < 60:
            return "D";

        default:
            return 'F';

    }

}

console.log(calculateGrade(77));


//with if- else using

function gradeCalculator (grade){

    if(grade > 90){
        return "A";
    }else if(grade <90 && grade >80){
        return "B";
    }else if(grade <80 && grade >60){
        return "C";
    }else if(grade <60 && grade >40){
        return "D";
    }else{
        return "F";
    }
}

console.log(gradeCalculator(53));
console.log(gradeCalculator(43)); //reusable code
console.log(gradeCalculator(99));
console.log(gradeCalculator(78));



