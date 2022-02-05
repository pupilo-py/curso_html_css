let valores = [8, 1, 7, 4, 2, 9]

console.log(valores);

for (const pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}