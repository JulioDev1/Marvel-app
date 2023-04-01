# Marvel-app

app de compras de HQ's 


![image](https://user-images.githubusercontent.com/87501956/229181809-1a50a443-9978-4852-bcc1-6874487c3a00.png)


![image](https://user-images.githubusercontent.com/87501956/229182094-8ec85566-b18c-47a7-bca2-4b0741a91c3b.png)

![image](https://user-images.githubusercontent.com/87501956/229182582-9cf118f0-c43e-428e-8baf-f9fb8d2b8edd.png)


Comentário gerais sobre desenvolvimento desse App

Manipulação de rotas da api

#Foi totalmente inovador para mim já que api apresentava um esquema de criptografia para fazer as requisições, no caso com chave pública, privada, hash e um md5 entre esses 3,  confesso que isso me deu um pouco de dor de cabeça já que nunca sequer tive contato com isso principalmente na parte de exibir o produto, devido ao fato de que a requisição de mostrar produto por id precisava de uma tela de carregamento, como não estava usando next.js eu optei por usar como recurso ao meu a favor o react-router para o roteamento entre as páginas home e produto e o seu custom hook useParams() que me ajudou a mostrar a product page em tela através do id.

 Estratégia para criar o carrinho de compras

#Havia any formas de fazer isso, no desafio aconselhavam usar o redux já que a biblioteca serve justamente para o compartilhamento de dados globais, no entanto optei por usar o contextAPI já que eu não teria tanto tempo para ficar lendo a documentação durante o processo, e com context eu já tenho um breve conhecimento, então seria mais fácil usar o state global que ele disponibilizava, nesse desafio pude melhorar muito meus conhecimentos com ele a propósito.

Futura implementações

sinto que faltaram funções que não pude implementar devido a falta de tempo, uma delas e reduzir o número de casas decimais no cálculo de preço total , arrumar o bug do mesmo, e implementar a função de busca.

Tecnologias Usadas:

React Router (rooteamento de paginas e abrir o produto/hq pelo id

React como biblioteca e ambiente de desenvolvimento

styled-components como uso de javascript no css

context-api para adicionar os produtos no carrinho através de um state global

biblioteca md5 para fazer diretamente os cálculos da criptografia da url

Deploy 

estou com problemas que pretendo resolver a respeito do deploy, o erro é o não carregamento de dados por via de dúvidas deixarei print da aplicação funcionando atráves do yarn start.

link do do app:https://marvel-app-lime.vercel.app

Ideia de Layout

#o layout foi totalmente implementado por mim, eu usei o figma para ficar mais fácil uma projeção de resultado do layout.
