import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

interface ProjectActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export function ProjectActions({ onEdit, onDelete }: ProjectActionsProps) {
  return (
    <div className="flex gap-2">
      <Button size="icon" variant="outline" onClick={onEdit}>
        <Pencil className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline" onClick={onDelete}>
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
}