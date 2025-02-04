import Link from "next/link";

type RouterLinkMenuProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export function RouterLinkMenu({ href, label, icon, onClick }: RouterLinkMenuProps) {
  return (
    <Link
      href={href}
      className="flex w-full items-center justify-between p-2 text-2xl font-medium text-secondary-foreground transition-colors hover:bg-gray-800"
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && icon}
    </Link>
  );
}
