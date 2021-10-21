import { Space } from "../model/Model";

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: "Paris",
      name: "Best Place",
      spaceId: "101",
    });
    result.push({
      location: "France",
      name: "Best Place",
      spaceId: "102",
    });
    result.push({
      location: "London",
      name: "Best Place",
      spaceId: "103",
    });

    return result;
  }
  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === "123") {
      return "5555";
    } else {
      return undefined;
    }
  }
}
