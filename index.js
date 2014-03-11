/**
 * A lightweight promise-based Reddit API wrapper.
 * @module reddit-api
 */

/**
 * Module dependencies.
 */
var ajax = require('ajax-promise'),
    extend = require('extend');

exports = module.exports = Reddit;


/**
 * Main module object.
 * @constructor
 */
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
 * @see http://www.reddit.com/dev/api#POST_api_login
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
 * @param {string} urlId - ID36 of a URL.
 * @param {Object} data - Additional request data.
 * @see http://www.reddit.com/dev/api#GET_comments_{article}
 */
Reddit.prototype.getComments = function(urlId, data) {
    var r = this,
        apiUrl = r._baseApiUrl + '/r/' + r.subreddit + '/comments/' + urlId + '.json';

    return r._get(apiUrl, {}, data);
};


/**
 * Retrieves information about a Reddit "thing".
 *
 * @param {Object} data - Request data.
 * @see http://www.reddit.com/dev/api#GET_api_info
 */
Reddit.prototype.getInfo = function(data) {
    var r = this,
        apiUrl = r._baseApiUrl + '/api/info.json';

    return r._get(apiUrl, {}, data);
};


/**
 * Vote on a Reddit "thing" (e.g. comment, link, etc.).
 *
 * @param {string} thingId - The fullname of the "thing".
 * @param {number} dir - Vote direction. One of (-1, 0, 1).
 * @see http://www.reddit.com/dev/api#POST_api_vote
 */
Reddit.prototype.vote = function(thingId, dir, data) {
    var r = this,
        data = extend(data || {}, {id: thingId, dir: dir}),
        apiUrl = r._baseApiUrl + '/api/vote';

    return ajax.post(apiUrl, {}, data)
};


/**
 * Posts a comment on a Reddit "thing".
 *
 * @param {string} parentId - The
 *     {@link http://www.reddit.com/dev/api#fullnames fullname} of a parent
 *     "thing".
 * @param {string} text - The comment body.
 * @see http://www.reddit.com/dev/api#POST_api_comment
 */
Reddit.prototype.comment = function(parentId, text) {
};
