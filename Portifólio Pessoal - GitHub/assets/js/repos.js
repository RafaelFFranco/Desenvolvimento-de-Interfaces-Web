import { GetRepoByName } from "../../services/github-service.js";
const getRepoByName = new GetRepoByName();
const conteudo = document.getElementById('conteudo'); // Use document.getElementById para garantir a referência correta ao elemento

const urlParams = new URLSearchParams(window.location.search);
const repoName = urlParams.get('repo');

async function gerenciarDetalhes() {
    try {
        
        if (repoName) {
            // Obter detalhes do repositório específico
            const repoDetalhes = await getRepoByName.getRepoName(repoName);
            telaRepos(repoDetalhes);
        } else {
            console.error("Nome do repositório não encontrado na URL");
        }
    } catch (error) {
        console.error("Erro ao gerenciar repositórios:", error);
    }
}

function telaRepos(repo) {
    let infoRepoAtual = document.createElement('div');
    infoRepoAtual.innerHTML = `
        <ul class="list-group-item disabled text-left">
            <li>
                <h3 class="text-primary">Descrição</h3>
                <p>${repo.description || 'Não disponível'}</p>
            </li>
            <li>
                <h3 class="text-primary">Data de Criação</h3>
                <p>${new Date(repo.created_at).toLocaleDateString()}</p>
            </li>
            <li>
                <h3 class="text-primary">Linguagem</h3>
                <p>${repo.language || 'Não disponível'}</p>
            </li>
            <li>
                <h3 class="text-primary">Link de Acesso</h3>
                <a href="${repo.html_url}" target="_blank">${repo.html_url}</a>
            </li>
        </ul>`;
    conteudo.append(infoRepoAtual); 
}

window.addEventListener("load", gerenciarDetalhes);
