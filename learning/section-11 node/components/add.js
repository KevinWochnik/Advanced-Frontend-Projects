const add = (...numbers)=>{
    console.log(numbers);
    const math = numbers.reduce((sum, value)=>sum+value);
    return math
}

module.exports.add = add;
module.exports.des = 'description';
