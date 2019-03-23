export class Country {
  private ID: number;
  private RegionID: number;
  private Name: string;
  private HappinessRank: number;
  private GDP: number;
  private Freedom: number;
  private GovTrust: number;
  private DystopiaResidual: number;

  constructor(
    ID: number,
    RegionID: number,
    Name: string,
    HappinessRank: number,
    GDP: number,
    Freedom: number,
    GovTrust: number,
    DystopiaResidual: number
  ) {
    this.ID = ID;
    this.RegionID = RegionID;
    this.Name = Name;
    this.HappinessRank = HappinessRank;
    this.GDP = GDP;
    this.Freedom = Freedom;
    this.GovTrust = GovTrust;
    this.DystopiaResidual = DystopiaResidual;
  }
}
