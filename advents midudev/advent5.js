function cyberReindeer(road, time) {
    let play = [];
    let asteriscos=[];
    play.push(road);

    for (let t = 0; t+1 < time; t++) { // Cambiado <= a <, ya que queremos ejecutarnos solo `time` veces

        let carretera = play[t].split('');

        // Verificar si han pasado 5 unidades de tiempo y abrir las barreras
        if ((t + 1) % 5 === 0) {
            carretera = carretera.map((char) => (char === '|' ? '*' : char));
            for(let i=0; i<carretera.length;i++){
                if(carretera[i]=='*'){
                    asteriscos.push[i];
                }
            }
        }

        let actual = carretera.indexOf('S');
        let siguiente = 'S';

        if (carretera[actual + 1] === '|') { // Si lo siguiente es una barra, hay que esperar
            play.push(carretera.join(''));
        } else { // Si no, podemos avanzar

            if(asteriscos.includes(actual)){
                caracter='*';
            }else{
                caracter='.';
            }
            carretera[actual] = caracter;
            carretera[actual + 1] = siguiente;
            play.push(carretera.join(''));
        }
    }

    return play;
}

// Test
let road = 'S.|.|.';
let tiempo = 10;
let result = cyberReindeer(road, tiempo);
console.log(result);
