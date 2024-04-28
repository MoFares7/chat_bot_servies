const Answer = require('../models/answer');

class AnswerController {
        async createAnswer(req, res) {
                try {
                        const { questionId, text } = req.body;
                        const answer = await Answer.create({ questionId, text });
                        res.status(200).json(answer);
                } catch (error) {
                        res.status(500).json({ message: error.message });
                }
        }

        async getAllAnswer(req, res) {
                try {
                        const answers = await Answer.findAll();
                        res.status(200).json(answers);
                } catch (error) {
                        return res.status(500).json({ message: 'error in server' })
                }
        }

        async getAnswersByQuestionId(req, res) {
                try {
                        const { questionId } = req.query;
                        if (!questionId) {
                                return res.status(400).json({ message: "QuestionId parameter is required" });
                        }
                        const answers = await Answer.findAll({ where: { QuestionId: questionId } });
                        if (!answers || answers.length === 0) {
                                return res.status(200).json({ message: "No answers found for the provided QuestionId" });
                        }
                        res.status(200).json(answers);
                } catch (error) {
                        res.status(500).json({ message: error.message });
                }
        }

}

module.exports = new AnswerController();