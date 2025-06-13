    const frutas = ['Maça', 'Banana', 'Uva'];
    console.log(frutas[0]);

    frutas[3] = 'Abacaxi'; // Adiciona no índice informado
    frutas.push('Pêra') // Adiciona por último
    console.log(frutas);

    frutas.pop(); // Remover o útimo dado
    console.log(frutas);

    //              0   1   2   3   4
    const numero = [10, 20, 30, 40, 50];
    frutas.splice(1, 2);
    console.log(numero);
    
    numero[0] = 100;
    console.log(numero.indexOf(50));
    console.log(numero);
    console.log(numero.includes(40));
    console.log(numero.includes(10));
    console.log(numero.join(' / '));
    
    const valores = [15, 25, 35, 45];
    console.log(numero.concat(valores));

