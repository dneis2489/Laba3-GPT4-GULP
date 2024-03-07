import { createH3Elements } from "../SimpleElements/createH3Elements.js"
import { createPElements } from "../SimpleElements/createPElements.js";

export const createGPT3 = ({ header, description }) => {
    const headerTemplate = createH3Elements(header, "gpt3_header");
    const descriptionTemplate = createPElements(description, "gpt3_description");
    const resultTemplate = `
        ${headerTemplate}
        ${descriptionTemplate}
    `

    return resultTemplate
}

export default createGPT3
