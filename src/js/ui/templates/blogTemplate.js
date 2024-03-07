import { createH1Elements } from "./elements/SimpleElements/createH1Elements.js";
import { createH3Elements } from "./elements/SimpleElements/createH3Elements.js"
import { createAElements } from "./elements/SimpleElements/createAElements.js"
import { createPElements } from "./elements/SimpleElements/createPElements.js";
import { createImgElements } from "./elements/SimpleElements/createImgElements.js";



export const createNewsCardTemplate = ({ type, header, date, link, illustration }) => {
    switch (type) {
        case "main":
            const news = `
            <div class="main_news">
                ${createImgElements(illustration, "blogMainNewsImg")}
                <div class="content_main_news news">
                    ${createPElements(date, "data")}
                    ${createH3Elements(header, "news_title")}
                    ${createAElements(link, "full_article")}

                </div>
            </div>
            `;
            return news

        case "other":
            return `
            <div class="other_news">
                ${createImgElements(illustration, "blogOtherNewsImg")}
                <div class="content_other_news news">
                    ${createPElements(date, "data")}
                    ${createH3Elements(header, "news_title")}
                    ${createAElements(link, "full_article")}
                </div>
            </div>
        `;
        default:
            return ``;
    }
};

export const createNewsListTemplate = (mainAndOtherNews) => {
    const newsTemplate = mainAndOtherNews
        .map((news) => createNewsCardTemplate(news));

    const mainNewsTemplates = newsTemplate.filter((template) => template.includes('class="main_news"')).join('');
    const otherNewsTemplates = newsTemplate.filter((template) => template.includes('class="other_news"')).join('');

    return { mainNewsTemplates, otherNewsTemplates };
};

export const blogTemplate = ({
    header,
    news
}) => {
    const headerTemplate = createH1Elements(header, "headder_section");
    const { mainNewsTemplates, otherNewsTemplates } = createNewsListTemplate(news);

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