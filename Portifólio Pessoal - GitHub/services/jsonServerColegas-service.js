export class Amigos {
    constructor() {
        this.urlBase = "https://api.npoint.io/9502d949577f7d38ae14";
    }

    async getColegas() {
        const resposta = await fetch(this.urlBase);
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar repositórios: ${resposta.statusText}`);
        }
        const data = await resposta.json();
        return data.colegas; // Retorna apenas o array de colegas
    }
}

export class ImagemCards {
    constructor(){
        this.urlBase = "https://api.npoint.io/e2089167b3e61961c492";
    }

    async getImagens(){
        const resposta = await fetch(this.urlBase);
        if(!resposta.ok){
            throw new Error(`Erro ao buscar imagem: ${resposta.statusText}`);
        }
        const data = await resposta.json;
        return data.Imagens;
    }
}