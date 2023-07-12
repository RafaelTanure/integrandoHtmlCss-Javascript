<!DOCTYPE html>
<html>

<head>
    <meta charset='UTF-8'>
    <title>Trabalhando com Eventos #01</title>
    <link rel='stylesheet' href='css/estilo.css'>
</head>

<body class="conteudo exercicio">
    <div>
        <!-- onclick="navegarEm5s(event)"  Colocar diretamente o onclick de forma explicita  -->
        <a espera-um-pouco href="https://google.com.br">Google</a>
    </div>
    <script>
        function navegarEm5s(e) {
            e.preventDefault()
            console.log('Saindo em 5s...')
            setTimeout(() => {
                const link = e.target
                window.location.href = link.href
            }, 5000)
        }

        // const a = document.querySelector('a') // Não é tão interessante utilizar por não deixar claro que está sendo utilizado uma função
        // a.onclick = navegarEm5s

        const a = document.querySelector('[espera-um-pouco]') // Melhor dos casos  deixa explicito o que está sendo feito e utiliza direto na tag a o espera-um-pouco.
        a.onclick = navegarEm5s
    </script>
</body>
