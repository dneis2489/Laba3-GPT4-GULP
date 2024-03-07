import { createH1Elements } from "./elements/SimpleElements/createH1Elements.js";
import { createButtonElements } from "./elements/SimpleElements/createButtonElements.js";


export const createInputsTemplate = ({ title }) => {
    return `
        <a href="" class="cta_buttons">
            ${createButtonElements(title, "cta_buttons__singin")}
        </a>
    `
};

export const stepIntoFutureTemplate = ({
    header,
    stepIntoFutureCtaButtons
}) => {
    const headerTemplate = createH1Elements(header, "stepIntoFutureHeader");
    const buttonsTemplate = createInputsTemplate(stepIntoFutureCtaButtons);

    const resultTemplate = `
        ${headerTemplate}
        ${buttonsTemplate}
    `;

    return resultTemplate
}