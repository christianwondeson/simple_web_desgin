
console.log('welcome to java script !');

//using parameter on functions
// then adding actual values to make it argument
function addition(numberOne,numberTwo)
{
    
     return numberOne +numberTwo;
}

alert(addition(54,67));

//let us create an object an compapre
// using strict equality

var collect=
{
   num:"10",
   digit :10,
   
};

//use if and else statement type conversion
// is done 

if(collect.digit == collect.num)
{
        console.log("they are the same");
}else
{
    console.log("they are not equal");
}

// use strict equality method
// not type conversion is done 
// so they are not equal

console.log("using strict equality method\n");

if(collect.num === collect.digit)
{
    console.log("they are equal");
}else 
{
    console.log("they are not equal");
}

// using qeues on javascript

function operate(arr,item)
{
    for (var count=0; count<numbers.length; count++)
    {
        console.log(numbers[count] +"\n");
    }
    arr.push(item);
    //th above code will push a number to the last index
    // of the array

    return arr.shift();
  //while this code will return the first index
  // it will reomve it

}


 numbers=[11,12,13,14,15];
console.log("before" + JSON.stringify(numbers));
//Json.stringify will disply the array in 
// listed array manner
console.log("popped item :" +operate(numbers,6));
console.log("after" +JSON.stringify(numbers));

//nested arrays

let mylist=[
    [programming ={
        website:'java script , react , html , css ',
        obj_oreinted:'c# , java , python',
        hardware:'arduino ,shift_regiter,filp-flopd, cmos' 
    }],
    [projects={

        website:'font-end,back-end',
        apps:'WPS,console-app'
    }]
];

//accessing elements of a nested array
// with object

console.log(mylist[0]);

//delete programming.website;
//use this to delete elemet from an array of objects
console.log(mylist[1]);

//other examples is 

let lists=
{
    items: [["one","two","three"],
     ["car","house","yat","island"]],

    subjects :[["control", "instrumentation"],
    ["research","digital proccessing"]] 
     //this is multiple array {nested array}
};

console.log(lists.items[1][1]);
//display house
console.log(lists.subjects[1][1]);
//display image proccessing


