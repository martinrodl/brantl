import { AutoHideHeader } from "@/components/ui/auto-hide-header";
import { Navbar } from "./navbar";

export async function Header() {
  return (
    <AutoHideHeader>
      <Navbar />
    </AutoHideHeader>
  );
}
