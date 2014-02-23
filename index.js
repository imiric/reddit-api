
exports = module.exports = Reddit;

function Reddit() {
    this.baseApiUrl = 'http://www.reddit.com';
    return this;
};


/**
 * Logs in a Reddit user.
 *
 * @param {string} username
 * @param {string} password
 */
Reddit.prototype.login = function(username, password) {
};


/**
 * Logs out a Reddit user.
 */
Reddit.prototype.logout = function() {
};


/**
 * Retrieves the comments associated with a URL.
 *
 * @param {string} url
 */
Reddit.prototype.getComments = function(url) {
};


/**
 * Posts a comment on a Reddit "thing".
 *
 * @param {string} parentId - The
 *     {@link http://www.reddit.com/dev/api#fullnames fullname} of a parent
 *     "thing".
 * @param {string} text - The comment body.
 * @link http://www.reddit.com/dev/api#POST_api_comment
 */
Reddit.prototype.comment = function(parentId, text) {
};
