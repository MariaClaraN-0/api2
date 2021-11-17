Nesse projeto temos uma API COM 3 ROTAS.

Cidades , Estados e Países.
Primeiramente hospedamos nosso projeto no Heroku e temos uma URL principal para nossas rotas :

https://proj02-back-mongo-atlas.herokuapp.com/

A partir dessa rota principal conseguimos acessar nossas 3 rotas criadas :

https://proj02-back-mongo-atlas.herokuapp.com/cidades
https://proj02-back-mongo-atlas.herokuapp.com/estados
https://proj02-back-mongo-atlas.herokuapp.com/paises
Em cada uma dessas rotas temos Sub-rotas que acessam, acrescentam, editam e apagam informações em nosso banco de dados na nuvem.

Vamos usar a rota /estados como exemplo , as 5 sub rotas criadas dentro de /estados são:
/listall (Método [GET] para listar todos os estados do banco de dados) :

https://proj02-back-mongo-atlas.herokuapp.com/estados/listall
/listname/name (Método [GET] para listar a cidade por um nome especifico) :

https://nodemongoatlas.herokuapp.com/cities/listname/INSIRA O NOME DO ESTADO
/add (Método [POST] para acrescentar uma cidade no banco de dados.)

https://proj02-back-mongo-atlas.herokuapp.com/estados/add
/update/id (Método [PUT] para editar uma cidade que já exista no banco de dados) :

https://proj02-back-mongo-atlas.herokuapp.com/estados/update/INSERIR O ID DA CIDADE
delete/id (Método [DELETE] para apagar uma cidade que já exista no banco de dados) :

https://proj02-back-mongo-atlas.herokuapp.com/estados/delete/INSERIR O ID DA CIDADE
Pronto! Agora já conseguimos usar nossa rota estados e suas sub-rotas!
​ O mesmo se aplica a cidades e paises
