/*
Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

#
##
###
####
#####
######
#######

*/
let res = "";
for (let i = 0; i < 7; i++) {
    res += "#";
    console.log(res);
}
