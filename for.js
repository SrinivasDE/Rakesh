//  Normal for loop it is a range purpose 

let even = new Set();
let odd = new Set();
for (i=1; i<=20; i++){
    (i%2===0)? even.add(i): odd.add(i);
}
console.log("Even numbers from 1 to 20",even)
console.log("ODD numbers from 1 to 20",odd)


// For in loop it's for object to fetch the data

let laptop = {
    brand : ["HP", "Dell", "Asus", "Lenovo"],
    cpu : ["i5", "i7", "i5", "i9"],
    ram : [250,500,500,1000]
}

for (i in laptop){
    console.log(laptop[i],"\n");
}
console.log(laptop.brand,"\n")
console.log(laptop.cpu,"\n")
console.log(laptop.ram,"\n")


// For of loop for array to fetch the data

let num = [11,22,2,5,6,7,8,13,17,21,39,43,44,45,57];
let n = 1
let prime = new Set();
let notprime = new Set();
for (i of num){
    for (j=1; j<=i; j++){
        if (i%j!==0){
            prime.add(j)
        }
        else{
            notprime.add(j)
        }
    }
}
console.log(prime);
console.log(notprime);

