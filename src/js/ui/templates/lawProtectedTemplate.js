export const createLawProtectedTemplate = (description) => {
    return `
      <p>
        ${description}
      <p>
    `;
};

export const lawProtectedTemplate = ({
    description
}) => {
    const lawProtectedTemplate = createLawProtectedTemplate(description);

    const resultTemplate = `
        ${lawProtectedTemplate}
    `;

    return resultTemplate
}