CREATE DATABASE  IF NOT EXISTS `viverbem+` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `viverbem+`;
-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: viverbem+
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dados_profissionais`
--

DROP TABLE IF EXISTS `dados_profissionais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dados_profissionais` (
  `id_dado` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `experiencia` varchar(45) NOT NULL,
  `formacao` varchar(45) NOT NULL,
  `fale_sobre` varchar(1000) NOT NULL,
  `valor_diaria` varchar(150) NOT NULL,
  `caminho_imagem` varchar(250) NOT NULL,
  PRIMARY KEY (`id_dado`),
  KEY `fk_usuario` (`id_usuario`),
  CONSTRAINT `fk_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dados_profissionais`
--

LOCK TABLES `dados_profissionais` WRITE;
/*!40000 ALTER TABLE `dados_profissionais` DISABLE KEYS */;
INSERT INTO `dados_profissionais` VALUES (1,18,'5 anos de experiência','Graduado em Ciência da Computação','Apaixonado por tecnologia','300',''),(2,18,'5 anos de experiência','Graduado em Ciência da Computação','Apaixonado por tecnologia','300',''),(3,25,'5 anos de experiência','Graduado em Ciência da Computação','Apaixonado por tecnologia','300',''),(4,25,'5 anos de experiência','Graduado em Ciência da Computação','Apaixonado por tecnologia','300',''),(5,25,'5 anos de experiência','Graduado em Ciência da Computação','Apaixonado por tecnologia','300',''),(6,32,'5 anos de experiência','Graduado em Ciência da Computação','Apaixo','300',''),(7,25,'5 anos de experiência','Graduado em Ciência da Computação','Apaixonado por tecnologia','300',''),(8,33,'fdgg','ggdg','dsighidhgiogdhiopgjoghop','0',''),(9,34,'fdgg','ggdg','fhfdjjtj','0',''),(10,35,'fdgg','ggdg','gddf','0',''),(11,36,'fdgg','ggdg','FCIHUIG','0',''),(12,37,'fdgg','ggdg','HBGFHFGH','0',''),(13,38,'fdgg','ggdg','fewt','0',''),(14,39,'fdgg','ggdg','ascwad','0',''),(15,40,'fdgg','ggdg','sfkfsfkl','0',''),(16,41,'fdgg','ggdg','ksajflsajfosjfo','0',''),(17,42,'fdgg','ggdg','fdfgdhfdhh','0',''),(18,43,'fdgg','ggdg','bchfdyyf','0',''),(19,45,'fdgg','ggdg','stesyr','0',''),(20,46,'fdgg','ggdg','isaac ','0',''),(21,47,'fdgg','ggdg','isaac','0',''),(22,48,'fdgg','ggdg','isaaccc','0',''),(23,49,'fdgg','ggdg','slhfjelçkçal','0',''),(24,50,'fdgg','ggdg','rfrr','0',''),(25,51,'fdgg','ggdg','fghfdtrf','0',''),(26,52,'fdgg','ggdg','gfgjft','0',''),(27,53,'fdgg','ggdg','erryrr','0',''),(28,54,'5 anos','completoooooooooooooooooooooooooooooooooooooo','hsauhfsiuusiausfusaudshuidh','R$ 555,55',''),(29,55,'5','ghfg','fy','R$ 0,02',''),(30,56,'5','e','e','R$ 0,05',''),(31,57,'5','5','5','R$ 0,05',''),(32,58,'nomee','555','555','R$ 555,55',''),(33,25,'5 anos experiencia','graduacao cienciada computacao','Apaixonado por tecnologia','300','1733768409721.jpg'),(34,63,'5anos','superior completo','sou eu','200','1733774593652.jpg'),(35,64,'5','superior completo','isaacc','200','1733935401367.jpg'),(36,64,'5anos','superior completo','isaacc','200','1733935405247.jpg'),(37,64,'5anos','superior completo','isaacc','200','1733935427975.jpg'),(38,64,'5anos','superior completo','isaacc','200','1733935610031.jpg'),(39,64,'5anos','superior completo','isaacc','200','1733936035525.jpg'),(40,64,'5anos','superior completo','isaacc','200','1733936044959.jpg'),(41,64,'5anos','superior completo','isaacc','200','1733936602538.jpg'),(47,65,'10 anos','superior incompleto','Sou Isaac','350','1733936688663.jpg'),(48,66,'5anos','superior completo','hhhhhhh','200','1733937870541.jpeg'),(49,66,'5anos','superior completo','hhhhhhh','200','1733937877011.jpeg'),(51,67,'35 anos','Superior média','Sou Isaaaaaaaaaaac','899','1733938579197.jpg'),(52,68,'40 anos','Superior com pós','yg','299','1733938873357.jpeg'),(53,73,'10 anos','aasdas','asdasd','R$ 300,00','1733949212458.jpg'),(54,74,'muitos anos','asdasdasd','asdasd','R$ 3.000,00','1733950174799.jpg');
/*!40000 ALTER TABLE `dados_profissionais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagens`
--

DROP TABLE IF EXISTS `imagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagens` (
  `id_imagem` int(11) NOT NULL AUTO_INCREMENT,
  `nome_imagem` varchar(120) DEFAULT NULL,
  `caminho` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id_imagem`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens`
--

LOCK TABLES `imagens` WRITE;
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
INSERT INTO `imagens` VALUES (1,NULL,'1733766216276.jpg'),(2,NULL,'1733947941989.jpg');
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento`
--

DROP TABLE IF EXISTS `pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagamento` (
  `id_pagamento` int(11) NOT NULL AUTO_INCREMENT,
  `plano` varchar(45) NOT NULL,
  `numero_cartao` int(19) NOT NULL,
  `nome_titular` varchar(30) NOT NULL,
  `data_validade` date NOT NULL,
  `cvv` int(3) NOT NULL,
  PRIMARY KEY (`id_pagamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento`
--

LOCK TABLES `pagamento` WRITE;
/*!40000 ALTER TABLE `pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome_completo` varchar(150) NOT NULL,
  `telefone` varchar(14) NOT NULL,
  `email` varchar(45) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `data_nascimento` date NOT NULL,
  `senha` varchar(200) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (18,'ramon','(27) 99283-377','isaac.barbara@aluno.senai.br','997.467.626-64','2002-01-19','@Isaac19','guarapari'),(25,'ramon','(27) 99283-377','isaac.barbara@aluno.senai.br','849.237.475-60','2000-01-19','@Isaac19','guarapari'),(32,'isaac','(27) 99283-377','isaac.barbara@aluno.senai.br','741.016.339-91','2000-01-10','@Isaac19','guarapari'),(33,'isaac','(27) 99283-377','isaac.barbara@aluno.senai.br','332.653.147-82','2002-01-19','@Isaac19','guarapari'),(34,'isaac','(27) 99283-377','isaac.barbara@aluno.senai.br','397.416.108-23','2000-01-19','@Isaac19','guarapari'),(35,'isaac','(27) 99283-377','isaac.barbara@aluno.senai.br','308.914.584-76','2002-01-19','@Isaac19','guarapari'),(36,'isaac','(27) 99283-377','isaac.barbara@aluno.senai.br','176.354.924-03','2000-12-20','@iSAAC19','guarapari'),(37,'isaac','(27) 99283-377','isaac.barbara@aluno.senai.br','217.382.521-67','2002-01-19','@Isaac19','guarapari'),(38,'isaac','(27) 99283-377','isaac.barbara@aluno.senai.br','521.631.391-58','2000-01-19','@Isaac19','guarapari'),(39,'isaac','(27) 99283-377','isaac.barbara@aluno.senai.br','427.954.215-50','2000-01-19','@Isaac19','guarapari'),(40,'Mauricio','(27) 99999-999','mauricio@gmail.com','314.730.073-05','2002-01-19','@Isaac19','guarapari'),(41,'Mauricio','(27) 99999-999','mauricio@gmail.com','171.342.262-04','2000-01-19','@Isaac19','guarapari'),(42,'Mauricio','(27) 99999-999','mauricio@gmail.com','489.241.122-10','2000-01-19','@Isaac19','guarapari'),(43,'Mauricio','(27) 99999-999','mauricio@gmail.com','801.575.169-11','2002-01-19','@Isaac19','guarapari'),(44,'Mauricio','(27) 99999-999','mauricio@gmail.com','702.450.326-22','2000-01-19','@Isaac19','guarapari'),(45,'Mauricio','(27) 99999-999','mauricio@gmail.com','372.183.747-94','2000-01-19','@Isaac19','guarapari'),(46,'Mauricio','(27) 99999-999','mauricio@gmail.com','404.263.128-21','2000-02-19','@Isaac19','guarapari'),(47,'Mauricio','(27) 99999-999','mauricio@gmail.com','201.238.684-91','2000-01-19','@iSAAC19','guarapari'),(48,'renisson','(27) 99999-999','mauricio@gmail.com','438.230.616-74','2000-01-19','@Isaac19','guarapari'),(49,'renisson','(27) 99999-999','mauricio@gmail.com','470.292.798-16','2000-01-19','@Isaac19','guarapari'),(50,'renisson','(27) 99999-999','mauricio@gmail.com','783.334.802-33','2000-01-19','@Isaac19','guarapari'),(51,'renisson','(27) 99999-999','mauricio@gmail.com','386.018.046-08','2000-01-19','@Isaac19','guarapari'),(52,'renisson','(27) 99999-999','mauricio@gmail.com','978.747.943-62','2000-01-19','@Isaac19','guarapari'),(53,'renisson','(27) 99999-999','mauricio@gmail.com','850.378.705-93','2000-01-19','@Isaac19','guarapari'),(54,'renisson','(27) 99999-999','mauricio@gmail.com','740.284.462-52','2000-01-19','@Isaac19','guarapari'),(55,'renisson','(27) 99999-999','mauricio@gmail.com','436.468.810-03','2002-01-19','@Isaac19','guarapari'),(56,'samara','(27) 99999-999','mauricio@gmail.com','108.928.608-20','2004-09-20','@Isaac19','guarapari'),(57,'samara','(27) 99999-999','mauricio@gmail.com','134.886.564-46','2000-01-19','@Isaac19','guarapari'),(58,'samara','(27) 99999-999','mauricio@gmail.com','263.543.679-73','2000-11-20','@Isaac19','guarapari'),(59,'isaac','(27) 99283-377','isaac.barbara@aluno.senai.br','436.364.030-87','2000-12-20','@Isaac19','guarapari'),(60,'joao carlos','(27) 95666-564','joaolucal@gmail.com','555.827.480-83','1991-02-09','123Abcde@','guarapari'),(61,'joao paulo','(24) 54256-457','joaopaulo@gmail.com','775.924.150-03','1989-01-09','@Jp4286801','guarapari'),(62,'joao rangel','(65) 74676-485','joaorangel@gmail.com','850.851.160-46','1990-01-09','@Jp428680','guarapari'),(63,'teste','(27) 54556-666','teste@teste.com','815.978.310-85','1990-01-01','123*Abc123','serra'),(64,'teste','(27) 54556-666','isaac@gmail.com','967.583.660-14','2000-01-19','@Isaac19','serra'),(65,'teste','(27) 54556-666','isaac@gmail.com','479.473.810-20','2000-01-19','@Isaac19','serra'),(66,'teste','(27) 54556-666','isaac@gmail.com','132.362.570-40','2000-01-10','@Isaac19','serra'),(67,'asdasdasdasd','(22) 22222-222','89562445454@gmail.com','148.407.390-80','2000-01-01','123*Abc123','serra'),(68,'asdasdasdasd','(22) 22222-222','isaac.barbara@aluno.senai.br','158.292.280-25','2000-01-19','@Isaac19','serra'),(69,'Ramon Teste','(12) 44444-444','teste@teste.com','021.293.880-00','1990-01-01','123*Abc123','guarapari'),(70,'Gleidson Test','(27) 88888-888','glei@gmail.com','806.119.860-60','1990-11-11','123*Abc123','guarapari'),(71,'sdsdfsdfsf','(24) 25556-656','teste@gmail.com','366.363.800-63','1990-11-11','123*Abc123','guarapari'),(72,'dsfsdfsdf','(45) 45454-545','teste@gmail.com','056.266.770-97','1990-12-11','123*Abc123','guarapari'),(73,'asdasd asdasd','(78) 78787-878','ramon@teste.com.br','027.870.980-02','1990-12-12','123*Abc123','vitoria'),(74,'Isaaac teste','(27) 87885-596','teste@gmail.com','676.076.470-66','1990-10-10','123*Abc123','guarapari');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-11 17:53:11
