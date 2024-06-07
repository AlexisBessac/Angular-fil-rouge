<?php 

include 'header-init.php';

if (!isset($_GET['recherche'])) {
    echo '{"message" : "il n\'y a pas de paramètre recherche"}';
    http_response_code(400);
    exit;
}

$recherche = $_GET['recherche'];

$requete = $connexion->prepare("SELECT * FROM utilisateur WHERE firstname LIKE :recherche OR lastname LIKE :recherche" );
$requete->execute(["recherche" =>"%$recherche%"]);
$listeUtilisateur = $requete->FetchAll();

echo json_encode($listeUtilmisateur);