var names = ['Karim', 'Rahim', 'Alim', 'Jalim', 'Karim', 'Ambiya', 'Alima', 'Alim', 'Ambiya', 'jallim', 'Rahima', 'Rahima'];



function checkNames(names) {
   var unique = [];
    for (i = 0; i < names.length; i++){
        var name = names[i];
        if (unique.includes(name) == false) {
            unique.push(name);
        }
    }
    return unique;
}
var nameOfBiriyani = checkNames(names);
console.log(nameOfBiriyani);