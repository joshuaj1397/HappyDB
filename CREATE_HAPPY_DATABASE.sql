DROP DATABASE IF EXISTS Happy;
CREATE DATABASE Happy

USE Happy

CREATE TABLE Region (
	ID int NOT NULL,
	Name varchar(255),
	PRIMARY KEY (ID)
	);

CREATE TABLE Country(
	ID int NOT NULL,
	RegionID int NOT NULL,
	Name varchar(255),
	PRIMARY KEY (ID),
	Constraint FK_Region
	FOREIGN KEY (RegionID) REFERENCES Region(ID)
	);

CREATE TABLE HappyData (
	CountryID int NOT NULL,
	DataYear int NOT NULL,
	HappyRank int NOT NULL,
	HappinessScore float,
	Family float,
	Health float,
	GDP float,
	Freedom float,
	Generosity float,
	GovTrust float,
	DystopiaResidual float,
	PRIMARY KEY (CountryID,DataYear, HappyRank),
	CONSTRAINT FK_Country
	FOREIGN KEY (CountryID) REFERENCES Country(ID)
	);