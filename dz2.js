let age = prompt('сколько вам лет,');
if(age >=0 && age <2 ){
    console.log('вы ребенок');
}
else if( age>=12 && age<18){
    console.log("Вы подросток")
}
else if( age>=18 && age<60){
    console.log("Вы взрослый")
}
else if( age>60){
    console.log("Вы пенсионер")
}