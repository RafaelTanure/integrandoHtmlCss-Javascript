<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Selecionar Elementos #01</title>
    <link rel="stylesheet" href="css/estilo.css">
</head>
<body class="conteudo exercicio">
    <div id="primeiro">#primeiro</div>
    <div>Segundo</div>
    <div class="terceiro ultimo">.terceiro .ultimo</div>
    <script>
    
    //Vimos aqui funções para que possamos integrar o css junto ao html e o javaScript , fazer a alteração de cores nos elementos divs.
        document.getElementById('primeiro').classList.add('destaque'); // Função getElementById

        const divs = document.getElementsByTagName('div'); // Função getElementsByTagName
        Array.from(divs).forEach(e => e.classList.remove('destaque'))

        const divsArray = [...divs]
        divsArray.forEach(e =>e.classList.add('destaque'))

        const ultimosElementos = document.getElementsByClassName('ultimo') // Função GetElementsByClassName
        for(let e of ultimosElementos){
            e.classList.remove('destaque')
        }
    </script>
</body>
</html>
