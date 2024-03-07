export const createHeaderTemplate = (header) => {
    return `
      <h3>
        ${header}
      </h3>
    `;
};

export const createDescriptionTemplate = (description) => {
    return `
      <p>
        ${description}
      </p>
    `;
};

export const createContactsTemplate = ({ header, adress, phoneNumber, email }) => {
    const headerTemplate = createHeaderTemplate(header);
    const adressTemplate = createDescriptionTemplate(adress);
    const phoneNumberTemplate = createDescriptionTemplate(phoneNumber);
    const emailTemplate = createDescriptionTemplate(email);

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
    const headerTemplate = createHeaderTemplate(header);
    const descriptionTemplate = createDescriptionTemplate(description);
    const resultTemplate = `
        ${headerTemplate}
        ${descriptionTemplate}
    `

    return resultTemplate
}

export const createLinksTemplate = ({ header, linkElements }, className) => {
    const headerTemplate = createHeaderTemplate(header);
    const linksTemplate = linkElements
        .map((link) => createLinkList(link)).join('');

    const result = `
        <div class="${className}">
            ${headerTemplate}
            ${linksTemplate}
        </div>
    `

    return result
}

export const createLinkList = ({ href, title }) => {
    return `<a href="${href}" class="link_elem ">${title}</a>`
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