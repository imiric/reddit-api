/**
 * A lightweight promise-based Reddit API wrapper.
 * @module reddit-api
 */

/**
 * Module dependencies.
 */
var ajax = require('ajax-promise');

exports = module.exports = Reddit;

function Reddit() {
    this._baseApiUrl = 'http://www.reddit.com';
    return this;
};


/**
 * Convenience wrapper over `Ajax.get`.
 *
 * @see {@link module:ajax-promise.index:Ajax}
 */
Reddit.prototype._get = function(url, options, data) {
    /* Convert data to query string */
    var qs = Object.keys(data || {}).reduce(
                function(a, k) {a.push(k + '=' + encodeURIComponent(data[k])); return a;},
                []).join('&'),
        url = url + (qs ? '?'+qs : '');

    return ajax.get(url, options);
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
