let num = [5, 8, 2, 9, 3]

num[num.length] = 4
num.push(1)
num.sort()

console.log(num);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O ${num.indexOf(num[0]) + 1}º valor do vetor é ${num[0]}.`);