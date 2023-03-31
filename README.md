# Marvel-app

app de compras de HQ's 


![image](https://user-images.githubusercontent.com/87501956/229181809-1a50a443-9978-4852-bcc1-6874487c3a00.png)


![image](https://user-images.githubusercontent.com/87501956/229182094-8ec85566-b18c-47a7-bca2-4b0741a91c3b.png)


Comentário gerais sobre desenvolvimento desse App

Manipulação de rotas da api

#Foi totalmente inovador para mim já que api apresentava um esquema de criptografia para fazer as requisições, no caso com chave publica, privada, hash e um md5 entre esses 3,  confesso que isso me deu um pouco de dor de cabeça já que nunca sequer tive contato com isso principalmente na parte de exibir o produto devido ao fato de que requisição de mostrar produto por id precisava de um tela de carregamento, como não estava usando next.js eu optei por usar como recurso ao meu a favor o react-router para o roteamento entre a página home e produto e o seu custom hook useParams() que me ajudou a mostrar a product page em tela através do id,

 Estratégia para criar o carrinho de compras

#Havia any formas de fazer isso, no desafio aconselhavam usar o redux já que a biblioteca serve justamente para o compartilhamento de dados globais, no entanto optei por usar o contextAPI já que eu não teria tanto tempo para ficar lendo a documentação durante o processo, e com context eu já tenho um breve conhecimento, então seria mais fácil usar o state global que ele disponibilizava, nesse desafio pude melhorar muito meus conhecimentos com ele a propósito.

Futura implementações

sinto que faltaram funções que não pude implementar devido a falta de tempo, uma delas e reduzir o numero de casas decimais no calculo de preço total e arrumar o bug do mesmo, e implementar a função de busca.

Tecnologias Usadas:

React Router (rooteamento de paginas e abrir o produto/hq pelo id
React como biblioteca e ambiente de desenvolvimento
styled-components como uso de javascript no css
context-api para adicionar os produtos no carrinho através de um state global
biblioteca md5 para fazer diretamente os cálculos da criptografia da url

Deploy 

estou com problemas que pretendo resolver a respeito do deploy, o erro é o não carregamento de dados por vias de dúvidas deixarei print da aplicação funcionando atráves do yarn start.


Ideia de Layout

#o layout foi totalmente implementado por mim, e usei o figma para ficar mais fácil uma projeção de resultado do layout.
