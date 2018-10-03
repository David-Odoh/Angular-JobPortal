export class IndividualVacancyModel {
    _id: string;
    groupVacancyId: string;
    iVacancyName: string;
    iApplicationcode: string;
    iLocation: string;
    iDurationOfContract: string;
    iNoOfPersons: string;
    iJobProfile: {
        name: string
    };
    iQaulifications: {
        name: string
    };
    iHowToApply: string;
    iExtraNote: {
        name: string
    }
}