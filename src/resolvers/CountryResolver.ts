import { Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";

@Resolver(Country)
export class CountryResolver {
  @Query((type) => [Country])
  async getCountries(): Promise<Country[]> {
    console.log("getCountries");
    const countries: Country[] = await Country.find({});
    console.log(countries);
    return countries;
  }

  @Mutation((type) => Country)
  addCountry(): Country {
    console.log("addCountry");
    const country: Country = Country.create({
      code: "FR",
      name: "France",
      emoji: "🇫🇷",
    });
    console.log(country);
    return country;
  }
}
