import { cn } from "@/lib/utils";
import { useThemeContext } from "@/hooks/useThemeContext";
import { MouseEventHandler, PropsWithChildren, useMemo } from "react";
import Link, { LinkProps } from "next/link";
import { motion } from "motion/react";
import { useRouter } from "next/router";

type NavLinkProps = PropsWithChildren< LinkProps & {
  className?: string;
  id?: string;
  areaLabel?: string;
}>;

const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team",     href: "/team" },
  { name: "Contact",  href: "/contact" },
]

const NavLink = ({
  className,
  id,
  areaLabel,
  href,
  children,
  ...props
}: NavLinkProps) => {
  const router = useRouter();

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link
      href={href}
      passHref
      onClick={handleClick}
      className={className}
      area-label={areaLabel}
      id={id}
      { ...props }
    >
      {children}
    </Link>
  );
};

const Navigation = () => {
  const router = useRouter();
  const { theme, themeColors } = useThemeContext();

  const { textStyle, backgroundStyle, currentPageStyle } = useMemo(() => {
    switch( theme ){
      case "dark":
        return {
          textStyle: "text-Dark-TextPrimary",
          backgroundStyle: "bg-transparent",
          currentPageStyle: "text-Dark-AccentTwo",
        };
      case "light":
        return {
          textStyle: "text-Light-TextPrimary",
          backgroundStyle: "bg-transparent",
          currentPageStyle: "bg-Light-Secondary",
        };
    }
  }, [theme]);

  const ankhAnimation = {
    initial:{
      color: themeColors.TextSecondary,
    },
    animate:{
      color: [themeColors.TextSecondary, `${themeColors.TextSecondary}55`, themeColors.TextSecondary],
    },
    transition:{
      duration: 6,
      ease: [0.4, 0.0, 0.6, 1.0],
      repeat: Infinity,
      repeatDelay: 0.5,
      repeatType: "loop"
    },
  };

  return (
    <div 
      className="sticky flex flex-row justify-between w-full h-24 bg-Dark-Surface top-0"
      style={{ zIndex: 1000 }}
    >
      <NavLink href="/" className="relative h-full w-[5vw] ml-12 mt-2 bottom-2  flex flex-col hover:opacity-50 transition-[250ms]">
        <motion.h1 
          className="relative  py-auto top-2 text-[2.5rem] mt-auto font-semibold px-2 pointer-events-none"
          { ...ankhAnimation }
        >
          ANKH
        </motion.h1>
        <motion.h4 
          className="relative  bottom-2 pb-2 text-[1rem] mb-auto text-center font-extralight text-Dark-TextSecondary tracking-[0.9rem] pointer-events-none"
          { ...ankhAnimation }
        >
          STUDIO
        </motion.h4>
        <div className={cn(
          "relative w-[125%]  bottom-4 right-4 h-[1px] ", 
          " bg-gradient-to-r opacity-40 from-Dark-AccentOne to-Dark-AccentThree from-[40%] "
        )}/>
      </NavLink>
      <nav className="h-full  mx-6  pt-8">
        <ul 
          className={"hidden md:flex mr-4 my-auto"}
        >
          { nav.map((item) => {
            const isCurrentPage = router.pathname.startsWith(item.href);
            return (
              <li 
                key={item.name} 
                className={cn(
                )}
              >
                <NavLink
                  href={"/"}
                  area-current={isCurrentPage ? "page" : undefined}
                  className={cn(
                    "px-0 py-2 transition-opacity duration-[250ms] hover:opacity-70 active:opacity-50 text-white font-bold",
                    isCurrentPage && currentPageStyle,
                  )}
                >
                  { item.name }
                </NavLink>
              </li>
            );
          }) }
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
