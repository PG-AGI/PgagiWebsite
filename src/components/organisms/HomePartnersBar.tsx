'use client';

import Partners from '@/components/organisms/Partners';
import partnerStyles from '@/styles/components/organisms/partners.module.scss';

export default function HomePartnersBar() {
  return (
    <section role="region" aria-label="Partner Logos">
      <div className={partnerStyles.partnersBar}>
        <Partners />
      </div>
    </section>
  );
}
