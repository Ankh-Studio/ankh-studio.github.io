import { useThemeContext } from "@/hooks/useThemeContext";
import {  MouseEventHandler, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
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
  const { themeColors } = useThemeContext();

  return (
    <div 
      className="Navigation"
      style={{ backgroundColor: themeColors.Background }}
    >
      <NavLink href="/" 
        className="HomeLink"
      >
        <div className="AnkhStudio">
          <h1 className="Ankh"
            style={{ color: themeColors.TextSecondary }}
          >
            ANKH
          </h1>
          <h4 className="Studio"
            style={{ color: themeColors.TextSecondary }}
          >
            STUDIO
          </h4>

          <div className={"StudioBorder"}
            style={{
              backgroundImage: `
                linear-gradient(to right, 
                  ${themeColors.AccentOne}, 
                  ${themeColors.AccentThree} 40% 
                )`
            }}
          />
        </div>
      </NavLink>
      <nav className="NavLinks">
        <ul>
          { nav.map((item) => {
            const isCurrentPage = router.pathname.startsWith(item.href);
            return (
              <NavLink
                href={"/"}
                key={item.name}
                area-current={isCurrentPage ? "page" : undefined}
              >
                <li key={item.name}
                  className={"Link"}
                  style={{
                    color: isCurrentPage 
                      ? themeColors.TextSecondary
                      : themeColors.TextPrimary
                  }}
                >{ item.name }</li>
              </NavLink>
            );
          }) }
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
