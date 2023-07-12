<!DOCTYPE html>
<html>

<head>
    <meta charset='UTF-8'>
    <title>Modificando HTML #02</title>
    <link rel='stylesheet' href='css/estilo.css'>
</head>

<body class='conteudo exercicio'>
    <div>
        <p>Texto Inicial</p>
    </div>
    <script>
        const div = document.querySelector('div')
        div.innerHTML = 'Texto Alterado' // substitui o texto que está dentro da div
        // div.outerHTML = 'Texto Alterado' Troca tudo até a div
        div.insertAdjacentHTML('beforebegin', '<p>Antes Início</p>')
        div.insertAdjacentHTML('afterbegin', '<p>Depois Início</p>')
        div.insertAdjacentHTML('beforeend', '<p>Antes Fim</p>')
        div.insertAdjacentHTML('afterend','<p>Depois do Fim</p>')

        //Somente Texto (sem tags)
        console.log(div.innerText);
    </script>
</body>

</html>
