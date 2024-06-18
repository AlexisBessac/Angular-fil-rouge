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

if (!isset($_GET['id'])) {
    echo '{"message" : "il n\'y a pas d\'identiant dans l\'URL"}';
    http_response_code(400);
    exit;
}

$idLesson = $_GET["id"];

// Prend les données brutes de la requête
$json = file_get_contents('php://input');

// Le convertit en objet PHP
$lesson = json_decode($json);


//On recupère l'utilisateur dans la bdd
$requete = $connexion->prepare("SELECT * FROM formation WHERE id = ?");
$requete->execute([$idLesson]);
$LessonDb = $requete->fetch();

//si il n'y a pas d'utilisateur on retourne une erreur 404
if (!$LessonDb) {
    http_response_code(404);
    echo '{"message" : "Cette formation n\'existe pas"}';
    exit();
}

$requete = $connexion->prepare("UPDATE formation SET 
                                    formation_name = :formation_name, 
                                    date_debut = :date_debut, 
                                    date_fin = :date_fin, 
                                    place = :place, 
                                    city = :city
                                WHERE id = :id");

$requete->execute([
    "formation_name" => $lesson->formation_name,
    "date_debut" => $lesson->date_debut,
    "date_fin" =>  $lesson->date_fin,
    "place" =>  $lesson->place,
    "city" =>  $lesson->city,
    "id" => $idLesson
]);

echo '{"message" : "La formation a bien été modifié"}';