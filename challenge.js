// exe 1
function rectangleArea(longueur,Largeur){
    return (longueur>0 && Largeur>0 ? (Largeur*longueur) : 0);
}
//exe 2
function circleArea(diametre){
    return (diametre > 0 ? ((diametre/2)*(diametre/2)*3.14) : 0);

}
//exe 3
function isLeapYear(year){
    if(year >0 ){
    return ((year%4) ===0  && (year%100)!==0 ) || (year%400)===0;}
    else{
        return "Invalid year, enter another one";
    }
}
