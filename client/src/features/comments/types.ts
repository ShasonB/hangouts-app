import { Comment, User } from "@hangsouts-app/server/database/schema";

type CommentWithUser = Comment & {
  user: User;
};

export type CommentForList = CommentWithUser;
