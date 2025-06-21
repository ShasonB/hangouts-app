import { Experience, User } from "@hangsouts-app/server/database/schema";

type ExperienceWithUser = Experience & {
  user: User;
};

type ExperienceWithCommentsCount = Experience & {
  commentsCount: number;
};

export type ExperienceForList = ExperienceWithUser &
  ExperienceWithCommentsCount;
