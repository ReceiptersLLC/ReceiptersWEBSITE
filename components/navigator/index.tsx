"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { products, services } from "@/lib/siteLinks";
import { useAuth } from "@/context/AuthContext";

const languages = [
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
];

type MenuKey = "product" | "services" | "blogs" | null;

export default function Navigator() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const pathname = usePathname();
  const { t, i18n: i18nInstance } = useTranslation("common");
  const navRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Close an open dropdown on outside click or Escape
  useEffect(() => {
    if (!openMenu) return;
    const onClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  const handleLanguageChange = async (newLanguage: string) => {
    try {
      await i18nInstance.changeLanguage(newLanguage);
    } catch (error) {
      console.error("Error switching language:", error);
    }
  };

  const isActive = (href: string) => pathname === href;
  const toggle = (key: MenuKey) => setOpenMenu(openMenu === key ? null : key);
  const close = () => setOpenMenu(null);

  const productItems = (
    <>
      <MenuItem href="/product" onClick={close} strong>
        {t("navbar.allProducts")}
      </MenuItem>
      {products.map((product) =>
        product.href ? (
          <a
            key={product.slug}
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-ink hover:bg-sky"
          >
            <span>{product.name}</span>
            <ArrowUpRight size={14} className="text-muted" aria-hidden="true" />
          </a>
        ) : (
          <MenuItem key={product.slug} href={`/product#${product.slug}`} onClick={close}>
            {product.name}
          </MenuItem>
        )
      )}
    </>
  );

  const serviceItems = (
    <>
      <MenuItem href="/services" onClick={close} strong>
        {t("navbar.allServices")}
      </MenuItem>
      {services.map((service) => (
        <MenuItem key={service.slug} href={`/services#${service.slug}`} onClick={close}>
          {t(service.titleKey)}
        </MenuItem>
      ))}
    </>
  );

  const blogItems = (
    <>
      <MenuItem href="/blogs" onClick={close}>
        {t("navbar.link.blogs")}
      </MenuItem>
      <MenuItem href="/blogs/announcement" onClick={close}>
        {t("navbar.link.announcement")}
      </MenuItem>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      {/* Top strip */}
      <div className="bg-ink text-white">
        <div className="mx-auto flex min-h-[38px] max-w-7xl items-center justify-between gap-4 px-5 text-xs sm:px-8">
          <div className="flex items-center gap-2.5 font-medium text-white/85">
            <span className="inline-block size-[7px] shrink-0 bg-skyDeep" aria-hidden="true" />
            <span className="hidden sm:inline">{t("footer.tagline")}</span>
            <span className="sm:hidden">Receipters Technologies Limited</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@receipters.com" className="hidden text-white/75 hover:text-white md:inline">
              info@receipters.com
            </a>
            <a
              href="mailto:support@receipters.com"
              className="hidden border-l border-white/25 pl-4 text-white/75 hover:text-white lg:inline"
            >
              support@receipters.com
            </a>
            <select
              aria-label="Language"
              className="border border-white/25 bg-ink px-1.5 py-1 text-xs text-white"
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={i18nInstance.language}
            >
              {languages.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="border-b border-skyDeep/60 border-t-[3px] border-t-primary bg-sky" ref={navRef}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-[72px] items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative block h-11 w-[30px]">
                <Image src="/img/logo.svg" alt="" fill className="object-contain" />
              </span>
              <span className="font-serif text-xl font-medium tracking-tight text-ink">Receipters</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-stretch self-stretch lg:flex">
              <NavLink href="/" label={t("navbar.link.home")} active={isActive("/")} />
              <NavLink href="/about" label={t("navbar.link.about")} active={isActive("/about")} />
              <Dropdown
                label={t("navbar.link.product")}
                active={pathname.startsWith("/product") || pathname.startsWith("/features")}
                open={openMenu === "product"}
                onToggle={() => toggle("product")}
              >
                {productItems}
              </Dropdown>
              <Dropdown
                label={t("navbar.link.services")}
                active={pathname.startsWith("/services")}
                open={openMenu === "services"}
                onToggle={() => toggle("services")}
                wide
              >
                {serviceItems}
              </Dropdown>
              <Dropdown
                label={t("navbar.link.blogs")}
                active={pathname.startsWith("/blogs")}
                open={openMenu === "blogs"}
                onToggle={() => toggle("blogs")}
              >
                {blogItems}
              </Dropdown>
              <NavLink href="/download" label={t("navbar.link.app")} active={isActive("/download")} />
              <NavLink href="/careers" label={t("navbar.link.careers")} active={isActive("/careers")} />
              <NavLink href="/contact" label={t("navbar.link.contact")} active={isActive("/contact")} />
            </div>

            {/* Account */}
            <div className="hidden items-center gap-1 lg:flex">
              {user ? (
                <button
                  type="button"
                  onClick={() => logout()}
                  className="px-3 py-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:underline"
                >
                  {t("navbar.button.signOut")}
                </button>
              ) : (
                <>
                  <Link href="/login" className="px-3 py-2 text-sm font-semibold text-ink hover:text-primary">
                    {t("navbar.button.login")}
                  </Link>
                  <Link href="/signup" className="px-3 py-2 text-sm font-semibold text-ink hover:text-primary">
                    {t("navbar.button.signUp")}
                  </Link>
                </>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-ink lg:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-full z-50 max-h-[calc(100vh-113px)] w-full overflow-y-auto border-b border-line bg-white lg:hidden">
            <div className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
              <NavLink href="/" label={t("navbar.link.home")} active={isActive("/")} mobile />
              <NavLink href="/about" label={t("navbar.link.about")} active={isActive("/about")} mobile />
              <MobileGroup
                label={t("navbar.link.product")}
                open={openMenu === "product"}
                onToggle={() => toggle("product")}
              >
                {productItems}
              </MobileGroup>
              <MobileGroup
                label={t("navbar.link.services")}
                open={openMenu === "services"}
                onToggle={() => toggle("services")}
              >
                {serviceItems}
              </MobileGroup>
              <MobileGroup
                label={t("navbar.link.blogs")}
                open={openMenu === "blogs"}
                onToggle={() => toggle("blogs")}
              >
                {blogItems}
              </MobileGroup>
              <NavLink href="/download" label={t("navbar.link.app")} active={isActive("/download")} mobile />
              <NavLink href="/careers" label={t("navbar.link.careers")} active={isActive("/careers")} mobile />
              <NavLink href="/contact" label={t("navbar.link.contact")} active={isActive("/contact")} mobile />

              <div className="mb-2 mt-3 grid grid-cols-2 gap-3 border-t border-line pt-4">
                {user ? (
                  <button
                    type="button"
                    onClick={() => logout()}
                    className="col-span-2 border border-red-600 px-4 py-3 text-center text-sm font-semibold text-red-600"
                  >
                    {t("navbar.button.signOut")}
                  </button>
                ) : (
                  <>
                    <Link href="/login" className="border border-ink px-4 py-3 text-center text-sm font-semibold text-ink">
                      {t("navbar.button.login")}
                    </Link>
                    <Link href="/signup" className="border border-ink px-4 py-3 text-center text-sm font-semibold text-ink">
                      {t("navbar.button.signUp")}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

function Dropdown({
  label,
  active,
  open,
  onToggle,
  wide = false,
  children,
}: {
  label: string;
  active: boolean;
  open: boolean;
  onToggle: () => void;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="relative flex">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={onToggle}
        className={`flex items-center gap-1 px-4 text-sm font-semibold transition-colors ${
          active ? "bg-primary text-white" : open ? "bg-white/60 text-ink" : "text-ink hover:bg-white/50"
        }`}
      >
        <span>{label}</span>
        <ChevronDown size={15} className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div
          className={`absolute left-0 top-full z-50 border border-line border-t-[3px] border-t-primary bg-white py-1.5 shadow-[0_16px_32px_-12px_rgba(14,20,51,0.28)] ${
            wide ? "w-72" : "w-56"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function MenuItem({
  href,
  onClick,
  strong = false,
  children,
}: {
  href: string;
  onClick: () => void;
  strong?: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-4 py-2.5 text-sm hover:bg-sky ${
        strong ? "mb-1 border-b border-line pb-3 font-semibold text-primary" : "text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between px-3 py-3 text-base font-semibold text-ink"
      >
        <span>{label}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && <div className="mb-2 ml-3 border-l border-line">{children}</div>}
    </div>
  );
}

function NavLink({
  href,
  label,
  active,
  mobile = false,
}: {
  href: string;
  label: string;
  active: boolean;
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <Link
        href={href}
        className={`block px-3 py-3 text-base font-semibold ${
          active ? "bg-primary text-white" : "text-ink"
        }`}
      >
        {label}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`flex items-center px-4 text-sm font-semibold transition-colors ${
        active ? "bg-primary text-white" : "text-ink hover:bg-white/50"
      }`}
    >
      {label}
    </Link>
  );
}
