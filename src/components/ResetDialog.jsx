import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from "@/components/ui/alert-dialog.tsx";
import { Button } from "@/components/ui/button";

export default function ResetDialog({ type, reseter }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={type === "board" ? "destructive" : "hyperDestructive"}
          className="w-28"
        >
          Reset {type === "board" ? "board" : "scores"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col">
        <AlertDialogHeader className="text-start">
          <AlertDialogTitle>
            Reset {type === "board" ? "board" : "scores"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will{" "}
            {type === "board"
              ? "clear the current game's board"
              : "clear the board and reset the scores back to zero"}
            . Do you want to continue?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="text-end">
          <AlertDialogCancel className="w-20 mx-3 border-0 bg-background text-secondary-foreground [&:not(:focus)]:shadow hover:bg-secondary/90 focus:bg-nackground focus:shadow-inner">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="w-20 bg-primary text-primary-foreground [&:not(:focus)]:shadow hover:bg-background hover:text-primary focus:bg-background focus:text-primary focus:shadow-inner"
            onClick={reseter}
          >
            Accept
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
