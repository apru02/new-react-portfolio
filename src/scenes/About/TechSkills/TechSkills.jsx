import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiSwift } from '@react-icons/all-files/di/DiSwift';
import { SiExpo } from '@react-icons/all-files/si/SiExpo';
import { SiFirebase } from '@react-icons/all-files/si/SiFirebase';
import { SiKotlin } from '@react-icons/all-files/si/SiKotlin';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiSocketDotIo } from '@react-icons/all-files/si/SiSocketDotIo';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiJest } from '@react-icons/all-files/si/SiJest';
import { SiPostman } from "@react-icons/all-files/si/SiPostman.js";
import { SiMicrosoftazure } from "@react-icons/all-files/si/SiMicrosoftazure.js";
import { FaPython } from "@react-icons/all-files/fa/FaPython.js";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs.js";
import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiJest />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiFirebase />
      </li>
      <li className={s.techIcon}>
        <SiSocketDotIo />
      </li>
      <li className={s.techIcon}>
        <SiExpo />
      </li>
      <li className={s.techIcon}>
        <SiPostman />
      </li>
      <li className={s.techIcon}>
        <SiMicrosoftazure />
      </li>
      <li className={s.techIcon}>
        <FaPython />
      </li>
      <li className={s.techIcon}>
        <FaNodeJs />
      </li>
    </ul>
  );
};

export default TechSkills;
