import type { ReactNode } from "react";

type WelcomeMessageProps = {
  id?: string;
  variant?: "executive" | "president";
  image: string;
  imageAlt: string;
  photoTone: "red" | "dark";
  heading: ReactNode;
  details?: ReactNode;
  children: ReactNode;
};

export function WelcomeMessage({
  id,
  variant = "executive",
  image,
  imageAlt,
  photoTone,
  heading,
  details,
  children,
}: WelcomeMessageProps) {
  const variantClass = variant === "president" ? " president-message" : "";

  return (
    <section className={`message executive-message${variantClass}`} id={id}>
      <aside>
        <div className={`round-photo ${photoTone}`}><img src={image} alt={imageAlt} /></div>
        <h3>{heading}</h3>
        {details}
      </aside>
      <article>{children}</article>
    </section>
  );
}
