export class UserService {
    constructor() {
        this.urlBase = "https://api.github.com/users/RafaelFFranco";
    }

    async getUser() {
        const resposta = await fetch(this.urlBase);
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar repositórios: ${resposta.statusText}`);
        }
        return resposta.json();
    }
}

export class RepositoriosService {
    constructor() {
        this.urlBase = "https://api.github.com/users/RafaelFFranco/repos";
    }

    async getRepositorios() {
        const resposta = await fetch(this.urlBase);
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar repositórios: ${resposta.statusText}`);
        }
        return resposta.json();
    }
}

export class SocialService {
    constructor() {
        this.urlBase = "https://api.github.com/users/RafaelFFranco/social_accounts";
    }

    async getSocial() {
        const resposta = await fetch(this.urlBase);
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar repositórios: ${resposta.statusText}`);
        }
        return resposta.json();
    }
}

export class GetRepoByName {
    async getRepoName(repoName) {
        const response = await fetch(`https://api.github.com/repos/RafaelFFranco/${repoName}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar dados do repositório');
        }
        return await response.json();
    }
}



