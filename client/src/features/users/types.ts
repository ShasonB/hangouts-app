import { User } from "@hangouts-app/server/database/schema";

type UserWithHostedExperiences = User & {
  hostedExperiencesCount: number;
};

export type UserForDetails = UserWithHostedExperiences;
