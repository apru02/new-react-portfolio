import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Apratim Dutta, </span>
        <br />a software developer currently based in{' '}
        <span className={s.purple}>Kolkata, India.</span>
        <br />
        <br />
        I am currently pursuing a Bachelor's degree in Information
        <br />
        Technology and from IIEST Shibpur.
        <br />
        <br />
        My hobbies beyond programming:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Travelling and adventures
        </li>
        <li className={s.aboutActivity}>
          - Cricket
        </li>
        <li className={s.aboutActivity}>
          - Blogging
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
