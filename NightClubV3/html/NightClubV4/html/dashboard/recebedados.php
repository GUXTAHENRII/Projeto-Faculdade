<?php
//include 'config.php';
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obter dados do formulário
    $nome = $_POST['fNome'];
    $email = $_POST['fEmail'];
    $senha = password_hash($_POST['fSenha'], PASSWORD_DEFAULT);

    // Preparar e vincular
    $stmt = $conn->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nome, $email, $senha);

    // Executar e verificar se houve sucesso
    if ($stmt->execute()) {
        echo "Novo registro criado com sucesso";
        header('location: login.html');
    } else {
        echo "Erro: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Método de requisição inválido.";
}
?>



