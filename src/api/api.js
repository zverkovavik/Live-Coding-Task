export const getFaqQuestions = async () => {
    return await fetch('/questions.json');
}