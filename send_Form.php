<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $name = $_POST['name'];
    $companyName = $_POST['companyName'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    // Email que irá receber os dados do formulario
    $to = "email@email.com";  

    // Assunto do email
    $subject = "Formulário de Contato";

   
    $body = "Nome: " . $name . "\n";
    $body .= "Nome da Empresa: " . $companyName . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Telefone: " . $tel . "\n";
    $body .= "Mensagem: " . $message;

   
    if (mail($to, $subject, $body)) {
        echo "<script>alert('Mensagem enviada com sucesso!');</script>";
    } else {
        echo "<script>alert('Erro ao enviar mensagem. Por favor, tente novamente.');</script>";
    }
}
?>
