//Array de imagens

let Imagens = () => {
    fetch("https://raw.githubusercontent.com/alura-cursos/imersao-java-2-api/main/TopMovies.json")
      .then(retorno => retorno.json())
      .then(dados => {
        
        const imagens = [];
        const container = document.getElementById('mais-vistos');
  
        for (let i = 0; i < dados.items.length; i++) {
          imagens.push(dados.items[i].image);
        }
  
        let imagensHTML;

        for(let i = 1; i < imagens.length; i++){
          imagensHTML += `<img src="${imagens[i]}" />`;
          container.innerHTML = imagensHTML;
        }
  
  
      });
  }
  
  Imagens();
