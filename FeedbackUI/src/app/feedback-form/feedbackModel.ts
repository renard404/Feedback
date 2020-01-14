export interface Feedback{
    companyName: string,
    projectName: string,
    willRecommend: Boolean,
    rating: number,
    wentWrong: {
        complaintsMentioned: Boolean,
        projectManager: Boolean,
        crew: Boolean,
        qualityOfWork: Boolean,
        speedAndDelivery: Boolean,
        pricing: Boolean,
        other: string
    }
}
