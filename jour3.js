// ...1.......
 var  fruits = ["mango","lemon","blueberry" ]
console.log(fruits)

// ...2.......
 var ingredients =["eggs", "milk" , "butter"]
 console.log(ingredients[1])
 console.log(ingredients[2])


// ...3.......
   
var objects = ["pen", "book", "lamp"]
 
objects.unshift("chair")   
console.log(objects)

 
objects.pop(); 
console.log(objects)

 
objects.push("labtop") 
console.log(objects)

 
objects.shift();    
console.log(objects)

 
 // ...4.......


 
var numbers = [4, 10, 8, 12, 6];
numbers.reverse()
console.log(numbers);

numbers.sort((a, b) => a - b);// 4, 6, 8, 10, 12 
console.log(numbers)

// ...5.......

 
var total = 0;
var limit = 100;
for (var i = 0; i <= limit; i++) {
    console.log(i);
}


// ...6.......

 var sentence = "Hello Konexio !";
 var inverse = "";
 
for (var i = sentence.length - 1; i >= 0; i--) {
    // console.log(sentence[i]);
   
    inverse = inverse + sentence[i];
    console.log(inverse);
}
