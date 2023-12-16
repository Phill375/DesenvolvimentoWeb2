const nome = 'Luis';
const filmes = [
    {nomeFilme: 'Bastardos Inglórios', anoLancamento: 2009},
    {nomeFilme: 'Django Livre', anoLancamento: 2013} ,
    {nomeFilme: 'Tropa de Elite 2', anoLancamento:  2010}]

console.log('O filme favorito de '  + nome + ' é ' + filmes[0].nomeFilme);
console.log('O filme favorito de '  + nome + ' foi lançado em ' + filmes[0].anoLancamento);
console.log('--------------------------------------------------')


const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const dataNascimento = new Date(1998,12,15);
const anoNascimento = dataNascimento.getFullYear();

const idade = anoAtual - anoNascimento;

console.log(nome + ' tem ' + idade + ' anos.')
console.log('--------------------------------------------------')

const musicas = [
    {nomeMusica: 'Artigo 157', artista: 'Racionais MCs'},
    {nomeMusica: 'Melhor eu Ir', artista: 'Pericles'},
    {nomeMusica: 'Falta Você', artista: 'Thiaguinho'}];
musicas.push({nomeMusica:'Tá Escrito', artista: 'Revelação'}, {nomeMusica: 'Cocaina', artista: 'Sabotage'});

for( let i = 0; i < musicas.length; i++){
    console.log(musicas[i].nomeMusica)
    console.log(musicas[i].artista)
}
