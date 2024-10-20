import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'محتوى عربي بالكامل',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>

      
     محتوى كامل عن اختبار الاختراق بالغة العربية لمساعدة المتعلمين العرب الذين قد يواجهون صعوبة في استيعاب بعض المفاهيم باللغة الإنجليزية 

      </>
    ),
  },
  {
    title: 'كل ما يخص اختبار الاختراق',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
  مواضيع شاملة و مسارات تعلم كاملة بمافي ذلك 
  اختبارت اخراق الويب و
اختبار اختراق الشبكات و
  اختبار اختراق الاندرويد
      </>
    ),
  },
  {
    title: 'تحديثات مستمرة لكل جديد',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
تحديثات جديدة لكل المستجدات و تقنيات الاختراق الجديدة واحدث التطورات
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
