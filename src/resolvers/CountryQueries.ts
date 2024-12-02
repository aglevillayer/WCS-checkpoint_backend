import { Arg, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";

@Resolver(Country)
export class CountryQueries {
  @Query((type) => [Country])
  async getCountries(): Promise<Country[]> {
    console.log("getCountries");
    const countries: Country[] = await Country.find({});
    console.log(countries);
    return countries;
  }

  @Query((type) => Country)
  async getCountryByCode(@Arg("code") code: string): Promise<Country> {
    console.log("getCountryByCode");
    const country: Country = await Country.findOneOrFail({ where: { code } });
    console.log(country);
    return country;
  }

  @Query((type) => [Country])
  async getCountriesOfContinent(
    @Arg("continent") continent: string
  ): Promise<Country[]> {
    console.log("getCountriesOfContinent");
    const countries: Country[] = await Country.find({
      where: { continent },
    });
    console.log(countries);
    return countries;
  }
}
