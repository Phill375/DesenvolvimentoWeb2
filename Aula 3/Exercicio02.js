function descontoCompra(valorCompra, possuiConvenio, possuiCartao) {
    const descontoMaximo = 100;
    let desconto = 0;

    if (possuiCartao && possuiConvenio) {
        desconto = Math.min(valorCompra * 0.15, descontoMaximo);
    } else if (possuiCartao || possuiConvenio) {
        desconto = Math.min(valorCompra * 0.10, descontoMaximo);
    }

    const valorComDesconto = valorCompra - desconto;
    
   
return valorComDesconto;
}

const valorCompra1 = 150;
const possuiConvenio1 = false;
const possuiCartao1 = true;

const valorFinal1 = descontoCompra(valorCompra1, possuiConvenio1, possuiCartao1);
console.log(`Valor final da compra 1 com desconto: R$${valorFinal1.toFixed(2)}`);

const valorCompra2 = 200;
const possuiConvenio2 = false;
const possuiCartao2 = false;

const valorFinal2 = descontoCompra(valorCompra2, possuiConvenio2, possuiCartao2);
console.log(`Valor final da compra 2 com desconto: R$${valorFinal2.toFixed(2)}`);

const valorCompra3 = 300;
const possuiConvenio3 = true;
const possuiCartao3 = true;

const valorFinal3 = descontoCompra(valorCompra3, possuiConvenio3, possuiCartao3);
console.log(`Valor final da compra 3 com desconto: R$${valorFinal3.toFixed(2)}`);

