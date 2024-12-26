-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 26 déc. 2024 à 22:12
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `klyt_bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `cible`
--

CREATE TABLE `cible` (
  `id` int(11) NOT NULL,
  `cible_principale` varchar(255) DEFAULT NULL,
  `groupe_cible` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `cible`
--

INSERT INTO `cible` (`id`, `cible_principale`, `groupe_cible`) VALUES
(1, 'Défanage', 'Végétaux'),
(2, 'Adventices', 'Végétaux');

-- --------------------------------------------------------

--
-- Structure de la table `culture`
--

CREATE TABLE `culture` (
  `id` int(11) NOT NULL,
  `cultures` varchar(255) DEFAULT NULL,
  `filiere` varchar(255) DEFAULT NULL,
  `pleine_terre_ou_abri` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `culture`
--

INSERT INTO `culture` (`id`, `cultures`, `filiere`, `pleine_terre_ou_abri`) VALUES
(1, 'Pomme de terre', 'Légumes', 'Plein champ'),
(2, 'Artichaut, scarole', 'Légumes', 'Plein champ');

-- --------------------------------------------------------

--
-- Structure de la table `methodes`
--

CREATE TABLE `methodes` (
  `id` int(11) NOT NULL,
  `nom_methode` varchar(255) DEFAULT NULL,
  `nom_famille` varchar(255) DEFAULT NULL,
  `sous_famille` varchar(255) DEFAULT NULL,
  `avis` text DEFAULT NULL,
  `projet_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `methodes`
--

INSERT INTO `methodes` (`id`, `nom_methode`, `nom_famille`, `sous_famille`, `avis`, `projet_id`) VALUES
(1, 'Acide pélargonique', 'Substances naturelles', 'Origine végétale', 'Bon', 1),
(2, 'Acide pélargonique', 'Substances naturelles', 'Origine végétale', 'Bon', 2);

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `id` int(11) NOT NULL,
  `nom_du_projet` varchar(255) DEFAULT NULL,
  `site_experimental` varchar(255) DEFAULT NULL,
  `periode_experimentation` decimal(10,0) DEFAULT NULL,
  `nom_du_systeme` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id`, `nom_du_projet`, `site_experimental`, `periode_experimentation`, `nom_du_systeme`) VALUES
(1, 'DEPHY EXP NPDC', 'Pôle légumes', 2013, 'IFT50'),
(2, 'ECOLEG', 'Sica CENTREX - Torreilles', 2013, 'Ecoleg');

-- --------------------------------------------------------

--
-- Structure de la table `type_de_traitement`
--

CREATE TABLE `type_de_traitement` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `partie_traitee` varchar(255) DEFAULT NULL,
  `mode_d_action` varchar(255) DEFAULT NULL,
  `autres_caracteristiques` text DEFAULT NULL,
  `stade_d_application` varchar(255) DEFAULT NULL,
  `nombre_d_application` int(11) DEFAULT NULL,
  `dose_d_application` varchar(255) DEFAULT NULL,
  `id_culture` int(11) DEFAULT NULL,
  `cultures` varchar(255) DEFAULT NULL,
  `filiere` varchar(255) DEFAULT NULL,
  `pleine_terre_ou_abri` varchar(255) DEFAULT NULL,
  `id_cible` int(11) DEFAULT NULL,
  `cible_principale` varchar(255) DEFAULT NULL,
  `groupe_cible` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `type_de_traitement`
--

INSERT INTO `type_de_traitement` (`id`, `nom`, `partie_traitee`, `mode_d_action`, `autres_caracteristiques`, `stade_d_application`, `nombre_d_application`, `dose_d_application`, `id_culture`, `cultures`, `filiere`, `pleine_terre_ou_abri`, `id_cible`, `cible_principale`, `groupe_cible`) VALUES
(1, 'Herbicides', 'Sol', 'Herbicides', 'Beloukha', 'Trois semaines avant récolte', NULL, NULL, 1, 'Pomme de terre', 'Légumes', 'Plein champ', 1, 'Défanage', 'Végétaux'),
(2, 'Herbicides', 'Sol', 'Herbicides', 'Beloukha', 'Sur adventices au stade plantule 2 passage après plantation et après rebutage', NULL, NULL, 2, 'Artichaut, scarole', 'Légumes', 'Plein champ', 2, 'Adventices', 'Végétaux');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cible`
--
ALTER TABLE `cible`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `culture`
--
ALTER TABLE `culture`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `methodes`
--
ALTER TABLE `methodes`
  ADD KEY `projet_id` (`projet_id`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type_de_traitement`
--
ALTER TABLE `type_de_traitement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_culture` (`id_culture`),
  ADD KEY `id_cible` (`id_cible`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `methodes`
--
ALTER TABLE `methodes`
  ADD CONSTRAINT `methodes_ibfk_1` FOREIGN KEY (`projet_id`) REFERENCES `projet` (`id`);

--
-- Contraintes pour la table `type_de_traitement`
--
ALTER TABLE `type_de_traitement`
  ADD CONSTRAINT `type_de_traitement_ibfk_1` FOREIGN KEY (`id_culture`) REFERENCES `culture` (`id`),
  ADD CONSTRAINT `type_de_traitement_ibfk_2` FOREIGN KEY (`id_cible`) REFERENCES `cible` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
