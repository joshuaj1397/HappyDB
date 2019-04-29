USE Happy

BULK INSERT dbo.Region
    FROM '**\Data\Region.csv'
    WITH
    (
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'   --Use to shift the control to next row
	)
	
BULK INSERT dbo.Country
    FROM '**\Data\Country.csv'
    WITH
    (
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'   --Use to shift the control to next row
	)

BULK INSERT dbo.HappyData
    FROM '**\Data\2015.csv'
    WITH
    (
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'   --Use to shift the control to next row
	)

BULK INSERT dbo.HappyData
    FROM '**\Data\2016.csv'
    WITH
    (
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'   --Use to shift the control to next row
	)

BULK INSERT dbo.HappyData
    FROM '**\Data\2017.csv'
    WITH
    (
	CHECK_CONSTRAINTS,
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'   --Use to shift the control to next row
	)

