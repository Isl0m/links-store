import { FC } from 'react';
import s from './TemplateName.module.scss';

interface ITemplateNameProps {}

const TemplateName: FC<ITemplateNameProps> = () => {
  return (
    <div className={s.templateName}>
      TemplateName Component
    </div>
  )
};

export default TemplateName;

