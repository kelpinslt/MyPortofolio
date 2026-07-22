import { heroData } from "@/data/hero";
import { navigationItems } from "@/data/navigation";

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <header>
        {/* Logo dan nama */}
        <a href="#hero" aria-label="Kembali ke bagian Hero">
          <span>{heroData.brand.initial}</span>
          <span>{heroData.brand.name}</span>
        </a>

        {/* Menu navigasi */}
        <nav aria-label="Main navigation">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Isi utama Hero */}
      <div>
        <h1 id="hero-title">
          <span>{heroData.heading.firstLine}</span>
          <span>{heroData.heading.secondLine}</span>
        </h1>

        <p>{heroData.role}</p>
      </div>

      {/* Tombol About */}
      <a href={heroData.aboutButton.href}>
        {heroData.aboutButton.label}
      </a>
    </section>
  );
}