<?php

include 'header-init.php';
include 'jwt-helper.php';

$user = extractJwtBody();

if($user->role != "Administrateur" && $user->role !="Gestionnaire")
{
    http_response_code(404);
    echo '{"message" : "Vous n\'avez pas les droits nécessaires"}';
    exit();
}

$requete = $connexion->prepare("SELECT u.lastname AS Nom, u.firstname AS Prenom, re.date_retard AS Date_Retard, re.justifie AS Justifie, j.nom AS Nom_Justificatif 
                                FROM utilisateur u 
                                JOIN retard re ON u.id = re.id_utilisateur 
                                LEFT JOIN justificatif j ON re.id = j.id_retard 
                                JOIN role r ON u.id_role = r.id 
                                WHERE r.nom = 'Etudiant'");

$requete->execute();
$listeRetard = $requete->fetchAll();

echo json_encode($listeRetard);