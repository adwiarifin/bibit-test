CREATE TABLE IF NOT EXISTS `user` (
  `ID` int(11) NOT NULL,
  `UserName` varchar(50) NOT NULL DEFAULT '',
  `Parent` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (`ID`, `UserName`, `Parent`) VALUES
	(1, 'Ali', 2),
	(2, 'Budi', 0),
	(3, 'Cecep', 1);