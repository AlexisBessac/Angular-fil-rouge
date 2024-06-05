<?php

include 'header-init.php';

$requete = $connexion->prepare("SELECT u.lastname AS Nom, u.firstname AS Prenom, re.date_retard AS Date_Retard, re.justifie AS Justifie, j.nom AS Nom_Justificatif 
                                FROM utilisateur u 
                                JOIN retard re ON u.id = re.id_utilisateur 
                                LEFT JOIN justificatif j ON re.id = j.id_retard 
                                JOIN role r ON u.id_role = r.id 
                                WHERE r.nom = 'Etudiant'");

$listeRetard = $requete->fetchAll();

echo json_encode($listeRetard);