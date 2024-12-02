import { InputType, Field, Mutation, Resolver, Arg } from "type-graphql";
import { Country } from "../entities/Country";
import { dataSource } from "../datasource";
import { EntityManager } from "typeorm";

@InputType()
export class CountryInput {
  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  emoji!: string;

  @Field()
  continent!: string;
}

@Resolver(Country)
export class CountryMutations {
  @Mutation((_) => Country)
  async addCountry(
    @Arg("countryData") countryData: CountryInput
  ): Promise<Country> {
    return dataSource.transaction(async (entityManager: EntityManager) => {
      console.log("addCountry");
      try {
        const country: Country = new Country(
          countryData.code,
          countryData.name,
          countryData.emoji,
          countryData.continent
        );

        await entityManager.save(country);
        console.log("country added: ", country);
        return country;
      } catch (e) {
        console.error("country creation has failed", e);
        throw new Error("cannot create country -" + e);
      }
    });
  }
}
