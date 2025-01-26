"use client";
import entrepreneurshipData from '@/data/experience/entrepreneurshipData.json';
import ExperienceListItem from '@/components/ui/ExperienceListItem';

export default function EntrepreneurshipSection() {
  return (
    <section id="entrepreneurship" aria-labelledby="entrepreneurship-heading" role="contentinfo">
      <article>
        {entrepreneurshipData.map((item, index) => (
          <ExperienceListItem
            id={index}
            key={index}
            logoSrc={item.logoSrc}
            altText={item.altText}
            institutionName={item.institutionName}
            duration={item.duration}
            title={item.title}
            location={item.location}
            description={item.description}
          />
        ))}
      </article>
    </section>
  );
}