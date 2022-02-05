let amigo = {
    nome: "Jorge",
    sexo: "Masculino",
    peso: 80,

    engordar(p=0) {
        this.peso += p
        console.log(`Engordou ${p}Kg e agora possui ${this.peso}Kg.`);
    }
}

console.log(amigo.nome);
amigo.engordar(10)