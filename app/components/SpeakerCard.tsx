type SpeakerCardProps = {
  name: string;
  role: string;
  image: string;
  flagIcon: string;
};

export function SpeakerCard({ name, role, image, flagIcon }: SpeakerCardProps) {
  return (
    <article className="speaker-tile">
      <div className="speaker-person"><img src={image} alt={name} /></div>
      <div className="speaker-info">
        <div className="speaker-name">
          <h3>{name}</h3>
          <span className="flag"><img src={flagIcon} alt="" /></span>
        </div>
        <p>{role}</p>
      </div>
    </article>
  );
}
