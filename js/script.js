//Array de imagens

let Imagens = () => {
    fetch("https://raw.githubusercontent.com/alura-cursos/imersao-java-2-api/main/TopMovies.json")
      .then(retorno => retorno.json())
      .then(dados => {
        
        const imagens = [];
        const container = document.getElementById('mais-vistos');
        let imagensHTML = [];
  
        // Salvando imagens localmente
        for (let i = 0; i < dados.items.length; i++) {
          imagens.push(dados.items[i].image);
        }

        // Formatando Imagens para serem inseridas no HTMl
        for(let i = 0; i < imagens.length; i++){
          imagensHTML.push(`<img src="${imagens[i]}" />`);
        }

        // Inserindo imagens no HTML
        for(let i = 0; i < imagensHTML.length; i++){
          container.innerHTML += imagensHTML[i];
        }
      });
  }
  
Imagens();
