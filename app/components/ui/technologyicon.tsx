import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Technology } from "~/types";

export function TechnologyIcon(props: Technology) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="grayscale hover:grayscale-0">{props.icon}</div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <span>
            <p>{props.name}</p>
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
