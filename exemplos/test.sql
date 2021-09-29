CREATE TABLE test(
nome VARCHAR(50),
email VARCHAR(100),
idade INT
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    'gabriel',
    'email@test.com',
    20
);

SELECT * FROM usuarios WHERE idade = 9;

DELETE FROM usuarios WHERE nome='gabriel';

UPDATE usuarios SET nome = 'Nome test', WHERE nome='gabriel';


ALTER USE 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345'; 