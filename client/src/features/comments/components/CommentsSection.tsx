import { trpc } from "@/trpc";
import { Experience } from "@hangsouts-app/server/database/schema";
import CommentList from "./CommentList";

type CommentsSectionProps = {
  experienceId: Experience["id"];
  commentsCount: number;
};

export function CommentsSection({
  experienceId,
  commentsCount,
}: CommentsSectionProps) {
  const commentsQuery = trpc.comments.byExperienceId.useQuery({ experienceId });

  if (commentsQuery.error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Comments ({commentsCount})</h3>

      <CommentList
        comments={commentsQuery.data ?? []}
        isLoading={commentsQuery.isLoading}
      />
    </div>
  );
}
