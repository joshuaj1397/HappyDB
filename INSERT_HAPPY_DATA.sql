USE Happy

BULK INSERT dbo.Region
FROM 'C:/Users/xzoti/projects/HappyDB/Data/Region.csv'
WITH
(
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
  ROWTERMINATOR = '\n'   --Use to shift the control to next row
);

BULK INSERT dbo.Country
FROM 'C:/Users/xzoti/projects/HappyDB/Data/Country.csv'
WITH
(
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
  ROWTERMINATOR = '\n'   --Use to shift the control to next row
);

BULK INSERT dbo.HappyData
FROM 'C:/Users/xzoti/projects/HappyDB/Data/2015.csv'
WITH
(
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
  ROWTERMINATOR = '\n'   --Use to shift the control to next row
);

BULK INSERT dbo.HappyData
FROM 'C:/Users/xzoti/projects/HappyDB/Data/2016.csv'
WITH
(
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
  ROWTERMINATOR = '\n'   --Use to shift the control to next row
);

BULK INSERT dbo.HappyData
FROM 'C:/Users/xzoti/projects/HappyDB/Data/2017.csv'
WITH
(
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
  ROWTERMINATOR = '\n'   --Use to shift the control to next row
);
