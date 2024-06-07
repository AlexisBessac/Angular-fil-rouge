<?php

include 'header-init.php';

$requete = $connexion->prepare("SELECT u.id, u.firstname, u.lastname 
                                FROM utilisateur u 
                                JOIN role r ON u.Id_role = r.id 
                                WHERE r.nom = 'étudiant'");

// Exécuter la requête préparée
$requete->execute();

// Récupérer les résultats
$user = $requete->fetchAll();

echo json_encode($user);