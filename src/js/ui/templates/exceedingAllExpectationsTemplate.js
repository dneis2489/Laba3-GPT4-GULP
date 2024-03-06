export const createIllustrationTemplate = ({ src, alt }) => {
    return `
      <img src="${src}" alt="${alt}" />
    `;
};

export const createHeaderTemplate = (header) => {
    return `
      <h2 class="left__header">
        ${header}
      </h2>
    `;
};

export const createDescriptionTemplate = (description) => {
    return `
      <p class="container__content">
        ${description}
      </p>
    `;
};



export const exceedingAllExpectationsTemplate = ({
    illustration,
    header,
    description
}) => {
    const headerTemplate = createHeaderTemplate(header);
    const descriptionTemplate = createDescriptionTemplate(description);
    const illustrationTemplate = createIllustrationTemplate(illustration);

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