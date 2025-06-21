import Card from "../../shared/components/ui/Card";

import { CommentForList } from "../types";

type ComementCardProps = {
  comment: CommentForList;
};

export function CommentCard({ comment }: ComementCardProps) {
  return (
    <Card className="space-y-4">
      <CommentCardHeader comment={comment} />
      <CommentCardContent comment={comment} />
    </Card>
  );
}

type CommentCardHeaderProps = Pick<ComementCardProps, "comment">;

function CommentCardHeader({ comment }: CommentCardHeaderProps) {
  return (
    <div className="flex items-center gap-2">
      <div>{comment.user.name}</div>
      <time className="text-sm text-neutral-500">
        {new Date(comment.createdAt).toLocaleDateString()}
      </time>
    </div>
  );
}

type CommentCardContentProps = Pick<ComementCardProps, "comment">;

function CommentCardContent({ comment }: CommentCardContentProps) {
  return <p>{comment.content}</p>;
}
