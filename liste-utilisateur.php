<?php

include 'header-init.php';
include 'jwt-helper.php';

$user = extractJwtBody();

if($user->role != "Administrateur")
{
    http_response_code(404);
    echo '{"message" : "Vous n\'avez pas les droits nécessaires"}';
    exit();
}

$requete = $connexion->query("  SELECT u.id, email, lastname, firstname, r.nom AS role_name 
                                FROM utilisateur u 
                                Join role r ON u.id_role = r.id");

$listeUtilisateur = $requete->fetchAll();

echo json_encode($listeUtilisateur);