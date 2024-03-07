import { createH2Elements } from "./elements/SimpleElements/createH2Elements.js";
import { createH3Elements } from "./elements/SimpleElements/createH3Elements.js"
import { createPElements } from "./elements/SimpleElements/createPElements.js";
import { createAElements } from "./elements/SimpleElements/createAElements.js"

export const createWhatIsGptTopTemplate = ({ header, content }) => {
  const template = `
        ${createH3Elements(header, "top__header lined_header")}
        ${createPElements(content, "top__content")}
    `;

  return template;
};

export const createWhatIsGptMiddleTemplate = ({
  header,
  button
}) => {
  const template = `
        ${createH2Elements(header, "middle__header")}
        ${createAElements(button, "middle_cta")}
    `;

  return template;
};

export const createWhatIsGptContainerTemplate = ({ header, content }) => {
  return `
    <div class="bottom__container">
        ${createH3Elements(header, "container__header lined_header")}
        ${createPElements(content, "container__content")}
    </div>
    `;
};

export const createWhatIsGptBottomTemplate = (whatIsGptBottomData) => {
  const template = whatIsGptBottomData
    .map((item) => createWhatIsGptContainerTemplate(item))
    .join("");

  return template;
};

export const whatIsGptTemplate = ({
  whatIsGptTopData,
  whatIsGptMiddleData,
  whatIsGptBottomData,
}) => {
  const whatIsGptTopTemplate = createWhatIsGptTopTemplate(whatIsGptTopData);
  const whatIsGptMiddleTemplate =
    createWhatIsGptMiddleTemplate(whatIsGptMiddleData);
  const whatIsGptBottomTemplate =
    createWhatIsGptBottomTemplate(whatIsGptBottomData);

  const resultTemplate = `
        <div class="what_is_chatgpt_section__top">
           ${whatIsGptTopTemplate}
        </div>
        <div class="what_is_chatgpt_section__middle">
           ${whatIsGptMiddleTemplate}
        </div>
        <div class="what_is_chatgpt_section__bottom">
           ${whatIsGptBottomTemplate}
        </div>
    `;

  return resultTemplate;
};
