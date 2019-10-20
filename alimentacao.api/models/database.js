const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';

const client = new pg.Client(connectionString);
client.connect();

const empresa = client.query(
  'CREATE TABLE empresa(id_empresa SERIAL PRIMARY KEY, nome VARCHAR(40) not null, telefone INT, email VARCHAR(40), cnpj INT )');
  empresa.on('end', () => { client.end(); });

  const estabelecimento = client.query(
    'CREATE TABLE estabelecimento(id_estabelecimento SERIAL PRIMARY KEY, id_empresa INTEGER, nome_fantasia varchar(200) NULL,telefone varchar(20) NULL,email varchar(500) NULL,cnpj varchar(50) NULL,CONSTRAINT emp_est_role_id_fk FOREIGN KEY (id_empresa) REFERENCES empresa (id_empresa) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION )');
    estabelecimento.on('end', () => { client.end(); });

  const endereco_estabelecimento = client.query(
    'CREATE TABLE endereco_estabelecimento(id_endereco_estabelecimento serial PRIMARY KEY, id_estabelecimento INTEGER, pais varchar(100) NULL, cidade varchar(100) NULL,estado varchar(100) NULL,bairro varchar(100) NULL,cep varchar(9) NULL,rua varchar(150) NULL,numero varchar(10) NULL,CONSTRAINT end_est_role_id_fk FOREIGN KEY (id_estabelecimento) REFERENCES estabelecimento (id_Estabelecimento) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION)');
    endereco_estabelecimento.on('end', () => { client.end(); });

  const cliente = client.query(
    'CREATE TABLE cliente(id_cliente SERIAL PRIMARY KEY,nome varchar(200) NULL,telefone varchar(20)NULL,email varchar(500) NULL,cpf varchar(14) NULL)');
    cliente.on('end', () => { client.end(); });  

    const endereco_cliente = client.query(
      'CREATE TABLE endereco_cliente(id_endereco_cliente SERIAL PRIMARY KEY,id_cliente integer,pais varchar(100) NULL,cidade varchar(100) NULL,estado varchar(100) NULL,bairro varchar(100) NULL,cep varchar(9) NULL,rua varchar(150) NULL,numero varchar(10) NULL,CONSTRAINT end_cli_role_id_fk FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION)');
      endereco_cliente.on('end', () => { client.end(); }); 
        
    const app = client.query(
      'CREATE TABLE app(id_app SERIAL PRIMARY KEY, nome varchar(50))');          
      app.on('end', () => { client.end(); });     
        
    const pedidos = client.query(
      'CREATE TABLE pedidos(id_pedido SERIAL PRIMARY KEY,id_client INTEGER,id_estabelecimento INTEGER,data_pedido TIMESTAMP NULL,data_entrega TIMESTAMP NULL,tempo_de_preparacao TIMESTAMP NULL,tempo_de_entrega TIMESTAMP NULL,tempo_do_pedido TIMESTAMP NULL,preco_sem_taxa_de_entrega NUMERIC(4,2),taxa_de_entrega NUMERIC(4,2),preco_com_taxa_de_entrega NUMERIC(4,2),desconto_total NUMERIC(4,2),pedido_pago BOOL ,avaliacao_pedido INTEGER NULL,comentario_avaliacao_pedido varchar(200) NULL,descricao_pedido varchar(150) NULL,id_app INTEGER,CONSTRAINT ped_ap_role_id_fk FOREIGN KEY (id_app) REFERENCES app (id_app) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION)');          
      pedidos.on('end', () => { client.end(); }); 
          
    const forma_de_pagamento = client.query(
      'CREATE TABLE forma_de_pagamento(id_forma_pagamento SERIAL PRIMARY KEY,id_pedido INTEGER,forma_de_pagamento varchar(20) NULL,bandeira varchar(20) NULL,CONSTRAINT for_pag_role_id_fk FOREIGN KEY (id_pedido) REFERENCES pedidos (id_pedido) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION)');            
      forma_de_pagamento.on('end', () => { client.end(); });   
      
    const item = client.query(
      'CREATE TABLE item(id_item SERIAL PRIMARY KEY, id_pedido INTEGER, id_produto INTEGER, quantidade INTEGER, preço NUMERIC(4,2), desconto NUMERIC(4,2), adicao NUMERIC(4,2), CONSTRAINT itm_ped_role_id_fk FOREIGN KEY (id_pedido) REFERENCES pedidos (id_pedido) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION, CONSTRAINT itm_prd_id_fk FOREIGN KEY (id_produto) REFERENCES produto (id_produto) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION)');          
      item.on('end', () => { client.end(); });
        
    const sub_item = client.query(
      'CREATE TABLE sub_item(id_sub_item SERIAL PRIMARY KEY, id_pedido INTEGER, id_produto INTEGER, quantidade INTEGER, preco NUMERIC(4,2), desconto NUMERIC(4,2), adicao NUMERIC(4,2), CONSTRAINT sub_ped_role_id_fk FOREIGN KEY (id_pedido) REFERENCES pedidos (id_pedido) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION, CONSTRAINT sub_prd_role_id_fk FOREIGN KEY (id_produto) REFERENCES produto (id_produto) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION )');          
      sub_item.on('end', () => { client.end(); }); 
        
    const produto = client.query(
      'CREATE TABLE produto(id_produto SERIAL PRIMARY KEY, nome varchar(50), preco NUMERIC(4,2))');          
      produto.on('end', () => { client.end(); });    
