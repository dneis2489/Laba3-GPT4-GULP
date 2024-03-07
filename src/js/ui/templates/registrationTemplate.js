export const createInputsTemplate = (ctaButtons) => {
    return `
        <a href="#">
            <button class="start_reg_btn btn">
                ${ctaButtons.title}
            </button>
        </a>
    `
};

export const createHeaderTemplate = (header) => {
    return `
      <h3 class="registration_text">
        ${header}
      </h3>
    `;
};


export const registrationTemplate = ({
    header,
    registrationCtaButtons
}) => {
    const headerTemplate = createHeaderTemplate(header);
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