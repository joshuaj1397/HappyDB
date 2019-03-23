CREATE PROCEDURE dbo.init
AS
CREATE TABLE Region (
	ID int NOT NULL,
	Name varchar(255),
	PRIMARY KEY (ID)
	);
CREATE TABLE Country (
	ID int NOT NULL,
	RegionID int NOT NULL,
	Name varchar(255),
	HappinessRank int,
	GDP float,
	Freedom float,
	Generosity float,
	GovTrust float,
	DystopiaResidual float,
	PRIMARY KEY (ID),
	CONSTRAINT FK_RegionMember FOREIGN KEY (RegionID)
	REFERENCES Region(ID)
	);
SELECT 1
