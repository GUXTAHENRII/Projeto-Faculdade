<?php
// Incluir arquivo de conexão com o banco de dados
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obter dados do formulário
    $email = $_POST['fEmail'];
    $senha = $_POST['fSenha'];

    // Preparar e vincular a consulta SQL
    $stmt = $conn->prepare("SELECT senha FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);

    // Executar a consulta
    $stmt->execute();
    $stmt->store_result();

    // Verificar se o usuário foi encontrado
    if ($stmt->num_rows > 0) {
        // Vincular o resultado
        $stmt->bind_result($hash);
        $stmt->fetch();

        // Verificar a senha
        if (password_verify($senha, $hash)) {
            // Senha correta, redirecionar para index.html
            header("Location: index.html");
        } else {
            // Senha incorreta, redirecionar para cadastro.html
            header("Location: cadastro.html");
        }
    } else {
        // Usuário não encontrado, redirecionar para cadastro.html
        header("Location: cadastro.html");
    }

    // Fechar a declaração e a conexão
    $stmt->close();
    $conn->close();
} else {
    echo "Método de requisição inválido.";
}
?>
