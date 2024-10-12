import { getConfig } from "@/core/config";
import getSiteInfo from "@/utils/siteInfo";
import Link from "next/link";
import clsx from "clsx";

export default async function NavBar() {
  const site = await getSiteInfo();
  const config = getConfig();

  return (
    <nav
      className={clsx(
        "bg-nav-background backdrop-blur shadow h-12 flex justify-between items-center",
        "px-2 fixed w-full z-[1000] top-0 sm:px-16",
      )}
    >
      <span className="font-medium">
        <Link href="/">{site?.name}</Link>
      </span>
      <div className="text-sm text-gray-800 flex space-x-4 dark:text-gray-300">
        {config.menu?.map((item) => (
          <Link key={item.label} href={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
