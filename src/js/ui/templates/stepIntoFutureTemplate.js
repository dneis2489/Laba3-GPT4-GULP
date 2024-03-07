export const createInputsTemplate = (ctaButtons) => {
    return `
        <a href="" class="cta_buttons">
            <button class="cta_buttons__singin">
                ${ctaButtons.title}
            </button>
        </a>
    `
};

export const createHeaderTemplate = (header) => {
    return `
      <h1>
        ${header}
      </h1>
    `;
};


export const stepIntoFutureTemplate = ({
    header,
    stepIntoFutureCtaButtons
}) => {
    const headerTemplate = createHeaderTemplate(header);
    const buttonsTemplate = createInputsTemplate(stepIntoFutureCtaButtons);

    const resultTemplate = `
        ${headerTemplate}
        ${buttonsTemplate}
    `;

    return resultTemplate
}