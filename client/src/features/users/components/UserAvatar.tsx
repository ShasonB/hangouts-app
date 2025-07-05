import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/features/shared/components/ui/Avatar";
import Link from "@/features/shared/components/ui/Link";
import { cn } from "@/lib/utils/cn";
import { User } from "@hangouts-app/server/database/schema";

type UserAvatarProps = {
  user: User;
  showName?: boolean;
  nameClassName?: string;
  className?: string;
};
export function UserAvatar({
  user,
  showName = true,
  nameClassName,
  className,
}: UserAvatarProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Link to="/users/$userId" params={{ userId: user.id }}>
        <Avatar className={className}>
          <AvatarImage
            src={user.avatarUrl ?? undefined}
            className="object-cover"
          />
          <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        {showName && (
          <span
            className={cn(
              "text-neutral-600 dark:text-neutral-400",
              nameClassName,
            )}
          >
            {user.name}
          </span>
        )}
      </Link>
    </div>
  );
}
