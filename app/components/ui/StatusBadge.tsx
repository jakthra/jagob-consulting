import { WorkStatus } from "~/types";
import { Badge } from "./badge";

export function StatusBadge(props: { status: WorkStatus }) {
  switch (props.status) {
    case WorkStatus.Active:
      return (
        <Badge
          className="text-tiny text-accent border-accent"
          variant={"default"}
        >
          <div>{props.status}</div>
        </Badge>
      );
    case WorkStatus.Archived:
      return (
        <Badge
          className="text-tiny text-accent-foreground border-accent-foreground"
          variant={"outline"}
        >
          <div>{props.status}</div>
        </Badge>
      );
  }
}

export default StatusBadge;
