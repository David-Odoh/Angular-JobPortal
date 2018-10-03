export class VacancyModel {
    _id: string;
    title: string;
    datePosted: string;
    avPositions: string;
    details: string;
    category: {
        categoryName: string,
        subcat: {
            subcatName: string,
        }
    };
    vacancyType: string;
    closingDate: string;
}