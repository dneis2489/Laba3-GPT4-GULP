import { createH3Elements } from "./elements/SimpleElements/createH3Elements.js"
import { createPElements } from "./elements/SimpleElements/createPElements.js";
import { createAElements } from "./elements/SimpleElements/createAElements.js"


export const createContactsTemplate = ({ header, adress, phoneNumber, email }) => {
    const headerTemplate = createH3Elements(header, "contacts_header");
    const adressTemplate = createPElements(adress, "adress");
    const phoneNumberTemplate = createPElements(phoneNumber, "phone_number");
    const emailTemplate = createPElements(email, "email");

    const resultTemplate = `
    <div class="contacts columm_menu">
        ${headerTemplate}
        ${adressTemplate}
        ${phoneNumberTemplate}
        ${emailTemplate}
    </div>
    `
    return resultTemplate
}

export const createGPT3Template = ({ header, description }) => {
    const headerTemplate = createH3Elements(header, "gpt3_header");
    const descriptionTemplate = createPElements(description, "gpt3_description");
    const resultTemplate = `
        ${headerTemplate}
        ${descriptionTemplate}
    `

    return resultTemplate
}

export const createLinksTemplate = ({ header, linkElements }, className) => {
    const headerTemplate = createH3Elements(header, "link_list_header");
    const linksTemplate = linkElements
        .map((link) => createAElements(link, "link_elem")).join('');

    const result = `
        <div class="${className}">
            ${headerTemplate}
            ${linksTemplate}
        </div>
    `

    return result
}


export const footerTemplate = ({
    gpt3,
    link,
    company,
    contacts
}) => {
    const gpt3Template = createGPT3Template(gpt3);
    const linkTemplate = createLinksTemplate(link, "link columm_menu");
    const companyTemplate = createLinksTemplate(company, "company columm_menu");
    const contactsTemplate = createContactsTemplate(contacts);

    const resultTemplate = `
        <div class="gpt-3 columm_menu">
            ${gpt3Template}
        </div>
        <div class="footer_menu">
            ${linkTemplate}
            ${companyTemplate}
            ${contactsTemplate}
        </div>
    `;

    return resultTemplate
}