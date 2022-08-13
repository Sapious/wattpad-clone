const storyModel = require("../models/story.models");

const createStory = async (req, res) => {
	const newStory = new storyModel({
		title: req.body.title,
		description: req.body.description,
		cover: req.body.cover,
		categories: req.body.categories,
		tags: req.body.tags,
		rating: req.body.rating,
		language: req.body.language,
		targetAudience: req.body.targetAudience,
		author: req.verifiedUser._id,
	});
	try {
		const savedStory = await newStory.save();
		return res.status(201).json(savedStory);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getStories = async (req, res) => {
	try {
		const stories = await storyModel.find();
		return res.status(200).json(stories);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getStory = async (req, res) => {
	const story = req.story;
	try {
		return res.status(200).json(story);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const deleteStory = async (req, res) => {
	const story = req.story;
	try {
		const deletedStory = await storyModel.findByIdAndDelete(story._id);
		return res.status(200).json(deletedStory);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const updateStory = async (req, res) => {
	const story = req.story;
	try {
		const updatedStory = await storyModel.findByIdAndUpdate(
			story._id,
			req.body,
			{
				new: true,
			}
		);
		return res.status(200).json(updatedStory);
	} catch (err) {
		return res.status(500).json(err);
	}
};

module.exports.getStory = getStory;
module.exports.getStories = getStories;
module.exports.createStory = createStory;
module.exports.deleteStory = deleteStory;
module.exports.updateStory = updateStory;