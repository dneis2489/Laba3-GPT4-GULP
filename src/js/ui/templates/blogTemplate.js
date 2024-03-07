import { createH1Elements } from "./elements/SimpleElements/createH1Elements.js";
import { createNewsList } from "./elements/blogElements/createNewsList.js"


export const blogTemplate = ({
    header,
    news
}) => {
    const headerTemplate = createH1Elements(header, "headder_section");
    const { mainNewsTemplates, otherNewsTemplates } = createNewsList(news);

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