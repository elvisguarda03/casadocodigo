console.log('Olá mundo Node!');

//O Node.js é uma plataforma, (ou um ambiente de execução para códigos javascript) escrita sobre a engine de Javascript do Chrome, a V8.
// Ele é todo baseado em eventos e suas operações são não-bloqueantes (assíncrono),
//  o que lhe confere bastante eficiência e leveza.

//A função alert() está definida apenas no navegador! Portanto,
//como os códigos da plataforma Node rodam do lado do servidor, essa função não está definida e tal erro ocorre.

// alert('O show tem que continuar!');

//package.json - Lista todas as dependências do projeto
//Pasta app - Responsável por armazenar todo código relativo a aplicação
//Pasta config - Armazenará códigos relacionados a configuração da aplicação.

//npm install - O Gerenciador de pacotes do Nugget busca pelo arquivo package.json, lê este arquivo
// e baixa todas as dependências que estão listadas.

//As dependências do Node serão baixadas de acordo com o SO.

//Ao compartilhar um projeto node, não se compartilha a pasta node_modules, pois as dependências não possuem interoperabilidade entre SO.
//-g: Indica para o Node que o módulo em questão será instalado globalmente


//O atributo scripts indica para o node como ele pode executar o projeto
//npm start = Executa o comando definido dentro do atributo scripts que possuí uma propriedade chamada start