<!DOCTYPE html>
<html>

<head>
    <meta charset='UTF-8'>
    <title>Acessando Atributos #02</title>
    <link rel='stylesheet' href='css/estilo.css'>
</head>

<body class='conteudo exercicio'>
    <div>
        <label for="compras">Compras</label>
        <ul id="compras" destino='escritório' data-urgencia="5" data-blabla="opa">

            <li>Café</li>
            <li>Água</li>
            <li>Copo Descartável</li>
        </ul>
    </div>
    <script>
        const lista = document.querySelector('div ul[destino="escritorio"]')
        console.log('Elemento "ul"............');
        console.log('childNodes', lista.childNodes);
        console.log('destino', lista.destno);
        console.log('getAttribute', lista.getAttribute('destino'));
        console.log('hasAttribute', lista.hasAttribute('destino'));
        lista.setAttribute('destino', 'empresa');
        lista.setAttribute('status', 'aberto');
        lista.removeAttribute('destino');
        console.log(lista.dataset.urgencia);
        lista.dataset.urgencia = 4

        //cuidado
        const label = document.querySelector('label');
        console.log(label.for);
        console.log(label.htmlFor);
        console.log(label.getAttribute('for'));
    </script>
</body>

</html>
