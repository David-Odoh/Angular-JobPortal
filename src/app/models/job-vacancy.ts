export class VacancyModel {
    _id: string;
    applicationCode: string;
    availablePositions: string;
    childOf: string;
    children: [{
        vacancyId: string,
        vacancyTitle: string,
    }];
    closingDate: string;
    createdAt: string;
    details: string;
    durationOfContract: string;
    extraNote: string;
    howToApply: string;
    howToApplyList: string[];
    location: string;
    requirementIntro: string;
    requirementList: string[];
    subcat: {
        subcatId: string,
        subcatName: string,
    }
    title: string;
    updatedAt: string;
    vacancyType: string;
}
