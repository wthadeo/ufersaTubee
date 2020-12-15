-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.22 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para ufersatube
CREATE DATABASE IF NOT EXISTS `ufersatube` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ufersatube`;

-- Copiando estrutura para tabela ufersatube.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela ufersatube.categories: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `title`, `slug`) VALUES
	(1, 'Sistemas multimidia', 'sistemas-multimidia'),
	(2, 'Teoria da Computação', 'teoria-computacao'),
	(3, 'Computação gráfica', 'computacao-grafica'),
	(4, 'Compiladores', 'compiladores');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Copiando estrutura para tabela ufersatube.comments
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `name` varchar(80) DEFAULT '0',
  `video` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela ufersatube.comments: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` (`id`, `content`, `name`, `video`) VALUES
	(16, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius ex odio, et ullamcorper libero convallis tincidunt. Vestibulum et felis ex. Donec bibendum iaculis consectetur. Etiam at odio leo. Curabitur dictum nibh vitae orci imperdiet congue. Aenean tincidunt massa non viverra aliquam.', 'Ednaldo Pereira', 1),
	(17, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius ex odio, et ullamcorper libero convallis tincidunt. Vestibulum et felis ex. Donec bibendum iaculis consectetur. Etiam at odio leo. Curabitur dictum nibh vitae orci imperdiet congue. Aenean tincidunt massa non viverra aliquam.', 'Ednaldo Pereira', 2),
	(18, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius ex odio, et ullamcorper libero convallis tincidunt. Vestibulum et felis ex. Donec bibendum iaculis consectetur. Etiam at odio leo. Curabitur dictum nibh vitae orci imperdiet congue. Aenean tincidunt massa non viverra aliquam.', 'Ednaldo Pereira', 5),
	(19, 'Ut finibus neque eu risus convallis pellentesque. Aenean nibh velit, tempus at ipsum quis, aliquam suscipit tortor. Quisque placerat augue eu neque porta, in laoreet purus volutpat. Donec rhoncus turpis ut lobortis varius. Duis eget dolor erat. Nunc et lectus ac massa vestibulum elementum. Proin augue tellus, viverra at porta at, feugiat ut risus. Morbi est est, luctus eget leo quis, consequat blandit felis. Mauris porta est vitae ipsum tempor, ut rhoncus est sollicitudin. Sed sed mattis purus. Maecenas porttitor posuere ante. Aenean metus mi, placerat et metus in, consectetur auctor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada rhoncus augue, quis ullamcorper nulla volutpat sed.', 'Washington Gomes', 3),
	(20, 'Ut finibus neque eu risus convallis pellentesque. Aenean nibh velit, tempus at ipsum quis, aliquam suscipit tortor. Quisque placerat augue eu neque porta, in laoreet purus volutpat. Donec rhoncus turpis ut lobortis varius. Duis eget dolor erat. Nunc et lectus ac massa vestibulum elementum. Proin augue tellus, viverra at porta at, feugiat ut risus. Morbi est est, luctus eget leo quis, consequat blandit felis. Mauris porta est vitae ipsum tempor, ut rhoncus est sollicitudin. Sed sed mattis purus. Maecenas porttitor posuere ante. Aenean metus mi, placerat et metus in, consectetur auctor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada rhoncus augue, quis ullamcorper nulla volutpat sed.', 'Washington Gomes', 4),
	(21, 'Ut finibus neque eu risus convallis pellentesque. Aenean nibh velit, tempus at ipsum quis, aliquam suscipit tortor. Quisque placerat augue eu neque porta, in laoreet purus volutpat. Donec rhoncus turpis ut lobortis varius. Duis eget dolor erat. Nunc et lectus ac massa vestibulum elementum. Proin augue tellus, viverra at porta at, feugiat ut risus. Morbi est est, luctus eget leo quis, consequat blandit felis. Mauris porta est vitae ipsum tempor, ut rhoncus est sollicitudin. Sed sed mattis purus. Maecenas porttitor posuere ante. Aenean metus mi, placerat et metus in, consectetur auctor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada rhoncus augue, quis ullamcorper nulla volutpat sed.', 'Washington Gomes', 2),
	(22, 'Quisque non feugiat lacus. Vestibulum sodales molestie purus a mattis. Sed molestie sit amet enim eu consequat. Aenean tincidunt non ante vel venenatis. Maecenas at nibh blandit, lobortis mauris eget, viverra nisi. Donec eu augue porta, aliquet sapien vel, vulputate risus. Mauris aliquet convallis mauris, ac lobortis metus sollicitudin egestas.', 'Daniel Igor', 1),
	(23, 'Quisque non feugiat lacus. Vestibulum sodales molestie purus a mattis. Sed molestie sit amet enim eu consequat. Aenean tincidunt non ante vel venenatis. Maecenas at nibh blandit, lobortis mauris eget, viverra nisi. Donec eu augue porta, aliquet sapien vel, vulputate risus. Mauris aliquet convallis mauris, ac lobortis metus sollicitudin egestas.', 'Daniel Igor', 4),
	(24, 'Quisque non feugiat lacus. Vestibulum sodales molestie purus a mattis. Sed molestie sit amet enim eu consequat. Aenean tincidunt non ante vel venenatis. Maecenas at nibh blandit, lobortis mauris eget, viverra nisi. Donec eu augue porta, aliquet sapien vel, vulputate risus. Mauris aliquet convallis mauris, ac lobortis metus sollicitudin egestas.', 'Daniel Igor', 5),
	(25, 'Quisque non feugiat lacus. Vestibulum sodales molestie purus a mattis. Sed molestie sit amet enim eu consequat. Aenean tincidunt non ante vel venenatis. Maecenas at nibh blandit, lobortis mauris eget, viverra nisi. Donec eu augue porta, aliquet sapien vel, vulputate risus. Mauris aliquet convallis mauris, ac lobortis metus sollicitudin egestas.', 'Daniel Igor', 3);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

-- Copiando estrutura para tabela ufersatube.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela ufersatube.users: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
	(1, 'Admin', 'admin@admin.com', '$2b$10$u3VQLC20st9TCG14aSHXke.idFg2UOonjs5trzOgwSGDS9VxNyYZu'),
	(16, 'Daniel Igor', 'daniel@gmail.com', '$2b$10$5cXRMgsO0pIr5QpFuG1Pvu4T/H0lWQLmaE6viGf.v9RmD95qyk6Sm'),
	(17, 'Washington Gomes', 'wasrepet@gmail.com', '$2b$10$qAf3IXqsF81z24LDhYZq1.tbbS2aouMNDaXPQtxO4xUzkezH0nX2e'),
	(18, 'Ednaldo Pereira', 'ednaldopereira@chance.com', '$2b$10$xmr/0BqYlU7dWiYCcQAna.Hgi6v4rGRyRaD1B9H6l04OAGenthTpC');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Copiando estrutura para tabela ufersatube.videos
CREATE TABLE IF NOT EXISTS `videos` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `title` varchar(255) DEFAULT NULL,
  `res360` varchar(255) DEFAULT NULL,
  `res480` varchar(255) DEFAULT NULL,
  `res720` varchar(255) DEFAULT NULL,
  `res1080` varchar(255) DEFAULT NULL,
  `category` int DEFAULT NULL,
  `description` varchar(250) NOT NULL,
  `views` int NOT NULL,
  `thumb` varchar(255) CHARACTER SET utf8 COLLATE utf8_croatian_ci DEFAULT NULL,
  `time` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela ufersatube.videos: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` (`id`, `title`, `res360`, `res480`, `res720`, `res1080`, `category`, `description`, `views`, `thumb`, `time`) VALUES
	(1, 'Raindrops', 'Raindrops_360.mp4', 'Raindrops_480.mp4', 'Raindrops_720.mp4', 'Raindrops_1080.mp4', 3, 'Beatiful video of raindrops up close.', 22, 'raindrops-thumb.png', 58),
	(2, 'The Milky Way', 'Galaxy_With_Customization_360.mp4', 'Galaxy_With_Customization_480.mp4', 'Galaxy_With_Customization_720.mp4', 'Galaxy_With_Customization_1080.mp4', 1, 'This is an animation of the Milky Way done in After Effects.', 7, 'milkyway-thumb.png', 53),
	(3, 'Christimas Tree Bokeh', 'Christmas_Tree_Bokeh_360.mp4', 'Christmas_Tree_Bokeh_480.mp4', 'Christmas_Tree_Bokeh_720.mp4', 'Christmas_Tree_Bokeh_1080.mp4', 3, 'A nice holiday background that features a pine Christmas tree with a shallow depth of field. Courtesy of www.beachfrontbroll.com.', 6, 'christimas-thumb.png', 79),
	(4, 'Coloured Smoke', 'Smoke_Dark_11_Videvo_360.mp4', 'Smoke_Dark_11_Videvo_480.mp4', 'Smoke_Dark_11_Videvo_720.mp4', 'Smoke_Dark_11_Videvo_1080.mp4', 2, 'Pink and blue smoke against a black background. Shot on a Sony FS7 at 120 fps.', 10, 'smoke-thumb.png', 25),
	(5, 'Sunset At Venice Beach LA', 'Venice Beach Drone_360.mp4', 'Venice Beach Drone_480.mp4', 'Venice Beach Drone_720.mp4', 'Venice Beach Drone_1080.mp4', 4, 'Sun setting on the ocean at Venice Beach, LA.', 8, 'sunset-thumb.png', 30);
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
