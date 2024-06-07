-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 06 juin 2024 à 06:30
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `angular-fil-rouge`
--

-- --------------------------------------------------------

--
-- Structure de la table `justificatif`
--

DROP TABLE IF EXISTS `justificatif`;
CREATE TABLE IF NOT EXISTS `justificatif` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `lien` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Id_retard` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_retard` (`Id_retard`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `justificatif`
--

INSERT INTO `justificatif` (`Id`, `nom`, `lien`, `Id_retard`) VALUES
(2, 'Grève SNCF', NULL, 2),
(3, 'Panne de réveil', NULL, 4);

-- --------------------------------------------------------

--
-- Structure de la table `retard`
--

DROP TABLE IF EXISTS `retard`;
CREATE TABLE IF NOT EXISTS `retard` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `date_retard` date DEFAULT NULL,
  `justifie` tinyint(1) NOT NULL,
  `Id_utilisateur` int NOT NULL,
  `Id_validateur` int DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id_utilisateur` (`Id_utilisateur`),
  KEY `Id_utilisateur_1` (`Id_validateur`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `retard`
--

INSERT INTO `retard` (`Id`, `date_retard`, `justifie`, `Id_utilisateur`, `Id_validateur`) VALUES
(1, '2024-06-05', 0, 3, 2),
(2, '2024-06-05', 1, 4, 2),
(3, '2024-05-31', 0, 5, 2),
(4, '2024-05-31', 1, 6, 2);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`Id`, `nom`) VALUES
(1, 'Administrateur'),
(2, 'Gestionnaire'),
(3, 'Etudiant');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Id_role` int NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `email` (`email`),
  KEY `Id_role` (`Id_role`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`Id`, `firstname`, `lastname`, `email`, `password`, `Id_role`) VALUES
(1, 'John', 'Doe', 'a@a', '$2y$10$Et0BDXbJQsj.MC5DVJZvJOGKy9vt1GizvA3GQmDTR8ahlVffdVDTa', 1),
(2, 'Alexis', 'Bessac', 'b@b', '$2y$10$Et0BDXbJQsj.MC5DVJZvJOGKy9vt1GizvA3GQmDTR8ahlVffdVDTa', 2),
(3, 'Albert', 'Muda', 'c@c', '$2y$10$Et0BDXbJQsj.MC5DVJZvJOGKy9vt1GizvA3GQmDTR8ahlVffdVDTa', 3),
(4, 'John', 'Doe', 'e@e', '$2y$10$NB9NTKwhbBuCln9F7phkLe5bOq/g9Zs1.iCRzGPdoK5SFseIgZe6W', 3),
(5, 'Louis', 'Doe', 'f@f', '$2y$10$zwJXicW/IknYKLBdfVoIVudfizHy/vo3NN1ghydGVLRDUaehlJcZC', 3),
(6, 'Léon', 'Doe', 'g@g', '$2y$10$KiSLYFbuD5Kdo8n20QSSF.Ukp4nnbsKCjRCgF4H5JTYFE.yFCitNu', 3);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `justificatif`
--
ALTER TABLE `justificatif`
  ADD CONSTRAINT `justificatif_ibfk_1` FOREIGN KEY (`Id_retard`) REFERENCES `retard` (`Id`);

--
-- Contraintes pour la table `retard`
--
ALTER TABLE `retard`
  ADD CONSTRAINT `retard_ibfk_1` FOREIGN KEY (`Id_utilisateur`) REFERENCES `utilisateur` (`Id`),
  ADD CONSTRAINT `retard_ibfk_2` FOREIGN KEY (`Id_validateur`) REFERENCES `utilisateur` (`Id`);

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`Id_role`) REFERENCES `role` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
