import { createPElements } from "./elements/SimpleElements/createPElements.js";

export const lawProtectedTemplate = ({
  description
}) => {
  const lawProtectedTemplate = createPElements(description, "lawProtectedDescription");

  const resultTemplate = `
        ${lawProtectedTemplate}
    `;

  return resultTemplate
}