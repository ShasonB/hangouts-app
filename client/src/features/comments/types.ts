import { Comment, User } from "@hangouts-app/server/database/schema";

type CommentWithUser = Comment & {
  user: User;
};

export type CommentForList = CommentWithUser;
