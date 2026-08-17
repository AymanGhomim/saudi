type SectionTitleProps = {
  title: string;
  variant: "learning" | "target" | "speakers" | "location";
  withPattern?: boolean;
};

export function SectionTitle({ title, variant, withPattern = true }: SectionTitleProps) {
  return (
    <div className={`${variant}-title`}>
      <h2>{title}</h2>
      {withPattern && (
        <div className={`${variant}-crosses`} aria-hidden="true">
          {Array.from({ length: 35 }, (_, index) => <i key={index}>+</i>)}
        </div>
      )}
    </div>
  );
}
