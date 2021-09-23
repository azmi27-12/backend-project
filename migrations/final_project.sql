-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Set 23, 2021 alle 12:15
-- Versione del server: 10.4.20-MariaDB
-- Versione PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_project`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `moderator` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `moderator`, `createdAt`, `updatedAt`) VALUES
(1, 'azmi', 'azmi@gmail.com', '$2a$10$FqVQtx0QpDqYJvr0lhbhvu5AZGuRFrAAeerayz.vVzWPNC4KPQBK6', 1, '2021-09-23 09:25:33', '2021-09-23 09:25:33'),
(2, 'marco', 'marco@gmail.com', '$2a$10$he.5GbPiqZj/Gss47o3vr.zWtRWUCW7OFzXdUPcio439.9n8v6ep.', 0, '2021-09-23 09:27:52', '2021-09-23 09:27:52'),
(3, 'davide', 'davide@gmail.com', '$2a$10$yObfKbbDNMH/ik64/g/pHuIzc7Rug.osC8rlA3w.qvHnAewALSFCq', 0, '2021-09-23 09:28:10', '2021-09-23 09:32:33');

-- --------------------------------------------------------

--
-- Struttura della tabella `workouts`
--

CREATE TABLE `workouts` (
  `id` int(11) NOT NULL,
  `day` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `group` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `exercise` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `sets` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `reps` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `rest` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `kg` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `note` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dump dei dati per la tabella `workouts`
--

INSERT INTO `workouts` (`id`, `day`, `group`, `exercise`, `sets`, `reps`, `rest`, `kg`, `note`, `user`, `createdAt`, `updatedAt`) VALUES
(1, 'wednesday', 'chest', 'bench press', '3', '8', '02:00', '35', 'aggiunti 5kg', 'davide', '2021-09-23 09:38:10', '2021-09-23 09:40:55'),
(3, 'monday', 'back', 'pull-up', '3', '8', '01:00', '', '', 'marco', '2021-09-23 09:46:03', '2021-09-23 09:57:12'),
(4, 'tuesday', 'biceps', 'curl', '3', '8', '01:30', '12', '', 'marco', '2021-09-23 09:49:06', '2021-09-23 09:49:06'),
(5, 'wednesday', 'triceps', 'french-press', '3', '8', '01:30', '7,5', '', 'marco', '2021-09-23 09:49:39', '2021-09-23 09:49:39'),
(6, 'thursday', 'leg', 'squat', '3', '8', '01:30', '30', '', 'marco', '2021-09-23 09:50:17', '2021-09-23 09:50:17'),
(7, 'friday', 'shoulders', 'military press', '3', '8', '01:30', '15', '', 'marco', '2021-09-23 09:51:44', '2021-09-23 09:51:44'),
(8, 'saturday', 'chest', 'bench press', '5', '5', '01:30', '35', '', 'marco', '2021-09-23 10:00:06', '2021-09-23 10:03:22'),
(9, 'monday', 'back', 'verticla row', '3', '8', '01:30', '50', '', 'davide', '2021-09-23 10:08:43', '2021-09-23 10:08:43'),
(10, 'tuesday', 'shoulders', 'military press', '3', '8', '01:30', '20', '', 'davide', '2021-09-23 10:09:15', '2021-09-23 10:09:15'),
(11, 'thursday', 'triceps', 'push down', '3', '8', '01:30', '20', '', 'davide', '2021-09-23 10:12:36', '2021-09-23 10:12:36'),
(12, 'friday', 'leg', 'leg extension', '3', '8', '02:00', '35', '', 'davide', '2021-09-23 10:13:15', '2021-09-23 10:13:15'),
(13, 'saturday', 'biceps', 'scott', '3', '8', '01:30', '10', '', 'davide', '2021-09-23 10:14:14', '2021-09-23 10:14:14');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `workouts`
--
ALTER TABLE `workouts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `workouts`
--
ALTER TABLE `workouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
