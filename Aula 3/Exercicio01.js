function podeTomarUmTrago (anoNascimento, paisReferencia, anoReferencia = new Date().getFullYear()) {
    let idadeMinima

    switch (paisReferencia) {
        case 'BR':
            idadeMinima = 18;
            break;
        case 'JP':
            idadeMinima = 19;
            break;
        case 'EUA':
            idadeMinima = 21;
            break
        default:
            return false;
    }

    const idadeAtual = anoReferencia - anoNascimento;
    return idadeAtual >= idadeMinima ;
}

const podeConsumirNoBrasil = podeTomarUmTrago(1998, 'BR');
console.log(podeConsumirNoBrasil);

const podeConsumirNoJapao = podeTomarUmTrago(2005, 'JP');
console.log(podeConsumirNoJapao);

const podeConsumirNoEUA = podeTomarUmTrago(2002, 'EUA');
console.log(podeConsumirNoEUA);



