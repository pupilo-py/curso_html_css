var dia_da_semana = new Date().getDay()

switch (dia_da_semana) {
    case 0:
        console.log("Domingo")
        break;
    
    case 1:
        console.log("Segunda")
        break;

    case 2:
        console.log("Terça")
        break;
    
    case 3:
        console.log("Quarta")
        break;

    case 4:
        console.log("Quinta")
        break;

    case 5:
        console.log("Sexta")
        break;

    default:
        console.log("Sábado")
        break;
}