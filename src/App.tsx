import type { ComponentType, ReactNode } from "react";

import "./App.css";
import beaconIcon from "./assets/beacon-icon.png";
import beaconApp from "./assets/beacon-app.png";

const GITHUB_URL = "https://github.com/marcomtzan/Beacon";

const NAVIGATION_LINKS = [
    { label: "Features", href: "#features" },
    { label: "Why Local", href: "#why-local" },
    { label: "Roadmap", href: "#roadmap" }
] as const;

const RESOURCE_LINKS = NAVIGATION_LINKS;

const COMMUNITY_LINKS = [
    { label: "GitHub", href: GITHUB_URL },
    { label: "Issues", href: `${GITHUB_URL}/issues` },
    { label: "Discussions", href: `${GITHUB_URL}/discussions` }
] as const;

type IconComponent = ComponentType;

interface Feature {
    title: string;
    description: string;
    Icon: IconComponent;
}

const FEATURES: Feature[] = [
    {
        title: "Local First",
        description:
            "All data stays on your machine. No cloud uploads. No tracking. Complete privacy.",
        Icon: ShieldIcon
    },
    {
        title: "Private AI",
        description:
            "Run powerful models locally with Ollama. Your conversations never leave your device.",
        Icon: BrainIcon
    },
    {
        title: "Persistent Memory",
        description:
            "Beacon remembers your conversations and context so you can pick up where you left off.",
        Icon: DocumentIcon
    },
    {
        title: "Fast & Lightweight",
        description:
            "Built with modern technologies for speed and efficiency. No bloat. Just performance.",
        Icon: BoltIcon
    }
];

export default function App() {
    return (
        <div className="site-shell">
            <Header />

            <main>
                <Hero />
                <Features />
                <CallToAction />
            </main>

            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="site-header">
            <div className="header-content">
                <Brand href="#top" />

                <nav
                    className="desktop-navigation"
                    aria-label="Main navigation"
                >
                    {NAVIGATION_LINKS.map(link => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}

                    <ExternalLink href={GITHUB_URL}>
                        GitHub
                    </ExternalLink>

                    <ButtonLink
                        href="#download"
                        className="button-small"
                        icon={<DownloadIcon />}
                    >
                        Download
                    </ButtonLink>
                </nav>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section className="hero" id="top">
            <div className="hero-content">
                <div className="hero-copy">
                    <div className="eyebrow">
                        <span className="eyebrow-dot" />
                        Local-first AI workspace
                    </div>

                    <h1>
                        Your AI workspace.
                        <span>Private. Local. Yours.</span>
                    </h1>

                    <p className="hero-description">
                        Beacon is a local-first AI workspace that keeps your
                        conversations, documents, and data private—on your
                        machine. No cloud. No tracking. Just intelligent
                        assistance that remembers what matters to you.
                    </p>

                    <div className="hero-actions">
                        <ButtonLink
                            href="#download"
                            icon={<WindowsIcon />}
                        >
                            Download for Windows
                        </ButtonLink>

                        <ButtonLink
                            href={GITHUB_URL}
                            variant="secondary"
                            external
                            icon={<GitHubIcon />}
                        >
                            View on GitHub
                        </ButtonLink>
                    </div>

                    <TrustLine />
                </div>

                <ProductPreview />
            </div>
        </section>
    );
}

function TrustLine() {
    const trustItems = [
        "100% local",
        "Open source",
        "Your data stays on your machine"
    ];

    return (
        <div className="trust-line">
            <ShieldIcon />

            {trustItems.map((item, index) => (
                <TrustItem
                    key={item}
                    showSeparator={index > 0}
                >
                    {item}
                </TrustItem>
            ))}
        </div>
    );
}

interface TrustItemProps {
    children: ReactNode;
    showSeparator: boolean;
}

function TrustItem({
    children,
    showSeparator
}: TrustItemProps) {
    return (
        <>
            {showSeparator && (
                <span
                    className="trust-separator"
                    aria-hidden="true"
                >
                    •
                </span>
            )}

            <span>{children}</span>
        </>
    );
}

function ProductPreview() {
    return (
        <div className="product-preview">
            <div className="product-glow" />

            <img
                src={beaconApp}
                alt="Beacon application interface"
            />
        </div>
    );
}

function Features() {
    return (
        <section className="features-section" id="features">
            <SectionHeading
                title="Built for privacy. Designed for productivity."
                description="Everything you need in a modern AI workspace."
            />

            <div className="feature-grid">
                {FEATURES.map(feature => (
                    <FeatureCard
                        key={feature.title}
                        feature={feature}
                    />
                ))}
            </div>
        </section>
    );
}

interface SectionHeadingProps {
    title: string;
    description: string;
}

function SectionHeading({
    title,
    description
}: SectionHeadingProps) {
    return (
        <div className="section-heading">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

interface FeatureCardProps {
    feature: Feature;
}

function FeatureCard({
    feature: { title, description, Icon }
}: FeatureCardProps) {
    return (
        <article className="feature-card">
            <div className="feature-icon">
                <Icon />
            </div>

            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    );
}

function CallToAction() {
    return (
        <section className="cta" id="download">
            <div className="cta-copy">
                <div className="cta-icon">
                    <DownloadIcon />
                </div>

                <div>
                    <h2>Ready to get started?</h2>
                    <p>
                        Download Beacon and start your private AI workspace
                        today.
                    </p>
                </div>
            </div>

            <div className="cta-actions">
                <ButtonLink
                    href="#"
                    icon={<WindowsIcon />}
                >
                    Download for Windows
                </ButtonLink>

                <ExternalLink
                    href={GITHUB_URL}
                    className="text-link"
                >
                    View on GitHub
                    <ExternalLinkIcon />
                </ExternalLink>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-brand">
                <Brand className="footer-logo" />

                <p>
                    A local-first AI workspace.
                    <br />
                    Your data. Your rules.
                </p>
            </div>

            <FooterColumn
                title="Resources"
                links={RESOURCE_LINKS}
            />

            <FooterColumn
                title="Community"
                links={COMMUNITY_LINKS}
                external
            />

            <div className="footer-meta">
                <span>© {new Date().getFullYear()} Beacon</span>
                <span>MIT License</span>
            </div>
        </footer>
    );
}

interface BrandProps {
    href?: string;
    className?: string;
}

function Brand({
    href,
    className = ""
}: BrandProps) {
    const content = (
        <>
            <img
                src={beaconIcon}
                alt=""
                className="brand-icon"
            />
            <span>Beacon</span>
        </>
    );

    const classes = ["brand", className]
        .filter(Boolean)
        .join(" ");

    if (href) {
        return (
            <a
                className={classes}
                href={href}
                aria-label="Beacon home"
            >
                {content}
            </a>
        );
    }

    return <div className={classes}>{content}</div>;
}

interface FooterLink {
    label: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: readonly FooterLink[];
    external?: boolean;
}

function FooterColumn({
    title,
    links,
    external = false
}: FooterColumnProps) {
    return (
        <div className="footer-column">
            <h3>{title}</h3>

            {links.map(link =>
                external ? (
                    <ExternalLink
                        key={link.href}
                        href={link.href}
                    >
                        {link.label}
                    </ExternalLink>
                ) : (
                    <a key={link.href} href={link.href}>
                        {link.label}
                    </a>
                )
            )}
        </div>
    );
}

interface ButtonLinkProps {
    href: string;
    children: ReactNode;
    icon?: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    external?: boolean;
}

function ButtonLink({
    href,
    children,
    icon,
    variant = "primary",
    className = "",
    external = false
}: ButtonLinkProps) {
    const classes = [
        "button",
        `button-${variant}`,
        className
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <a
            className={classes}
            href={href}
            {...getExternalLinkProps(external)}
        >
            {icon}
            {children}
        </a>
    );
}

interface ExternalLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

function ExternalLink({
    href,
    children,
    className
}: ExternalLinkProps) {
    return (
        <a
            href={href}
            className={className}
            {...getExternalLinkProps(true)}
        >
            {children}
        </a>
    );
}

function getExternalLinkProps(external: boolean) {
    return external
        ? {
            target: "_blank",
            rel: "noopener noreferrer"
        }
        : {};
}

function ShieldIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3 20 6v5c0 5.1-3.4 8.8-8 10-4.6-1.2-8-4.9-8-10V6l8-3Z" />
        </svg>
    );
}

function BrainIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 4.5a3 3 0 0 0-5 2.2 3.5 3.5 0 0 0 .3 6.8A3.5 3.5 0 0 0 9.5 19V4.5Zm5 0a3 3 0 0 1 5 2.2 3.5 3.5 0 0 1-.3 6.8 3.5 3.5 0 0 1-4.7 5.5V4.5ZM9.5 8H7.8M14.5 8h1.7M9.5 13H7.8M14.5 13h1.7" />
        </svg>
    );
}

function DocumentIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3h8l4 4v14H6V3Zm8 0v5h5M9 12h6M9 16h6" />
        </svg>
    );
}

function BoltIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m13 2-9 12h7l-1 8 10-13h-7V2Z" />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v12m0 0 5-5m-5 5-5-5M4 19h16" />
        </svg>
    );
}

function WindowsIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                stroke="none"
                d="M3 5.2 10.8 4v7.4H3V5.2Zm8.8-1.4L21 2.5v8.9h-9.2V3.8ZM3 12.5h7.8V20L3 18.9v-6.4Zm8.8 0H21v9l-9.2-1.3v-7.7Z"
            />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.5 9.5 0 0 1 5 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 4h6v6M20 4l-9 9M19 13v6H5V5h6" />
        </svg>
    );
}