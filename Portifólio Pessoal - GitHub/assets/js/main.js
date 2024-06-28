import { UserService } from "../../services/github-service.js";
import { RepositoriosService } from "../../services/github-service.js";
import { SocialService } from "../../services/github-service.js";
import { Amigos } from "../../services/jsonServerColegas-service.js";

const repositoriosService = new RepositoriosService();
const userService = new UserService();
const socialService = new SocialService();
const colegasTrabalho = new Amigos();
const containerCards = $('#rowCards');
const containerPerfil = $('#rowPerfil');
const containerColegas = $('#rowColegas');

async function gerenciarRepositorios() {
    try {
        // Obter todos os repositórios
        const repositorios = await repositoriosService.getRepositorios();
        const perfil = await userService.getUser();
        const social = await socialService.getSocial();
        const colegas = await colegasTrabalho.getColegas();
       
        criarCards(repositorios);
        criarBanner(perfil, social);
        criarColegas(colegas);
    } catch (error) {
        console.error("Erro ao gerenciar repositórios:", error);
    }
}

function criarCards(repositorios) {
    repositorios.forEach(repositorio => {
        let project = document.createElement('div');
        project.className = 'col-md-3 my-3 d-flex justify-content-center';  // Adicionar classes de colunas, margem e centralização
        project.innerHTML = `
            <div class="card" style="width: 18rem;">
                
                <div class="card-body">
                    <h5 class="card-title">${repositorio.name}</h5>
                    <p class="card-text">${repositorio.description || ''}</p>
                    <a href="repos.html?repo=${repositorio.name}" class="btn btn-primary" target="_blank" id="botaoDetalhes">Ver Detalhes</a>
                </div>
            </div>
        `;
        
        containerCards.append(project);
    });
}



function criarBanner(perfil, social) {
    let banner = document.createElement('div');
    banner.className = "row g-0"; 

    let instagramUrl = '';
    let linkedinUrl = '';

    social.forEach(item => {
        if (item.provider === 'instagram') {
            instagramUrl = item.url;
        } else if (item.provider === 'linkedin') {
            linkedinUrl = item.url;
        }
    });

    banner.innerHTML = `
        <div class="col-md-4">
            <img src="${perfil.avatar_url}" class="img-fluid rounded-start" alt="Avatar de ${perfil.name}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${perfil.name}</h5>
                <p class="card-text">${perfil.bio}
                </p>
                <p><strong>Localização: Belo Horizonte / Contagem</strong></p>
                <a href="${instagramUrl}"><i class="fa-brands fa-instagram fa-beat fa-2xl" style="color: #ff00ea;"></i></a>
                <a href="https://github.com/RafaelFFranco"><i class="fa-brands fa-github fa-bounce fa-2xl" style="color: #000000;"></i></a>
                <a href="${linkedinUrl}"><i class="fa-brands fa-linkedin fa-shake fa-2xl" style="color: #0062ad;"></i></a>
            </div>
        </div>
    `;

    containerPerfil.append(banner);
}

function criarColegas(colegas){
    colegas.forEach(colega => {
        let colegaCard = document.createElement('div');
        colegaCard.className = 'card border-0 col-md-2';
        colegaCard.innerHTML = `
                    <div>
                        <img src="${colega.url_foto}" class="card-img-top" alt="victor">
                        <div class="card-body">
                            <a class="text-decoration-none text-primary" href="${colega.url_github}">
                                <p class="card-text"><strong>${colega.nome}</strong></p>
                            </a>
                        </div>
                    </div>`
        containerColegas.append(colegaCard);
    })
}



window.addEventListener("load", gerenciarRepositorios);

