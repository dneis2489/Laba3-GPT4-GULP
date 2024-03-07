import { createPElements } from "./elements/SimpleElements/createPElements.js";
import { createImgElements } from "./elements/SimpleElements/createImgElements.js";
import { createH2Elements } from "./elements/SimpleElements/createH2Elements.js";



export const exceedingAllExpectationsTemplate = ({
  illustration,
  header,
  description
}) => {
  const headerTemplate = createH2Elements(header, "left__header");
  const descriptionTemplate = createPElements(description, "container__content");
  const illustrationTemplate = createImgElements(illustration, "exceedingAllExpectationsImg");

  const resultTemplate = `
        <div class="exceeding_all_expectations_section_left">
            ${illustrationTemplate}
        </div>
        <div class="exceeding_all_expectations_section_right">
            <p class="early_access">
                Запроси ранний доступ
            </p>
            <h2 class="left__header">
                ${headerTemplate}
            </h2>
            ${descriptionTemplate}
            <a href="#" class="left__cta">Запросить ранний доступ</a>
        </div>
    `;

  return resultTemplate
}