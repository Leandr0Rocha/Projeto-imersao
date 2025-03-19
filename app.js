window.onload = function () {
    const section = document.getElementById("resultados-pesquisa");
    section.innerHTML = `
        <div class="mensagem-boas-vindas">
            <h2>Bem-vindo à Roda Literária!</h2>
            <br>
            <p>Explore nossa biblioteca de clássicos da literatura mundial. Use a barra de pesquisa acima para encontrar livros pelo título, autor ou tema.</p>
        </div>
    `;
};

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite algo para acessar o conteúdo.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""
    let titulo = ""
    let descricao = ""
    let tags = ""

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
            <div class="foto"><img src=${dado.imagem}
                    alt="capa do livro">
            </div>
            <div class="texto">
                <h2>${dado.titulo}</h2>
                <p class="editora">Editora: ${dado.editora}</p>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Leia aqui</a>
            </div>
    </div>
    `
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    section.innerHTML = resultados
}

function filtrarPorGenero(genero) {
    const section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        if (dado.tags.includes(genero)) {
            resultados += `
                <div class="item-resultado">
                    <div class="foto">
                        <img src="${dado.imagem}" alt="Capa do livro">
                    </div>
                    <div class="texto">
                        <h2>${dado.titulo}</h2>
                        <p class="editora">Editora: ${dado.editora}</p>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Leia aqui</a>
                    </div>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado para este gênero.</p>";
    }

    section.innerHTML = resultados;
}

document.querySelectorAll(".navbar-list a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const genero = this.getAttribute("data-filter");
        filtrarPorGenero(genero);
    });
});