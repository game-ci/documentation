(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["functions"],{

/***/ "./node_modules/@firebase/functions/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/functions/dist/index.esm.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.esm.js");




/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Standard error codes for different ways a request can fail, as defined by:
 * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
 *
 * This map is used primarily to convert from a backend error code string to
 * a client SDK error code string, and make sure it's in the supported set.
 */
var errorCodeMap = {
    OK: 'ok',
    CANCELLED: 'cancelled',
    UNKNOWN: 'unknown',
    INVALID_ARGUMENT: 'invalid-argument',
    DEADLINE_EXCEEDED: 'deadline-exceeded',
    NOT_FOUND: 'not-found',
    ALREADY_EXISTS: 'already-exists',
    PERMISSION_DENIED: 'permission-denied',
    UNAUTHENTICATED: 'unauthenticated',
    RESOURCE_EXHAUSTED: 'resource-exhausted',
    FAILED_PRECONDITION: 'failed-precondition',
    ABORTED: 'aborted',
    OUT_OF_RANGE: 'out-of-range',
    UNIMPLEMENTED: 'unimplemented',
    INTERNAL: 'internal',
    UNAVAILABLE: 'unavailable',
    DATA_LOSS: 'data-loss'
};
/**
 * An explicit error that can be thrown from a handler to send an error to the
 * client that called the function.
 */
var HttpsErrorImpl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(HttpsErrorImpl, _super);
    function HttpsErrorImpl(code, message, details) {
        var _this = _super.call(this, message) || this;
        // This is a workaround for a bug in TypeScript when extending Error:
        // tslint:disable-next-line
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, HttpsErrorImpl.prototype);
        _this.code = code;
        _this.details = details;
        return _this;
    }
    return HttpsErrorImpl;
}(Error));
/**
 * Takes an HTTP status code and returns the corresponding ErrorCode.
 * This is the standard HTTP status code -> error mapping defined in:
 * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
 *
 * @param status An HTTP status code.
 * @return The corresponding ErrorCode, or ErrorCode.UNKNOWN if none.
 */
function codeForHTTPStatus(status) {
    // Make sure any successful status is OK.
    if (status >= 200 && status < 300) {
        return 'ok';
    }
    switch (status) {
        case 0:
            // This can happen if the server returns 500.
            return 'internal';
        case 400:
            return 'invalid-argument';
        case 401:
            return 'unauthenticated';
        case 403:
            return 'permission-denied';
        case 404:
            return 'not-found';
        case 409:
            return 'aborted';
        case 429:
            return 'resource-exhausted';
        case 499:
            return 'cancelled';
        case 500:
            return 'internal';
        case 501:
            return 'unimplemented';
        case 503:
            return 'unavailable';
        case 504:
            return 'deadline-exceeded';
    }
    return 'unknown';
}
/**
 * Takes an HTTP response and returns the corresponding Error, if any.
 */
function _errorForResponse(status, bodyJSON, serializer) {
    var code = codeForHTTPStatus(status);
    // Start with reasonable defaults from the status code.
    var description = code;
    var details = undefined;
    // Then look through the body for explicit details.
    try {
        var errorJSON = bodyJSON && bodyJSON.error;
        if (errorJSON) {
            var status_1 = errorJSON.status;
            if (typeof status_1 === 'string') {
                if (!errorCodeMap[status_1]) {
                    // They must've included an unknown error code in the body.
                    return new HttpsErrorImpl('internal', 'internal');
                }
                code = errorCodeMap[status_1];
                // TODO(klimt): Add better default descriptions for error enums.
                // The default description needs to be updated for the new code.
                description = status_1;
            }
            var message = errorJSON.message;
            if (typeof message === 'string') {
                description = message;
            }
            details = errorJSON.details;
            if (details !== undefined) {
                details = serializer.decode(details);
            }
        }
    }
    catch (e) {
        // If we couldn't parse explicit error data, that's fine.
    }
    if (code === 'ok') {
        // Technically, there's an edge case where a developer could explicitly
        // return an error code of OK, and we will treat it as success, but that
        // seems reasonable.
        return null;
    }
    return new HttpsErrorImpl(code, description, details);
}

/**
 * Helper class to get metadata that should be included with a function call.
 */
var ContextProvider = /** @class */ (function () {
    function ContextProvider(authProvider, messagingProvider) {
        var _this = this;
        this.auth = null;
        this.messaging = null;
        this.auth = authProvider.getImmediate({ optional: true });
        this.messaging = messagingProvider.getImmediate({
            optional: true
        });
        if (!this.auth) {
            authProvider.get().then(function (auth) { return (_this.auth = auth); }, function () {
                /* get() never rejects */
            });
        }
        if (!this.messaging) {
            messagingProvider.get().then(function (messaging) { return (_this.messaging = messaging); }, function () {
                /* get() never rejects */
            });
        }
    }
    ContextProvider.prototype.getAuthToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var token, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.auth) {
                            return [2 /*return*/, undefined];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auth.getToken()];
                    case 2:
                        token = _a.sent();
                        if (!token) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, token.accessToken];
                    case 3:
                        e_1 = _a.sent();
                        // If there's any error when trying to get the auth token, leave it off.
                        return [2 /*return*/, undefined];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ContextProvider.prototype.getInstanceIdToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (!this.messaging ||
                    !('Notification' in self) ||
                    Notification.permission !== 'granted') {
                    return [2 /*return*/, undefined];
                }
                try {
                    return [2 /*return*/, this.messaging.getToken()];
                }
                catch (e) {
                    // We don't warn on this, because it usually means messaging isn't set up.
                    // console.warn('Failed to retrieve instance id token.', e);
                    // If there's any error when trying to get the token, leave it off.
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/];
            });
        });
    };
    ContextProvider.prototype.getContext = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var authToken, instanceIdToken;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAuthToken()];
                    case 1:
                        authToken = _a.sent();
                        return [4 /*yield*/, this.getInstanceIdToken()];
                    case 2:
                        instanceIdToken = _a.sent();
                        return [2 /*return*/, { authToken: authToken, instanceIdToken: instanceIdToken }];
                }
            });
        });
    };
    return ContextProvider;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LONG_TYPE = 'type.googleapis.com/google.protobuf.Int64Value';
var UNSIGNED_LONG_TYPE = 'type.googleapis.com/google.protobuf.UInt64Value';
function mapValues(
// { [k: string]: unknown } is no longer a wildcard assignment target after typescript 3.5
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o, f) {
    var result = {};
    for (var key in o) {
        if (o.hasOwnProperty(key)) {
            result[key] = f(o[key]);
        }
    }
    return result;
}
var Serializer = /** @class */ (function () {
    function Serializer() {
    }
    // Takes data and encodes it in a JSON-friendly way, such that types such as
    // Date are preserved.
    Serializer.prototype.encode = function (data) {
        var _this = this;
        if (data == null) {
            return null;
        }
        if (data instanceof Number) {
            data = data.valueOf();
        }
        if (typeof data === 'number' && isFinite(data)) {
            // Any number in JS is safe to put directly in JSON and parse as a double
            // without any loss of precision.
            return data;
        }
        if (data === true || data === false) {
            return data;
        }
        if (Object.prototype.toString.call(data) === '[object String]') {
            return data;
        }
        if (Array.isArray(data)) {
            return data.map(function (x) { return _this.encode(x); });
        }
        if (typeof data === 'function' || typeof data === 'object') {
            return mapValues(data, function (x) { return _this.encode(x); });
        }
        // If we got this far, the data is not encodable.
        throw new Error('Data cannot be encoded in JSON: ' + data);
    };
    // Takes data that's been encoded in a JSON-friendly form and returns a form
    // with richer datatypes, such as Dates, etc.
    Serializer.prototype.decode = function (json) {
        var _this = this;
        if (json == null) {
            return json;
        }
        if (json['@type']) {
            switch (json['@type']) {
                case LONG_TYPE:
                // Fall through and handle this the same as unsigned.
                case UNSIGNED_LONG_TYPE: {
                    // Technically, this could work return a valid number for malformed
                    // data if there was a number followed by garbage. But it's just not
                    // worth all the extra code to detect that case.
                    var value = Number(json['value']);
                    if (isNaN(value)) {
                        throw new Error('Data cannot be decoded from JSON: ' + json);
                    }
                    return value;
                }
                default: {
                    throw new Error('Data cannot be decoded from JSON: ' + json);
                }
            }
        }
        if (Array.isArray(json)) {
            return json.map(function (x) { return _this.decode(x); });
        }
        if (typeof json === 'function' || typeof json === 'object') {
            return mapValues(json, function (x) { return _this.decode(x); });
        }
        // Anything else is safe to return.
        return json;
    };
    return Serializer;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a Promise that will be rejected after the given duration.
 * The error will be of type HttpsErrorImpl.
 *
 * @param millis Number of milliseconds to wait before rejecting.
 */
function failAfter(millis) {
    var timer;
    var promise = new Promise(function (_, reject) {
        timer = setTimeout(function () {
            reject(new HttpsErrorImpl('deadline-exceeded', 'deadline-exceeded'));
        }, millis);
    });
    return {
        timer: timer,
        promise: promise
    };
}
/**
 * The main class for the Firebase Functions SDK.
 */
var Service = /** @class */ (function () {
    /**
     * Creates a new Functions service for the given app and (optional) region or custom domain.
     * @param app_ The FirebaseApp to use.
     * @param regionOrCustomDomain_ one of:
     *   a) A region to call functions from, such as us-central1
     *   b) A custom domain to use as a functions prefix, such as https://mydomain.com
     */
    function Service(app_, authProvider, messagingProvider, regionOrCustomDomain_, fetchImpl) {
        var _this = this;
        if (regionOrCustomDomain_ === void 0) { regionOrCustomDomain_ = 'us-central1'; }
        this.app_ = app_;
        this.fetchImpl = fetchImpl;
        this.serializer = new Serializer();
        this.emulatorOrigin = null;
        this.INTERNAL = {
            delete: function () {
                return Promise.resolve(_this.deleteService());
            }
        };
        this.contextProvider = new ContextProvider(authProvider, messagingProvider);
        // Cancels all ongoing requests when resolved.
        this.cancelAllRequests = new Promise(function (resolve) {
            _this.deleteService = function () {
                return resolve();
            };
        });
        // Resolve the region or custom domain overload by attempting to parse it.
        try {
            var url = new URL(regionOrCustomDomain_);
            this.customDomain = url.origin;
            this.region = 'us-central1';
        }
        catch (e) {
            this.customDomain = null;
            this.region = regionOrCustomDomain_;
        }
    }
    Object.defineProperty(Service.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the URL for a callable with the given name.
     * @param name The name of the callable.
     */
    Service.prototype._url = function (name) {
        var projectId = this.app_.options.projectId;
        if (this.emulatorOrigin !== null) {
            var origin_1 = this.emulatorOrigin;
            return origin_1 + "/" + projectId + "/" + this.region + "/" + name;
        }
        if (this.customDomain !== null) {
            return this.customDomain + "/" + name;
        }
        return "https://" + this.region + "-" + projectId + ".cloudfunctions.net/" + name;
    };
    /**
     * Modify this instance to communicate with the Cloud Functions emulator.
     *
     * Note: this must be called before this instance has been used to do any operations.
     *
     * @param host The emulator host (ex: localhost)
     * @param port The emulator port (ex: 5001)
     */
    Service.prototype.useEmulator = function (host, port) {
        this.emulatorOrigin = "http://" + host + ":" + port;
    };
    /**
     * Changes this instance to point to a Cloud Functions emulator running
     * locally. See https://firebase.google.com/docs/functions/local-emulator
     *
     * @deprecated Prefer the useEmulator(host, port) method.
     * @param origin The origin of the local emulator, such as
     * "http://localhost:5005".
     */
    Service.prototype.useFunctionsEmulator = function (origin) {
        this.emulatorOrigin = origin;
    };
    /**
     * Returns a reference to the callable https trigger with the given name.
     * @param name The name of the trigger.
     */
    Service.prototype.httpsCallable = function (name, options) {
        var _this = this;
        return function (data) {
            return _this.call(name, data, options || {});
        };
    };
    /**
     * Does an HTTP POST and returns the completed response.
     * @param url The url to post to.
     * @param body The JSON body of the post.
     * @param headers The HTTP headers to include in the request.
     * @return A Promise that will succeed when the request finishes.
     */
    Service.prototype.postJSON = function (url, body, headers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var response, e_1, json, e_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers['Content-Type'] = 'application/json';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fetchImpl(url, {
                                method: 'POST',
                                body: JSON.stringify(body),
                                headers: headers
                            })];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        // This could be an unhandled error on the backend, or it could be a
                        // network error. There's no way to know, since an unhandled error on the
                        // backend will fail to set the proper CORS header, and thus will be
                        // treated as a network error by fetch.
                        return [2 /*return*/, {
                                status: 0,
                                json: null
                            }];
                    case 4:
                        json = null;
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, response.json()];
                    case 6:
                        json = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_2 = _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/, {
                            status: response.status,
                            json: json
                        }];
                }
            });
        });
    };
    /**
     * Calls a callable function asynchronously and returns the result.
     * @param name The name of the callable trigger.
     * @param data The data to pass as params to the function.s
     */
    Service.prototype.call = function (name, data, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var url, body, headers, context, timeout, _a, timer, failAfterPromise, response, error, responseData, decodedData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = this._url(name);
                        // Encode any special types, such as dates, in the input data.
                        data = this.serializer.encode(data);
                        body = { data: data };
                        headers = {};
                        return [4 /*yield*/, this.contextProvider.getContext()];
                    case 1:
                        context = _b.sent();
                        if (context.authToken) {
                            headers['Authorization'] = 'Bearer ' + context.authToken;
                        }
                        if (context.instanceIdToken) {
                            headers['Firebase-Instance-ID-Token'] = context.instanceIdToken;
                        }
                        timeout = options.timeout || 70000;
                        _a = failAfter(timeout), timer = _a.timer, failAfterPromise = _a.promise;
                        return [4 /*yield*/, Promise.race([
                                clearTimeoutWrapper(timer, this.postJSON(url, body, headers)),
                                failAfterPromise,
                                clearTimeoutWrapper(timer, this.cancelAllRequests)
                            ])];
                    case 2:
                        response = _b.sent();
                        // If service was deleted, interrupted response throws an error.
                        if (!response) {
                            throw new HttpsErrorImpl('cancelled', 'Firebase Functions instance was deleted.');
                        }
                        error = _errorForResponse(response.status, response.json, this.serializer);
                        if (error) {
                            throw error;
                        }
                        if (!response.json) {
                            throw new HttpsErrorImpl('internal', 'Response is not valid JSON object.');
                        }
                        responseData = response.json.data;
                        // TODO(klimt): For right now, allow "result" instead of "data", for
                        // backwards compatibility.
                        if (typeof responseData === 'undefined') {
                            responseData = response.json.result;
                        }
                        if (typeof responseData === 'undefined') {
                            // Consider the response malformed.
                            throw new HttpsErrorImpl('internal', 'Response is missing data field.');
                        }
                        decodedData = this.serializer.decode(responseData);
                        return [2 /*return*/, { data: decodedData }];
                }
            });
        });
    };
    return Service;
}());
function clearTimeoutWrapper(timer, promise) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var result;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promise];
                case 1:
                    result = _a.sent();
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    clearTimeout(timer);
                    return [2 /*return*/, result];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Functions.
 */
var FUNCTIONS_TYPE = 'functions';
function registerFunctions(instance, fetchImpl) {
    var namespaceExports = {
        // no-inline
        Functions: Service
    };
    function factory(container, regionOrCustomDomain) {
        // Dependencies
        var app = container.getProvider('app').getImmediate();
        var authProvider = container.getProvider('auth-internal');
        var messagingProvider = container.getProvider('messaging');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new Service(app, authProvider, messagingProvider, regionOrCustomDomain, fetchImpl);
    }
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](FUNCTIONS_TYPE, factory, "PUBLIC" /* PUBLIC */)
        .setServiceProps(namespaceExports)
        .setMultipleInstances(true));
}

var name = "@firebase/functions";
var version = "0.6.2";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerFunctions(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"], fetch.bind(self));
_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].registerVersion(name, version);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/functions/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/functions/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/functions */ "./node_modules/@firebase/functions/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9mdW5jdGlvbnMvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9mdW5jdGlvbnMvZGlzdC9pbmRleC5lc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ3FCO0FBQ1Y7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDZEQUFTO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFRO0FBQzFCLHFEQUFRO0FBQ1I7Ozs7Ozs7Ozs7Ozs7QUN6cEJBO0FBQUE7QUFBNkI7QUFDN0IiLCJmaWxlIjoic3RhdGljL2NodW5rcy9mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBfX2V4dGVuZHMsIF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFN0YW5kYXJkIGVycm9yIGNvZGVzIGZvciBkaWZmZXJlbnQgd2F5cyBhIHJlcXVlc3QgY2FuIGZhaWwsIGFzIGRlZmluZWQgYnk6XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGVhcGlzL2dvb2dsZWFwaXMvYmxvYi9tYXN0ZXIvZ29vZ2xlL3JwYy9jb2RlLnByb3RvXHJcbiAqXHJcbiAqIFRoaXMgbWFwIGlzIHVzZWQgcHJpbWFyaWx5IHRvIGNvbnZlcnQgZnJvbSBhIGJhY2tlbmQgZXJyb3IgY29kZSBzdHJpbmcgdG9cclxuICogYSBjbGllbnQgU0RLIGVycm9yIGNvZGUgc3RyaW5nLCBhbmQgbWFrZSBzdXJlIGl0J3MgaW4gdGhlIHN1cHBvcnRlZCBzZXQuXHJcbiAqL1xyXG52YXIgZXJyb3JDb2RlTWFwID0ge1xyXG4gICAgT0s6ICdvaycsXHJcbiAgICBDQU5DRUxMRUQ6ICdjYW5jZWxsZWQnLFxyXG4gICAgVU5LTk9XTjogJ3Vua25vd24nLFxyXG4gICAgSU5WQUxJRF9BUkdVTUVOVDogJ2ludmFsaWQtYXJndW1lbnQnLFxyXG4gICAgREVBRExJTkVfRVhDRUVERUQ6ICdkZWFkbGluZS1leGNlZWRlZCcsXHJcbiAgICBOT1RfRk9VTkQ6ICdub3QtZm91bmQnLFxyXG4gICAgQUxSRUFEWV9FWElTVFM6ICdhbHJlYWR5LWV4aXN0cycsXHJcbiAgICBQRVJNSVNTSU9OX0RFTklFRDogJ3Blcm1pc3Npb24tZGVuaWVkJyxcclxuICAgIFVOQVVUSEVOVElDQVRFRDogJ3VuYXV0aGVudGljYXRlZCcsXHJcbiAgICBSRVNPVVJDRV9FWEhBVVNURUQ6ICdyZXNvdXJjZS1leGhhdXN0ZWQnLFxyXG4gICAgRkFJTEVEX1BSRUNPTkRJVElPTjogJ2ZhaWxlZC1wcmVjb25kaXRpb24nLFxyXG4gICAgQUJPUlRFRDogJ2Fib3J0ZWQnLFxyXG4gICAgT1VUX09GX1JBTkdFOiAnb3V0LW9mLXJhbmdlJyxcclxuICAgIFVOSU1QTEVNRU5URUQ6ICd1bmltcGxlbWVudGVkJyxcclxuICAgIElOVEVSTkFMOiAnaW50ZXJuYWwnLFxyXG4gICAgVU5BVkFJTEFCTEU6ICd1bmF2YWlsYWJsZScsXHJcbiAgICBEQVRBX0xPU1M6ICdkYXRhLWxvc3MnXHJcbn07XHJcbi8qKlxyXG4gKiBBbiBleHBsaWNpdCBlcnJvciB0aGF0IGNhbiBiZSB0aHJvd24gZnJvbSBhIGhhbmRsZXIgdG8gc2VuZCBhbiBlcnJvciB0byB0aGVcclxuICogY2xpZW50IHRoYXQgY2FsbGVkIHRoZSBmdW5jdGlvbi5cclxuICovXHJcbnZhciBIdHRwc0Vycm9ySW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhIdHRwc0Vycm9ySW1wbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEh0dHBzRXJyb3JJbXBsKGNvZGUsIG1lc3NhZ2UsIGRldGFpbHMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciBhIGJ1ZyBpbiBUeXBlU2NyaXB0IHdoZW4gZXh0ZW5kaW5nIEVycm9yOlxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBIdHRwc0Vycm9ySW1wbC5wcm90b3R5cGUpO1xyXG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIF90aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBIdHRwc0Vycm9ySW1wbDtcclxufShFcnJvcikpO1xyXG4vKipcclxuICogVGFrZXMgYW4gSFRUUCBzdGF0dXMgY29kZSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBFcnJvckNvZGUuXHJcbiAqIFRoaXMgaXMgdGhlIHN0YW5kYXJkIEhUVFAgc3RhdHVzIGNvZGUgLT4gZXJyb3IgbWFwcGluZyBkZWZpbmVkIGluOlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlYXBpcy9nb29nbGVhcGlzL2Jsb2IvbWFzdGVyL2dvb2dsZS9ycGMvY29kZS5wcm90b1xyXG4gKlxyXG4gKiBAcGFyYW0gc3RhdHVzIEFuIEhUVFAgc3RhdHVzIGNvZGUuXHJcbiAqIEByZXR1cm4gVGhlIGNvcnJlc3BvbmRpbmcgRXJyb3JDb2RlLCBvciBFcnJvckNvZGUuVU5LTk9XTiBpZiBub25lLlxyXG4gKi9cclxuZnVuY3Rpb24gY29kZUZvckhUVFBTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICAvLyBNYWtlIHN1cmUgYW55IHN1Y2Nlc3NmdWwgc3RhdHVzIGlzIE9LLlxyXG4gICAgaWYgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgcmV0dXJuICdvayc7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHRoZSBzZXJ2ZXIgcmV0dXJucyA1MDAuXHJcbiAgICAgICAgICAgIHJldHVybiAnaW50ZXJuYWwnO1xyXG4gICAgICAgIGNhc2UgNDAwOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2ludmFsaWQtYXJndW1lbnQnO1xyXG4gICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICByZXR1cm4gJ3VuYXV0aGVudGljYXRlZCc7XHJcbiAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgIHJldHVybiAncGVybWlzc2lvbi1kZW5pZWQnO1xyXG4gICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ25vdC1mb3VuZCc7XHJcbiAgICAgICAgY2FzZSA0MDk6XHJcbiAgICAgICAgICAgIHJldHVybiAnYWJvcnRlZCc7XHJcbiAgICAgICAgY2FzZSA0Mjk6XHJcbiAgICAgICAgICAgIHJldHVybiAncmVzb3VyY2UtZXhoYXVzdGVkJztcclxuICAgICAgICBjYXNlIDQ5OTpcclxuICAgICAgICAgICAgcmV0dXJuICdjYW5jZWxsZWQnO1xyXG4gICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2ludGVybmFsJztcclxuICAgICAgICBjYXNlIDUwMTpcclxuICAgICAgICAgICAgcmV0dXJuICd1bmltcGxlbWVudGVkJztcclxuICAgICAgICBjYXNlIDUwMzpcclxuICAgICAgICAgICAgcmV0dXJuICd1bmF2YWlsYWJsZSc7XHJcbiAgICAgICAgY2FzZSA1MDQ6XHJcbiAgICAgICAgICAgIHJldHVybiAnZGVhZGxpbmUtZXhjZWVkZWQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICd1bmtub3duJztcclxufVxyXG4vKipcclxuICogVGFrZXMgYW4gSFRUUCByZXNwb25zZSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBFcnJvciwgaWYgYW55LlxyXG4gKi9cclxuZnVuY3Rpb24gX2Vycm9yRm9yUmVzcG9uc2Uoc3RhdHVzLCBib2R5SlNPTiwgc2VyaWFsaXplcikge1xyXG4gICAgdmFyIGNvZGUgPSBjb2RlRm9ySFRUUFN0YXR1cyhzdGF0dXMpO1xyXG4gICAgLy8gU3RhcnQgd2l0aCByZWFzb25hYmxlIGRlZmF1bHRzIGZyb20gdGhlIHN0YXR1cyBjb2RlLlxyXG4gICAgdmFyIGRlc2NyaXB0aW9uID0gY29kZTtcclxuICAgIHZhciBkZXRhaWxzID0gdW5kZWZpbmVkO1xyXG4gICAgLy8gVGhlbiBsb29rIHRocm91Z2ggdGhlIGJvZHkgZm9yIGV4cGxpY2l0IGRldGFpbHMuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBlcnJvckpTT04gPSBib2R5SlNPTiAmJiBib2R5SlNPTi5lcnJvcjtcclxuICAgICAgICBpZiAoZXJyb3JKU09OKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNfMSA9IGVycm9ySlNPTi5zdGF0dXM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzXzEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yQ29kZU1hcFtzdGF0dXNfMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGV5IG11c3QndmUgaW5jbHVkZWQgYW4gdW5rbm93biBlcnJvciBjb2RlIGluIHRoZSBib2R5LlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSHR0cHNFcnJvckltcGwoJ2ludGVybmFsJywgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gZXJyb3JDb2RlTWFwW3N0YXR1c18xXTtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oa2xpbXQpOiBBZGQgYmV0dGVyIGRlZmF1bHQgZGVzY3JpcHRpb25zIGZvciBlcnJvciBlbnVtcy5cclxuICAgICAgICAgICAgICAgIC8vIFRoZSBkZWZhdWx0IGRlc2NyaXB0aW9uIG5lZWRzIHRvIGJlIHVwZGF0ZWQgZm9yIHRoZSBuZXcgY29kZS5cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gc3RhdHVzXzE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBlcnJvckpTT04ubWVzc2FnZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRldGFpbHMgPSBlcnJvckpTT04uZGV0YWlscztcclxuICAgICAgICAgICAgaWYgKGRldGFpbHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlscyA9IHNlcmlhbGl6ZXIuZGVjb2RlKGRldGFpbHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBJZiB3ZSBjb3VsZG4ndCBwYXJzZSBleHBsaWNpdCBlcnJvciBkYXRhLCB0aGF0J3MgZmluZS5cclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAnb2snKSB7XHJcbiAgICAgICAgLy8gVGVjaG5pY2FsbHksIHRoZXJlJ3MgYW4gZWRnZSBjYXNlIHdoZXJlIGEgZGV2ZWxvcGVyIGNvdWxkIGV4cGxpY2l0bHlcclxuICAgICAgICAvLyByZXR1cm4gYW4gZXJyb3IgY29kZSBvZiBPSywgYW5kIHdlIHdpbGwgdHJlYXQgaXQgYXMgc3VjY2VzcywgYnV0IHRoYXRcclxuICAgICAgICAvLyBzZWVtcyByZWFzb25hYmxlLlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBIdHRwc0Vycm9ySW1wbChjb2RlLCBkZXNjcmlwdGlvbiwgZGV0YWlscyk7XHJcbn1cblxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyB0byBnZXQgbWV0YWRhdGEgdGhhdCBzaG91bGQgYmUgaW5jbHVkZWQgd2l0aCBhIGZ1bmN0aW9uIGNhbGwuXHJcbiAqL1xyXG52YXIgQ29udGV4dFByb3ZpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29udGV4dFByb3ZpZGVyKGF1dGhQcm92aWRlciwgbWVzc2FnaW5nUHJvdmlkZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGhQcm92aWRlci5nZXRJbW1lZGlhdGUoeyBvcHRpb25hbDogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2luZyA9IG1lc3NhZ2luZ1Byb3ZpZGVyLmdldEltbWVkaWF0ZSh7XHJcbiAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF1dGgpIHtcclxuICAgICAgICAgICAgYXV0aFByb3ZpZGVyLmdldCgpLnRoZW4oZnVuY3Rpb24gKGF1dGgpIHsgcmV0dXJuIChfdGhpcy5hdXRoID0gYXV0aCk7IH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8qIGdldCgpIG5ldmVyIHJlamVjdHMgKi9cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdpbmcpIHtcclxuICAgICAgICAgICAgbWVzc2FnaW5nUHJvdmlkZXIuZ2V0KCkudGhlbihmdW5jdGlvbiAobWVzc2FnaW5nKSB7IHJldHVybiAoX3RoaXMubWVzc2FnaW5nID0gbWVzc2FnaW5nKTsgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLyogZ2V0KCkgbmV2ZXIgcmVqZWN0cyAqL1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDb250ZXh0UHJvdmlkZXIucHJvdG90eXBlLmdldEF1dGhUb2tlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiwgZV8xO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXV0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHVuZGVmaW5lZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hdXRoLmdldFRva2VuKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB1bmRlZmluZWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0b2tlbi5hY2Nlc3NUb2tlbl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYW55IGVycm9yIHdoZW4gdHJ5aW5nIHRvIGdldCB0aGUgYXV0aCB0b2tlbiwgbGVhdmUgaXQgb2ZmLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdW5kZWZpbmVkXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29udGV4dFByb3ZpZGVyLnByb3RvdHlwZS5nZXRJbnN0YW5jZUlkVG9rZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWVzc2FnaW5nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgISgnTm90aWZpY2F0aW9uJyBpbiBzZWxmKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdW5kZWZpbmVkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMubWVzc2FnaW5nLmdldFRva2VuKCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB3YXJuIG9uIHRoaXMsIGJlY2F1c2UgaXQgdXN1YWxseSBtZWFucyBtZXNzYWdpbmcgaXNuJ3Qgc2V0IHVwLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignRmFpbGVkIHRvIHJldHJpZXZlIGluc3RhbmNlIGlkIHRva2VuLicsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYW55IGVycm9yIHdoZW4gdHJ5aW5nIHRvIGdldCB0aGUgdG9rZW4sIGxlYXZlIGl0IG9mZi5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdW5kZWZpbmVkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29udGV4dFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGF1dGhUb2tlbiwgaW5zdGFuY2VJZFRva2VuO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldEF1dGhUb2tlbigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhUb2tlbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRJbnN0YW5jZUlkVG9rZW4oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkVG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7IGF1dGhUb2tlbjogYXV0aFRva2VuLCBpbnN0YW5jZUlkVG9rZW46IGluc3RhbmNlSWRUb2tlbiB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbnRleHRQcm92aWRlcjtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIExPTkdfVFlQRSA9ICd0eXBlLmdvb2dsZWFwaXMuY29tL2dvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlJztcclxudmFyIFVOU0lHTkVEX0xPTkdfVFlQRSA9ICd0eXBlLmdvb2dsZWFwaXMuY29tL2dvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZSc7XHJcbmZ1bmN0aW9uIG1hcFZhbHVlcyhcclxuLy8geyBbazogc3RyaW5nXTogdW5rbm93biB9IGlzIG5vIGxvbmdlciBhIHdpbGRjYXJkIGFzc2lnbm1lbnQgdGFyZ2V0IGFmdGVyIHR5cGVzY3JpcHQgMy41XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbm8sIGYpIHtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGZvciAodmFyIGtleSBpbiBvKSB7XHJcbiAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGYob1trZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbnZhciBTZXJpYWxpemVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2VyaWFsaXplcigpIHtcclxuICAgIH1cclxuICAgIC8vIFRha2VzIGRhdGEgYW5kIGVuY29kZXMgaXQgaW4gYSBKU09OLWZyaWVuZGx5IHdheSwgc3VjaCB0aGF0IHR5cGVzIHN1Y2ggYXNcclxuICAgIC8vIERhdGUgYXJlIHByZXNlcnZlZC5cclxuICAgIFNlcmlhbGl6ZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE51bWJlcikge1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YS52YWx1ZU9mKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUoZGF0YSkpIHtcclxuICAgICAgICAgICAgLy8gQW55IG51bWJlciBpbiBKUyBpcyBzYWZlIHRvIHB1dCBkaXJlY3RseSBpbiBKU09OIGFuZCBwYXJzZSBhcyBhIGRvdWJsZVxyXG4gICAgICAgICAgICAvLyB3aXRob3V0IGFueSBsb3NzIG9mIHByZWNpc2lvbi5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhID09PSB0cnVlIHx8IGRhdGEgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpID09PSAnW29iamVjdCBTdHJpbmddJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBfdGhpcy5lbmNvZGUoeCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBWYWx1ZXMoZGF0YSwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIF90aGlzLmVuY29kZSh4KTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIHdlIGdvdCB0aGlzIGZhciwgdGhlIGRhdGEgaXMgbm90IGVuY29kYWJsZS5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgY2Fubm90IGJlIGVuY29kZWQgaW4gSlNPTjogJyArIGRhdGEpO1xyXG4gICAgfTtcclxuICAgIC8vIFRha2VzIGRhdGEgdGhhdCdzIGJlZW4gZW5jb2RlZCBpbiBhIEpTT04tZnJpZW5kbHkgZm9ybSBhbmQgcmV0dXJucyBhIGZvcm1cclxuICAgIC8vIHdpdGggcmljaGVyIGRhdGF0eXBlcywgc3VjaCBhcyBEYXRlcywgZXRjLlxyXG4gICAgU2VyaWFsaXplci5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChqc29uID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqc29uWydAdHlwZSddKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoanNvblsnQHR5cGUnXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMT05HX1RZUEU6XHJcbiAgICAgICAgICAgICAgICAvLyBGYWxsIHRocm91Z2ggYW5kIGhhbmRsZSB0aGlzIHRoZSBzYW1lIGFzIHVuc2lnbmVkLlxyXG4gICAgICAgICAgICAgICAgY2FzZSBVTlNJR05FRF9MT05HX1RZUEU6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUZWNobmljYWxseSwgdGhpcyBjb3VsZCB3b3JrIHJldHVybiBhIHZhbGlkIG51bWJlciBmb3IgbWFsZm9ybWVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGF0YSBpZiB0aGVyZSB3YXMgYSBudW1iZXIgZm9sbG93ZWQgYnkgZ2FyYmFnZS4gQnV0IGl0J3MganVzdCBub3RcclxuICAgICAgICAgICAgICAgICAgICAvLyB3b3J0aCBhbGwgdGhlIGV4dHJhIGNvZGUgdG8gZGV0ZWN0IHRoYXQgY2FzZS5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBOdW1iZXIoanNvblsndmFsdWUnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgY2Fubm90IGJlIGRlY29kZWQgZnJvbSBKU09OOiAnICsganNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgY2Fubm90IGJlIGRlY29kZWQgZnJvbSBKU09OOiAnICsganNvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpzb24ubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBfdGhpcy5kZWNvZGUoeCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGpzb24gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBWYWx1ZXMoanNvbiwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIF90aGlzLmRlY29kZSh4KTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFueXRoaW5nIGVsc2UgaXMgc2FmZSB0byByZXR1cm4uXHJcbiAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlcmlhbGl6ZXI7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVqZWN0ZWQgYWZ0ZXIgdGhlIGdpdmVuIGR1cmF0aW9uLlxyXG4gKiBUaGUgZXJyb3Igd2lsbCBiZSBvZiB0eXBlIEh0dHBzRXJyb3JJbXBsLlxyXG4gKlxyXG4gKiBAcGFyYW0gbWlsbGlzIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgcmVqZWN0aW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZmFpbEFmdGVyKG1pbGxpcykge1xyXG4gICAgdmFyIHRpbWVyO1xyXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoXywgcmVqZWN0KSB7XHJcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBIdHRwc0Vycm9ySW1wbCgnZGVhZGxpbmUtZXhjZWVkZWQnLCAnZGVhZGxpbmUtZXhjZWVkZWQnKSk7XHJcbiAgICAgICAgfSwgbWlsbGlzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lcjogdGltZXIsXHJcbiAgICAgICAgcHJvbWlzZTogcHJvbWlzZVxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogVGhlIG1haW4gY2xhc3MgZm9yIHRoZSBGaXJlYmFzZSBGdW5jdGlvbnMgU0RLLlxyXG4gKi9cclxudmFyIFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgRnVuY3Rpb25zIHNlcnZpY2UgZm9yIHRoZSBnaXZlbiBhcHAgYW5kIChvcHRpb25hbCkgcmVnaW9uIG9yIGN1c3RvbSBkb21haW4uXHJcbiAgICAgKiBAcGFyYW0gYXBwXyBUaGUgRmlyZWJhc2VBcHAgdG8gdXNlLlxyXG4gICAgICogQHBhcmFtIHJlZ2lvbk9yQ3VzdG9tRG9tYWluXyBvbmUgb2Y6XHJcbiAgICAgKiAgIGEpIEEgcmVnaW9uIHRvIGNhbGwgZnVuY3Rpb25zIGZyb20sIHN1Y2ggYXMgdXMtY2VudHJhbDFcclxuICAgICAqICAgYikgQSBjdXN0b20gZG9tYWluIHRvIHVzZSBhcyBhIGZ1bmN0aW9ucyBwcmVmaXgsIHN1Y2ggYXMgaHR0cHM6Ly9teWRvbWFpbi5jb21cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gU2VydmljZShhcHBfLCBhdXRoUHJvdmlkZXIsIG1lc3NhZ2luZ1Byb3ZpZGVyLCByZWdpb25PckN1c3RvbURvbWFpbl8sIGZldGNoSW1wbCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHJlZ2lvbk9yQ3VzdG9tRG9tYWluXyA9PT0gdm9pZCAwKSB7IHJlZ2lvbk9yQ3VzdG9tRG9tYWluXyA9ICd1cy1jZW50cmFsMSc7IH1cclxuICAgICAgICB0aGlzLmFwcF8gPSBhcHBfO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hJbXBsID0gZmV0Y2hJbXBsO1xyXG4gICAgICAgIHRoaXMuc2VyaWFsaXplciA9IG5ldyBTZXJpYWxpemVyKCk7XHJcbiAgICAgICAgdGhpcy5lbXVsYXRvck9yaWdpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5JTlRFUk5BTCA9IHtcclxuICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90aGlzLmRlbGV0ZVNlcnZpY2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29udGV4dFByb3ZpZGVyID0gbmV3IENvbnRleHRQcm92aWRlcihhdXRoUHJvdmlkZXIsIG1lc3NhZ2luZ1Byb3ZpZGVyKTtcclxuICAgICAgICAvLyBDYW5jZWxzIGFsbCBvbmdvaW5nIHJlcXVlc3RzIHdoZW4gcmVzb2x2ZWQuXHJcbiAgICAgICAgdGhpcy5jYW5jZWxBbGxSZXF1ZXN0cyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmRlbGV0ZVNlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFJlc29sdmUgdGhlIHJlZ2lvbiBvciBjdXN0b20gZG9tYWluIG92ZXJsb2FkIGJ5IGF0dGVtcHRpbmcgdG8gcGFyc2UgaXQuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwocmVnaW9uT3JDdXN0b21Eb21haW5fKTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21Eb21haW4gPSB1cmwub3JpZ2luO1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lvbiA9ICd1cy1jZW50cmFsMSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tRG9tYWluID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yZWdpb24gPSByZWdpb25PckN1c3RvbURvbWFpbl87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlcnZpY2UucHJvdG90eXBlLCBcImFwcFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcF87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBVUkwgZm9yIGEgY2FsbGFibGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYWJsZS5cclxuICAgICAqL1xyXG4gICAgU2VydmljZS5wcm90b3R5cGUuX3VybCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdmFyIHByb2plY3RJZCA9IHRoaXMuYXBwXy5vcHRpb25zLnByb2plY3RJZDtcclxuICAgICAgICBpZiAodGhpcy5lbXVsYXRvck9yaWdpbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luXzEgPSB0aGlzLmVtdWxhdG9yT3JpZ2luO1xyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luXzEgKyBcIi9cIiArIHByb2plY3RJZCArIFwiL1wiICsgdGhpcy5yZWdpb24gKyBcIi9cIiArIG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbURvbWFpbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21Eb21haW4gKyBcIi9cIiArIG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcImh0dHBzOi8vXCIgKyB0aGlzLnJlZ2lvbiArIFwiLVwiICsgcHJvamVjdElkICsgXCIuY2xvdWRmdW5jdGlvbnMubmV0L1wiICsgbmFtZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE1vZGlmeSB0aGlzIGluc3RhbmNlIHRvIGNvbW11bmljYXRlIHdpdGggdGhlIENsb3VkIEZ1bmN0aW9ucyBlbXVsYXRvci5cclxuICAgICAqXHJcbiAgICAgKiBOb3RlOiB0aGlzIG11c3QgYmUgY2FsbGVkIGJlZm9yZSB0aGlzIGluc3RhbmNlIGhhcyBiZWVuIHVzZWQgdG8gZG8gYW55IG9wZXJhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGhvc3QgVGhlIGVtdWxhdG9yIGhvc3QgKGV4OiBsb2NhbGhvc3QpXHJcbiAgICAgKiBAcGFyYW0gcG9ydCBUaGUgZW11bGF0b3IgcG9ydCAoZXg6IDUwMDEpXHJcbiAgICAgKi9cclxuICAgIFNlcnZpY2UucHJvdG90eXBlLnVzZUVtdWxhdG9yID0gZnVuY3Rpb24gKGhvc3QsIHBvcnQpIHtcclxuICAgICAgICB0aGlzLmVtdWxhdG9yT3JpZ2luID0gXCJodHRwOi8vXCIgKyBob3N0ICsgXCI6XCIgKyBwb3J0O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyB0aGlzIGluc3RhbmNlIHRvIHBvaW50IHRvIGEgQ2xvdWQgRnVuY3Rpb25zIGVtdWxhdG9yIHJ1bm5pbmdcclxuICAgICAqIGxvY2FsbHkuIFNlZSBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9mdW5jdGlvbnMvbG9jYWwtZW11bGF0b3JcclxuICAgICAqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBQcmVmZXIgdGhlIHVzZUVtdWxhdG9yKGhvc3QsIHBvcnQpIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSBvcmlnaW4gVGhlIG9yaWdpbiBvZiB0aGUgbG9jYWwgZW11bGF0b3IsIHN1Y2ggYXNcclxuICAgICAqIFwiaHR0cDovL2xvY2FsaG9zdDo1MDA1XCIuXHJcbiAgICAgKi9cclxuICAgIFNlcnZpY2UucHJvdG90eXBlLnVzZUZ1bmN0aW9uc0VtdWxhdG9yID0gZnVuY3Rpb24gKG9yaWdpbikge1xyXG4gICAgICAgIHRoaXMuZW11bGF0b3JPcmlnaW4gPSBvcmlnaW47XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYWJsZSBodHRwcyB0cmlnZ2VyIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHJpZ2dlci5cclxuICAgICAqL1xyXG4gICAgU2VydmljZS5wcm90b3R5cGUuaHR0cHNDYWxsYWJsZSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNhbGwobmFtZSwgZGF0YSwgb3B0aW9ucyB8fCB7fSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgYW4gSFRUUCBQT1NUIGFuZCByZXR1cm5zIHRoZSBjb21wbGV0ZWQgcmVzcG9uc2UuXHJcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSB1cmwgdG8gcG9zdCB0by5cclxuICAgICAqIEBwYXJhbSBib2R5IFRoZSBKU09OIGJvZHkgb2YgdGhlIHBvc3QuXHJcbiAgICAgKiBAcGFyYW0gaGVhZGVycyBUaGUgSFRUUCBoZWFkZXJzIHRvIGluY2x1ZGUgaW4gdGhlIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJuIEEgUHJvbWlzZSB0aGF0IHdpbGwgc3VjY2VlZCB3aGVuIHRoZSByZXF1ZXN0IGZpbmlzaGVzLlxyXG4gICAgICovXHJcbiAgICBTZXJ2aWNlLnByb3RvdHlwZS5wb3N0SlNPTiA9IGZ1bmN0aW9uICh1cmwsIGJvZHksIGhlYWRlcnMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZV8xLCBqc29uLCBlXzI7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmZldGNoSW1wbCh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY291bGQgYmUgYW4gdW5oYW5kbGVkIGVycm9yIG9uIHRoZSBiYWNrZW5kLCBvciBpdCBjb3VsZCBiZSBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ldHdvcmsgZXJyb3IuIFRoZXJlJ3Mgbm8gd2F5IHRvIGtub3csIHNpbmNlIGFuIHVuaGFuZGxlZCBlcnJvciBvbiB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2VuZCB3aWxsIGZhaWwgdG8gc2V0IHRoZSBwcm9wZXIgQ09SUyBoZWFkZXIsIGFuZCB0aHVzIHdpbGwgYmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlYXRlZCBhcyBhIG5ldHdvcmsgZXJyb3IgYnkgZmV0Y2guXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb246IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbNSwgNywgLCA4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uOiBqc29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbGxzIGEgY2FsbGFibGUgZnVuY3Rpb24gYXN5bmNocm9ub3VzbHkgYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYWJsZSB0cmlnZ2VyLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gcGFzcyBhcyBwYXJhbXMgdG8gdGhlIGZ1bmN0aW9uLnNcclxuICAgICAqL1xyXG4gICAgU2VydmljZS5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdXJsLCBib2R5LCBoZWFkZXJzLCBjb250ZXh0LCB0aW1lb3V0LCBfYSwgdGltZXIsIGZhaWxBZnRlclByb21pc2UsIHJlc3BvbnNlLCBlcnJvciwgcmVzcG9uc2VEYXRhLCBkZWNvZGVkRGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy5fdXJsKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmNvZGUgYW55IHNwZWNpYWwgdHlwZXMsIHN1Y2ggYXMgZGF0ZXMsIGluIHRoZSBpbnB1dCBkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5zZXJpYWxpemVyLmVuY29kZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IHsgZGF0YTogZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY29udGV4dFByb3ZpZGVyLmdldENvbnRleHQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5hdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGNvbnRleHQuYXV0aFRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0Lmluc3RhbmNlSWRUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snRmlyZWJhc2UtSW5zdGFuY2UtSUQtVG9rZW4nXSA9IGNvbnRleHQuaW5zdGFuY2VJZFRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgNzAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZmFpbEFmdGVyKHRpbWVvdXQpLCB0aW1lciA9IF9hLnRpbWVyLCBmYWlsQWZ0ZXJQcm9taXNlID0gX2EucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5yYWNlKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXRXcmFwcGVyKHRpbWVyLCB0aGlzLnBvc3RKU09OKHVybCwgYm9keSwgaGVhZGVycykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxBZnRlclByb21pc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0V3JhcHBlcih0aW1lciwgdGhpcy5jYW5jZWxBbGxSZXF1ZXN0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2aWNlIHdhcyBkZWxldGVkLCBpbnRlcnJ1cHRlZCByZXNwb25zZSB0aHJvd3MgYW4gZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBIdHRwc0Vycm9ySW1wbCgnY2FuY2VsbGVkJywgJ0ZpcmViYXNlIEZ1bmN0aW9ucyBpbnN0YW5jZSB3YXMgZGVsZXRlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IF9lcnJvckZvclJlc3BvbnNlKHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UuanNvbiwgdGhpcy5zZXJpYWxpemVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmpzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBIdHRwc0Vycm9ySW1wbCgnaW50ZXJuYWwnLCAnUmVzcG9uc2UgaXMgbm90IHZhbGlkIEpTT04gb2JqZWN0LicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmpzb24uZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhrbGltdCk6IEZvciByaWdodCBub3csIGFsbG93IFwicmVzdWx0XCIgaW5zdGVhZCBvZiBcImRhdGFcIiwgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlRGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmpzb24ucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29uc2lkZXIgdGhlIHJlc3BvbnNlIG1hbGZvcm1lZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBIdHRwc0Vycm9ySW1wbCgnaW50ZXJuYWwnLCAnUmVzcG9uc2UgaXMgbWlzc2luZyBkYXRhIGZpZWxkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWREYXRhID0gdGhpcy5zZXJpYWxpemVyLmRlY29kZShyZXNwb25zZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBkYXRhOiBkZWNvZGVkRGF0YSB9XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlcnZpY2U7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGNsZWFyVGltZW91dFdyYXBwZXIodGltZXIsIHByb21pc2UpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBwcm9taXNlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVHlwZSBjb25zdGFudCBmb3IgRmlyZWJhc2UgRnVuY3Rpb25zLlxyXG4gKi9cclxudmFyIEZVTkNUSU9OU19UWVBFID0gJ2Z1bmN0aW9ucyc7XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRnVuY3Rpb25zKGluc3RhbmNlLCBmZXRjaEltcGwpIHtcclxuICAgIHZhciBuYW1lc3BhY2VFeHBvcnRzID0ge1xyXG4gICAgICAgIC8vIG5vLWlubGluZVxyXG4gICAgICAgIEZ1bmN0aW9uczogU2VydmljZVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGZhY3RvcnkoY29udGFpbmVyLCByZWdpb25PckN1c3RvbURvbWFpbikge1xyXG4gICAgICAgIC8vIERlcGVuZGVuY2llc1xyXG4gICAgICAgIHZhciBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgICAgIHZhciBhdXRoUHJvdmlkZXIgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2F1dGgtaW50ZXJuYWwnKTtcclxuICAgICAgICB2YXIgbWVzc2FnaW5nUHJvdmlkZXIgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ21lc3NhZ2luZycpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2aWNlKGFwcCwgYXV0aFByb3ZpZGVyLCBtZXNzYWdpbmdQcm92aWRlciwgcmVnaW9uT3JDdXN0b21Eb21haW4sIGZldGNoSW1wbCk7XHJcbiAgICB9XHJcbiAgICBpbnN0YW5jZS5JTlRFUk5BTC5yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KEZVTkNUSU9OU19UWVBFLCBmYWN0b3J5LCBcIlBVQkxJQ1wiIC8qIFBVQkxJQyAqLylcclxuICAgICAgICAuc2V0U2VydmljZVByb3BzKG5hbWVzcGFjZUV4cG9ydHMpXHJcbiAgICAgICAgLnNldE11bHRpcGxlSW5zdGFuY2VzKHRydWUpKTtcclxufVxuXG52YXIgbmFtZSA9IFwiQGZpcmViYXNlL2Z1bmN0aW9uc1wiO1xudmFyIHZlcnNpb24gPSBcIjAuNi4yXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnJlZ2lzdGVyRnVuY3Rpb25zKGZpcmViYXNlLCBmZXRjaC5iaW5kKHNlbGYpKTtcclxuZmlyZWJhc2UucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0ICdAZmlyZWJhc2UvZnVuY3Rpb25zJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=