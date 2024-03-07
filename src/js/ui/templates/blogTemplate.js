export const createIllustrationTemplate = ({ src, alt }) => {
    return `
      <img src="${src}" alt="${alt}" />
    `;
};

export const createHeaderTemplate = (header) => {
    return `
      <h1 class="headder_section">
        ${header}
      </h1>
    `;
};

export const createHeaderNewsTemplate = (header) => {
    return `
      <h3 class="news_title">
        ${header}
      </h3>
    `;
};

export const createDateTemplate = (description) => {
    return `
      <p class="data">
        ${description}
      </p>
    `;
};

export const createLinkTemplate = ({ text, href }) => {
    return `
        <a class="full_article" href="${href}">
            ${text}
        </a>
    `;
};

export const createInputTemplate = ({ type, header, date, link, illustration }) => {
    switch (type) {
        case "main":
            const news = `
            <div class="main_news">
                ${createIllustrationTemplate(illustration)}
                <div class="content_main_news news">
                    ${createDateTemplate(date)}
                    ${createHeaderNewsTemplate(header)}
                    ${createLinkTemplate(link)}
                </div>
            </div>
            `;
            return news

        case "other":
            return `
            <div class="other_news">
                ${createIllustrationTemplate(illustration)}
                <div class="content_other_news news">
                    ${createDateTemplate(date)}
                    ${createHeaderNewsTemplate(header)}
                    ${createLinkTemplate(link)}
                </div>
            </div>
        `;
        default:
            return ``;
    }
};

export const createNewsTemplate = (mainAndOtherNews) => {
    const newsTemplate = mainAndOtherNews
        .map((news) => createInputTemplate(news));

    const mainNewsTemplates = newsTemplate.filter((template) => template.includes('class="main_news"')).join('');
    const otherNewsTemplates = newsTemplate.filter((template) => template.includes('class="other_news"')).join('');

    return { mainNewsTemplates, otherNewsTemplates };
};

export const blogTemplate = ({
    header,
    news
}) => {
    const headerTemplate = createHeaderTemplate(header);
    const { mainNewsTemplates, otherNewsTemplates } = createNewsTemplate(news);

    const resultTemplate = `
        ${headerTemplate}
        <div class="all_news">
            <div class="all_main_news">
                ${mainNewsTemplates}
            </div>
            <div class="all_other_news">
                ${otherNewsTemplates}
            </div>
        </div>
    `;

    return resultTemplate
}