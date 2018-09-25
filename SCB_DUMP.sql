-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: SCB
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

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
-- Table structure for table `AMIGOS_US`
--

DROP TABLE IF EXISTS `AMIGOS_US`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AMIGOS_US` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_1` int(11) NOT NULL,
  `ID_2` int(11) NOT NULL,
  `STATUS` int(11) NOT NULL DEFAULT '0',
  `DT_ADD` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AMIGOS_US`
--

LOCK TABLES `AMIGOS_US` WRITE;
/*!40000 ALTER TABLE `AMIGOS_US` DISABLE KEYS */;
INSERT INTO `AMIGOS_US` VALUES (1,1,2,0,'2018-09-02 03:01:16'),(2,1,3,0,'2018-09-02 04:44:36');
/*!40000 ALTER TABLE `AMIGOS_US` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FOTOS_US`
--

DROP TABLE IF EXISTS `FOTOS_US`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FOTOS_US` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_US` int(11) NOT NULL,
  `CAMINHO_FOTO` varchar(255) NOT NULL,
  `ALBUM` varchar(255) DEFAULT NULL,
  `IS_PERFIL` int(11) NOT NULL DEFAULT '0',
  `IS_CAPA` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FOTOS_US`
--

LOCK TABLES `FOTOS_US` WRITE;
/*!40000 ALTER TABLE `FOTOS_US` DISABLE KEYS */;
INSERT INTO `FOTOS_US` VALUES (1,1,'teste.jpg',NULL,1,0),(2,2,'teste.jpg',NULL,1,0),(3,3,'teste.jpg',NULL,1,0);
/*!40000 ALTER TABLE `FOTOS_US` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MESSAGES_US`
--

DROP TABLE IF EXISTS `MESSAGES_US`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MESSAGES_US` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_TR` int(11) NOT NULL,
  `ID_RC` int(11) NOT NULL,
  `TEXTO` varchar(255) NOT NULL,
  `STATUS` int(11) NOT NULL DEFAULT '1',
  `DT_MSG` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MESSAGES_US`
--

LOCK TABLES `MESSAGES_US` WRITE;
/*!40000 ALTER TABLE `MESSAGES_US` DISABLE KEYS */;
INSERT INTO `MESSAGES_US` VALUES (39,1,2,'cxcxcxc',1,'2018-09-13 15:07:40'),(40,1,2,'xcxcx',1,'2018-09-13 15:07:41'),(41,1,2,'cxcx',1,'2018-09-13 15:07:42'),(42,1,2,'',1,'2018-09-13 15:07:42'),(43,1,2,'xcxcx',1,'2018-09-13 15:07:43'),(44,1,2,'cxc',1,'2018-09-13 15:07:43'),(45,1,2,'cxc',1,'2018-09-13 15:07:44'),(46,1,2,'xcx',1,'2018-09-13 15:07:44'),(47,1,2,'cxcx',1,'2018-09-13 15:07:45'),(48,1,2,'cxc',1,'2018-09-13 15:07:45'),(49,1,2,'xcxc',1,'2018-09-13 15:07:46'),(50,2,1,'fala ae cara blz',1,'2018-09-13 15:09:49'),(51,1,2,'fala mano',1,'2018-09-13 15:15:31'),(52,1,2,'blz cara',1,'2018-09-13 15:15:39'),(53,1,2,'suave na nave?',1,'2018-09-13 15:16:14'),(54,1,2,'fala fdp do crl',1,'2018-09-13 15:17:23'),(55,1,2,'dsdsdsdsd',1,'2018-09-13 15:19:28'),(56,1,2,'fala viado',1,'2018-09-13 15:59:24'),(57,1,2,'dsdsdsds',1,'2018-09-15 06:38:56'),(58,1,2,'sdsdsdsd',1,'2018-09-15 06:41:53'),(59,1,3,'fala mlk doido',1,'2018-09-15 06:42:11'),(60,1,2,'Fala mlk doido',1,'2018-09-15 06:46:56'),(61,1,2,'fala filhadaputa',1,'2018-09-15 06:54:00'),(62,1,2,'eae cuzao',1,'2018-09-15 06:55:02'),(63,1,2,'eae cara',1,'2018-09-15 06:58:58'),(64,1,2,'testando',1,'2018-09-15 07:02:22'),(65,1,2,'teste',1,'2018-09-15 07:03:19'),(66,1,2,'testando essa porra',1,'2018-09-15 07:04:15'),(67,1,2,'testando esse cario',1,'2018-09-15 07:06:31'),(68,1,2,'fala melhor de todos',1,'2018-09-15 07:07:14'),(69,1,2,'eae meu brother',1,'2018-09-15 07:08:47'),(70,1,2,'Fala cuzao, suave?',1,'2018-09-15 10:07:33'),(71,1,2,'s',1,'2018-09-15 11:25:35'),(72,1,2,'fala cabrito',1,'2018-09-15 11:33:45'),(73,1,2,'dsdsds',1,'2018-09-15 11:34:47'),(74,1,2,'teste',1,'2018-09-15 11:35:31'),(75,1,2,'Eae minha puta ',1,'2018-09-15 12:55:37');
/*!40000 ALTER TABLE `MESSAGES_US` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USUARIOS`
--

DROP TABLE IF EXISTS `USUARIOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USUARIOS` (
  `ID_US` int(11) NOT NULL AUTO_INCREMENT,
  `NOME_US` varchar(120) NOT NULL,
  `SEXO_US` char(1) NOT NULL,
  `END_US` varchar(30) NOT NULL,
  `EMAIL_US` varchar(255) NOT NULL,
  `SENHA_US` varchar(255) NOT NULL,
  `STATUS_US` int(1) NOT NULL,
  `DESCRICAO_US` varchar(255) DEFAULT NULL,
  `DT_SCRI_US` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_US`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USUARIOS`
--

LOCK TABLES `USUARIOS` WRITE;
/*!40000 ALTER TABLE `USUARIOS` DISABLE KEYS */;
INSERT INTO `USUARIOS` VALUES (1,'Marcos','M','Brasília','marcoshtj99@gmail.com','$2b$10$BQgOxUf5o15fxDn/2Fj8u.E.qO.xFe2wjrLnj6bOTchz/OW.vQJnO',1,NULL,'2018-09-17 02:33:29'),(2,'humberto','M','Gama','marcosnikitogg@gmail.com','$2b$10$xgsGaHYidAxjXQzvO6Z8SuoS.VnzcZif3IIhwnLVTT81DMZ8xgBiu',1,NULL,'2018-09-17 02:33:29'),(3,'Draven','M','Brasília','dravencarrasco@gmail.com','$2b$10$StuLv5N33rw4vMLT1CL8Q.xMqrbpDeYaES4BCbSkUw78DPCN2YnjK',1,NULL,'2018-09-17 02:33:29'),(6,'Joana Dark','M','Gama','testedeemail@gmail.com','$2b$10$ZgGZNbTImRnITOJ22A5mc.OoDUrK6AFrGzi4iNHBBH5uthnzLDI7W',0,NULL,'2018-09-22 21:14:26'),(7,'luizao do gas','H','Valparaíso de Goiás','luizaodogasteste@gmail.com','$2b$10$BCeN3zTXS6OqkPd3CzZnauNeksriC8AY47VVFcYfdHhOnqOMvtl.C',0,NULL,'2018-09-22 21:21:04');
/*!40000 ALTER TABLE `USUARIOS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-25 10:27:53
