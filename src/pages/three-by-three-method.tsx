/* eslint-disable i18next/no-literal-string */
import { GetStaticProps, NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

import NextSeoWrapper from '@/components/NextSeoWrapper';
import PageContainer from '@/components/PageContainer';
import { getAllChaptersData } from '@/utils/chapter';
import { getLanguageAlternates } from '@/utils/locale';
import { getCanonicalUrl } from '@/utils/navigation';

import styles from './contentPage.module.scss';

const PATH = '/three-by-three-method';

const ThreeByThreeMethodPage: NextPage = () => {
  const { lang } = useTranslation();

  return (
    <>
      <NextSeoWrapper
        title="3x3 Memorization Method"
        description="Learn how the 3x3 method breaks memorization into focused repetition cycles."
        url={getCanonicalUrl(lang, PATH)}
        languageAlternates={getLanguageAlternates(PATH)}
      />
      <PageContainer>
        <div className={styles.contentPage} dir="ltr">
          <h1>3x3 Memorization Method</h1>
          <p>
            The 3x3 method organizes memorization into manageable units and reinforces recall through
            structured repetition.
          </p>
          <ol>
            <li>Divide the material into three small segments.</li>
            <li>Repeat each segment three times before moving to the next.</li>
            <li>Recite the three segments together three times to solidify the connection.</li>
          </ol>
          <p>
            This cycle develops focus, creates a consistent rhythm, and supports long-term retention
            of the material.
          </p>
        </div>
      </PageContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allChaptersData = await getAllChaptersData(locale);

  return {
    props: {
      chaptersData: allChaptersData,
    },
  };
};

export default ThreeByThreeMethodPage;

