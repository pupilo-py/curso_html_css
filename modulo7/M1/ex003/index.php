<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHPInfo</title>
</head>
<body>
    <h1>Exemplo de PHP</h1>
    
    <?php
        date_default_timezone_set("America/Bahia");
        echo "Hoje é dia " . date("d/M/Y");
        echo " e a hora atual é " . date("G:i:s");
    ?>
</body>
</html>