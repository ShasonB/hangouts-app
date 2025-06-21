import { Experience, User } from "@hangsouts-app/server/database/schema";

type ExperienceWithUser = Experience & {
  user: User;
};

type ExperienceWitCommentsCount = Experience & {
  commentsCount: number;
};

export type ExperienceForList = ExperienceWithUser & ExperienceWitCommentsCount;
