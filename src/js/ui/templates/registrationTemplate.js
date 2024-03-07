import { createH3Elements } from "./elements/SimpleElements/createH3Elements.js";
import { createButtonElements } from "./elements/SimpleElements/createButtonElements.js";


export const registrationTemplate = ({
    header,
    registrationCtaButtons
}) => {
    const headerTemplate = createH3Elements(header, "registration_text");
    const buttonsTemplate = createButtonElements(registrationCtaButtons.title, "start_reg_btn btn");

    const resultTemplate = `
        <div class="registration_content_left">
            <p class="early_access">
                Запросите ранний доступ
            </p>
            ${headerTemplate}
        </div>
        <div class="registration_button_right">
            <a href="#">
                ${buttonsTemplate}
            </a>
        </div>
    `;

    return resultTemplate
}