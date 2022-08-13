module.exports = function (req, res, next) {
	if (req.verifiedUser.isAdmin) {
		next();
	}
	return res.status(403).json({ message: "you are not an admin" });
};
