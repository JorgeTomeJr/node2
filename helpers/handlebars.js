const helpers = {
    upperCase(content){
        return content.toUpperCase()
    }
}

module.exports = helpers
//o handlebars nao aceita diretamente codigo js, tem que passar pela engine helpers 
// no index.js, depois exporta a funcao e coloca no arquivo desejado