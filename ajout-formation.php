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

//tansformer le JSON en objet PHP contenant les informations de l'utilisateur
$json = file_get_contents('php://input');

// Le convertit en objet PHP
$formation = json_decode($json);

$requete = $connexion->prepare("INSERT INTO formation(formation_name, date_debut, date_fin, place, city) 
                                VALUES (:formation_name, :date_debut, :date_fin, :place, :city)");

$requete->execute([
    "formation_name" => $formation->formation_name,
    "date_debut" => $formation->date_debut,
    "date_fin" => $formation->date_fin,
    "place" => $formation->place,
    "city" => $formation->city
]);

echo '{"message" : "La formation a bien été ajouté"}';