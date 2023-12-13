-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 13 déc. 2023 à 07:53
-- Version du serveur : 8.0.30
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `stickers_shop`
--

-- --------------------------------------------------------

--
-- Structure de la table `stickers`
--

CREATE TABLE `stickers` (
  `Id_Stickers` int NOT NULL,
  `category_` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Reference` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Price` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Number` smallint NOT NULL,
  `Authors` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Images` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'votre_valeur_par_defaut',
  `Stock` int DEFAULT NULL,
  `Id_supplier` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `stickers`
--

INSERT INTO `stickers` (`Id_Stickers`, `category_`, `Reference`, `Price`, `Number`, `Authors`, `Images`, `Stock`, `Id_supplier`) VALUES
(1, 'Anime', '01', 'studio1', 10, 'author1', 'votre_valeur_par_defaut', 10, 1),
(2, 'Anime', '02', 'studio1', 10, 'author2', 'votre_valeur_par_defaut', 10, 1),
(3, 'Anime', '03', 'studio1', 9, 'author3', 'votre_valeur_par_defaut', 9, 1),
(4, 'Anime', '04', 'studio1', 15, 'author4', 'votre_valeur_par_defaut', 15, 1),
(5, 'Anime', '05', 'studio1', 1, 'author5', 'votre_valeur_par_defaut', 1, 1),
(6, 'Anime', '06', 'studio1', 8, 'author6', 'votre_valeur_par_defaut', 8, 1),
(7, 'Anime', '07', 'studio1', 70, 'author7', 'votre_valeur_par_defaut', 70, 1),
(8, 'Anime', '08', 'studio1', 40, 'author8', 'votre_valeur_par_defaut', 40, 1),
(9, 'Anime', '09', 'studio1', 65, 'author9', 'votre_valeur_par_defaut', 65, 1),
(10, 'Anime', '10', 'studio1', 10, 'author10', 'votre_valeur_par_defaut', 10, 1),
(11, 'Film/serie', '11', 'studio1', 10, 'author11', 'votre_valeur_par_defaut', 10, 2),
(12, 'Film/serie', '12', 'studio1', 10, 'author11', 'votre_valeur_par_defaut', 10, 2),
(13, 'Film/serie', '13', 'studio1', 9, 'author11', 'votre_valeur_par_defaut', 9, 2),
(14, 'Film/serie', '14', 'studio1', 15, 'author11', 'votre_valeur_par_defaut', 15, 2),
(15, 'Film/serie', '15', 'studio1', 1, 'author12', 'votre_valeur_par_defaut', 1, 2),
(16, 'Film/serie', '16', 'studio1', 8, 'author5', 'votre_valeur_par_defaut', 8, 2),
(17, 'Film/serie', '17', 'studio1', 70, 'author5', 'votre_valeur_par_defaut', 70, 2),
(18, 'Film/serie', '18', 'studio1', 40, 'author8', 'votre_valeur_par_defaut', 40, 2),
(19, 'Film/serie', '19', 'studio1', 65, 'author8', 'votre_valeur_par_defaut', 65, 2),
(20, 'Film/serie', '20', 'studio1', 10, 'author8', 'votre_valeur_par_defaut', 10, 2),
(21, 'Gaming', '21', 'studio1', 10, 'author1', 'votre_valeur_par_defaut', 10, 2),
(22, 'Gaming', '22', 'studio1', 10, 'author1', 'votre_valeur_par_defaut', 10, 2),
(23, 'Gaming', '23', 'studio1', 9, 'author2', 'votre_valeur_par_defaut', 9, 2),
(24, 'Gaming', '24', 'studio1', 15, 'author2', 'votre_valeur_par_defaut', 15, 2),
(25, 'Gaming', '25', 'studio1', 1, 'author12', 'votre_valeur_par_defaut', 1, 2),
(26, 'Gaming', '26', 'studio1', 8, 'author5', 'votre_valeur_par_defaut', 8, 2),
(27, 'Gaming', '27', 'studio1', 70, 'author5', 'votre_valeur_par_defaut', 70, 2),
(28, 'Gaming', '28', 'studio1', 40, 'author9', 'votre_valeur_par_defaut', 40, 2),
(29, 'Gaming', '29', 'studio1', 65, 'author9', 'votre_valeur_par_defaut', 65, 2),
(30, 'Gaming', '30', 'studio1', 10, 'author9', 'votre_valeur_par_defaut', 10, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `stickers`
--
ALTER TABLE `stickers`
  ADD PRIMARY KEY (`Id_Stickers`),
  ADD KEY `Id_supplier` (`Id_supplier`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `stickers`
--
ALTER TABLE `stickers`
  MODIFY `Id_Stickers` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `stickers`
--
ALTER TABLE `stickers`
  ADD CONSTRAINT `stickers_ibfk_1` FOREIGN KEY (`Id_supplier`) REFERENCES `supplier` (`Id_supplier`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
