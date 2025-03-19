const dados = [
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        descricao: "Primeiro volume da trilogia épica de J.R.R. Tolkien. A história acompanha a jornada de Frodo Bolseiro, que recebe a missão de destruir o Um Anel, um artefato poderoso que ameaça a existência da Terra Média. Com a ajuda de seus amigos e aliados, Frodo enfrenta desafios épicos e perigos inimagináveis.",
        tags: "fantasia, aventura, épico",
        imagem: "https://harpercollins.com.br/cdn/shop/products/9788595086333.jpg?v=1706884470",
        link: "index.html",
        editora: "HarperCollins"
    },
    {
        titulo: "O Hobbit",
        descricao: "A jornada de Bilbo Bolseiro, um hobbit pacato que é levado a uma aventura inesperada. Ele se junta a um grupo de anões para recuperar um tesouro guardado pelo dragão Smaug. Durante sua jornada, Bilbo descobre coragem, esperteza e um anel mágico que mudará sua vida para sempre.",
        tags: "fantasia, aventura, classicos, clássicos",
        imagem: "https://harpercollins.com.br/cdn/shop/products/9788595085800_54e043c2-1006-48e6-bf16-7db869ccc415.jpg?v=1692287307",
        link: "index.html",
        editora: "HarperCollins"
    },
    {
        titulo: "1984",
        descricao: "Uma distopia clássica escrita por George Orwell. O livro retrata uma sociedade totalitária onde o governo controla todos os aspectos da vida, inclusive os pensamentos. Winston Smith, o protagonista, luta contra o sistema opressor enquanto busca liberdade e verdade em um mundo de mentiras.",
        tags: "distopia, política, classicos",
        imagem: "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535932966/1984-edicao-especial.jpg",
        link: "index.html",
        editora: "Companhia das Letras"
    },
    {
        titulo: "Admirável Mundo Novo",
        descricao: "Uma visão futurista e distópica de Aldous Huxley. A história se passa em uma sociedade onde a felicidade é controlada por drogas, e as pessoas são condicionadas desde o nascimento a aceitar seu papel na hierarquia social. Um olhar crítico sobre a tecnologia e a perda da individualidade.",
        tags: "distopia, ficção científica, classicos, clássicos, ficcao",
        imagem: "https://m.media-amazon.com/images/I/61hOp6UFvCL.jpg",
        link: "index.html",
        editora: "Biblioteca Azul"
    },
    {
        titulo: "Dom Quixote",
        descricao: "A história do cavaleiro errante Dom Quixote e seu fiel escudeiro Sancho Pança. Em sua busca por aventuras, Dom Quixote confunde moinhos de vento com gigantes e vive situações cômicas e emocionantes. Um clássico da literatura que explora temas como idealismo e realidade.",
        tags: "clássicos, aventura, literatura, classicos",
        imagem: "https://m.media-amazon.com/images/I/91vMtIeykDL._AC_UF1000,1000_QL80_.jpg",
        link: "index.html",
        editora: "Penguin Classics"
    },
    {
        titulo: "Orgulho e Preconceito",
        descricao: "Um romance clássico de Jane Austen que explora as complexidades do amor e da sociedade na Inglaterra do século XIX. A história acompanha Elizabeth Bennet e sua relação com o orgulhoso Sr. Darcy, enquanto ambos enfrentam seus preconceitos e aprendem a valorizar o outro.",
        tags: "romance, clássico, literatura, classicos",
        imagem: "https://m.media-amazon.com/images/I/81avKewzwNL._AC_UF1000,1000_QL80_.jpg",
        link: "index.html",
        editora: "Martin Claret"
    },
    {
        titulo: "O Código Da Vinci",
        descricao: "Um thriller de mistério escrito por Dan Brown. A história segue o simbologista Robert Langdon e a criptóloga Sophie Neveu enquanto desvendam segredos escondidos em obras de arte e símbolos religiosos. Uma trama cheia de reviravoltas e enigmas intrigantes.",
        tags: "mistério, thriller, ficção, suspense",
        imagem: "https://www.editoraarqueiro.com.br/media/upload/conteudos/9788580416251.jpg",
        link: "index.html",
        editora: "Arqueiro"
    },
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        descricao: "O início da saga do jovem bruxo Harry Potter. Ao descobrir que é um bruxo, Harry é levado para a Escola de Magia e Bruxaria de Hogwarts, onde faz amigos, enfrenta inimigos e descobre segredos sobre seu passado e o mundo mágico. Uma história de magia e amizade.",
        tags: "fantasia, aventura, magia",
        imagem: "https://rocco.com.br/app/uploads/2022/12/9788532530783.jpg",
        link: "index.html",
        editora: "Rocco"
    },
    {
        titulo: "A Guerra dos Tronos",
        descricao: "O primeiro livro da série As Crônicas de Gelo e Fogo, de George R.R. Martin. A história se passa em um mundo medieval fictício onde famílias nobres lutam pelo controle do Trono de Ferro. Uma trama cheia de intrigas políticas, batalhas épicas e personagens complexos.",
        tags: "fantasia, épico, aventura",
        imagem: "https://m.media-amazon.com/images/I/61bVmoNhVTL._AC_UF1000,1000_QL80_.jpg",
        link: "index.html",
        editora: "Leya"
    },
    {
        titulo: "O Pequeno Príncipe",
        descricao: "Uma história encantadora sobre amizade, amor e o sentido da vida. O Pequeno Príncipe viaja por diferentes planetas, encontrando personagens únicos e aprendendo lições valiosas. Um clássico atemporal que encanta leitores de todas as idades com sua simplicidade e profundidade.",
        tags: "infantil, clássicos, filosofia, classicos",
        imagem: "https://m.media-amazon.com/images/I/81vp0tStUxL._AC_UF1000,1000_QL80_.jpg",
        link: "index.html",
        editora: "Agir"
    },
    {
        titulo: "A Revolução dos Bichos",
        descricao: "Uma fábula política escrita por George Orwell. O livro retrata uma revolução animal em uma fazenda, que rapidamente se transforma em uma ditadura. Uma crítica poderosa ao totalitarismo e à corrupção do poder, contada de forma simples e impactante.",
        tags: "política, sátira, clássicos, classicos",
        imagem: "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535909555/a-revolucao-dos-bichos.jpg",
        link: "index.html",
        editora: "Companhia das Letras"
    },
    {
        titulo: "O Alquimista",
        descricao: "Uma jornada espiritual escrita por Paulo Coelho. A história acompanha Santiago, um jovem pastor que busca realizar seu sonho de encontrar um tesouro. Durante sua jornada, ele aprende lições sobre a vida, o amor e a importância de seguir seus sonhos.",
        tags: "espiritualidade, aventura, clássicos, classicos",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81slUinjTlS._AC_UL900_SR615,900_.jpg",
        link: "index.html",
        editora: "HarperOne"
    },
    {
        titulo: "A Menina que Roubava Livros",
        descricao: "Uma história emocionante ambientada na Segunda Guerra Mundial. Liesel Meminger encontra consolo nos livros enquanto enfrenta as dificuldades da guerra. Narrada pela Morte, a história é um retrato tocante da resiliência humana e do poder das palavras.",
        tags: "drama, histórico, drama, historico",
        imagem: "https://intrinseca.com.br/wp-content/uploads/2023/05/catalogo_g.jpg",
        link: "index.html",
        editora: "Intrínseca"
    },
    {
        titulo: "Percy Jackson e o Ladrão de Raios",
        descricao: "O início da saga do semideus Percy Jackson. Ao descobrir que é filho de Poseidon, Percy embarca em uma aventura para recuperar o raio de Zeus e evitar uma guerra entre os deuses. Uma história cheia de ação, mitologia e humor.",
        tags: "fantasia, aventura, mitologia",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1sLt0BEO0sFZRj6MDsmipKLCuPa2G_G9Vg&s",
        link: "index.html",
        editora: "Intrínseca"
    },
    {
        titulo: "Jogos Vorazes",
        descricao: "O primeiro livro da trilogia distópica de Suzanne Collins. Em um futuro distópico, Katniss Everdeen participa de um jogo mortal transmitido ao vivo, onde apenas um pode sobreviver. Uma história de coragem, sacrifício e luta contra a opressão.",
        tags: "distopia, aventura, ação, ficcao",
        imagem: "https://rocco.com.br/app/uploads/2022/12/9786555321449.jpg",
        link: "index.html",
        editora: "Rocco"
    },
    {
        titulo: "Cem Anos de Solidão",
        descricao: "Uma obra-prima de Gabriel García Márquez. A história acompanha várias gerações da família Buendía na fictícia cidade de Macondo. Um clássico do realismo mágico que explora temas como amor, solidão e o ciclo da vida.",
        tags: "realismo mágico, clássicos, literatura, classicos",
        imagem: "https://cdn.record.com.br/wp-content/uploads/2020/08/25160327/2751-600x927.jpeg",
        link: "index.html",
        editora: "Record"
    },
    {
        titulo: "O Morro dos Ventos Uivantes",
        descricao: "Um romance clássico de Emily Brontë. A história de amor e vingança entre Heathcliff e Catherine Earnshaw é marcada por paixões intensas e tragédias. Um retrato sombrio e fascinante da natureza humana.",
        tags: "romance, clássico, drama, classicos",
        imagem: "https://m.media-amazon.com/images/I/91-hcpB1WMS._AC_UF1000,1000_QL80_.jpg",
        link: "index.html",
        editora: "Penguin Classics"
    },
    {
        titulo: "A Arte da Guerra",
        descricao: "Um tratado militar escrito por Sun Tzu. Este clássico da estratégia oferece lições atemporais sobre liderança, planejamento e tomada de decisões. Suas ideias são aplicáveis não apenas em batalhas, mas também na vida e nos negócios.",
        tags: "estratégia, clássicos, filosofia, classicos",
        imagem: "https://m.media-amazon.com/images/I/81xGCS7Fg5L.jpg",
        link: "index.html",
        editora: "Lafonte"
    },
    {
        titulo: "O Nome do Vento",
        descricao: "O primeiro livro da trilogia A Crônica do Matador do Rei, de Patrick Rothfuss. A história de Kvothe, um jovem talentoso e enigmático, é repleta de magia, música e mistério. Uma obra-prima da fantasia moderna.",
        tags: "fantasia, épico, aventura",
        imagem: "https://www.editoraarqueiro.com.br/media/upload/conteudos/Nome_do_vento_IMPRENSA.jpg",
        link: "index.html",
        editora: "Arqueiro"
    }
];