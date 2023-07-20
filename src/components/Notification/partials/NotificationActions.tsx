import { ReactNode } from "react";

interface NotificationActionsProps {
  children: ReactNode;
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return <div className="flex self-center gap-2">{children}</div>;
}
