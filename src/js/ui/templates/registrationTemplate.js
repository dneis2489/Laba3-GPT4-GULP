import { createH3Elements } from "./elements/SimpleElements/createH3Elements.js";
import { createButtonElements } from "./elements/SimpleElements/createButtonElements.js";

export const createInputsTemplate = ({ title }) => {
    return `
        <a href="#">
            ${createButtonElements(title, "start_reg_btn btn")}
        </a>
    `
};


export const registrationTemplate = ({
    header,
    registrationCtaButtons
}) => {
    const headerTemplate = createH3Elements(header, "registration_text");
    const buttonsTemplate = createInputsTemplate(registrationCtaButtons);

    const resultTemplate = `
        <div class="registration_content_left">
            <p class="early_access">
                Запросите ранний доступ
            </p>
            ${headerTemplate}
        </div>
        <div class="registration_button_right">
            ${buttonsTemplate}
        </div>
    `;

    return resultTemplate
}