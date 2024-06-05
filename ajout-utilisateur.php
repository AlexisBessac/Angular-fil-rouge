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
$utilisateur = json_decode($json);

//verifier l'email de l'utilisateur est unique
$requete = $connexion->prepare("SELECT * FROM utilisateur WHERE email = :email");
$requete->execute(["email" => $utilisateur->email]);
$utilisateurExistant = $requete->fetch();

if ($utilisateurExistant) {
    http_response_code(409); //note : 409 = CONFLICT
    echo '{"message" : "Cet email est déjà utilisé"}';
    exit();
}

//on récupère le role par rapport au nom indiqué dans le JSON
$requete = $connexion->prepare("SELECT id FROM role WHERE nom = :nom");
$requete->execute(["nom" => $utilisateur->role]);
$role = $requete->fetch();

//si le role n'existe pas, on renvoie une erreur 400
if (!$role) {
    http_response_code(400);
    echo '{"message" : "le rôle indiqué n\'existe pas"}';
    exit();
}

//On ajoute l'utilisateur dans la base de données
$requete = $connexion->prepare("INSERT INTO utilisateur(email, password, firstname, lastname, id_role) 
                                VALUES (:email, :password, :firstname, :lastname, :id_role)");

$requete->execute([
    "email" => $utilisateur->email,
    "password" => password_hash($utilisateur->password, PASSWORD_DEFAULT),
    "firstname" => $utilisateur->firstname,
    "lastname" => $utilisateur->lastname,
    "id_role" => $role['id']
]);

echo '{"message" : "L\'utilsateur a bien été ajouté"}';