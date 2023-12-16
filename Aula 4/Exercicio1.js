const filmes = [
    {
        titulo: "As Branquelas",
        genero: ["Comédia", "Crime"],
        atores: ["Marlon Wayans", "Shawn Wayans"],
        lancamento: 2003,
        diretor: "Keenen Ivory Wayans",
        poster: "https://br.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/97/52/82/20534159.jpg",
    },

    {
        titulo: "Django Livre",
        genero: ["Faroeste", "Drama"],
        atores: ["Christoph Waltz", "Jamie Foxx"],
        lancamento: 2012,
        diretor: "Quentin Tarantino",
        poster: "https://i.pinimg.com/originals/d3/4b/a0/d34ba07d38260fda50cae8fd1fd4fef9.jpg",
    },

    {
        titulo: "Homem-Aranha: Sem Volta para Casa",
        genero: ["Ação", "Ficção"],
        atores: ["Tom Holland", "Samuel L. Jackson"],
        lancamento: 2019,
        diretor: "Jon Watts",
        trilhaSonora: "Composta por Quantin Tarantino",
        poster: "https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG" ,

    },
    {
        titulo: "Pantera Negra",
        generos: ["Ação", "Aventura"],
        atores: ["Chadwick Boseman", "Michael B. Jordan"],
        lancamento: 2018,
        diretor: "Ryan Coogler",
        premioOscar: "Pantera Negra ganhou o oscar de melhor figurino.",
        poster: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/07/FYZQjUeVsAEXgtH.jpg?resize=691,1024",
    }
];



const htmlList = document.querySelector('#filmes');
const anoReferencia = new Date().getFullYear();

for (let filme of filmes) {

    const idadeFilme = anoReferencia - filme.lancamento;

    const p = document.createElement('p');
    p.textContent = filme.titulo;
    htmlList.appendChild(p);

    const pIdade = document.createElement('p');
    pIdade.textContent = `Tem ${idadeFilme} anos`;
    htmlList.appendChild(pIdade);

    const img = document.createElement('img');
    img.src = filme.poster;
    htmlList.appendChild(img);
}

    const id = document.querySelector('#root');



