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

$requete = $connexion->prepare("SELECT formation_name AS Nom, date_debut AS Date_Debut, date_fin AS Date_Fin, place AS Lieu, city AS Ville FROM formation");

$requete->execute();
$listeFormation = $requete->fetchAll();

echo json_encode($listeFormation);