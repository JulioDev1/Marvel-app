# Marvel-app
app de compras de HQ's
Comentário gerais sobre desenvolvimento desse App

Manipulação de rotas da api

#Foi totalmente inovador para mim já que api apresentava um esquema de criptografia para fazer as requisições, no caso com chave publica, privada, hash e um md5 entre esses 3,  confesso que isso me deu um pouco de dor de cabeça já que nunca sequer tive contato com isso principalmente na parte de exibir o produto devido ao fato de que requisição de mostrar produto por id precisava de um tela de carregamento, como não estava usando next.js eu optei por usar como recurso ao meu a favor o react-router para o roteamento entre a página home e produto e o seu custom hook useParams() que me ajudou a mostrar a product page em tela através do id,

 Estratégia para criar o carrinho de compras

#Havia any formas de fazer isso, no desafio aconselhavam usar o redux já que a biblioteca serve justamente para o compartilhamento de dados globais, no entanto optei por usar o contextAPI já que eu não teria tanto tempo para ficar lendo a documentação durante o processo, e com context eu já tenho um breve conhecimento, então seria mais fácil usar o state global que ele disponibilizava, nesse desáfio pude melhorar muito meus conhecimentos com ele a propósito.



Ideia de Layout

# o layout foi totalmente implementado por mim, e usei o figma para ficar mais fácil uma projeção de resultado do layout.
