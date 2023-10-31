<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "noa.menjikoff@gmail.com"; // Adresse e-mail du destinataire
    $subject = "Nouveau message de contact de $name";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "<div id='message'>E-mail envoyé avec succès</div>";
    } else {
        echo "<div id='message'>Erreur lors de l'envoi de l'e-mail</div>";
    }
}

?>
