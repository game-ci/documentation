(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["performance"],{

/***/ "./node_modules/@firebase/installations/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@firebase/installations/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: registerInstallations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInstallations", function() { return registerInstallations; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/idb.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_4__);






var name = "@firebase/installations";
var version = "0.4.20";

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
var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:" + version;
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';

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
var _a;
var ERROR_DESCRIPTION_MAP = (_a = {},
    _a["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */] = 'Missing App configuration value: "{$valueName}"',
    _a["not-registered" /* NOT_REGISTERED */] = 'Firebase Installation is not registered.',
    _a["installation-not-found" /* INSTALLATION_NOT_FOUND */] = 'Firebase Installation not found.',
    _a["request-failed" /* REQUEST_FAILED */] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    _a["app-offline" /* APP_OFFLINE */] = 'Could not process request. Application offline.',
    _a["delete-pending-registration" /* DELETE_PENDING_REGISTRATION */] = "Can't delete installation while there is a pending registration request.",
    _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
    return (error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_3__["FirebaseError"] &&
        error.code.includes("request-failed" /* REQUEST_FAILED */));
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
function getInstallationsEndpoint(_a) {
    var projectId = _a.projectId;
    return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* COMPLETED */,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
function getErrorFromResponse(requestName, response) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var responseJson, errorData;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, response.json()];
                case 1:
                    responseJson = _a.sent();
                    errorData = responseJson.error;
                    return [2 /*return*/, ERROR_FACTORY.create("request-failed" /* REQUEST_FAILED */, {
                            requestName: requestName,
                            serverCode: errorData.code,
                            serverMessage: errorData.message,
                            serverStatus: errorData.status
                        })];
            }
        });
    });
}
function getHeaders(_a) {
    var apiKey = _a.apiKey;
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, _a) {
    var refreshToken = _a.refreshToken;
    var headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
function retryIfServerError(fn) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var result;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fn()];
                case 1:
                    result = _a.sent();
                    if (result.status >= 500 && result.status < 600) {
                        // Internal Server Error. Retry request.
                        return [2 /*return*/, fn()];
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return INTERNAL_AUTH_VERSION + " " + refreshToken;
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
function createInstallationRequest(appConfig, _a) {
    var fid = _a.fid;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    endpoint = getInstallationsEndpoint(appConfig);
                    headers = getHeaders(appConfig);
                    body = {
                        fid: fid,
                        authVersion: INTERNAL_AUTH_VERSION,
                        appId: appConfig.appId,
                        sdkVersion: PACKAGE_VERSION
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseValue = _b.sent();
                    registeredInstallationEntry = {
                        fid: responseValue.fid || fid,
                        registrationStatus: 2 /* COMPLETED */,
                        refreshToken: responseValue.refreshToken,
                        authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
                    };
                    return [2 /*return*/, registeredInstallationEntry];
                case 3: return [4 /*yield*/, getErrorFromResponse('Create Installation', response)];
                case 4: throw _b.sent();
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
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
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
function bufferToBase64UrlSafe(array) {
    var b64 = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(array)));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
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
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        var fidByteArray = new Uint8Array(17);
        var crypto_1 = self.crypto || self.msCrypto;
        crypto_1.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 112 + (fidByteArray[0] % 16);
        var fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    }
    catch (_a) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
    var b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
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
/** Returns a string key that can be used to identify the app. */
function getKey(appConfig) {
    return appConfig.appName + "!" + appConfig.appId;
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
var fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */
function fidChanged(appConfig, fid) {
    var key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
    // Open the broadcast channel if it's not already open,
    // to be able to listen to change events from other tabs.
    getBroadcastChannel();
    var key = getKey(appConfig);
    var callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        callbackSet = new Set();
        fidChangeCallbacks.set(key, callbackSet);
    }
    callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
    var key = getKey(appConfig);
    var callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        return;
    }
    callbackSet.delete(callback);
    if (callbackSet.size === 0) {
        fidChangeCallbacks.delete(key);
    }
    // Close broadcast channel if there are no more callbacks.
    closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
    var e_1, _a;
    var callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
        return;
    }
    try {
        for (var callbacks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
            var callback = callbacks_1_1.value;
            callback(fid);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function broadcastFidChange(key, fid) {
    var channel = getBroadcastChannel();
    if (channel) {
        channel.postMessage({ key: key, fid: fid });
    }
    closeBroadcastChannel();
}
var broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */
function getBroadcastChannel() {
    if (!broadcastChannel && 'BroadcastChannel' in self) {
        broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
        broadcastChannel.onmessage = function (e) {
            callFidChangeCallbacks(e.data.key, e.data.fid);
        };
    }
    return broadcastChannel;
}
function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
        broadcastChannel.close();
        broadcastChannel = null;
    }
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
var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDB.oldVersion) {
                case 0:
                    upgradeDB.createObjectStore(OBJECT_STORE_NAME);
            }
        });
    }
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
function set(appConfig, value) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx, objectStore, oldValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    objectStore = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, objectStore.get(key)];
                case 2:
                    oldValue = _a.sent();
                    return [4 /*yield*/, objectStore.put(value, key)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 4:
                    _a.sent();
                    if (!oldValue || oldValue.fid !== value.fid) {
                        fidChanged(appConfig, value.fid);
                    }
                    return [2 /*return*/, value];
            }
        });
    });
}
/** Removes record(s) from the objectStore that match the given key. */
function remove(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
function update(appConfig, updateFn) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx, store, oldValue, newValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    store = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, store.get(key)];
                case 2:
                    oldValue = _a.sent();
                    newValue = updateFn(oldValue);
                    if (!(newValue === undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, store.delete(key)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, store.put(newValue, key)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, tx.complete];
                case 7:
                    _a.sent();
                    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
                        fidChanged(appConfig, newValue.fid);
                    }
                    return [2 /*return*/, newValue];
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
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
function getInstallationEntry(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var registrationPromise, installationEntry;
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(appConfig, function (oldEntry) {
                        var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                        var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
                        registrationPromise = entryWithPromise.registrationPromise;
                        return entryWithPromise.installationEntry;
                    })];
                case 1:
                    installationEntry = _b.sent();
                    if (!(installationEntry.fid === INVALID_FID)) return [3 /*break*/, 3];
                    _a = {};
                    return [4 /*yield*/, registrationPromise];
                case 2: 
                // FID generation failed. Waiting for the FID from the server.
                return [2 /*return*/, (_a.installationEntry = _b.sent(), _a)];
                case 3: return [2 /*return*/, {
                        installationEntry: installationEntry,
                        registrationPromise: registrationPromise
                    }];
            }
        });
    });
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function updateOrCreateInstallationEntry(oldEntry) {
    var entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */
function triggerRegistrationIfNecessary(appConfig, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* NOT_STARTED */) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */));
            return {
                installationEntry: installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        var inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* IN_PROGRESS */,
            registrationTime: Date.now()
        };
        var registrationPromise = registerInstallation(appConfig, inProgressEntry);
        return { installationEntry: inProgressEntry, registrationPromise: registrationPromise };
    }
    else if (installationEntry.registrationStatus === 1 /* IN_PROGRESS */) {
        return {
            installationEntry: installationEntry,
            registrationPromise: waitUntilFidRegistration(appConfig)
        };
    }
    else {
        return { installationEntry: installationEntry };
    }
}
/** This will be executed only once for each new Firebase Installation. */
function registerInstallation(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var registeredInstallationEntry, e_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 7]);
                    return [4 /*yield*/, createInstallationRequest(appConfig, installationEntry)];
                case 1:
                    registeredInstallationEntry = _a.sent();
                    return [2 /*return*/, set(appConfig, registeredInstallationEntry)];
                case 2:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) && e_1.customData.serverCode === 409)) return [3 /*break*/, 4];
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(appConfig)];
                case 3:
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: 
                // Registration failed. Set FID as not registered.
                return [4 /*yield*/, set(appConfig, {
                        fid: installationEntry.fid,
                        registrationStatus: 0 /* NOT_STARTED */
                    })];
                case 5:
                    // Registration failed. Set FID as not registered.
                    _a.sent();
                    _a.label = 6;
                case 6: throw e_1;
                case 7: return [2 /*return*/];
            }
        });
    });
}
/** Call if FID registration is pending in another request. */
function waitUntilFidRegistration(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var entry, _a, installationEntry, registrationPromise;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, updateInstallationRequest(appConfig)];
                case 1:
                    entry = _b.sent();
                    _b.label = 2;
                case 2:
                    if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                    // createInstallation request still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // createInstallation request still in progress.
                    _b.sent();
                    return [4 /*yield*/, updateInstallationRequest(appConfig)];
                case 4:
                    entry = _b.sent();
                    return [3 /*break*/, 2];
                case 5:
                    if (!(entry.registrationStatus === 0 /* NOT_STARTED */)) return [3 /*break*/, 7];
                    return [4 /*yield*/, getInstallationEntry(appConfig)];
                case 6:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (registrationPromise) {
                        return [2 /*return*/, registrationPromise];
                    }
                    else {
                        // if there is no registrationPromise, entry is registered.
                        return [2 /*return*/, installationEntry];
                    }
                case 7: return [2 /*return*/, entry];
            }
        });
    });
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function updateInstallationRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* INSTALLATION_NOT_FOUND */);
        }
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
        return {
            fid: entry.fid,
            registrationStatus: 0 /* NOT_STARTED */
        };
    }
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return (installationEntry.registrationStatus === 1 /* IN_PROGRESS */ &&
        installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
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
function generateAuthTokenRequest(_a, installationEntry) {
    var appConfig = _a.appConfig, platformLoggerProvider = _a.platformLoggerProvider;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    platformLogger = platformLoggerProvider.getImmediate({
                        optional: true
                    });
                    if (platformLogger) {
                        headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
                    }
                    body = {
                        installation: {
                            sdkVersion: PACKAGE_VERSION
                        }
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseValue = _b.sent();
                    completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
                    return [2 /*return*/, completedAuthToken];
                case 3: return [4 /*yield*/, getErrorFromResponse('Generate Auth Token', response)];
                case 4: throw _b.sent();
            }
        });
    });
}
function getGenerateAuthTokenEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
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
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
function refreshAuthToken(dependencies, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var tokenPromise, entry, authToken, _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(dependencies.appConfig, function (oldEntry) {
                        if (!isEntryRegistered(oldEntry)) {
                            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
                        }
                        var oldAuthToken = oldEntry.authToken;
                        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                            // There is a valid token in the DB.
                            return oldEntry;
                        }
                        else if (oldAuthToken.requestStatus === 1 /* IN_PROGRESS */) {
                            // There already is a token request in progress.
                            tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
                            return oldEntry;
                        }
                        else {
                            // No token or token expired.
                            if (!navigator.onLine) {
                                throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
                            }
                            var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                            tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
                            return inProgressEntry;
                        }
                    })];
                case 1:
                    entry = _b.sent();
                    if (!tokenPromise) return [3 /*break*/, 3];
                    return [4 /*yield*/, tokenPromise];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _a = entry.authToken;
                    _b.label = 4;
                case 4:
                    authToken = _a;
                    return [2 /*return*/, authToken];
            }
        });
    });
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */
function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var entry, authToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateAuthTokenRequest(dependencies.appConfig)];
                case 1:
                    entry = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(entry.authToken.requestStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                    // generateAuthToken still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // generateAuthToken still in progress.
                    _a.sent();
                    return [4 /*yield*/, updateAuthTokenRequest(dependencies.appConfig)];
                case 4:
                    entry = _a.sent();
                    return [3 /*break*/, 2];
                case 5:
                    authToken = entry.authToken;
                    if (authToken.requestStatus === 0 /* NOT_STARTED */) {
                        // The request timed out or failed in a different call. Try again.
                        return [2 /*return*/, refreshAuthToken(dependencies, forceRefresh)];
                    }
                    else {
                        return [2 /*return*/, authToken];
                    }
            }
        });
    });
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function updateAuthTokenRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
        }
        var oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
        }
        return oldEntry;
    });
}
function fetchAuthTokenFromServer(dependencies, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 8]);
                    return [4 /*yield*/, generateAuthTokenRequest(dependencies, installationEntry)];
                case 1:
                    authToken = _a.sent();
                    updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), { authToken: authToken });
                    return [4 /*yield*/, set(dependencies.appConfig, updatedInstallationEntry)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, authToken];
                case 3:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) &&
                        (e_1.customData.serverCode === 401 || e_1.customData.serverCode === 404))) return [3 /*break*/, 5];
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(dependencies.appConfig)];
                case 4:
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
                    return [4 /*yield*/, set(dependencies.appConfig, updatedInstallationEntry)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: throw e_1;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function isEntryRegistered(installationEntry) {
    return (installationEntry !== undefined &&
        installationEntry.registrationStatus === 2 /* COMPLETED */);
}
function isAuthTokenValid(authToken) {
    return (authToken.requestStatus === 2 /* COMPLETED */ &&
        !isAuthTokenExpired(authToken));
}
function isAuthTokenExpired(authToken) {
    var now = Date.now();
    return (now < authToken.creationTime ||
        authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
    var inProgressAuthToken = {
        requestStatus: 1 /* IN_PROGRESS */,
        requestTime: Date.now()
    };
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
    return (authToken.requestStatus === 1 /* IN_PROGRESS */ &&
        authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
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
function getId(dependencies) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var _a, installationEntry, registrationPromise;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getInstallationEntry(dependencies.appConfig)];
                case 1:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (registrationPromise) {
                        registrationPromise.catch(console.error);
                    }
                    else {
                        // If the installation is already registered, update the authentication
                        // token if needed.
                        refreshAuthToken(dependencies).catch(console.error);
                    }
                    return [2 /*return*/, installationEntry.fid];
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
function getToken(dependencies, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var authToken;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, completeInstallationRegistration(dependencies.appConfig)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, refreshAuthToken(dependencies, forceRefresh)];
                case 2:
                    authToken = _a.sent();
                    return [2 /*return*/, authToken.token];
            }
        });
    });
}
function completeInstallationRegistration(appConfig) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var registrationPromise;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInstallationEntry(appConfig)];
                case 1:
                    registrationPromise = (_a.sent()).registrationPromise;
                    if (!registrationPromise) return [3 /*break*/, 3];
                    // A createInstallation request is in progress. Wait until it finishes.
                    return [4 /*yield*/, registrationPromise];
                case 2:
                    // A createInstallation request is in progress. Wait until it finishes.
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
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
function deleteInstallationRequest(appConfig, installationEntry) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, request, response;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = getDeleteEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    request = {
                        method: 'DELETE',
                        headers: headers
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, getErrorFromResponse('Delete Installation', response)];
                case 2: throw _a.sent();
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getDeleteEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid;
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
function deleteInstallation(dependencies) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
        var appConfig, entry;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appConfig = dependencies.appConfig;
                    return [4 /*yield*/, update(appConfig, function (oldEntry) {
                            if (oldEntry && oldEntry.registrationStatus === 0 /* NOT_STARTED */) {
                                // Delete the unregistered entry without sending a deleteInstallation request.
                                return undefined;
                            }
                            return oldEntry;
                        })];
                case 1:
                    entry = _a.sent();
                    if (!entry) return [3 /*break*/, 6];
                    if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 2];
                    // Can't delete while trying to register.
                    throw ERROR_FACTORY.create("delete-pending-registration" /* DELETE_PENDING_REGISTRATION */);
                case 2:
                    if (!(entry.registrationStatus === 2 /* COMPLETED */)) return [3 /*break*/, 6];
                    if (!!navigator.onLine) return [3 /*break*/, 3];
                    throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
                case 3: return [4 /*yield*/, deleteInstallationRequest(appConfig, entry)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, remove(appConfig)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/];
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
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 */
function onIdChange(_a, callback) {
    var appConfig = _a.appConfig;
    addCallback(appConfig, callback);
    return function () {
        removeCallback(appConfig, callback);
    };
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
function extractAppConfig(app) {
    var e_1, _a;
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    var configKeys = [
        'projectId',
        'apiKey',
        'appId'
    ];
    try {
        for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;
            if (!app.options[keyName]) {
                throw getMissingValueError(keyName);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, {
        valueName: valueName
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
function registerInstallations(instance) {
    var installationsName = 'installations';
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](installationsName, function (container) {
        var app = container.getProvider('app').getImmediate();
        // Throws if app isn't configured properly.
        var appConfig = extractAppConfig(app);
        var platformLoggerProvider = container.getProvider('platform-logger');
        var dependencies = {
            appConfig: appConfig,
            platformLoggerProvider: platformLoggerProvider
        };
        var installations = {
            app: app,
            getId: function () { return getId(dependencies); },
            getToken: function (forceRefresh) {
                return getToken(dependencies, forceRefresh);
            },
            delete: function () { return deleteInstallation(dependencies); },
            onIdChange: function (callback) {
                return onIdChange(dependencies, callback);
            }
        };
        return installations;
    }, "PUBLIC" /* PUBLIC */));
    instance.registerVersion(name, version);
}
registerInstallations(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/performance/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/performance/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: registerPerformance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPerformance", function() { return registerPerformance; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js");
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/index.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.esm.js");







var name = "@firebase/performance";
var version = "0.4.6";

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
var SDK_VERSION = version;
/** The prefix for start User Timing marks used for creating Traces. */
var TRACE_START_MARK_PREFIX = 'FB-PERF-TRACE-START';
/** The prefix for stop User Timing marks used for creating Traces. */
var TRACE_STOP_MARK_PREFIX = 'FB-PERF-TRACE-STOP';
/** The prefix for User Timing measure used for creating Traces. */
var TRACE_MEASURE_PREFIX = 'FB-PERF-TRACE-MEASURE';
/** The prefix for out of the box page load Trace name. */
var OOB_TRACE_PAGE_LOAD_PREFIX = '_wt_';
var FIRST_PAINT_COUNTER_NAME = '_fp';
var FIRST_CONTENTFUL_PAINT_COUNTER_NAME = '_fcp';
var FIRST_INPUT_DELAY_COUNTER_NAME = '_fid';
var CONFIG_LOCAL_STORAGE_KEY = '@firebase/performance/config';
var CONFIG_EXPIRY_LOCAL_STORAGE_KEY = '@firebase/performance/configexpire';
var SERVICE = 'performance';
var SERVICE_NAME = 'Performance';

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
var _a;
var ERROR_DESCRIPTION_MAP = (_a = {},
    _a["trace started" /* TRACE_STARTED_BEFORE */] = 'Trace {$traceName} was started before.',
    _a["trace stopped" /* TRACE_STOPPED_BEFORE */] = 'Trace {$traceName} is not running.',
    _a["nonpositive trace startTime" /* NONPOSITIVE_TRACE_START_TIME */] = 'Trace {$traceName} startTime should be positive.',
    _a["nonpositive trace duration" /* NONPOSITIVE_TRACE_DURATION */] = 'Trace {$traceName} duration should be positive.',
    _a["no window" /* NO_WINDOW */] = 'Window is not available.',
    _a["no app id" /* NO_APP_ID */] = 'App id is not available.',
    _a["no project id" /* NO_PROJECT_ID */] = 'Project id is not available.',
    _a["no api key" /* NO_API_KEY */] = 'Api key is not available.',
    _a["invalid cc log" /* INVALID_CC_LOG */] = 'Attempted to queue invalid cc event',
    _a["FB not default" /* FB_NOT_DEFAULT */] = 'Performance can only start when Firebase app instance is the default one.',
    _a["RC response not ok" /* RC_NOT_OK */] = 'RC response is not ok',
    _a["invalid attribute name" /* INVALID_ATTRIBUTE_NAME */] = 'Attribute name {$attributeName} is invalid.',
    _a["invalid attribute value" /* INVALID_ATTRIBUTE_VALUE */] = 'Attribute value {$attributeValue} is invalid.',
    _a["invalid custom metric name" /* INVALID_CUSTOM_METRIC_NAME */] = 'Custom metric name {$customMetricName} is invalid',
    _a["invalid String merger input" /* INVALID_STRING_MERGER_PARAMETER */] = 'Input for String merger is invalid, contact support team to resolve.',
    _a);
var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);

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
var consoleLogger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"](SERVICE_NAME);
consoleLogger.logLevel = _firebase_logger__WEBPACK_IMPORTED_MODULE_4__["LogLevel"].INFO;

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
var apiInstance;
var windowInstance;
/**
 * This class holds a reference to various browser related objects injected by
 * set methods.
 */
var Api = /** @class */ (function () {
    function Api(window) {
        this.window = window;
        if (!window) {
            throw ERROR_FACTORY.create("no window" /* NO_WINDOW */);
        }
        this.performance = window.performance;
        this.PerformanceObserver = window.PerformanceObserver;
        this.windowLocation = window.location;
        this.navigator = window.navigator;
        this.document = window.document;
        if (this.navigator && this.navigator.cookieEnabled) {
            // If user blocks cookies on the browser, accessing localStorage will
            // throw an exception.
            this.localStorage = window.localStorage;
        }
        if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
            this.onFirstInputDelay = window.perfMetrics.onFirstInputDelay;
        }
    }
    Api.prototype.getUrl = function () {
        // Do not capture the string query part of url.
        return this.windowLocation.href.split('?')[0];
    };
    Api.prototype.mark = function (name) {
        if (!this.performance || !this.performance.mark) {
            return;
        }
        this.performance.mark(name);
    };
    Api.prototype.measure = function (measureName, mark1, mark2) {
        if (!this.performance || !this.performance.measure) {
            return;
        }
        this.performance.measure(measureName, mark1, mark2);
    };
    Api.prototype.getEntriesByType = function (type) {
        if (!this.performance || !this.performance.getEntriesByType) {
            return [];
        }
        return this.performance.getEntriesByType(type);
    };
    Api.prototype.getEntriesByName = function (name) {
        if (!this.performance || !this.performance.getEntriesByName) {
            return [];
        }
        return this.performance.getEntriesByName(name);
    };
    Api.prototype.getTimeOrigin = function () {
        // Polyfill the time origin with performance.timing.navigationStart.
        return (this.performance &&
            (this.performance.timeOrigin || this.performance.timing.navigationStart));
    };
    Api.prototype.requiredApisAvailable = function () {
        if (!fetch ||
            !Promise ||
            !this.navigator ||
            !this.navigator.cookieEnabled) {
            consoleLogger.info('Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.');
            return false;
        }
        if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isIndexedDBAvailable"])()) {
            consoleLogger.info('IndexedDB is not supported by current browswer');
            return false;
        }
        return true;
    };
    Api.prototype.setupObserver = function (entryType, callback) {
        if (!this.PerformanceObserver) {
            return;
        }
        var observer = new this.PerformanceObserver(function (list) {
            for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
                var entry = _a[_i];
                // `entry` is a PerformanceEntry instance.
                callback(entry);
            }
        });
        // Start observing the entry types you care about.
        observer.observe({ entryTypes: [entryType] });
    };
    Api.getInstance = function () {
        if (apiInstance === undefined) {
            apiInstance = new Api(windowInstance);
        }
        return apiInstance;
    };
    return Api;
}());
function setupApi(window) {
    windowInstance = window;
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
function mergeStrings(part1, part2) {
    var sizeDiff = part1.length - part2.length;
    if (sizeDiff < 0 || sizeDiff > 1) {
        throw ERROR_FACTORY.create("invalid String merger input" /* INVALID_STRING_MERGER_PARAMETER */);
    }
    var resultArray = [];
    for (var i = 0; i < part1.length; i++) {
        resultArray.push(part1.charAt(i));
        if (part2.length > i) {
            resultArray.push(part2.charAt(i));
        }
    }
    return resultArray.join('');
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
var settingsServiceInstance;
var SettingsService = /** @class */ (function () {
    function SettingsService() {
        // The variable which controls logging of automatic traces and HTTP/S network monitoring.
        this.instrumentationEnabled = true;
        // The variable which controls logging of custom traces.
        this.dataCollectionEnabled = true;
        // Configuration flags set through remote config.
        this.loggingEnabled = false;
        // Sampling rate between 0 and 1.
        this.tracesSamplingRate = 1;
        this.networkRequestsSamplingRate = 1;
        // Address of logging service.
        this.logEndPointUrl = 'https://firebaselogging.googleapis.com/v0cc/log?format=json_proto';
        // Performance event transport endpoint URL which should be compatible with proto3.
        // New Address for transport service, not configurable via Remote Config.
        this.flTransportEndpointUrl = mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');
        this.transportKey = mergeStrings('AzSC8r6ReiGqFMyfvgow', 'Iayx0u-XT3vksVM-pIV');
        // Source type for performance event logs.
        this.logSource = 462;
        // Flags which control per session logging of traces and network requests.
        this.logTraceAfterSampling = false;
        this.logNetworkAfterSampling = false;
        // TTL of config retrieved from remote config in hours.
        this.configTimeToLive = 12;
    }
    SettingsService.prototype.getAppId = function () {
        var appId = this.firebaseAppInstance &&
            this.firebaseAppInstance.options &&
            this.firebaseAppInstance.options.appId;
        if (!appId) {
            throw ERROR_FACTORY.create("no app id" /* NO_APP_ID */);
        }
        return appId;
    };
    SettingsService.prototype.getProjectId = function () {
        var projectId = this.firebaseAppInstance &&
            this.firebaseAppInstance.options &&
            this.firebaseAppInstance.options.projectId;
        if (!projectId) {
            throw ERROR_FACTORY.create("no project id" /* NO_PROJECT_ID */);
        }
        return projectId;
    };
    SettingsService.prototype.getApiKey = function () {
        var apiKey = this.firebaseAppInstance &&
            this.firebaseAppInstance.options &&
            this.firebaseAppInstance.options.apiKey;
        if (!apiKey) {
            throw ERROR_FACTORY.create("no api key" /* NO_API_KEY */);
        }
        return apiKey;
    };
    SettingsService.prototype.getFlTransportFullUrl = function () {
        return this.flTransportEndpointUrl.concat('?key=', this.transportKey);
    };
    SettingsService.getInstance = function () {
        if (settingsServiceInstance === undefined) {
            settingsServiceInstance = new SettingsService();
        }
        return settingsServiceInstance;
    };
    return SettingsService;
}());

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
var iid;
function getIidPromise() {
    var iidPromise = SettingsService.getInstance().installationsService.getId();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    iidPromise.then(function (iidVal) {
        iid = iidVal;
    });
    return iidPromise;
}
// This method should be used after the iid is retrieved by getIidPromise method.
function getIid() {
    return iid;
}
function getAuthTokenPromise() {
    var authTokenPromise = SettingsService.getInstance().installationsService.getToken();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    authTokenPromise.then(function (authTokenVal) {
    });
    return authTokenPromise;
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
var VisibilityState;
(function (VisibilityState) {
    VisibilityState[VisibilityState["UNKNOWN"] = 0] = "UNKNOWN";
    VisibilityState[VisibilityState["VISIBLE"] = 1] = "VISIBLE";
    VisibilityState[VisibilityState["HIDDEN"] = 2] = "HIDDEN";
})(VisibilityState || (VisibilityState = {}));
var RESERVED_ATTRIBUTE_PREFIXES = ['firebase_', 'google_', 'ga_'];
var ATTRIBUTE_FORMAT_REGEX = new RegExp('^[a-zA-Z]\\w*$');
var MAX_ATTRIBUTE_NAME_LENGTH = 40;
var MAX_ATTRIBUTE_VALUE_LENGTH = 100;
function getServiceWorkerStatus() {
    var navigator = Api.getInstance().navigator;
    if ('serviceWorker' in navigator) {
        if (navigator.serviceWorker.controller) {
            return 2 /* CONTROLLED */;
        }
        else {
            return 3 /* UNCONTROLLED */;
        }
    }
    else {
        return 1 /* UNSUPPORTED */;
    }
}
function getVisibilityState() {
    var document = Api.getInstance().document;
    var visibilityState = document.visibilityState;
    switch (visibilityState) {
        case 'visible':
            return VisibilityState.VISIBLE;
        case 'hidden':
            return VisibilityState.HIDDEN;
        default:
            return VisibilityState.UNKNOWN;
    }
}
function getEffectiveConnectionType() {
    var navigator = Api.getInstance().navigator;
    var navigatorConnection = navigator.connection;
    var effectiveType = navigatorConnection && navigatorConnection.effectiveType;
    switch (effectiveType) {
        case 'slow-2g':
            return 1 /* CONNECTION_SLOW_2G */;
        case '2g':
            return 2 /* CONNECTION_2G */;
        case '3g':
            return 3 /* CONNECTION_3G */;
        case '4g':
            return 4 /* CONNECTION_4G */;
        default:
            return 0 /* UNKNOWN */;
    }
}
function isValidCustomAttributeName(name) {
    if (name.length === 0 || name.length > MAX_ATTRIBUTE_NAME_LENGTH) {
        return false;
    }
    var matchesReservedPrefix = RESERVED_ATTRIBUTE_PREFIXES.some(function (prefix) {
        return name.startsWith(prefix);
    });
    return !matchesReservedPrefix && !!name.match(ATTRIBUTE_FORMAT_REGEX);
}
function isValidCustomAttributeValue(value) {
    return value.length !== 0 && value.length <= MAX_ATTRIBUTE_VALUE_LENGTH;
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
var REMOTE_CONFIG_SDK_VERSION = '0.0.1';
// These values will be used if the remote config object is successfully
// retrieved, but the template does not have these fields.
var DEFAULT_CONFIGS = {
    loggingEnabled: true
};
var FIS_AUTH_PREFIX = 'FIREBASE_INSTALLATIONS_AUTH';
function getConfig(iid) {
    var config = getStoredConfig();
    if (config) {
        processConfig(config);
        return Promise.resolve();
    }
    return getRemoteConfig(iid)
        .then(processConfig)
        .then(function (config) { return storeConfig(config); }, 
    /** Do nothing for error, use defaults set in settings service. */
    function () { });
}
function getStoredConfig() {
    var localStorage = Api.getInstance().localStorage;
    if (!localStorage) {
        return;
    }
    var expiryString = localStorage.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);
    if (!expiryString || !configValid(expiryString)) {
        return;
    }
    var configStringified = localStorage.getItem(CONFIG_LOCAL_STORAGE_KEY);
    if (!configStringified) {
        return;
    }
    try {
        var configResponse = JSON.parse(configStringified);
        return configResponse;
    }
    catch (_a) {
        return;
    }
}
function storeConfig(config) {
    var localStorage = Api.getInstance().localStorage;
    if (!config || !localStorage) {
        return;
    }
    localStorage.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
    localStorage.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() +
        SettingsService.getInstance().configTimeToLive * 60 * 60 * 1000));
}
var COULD_NOT_GET_CONFIG_MSG = 'Could not fetch config, will use default configs';
function getRemoteConfig(iid) {
    // Perf needs auth token only to retrieve remote config.
    return getAuthTokenPromise()
        .then(function (authToken) {
        var projectId = SettingsService.getInstance().getProjectId();
        var configEndPoint = "https://firebaseremoteconfig.googleapis.com/v1/projects/" + projectId + "/namespaces/fireperf:fetch?key=" + SettingsService.getInstance().getApiKey();
        var request = new Request(configEndPoint, {
            method: 'POST',
            headers: { Authorization: FIS_AUTH_PREFIX + " " + authToken },
            /* eslint-disable camelcase */
            body: JSON.stringify({
                app_instance_id: iid,
                app_instance_id_token: authToken,
                app_id: SettingsService.getInstance().getAppId(),
                app_version: SDK_VERSION,
                sdk_version: REMOTE_CONFIG_SDK_VERSION
            })
            /* eslint-enable camelcase */
        });
        return fetch(request).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            // In case response is not ok. This will be caught by catch.
            throw ERROR_FACTORY.create("RC response not ok" /* RC_NOT_OK */);
        });
    })
        .catch(function () {
        consoleLogger.info(COULD_NOT_GET_CONFIG_MSG);
        return undefined;
    });
}
/**
 * Processes config coming either from calling RC or from local storage.
 * This method only runs if call is successful or config in storage
 * is valid.
 */
function processConfig(config) {
    if (!config) {
        return config;
    }
    var settingsServiceInstance = SettingsService.getInstance();
    var entries = config.entries || {};
    if (entries.fpr_enabled !== undefined) {
        // TODO: Change the assignment of loggingEnabled once the received type is
        // known.
        settingsServiceInstance.loggingEnabled =
            String(entries.fpr_enabled) === 'true';
    }
    else {
        // Config retrieved successfully, but there is no fpr_enabled in template.
        // Use secondary configs value.
        settingsServiceInstance.loggingEnabled = DEFAULT_CONFIGS.loggingEnabled;
    }
    if (entries.fpr_log_source) {
        settingsServiceInstance.logSource = Number(entries.fpr_log_source);
    }
    if (entries.fpr_log_endpoint_url) {
        settingsServiceInstance.logEndPointUrl = entries.fpr_log_endpoint_url;
    }
    // Key from Remote Config has to be non-empty string, otherwsie use local value.
    if (entries.fpr_log_transport_key) {
        settingsServiceInstance.transportKey = entries.fpr_log_transport_key;
    }
    if (entries.fpr_vc_network_request_sampling_rate !== undefined) {
        settingsServiceInstance.networkRequestsSamplingRate = Number(entries.fpr_vc_network_request_sampling_rate);
    }
    if (entries.fpr_vc_trace_sampling_rate !== undefined) {
        settingsServiceInstance.tracesSamplingRate = Number(entries.fpr_vc_trace_sampling_rate);
    }
    // Set the per session trace and network logging flags.
    settingsServiceInstance.logTraceAfterSampling = shouldLogAfterSampling(settingsServiceInstance.tracesSamplingRate);
    settingsServiceInstance.logNetworkAfterSampling = shouldLogAfterSampling(settingsServiceInstance.networkRequestsSamplingRate);
    return config;
}
function configValid(expiry) {
    return Number(expiry) > Date.now();
}
function shouldLogAfterSampling(samplingRate) {
    return Math.random() <= samplingRate;
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
var initializationStatus = 1 /* notInitialized */;
var initializationPromise;
function getInitializationPromise() {
    initializationStatus = 2 /* initializationPending */;
    initializationPromise = initializationPromise || initializePerf();
    return initializationPromise;
}
function isPerfInitialized() {
    return initializationStatus === 3 /* initialized */;
}
function initializePerf() {
    return getDocumentReadyComplete()
        .then(function () { return getIidPromise(); })
        .then(function (iid) { return getConfig(iid); })
        .then(function () { return changeInitializationStatus(); }, function () { return changeInitializationStatus(); });
}
/**
 * Returns a promise which resolves whenever the document readystate is complete or
 * immediately if it is called after page load complete.
 */
function getDocumentReadyComplete() {
    var document = Api.getInstance().document;
    return new Promise(function (resolve) {
        if (document && document.readyState !== 'complete') {
            var handler_1 = function () {
                if (document.readyState === 'complete') {
                    document.removeEventListener('readystatechange', handler_1);
                    resolve();
                }
            };
            document.addEventListener('readystatechange', handler_1);
        }
        else {
            resolve();
        }
    });
}
function changeInitializationStatus() {
    initializationStatus = 3 /* initialized */;
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
var DEFAULT_SEND_INTERVAL_MS = 10 * 1000;
var INITIAL_SEND_TIME_DELAY_MS = 5.5 * 1000;
// If end point does not work, the call will be tried for these many times.
var DEFAULT_REMAINING_TRIES = 3;
var MAX_EVENT_COUNT_PER_REQUEST = 1000;
var remainingTries = DEFAULT_REMAINING_TRIES;
/* eslint-enable camelcase */
var queue = [];
var isTransportSetup = false;
function setupTransportService() {
    if (!isTransportSetup) {
        processQueue(INITIAL_SEND_TIME_DELAY_MS);
        isTransportSetup = true;
    }
}
function processQueue(timeOffset) {
    setTimeout(function () {
        // If there is no remainingTries left, stop retrying.
        if (remainingTries === 0) {
            return;
        }
        // If there are no events to process, wait for DEFAULT_SEND_INTERVAL_MS and try again.
        if (!queue.length) {
            return processQueue(DEFAULT_SEND_INTERVAL_MS);
        }
        dispatchQueueEvents();
    }, timeOffset);
}
function dispatchQueueEvents() {
    // Extract events up to the maximum cap of single logRequest from top of "official queue".
    // The staged events will be used for current logRequest attempt, remaining events will be kept
    // for next attempt.
    var staged = queue.splice(0, MAX_EVENT_COUNT_PER_REQUEST);
    /* eslint-disable camelcase */
    // We will pass the JSON serialized event to the backend.
    var log_event = staged.map(function (evt) { return ({
        source_extension_json_proto3: evt.message,
        event_time_ms: String(evt.eventTime)
    }); });
    var data = {
        request_time_ms: String(Date.now()),
        client_info: {
            client_type: 1,
            js_client_info: {}
        },
        log_source: SettingsService.getInstance().logSource,
        log_event: log_event
    };
    /* eslint-enable camelcase */
    sendEventsToFl(data, staged).catch(function () {
        // If the request fails for some reason, add the events that were attempted
        // back to the primary queue to retry later.
        queue = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(staged, queue);
        remainingTries--;
        consoleLogger.info("Tries left: " + remainingTries + ".");
        processQueue(DEFAULT_SEND_INTERVAL_MS);
    });
}
function sendEventsToFl(data, staged) {
    return postToFlEndpoint(data)
        .then(function (res) {
        if (!res.ok) {
            consoleLogger.info('Call to Firebase backend failed.');
        }
        return res.json();
    })
        .then(function (res) {
        // Find the next call wait time from the response.
        var transportWait = Number(res.nextRequestWaitMillis);
        var requestOffset = DEFAULT_SEND_INTERVAL_MS;
        if (!isNaN(transportWait)) {
            requestOffset = Math.max(transportWait, requestOffset);
        }
        // Delete request if response include RESPONSE_ACTION_UNKNOWN or DELETE_REQUEST action.
        // Otherwise, retry request using normal scheduling if response include RETRY_REQUEST_LATER.
        var logResponseDetails = res.logResponseDetails;
        if (Array.isArray(logResponseDetails) &&
            logResponseDetails.length > 0 &&
            logResponseDetails[0].responseAction === 'RETRY_REQUEST_LATER') {
            queue = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(staged, queue);
            consoleLogger.info("Retry transport request later.");
        }
        remainingTries = DEFAULT_REMAINING_TRIES;
        // Schedule the next process.
        processQueue(requestOffset);
    });
}
function postToFlEndpoint(data) {
    var flTransportFullUrl = SettingsService.getInstance().getFlTransportFullUrl();
    return fetch(flTransportFullUrl, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}
function addToQueue(evt) {
    if (!evt.eventTime || !evt.message) {
        throw ERROR_FACTORY.create("invalid cc log" /* INVALID_CC_LOG */);
    }
    // Add the new event to the queue.
    queue = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(queue, [evt]);
}
/** Log handler for cc service to send the performance logs to the server. */
function transportHandler(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
serializer) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var message = serializer.apply(void 0, args);
        addToQueue({
            message: message,
            eventTime: Date.now()
        });
    };
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
/* eslint-enble camelcase */
var logger;
// This method is not called before initialization.
function sendLog(resource, resourceType) {
    if (!logger) {
        logger = transportHandler(serializer);
    }
    logger(resource, resourceType);
}
function logTrace(trace) {
    var settingsService = SettingsService.getInstance();
    // Do not log if trace is auto generated and instrumentation is disabled.
    if (!settingsService.instrumentationEnabled && trace.isAuto) {
        return;
    }
    // Do not log if trace is custom and data collection is disabled.
    if (!settingsService.dataCollectionEnabled && !trace.isAuto) {
        return;
    }
    // Do not log if required apis are not available.
    if (!Api.getInstance().requiredApisAvailable()) {
        return;
    }
    // Only log the page load auto traces if page is visible.
    if (trace.isAuto && getVisibilityState() !== VisibilityState.VISIBLE) {
        return;
    }
    if (isPerfInitialized()) {
        sendTraceLog(trace);
    }
    else {
        // Custom traces can be used before the initialization but logging
        // should wait until after.
        getInitializationPromise().then(function () { return sendTraceLog(trace); }, function () { return sendTraceLog(trace); });
    }
}
function sendTraceLog(trace) {
    if (!getIid()) {
        return;
    }
    var settingsService = SettingsService.getInstance();
    if (!settingsService.loggingEnabled ||
        !settingsService.logTraceAfterSampling) {
        return;
    }
    setTimeout(function () { return sendLog(trace, 1 /* Trace */); }, 0);
}
function logNetworkRequest(networkRequest) {
    var settingsService = SettingsService.getInstance();
    // Do not log network requests if instrumentation is disabled.
    if (!settingsService.instrumentationEnabled) {
        return;
    }
    // Do not log the js sdk's call to transport service domain to avoid unnecessary cycle.
    // Need to blacklist both old and new endpoints to avoid migration gap.
    var networkRequestUrl = networkRequest.url;
    // Blacklist old log endpoint and new transport endpoint.
    // Because Performance SDK doesn't instrument requests sent from SDK itself.
    var logEndpointUrl = settingsService.logEndPointUrl.split('?')[0];
    var flEndpointUrl = settingsService.flTransportEndpointUrl.split('?')[0];
    if (networkRequestUrl === logEndpointUrl ||
        networkRequestUrl === flEndpointUrl) {
        return;
    }
    if (!settingsService.loggingEnabled ||
        !settingsService.logNetworkAfterSampling) {
        return;
    }
    setTimeout(function () { return sendLog(networkRequest, 0 /* NetworkRequest */); }, 0);
}
function serializer(resource, resourceType) {
    if (resourceType === 0 /* NetworkRequest */) {
        return serializeNetworkRequest(resource);
    }
    return serializeTrace(resource);
}
function serializeNetworkRequest(networkRequest) {
    var networkRequestMetric = {
        url: networkRequest.url,
        http_method: networkRequest.httpMethod || 0,
        http_response_code: 200,
        response_payload_bytes: networkRequest.responsePayloadBytes,
        client_start_time_us: networkRequest.startTimeUs,
        time_to_response_initiated_us: networkRequest.timeToResponseInitiatedUs,
        time_to_response_completed_us: networkRequest.timeToResponseCompletedUs
    };
    var perfMetric = {
        application_info: getApplicationInfo(),
        network_request_metric: networkRequestMetric
    };
    return JSON.stringify(perfMetric);
}
function serializeTrace(trace) {
    var traceMetric = {
        name: trace.name,
        is_auto: trace.isAuto,
        client_start_time_us: trace.startTimeUs,
        duration_us: trace.durationUs
    };
    if (Object.keys(trace.counters).length !== 0) {
        traceMetric.counters = trace.counters;
    }
    var customAttributes = trace.getAttributes();
    if (Object.keys(customAttributes).length !== 0) {
        traceMetric.custom_attributes = customAttributes;
    }
    var perfMetric = {
        application_info: getApplicationInfo(),
        trace_metric: traceMetric
    };
    return JSON.stringify(perfMetric);
}
function getApplicationInfo() {
    return {
        google_app_id: SettingsService.getInstance().getAppId(),
        app_instance_id: getIid(),
        web_app_info: {
            sdk_version: SDK_VERSION,
            page_url: Api.getInstance().getUrl(),
            service_worker_status: getServiceWorkerStatus(),
            visibility_state: getVisibilityState(),
            effective_connection_type: getEffectiveConnectionType()
        },
        application_process_state: 0
    };
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
var MAX_METRIC_NAME_LENGTH = 100;
var RESERVED_AUTO_PREFIX = '_';
var oobMetrics = [
    FIRST_PAINT_COUNTER_NAME,
    FIRST_CONTENTFUL_PAINT_COUNTER_NAME,
    FIRST_INPUT_DELAY_COUNTER_NAME
];
/**
 * Returns true if the metric is custom and does not start with reserved prefix, or if
 * the metric is one of out of the box page load trace metrics.
 */
function isValidMetricName(name, traceName) {
    if (name.length === 0 || name.length > MAX_METRIC_NAME_LENGTH) {
        return false;
    }
    return ((traceName &&
        traceName.startsWith(OOB_TRACE_PAGE_LOAD_PREFIX) &&
        oobMetrics.indexOf(name) > -1) ||
        !name.startsWith(RESERVED_AUTO_PREFIX));
}
/**
 * Converts the provided value to an integer value to be used in case of a metric.
 * @param providedValue Provided number value of the metric that needs to be converted to an integer.
 *
 * @returns Converted integer number to be set for the metric.
 */
function convertMetricValueToInteger(providedValue) {
    var valueAsInteger = Math.floor(providedValue);
    if (valueAsInteger < providedValue) {
        consoleLogger.info("Metric value should be an Integer, setting the value as : " + valueAsInteger + ".");
    }
    return valueAsInteger;
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
var Trace = /** @class */ (function () {
    /**
     * @param name The name of the trace.
     * @param isAuto If the trace is auto-instrumented.
     * @param traceMeasureName The name of the measure marker in user timing specification. This field
     * is only set when the trace is built for logging when the user directly uses the user timing
     * api (performance.mark and performance.measure).
     */
    function Trace(name, isAuto, traceMeasureName) {
        if (isAuto === void 0) { isAuto = false; }
        this.name = name;
        this.isAuto = isAuto;
        this.state = 1 /* UNINITIALIZED */;
        this.customAttributes = {};
        this.counters = {};
        this.api = Api.getInstance();
        this.randomId = Math.floor(Math.random() * 1000000);
        if (!this.isAuto) {
            this.traceStartMark = TRACE_START_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
            this.traceStopMark = TRACE_STOP_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
            this.traceMeasure =
                traceMeasureName ||
                    TRACE_MEASURE_PREFIX + "-" + this.randomId + "-" + this.name;
            if (traceMeasureName) {
                // For the case of direct user timing traces, no start stop will happen. The measure object
                // is already available.
                this.calculateTraceMetrics();
            }
        }
    }
    /**
     * Starts a trace. The measurement of the duration starts at this point.
     */
    Trace.prototype.start = function () {
        if (this.state !== 1 /* UNINITIALIZED */) {
            throw ERROR_FACTORY.create("trace started" /* TRACE_STARTED_BEFORE */, {
                traceName: this.name
            });
        }
        this.api.mark(this.traceStartMark);
        this.state = 2 /* RUNNING */;
    };
    /**
     * Stops the trace. The measurement of the duration of the trace stops at this point and trace
     * is logged.
     */
    Trace.prototype.stop = function () {
        if (this.state !== 2 /* RUNNING */) {
            throw ERROR_FACTORY.create("trace stopped" /* TRACE_STOPPED_BEFORE */, {
                traceName: this.name
            });
        }
        this.state = 3 /* TERMINATED */;
        this.api.mark(this.traceStopMark);
        this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark);
        this.calculateTraceMetrics();
        logTrace(this);
    };
    /**
     * Records a trace with predetermined values. If this method is used a trace is created and logged
     * directly. No need to use start and stop methods.
     * @param startTime Trace start time since epoch in millisec
     * @param duration The duraction of the trace in millisec
     * @param options An object which can optionally hold maps of custom metrics and custom attributes
     */
    Trace.prototype.record = function (startTime, duration, options) {
        if (startTime <= 0) {
            throw ERROR_FACTORY.create("nonpositive trace startTime" /* NONPOSITIVE_TRACE_START_TIME */, {
                traceName: this.name
            });
        }
        if (duration <= 0) {
            throw ERROR_FACTORY.create("nonpositive trace duration" /* NONPOSITIVE_TRACE_DURATION */, {
                traceName: this.name
            });
        }
        this.durationUs = Math.floor(duration * 1000);
        this.startTimeUs = Math.floor(startTime * 1000);
        if (options && options.attributes) {
            this.customAttributes = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, options.attributes);
        }
        if (options && options.metrics) {
            for (var _i = 0, _a = Object.keys(options.metrics); _i < _a.length; _i++) {
                var metric = _a[_i];
                if (!isNaN(Number(options.metrics[metric]))) {
                    this.counters[metric] = Number(Math.floor(options.metrics[metric]));
                }
            }
        }
        logTrace(this);
    };
    /**
     * Increments a custom metric by a certain number or 1 if number not specified. Will create a new
     * custom metric if one with the given name does not exist. The value will be floored down to an
     * integer.
     * @param counter Name of the custom metric
     * @param numAsInteger Increment by value
     */
    Trace.prototype.incrementMetric = function (counter, numAsInteger) {
        if (numAsInteger === void 0) { numAsInteger = 1; }
        if (this.counters[counter] === undefined) {
            this.putMetric(counter, numAsInteger);
        }
        else {
            this.putMetric(counter, this.counters[counter] + numAsInteger);
        }
    };
    /**
     * Sets a custom metric to a specified value. Will create a new custom metric if one with the
     * given name does not exist. The value will be floored down to an integer.
     * @param counter Name of the custom metric
     * @param numAsInteger Set custom metric to this value
     */
    Trace.prototype.putMetric = function (counter, numAsInteger) {
        if (isValidMetricName(counter, this.name)) {
            this.counters[counter] = convertMetricValueToInteger(numAsInteger);
        }
        else {
            throw ERROR_FACTORY.create("invalid custom metric name" /* INVALID_CUSTOM_METRIC_NAME */, {
                customMetricName: counter
            });
        }
    };
    /**
     * Returns the value of the custom metric by that name. If a custom metric with that name does
     * not exist will return zero.
     * @param counter
     */
    Trace.prototype.getMetric = function (counter) {
        return this.counters[counter] || 0;
    };
    /**
     * Sets a custom attribute of a trace to a certain value.
     * @param attr
     * @param value
     */
    Trace.prototype.putAttribute = function (attr, value) {
        var isValidName = isValidCustomAttributeName(attr);
        var isValidValue = isValidCustomAttributeValue(value);
        if (isValidName && isValidValue) {
            this.customAttributes[attr] = value;
            return;
        }
        // Throw appropriate error when the attribute name or value is invalid.
        if (!isValidName) {
            throw ERROR_FACTORY.create("invalid attribute name" /* INVALID_ATTRIBUTE_NAME */, {
                attributeName: attr
            });
        }
        if (!isValidValue) {
            throw ERROR_FACTORY.create("invalid attribute value" /* INVALID_ATTRIBUTE_VALUE */, {
                attributeValue: value
            });
        }
    };
    /**
     * Retrieves the value a custom attribute of a trace is set to.
     * @param attr
     */
    Trace.prototype.getAttribute = function (attr) {
        return this.customAttributes[attr];
    };
    Trace.prototype.removeAttribute = function (attr) {
        if (this.customAttributes[attr] === undefined) {
            return;
        }
        delete this.customAttributes[attr];
    };
    Trace.prototype.getAttributes = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.customAttributes);
    };
    Trace.prototype.setStartTime = function (startTime) {
        this.startTimeUs = startTime;
    };
    Trace.prototype.setDuration = function (duration) {
        this.durationUs = duration;
    };
    /**
     * Calculates and assigns the duration and start time of the trace using the measure performance
     * entry.
     */
    Trace.prototype.calculateTraceMetrics = function () {
        var perfMeasureEntries = this.api.getEntriesByName(this.traceMeasure);
        var perfMeasureEntry = perfMeasureEntries && perfMeasureEntries[0];
        if (perfMeasureEntry) {
            this.durationUs = Math.floor(perfMeasureEntry.duration * 1000);
            this.startTimeUs = Math.floor((perfMeasureEntry.startTime + this.api.getTimeOrigin()) * 1000);
        }
    };
    /**
     * @param navigationTimings A single element array which contains the navigationTIming object of
     * the page load
     * @param paintTimings A array which contains paintTiming object of the page load
     * @param firstInputDelay First input delay in millisec
     */
    Trace.createOobTrace = function (navigationTimings, paintTimings, firstInputDelay) {
        var route = Api.getInstance().getUrl();
        if (!route) {
            return;
        }
        var trace = new Trace(OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
        var timeOriginUs = Math.floor(Api.getInstance().getTimeOrigin() * 1000);
        trace.setStartTime(timeOriginUs);
        // navigationTimings includes only one element.
        if (navigationTimings && navigationTimings[0]) {
            trace.setDuration(Math.floor(navigationTimings[0].duration * 1000));
            trace.putMetric('domInteractive', Math.floor(navigationTimings[0].domInteractive * 1000));
            trace.putMetric('domContentLoadedEventEnd', Math.floor(navigationTimings[0].domContentLoadedEventEnd * 1000));
            trace.putMetric('loadEventEnd', Math.floor(navigationTimings[0].loadEventEnd * 1000));
        }
        var FIRST_PAINT = 'first-paint';
        var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';
        if (paintTimings) {
            var firstPaint = paintTimings.find(function (paintObject) { return paintObject.name === FIRST_PAINT; });
            if (firstPaint && firstPaint.startTime) {
                trace.putMetric(FIRST_PAINT_COUNTER_NAME, Math.floor(firstPaint.startTime * 1000));
            }
            var firstContentfulPaint = paintTimings.find(function (paintObject) { return paintObject.name === FIRST_CONTENTFUL_PAINT; });
            if (firstContentfulPaint && firstContentfulPaint.startTime) {
                trace.putMetric(FIRST_CONTENTFUL_PAINT_COUNTER_NAME, Math.floor(firstContentfulPaint.startTime * 1000));
            }
            if (firstInputDelay) {
                trace.putMetric(FIRST_INPUT_DELAY_COUNTER_NAME, Math.floor(firstInputDelay * 1000));
            }
        }
        logTrace(trace);
    };
    Trace.createUserTimingTrace = function (measureName) {
        var trace = new Trace(measureName, false, measureName);
        logTrace(trace);
    };
    return Trace;
}());

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
function createNetworkRequestEntry(entry) {
    var performanceEntry = entry;
    if (!performanceEntry || performanceEntry.responseStart === undefined) {
        return;
    }
    var timeOrigin = Api.getInstance().getTimeOrigin();
    var startTimeUs = Math.floor((performanceEntry.startTime + timeOrigin) * 1000);
    var timeToResponseInitiatedUs = performanceEntry.responseStart
        ? Math.floor((performanceEntry.responseStart - performanceEntry.startTime) * 1000)
        : undefined;
    var timeToResponseCompletedUs = Math.floor((performanceEntry.responseEnd - performanceEntry.startTime) * 1000);
    // Remove the query params from logged network request url.
    var url = performanceEntry.name && performanceEntry.name.split('?')[0];
    var networkRequest = {
        url: url,
        responsePayloadBytes: performanceEntry.transferSize,
        startTimeUs: startTimeUs,
        timeToResponseInitiatedUs: timeToResponseInitiatedUs,
        timeToResponseCompletedUs: timeToResponseCompletedUs
    };
    logNetworkRequest(networkRequest);
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
var FID_WAIT_TIME_MS = 5000;
function setupOobResources() {
    // Do not initialize unless iid is available.
    if (!getIid()) {
        return;
    }
    // The load event might not have fired yet, and that means performance navigation timing
    // object has a duration of 0. The setup should run after all current tasks in js queue.
    setTimeout(function () { return setupOobTraces(); }, 0);
    setTimeout(function () { return setupNetworkRequests(); }, 0);
    setTimeout(function () { return setupUserTimingTraces(); }, 0);
}
function setupNetworkRequests() {
    var api = Api.getInstance();
    var resources = api.getEntriesByType('resource');
    for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
        var resource = resources_1[_i];
        createNetworkRequestEntry(resource);
    }
    api.setupObserver('resource', createNetworkRequestEntry);
}
function setupOobTraces() {
    var api = Api.getInstance();
    var navigationTimings = api.getEntriesByType('navigation');
    var paintTimings = api.getEntriesByType('paint');
    // If First Input Desly polyfill is added to the page, report the fid value.
    // https://github.com/GoogleChromeLabs/first-input-delay
    if (api.onFirstInputDelay) {
        // If the fid call back is not called for certain time, continue without it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var timeoutId_1 = setTimeout(function () {
            Trace.createOobTrace(navigationTimings, paintTimings);
            timeoutId_1 = undefined;
        }, FID_WAIT_TIME_MS);
        api.onFirstInputDelay(function (fid) {
            if (timeoutId_1) {
                clearTimeout(timeoutId_1);
                Trace.createOobTrace(navigationTimings, paintTimings, fid);
            }
        });
    }
    else {
        Trace.createOobTrace(navigationTimings, paintTimings);
    }
}
function setupUserTimingTraces() {
    var api = Api.getInstance();
    // Run through the measure performance entries collected up to this point.
    var measures = api.getEntriesByType('measure');
    for (var _i = 0, measures_1 = measures; _i < measures_1.length; _i++) {
        var measure = measures_1[_i];
        createUserTimingTrace(measure);
    }
    // Setup an observer to capture the measures from this point on.
    api.setupObserver('measure', createUserTimingTrace);
}
function createUserTimingTrace(measure) {
    var measureName = measure.name;
    // Do not create a trace, if the user timing marks and measures are created by the sdk itself.
    if (measureName.substring(0, TRACE_MEASURE_PREFIX.length) ===
        TRACE_MEASURE_PREFIX) {
        return;
    }
    Trace.createUserTimingTrace(measureName);
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
var PerformanceController = /** @class */ (function () {
    function PerformanceController(app) {
        this.app = app;
        if (Api.getInstance().requiredApisAvailable()) {
            Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["validateIndexedDBOpenable"])()
                .then(function (isAvailable) {
                if (isAvailable) {
                    setupTransportService();
                    getInitializationPromise().then(setupOobResources, setupOobResources);
                }
            })
                .catch(function (error) {
                consoleLogger.info("Environment doesn't support IndexedDB: " + error);
            });
        }
    }
    PerformanceController.prototype.trace = function (name) {
        return new Trace(name);
    };
    Object.defineProperty(PerformanceController.prototype, "instrumentationEnabled", {
        get: function () {
            return SettingsService.getInstance().instrumentationEnabled;
        },
        set: function (val) {
            SettingsService.getInstance().instrumentationEnabled = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerformanceController.prototype, "dataCollectionEnabled", {
        get: function () {
            return SettingsService.getInstance().dataCollectionEnabled;
        },
        set: function (val) {
            SettingsService.getInstance().dataCollectionEnabled = val;
        },
        enumerable: false,
        configurable: true
    });
    return PerformanceController;
}());

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
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
function registerPerformance(instance) {
    var factoryMethod = function (app, installations) {
        if (app.name !== DEFAULT_ENTRY_NAME) {
            throw ERROR_FACTORY.create("FB not default" /* FB_NOT_DEFAULT */);
        }
        if (typeof window === 'undefined') {
            throw ERROR_FACTORY.create("no window" /* NO_WINDOW */);
        }
        setupApi(window);
        SettingsService.getInstance().firebaseAppInstance = app;
        SettingsService.getInstance().installationsService = installations;
        return new PerformanceController(app);
    };
    // Register performance with firebase-app.
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"]('performance', function (container) {
        /* Dependencies */
        // getImmediate for FirebaseApp will always succeed
        var app = container.getProvider('app').getImmediate();
        // The following call will always succeed because perf has `import '@firebase/installations'`
        var installations = container
            .getProvider('installations')
            .getImmediate();
        return factoryMethod(app, installations);
    }, "PUBLIC" /* PUBLIC */));
    instance.registerVersion(name, version);
}
registerPerformance(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/performance/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/firebase/performance/dist/index.esm.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_performance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/performance */ "./node_modules/@firebase/performance/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/idb/build/idb.js":
/*!***************************************!*\
  !*** ./node_modules/idb/build/idb.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
      if (!(funcName in Constructor.prototype)) return;

      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  function openDb(name, version, upgradeCallback) {
    var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
    var request = p.request;

    if (request) {
      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };
    }

    return p.then(function(db) {
      return new DB(db);
    });
  }

  function deleteDb(name) {
    return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
  }

  exports.openDb = openDb;
  exports.deleteDb = deleteDb;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvcGVyZm9ybWFuY2UvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvaWRiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ1c7QUFDNkI7QUFDaEI7QUFDaEM7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMEdBQTBHLFdBQVc7QUFDckg7QUFDQTtBQUNBLGtEQUFrRCxhQUFhLDZCQUE2QixZQUFZLEVBQUUsY0FBYyxHQUFHLGVBQWU7QUFDMUk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFZO0FBQ3BDO0FBQ0E7QUFDQSw2QkFBNkIsNERBQWE7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLGlDQUFpQyxFQUFFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsc0RBQVE7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxHQUFHO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzREFBUSxnREFBZ0QscUJBQXFCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVEsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQVM7QUFDcEI7QUFDQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQVM7QUFDcEI7QUFDQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQVM7QUFDcEI7QUFDQTtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUFTO0FBQ3BCO0FBQ0EsZUFBZSx5REFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsaUNBQWlDLEVBQUU7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNCQUFzQjtBQUN4RCxXQUFXLHVEQUFTO0FBQ3BCO0FBQ0EsZUFBZSx5REFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQVM7QUFDcEI7QUFDQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFRLENBQUMsc0RBQVEsR0FBRyxjQUFjLGFBQWEscUNBQXFDLEVBQUU7QUFDekc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHNEQUFRLENBQUMsc0RBQVEsR0FBRyx1QkFBdUIsdUJBQXVCO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0RBQVEsQ0FBQyxzREFBUSxHQUFHLHVCQUF1QixhQUFhLHFDQUFxQyxFQUFFO0FBQzlJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzREFBUSxDQUFDLHNEQUFRLEdBQUcsY0FBYyxpQ0FBaUM7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzQkFBc0I7QUFDeEQsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUFTO0FBQ3BCO0FBQ0EsZUFBZSx5REFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLGlDQUFpQyxFQUFFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUFTO0FBQ3BCO0FBQ0EsZUFBZSx5REFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzREFBUSxtREFBbUQsc0JBQXNCO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNkRBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNEJBQTRCLEVBQUU7QUFDOUQ7QUFDQTtBQUNBLGFBQWE7QUFDYixpQ0FBaUMseUNBQXlDLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFROztBQUVHO0FBQ2pDOzs7Ozs7Ozs7Ozs7O0FDanpDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ0o7QUFDZ0I7QUFDOEM7QUFDM0M7QUFDSjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsNkRBQTZELFdBQVc7QUFDeEUsNkRBQTZELFdBQVc7QUFDeEUsbUZBQW1GLFdBQVc7QUFDOUYsZ0ZBQWdGLFdBQVc7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsZUFBZTtBQUNoRyxvRkFBb0YsZ0JBQWdCO0FBQ3BHLDZGQUE2RixrQkFBa0I7QUFDL0c7QUFDQTtBQUNBLHdCQUF3QiwyREFBWTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQU07QUFDOUIseUJBQXlCLHlEQUFROztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyRUFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZ0JBQWdCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDRCQUE0QixFQUFFO0FBQy9EO0FBQ0EsaUJBQWlCLEVBQUU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQW1EO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCLEVBQUU7QUFDckQsOEJBQThCLHVCQUF1QixFQUFFO0FBQ3ZELDJCQUEyQixxQ0FBcUMsRUFBRSxlQUFlLHFDQUFxQyxFQUFFO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLEtBQUssRUFBRSxFQUFFO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw0QkFBNEIsRUFBRSxlQUFlLDRCQUE0QixFQUFFO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0NBQXNDLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQXdELEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNEQUFRLEdBQUc7QUFDL0M7QUFDQTtBQUNBLCtEQUErRCxnQkFBZ0I7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQVEsR0FBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSx5Q0FBeUMsRUFBRTtBQUNsSDtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsb0RBQW9ELEVBQUU7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCLEVBQUU7QUFDdkQsNEJBQTRCLCtCQUErQixFQUFFO0FBQzdELDRCQUE0QixnQ0FBZ0MsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx3QkFBd0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdGQUF5QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNkRBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFROztBQUVHO0FBQy9COzs7Ozs7Ozs7Ozs7O0FDMzZDQTtBQUFBO0FBQStCO0FBQy9COzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxTQUNtRDtBQUNyRCxDQUFDLDJCQUEyQjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnREFBZ0QsY0FBYzs7QUFFOUQsQ0FBQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BlcmZvcm1hbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yLCBfX3NwcmVhZCwgX192YWx1ZXMsIF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgb3BlbkRiIH0gZnJvbSAnaWRiJztcblxudmFyIG5hbWUgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zXCI7XG52YXIgdmVyc2lvbiA9IFwiMC40LjIwXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBQRU5ESU5HX1RJTUVPVVRfTVMgPSAxMDAwMDtcclxudmFyIFBBQ0tBR0VfVkVSU0lPTiA9IFwidzpcIiArIHZlcnNpb247XHJcbnZhciBJTlRFUk5BTF9BVVRIX1ZFUlNJT04gPSAnRklTX3YyJztcclxudmFyIElOU1RBTExBVElPTlNfQVBJX1VSTCA9ICdodHRwczovL2ZpcmViYXNlaW5zdGFsbGF0aW9ucy5nb29nbGVhcGlzLmNvbS92MSc7XHJcbnZhciBUT0tFTl9FWFBJUkFUSU9OX0JVRkZFUiA9IDYwICogNjAgKiAxMDAwOyAvLyBPbmUgaG91clxyXG52YXIgU0VSVklDRSA9ICdpbnN0YWxsYXRpb25zJztcclxudmFyIFNFUlZJQ0VfTkFNRSA9ICdJbnN0YWxsYXRpb25zJztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIF9hO1xyXG52YXIgRVJST1JfREVTQ1JJUFRJT05fTUFQID0gKF9hID0ge30sXHJcbiAgICBfYVtcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBNSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovXSA9ICdNaXNzaW5nIEFwcCBjb25maWd1cmF0aW9uIHZhbHVlOiBcInskdmFsdWVOYW1lfVwiJyxcclxuICAgIF9hW1wibm90LXJlZ2lzdGVyZWRcIiAvKiBOT1RfUkVHSVNURVJFRCAqL10gPSAnRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIG5vdCByZWdpc3RlcmVkLicsXHJcbiAgICBfYVtcImluc3RhbGxhdGlvbi1ub3QtZm91bmRcIiAvKiBJTlNUQUxMQVRJT05fTk9UX0ZPVU5EICovXSA9ICdGaXJlYmFzZSBJbnN0YWxsYXRpb24gbm90IGZvdW5kLicsXHJcbiAgICBfYVtcInJlcXVlc3QtZmFpbGVkXCIgLyogUkVRVUVTVF9GQUlMRUQgKi9dID0gJ3skcmVxdWVzdE5hbWV9IHJlcXVlc3QgZmFpbGVkIHdpdGggZXJyb3IgXCJ7JHNlcnZlckNvZGV9IHskc2VydmVyU3RhdHVzfTogeyRzZXJ2ZXJNZXNzYWdlfVwiJyxcclxuICAgIF9hW1wiYXBwLW9mZmxpbmVcIiAvKiBBUFBfT0ZGTElORSAqL10gPSAnQ291bGQgbm90IHByb2Nlc3MgcmVxdWVzdC4gQXBwbGljYXRpb24gb2ZmbGluZS4nLFxyXG4gICAgX2FbXCJkZWxldGUtcGVuZGluZy1yZWdpc3RyYXRpb25cIiAvKiBERUxFVEVfUEVORElOR19SRUdJU1RSQVRJT04gKi9dID0gXCJDYW4ndCBkZWxldGUgaW5zdGFsbGF0aW9uIHdoaWxlIHRoZXJlIGlzIGEgcGVuZGluZyByZWdpc3RyYXRpb24gcmVxdWVzdC5cIixcclxuICAgIF9hKTtcclxudmFyIEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5KFNFUlZJQ0UsIFNFUlZJQ0VfTkFNRSwgRVJST1JfREVTQ1JJUFRJT05fTUFQKTtcclxuLyoqIFJldHVybnMgdHJ1ZSBpZiBlcnJvciBpcyBhIEZpcmViYXNlRXJyb3IgdGhhdCBpcyBiYXNlZCBvbiBhbiBlcnJvciBmcm9tIHRoZSBzZXJ2ZXIuICovXHJcbmZ1bmN0aW9uIGlzU2VydmVyRXJyb3IoZXJyb3IpIHtcclxuICAgIHJldHVybiAoZXJyb3IgaW5zdGFuY2VvZiBGaXJlYmFzZUVycm9yICYmXHJcbiAgICAgICAgZXJyb3IuY29kZS5pbmNsdWRlcyhcInJlcXVlc3QtZmFpbGVkXCIgLyogUkVRVUVTVF9GQUlMRUQgKi8pKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoX2EpIHtcclxuICAgIHZhciBwcm9qZWN0SWQgPSBfYS5wcm9qZWN0SWQ7XHJcbiAgICByZXR1cm4gSU5TVEFMTEFUSU9OU19BUElfVVJMICsgXCIvcHJvamVjdHMvXCIgKyBwcm9qZWN0SWQgKyBcIi9pbnN0YWxsYXRpb25zXCI7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9rZW46IHJlc3BvbnNlLnRva2VuLFxyXG4gICAgICAgIHJlcXVlc3RTdGF0dXM6IDIgLyogQ09NUExFVEVEICovLFxyXG4gICAgICAgIGV4cGlyZXNJbjogZ2V0RXhwaXJlc0luRnJvbVJlc3BvbnNlRXhwaXJlc0luKHJlc3BvbnNlLmV4cGlyZXNJbiksXHJcbiAgICAgICAgY3JlYXRpb25UaW1lOiBEYXRlLm5vdygpXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldEVycm9yRnJvbVJlc3BvbnNlKHJlcXVlc3ROYW1lLCByZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXNwb25zZUpzb24sIGVycm9yRGF0YTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JEYXRhID0gcmVzcG9uc2VKc29uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInJlcXVlc3QtZmFpbGVkXCIgLyogUkVRVUVTVF9GQUlMRUQgKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3ROYW1lOiByZXF1ZXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlckNvZGU6IGVycm9yRGF0YS5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyTWVzc2FnZTogZXJyb3JEYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJTdGF0dXM6IGVycm9yRGF0YS5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRIZWFkZXJzKF9hKSB7XHJcbiAgICB2YXIgYXBpS2V5ID0gX2EuYXBpS2V5O1xyXG4gICAgcmV0dXJuIG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICd4LWdvb2ctYXBpLWtleSc6IGFwaUtleVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywgX2EpIHtcclxuICAgIHZhciByZWZyZXNoVG9rZW4gPSBfYS5yZWZyZXNoVG9rZW47XHJcbiAgICB2YXIgaGVhZGVycyA9IGdldEhlYWRlcnMoYXBwQ29uZmlnKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxscyB0aGUgcGFzc2VkIGluIGZldGNoIHdyYXBwZXIgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlLlxyXG4gKiBJZiB0aGUgcmV0dXJuZWQgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIG9mIDV4eCwgcmUtcnVucyB0aGUgZnVuY3Rpb24gb25jZSBhbmRcclxuICogcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiByZXRyeUlmU2VydmVyRXJyb3IoZm4pIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPj0gNTAwICYmIHJlc3VsdC5zdGF0dXMgPCA2MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW50ZXJuYWwgU2VydmVyIEVycm9yLiBSZXRyeSByZXF1ZXN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZm4oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRFeHBpcmVzSW5Gcm9tUmVzcG9uc2VFeHBpcmVzSW4ocmVzcG9uc2VFeHBpcmVzSW4pIHtcclxuICAgIC8vIFRoaXMgd29ya3MgYmVjYXVzZSB0aGUgc2VydmVyIHdpbGwgbmV2ZXIgcmVzcG9uZCB3aXRoIGZyYWN0aW9ucyBvZiBhIHNlY29uZC5cclxuICAgIHJldHVybiBOdW1iZXIocmVzcG9uc2VFeHBpcmVzSW4ucmVwbGFjZSgncycsICcwMDAnKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pIHtcclxuICAgIHJldHVybiBJTlRFUk5BTF9BVVRIX1ZFUlNJT04gKyBcIiBcIiArIHJlZnJlc2hUb2tlbjtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgX2EpIHtcclxuICAgIHZhciBmaWQgPSBfYS5maWQ7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVuZHBvaW50LCBoZWFkZXJzLCBib2R5LCByZXF1ZXN0LCByZXNwb25zZSwgcmVzcG9uc2VWYWx1ZSwgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50ID0gZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IGdldEhlYWRlcnMoYXBwQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWQ6IGZpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFZlcnNpb246IElOVEVSTkFMX0FVVEhfVkVSU0lPTixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IGFwcENvbmZpZy5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2RrVmVyc2lvbjogUEFDS0FHRV9WRVJTSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJldHJ5SWZTZXJ2ZXJFcnJvcihmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCk7IH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVmFsdWUgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWQ6IHJlc3BvbnNlVmFsdWUuZmlkIHx8IGZpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAyIC8qIENPTVBMRVRFRCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiByZXNwb25zZVZhbHVlLnJlZnJlc2hUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFRva2VuOiBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZVZhbHVlLmF1dGhUb2tlbilcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRFcnJvckZyb21SZXNwb25zZSgnQ3JlYXRlIEluc3RhbGxhdGlvbicsIHJlc3BvbnNlKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHRocm93IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgZ2l2ZW4gdGltZSBwYXNzZXMuICovXHJcbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcclxuICAgIH0pO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGJ1ZmZlclRvQmFzZTY0VXJsU2FmZShhcnJheSkge1xyXG4gICAgdmFyIGI2NCA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIF9fc3ByZWFkKGFycmF5KSkpO1xyXG4gICAgcmV0dXJuIGI2NC5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgVkFMSURfRklEX1BBVFRFUk4gPSAvXltjZGVmXVtcXHctXXsyMX0kLztcclxudmFyIElOVkFMSURfRklEID0gJyc7XHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBuZXcgRklEIHVzaW5nIHJhbmRvbSB2YWx1ZXMgZnJvbSBXZWIgQ3J5cHRvIEFQSS5cclxuICogUmV0dXJucyBhbiBlbXB0eSBzdHJpbmcgaWYgRklEIGdlbmVyYXRpb24gZmFpbHMgZm9yIGFueSByZWFzb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUZpZCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQSB2YWxpZCBGSUQgaGFzIGV4YWN0bHkgMjIgYmFzZTY0IGNoYXJhY3RlcnMsIHdoaWNoIGlzIDEzMiBiaXRzLCBvciAxNi41XHJcbiAgICAgICAgLy8gYnl0ZXMuIG91ciBpbXBsZW1lbnRhdGlvbiBnZW5lcmF0ZXMgYSAxNyBieXRlIGFycmF5IGluc3RlYWQuXHJcbiAgICAgICAgdmFyIGZpZEJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KDE3KTtcclxuICAgICAgICB2YXIgY3J5cHRvXzEgPSBzZWxmLmNyeXB0byB8fCBzZWxmLm1zQ3J5cHRvO1xyXG4gICAgICAgIGNyeXB0b18xLmdldFJhbmRvbVZhbHVlcyhmaWRCeXRlQXJyYXkpO1xyXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIGZpcnN0IDQgcmFuZG9tIGJpdHMgd2l0aCB0aGUgY29uc3RhbnQgRklEIGhlYWRlciBvZiAwYjAxMTEuXHJcbiAgICAgICAgZmlkQnl0ZUFycmF5WzBdID0gMTEyICsgKGZpZEJ5dGVBcnJheVswXSAlIDE2KTtcclxuICAgICAgICB2YXIgZmlkID0gZW5jb2RlKGZpZEJ5dGVBcnJheSk7XHJcbiAgICAgICAgcmV0dXJuIFZBTElEX0ZJRF9QQVRURVJOLnRlc3QoZmlkKSA/IGZpZCA6IElOVkFMSURfRklEO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgLy8gRklEIGdlbmVyYXRpb24gZXJyb3JlZFxyXG4gICAgICAgIHJldHVybiBJTlZBTElEX0ZJRDtcclxuICAgIH1cclxufVxyXG4vKiogQ29udmVydHMgYSBGSUQgVWludDhBcnJheSB0byBhIGJhc2U2NCBzdHJpbmcgcmVwcmVzZW50YXRpb24uICovXHJcbmZ1bmN0aW9uIGVuY29kZShmaWRCeXRlQXJyYXkpIHtcclxuICAgIHZhciBiNjRTdHJpbmcgPSBidWZmZXJUb0Jhc2U2NFVybFNhZmUoZmlkQnl0ZUFycmF5KTtcclxuICAgIC8vIFJlbW92ZSB0aGUgMjNyZCBjaGFyYWN0ZXIgdGhhdCB3YXMgYWRkZWQgYmVjYXVzZSBvZiB0aGUgZXh0cmEgNCBiaXRzIGF0IHRoZVxyXG4gICAgLy8gZW5kIG9mIG91ciAxNyBieXRlIGFycmF5LCBhbmQgdGhlICc9JyBwYWRkaW5nLlxyXG4gICAgcmV0dXJuIGI2NFN0cmluZy5zdWJzdHIoMCwgMjIpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKiBSZXR1cm5zIGEgc3RyaW5nIGtleSB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBhcHAuICovXHJcbmZ1bmN0aW9uIGdldEtleShhcHBDb25maWcpIHtcclxuICAgIHJldHVybiBhcHBDb25maWcuYXBwTmFtZSArIFwiIVwiICsgYXBwQ29uZmlnLmFwcElkO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBmaWRDaGFuZ2VDYWxsYmFja3MgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKiBDYWxscyB0aGUgb25JZENoYW5nZSBjYWxsYmFja3Mgd2l0aCB0aGUgbmV3IEZJRCB2YWx1ZSwgYW5kIGJyb2FkY2FzdHMgdGhlXHJcbiAqIGNoYW5nZSB0byBvdGhlciB0YWJzLlxyXG4gKi9cclxuZnVuY3Rpb24gZmlkQ2hhbmdlZChhcHBDb25maWcsIGZpZCkge1xyXG4gICAgdmFyIGtleSA9IGdldEtleShhcHBDb25maWcpO1xyXG4gICAgY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhrZXksIGZpZCk7XHJcbiAgICBicm9hZGNhc3RGaWRDaGFuZ2Uoa2V5LCBmaWQpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZENhbGxiYWNrKGFwcENvbmZpZywgY2FsbGJhY2spIHtcclxuICAgIC8vIE9wZW4gdGhlIGJyb2FkY2FzdCBjaGFubmVsIGlmIGl0J3Mgbm90IGFscmVhZHkgb3BlbixcclxuICAgIC8vIHRvIGJlIGFibGUgdG8gbGlzdGVuIHRvIGNoYW5nZSBldmVudHMgZnJvbSBvdGhlciB0YWJzLlxyXG4gICAgZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpO1xyXG4gICAgdmFyIGtleSA9IGdldEtleShhcHBDb25maWcpO1xyXG4gICAgdmFyIGNhbGxiYWNrU2V0ID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xyXG4gICAgaWYgKCFjYWxsYmFja1NldCkge1xyXG4gICAgICAgIGNhbGxiYWNrU2V0ID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGZpZENoYW5nZUNhbGxiYWNrcy5zZXQoa2V5LCBjYWxsYmFja1NldCk7XHJcbiAgICB9XHJcbiAgICBjYWxsYmFja1NldC5hZGQoY2FsbGJhY2spO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUNhbGxiYWNrKGFwcENvbmZpZywgY2FsbGJhY2spIHtcclxuICAgIHZhciBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIHZhciBjYWxsYmFja1NldCA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcclxuICAgIGlmICghY2FsbGJhY2tTZXQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spO1xyXG4gICAgaWYgKGNhbGxiYWNrU2V0LnNpemUgPT09IDApIHtcclxuICAgICAgICBmaWRDaGFuZ2VDYWxsYmFja3MuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcbiAgICAvLyBDbG9zZSBicm9hZGNhc3QgY2hhbm5lbCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjYWxsYmFja3MuXHJcbiAgICBjbG9zZUJyb2FkY2FzdENoYW5uZWwoKTtcclxufVxyXG5mdW5jdGlvbiBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGtleSwgZmlkKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIHZhciBjYWxsYmFja3MgPSBmaWRDaGFuZ2VDYWxsYmFja3MuZ2V0KGtleSk7XHJcbiAgICBpZiAoIWNhbGxiYWNrcykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yICh2YXIgY2FsbGJhY2tzXzEgPSBfX3ZhbHVlcyhjYWxsYmFja3MpLCBjYWxsYmFja3NfMV8xID0gY2FsbGJhY2tzXzEubmV4dCgpOyAhY2FsbGJhY2tzXzFfMS5kb25lOyBjYWxsYmFja3NfMV8xID0gY2FsbGJhY2tzXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc18xXzEudmFsdWU7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGZpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3NfMV8xICYmICFjYWxsYmFja3NfMV8xLmRvbmUgJiYgKF9hID0gY2FsbGJhY2tzXzEucmV0dXJuKSkgX2EuY2FsbChjYWxsYmFja3NfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBicm9hZGNhc3RGaWRDaGFuZ2Uoa2V5LCBmaWQpIHtcclxuICAgIHZhciBjaGFubmVsID0gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpO1xyXG4gICAgaWYgKGNoYW5uZWwpIHtcclxuICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHsga2V5OiBrZXksIGZpZDogZmlkIH0pO1xyXG4gICAgfVxyXG4gICAgY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk7XHJcbn1cclxudmFyIGJyb2FkY2FzdENoYW5uZWwgPSBudWxsO1xyXG4vKiogT3BlbnMgYW5kIHJldHVybnMgYSBCcm9hZGNhc3RDaGFubmVsIGlmIGl0IGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gKi9cclxuZnVuY3Rpb24gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpIHtcclxuICAgIGlmICghYnJvYWRjYXN0Q2hhbm5lbCAmJiAnQnJvYWRjYXN0Q2hhbm5lbCcgaW4gc2VsZikge1xyXG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnW0ZpcmViYXNlXSBGSUQgQ2hhbmdlJyk7XHJcbiAgICAgICAgYnJvYWRjYXN0Q2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGUuZGF0YS5rZXksIGUuZGF0YS5maWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnJvYWRjYXN0Q2hhbm5lbDtcclxufVxyXG5mdW5jdGlvbiBjbG9zZUJyb2FkY2FzdENoYW5uZWwoKSB7XHJcbiAgICBpZiAoZmlkQ2hhbmdlQ2FsbGJhY2tzLnNpemUgPT09IDAgJiYgYnJvYWRjYXN0Q2hhbm5lbCkge1xyXG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwuY2xvc2UoKTtcclxuICAgICAgICBicm9hZGNhc3RDaGFubmVsID0gbnVsbDtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgREFUQUJBU0VfTkFNRSA9ICdmaXJlYmFzZS1pbnN0YWxsYXRpb25zLWRhdGFiYXNlJztcclxudmFyIERBVEFCQVNFX1ZFUlNJT04gPSAxO1xyXG52YXIgT0JKRUNUX1NUT1JFX05BTUUgPSAnZmlyZWJhc2UtaW5zdGFsbGF0aW9ucy1zdG9yZSc7XHJcbnZhciBkYlByb21pc2UgPSBudWxsO1xyXG5mdW5jdGlvbiBnZXREYlByb21pc2UoKSB7XHJcbiAgICBpZiAoIWRiUHJvbWlzZSkge1xyXG4gICAgICAgIGRiUHJvbWlzZSA9IG9wZW5EYihEQVRBQkFTRV9OQU1FLCBEQVRBQkFTRV9WRVJTSU9OLCBmdW5jdGlvbiAodXBncmFkZURCKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxyXG4gICAgICAgICAgICAvLyBiZWhhdmlvciBpcyB3aGF0IHdlIHdhbnQsIGJlY2F1c2UgaWYgdGhlcmUgYXJlIG11bHRpcGxlIHZlcnNpb25zIGJldHdlZW5cclxuICAgICAgICAgICAgLy8gdGhlIG9sZCB2ZXJzaW9uIGFuZCB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZSB3YW50IEFMTCB0aGUgbWlncmF0aW9uc1xyXG4gICAgICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcclxuICAgICAgICAgICAgc3dpdGNoICh1cGdyYWRlREIub2xkVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVEQi5jcmVhdGVPYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYlByb21pc2U7XHJcbn1cclxuLyoqIEFzc2lnbnMgb3Igb3ZlcndyaXRlcyB0aGUgcmVjb3JkIGZvciB0aGUgZ2l2ZW4ga2V5IHdpdGggdGhlIGdpdmVuIHZhbHVlLiAqL1xyXG5mdW5jdGlvbiBzZXQoYXBwQ29uZmlnLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBrZXksIGRiLCB0eCwgb2JqZWN0U3RvcmUsIG9sZFZhbHVlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGdldEtleShhcHBDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldERiUHJvbWlzZSgpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBkYiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgb2JqZWN0U3RvcmUuZ2V0KGtleSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG9iamVjdFN0b3JlLnB1dCh2YWx1ZSwga2V5KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHR4LmNvbXBsZXRlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvbGRWYWx1ZSB8fCBvbGRWYWx1ZS5maWQgIT09IHZhbHVlLmZpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWRDaGFuZ2VkKGFwcENvbmZpZywgdmFsdWUuZmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHZhbHVlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqIFJlbW92ZXMgcmVjb3JkKHMpIGZyb20gdGhlIG9iamVjdFN0b3JlIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIGtleS4gKi9cclxuZnVuY3Rpb24gcmVtb3ZlKGFwcENvbmZpZykge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBrZXksIGRiLCB0eDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXREYlByb21pc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZGIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKS5kZWxldGUoa2V5KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHR4LmNvbXBsZXRlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4vKipcclxuICogQXRvbWljYWxseSB1cGRhdGVzIGEgcmVjb3JkIHdpdGggdGhlIHJlc3VsdCBvZiB1cGRhdGVGbiwgd2hpY2ggZ2V0c1xyXG4gKiBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB2YWx1ZS4gSWYgbmV3VmFsdWUgaXMgdW5kZWZpbmVkLCB0aGUgcmVjb3JkIGlzXHJcbiAqIGRlbGV0ZWQgaW5zdGVhZC5cclxuICogQHJldHVybiBVcGRhdGVkIHZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGUoYXBwQ29uZmlnLCB1cGRhdGVGbikge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBrZXksIGRiLCB0eCwgc3RvcmUsIG9sZFZhbHVlLCBuZXdWYWx1ZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXREYlByb21pc2UoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZGIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHN0b3JlLmdldChrZXkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHVwZGF0ZUZuKG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc3RvcmUuZGVsZXRlKGtleSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFs0IC8qeWllbGQqLywgc3RvcmUucHV0KG5ld1ZhbHVlLCBrZXkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA2O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0eC5jb21wbGV0ZV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiAoIW9sZFZhbHVlIHx8IG9sZFZhbHVlLmZpZCAhPT0gbmV3VmFsdWUuZmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWRDaGFuZ2VkKGFwcENvbmZpZywgbmV3VmFsdWUuZmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ld1ZhbHVlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFVwZGF0ZXMgYW5kIHJldHVybnMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGZyb20gdGhlIGRhdGFiYXNlLlxyXG4gKiBBbHNvIHRyaWdnZXJzIGEgcmVnaXN0cmF0aW9uIHJlcXVlc3QgaWYgaXQgaXMgbmVjZXNzYXJ5IGFuZCBwb3NzaWJsZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbkVudHJ5KGFwcENvbmZpZykge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWdpc3RyYXRpb25Qcm9taXNlLCBpbnN0YWxsYXRpb25FbnRyeTtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHVwZGF0ZShhcHBDb25maWcsIGZ1bmN0aW9uIChvbGRFbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdGFsbGF0aW9uRW50cnkgPSB1cGRhdGVPckNyZWF0ZUluc3RhbGxhdGlvbkVudHJ5KG9sZEVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5V2l0aFByb21pc2UgPSB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2UgPSBlbnRyeVdpdGhQcm9taXNlLnJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeVdpdGhQcm9taXNlLmluc3RhbGxhdGlvbkVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YWxsYXRpb25FbnRyeSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpbnN0YWxsYXRpb25FbnRyeS5maWQgPT09IElOVkFMSURfRklEKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWdpc3RyYXRpb25Qcm9taXNlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogXHJcbiAgICAgICAgICAgICAgICAvLyBGSUQgZ2VuZXJhdGlvbiBmYWlsZWQuIFdhaXRpbmcgZm9yIHRoZSBGSUQgZnJvbSB0aGUgc2VydmVyLlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5pbnN0YWxsYXRpb25FbnRyeSA9IF9iLnNlbnQoKSwgX2EpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uRW50cnk6IGluc3RhbGxhdGlvbkVudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlOiByZWdpc3RyYXRpb25Qcm9taXNlXHJcbiAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEluc3RhbGxhdGlvbiBFbnRyeSBpZiBvbmUgZG9lcyBub3QgZXhpc3QuXHJcbiAqIEFsc28gY2xlYXJzIHRpbWVkIG91dCBwZW5kaW5nIHJlcXVlc3RzLlxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlT3JDcmVhdGVJbnN0YWxsYXRpb25FbnRyeShvbGRFbnRyeSkge1xyXG4gICAgdmFyIGVudHJ5ID0gb2xkRW50cnkgfHwge1xyXG4gICAgICAgIGZpZDogZ2VuZXJhdGVGaWQoKSxcclxuICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IDAgLyogTk9UX1NUQVJURUQgKi9cclxuICAgIH07XHJcbiAgICByZXR1cm4gY2xlYXJUaW1lZE91dFJlcXVlc3QoZW50cnkpO1xyXG59XHJcbi8qKlxyXG4gKiBJZiB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIG5vdCByZWdpc3RlcmVkIHlldCwgdGhpcyB3aWxsIHRyaWdnZXIgdGhlXHJcbiAqIHJlZ2lzdHJhdGlvbiBhbmQgcmV0dXJuIGFuIEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeS5cclxuICpcclxuICogSWYgcmVnaXN0cmF0aW9uUHJvbWlzZSBkb2VzIG5vdCBleGlzdCwgdGhlIGluc3RhbGxhdGlvbkVudHJ5IGlzIGd1YXJhbnRlZWRcclxuICogdG8gYmUgcmVnaXN0ZXJlZC5cclxuICovXHJcbmZ1bmN0aW9uIHRyaWdnZXJSZWdpc3RyYXRpb25JZk5lY2Vzc2FyeShhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KSB7XHJcbiAgICBpZiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAwIC8qIE5PVF9TVEFSVEVEICovKSB7XHJcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiByZXF1aXJlZCBidXQgYXBwIGlzIG9mZmxpbmUuXHJcbiAgICAgICAgICAgIHZhciByZWdpc3RyYXRpb25Qcm9taXNlV2l0aEVycm9yID0gUHJvbWlzZS5yZWplY3QoRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtb2ZmbGluZVwiIC8qIEFQUF9PRkZMSU5FICovKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YWxsYXRpb25FbnRyeTogaW5zdGFsbGF0aW9uRW50cnksXHJcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlOiByZWdpc3RyYXRpb25Qcm9taXNlV2l0aEVycm9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRyeSByZWdpc3RlcmluZy4gQ2hhbmdlIHN0YXR1cyB0byBJTl9QUk9HUkVTUy5cclxuICAgICAgICB2YXIgaW5Qcm9ncmVzc0VudHJ5ID0ge1xyXG4gICAgICAgICAgICBmaWQ6IGluc3RhbGxhdGlvbkVudHJ5LmZpZCxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAxIC8qIElOX1BST0dSRVNTICovLFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25UaW1lOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IHJlZ2lzdGVySW5zdGFsbGF0aW9uKGFwcENvbmZpZywgaW5Qcm9ncmVzc0VudHJ5KTtcclxuICAgICAgICByZXR1cm4geyBpbnN0YWxsYXRpb25FbnRyeTogaW5Qcm9ncmVzc0VudHJ5LCByZWdpc3RyYXRpb25Qcm9taXNlOiByZWdpc3RyYXRpb25Qcm9taXNlIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDEgLyogSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnN0YWxsYXRpb25FbnRyeTogaW5zdGFsbGF0aW9uRW50cnksXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2U6IHdhaXRVbnRpbEZpZFJlZ2lzdHJhdGlvbihhcHBDb25maWcpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IGluc3RhbGxhdGlvbkVudHJ5OiBpbnN0YWxsYXRpb25FbnRyeSB9O1xyXG4gICAgfVxyXG59XHJcbi8qKiBUaGlzIHdpbGwgYmUgZXhlY3V0ZWQgb25seSBvbmNlIGZvciBlYWNoIG5ldyBGaXJlYmFzZSBJbnN0YWxsYXRpb24uICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFsbGF0aW9uKGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5LCBlXzE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDddKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjcmVhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHNldChhcHBDb25maWcsIHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpc1NlcnZlckVycm9yKGVfMSkgJiYgZV8xLmN1c3RvbURhdGEuc2VydmVyQ29kZSA9PT0gNDA5KSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VydmVyIHJldHVybmVkIGEgXCJGSUQgY2FuIG5vdCBiZSB1c2VkXCIgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlbW92ZShhcHBDb25maWcpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBjYW4gbm90IGJlIHVzZWRcIiBlcnJvci5cclxuICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBuZXh0IHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBcclxuICAgICAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiBmYWlsZWQuIFNldCBGSUQgYXMgbm90IHJlZ2lzdGVyZWQuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZXQoYXBwQ29uZmlnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IDAgLyogTk9UX1NUQVJURUQgKi9cclxuICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZC4gU2V0IEZJRCBhcyBub3QgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA2O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OiB0aHJvdyBlXzE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqIENhbGwgaWYgRklEIHJlZ2lzdHJhdGlvbiBpcyBwZW5kaW5nIGluIGFub3RoZXIgcmVxdWVzdC4gKi9cclxuZnVuY3Rpb24gd2FpdFVudGlsRmlkUmVnaXN0cmF0aW9uKGFwcENvbmZpZykge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbnRyeSwgX2EsIGluc3RhbGxhdGlvbkVudHJ5LCByZWdpc3RyYXRpb25Qcm9taXNlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDEgLyogSU5fUFJPR1JFU1MgKi8pKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdCBzdGlsbCBpbiBwcm9ncmVzcy5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzbGVlcCgxMDApXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdCBzdGlsbCBpbiBwcm9ncmVzcy5cclxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXBkYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChhcHBDb25maWcpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDAgLyogTk9UX1NUQVJURUQgKi8pKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRJbnN0YWxsYXRpb25FbnRyeShhcHBDb25maWcpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKSwgaW5zdGFsbGF0aW9uRW50cnkgPSBfYS5pbnN0YWxsYXRpb25FbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IF9hLnJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvblByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlZ2lzdHJhdGlvblByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gcmVnaXN0cmF0aW9uUHJvbWlzZSwgZW50cnkgaXMgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGluc3RhbGxhdGlvbkVudHJ5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovLCBlbnRyeV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxsZWQgb25seSBpZiB0aGVyZSBpcyBhIENyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IGluIHByb2dyZXNzLlxyXG4gKlxyXG4gKiBVcGRhdGVzIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBpbiB0aGUgREIgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGVcclxuICogQ3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QuXHJcbiAqXHJcbiAqIFJldHVybnMgdGhlIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkuXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZShhcHBDb25maWcsIGZ1bmN0aW9uIChvbGRFbnRyeSkge1xyXG4gICAgICAgIGlmICghb2xkRW50cnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnN0YWxsYXRpb24tbm90LWZvdW5kXCIgLyogSU5TVEFMTEFUSU9OX05PVF9GT1VORCAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVkT3V0UmVxdWVzdChvbGRFbnRyeSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjbGVhclRpbWVkT3V0UmVxdWVzdChlbnRyeSkge1xyXG4gICAgaWYgKGhhc0luc3RhbGxhdGlvblJlcXVlc3RUaW1lZE91dChlbnRyeSkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWQ6IGVudHJ5LmZpZCxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAwIC8qIE5PVF9TVEFSVEVEICovXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyeTtcclxufVxyXG5mdW5jdGlvbiBoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHJldHVybiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIElOX1BST0dSRVNTICovICYmXHJcbiAgICAgICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uVGltZSArIFBFTkRJTkdfVElNRU9VVF9NUyA8IERhdGUubm93KCkpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQXV0aFRva2VuUmVxdWVzdChfYSwgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHZhciBhcHBDb25maWcgPSBfYS5hcHBDb25maWcsIHBsYXRmb3JtTG9nZ2VyUHJvdmlkZXIgPSBfYS5wbGF0Zm9ybUxvZ2dlclByb3ZpZGVyO1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbmRwb2ludCwgaGVhZGVycywgcGxhdGZvcm1Mb2dnZXIsIGJvZHksIHJlcXVlc3QsIHJlc3BvbnNlLCByZXNwb25zZVZhbHVlLCBjb21wbGV0ZWRBdXRoVG9rZW47XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQgPSBnZXRHZW5lcmF0ZUF1dGhUb2tlbkVuZHBvaW50KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBnZXRIZWFkZXJzV2l0aEF1dGgoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm1Mb2dnZXIgPSBwbGF0Zm9ybUxvZ2dlclByb3ZpZGVyLmdldEltbWVkaWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXRmb3JtTG9nZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCd4LWZpcmViYXNlLWNsaWVudCcsIHBsYXRmb3JtTG9nZ2VyLmdldFBsYXRmb3JtSW5mb1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZGtWZXJzaW9uOiBQQUNLQUdFX1ZFUlNJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXRyeUlmU2VydmVyRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpOyB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVZhbHVlID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZEF1dGhUb2tlbiA9IGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlKHJlc3BvbnNlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBjb21wbGV0ZWRBdXRoVG9rZW5dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRFcnJvckZyb21SZXNwb25zZSgnR2VuZXJhdGUgQXV0aCBUb2tlbicsIHJlc3BvbnNlKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHRocm93IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0R2VuZXJhdGVBdXRoVG9rZW5FbmRwb2ludChhcHBDb25maWcsIF9hKSB7XHJcbiAgICB2YXIgZmlkID0gX2EuZmlkO1xyXG4gICAgcmV0dXJuIGdldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpICsgXCIvXCIgKyBmaWQgKyBcIi9hdXRoVG9rZW5zOmdlbmVyYXRlXCI7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSB2YWxpZCBhdXRoZW50aWNhdGlvbiB0b2tlbiBmb3IgdGhlIGluc3RhbGxhdGlvbi4gR2VuZXJhdGVzIGEgbmV3XHJcbiAqIHRva2VuIGlmIG9uZSBkb2Vzbid0IGV4aXN0LCBpcyBleHBpcmVkIG9yIGFib3V0IHRvIGV4cGlyZS5cclxuICpcclxuICogU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgcmVnaXN0ZXJlZC5cclxuICovXHJcbmZ1bmN0aW9uIHJlZnJlc2hBdXRoVG9rZW4oZGVwZW5kZW5jaWVzLCBmb3JjZVJlZnJlc2gpIHtcclxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0b2tlblByb21pc2UsIGVudHJ5LCBhdXRoVG9rZW4sIF9hO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGUoZGVwZW5kZW5jaWVzLmFwcENvbmZpZywgZnVuY3Rpb24gKG9sZEVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNFbnRyeVJlZ2lzdGVyZWQob2xkRW50cnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vdC1yZWdpc3RlcmVkXCIgLyogTk9UX1JFR0lTVEVSRUQgKi8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRBdXRoVG9rZW4gPSBvbGRFbnRyeS5hdXRoVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm9yY2VSZWZyZXNoICYmIGlzQXV0aFRva2VuVmFsaWQob2xkQXV0aFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgYSB2YWxpZCB0b2tlbiBpbiB0aGUgREIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2xkRW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2xkQXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDEgLyogSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlIGFscmVhZHkgaXMgYSB0b2tlbiByZXF1ZXN0IGluIHByb2dyZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5Qcm9taXNlID0gd2FpdFVudGlsQXV0aFRva2VuUmVxdWVzdChkZXBlbmRlbmNpZXMsIGZvcmNlUmVmcmVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2xkRW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBObyB0b2tlbiBvciB0b2tlbiBleHBpcmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtb2ZmbGluZVwiIC8qIEFQUF9PRkZMSU5FICovKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpblByb2dyZXNzRW50cnkgPSBtYWtlQXV0aFRva2VuUmVxdWVzdEluUHJvZ3Jlc3NFbnRyeShvbGRFbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlblByb21pc2UgPSBmZXRjaEF1dGhUb2tlbkZyb21TZXJ2ZXIoZGVwZW5kZW5jaWVzLCBpblByb2dyZXNzRW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluUHJvZ3Jlc3NFbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRva2VuUHJvbWlzZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdG9rZW5Qcm9taXNlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYSA9IGVudHJ5LmF1dGhUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFRva2VuID0gX2E7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGF1dGhUb2tlbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxsIG9ubHkgaWYgRklEIGlzIHJlZ2lzdGVyZWQgYW5kIEF1dGggVG9rZW4gcmVxdWVzdCBpcyBpbiBwcm9ncmVzcy5cclxuICpcclxuICogV2FpdHMgdW50aWwgdGhlIGN1cnJlbnQgcGVuZGluZyByZXF1ZXN0IGZpbmlzaGVzLiBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQsXHJcbiAqIHRyaWVzIG9uY2UgaW4gdGhpcyB0aHJlYWQgYXMgd2VsbC5cclxuICovXHJcbmZ1bmN0aW9uIHdhaXRVbnRpbEF1dGhUb2tlblJlcXVlc3QoZGVwZW5kZW5jaWVzLCBmb3JjZVJlZnJlc2gpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZW50cnksIGF1dGhUb2tlbjtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdXBkYXRlQXV0aFRva2VuUmVxdWVzdChkZXBlbmRlbmNpZXMuYXBwQ29uZmlnKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGVudHJ5LmF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSAxIC8qIElOX1BST0dSRVNTICovKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2VuZXJhdGVBdXRoVG9rZW4gc3RpbGwgaW4gcHJvZ3Jlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2xlZXAoMTAwKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2VuZXJhdGVBdXRoVG9rZW4gc3RpbGwgaW4gcHJvZ3Jlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoZGVwZW5kZW5jaWVzLmFwcENvbmZpZyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhUb2tlbiA9IGVudHJ5LmF1dGhUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDAgLyogTk9UX1NUQVJURUQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3QgdGltZWQgb3V0IG9yIGZhaWxlZCBpbiBhIGRpZmZlcmVudCBjYWxsLiBUcnkgYWdhaW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZWZyZXNoQXV0aFRva2VuKGRlcGVuZGVuY2llcywgZm9yY2VSZWZyZXNoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYXV0aFRva2VuXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxsZWQgb25seSBpZiB0aGVyZSBpcyBhIEdlbmVyYXRlQXV0aFRva2VuIHJlcXVlc3QgaW4gcHJvZ3Jlc3MuXHJcbiAqXHJcbiAqIFVwZGF0ZXMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGluIHRoZSBEQiBiYXNlZCBvbiB0aGUgc3RhdHVzIG9mIHRoZVxyXG4gKiBHZW5lcmF0ZUF1dGhUb2tlbiByZXF1ZXN0LlxyXG4gKlxyXG4gKiBSZXR1cm5zIHRoZSB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5LlxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlQXV0aFRva2VuUmVxdWVzdChhcHBDb25maWcpIHtcclxuICAgIHJldHVybiB1cGRhdGUoYXBwQ29uZmlnLCBmdW5jdGlvbiAob2xkRW50cnkpIHtcclxuICAgICAgICBpZiAoIWlzRW50cnlSZWdpc3RlcmVkKG9sZEVudHJ5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vdC1yZWdpc3RlcmVkXCIgLyogTk9UX1JFR0lTVEVSRUQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2xkQXV0aFRva2VuID0gb2xkRW50cnkuYXV0aFRva2VuO1xyXG4gICAgICAgIGlmIChoYXNBdXRoVG9rZW5SZXF1ZXN0VGltZWRPdXQob2xkQXV0aFRva2VuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG9sZEVudHJ5KSwgeyBhdXRoVG9rZW46IHsgcmVxdWVzdFN0YXR1czogMCAvKiBOT1RfU1RBUlRFRCAqLyB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2xkRW50cnk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBmZXRjaEF1dGhUb2tlbkZyb21TZXJ2ZXIoZGVwZW5kZW5jaWVzLCBpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhdXRoVG9rZW4sIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSwgZV8xLCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnk7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAzLCAsIDhdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZW5lcmF0ZUF1dGhUb2tlblJlcXVlc3QoZGVwZW5kZW5jaWVzLCBpbnN0YWxsYXRpb25FbnRyeSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhUb2tlbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5zdGFsbGF0aW9uRW50cnkpLCB7IGF1dGhUb2tlbjogYXV0aFRva2VuIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNldChkZXBlbmRlbmNpZXMuYXBwQ29uZmlnLCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGF1dGhUb2tlbl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGlzU2VydmVyRXJyb3IoZV8xKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZV8xLmN1c3RvbURhdGEuc2VydmVyQ29kZSA9PT0gNDAxIHx8IGVfMS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwNCkpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBub3QgZm91bmRcIiBvciBhIFwiSW52YWxpZCBhdXRoZW50aWNhdGlvblwiIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIG5leHQgdGltZS5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZW1vdmUoZGVwZW5kZW5jaWVzLmFwcENvbmZpZyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlcnZlciByZXR1cm5lZCBhIFwiRklEIG5vdCBmb3VuZFwiIG9yIGEgXCJJbnZhbGlkIGF1dGhlbnRpY2F0aW9uXCIgZXJyb3IuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5zdGFsbGF0aW9uRW50cnkpLCB7IGF1dGhUb2tlbjogeyByZXF1ZXN0U3RhdHVzOiAwIC8qIE5PVF9TVEFSVEVEICovIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2V0KGRlcGVuZGVuY2llcy5hcHBDb25maWcsIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDc7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IHRocm93IGVfMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpc0VudHJ5UmVnaXN0ZXJlZChpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgcmV0dXJuIChpbnN0YWxsYXRpb25FbnRyeSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAyIC8qIENPTVBMRVRFRCAqLyk7XHJcbn1cclxuZnVuY3Rpb24gaXNBdXRoVG9rZW5WYWxpZChhdXRoVG9rZW4pIHtcclxuICAgIHJldHVybiAoYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDIgLyogQ09NUExFVEVEICovICYmXHJcbiAgICAgICAgIWlzQXV0aFRva2VuRXhwaXJlZChhdXRoVG9rZW4pKTtcclxufVxyXG5mdW5jdGlvbiBpc0F1dGhUb2tlbkV4cGlyZWQoYXV0aFRva2VuKSB7XHJcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgIHJldHVybiAobm93IDwgYXV0aFRva2VuLmNyZWF0aW9uVGltZSB8fFxyXG4gICAgICAgIGF1dGhUb2tlbi5jcmVhdGlvblRpbWUgKyBhdXRoVG9rZW4uZXhwaXJlc0luIDwgbm93ICsgVE9LRU5fRVhQSVJBVElPTl9CVUZGRVIpO1xyXG59XHJcbi8qKiBSZXR1cm5zIGFuIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkgd2l0aCBhbiBJblByb2dyZXNzQXV0aFRva2VuLiAqL1xyXG5mdW5jdGlvbiBtYWtlQXV0aFRva2VuUmVxdWVzdEluUHJvZ3Jlc3NFbnRyeShvbGRFbnRyeSkge1xyXG4gICAgdmFyIGluUHJvZ3Jlc3NBdXRoVG9rZW4gPSB7XHJcbiAgICAgICAgcmVxdWVzdFN0YXR1czogMSAvKiBJTl9QUk9HUkVTUyAqLyxcclxuICAgICAgICByZXF1ZXN0VGltZTogRGF0ZS5ub3coKVxyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb2xkRW50cnkpLCB7IGF1dGhUb2tlbjogaW5Qcm9ncmVzc0F1dGhUb2tlbiB9KTtcclxufVxyXG5mdW5jdGlvbiBoYXNBdXRoVG9rZW5SZXF1ZXN0VGltZWRPdXQoYXV0aFRva2VuKSB7XHJcbiAgICByZXR1cm4gKGF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSAxIC8qIElOX1BST0dSRVNTICovICYmXHJcbiAgICAgICAgYXV0aFRva2VuLnJlcXVlc3RUaW1lICsgUEVORElOR19USU1FT1VUX01TIDwgRGF0ZS5ub3coKSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SWQoZGVwZW5kZW5jaWVzKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBpbnN0YWxsYXRpb25FbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0SW5zdGFsbGF0aW9uRW50cnkoZGVwZW5kZW5jaWVzLmFwcENvbmZpZyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpLCBpbnN0YWxsYXRpb25FbnRyeSA9IF9hLmluc3RhbGxhdGlvbkVudHJ5LCByZWdpc3RyYXRpb25Qcm9taXNlID0gX2EucmVnaXN0cmF0aW9uUHJvbWlzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGluc3RhbGxhdGlvbiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQsIHVwZGF0ZSB0aGUgYXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9rZW4gaWYgbmVlZGVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQXV0aFRva2VuKGRlcGVuZGVuY2llcykuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBpbnN0YWxsYXRpb25FbnRyeS5maWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUb2tlbihkZXBlbmRlbmNpZXMsIGZvcmNlUmVmcmVzaCkge1xyXG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGF1dGhUb2tlbjtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgY29tcGxldGVJbnN0YWxsYXRpb25SZWdpc3RyYXRpb24oZGVwZW5kZW5jaWVzLmFwcENvbmZpZyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWZyZXNoQXV0aFRva2VuKGRlcGVuZGVuY2llcywgZm9yY2VSZWZyZXNoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFRva2VuID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBhdXRoVG9rZW4udG9rZW5dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjb21wbGV0ZUluc3RhbGxhdGlvblJlZ2lzdHJhdGlvbihhcHBDb25maWcpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVnaXN0cmF0aW9uUHJvbWlzZTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0SW5zdGFsbGF0aW9uRW50cnkoYXBwQ29uZmlnKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IChfYS5zZW50KCkpLnJlZ2lzdHJhdGlvblByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWdpc3RyYXRpb25Qcm9taXNlKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBIGNyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IGlzIGluIHByb2dyZXNzLiBXYWl0IHVudGlsIGl0IGZpbmlzaGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlZ2lzdHJhdGlvblByb21pc2VdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEEgY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MuIFdhaXQgdW50aWwgaXQgZmluaXNoZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZW5kcG9pbnQsIGhlYWRlcnMsIHJlcXVlc3QsIHJlc3BvbnNlO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50ID0gZ2V0RGVsZXRlRW5kcG9pbnQoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXRyeUlmU2VydmVyRXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpOyB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhcmVzcG9uc2Uub2spIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldEVycm9yRnJvbVJlc3BvbnNlKCdEZWxldGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldERlbGV0ZUVuZHBvaW50KGFwcENvbmZpZywgX2EpIHtcclxuICAgIHZhciBmaWQgPSBfYS5maWQ7XHJcbiAgICByZXR1cm4gZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZykgKyBcIi9cIiArIGZpZDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxldGVJbnN0YWxsYXRpb24oZGVwZW5kZW5jaWVzKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFwcENvbmZpZywgZW50cnk7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwQ29uZmlnID0gZGVwZW5kZW5jaWVzLmFwcENvbmZpZztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGRhdGUoYXBwQ29uZmlnLCBmdW5jdGlvbiAob2xkRW50cnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDAgLyogTk9UX1NUQVJURUQgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhlIHVucmVnaXN0ZXJlZCBlbnRyeSB3aXRob3V0IHNlbmRpbmcgYSBkZWxldGVJbnN0YWxsYXRpb24gcmVxdWVzdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9sZEVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbnRyeSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIElOX1BST0dSRVNTICovKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuJ3QgZGVsZXRlIHdoaWxlIHRyeWluZyB0byByZWdpc3Rlci5cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImRlbGV0ZS1wZW5kaW5nLXJlZ2lzdHJhdGlvblwiIC8qIERFTEVURV9QRU5ESU5HX1JFR0lTVFJBVElPTiAqLyk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAyIC8qIENPTVBMRVRFRCAqLykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIW5hdmlnYXRvci5vbkxpbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYXBwLW9mZmxpbmVcIiAvKiBBUFBfT0ZGTElORSAqLyk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIGRlbGV0ZUluc3RhbGxhdGlvblJlcXVlc3QoYXBwQ29uZmlnLCBlbnRyeSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZW1vdmUoYXBwQ29uZmlnKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNjtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogU2V0cyBhIG5ldyBjYWxsYmFjayB0aGF0IHdpbGwgZ2V0IGNhbGxlZCB3aGVuIEluc3RhbGxhdGlvbiBJRCBjaGFuZ2VzLlxyXG4gKiBSZXR1cm5zIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uIHRoYXQgd2lsbCByZW1vdmUgdGhlIGNhbGxiYWNrIHdoZW4gY2FsbGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gb25JZENoYW5nZShfYSwgY2FsbGJhY2spIHtcclxuICAgIHZhciBhcHBDb25maWcgPSBfYS5hcHBDb25maWc7XHJcbiAgICBhZGRDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3RBcHBDb25maWcoYXBwKSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIGlmICghYXBwIHx8ICFhcHAub3B0aW9ucykge1xyXG4gICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKCdBcHAgQ29uZmlndXJhdGlvbicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFhcHAubmFtZSkge1xyXG4gICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKCdBcHAgTmFtZScpO1xyXG4gICAgfVxyXG4gICAgLy8gUmVxdWlyZWQgYXBwIGNvbmZpZyBrZXlzXHJcbiAgICB2YXIgY29uZmlnS2V5cyA9IFtcclxuICAgICAgICAncHJvamVjdElkJyxcclxuICAgICAgICAnYXBpS2V5JyxcclxuICAgICAgICAnYXBwSWQnXHJcbiAgICBdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBmb3IgKHZhciBjb25maWdLZXlzXzEgPSBfX3ZhbHVlcyhjb25maWdLZXlzKSwgY29uZmlnS2V5c18xXzEgPSBjb25maWdLZXlzXzEubmV4dCgpOyAhY29uZmlnS2V5c18xXzEuZG9uZTsgY29uZmlnS2V5c18xXzEgPSBjb25maWdLZXlzXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXlOYW1lID0gY29uZmlnS2V5c18xXzEudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICghYXBwLm9wdGlvbnNba2V5TmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKGtleU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWdLZXlzXzFfMSAmJiAhY29uZmlnS2V5c18xXzEuZG9uZSAmJiAoX2EgPSBjb25maWdLZXlzXzEucmV0dXJuKSkgX2EuY2FsbChjb25maWdLZXlzXzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFwcE5hbWU6IGFwcC5uYW1lLFxyXG4gICAgICAgIHByb2plY3RJZDogYXBwLm9wdGlvbnMucHJvamVjdElkLFxyXG4gICAgICAgIGFwaUtleTogYXBwLm9wdGlvbnMuYXBpS2V5LFxyXG4gICAgICAgIGFwcElkOiBhcHAub3B0aW9ucy5hcHBJZFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRNaXNzaW5nVmFsdWVFcnJvcih2YWx1ZU5hbWUpIHtcclxuICAgIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBNSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovLCB7XHJcbiAgICAgICAgdmFsdWVOYW1lOiB2YWx1ZU5hbWVcclxuICAgIH0pO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFsbGF0aW9ucyhpbnN0YW5jZSkge1xyXG4gICAgdmFyIGluc3RhbGxhdGlvbnNOYW1lID0gJ2luc3RhbGxhdGlvbnMnO1xyXG4gICAgaW5zdGFuY2UuSU5URVJOQUwucmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChpbnN0YWxsYXRpb25zTmFtZSwgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHZhciBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgICAgIC8vIFRocm93cyBpZiBhcHAgaXNuJ3QgY29uZmlndXJlZCBwcm9wZXJseS5cclxuICAgICAgICB2YXIgYXBwQ29uZmlnID0gZXh0cmFjdEFwcENvbmZpZyhhcHApO1xyXG4gICAgICAgIHZhciBwbGF0Zm9ybUxvZ2dlclByb3ZpZGVyID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdwbGF0Zm9ybS1sb2dnZXInKTtcclxuICAgICAgICB2YXIgZGVwZW5kZW5jaWVzID0ge1xyXG4gICAgICAgICAgICBhcHBDb25maWc6IGFwcENvbmZpZyxcclxuICAgICAgICAgICAgcGxhdGZvcm1Mb2dnZXJQcm92aWRlcjogcGxhdGZvcm1Mb2dnZXJQcm92aWRlclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGluc3RhbGxhdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGFwcDogYXBwLFxyXG4gICAgICAgICAgICBnZXRJZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0SWQoZGVwZW5kZW5jaWVzKTsgfSxcclxuICAgICAgICAgICAgZ2V0VG9rZW46IGZ1bmN0aW9uIChmb3JjZVJlZnJlc2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRUb2tlbihkZXBlbmRlbmNpZXMsIGZvcmNlUmVmcmVzaCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVsZXRlSW5zdGFsbGF0aW9uKGRlcGVuZGVuY2llcyk7IH0sXHJcbiAgICAgICAgICAgIG9uSWRDaGFuZ2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uSWRDaGFuZ2UoZGVwZW5kZW5jaWVzLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBpbnN0YWxsYXRpb25zO1xyXG4gICAgfSwgXCJQVUJMSUNcIiAvKiBQVUJMSUMgKi8pKTtcclxuICAgIGluc3RhbmNlLnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uKTtcclxufVxyXG5yZWdpc3Rlckluc3RhbGxhdGlvbnMoZmlyZWJhc2UpO1xuXG5leHBvcnQgeyByZWdpc3Rlckluc3RhbGxhdGlvbnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnQGZpcmViYXNlL2luc3RhbGxhdGlvbnMnO1xuaW1wb3J0IHsgX19zcHJlYWRBcnJheXMsIF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBpc0luZGV4ZWREQkF2YWlsYWJsZSwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IExvZ2dlciwgTG9nTGV2ZWwgfSBmcm9tICdAZmlyZWJhc2UvbG9nZ2VyJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuXG52YXIgbmFtZSA9IFwiQGZpcmViYXNlL3BlcmZvcm1hbmNlXCI7XG52YXIgdmVyc2lvbiA9IFwiMC40LjZcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIFNES19WRVJTSU9OID0gdmVyc2lvbjtcclxuLyoqIFRoZSBwcmVmaXggZm9yIHN0YXJ0IFVzZXIgVGltaW5nIG1hcmtzIHVzZWQgZm9yIGNyZWF0aW5nIFRyYWNlcy4gKi9cclxudmFyIFRSQUNFX1NUQVJUX01BUktfUFJFRklYID0gJ0ZCLVBFUkYtVFJBQ0UtU1RBUlQnO1xyXG4vKiogVGhlIHByZWZpeCBmb3Igc3RvcCBVc2VyIFRpbWluZyBtYXJrcyB1c2VkIGZvciBjcmVhdGluZyBUcmFjZXMuICovXHJcbnZhciBUUkFDRV9TVE9QX01BUktfUFJFRklYID0gJ0ZCLVBFUkYtVFJBQ0UtU1RPUCc7XHJcbi8qKiBUaGUgcHJlZml4IGZvciBVc2VyIFRpbWluZyBtZWFzdXJlIHVzZWQgZm9yIGNyZWF0aW5nIFRyYWNlcy4gKi9cclxudmFyIFRSQUNFX01FQVNVUkVfUFJFRklYID0gJ0ZCLVBFUkYtVFJBQ0UtTUVBU1VSRSc7XHJcbi8qKiBUaGUgcHJlZml4IGZvciBvdXQgb2YgdGhlIGJveCBwYWdlIGxvYWQgVHJhY2UgbmFtZS4gKi9cclxudmFyIE9PQl9UUkFDRV9QQUdFX0xPQURfUFJFRklYID0gJ193dF8nO1xyXG52YXIgRklSU1RfUEFJTlRfQ09VTlRFUl9OQU1FID0gJ19mcCc7XHJcbnZhciBGSVJTVF9DT05URU5URlVMX1BBSU5UX0NPVU5URVJfTkFNRSA9ICdfZmNwJztcclxudmFyIEZJUlNUX0lOUFVUX0RFTEFZX0NPVU5URVJfTkFNRSA9ICdfZmlkJztcclxudmFyIENPTkZJR19MT0NBTF9TVE9SQUdFX0tFWSA9ICdAZmlyZWJhc2UvcGVyZm9ybWFuY2UvY29uZmlnJztcclxudmFyIENPTkZJR19FWFBJUllfTE9DQUxfU1RPUkFHRV9LRVkgPSAnQGZpcmViYXNlL3BlcmZvcm1hbmNlL2NvbmZpZ2V4cGlyZSc7XHJcbnZhciBTRVJWSUNFID0gJ3BlcmZvcm1hbmNlJztcclxudmFyIFNFUlZJQ0VfTkFNRSA9ICdQZXJmb3JtYW5jZSc7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYTtcclxudmFyIEVSUk9SX0RFU0NSSVBUSU9OX01BUCA9IChfYSA9IHt9LFxyXG4gICAgX2FbXCJ0cmFjZSBzdGFydGVkXCIgLyogVFJBQ0VfU1RBUlRFRF9CRUZPUkUgKi9dID0gJ1RyYWNlIHskdHJhY2VOYW1lfSB3YXMgc3RhcnRlZCBiZWZvcmUuJyxcclxuICAgIF9hW1widHJhY2Ugc3RvcHBlZFwiIC8qIFRSQUNFX1NUT1BQRURfQkVGT1JFICovXSA9ICdUcmFjZSB7JHRyYWNlTmFtZX0gaXMgbm90IHJ1bm5pbmcuJyxcclxuICAgIF9hW1wibm9ucG9zaXRpdmUgdHJhY2Ugc3RhcnRUaW1lXCIgLyogTk9OUE9TSVRJVkVfVFJBQ0VfU1RBUlRfVElNRSAqL10gPSAnVHJhY2UgeyR0cmFjZU5hbWV9IHN0YXJ0VGltZSBzaG91bGQgYmUgcG9zaXRpdmUuJyxcclxuICAgIF9hW1wibm9ucG9zaXRpdmUgdHJhY2UgZHVyYXRpb25cIiAvKiBOT05QT1NJVElWRV9UUkFDRV9EVVJBVElPTiAqL10gPSAnVHJhY2UgeyR0cmFjZU5hbWV9IGR1cmF0aW9uIHNob3VsZCBiZSBwb3NpdGl2ZS4nLFxyXG4gICAgX2FbXCJubyB3aW5kb3dcIiAvKiBOT19XSU5ET1cgKi9dID0gJ1dpbmRvdyBpcyBub3QgYXZhaWxhYmxlLicsXHJcbiAgICBfYVtcIm5vIGFwcCBpZFwiIC8qIE5PX0FQUF9JRCAqL10gPSAnQXBwIGlkIGlzIG5vdCBhdmFpbGFibGUuJyxcclxuICAgIF9hW1wibm8gcHJvamVjdCBpZFwiIC8qIE5PX1BST0pFQ1RfSUQgKi9dID0gJ1Byb2plY3QgaWQgaXMgbm90IGF2YWlsYWJsZS4nLFxyXG4gICAgX2FbXCJubyBhcGkga2V5XCIgLyogTk9fQVBJX0tFWSAqL10gPSAnQXBpIGtleSBpcyBub3QgYXZhaWxhYmxlLicsXHJcbiAgICBfYVtcImludmFsaWQgY2MgbG9nXCIgLyogSU5WQUxJRF9DQ19MT0cgKi9dID0gJ0F0dGVtcHRlZCB0byBxdWV1ZSBpbnZhbGlkIGNjIGV2ZW50JyxcclxuICAgIF9hW1wiRkIgbm90IGRlZmF1bHRcIiAvKiBGQl9OT1RfREVGQVVMVCAqL10gPSAnUGVyZm9ybWFuY2UgY2FuIG9ubHkgc3RhcnQgd2hlbiBGaXJlYmFzZSBhcHAgaW5zdGFuY2UgaXMgdGhlIGRlZmF1bHQgb25lLicsXHJcbiAgICBfYVtcIlJDIHJlc3BvbnNlIG5vdCBva1wiIC8qIFJDX05PVF9PSyAqL10gPSAnUkMgcmVzcG9uc2UgaXMgbm90IG9rJyxcclxuICAgIF9hW1wiaW52YWxpZCBhdHRyaWJ1dGUgbmFtZVwiIC8qIElOVkFMSURfQVRUUklCVVRFX05BTUUgKi9dID0gJ0F0dHJpYnV0ZSBuYW1lIHskYXR0cmlidXRlTmFtZX0gaXMgaW52YWxpZC4nLFxyXG4gICAgX2FbXCJpbnZhbGlkIGF0dHJpYnV0ZSB2YWx1ZVwiIC8qIElOVkFMSURfQVRUUklCVVRFX1ZBTFVFICovXSA9ICdBdHRyaWJ1dGUgdmFsdWUgeyRhdHRyaWJ1dGVWYWx1ZX0gaXMgaW52YWxpZC4nLFxyXG4gICAgX2FbXCJpbnZhbGlkIGN1c3RvbSBtZXRyaWMgbmFtZVwiIC8qIElOVkFMSURfQ1VTVE9NX01FVFJJQ19OQU1FICovXSA9ICdDdXN0b20gbWV0cmljIG5hbWUgeyRjdXN0b21NZXRyaWNOYW1lfSBpcyBpbnZhbGlkJyxcclxuICAgIF9hW1wiaW52YWxpZCBTdHJpbmcgbWVyZ2VyIGlucHV0XCIgLyogSU5WQUxJRF9TVFJJTkdfTUVSR0VSX1BBUkFNRVRFUiAqL10gPSAnSW5wdXQgZm9yIFN0cmluZyBtZXJnZXIgaXMgaW52YWxpZCwgY29udGFjdCBzdXBwb3J0IHRlYW0gdG8gcmVzb2x2ZS4nLFxyXG4gICAgX2EpO1xyXG52YXIgRVJST1JfRkFDVE9SWSA9IG5ldyBFcnJvckZhY3RvcnkoU0VSVklDRSwgU0VSVklDRV9OQU1FLCBFUlJPUl9ERVNDUklQVElPTl9NQVApO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgY29uc29sZUxvZ2dlciA9IG5ldyBMb2dnZXIoU0VSVklDRV9OQU1FKTtcclxuY29uc29sZUxvZ2dlci5sb2dMZXZlbCA9IExvZ0xldmVsLklORk87XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBhcGlJbnN0YW5jZTtcclxudmFyIHdpbmRvd0luc3RhbmNlO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyBhIHJlZmVyZW5jZSB0byB2YXJpb3VzIGJyb3dzZXIgcmVsYXRlZCBvYmplY3RzIGluamVjdGVkIGJ5XHJcbiAqIHNldCBtZXRob2RzLlxyXG4gKi9cclxudmFyIEFwaSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwaSh3aW5kb3cpIHtcclxuICAgICAgICB0aGlzLndpbmRvdyA9IHdpbmRvdztcclxuICAgICAgICBpZiAoIXdpbmRvdykge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vIHdpbmRvd1wiIC8qIE5PX1dJTkRPVyAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2U7XHJcbiAgICAgICAgdGhpcy5QZXJmb3JtYW5jZU9ic2VydmVyID0gd2luZG93LlBlcmZvcm1hbmNlT2JzZXJ2ZXI7XHJcbiAgICAgICAgdGhpcy53aW5kb3dMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcclxuICAgICAgICB0aGlzLm5hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3I7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcclxuICAgICAgICBpZiAodGhpcy5uYXZpZ2F0b3IgJiYgdGhpcy5uYXZpZ2F0b3IuY29va2llRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAvLyBJZiB1c2VyIGJsb2NrcyBjb29raWVzIG9uIHRoZSBicm93c2VyLCBhY2Nlc3NpbmcgbG9jYWxTdG9yYWdlIHdpbGxcclxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXhjZXB0aW9uLlxyXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aW5kb3cucGVyZk1ldHJpY3MgJiYgd2luZG93LnBlcmZNZXRyaWNzLm9uRmlyc3RJbnB1dERlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25GaXJzdElucHV0RGVsYXkgPSB3aW5kb3cucGVyZk1ldHJpY3Mub25GaXJzdElucHV0RGVsYXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQXBpLnByb3RvdHlwZS5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90IGNhcHR1cmUgdGhlIHN0cmluZyBxdWVyeSBwYXJ0IG9mIHVybC5cclxuICAgICAgICByZXR1cm4gdGhpcy53aW5kb3dMb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XHJcbiAgICB9O1xyXG4gICAgQXBpLnByb3RvdHlwZS5tYXJrID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMucGVyZm9ybWFuY2UgfHwgIXRoaXMucGVyZm9ybWFuY2UubWFyaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGVyZm9ybWFuY2UubWFyayhuYW1lKTtcclxuICAgIH07XHJcbiAgICBBcGkucHJvdG90eXBlLm1lYXN1cmUgPSBmdW5jdGlvbiAobWVhc3VyZU5hbWUsIG1hcmsxLCBtYXJrMikge1xyXG4gICAgICAgIGlmICghdGhpcy5wZXJmb3JtYW5jZSB8fCAhdGhpcy5wZXJmb3JtYW5jZS5tZWFzdXJlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5tZWFzdXJlKG1lYXN1cmVOYW1lLCBtYXJrMSwgbWFyazIpO1xyXG4gICAgfTtcclxuICAgIEFwaS5wcm90b3R5cGUuZ2V0RW50cmllc0J5VHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBlcmZvcm1hbmNlIHx8ICF0aGlzLnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKHR5cGUpO1xyXG4gICAgfTtcclxuICAgIEFwaS5wcm90b3R5cGUuZ2V0RW50cmllc0J5TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBlcmZvcm1hbmNlIHx8ICF0aGlzLnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKG5hbWUpO1xyXG4gICAgfTtcclxuICAgIEFwaS5wcm90b3R5cGUuZ2V0VGltZU9yaWdpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBQb2x5ZmlsbCB0aGUgdGltZSBvcmlnaW4gd2l0aCBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0LlxyXG4gICAgICAgIHJldHVybiAodGhpcy5wZXJmb3JtYW5jZSAmJlxyXG4gICAgICAgICAgICAodGhpcy5wZXJmb3JtYW5jZS50aW1lT3JpZ2luIHx8IHRoaXMucGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCkpO1xyXG4gICAgfTtcclxuICAgIEFwaS5wcm90b3R5cGUucmVxdWlyZWRBcGlzQXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghZmV0Y2ggfHxcclxuICAgICAgICAgICAgIVByb21pc2UgfHxcclxuICAgICAgICAgICAgIXRoaXMubmF2aWdhdG9yIHx8XHJcbiAgICAgICAgICAgICF0aGlzLm5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbygnRmlyZWJhc2UgUGVyZm9ybWFuY2UgY2Fubm90IHN0YXJ0IGlmIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBmZXRjaCBhbmQgUHJvbWlzZSBvciBjb29raWUgaXMgZGlzYWJsZWQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0luZGV4ZWREQkF2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbygnSW5kZXhlZERCIGlzIG5vdCBzdXBwb3J0ZWQgYnkgY3VycmVudCBicm93c3dlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIEFwaS5wcm90b3R5cGUuc2V0dXBPYnNlcnZlciA9IGZ1bmN0aW9uIChlbnRyeVR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLlBlcmZvcm1hbmNlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgdGhpcy5QZXJmb3JtYW5jZU9ic2VydmVyKGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBsaXN0LmdldEVudHJpZXMoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgIC8vIGBlbnRyeWAgaXMgYSBQZXJmb3JtYW5jZUVudHJ5IGluc3RhbmNlLlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZW50cnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gU3RhcnQgb2JzZXJ2aW5nIHRoZSBlbnRyeSB0eXBlcyB5b3UgY2FyZSBhYm91dC5cclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHsgZW50cnlUeXBlczogW2VudHJ5VHlwZV0gfSk7XHJcbiAgICB9O1xyXG4gICAgQXBpLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChhcGlJbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFwaUluc3RhbmNlID0gbmV3IEFwaSh3aW5kb3dJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcGlJbnN0YW5jZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBpO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBzZXR1cEFwaSh3aW5kb3cpIHtcclxuICAgIHdpbmRvd0luc3RhbmNlID0gd2luZG93O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlU3RyaW5ncyhwYXJ0MSwgcGFydDIpIHtcclxuICAgIHZhciBzaXplRGlmZiA9IHBhcnQxLmxlbmd0aCAtIHBhcnQyLmxlbmd0aDtcclxuICAgIGlmIChzaXplRGlmZiA8IDAgfHwgc2l6ZURpZmYgPiAxKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnZhbGlkIFN0cmluZyBtZXJnZXIgaW5wdXRcIiAvKiBJTlZBTElEX1NUUklOR19NRVJHRVJfUEFSQU1FVEVSICovKTtcclxuICAgIH1cclxuICAgIHZhciByZXN1bHRBcnJheSA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0MS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdEFycmF5LnB1c2gocGFydDEuY2hhckF0KGkpKTtcclxuICAgICAgICBpZiAocGFydDIubGVuZ3RoID4gaSkge1xyXG4gICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKHBhcnQyLmNoYXJBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdEFycmF5LmpvaW4oJycpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZTtcclxudmFyIFNldHRpbmdzU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNldHRpbmdzU2VydmljZSgpIHtcclxuICAgICAgICAvLyBUaGUgdmFyaWFibGUgd2hpY2ggY29udHJvbHMgbG9nZ2luZyBvZiBhdXRvbWF0aWMgdHJhY2VzIGFuZCBIVFRQL1MgbmV0d29yayBtb25pdG9yaW5nLlxyXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gVGhlIHZhcmlhYmxlIHdoaWNoIGNvbnRyb2xzIGxvZ2dpbmcgb2YgY3VzdG9tIHRyYWNlcy5cclxuICAgICAgICB0aGlzLmRhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gQ29uZmlndXJhdGlvbiBmbGFncyBzZXQgdGhyb3VnaCByZW1vdGUgY29uZmlnLlxyXG4gICAgICAgIHRoaXMubG9nZ2luZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBTYW1wbGluZyByYXRlIGJldHdlZW4gMCBhbmQgMS5cclxuICAgICAgICB0aGlzLnRyYWNlc1NhbXBsaW5nUmF0ZSA9IDE7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrUmVxdWVzdHNTYW1wbGluZ1JhdGUgPSAxO1xyXG4gICAgICAgIC8vIEFkZHJlc3Mgb2YgbG9nZ2luZyBzZXJ2aWNlLlxyXG4gICAgICAgIHRoaXMubG9nRW5kUG9pbnRVcmwgPSAnaHR0cHM6Ly9maXJlYmFzZWxvZ2dpbmcuZ29vZ2xlYXBpcy5jb20vdjBjYy9sb2c/Zm9ybWF0PWpzb25fcHJvdG8nO1xyXG4gICAgICAgIC8vIFBlcmZvcm1hbmNlIGV2ZW50IHRyYW5zcG9ydCBlbmRwb2ludCBVUkwgd2hpY2ggc2hvdWxkIGJlIGNvbXBhdGlibGUgd2l0aCBwcm90bzMuXHJcbiAgICAgICAgLy8gTmV3IEFkZHJlc3MgZm9yIHRyYW5zcG9ydCBzZXJ2aWNlLCBub3QgY29uZmlndXJhYmxlIHZpYSBSZW1vdGUgQ29uZmlnLlxyXG4gICAgICAgIHRoaXMuZmxUcmFuc3BvcnRFbmRwb2ludFVybCA9IG1lcmdlU3RyaW5ncygnaHRzL2ZyYnNsZ2lncC5vZ2Vwc2Ntdi9pZW8vZWF5bGcnLCAndHA6L2llYWVvZ24tYWdvbGFpLm8vMWZybGdsZ2MvbycpO1xyXG4gICAgICAgIHRoaXMudHJhbnNwb3J0S2V5ID0gbWVyZ2VTdHJpbmdzKCdBelNDOHI2UmVpR3FGTXlmdmdvdycsICdJYXl4MHUtWFQzdmtzVk0tcElWJyk7XHJcbiAgICAgICAgLy8gU291cmNlIHR5cGUgZm9yIHBlcmZvcm1hbmNlIGV2ZW50IGxvZ3MuXHJcbiAgICAgICAgdGhpcy5sb2dTb3VyY2UgPSA0NjI7XHJcbiAgICAgICAgLy8gRmxhZ3Mgd2hpY2ggY29udHJvbCBwZXIgc2Vzc2lvbiBsb2dnaW5nIG9mIHRyYWNlcyBhbmQgbmV0d29yayByZXF1ZXN0cy5cclxuICAgICAgICB0aGlzLmxvZ1RyYWNlQWZ0ZXJTYW1wbGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9nTmV0d29ya0FmdGVyU2FtcGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAvLyBUVEwgb2YgY29uZmlnIHJldHJpZXZlZCBmcm9tIHJlbW90ZSBjb25maWcgaW4gaG91cnMuXHJcbiAgICAgICAgdGhpcy5jb25maWdUaW1lVG9MaXZlID0gMTI7XHJcbiAgICB9XHJcbiAgICBTZXR0aW5nc1NlcnZpY2UucHJvdG90eXBlLmdldEFwcElkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcHBJZCA9IHRoaXMuZmlyZWJhc2VBcHBJbnN0YW5jZSAmJlxyXG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlQXBwSW5zdGFuY2Uub3B0aW9ucyAmJlxyXG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlQXBwSW5zdGFuY2Uub3B0aW9ucy5hcHBJZDtcclxuICAgICAgICBpZiAoIWFwcElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8gYXBwIGlkXCIgLyogTk9fQVBQX0lEICovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFwcElkO1xyXG4gICAgfTtcclxuICAgIFNldHRpbmdzU2VydmljZS5wcm90b3R5cGUuZ2V0UHJvamVjdElkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwcm9qZWN0SWQgPSB0aGlzLmZpcmViYXNlQXBwSW5zdGFuY2UgJiZcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZUFwcEluc3RhbmNlLm9wdGlvbnMgJiZcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZUFwcEluc3RhbmNlLm9wdGlvbnMucHJvamVjdElkO1xyXG4gICAgICAgIGlmICghcHJvamVjdElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8gcHJvamVjdCBpZFwiIC8qIE5PX1BST0pFQ1RfSUQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvamVjdElkO1xyXG4gICAgfTtcclxuICAgIFNldHRpbmdzU2VydmljZS5wcm90b3R5cGUuZ2V0QXBpS2V5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcGlLZXkgPSB0aGlzLmZpcmViYXNlQXBwSW5zdGFuY2UgJiZcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZUFwcEluc3RhbmNlLm9wdGlvbnMgJiZcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZUFwcEluc3RhbmNlLm9wdGlvbnMuYXBpS2V5O1xyXG4gICAgICAgIGlmICghYXBpS2V5KSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8gYXBpIGtleVwiIC8qIE5PX0FQSV9LRVkgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXBpS2V5O1xyXG4gICAgfTtcclxuICAgIFNldHRpbmdzU2VydmljZS5wcm90b3R5cGUuZ2V0RmxUcmFuc3BvcnRGdWxsVXJsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZsVHJhbnNwb3J0RW5kcG9pbnRVcmwuY29uY2F0KCc/a2V5PScsIHRoaXMudHJhbnNwb3J0S2V5KTtcclxuICAgIH07XHJcbiAgICBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzU2VydmljZUluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UgPSBuZXcgU2V0dGluZ3NTZXJ2aWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2V0dGluZ3NTZXJ2aWNlO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgaWlkO1xyXG5mdW5jdGlvbiBnZXRJaWRQcm9taXNlKCkge1xyXG4gICAgdmFyIGlpZFByb21pc2UgPSBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5pbnN0YWxsYXRpb25zU2VydmljZS5nZXRJZCgpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgaWlkUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChpaWRWYWwpIHtcclxuICAgICAgICBpaWQgPSBpaWRWYWw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpaWRQcm9taXNlO1xyXG59XHJcbi8vIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIGFmdGVyIHRoZSBpaWQgaXMgcmV0cmlldmVkIGJ5IGdldElpZFByb21pc2UgbWV0aG9kLlxyXG5mdW5jdGlvbiBnZXRJaWQoKSB7XHJcbiAgICByZXR1cm4gaWlkO1xyXG59XHJcbmZ1bmN0aW9uIGdldEF1dGhUb2tlblByb21pc2UoKSB7XHJcbiAgICB2YXIgYXV0aFRva2VuUHJvbWlzZSA9IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmluc3RhbGxhdGlvbnNTZXJ2aWNlLmdldFRva2VuKCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICBhdXRoVG9rZW5Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlblZhbCkge1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXV0aFRva2VuUHJvbWlzZTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgVmlzaWJpbGl0eVN0YXRlO1xyXG4oZnVuY3Rpb24gKFZpc2liaWxpdHlTdGF0ZSkge1xyXG4gICAgVmlzaWJpbGl0eVN0YXRlW1Zpc2liaWxpdHlTdGF0ZVtcIlVOS05PV05cIl0gPSAwXSA9IFwiVU5LTk9XTlwiO1xyXG4gICAgVmlzaWJpbGl0eVN0YXRlW1Zpc2liaWxpdHlTdGF0ZVtcIlZJU0lCTEVcIl0gPSAxXSA9IFwiVklTSUJMRVwiO1xyXG4gICAgVmlzaWJpbGl0eVN0YXRlW1Zpc2liaWxpdHlTdGF0ZVtcIkhJRERFTlwiXSA9IDJdID0gXCJISURERU5cIjtcclxufSkoVmlzaWJpbGl0eVN0YXRlIHx8IChWaXNpYmlsaXR5U3RhdGUgPSB7fSkpO1xyXG52YXIgUkVTRVJWRURfQVRUUklCVVRFX1BSRUZJWEVTID0gWydmaXJlYmFzZV8nLCAnZ29vZ2xlXycsICdnYV8nXTtcclxudmFyIEFUVFJJQlVURV9GT1JNQVRfUkVHRVggPSBuZXcgUmVnRXhwKCdeW2EtekEtWl1cXFxcdyokJyk7XHJcbnZhciBNQVhfQVRUUklCVVRFX05BTUVfTEVOR1RIID0gNDA7XHJcbnZhciBNQVhfQVRUUklCVVRFX1ZBTFVFX0xFTkdUSCA9IDEwMDtcclxuZnVuY3Rpb24gZ2V0U2VydmljZVdvcmtlclN0YXR1cygpIHtcclxuICAgIHZhciBuYXZpZ2F0b3IgPSBBcGkuZ2V0SW5zdGFuY2UoKS5uYXZpZ2F0b3I7XHJcbiAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyIC8qIENPTlRST0xMRUQgKi87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMyAvKiBVTkNPTlRST0xMRUQgKi87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDEgLyogVU5TVVBQT1JURUQgKi87XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0VmlzaWJpbGl0eVN0YXRlKCkge1xyXG4gICAgdmFyIGRvY3VtZW50ID0gQXBpLmdldEluc3RhbmNlKCkuZG9jdW1lbnQ7XHJcbiAgICB2YXIgdmlzaWJpbGl0eVN0YXRlID0gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlO1xyXG4gICAgc3dpdGNoICh2aXNpYmlsaXR5U3RhdGUpIHtcclxuICAgICAgICBjYXNlICd2aXNpYmxlJzpcclxuICAgICAgICAgICAgcmV0dXJuIFZpc2liaWxpdHlTdGF0ZS5WSVNJQkxFO1xyXG4gICAgICAgIGNhc2UgJ2hpZGRlbic6XHJcbiAgICAgICAgICAgIHJldHVybiBWaXNpYmlsaXR5U3RhdGUuSElEREVOO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBWaXNpYmlsaXR5U3RhdGUuVU5LTk9XTjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRFZmZlY3RpdmVDb25uZWN0aW9uVHlwZSgpIHtcclxuICAgIHZhciBuYXZpZ2F0b3IgPSBBcGkuZ2V0SW5zdGFuY2UoKS5uYXZpZ2F0b3I7XHJcbiAgICB2YXIgbmF2aWdhdG9yQ29ubmVjdGlvbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uO1xyXG4gICAgdmFyIGVmZmVjdGl2ZVR5cGUgPSBuYXZpZ2F0b3JDb25uZWN0aW9uICYmIG5hdmlnYXRvckNvbm5lY3Rpb24uZWZmZWN0aXZlVHlwZTtcclxuICAgIHN3aXRjaCAoZWZmZWN0aXZlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3Nsb3ctMmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gMSAvKiBDT05ORUNUSU9OX1NMT1dfMkcgKi87XHJcbiAgICAgICAgY2FzZSAnMmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gMiAvKiBDT05ORUNUSU9OXzJHICovO1xyXG4gICAgICAgIGNhc2UgJzNnJzpcclxuICAgICAgICAgICAgcmV0dXJuIDMgLyogQ09OTkVDVElPTl8zRyAqLztcclxuICAgICAgICBjYXNlICc0Zyc6XHJcbiAgICAgICAgICAgIHJldHVybiA0IC8qIENPTk5FQ1RJT05fNEcgKi87XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIDAgLyogVU5LTk9XTiAqLztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlTmFtZShuYW1lKSB7XHJcbiAgICBpZiAobmFtZS5sZW5ndGggPT09IDAgfHwgbmFtZS5sZW5ndGggPiBNQVhfQVRUUklCVVRFX05BTUVfTEVOR1RIKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIG1hdGNoZXNSZXNlcnZlZFByZWZpeCA9IFJFU0VSVkVEX0FUVFJJQlVURV9QUkVGSVhFUy5zb21lKGZ1bmN0aW9uIChwcmVmaXgpIHtcclxuICAgICAgICByZXR1cm4gbmFtZS5zdGFydHNXaXRoKHByZWZpeCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAhbWF0Y2hlc1Jlc2VydmVkUHJlZml4ICYmICEhbmFtZS5tYXRjaChBVFRSSUJVVEVfRk9STUFUX1JFR0VYKTtcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlVmFsdWUodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggIT09IDAgJiYgdmFsdWUubGVuZ3RoIDw9IE1BWF9BVFRSSUJVVEVfVkFMVUVfTEVOR1RIO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBSRU1PVEVfQ09ORklHX1NES19WRVJTSU9OID0gJzAuMC4xJztcclxuLy8gVGhlc2UgdmFsdWVzIHdpbGwgYmUgdXNlZCBpZiB0aGUgcmVtb3RlIGNvbmZpZyBvYmplY3QgaXMgc3VjY2Vzc2Z1bGx5XHJcbi8vIHJldHJpZXZlZCwgYnV0IHRoZSB0ZW1wbGF0ZSBkb2VzIG5vdCBoYXZlIHRoZXNlIGZpZWxkcy5cclxudmFyIERFRkFVTFRfQ09ORklHUyA9IHtcclxuICAgIGxvZ2dpbmdFbmFibGVkOiB0cnVlXHJcbn07XHJcbnZhciBGSVNfQVVUSF9QUkVGSVggPSAnRklSRUJBU0VfSU5TVEFMTEFUSU9OU19BVVRIJztcclxuZnVuY3Rpb24gZ2V0Q29uZmlnKGlpZCkge1xyXG4gICAgdmFyIGNvbmZpZyA9IGdldFN0b3JlZENvbmZpZygpO1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAgIHByb2Nlc3NDb25maWcoY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0UmVtb3RlQ29uZmlnKGlpZClcclxuICAgICAgICAudGhlbihwcm9jZXNzQ29uZmlnKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChjb25maWcpIHsgcmV0dXJuIHN0b3JlQ29uZmlnKGNvbmZpZyk7IH0sIFxyXG4gICAgLyoqIERvIG5vdGhpbmcgZm9yIGVycm9yLCB1c2UgZGVmYXVsdHMgc2V0IGluIHNldHRpbmdzIHNlcnZpY2UuICovXHJcbiAgICBmdW5jdGlvbiAoKSB7IH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldFN0b3JlZENvbmZpZygpIHtcclxuICAgIHZhciBsb2NhbFN0b3JhZ2UgPSBBcGkuZ2V0SW5zdGFuY2UoKS5sb2NhbFN0b3JhZ2U7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBleHBpcnlTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDT05GSUdfRVhQSVJZX0xPQ0FMX1NUT1JBR0VfS0VZKTtcclxuICAgIGlmICghZXhwaXJ5U3RyaW5nIHx8ICFjb25maWdWYWxpZChleHBpcnlTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbmZpZ1N0cmluZ2lmaWVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ09ORklHX0xPQ0FMX1NUT1JBR0VfS0VZKTtcclxuICAgIGlmICghY29uZmlnU3RyaW5naWZpZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBjb25maWdSZXNwb25zZSA9IEpTT04ucGFyc2UoY29uZmlnU3RyaW5naWZpZWQpO1xyXG4gICAgICAgIHJldHVybiBjb25maWdSZXNwb25zZTtcclxuICAgIH1cclxuICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdG9yZUNvbmZpZyhjb25maWcpIHtcclxuICAgIHZhciBsb2NhbFN0b3JhZ2UgPSBBcGkuZ2V0SW5zdGFuY2UoKS5sb2NhbFN0b3JhZ2U7XHJcbiAgICBpZiAoIWNvbmZpZyB8fCAhbG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ09ORklHX0xPQ0FMX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShjb25maWcpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENPTkZJR19FWFBJUllfTE9DQUxfU1RPUkFHRV9LRVksIFN0cmluZyhEYXRlLm5vdygpICtcclxuICAgICAgICBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5jb25maWdUaW1lVG9MaXZlICogNjAgKiA2MCAqIDEwMDApKTtcclxufVxyXG52YXIgQ09VTERfTk9UX0dFVF9DT05GSUdfTVNHID0gJ0NvdWxkIG5vdCBmZXRjaCBjb25maWcsIHdpbGwgdXNlIGRlZmF1bHQgY29uZmlncyc7XHJcbmZ1bmN0aW9uIGdldFJlbW90ZUNvbmZpZyhpaWQpIHtcclxuICAgIC8vIFBlcmYgbmVlZHMgYXV0aCB0b2tlbiBvbmx5IHRvIHJldHJpZXZlIHJlbW90ZSBjb25maWcuXHJcbiAgICByZXR1cm4gZ2V0QXV0aFRva2VuUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgIHZhciBwcm9qZWN0SWQgPSBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5nZXRQcm9qZWN0SWQoKTtcclxuICAgICAgICB2YXIgY29uZmlnRW5kUG9pbnQgPSBcImh0dHBzOi8vZmlyZWJhc2VyZW1vdGVjb25maWcuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvXCIgKyBwcm9qZWN0SWQgKyBcIi9uYW1lc3BhY2VzL2ZpcmVwZXJmOmZldGNoP2tleT1cIiArIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmdldEFwaUtleSgpO1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoY29uZmlnRW5kUG9pbnQsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogRklTX0FVVEhfUFJFRklYICsgXCIgXCIgKyBhdXRoVG9rZW4gfSxcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGFwcF9pbnN0YW5jZV9pZDogaWlkLFxyXG4gICAgICAgICAgICAgICAgYXBwX2luc3RhbmNlX2lkX3Rva2VuOiBhdXRoVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBhcHBfaWQ6IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmdldEFwcElkKCksXHJcbiAgICAgICAgICAgICAgICBhcHBfdmVyc2lvbjogU0RLX1ZFUlNJT04sXHJcbiAgICAgICAgICAgICAgICBzZGtfdmVyc2lvbjogUkVNT1RFX0NPTkZJR19TREtfVkVSU0lPTlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmZXRjaChyZXF1ZXN0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSW4gY2FzZSByZXNwb25zZSBpcyBub3Qgb2suIFRoaXMgd2lsbCBiZSBjYXVnaHQgYnkgY2F0Y2guXHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiUkMgcmVzcG9uc2Ugbm90IG9rXCIgLyogUkNfTk9UX09LICovKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlTG9nZ2VyLmluZm8oQ09VTERfTk9UX0dFVF9DT05GSUdfTVNHKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyBjb25maWcgY29taW5nIGVpdGhlciBmcm9tIGNhbGxpbmcgUkMgb3IgZnJvbSBsb2NhbCBzdG9yYWdlLlxyXG4gKiBUaGlzIG1ldGhvZCBvbmx5IHJ1bnMgaWYgY2FsbCBpcyBzdWNjZXNzZnVsIG9yIGNvbmZpZyBpbiBzdG9yYWdlXHJcbiAqIGlzIHZhbGlkLlxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc0NvbmZpZyhjb25maWcpIHtcclxuICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuICAgIHZhciBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZSA9IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgdmFyIGVudHJpZXMgPSBjb25maWcuZW50cmllcyB8fCB7fTtcclxuICAgIGlmIChlbnRyaWVzLmZwcl9lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBUT0RPOiBDaGFuZ2UgdGhlIGFzc2lnbm1lbnQgb2YgbG9nZ2luZ0VuYWJsZWQgb25jZSB0aGUgcmVjZWl2ZWQgdHlwZSBpc1xyXG4gICAgICAgIC8vIGtub3duLlxyXG4gICAgICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLmxvZ2dpbmdFbmFibGVkID1cclxuICAgICAgICAgICAgU3RyaW5nKGVudHJpZXMuZnByX2VuYWJsZWQpID09PSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBDb25maWcgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSwgYnV0IHRoZXJlIGlzIG5vIGZwcl9lbmFibGVkIGluIHRlbXBsYXRlLlxyXG4gICAgICAgIC8vIFVzZSBzZWNvbmRhcnkgY29uZmlncyB2YWx1ZS5cclxuICAgICAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dnaW5nRW5hYmxlZCA9IERFRkFVTFRfQ09ORklHUy5sb2dnaW5nRW5hYmxlZDtcclxuICAgIH1cclxuICAgIGlmIChlbnRyaWVzLmZwcl9sb2dfc291cmNlKSB7XHJcbiAgICAgICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nU291cmNlID0gTnVtYmVyKGVudHJpZXMuZnByX2xvZ19zb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVudHJpZXMuZnByX2xvZ19lbmRwb2ludF91cmwpIHtcclxuICAgICAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dFbmRQb2ludFVybCA9IGVudHJpZXMuZnByX2xvZ19lbmRwb2ludF91cmw7XHJcbiAgICB9XHJcbiAgICAvLyBLZXkgZnJvbSBSZW1vdGUgQ29uZmlnIGhhcyB0byBiZSBub24tZW1wdHkgc3RyaW5nLCBvdGhlcndzaWUgdXNlIGxvY2FsIHZhbHVlLlxyXG4gICAgaWYgKGVudHJpZXMuZnByX2xvZ190cmFuc3BvcnRfa2V5KSB7XHJcbiAgICAgICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UudHJhbnNwb3J0S2V5ID0gZW50cmllcy5mcHJfbG9nX3RyYW5zcG9ydF9rZXk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW50cmllcy5mcHJfdmNfbmV0d29ya19yZXF1ZXN0X3NhbXBsaW5nX3JhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLm5ldHdvcmtSZXF1ZXN0c1NhbXBsaW5nUmF0ZSA9IE51bWJlcihlbnRyaWVzLmZwcl92Y19uZXR3b3JrX3JlcXVlc3Rfc2FtcGxpbmdfcmF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW50cmllcy5mcHJfdmNfdHJhY2Vfc2FtcGxpbmdfcmF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UudHJhY2VzU2FtcGxpbmdSYXRlID0gTnVtYmVyKGVudHJpZXMuZnByX3ZjX3RyYWNlX3NhbXBsaW5nX3JhdGUpO1xyXG4gICAgfVxyXG4gICAgLy8gU2V0IHRoZSBwZXIgc2Vzc2lvbiB0cmFjZSBhbmQgbmV0d29yayBsb2dnaW5nIGZsYWdzLlxyXG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nVHJhY2VBZnRlclNhbXBsaW5nID0gc2hvdWxkTG9nQWZ0ZXJTYW1wbGluZyhzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS50cmFjZXNTYW1wbGluZ1JhdGUpO1xyXG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nTmV0d29ya0FmdGVyU2FtcGxpbmcgPSBzaG91bGRMb2dBZnRlclNhbXBsaW5nKHNldHRpbmdzU2VydmljZUluc3RhbmNlLm5ldHdvcmtSZXF1ZXN0c1NhbXBsaW5nUmF0ZSk7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59XHJcbmZ1bmN0aW9uIGNvbmZpZ1ZhbGlkKGV4cGlyeSkge1xyXG4gICAgcmV0dXJuIE51bWJlcihleHBpcnkpID4gRGF0ZS5ub3coKTtcclxufVxyXG5mdW5jdGlvbiBzaG91bGRMb2dBZnRlclNhbXBsaW5nKHNhbXBsaW5nUmF0ZSkge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPD0gc2FtcGxpbmdSYXRlO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBpbml0aWFsaXphdGlvblN0YXR1cyA9IDEgLyogbm90SW5pdGlhbGl6ZWQgKi87XHJcbnZhciBpbml0aWFsaXphdGlvblByb21pc2U7XHJcbmZ1bmN0aW9uIGdldEluaXRpYWxpemF0aW9uUHJvbWlzZSgpIHtcclxuICAgIGluaXRpYWxpemF0aW9uU3RhdHVzID0gMiAvKiBpbml0aWFsaXphdGlvblBlbmRpbmcgKi87XHJcbiAgICBpbml0aWFsaXphdGlvblByb21pc2UgPSBpbml0aWFsaXphdGlvblByb21pc2UgfHwgaW5pdGlhbGl6ZVBlcmYoKTtcclxuICAgIHJldHVybiBpbml0aWFsaXphdGlvblByb21pc2U7XHJcbn1cclxuZnVuY3Rpb24gaXNQZXJmSW5pdGlhbGl6ZWQoKSB7XHJcbiAgICByZXR1cm4gaW5pdGlhbGl6YXRpb25TdGF0dXMgPT09IDMgLyogaW5pdGlhbGl6ZWQgKi87XHJcbn1cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVBlcmYoKSB7XHJcbiAgICByZXR1cm4gZ2V0RG9jdW1lbnRSZWFkeUNvbXBsZXRlKClcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRJaWRQcm9taXNlKCk7IH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGlpZCkgeyByZXR1cm4gZ2V0Q29uZmlnKGlpZCk7IH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hhbmdlSW5pdGlhbGl6YXRpb25TdGF0dXMoKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hhbmdlSW5pdGlhbGl6YXRpb25TdGF0dXMoKTsgfSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHdoZW5ldmVyIHRoZSBkb2N1bWVudCByZWFkeXN0YXRlIGlzIGNvbXBsZXRlIG9yXHJcbiAqIGltbWVkaWF0ZWx5IGlmIGl0IGlzIGNhbGxlZCBhZnRlciBwYWdlIGxvYWQgY29tcGxldGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlYWR5Q29tcGxldGUoKSB7XHJcbiAgICB2YXIgZG9jdW1lbnQgPSBBcGkuZ2V0SW5zdGFuY2UoKS5kb2N1bWVudDtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgICAgIHZhciBoYW5kbGVyXzEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBoYW5kbGVyXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGhhbmRsZXJfMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlSW5pdGlhbGl6YXRpb25TdGF0dXMoKSB7XHJcbiAgICBpbml0aWFsaXphdGlvblN0YXR1cyA9IDMgLyogaW5pdGlhbGl6ZWQgKi87XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIERFRkFVTFRfU0VORF9JTlRFUlZBTF9NUyA9IDEwICogMTAwMDtcclxudmFyIElOSVRJQUxfU0VORF9USU1FX0RFTEFZX01TID0gNS41ICogMTAwMDtcclxuLy8gSWYgZW5kIHBvaW50IGRvZXMgbm90IHdvcmssIHRoZSBjYWxsIHdpbGwgYmUgdHJpZWQgZm9yIHRoZXNlIG1hbnkgdGltZXMuXHJcbnZhciBERUZBVUxUX1JFTUFJTklOR19UUklFUyA9IDM7XHJcbnZhciBNQVhfRVZFTlRfQ09VTlRfUEVSX1JFUVVFU1QgPSAxMDAwO1xyXG52YXIgcmVtYWluaW5nVHJpZXMgPSBERUZBVUxUX1JFTUFJTklOR19UUklFUztcclxuLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cclxudmFyIHF1ZXVlID0gW107XHJcbnZhciBpc1RyYW5zcG9ydFNldHVwID0gZmFsc2U7XHJcbmZ1bmN0aW9uIHNldHVwVHJhbnNwb3J0U2VydmljZSgpIHtcclxuICAgIGlmICghaXNUcmFuc3BvcnRTZXR1cCkge1xyXG4gICAgICAgIHByb2Nlc3NRdWV1ZShJTklUSUFMX1NFTkRfVElNRV9ERUxBWV9NUyk7XHJcbiAgICAgICAgaXNUcmFuc3BvcnRTZXR1cCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcHJvY2Vzc1F1ZXVlKHRpbWVPZmZzZXQpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHJlbWFpbmluZ1RyaWVzIGxlZnQsIHN0b3AgcmV0cnlpbmcuXHJcbiAgICAgICAgaWYgKHJlbWFpbmluZ1RyaWVzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGV2ZW50cyB0byBwcm9jZXNzLCB3YWl0IGZvciBERUZBVUxUX1NFTkRfSU5URVJWQUxfTVMgYW5kIHRyeSBhZ2Fpbi5cclxuICAgICAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzc1F1ZXVlKERFRkFVTFRfU0VORF9JTlRFUlZBTF9NUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoUXVldWVFdmVudHMoKTtcclxuICAgIH0sIHRpbWVPZmZzZXQpO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BhdGNoUXVldWVFdmVudHMoKSB7XHJcbiAgICAvLyBFeHRyYWN0IGV2ZW50cyB1cCB0byB0aGUgbWF4aW11bSBjYXAgb2Ygc2luZ2xlIGxvZ1JlcXVlc3QgZnJvbSB0b3Agb2YgXCJvZmZpY2lhbCBxdWV1ZVwiLlxyXG4gICAgLy8gVGhlIHN0YWdlZCBldmVudHMgd2lsbCBiZSB1c2VkIGZvciBjdXJyZW50IGxvZ1JlcXVlc3QgYXR0ZW1wdCwgcmVtYWluaW5nIGV2ZW50cyB3aWxsIGJlIGtlcHRcclxuICAgIC8vIGZvciBuZXh0IGF0dGVtcHQuXHJcbiAgICB2YXIgc3RhZ2VkID0gcXVldWUuc3BsaWNlKDAsIE1BWF9FVkVOVF9DT1VOVF9QRVJfUkVRVUVTVCk7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cclxuICAgIC8vIFdlIHdpbGwgcGFzcyB0aGUgSlNPTiBzZXJpYWxpemVkIGV2ZW50IHRvIHRoZSBiYWNrZW5kLlxyXG4gICAgdmFyIGxvZ19ldmVudCA9IHN0YWdlZC5tYXAoZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gKHtcclxuICAgICAgICBzb3VyY2VfZXh0ZW5zaW9uX2pzb25fcHJvdG8zOiBldnQubWVzc2FnZSxcclxuICAgICAgICBldmVudF90aW1lX21zOiBTdHJpbmcoZXZ0LmV2ZW50VGltZSlcclxuICAgIH0pOyB9KTtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHJlcXVlc3RfdGltZV9tczogU3RyaW5nKERhdGUubm93KCkpLFxyXG4gICAgICAgIGNsaWVudF9pbmZvOiB7XHJcbiAgICAgICAgICAgIGNsaWVudF90eXBlOiAxLFxyXG4gICAgICAgICAgICBqc19jbGllbnRfaW5mbzoge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ19zb3VyY2U6IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmxvZ1NvdXJjZSxcclxuICAgICAgICBsb2dfZXZlbnQ6IGxvZ19ldmVudFxyXG4gICAgfTtcclxuICAgIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXHJcbiAgICBzZW5kRXZlbnRzVG9GbChkYXRhLCBzdGFnZWQpLmNhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBmYWlscyBmb3Igc29tZSByZWFzb24sIGFkZCB0aGUgZXZlbnRzIHRoYXQgd2VyZSBhdHRlbXB0ZWRcclxuICAgICAgICAvLyBiYWNrIHRvIHRoZSBwcmltYXJ5IHF1ZXVlIHRvIHJldHJ5IGxhdGVyLlxyXG4gICAgICAgIHF1ZXVlID0gX19zcHJlYWRBcnJheXMoc3RhZ2VkLCBxdWV1ZSk7XHJcbiAgICAgICAgcmVtYWluaW5nVHJpZXMtLTtcclxuICAgICAgICBjb25zb2xlTG9nZ2VyLmluZm8oXCJUcmllcyBsZWZ0OiBcIiArIHJlbWFpbmluZ1RyaWVzICsgXCIuXCIpO1xyXG4gICAgICAgIHByb2Nlc3NRdWV1ZShERUZBVUxUX1NFTkRfSU5URVJWQUxfTVMpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc2VuZEV2ZW50c1RvRmwoZGF0YSwgc3RhZ2VkKSB7XHJcbiAgICByZXR1cm4gcG9zdFRvRmxFbmRwb2ludChkYXRhKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBjb25zb2xlTG9nZ2VyLmluZm8oJ0NhbGwgdG8gRmlyZWJhc2UgYmFja2VuZCBmYWlsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgLy8gRmluZCB0aGUgbmV4dCBjYWxsIHdhaXQgdGltZSBmcm9tIHRoZSByZXNwb25zZS5cclxuICAgICAgICB2YXIgdHJhbnNwb3J0V2FpdCA9IE51bWJlcihyZXMubmV4dFJlcXVlc3RXYWl0TWlsbGlzKTtcclxuICAgICAgICB2YXIgcmVxdWVzdE9mZnNldCA9IERFRkFVTFRfU0VORF9JTlRFUlZBTF9NUztcclxuICAgICAgICBpZiAoIWlzTmFOKHRyYW5zcG9ydFdhaXQpKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RPZmZzZXQgPSBNYXRoLm1heCh0cmFuc3BvcnRXYWl0LCByZXF1ZXN0T2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGVsZXRlIHJlcXVlc3QgaWYgcmVzcG9uc2UgaW5jbHVkZSBSRVNQT05TRV9BQ1RJT05fVU5LTk9XTiBvciBERUxFVEVfUkVRVUVTVCBhY3Rpb24uXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXRyeSByZXF1ZXN0IHVzaW5nIG5vcm1hbCBzY2hlZHVsaW5nIGlmIHJlc3BvbnNlIGluY2x1ZGUgUkVUUllfUkVRVUVTVF9MQVRFUi5cclxuICAgICAgICB2YXIgbG9nUmVzcG9uc2VEZXRhaWxzID0gcmVzLmxvZ1Jlc3BvbnNlRGV0YWlscztcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsb2dSZXNwb25zZURldGFpbHMpICYmXHJcbiAgICAgICAgICAgIGxvZ1Jlc3BvbnNlRGV0YWlscy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGxvZ1Jlc3BvbnNlRGV0YWlsc1swXS5yZXNwb25zZUFjdGlvbiA9PT0gJ1JFVFJZX1JFUVVFU1RfTEFURVInKSB7XHJcbiAgICAgICAgICAgIHF1ZXVlID0gX19zcHJlYWRBcnJheXMoc3RhZ2VkLCBxdWV1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbyhcIlJldHJ5IHRyYW5zcG9ydCByZXF1ZXN0IGxhdGVyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVtYWluaW5nVHJpZXMgPSBERUZBVUxUX1JFTUFJTklOR19UUklFUztcclxuICAgICAgICAvLyBTY2hlZHVsZSB0aGUgbmV4dCBwcm9jZXNzLlxyXG4gICAgICAgIHByb2Nlc3NRdWV1ZShyZXF1ZXN0T2Zmc2V0KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHBvc3RUb0ZsRW5kcG9pbnQoZGF0YSkge1xyXG4gICAgdmFyIGZsVHJhbnNwb3J0RnVsbFVybCA9IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmdldEZsVHJhbnNwb3J0RnVsbFVybCgpO1xyXG4gICAgcmV0dXJuIGZldGNoKGZsVHJhbnNwb3J0RnVsbFVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRUb1F1ZXVlKGV2dCkge1xyXG4gICAgaWYgKCFldnQuZXZlbnRUaW1lIHx8ICFldnQubWVzc2FnZSkge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZCBjYyBsb2dcIiAvKiBJTlZBTElEX0NDX0xPRyAqLyk7XHJcbiAgICB9XHJcbiAgICAvLyBBZGQgdGhlIG5ldyBldmVudCB0byB0aGUgcXVldWUuXHJcbiAgICBxdWV1ZSA9IF9fc3ByZWFkQXJyYXlzKHF1ZXVlLCBbZXZ0XSk7XHJcbn1cclxuLyoqIExvZyBoYW5kbGVyIGZvciBjYyBzZXJ2aWNlIHRvIHNlbmQgdGhlIHBlcmZvcm1hbmNlIGxvZ3MgdG8gdGhlIHNlcnZlci4gKi9cclxuZnVuY3Rpb24gdHJhbnNwb3J0SGFuZGxlcihcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuc2VyaWFsaXplcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBzZXJpYWxpemVyLmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcbiAgICAgICAgYWRkVG9RdWV1ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGV2ZW50VGltZTogRGF0ZS5ub3coKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKiBlc2xpbnQtZW5ibGUgY2FtZWxjYXNlICovXHJcbnZhciBsb2dnZXI7XHJcbi8vIFRoaXMgbWV0aG9kIGlzIG5vdCBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemF0aW9uLlxyXG5mdW5jdGlvbiBzZW5kTG9nKHJlc291cmNlLCByZXNvdXJjZVR5cGUpIHtcclxuICAgIGlmICghbG9nZ2VyKSB7XHJcbiAgICAgICAgbG9nZ2VyID0gdHJhbnNwb3J0SGFuZGxlcihzZXJpYWxpemVyKTtcclxuICAgIH1cclxuICAgIGxvZ2dlcihyZXNvdXJjZSwgcmVzb3VyY2VUeXBlKTtcclxufVxyXG5mdW5jdGlvbiBsb2dUcmFjZSh0cmFjZSkge1xyXG4gICAgdmFyIHNldHRpbmdzU2VydmljZSA9IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgLy8gRG8gbm90IGxvZyBpZiB0cmFjZSBpcyBhdXRvIGdlbmVyYXRlZCBhbmQgaW5zdHJ1bWVudGF0aW9uIGlzIGRpc2FibGVkLlxyXG4gICAgaWYgKCFzZXR0aW5nc1NlcnZpY2UuaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCAmJiB0cmFjZS5pc0F1dG8pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBEbyBub3QgbG9nIGlmIHRyYWNlIGlzIGN1c3RvbSBhbmQgZGF0YSBjb2xsZWN0aW9uIGlzIGRpc2FibGVkLlxyXG4gICAgaWYgKCFzZXR0aW5nc1NlcnZpY2UuZGF0YUNvbGxlY3Rpb25FbmFibGVkICYmICF0cmFjZS5pc0F1dG8pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBEbyBub3QgbG9nIGlmIHJlcXVpcmVkIGFwaXMgYXJlIG5vdCBhdmFpbGFibGUuXHJcbiAgICBpZiAoIUFwaS5nZXRJbnN0YW5jZSgpLnJlcXVpcmVkQXBpc0F2YWlsYWJsZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gT25seSBsb2cgdGhlIHBhZ2UgbG9hZCBhdXRvIHRyYWNlcyBpZiBwYWdlIGlzIHZpc2libGUuXHJcbiAgICBpZiAodHJhY2UuaXNBdXRvICYmIGdldFZpc2liaWxpdHlTdGF0ZSgpICE9PSBWaXNpYmlsaXR5U3RhdGUuVklTSUJMRSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpc1BlcmZJbml0aWFsaXplZCgpKSB7XHJcbiAgICAgICAgc2VuZFRyYWNlTG9nKHRyYWNlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIEN1c3RvbSB0cmFjZXMgY2FuIGJlIHVzZWQgYmVmb3JlIHRoZSBpbml0aWFsaXphdGlvbiBidXQgbG9nZ2luZ1xyXG4gICAgICAgIC8vIHNob3VsZCB3YWl0IHVudGlsIGFmdGVyLlxyXG4gICAgICAgIGdldEluaXRpYWxpemF0aW9uUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VuZFRyYWNlTG9nKHRyYWNlKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VuZFRyYWNlTG9nKHRyYWNlKTsgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2VuZFRyYWNlTG9nKHRyYWNlKSB7XHJcbiAgICBpZiAoIWdldElpZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHNldHRpbmdzU2VydmljZSA9IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgaWYgKCFzZXR0aW5nc1NlcnZpY2UubG9nZ2luZ0VuYWJsZWQgfHxcclxuICAgICAgICAhc2V0dGluZ3NTZXJ2aWNlLmxvZ1RyYWNlQWZ0ZXJTYW1wbGluZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VuZExvZyh0cmFjZSwgMSAvKiBUcmFjZSAqLyk7IH0sIDApO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ05ldHdvcmtSZXF1ZXN0KG5ldHdvcmtSZXF1ZXN0KSB7XHJcbiAgICB2YXIgc2V0dGluZ3NTZXJ2aWNlID0gU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAvLyBEbyBub3QgbG9nIG5ldHdvcmsgcmVxdWVzdHMgaWYgaW5zdHJ1bWVudGF0aW9uIGlzIGRpc2FibGVkLlxyXG4gICAgaWYgKCFzZXR0aW5nc1NlcnZpY2UuaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIERvIG5vdCBsb2cgdGhlIGpzIHNkaydzIGNhbGwgdG8gdHJhbnNwb3J0IHNlcnZpY2UgZG9tYWluIHRvIGF2b2lkIHVubmVjZXNzYXJ5IGN5Y2xlLlxyXG4gICAgLy8gTmVlZCB0byBibGFja2xpc3QgYm90aCBvbGQgYW5kIG5ldyBlbmRwb2ludHMgdG8gYXZvaWQgbWlncmF0aW9uIGdhcC5cclxuICAgIHZhciBuZXR3b3JrUmVxdWVzdFVybCA9IG5ldHdvcmtSZXF1ZXN0LnVybDtcclxuICAgIC8vIEJsYWNrbGlzdCBvbGQgbG9nIGVuZHBvaW50IGFuZCBuZXcgdHJhbnNwb3J0IGVuZHBvaW50LlxyXG4gICAgLy8gQmVjYXVzZSBQZXJmb3JtYW5jZSBTREsgZG9lc24ndCBpbnN0cnVtZW50IHJlcXVlc3RzIHNlbnQgZnJvbSBTREsgaXRzZWxmLlxyXG4gICAgdmFyIGxvZ0VuZHBvaW50VXJsID0gc2V0dGluZ3NTZXJ2aWNlLmxvZ0VuZFBvaW50VXJsLnNwbGl0KCc/JylbMF07XHJcbiAgICB2YXIgZmxFbmRwb2ludFVybCA9IHNldHRpbmdzU2VydmljZS5mbFRyYW5zcG9ydEVuZHBvaW50VXJsLnNwbGl0KCc/JylbMF07XHJcbiAgICBpZiAobmV0d29ya1JlcXVlc3RVcmwgPT09IGxvZ0VuZHBvaW50VXJsIHx8XHJcbiAgICAgICAgbmV0d29ya1JlcXVlc3RVcmwgPT09IGZsRW5kcG9pbnRVcmwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXNldHRpbmdzU2VydmljZS5sb2dnaW5nRW5hYmxlZCB8fFxyXG4gICAgICAgICFzZXR0aW5nc1NlcnZpY2UubG9nTmV0d29ya0FmdGVyU2FtcGxpbmcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbmRMb2cobmV0d29ya1JlcXVlc3QsIDAgLyogTmV0d29ya1JlcXVlc3QgKi8pOyB9LCAwKTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVyKHJlc291cmNlLCByZXNvdXJjZVR5cGUpIHtcclxuICAgIGlmIChyZXNvdXJjZVR5cGUgPT09IDAgLyogTmV0d29ya1JlcXVlc3QgKi8pIHtcclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplTmV0d29ya1JlcXVlc3QocmVzb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZVRyYWNlKHJlc291cmNlKTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVOZXR3b3JrUmVxdWVzdChuZXR3b3JrUmVxdWVzdCkge1xyXG4gICAgdmFyIG5ldHdvcmtSZXF1ZXN0TWV0cmljID0ge1xyXG4gICAgICAgIHVybDogbmV0d29ya1JlcXVlc3QudXJsLFxyXG4gICAgICAgIGh0dHBfbWV0aG9kOiBuZXR3b3JrUmVxdWVzdC5odHRwTWV0aG9kIHx8IDAsXHJcbiAgICAgICAgaHR0cF9yZXNwb25zZV9jb2RlOiAyMDAsXHJcbiAgICAgICAgcmVzcG9uc2VfcGF5bG9hZF9ieXRlczogbmV0d29ya1JlcXVlc3QucmVzcG9uc2VQYXlsb2FkQnl0ZXMsXHJcbiAgICAgICAgY2xpZW50X3N0YXJ0X3RpbWVfdXM6IG5ldHdvcmtSZXF1ZXN0LnN0YXJ0VGltZVVzLFxyXG4gICAgICAgIHRpbWVfdG9fcmVzcG9uc2VfaW5pdGlhdGVkX3VzOiBuZXR3b3JrUmVxdWVzdC50aW1lVG9SZXNwb25zZUluaXRpYXRlZFVzLFxyXG4gICAgICAgIHRpbWVfdG9fcmVzcG9uc2VfY29tcGxldGVkX3VzOiBuZXR3b3JrUmVxdWVzdC50aW1lVG9SZXNwb25zZUNvbXBsZXRlZFVzXHJcbiAgICB9O1xyXG4gICAgdmFyIHBlcmZNZXRyaWMgPSB7XHJcbiAgICAgICAgYXBwbGljYXRpb25faW5mbzogZ2V0QXBwbGljYXRpb25JbmZvKCksXHJcbiAgICAgICAgbmV0d29ya19yZXF1ZXN0X21ldHJpYzogbmV0d29ya1JlcXVlc3RNZXRyaWNcclxuICAgIH07XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocGVyZk1ldHJpYyk7XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplVHJhY2UodHJhY2UpIHtcclxuICAgIHZhciB0cmFjZU1ldHJpYyA9IHtcclxuICAgICAgICBuYW1lOiB0cmFjZS5uYW1lLFxyXG4gICAgICAgIGlzX2F1dG86IHRyYWNlLmlzQXV0byxcclxuICAgICAgICBjbGllbnRfc3RhcnRfdGltZV91czogdHJhY2Uuc3RhcnRUaW1lVXMsXHJcbiAgICAgICAgZHVyYXRpb25fdXM6IHRyYWNlLmR1cmF0aW9uVXNcclxuICAgIH07XHJcbiAgICBpZiAoT2JqZWN0LmtleXModHJhY2UuY291bnRlcnMpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHRyYWNlTWV0cmljLmNvdW50ZXJzID0gdHJhY2UuY291bnRlcnM7XHJcbiAgICB9XHJcbiAgICB2YXIgY3VzdG9tQXR0cmlidXRlcyA9IHRyYWNlLmdldEF0dHJpYnV0ZXMoKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhjdXN0b21BdHRyaWJ1dGVzKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICB0cmFjZU1ldHJpYy5jdXN0b21fYXR0cmlidXRlcyA9IGN1c3RvbUF0dHJpYnV0ZXM7XHJcbiAgICB9XHJcbiAgICB2YXIgcGVyZk1ldHJpYyA9IHtcclxuICAgICAgICBhcHBsaWNhdGlvbl9pbmZvOiBnZXRBcHBsaWNhdGlvbkluZm8oKSxcclxuICAgICAgICB0cmFjZV9tZXRyaWM6IHRyYWNlTWV0cmljXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBlcmZNZXRyaWMpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEFwcGxpY2F0aW9uSW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ29vZ2xlX2FwcF9pZDogU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCkuZ2V0QXBwSWQoKSxcclxuICAgICAgICBhcHBfaW5zdGFuY2VfaWQ6IGdldElpZCgpLFxyXG4gICAgICAgIHdlYl9hcHBfaW5mbzoge1xyXG4gICAgICAgICAgICBzZGtfdmVyc2lvbjogU0RLX1ZFUlNJT04sXHJcbiAgICAgICAgICAgIHBhZ2VfdXJsOiBBcGkuZ2V0SW5zdGFuY2UoKS5nZXRVcmwoKSxcclxuICAgICAgICAgICAgc2VydmljZV93b3JrZXJfc3RhdHVzOiBnZXRTZXJ2aWNlV29ya2VyU3RhdHVzKCksXHJcbiAgICAgICAgICAgIHZpc2liaWxpdHlfc3RhdGU6IGdldFZpc2liaWxpdHlTdGF0ZSgpLFxyXG4gICAgICAgICAgICBlZmZlY3RpdmVfY29ubmVjdGlvbl90eXBlOiBnZXRFZmZlY3RpdmVDb25uZWN0aW9uVHlwZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcHBsaWNhdGlvbl9wcm9jZXNzX3N0YXRlOiAwXHJcbiAgICB9O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBNQVhfTUVUUklDX05BTUVfTEVOR1RIID0gMTAwO1xyXG52YXIgUkVTRVJWRURfQVVUT19QUkVGSVggPSAnXyc7XHJcbnZhciBvb2JNZXRyaWNzID0gW1xyXG4gICAgRklSU1RfUEFJTlRfQ09VTlRFUl9OQU1FLFxyXG4gICAgRklSU1RfQ09OVEVOVEZVTF9QQUlOVF9DT1VOVEVSX05BTUUsXHJcbiAgICBGSVJTVF9JTlBVVF9ERUxBWV9DT1VOVEVSX05BTUVcclxuXTtcclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbWV0cmljIGlzIGN1c3RvbSBhbmQgZG9lcyBub3Qgc3RhcnQgd2l0aCByZXNlcnZlZCBwcmVmaXgsIG9yIGlmXHJcbiAqIHRoZSBtZXRyaWMgaXMgb25lIG9mIG91dCBvZiB0aGUgYm94IHBhZ2UgbG9hZCB0cmFjZSBtZXRyaWNzLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNWYWxpZE1ldHJpY05hbWUobmFtZSwgdHJhY2VOYW1lKSB7XHJcbiAgICBpZiAobmFtZS5sZW5ndGggPT09IDAgfHwgbmFtZS5sZW5ndGggPiBNQVhfTUVUUklDX05BTUVfTEVOR1RIKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgodHJhY2VOYW1lICYmXHJcbiAgICAgICAgdHJhY2VOYW1lLnN0YXJ0c1dpdGgoT09CX1RSQUNFX1BBR0VfTE9BRF9QUkVGSVgpICYmXHJcbiAgICAgICAgb29iTWV0cmljcy5pbmRleE9mKG5hbWUpID4gLTEpIHx8XHJcbiAgICAgICAgIW5hbWUuc3RhcnRzV2l0aChSRVNFUlZFRF9BVVRPX1BSRUZJWCkpO1xyXG59XHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgcHJvdmlkZWQgdmFsdWUgdG8gYW4gaW50ZWdlciB2YWx1ZSB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZXRyaWMuXHJcbiAqIEBwYXJhbSBwcm92aWRlZFZhbHVlIFByb3ZpZGVkIG51bWJlciB2YWx1ZSBvZiB0aGUgbWV0cmljIHRoYXQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIuXHJcbiAqXHJcbiAqIEByZXR1cm5zIENvbnZlcnRlZCBpbnRlZ2VyIG51bWJlciB0byBiZSBzZXQgZm9yIHRoZSBtZXRyaWMuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb252ZXJ0TWV0cmljVmFsdWVUb0ludGVnZXIocHJvdmlkZWRWYWx1ZSkge1xyXG4gICAgdmFyIHZhbHVlQXNJbnRlZ2VyID0gTWF0aC5mbG9vcihwcm92aWRlZFZhbHVlKTtcclxuICAgIGlmICh2YWx1ZUFzSW50ZWdlciA8IHByb3ZpZGVkVmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlTG9nZ2VyLmluZm8oXCJNZXRyaWMgdmFsdWUgc2hvdWxkIGJlIGFuIEludGVnZXIsIHNldHRpbmcgdGhlIHZhbHVlIGFzIDogXCIgKyB2YWx1ZUFzSW50ZWdlciArIFwiLlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZUFzSW50ZWdlcjtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgVHJhY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0cmFjZS5cclxuICAgICAqIEBwYXJhbSBpc0F1dG8gSWYgdGhlIHRyYWNlIGlzIGF1dG8taW5zdHJ1bWVudGVkLlxyXG4gICAgICogQHBhcmFtIHRyYWNlTWVhc3VyZU5hbWUgVGhlIG5hbWUgb2YgdGhlIG1lYXN1cmUgbWFya2VyIGluIHVzZXIgdGltaW5nIHNwZWNpZmljYXRpb24uIFRoaXMgZmllbGRcclxuICAgICAqIGlzIG9ubHkgc2V0IHdoZW4gdGhlIHRyYWNlIGlzIGJ1aWx0IGZvciBsb2dnaW5nIHdoZW4gdGhlIHVzZXIgZGlyZWN0bHkgdXNlcyB0aGUgdXNlciB0aW1pbmdcclxuICAgICAqIGFwaSAocGVyZm9ybWFuY2UubWFyayBhbmQgcGVyZm9ybWFuY2UubWVhc3VyZSkuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFRyYWNlKG5hbWUsIGlzQXV0bywgdHJhY2VNZWFzdXJlTmFtZSkge1xyXG4gICAgICAgIGlmIChpc0F1dG8gPT09IHZvaWQgMCkgeyBpc0F1dG8gPSBmYWxzZTsgfVxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pc0F1dG8gPSBpc0F1dG87XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogVU5JTklUSUFMSVpFRCAqLztcclxuICAgICAgICB0aGlzLmN1c3RvbUF0dHJpYnV0ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLmNvdW50ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5hcGkgPSBBcGkuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLnJhbmRvbUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQXV0bykge1xyXG4gICAgICAgICAgICB0aGlzLnRyYWNlU3RhcnRNYXJrID0gVFJBQ0VfU1RBUlRfTUFSS19QUkVGSVggKyBcIi1cIiArIHRoaXMucmFuZG9tSWQgKyBcIi1cIiArIHRoaXMubmFtZTtcclxuICAgICAgICAgICAgdGhpcy50cmFjZVN0b3BNYXJrID0gVFJBQ0VfU1RPUF9NQVJLX1BSRUZJWCArIFwiLVwiICsgdGhpcy5yYW5kb21JZCArIFwiLVwiICsgdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnRyYWNlTWVhc3VyZSA9XHJcbiAgICAgICAgICAgICAgICB0cmFjZU1lYXN1cmVOYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgVFJBQ0VfTUVBU1VSRV9QUkVGSVggKyBcIi1cIiArIHRoaXMucmFuZG9tSWQgKyBcIi1cIiArIHRoaXMubmFtZTtcclxuICAgICAgICAgICAgaWYgKHRyYWNlTWVhc3VyZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEZvciB0aGUgY2FzZSBvZiBkaXJlY3QgdXNlciB0aW1pbmcgdHJhY2VzLCBubyBzdGFydCBzdG9wIHdpbGwgaGFwcGVuLiBUaGUgbWVhc3VyZSBvYmplY3RcclxuICAgICAgICAgICAgICAgIC8vIGlzIGFscmVhZHkgYXZhaWxhYmxlLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUcmFjZU1ldHJpY3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIGEgdHJhY2UuIFRoZSBtZWFzdXJlbWVudCBvZiB0aGUgZHVyYXRpb24gc3RhcnRzIGF0IHRoaXMgcG9pbnQuXHJcbiAgICAgKi9cclxuICAgIFRyYWNlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gMSAvKiBVTklOSVRJQUxJWkVEICovKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidHJhY2Ugc3RhcnRlZFwiIC8qIFRSQUNFX1NUQVJURURfQkVGT1JFICovLCB7XHJcbiAgICAgICAgICAgICAgICB0cmFjZU5hbWU6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcGkubWFyayh0aGlzLnRyYWNlU3RhcnRNYXJrKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBSVU5OSU5HICovO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgdGhlIHRyYWNlLiBUaGUgbWVhc3VyZW1lbnQgb2YgdGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFjZSBzdG9wcyBhdCB0aGlzIHBvaW50IGFuZCB0cmFjZVxyXG4gICAgICogaXMgbG9nZ2VkLlxyXG4gICAgICovXHJcbiAgICBUcmFjZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gMiAvKiBSVU5OSU5HICovKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidHJhY2Ugc3RvcHBlZFwiIC8qIFRSQUNFX1NUT1BQRURfQkVGT1JFICovLCB7XHJcbiAgICAgICAgICAgICAgICB0cmFjZU5hbWU6IHRoaXMubmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDMgLyogVEVSTUlOQVRFRCAqLztcclxuICAgICAgICB0aGlzLmFwaS5tYXJrKHRoaXMudHJhY2VTdG9wTWFyayk7XHJcbiAgICAgICAgdGhpcy5hcGkubWVhc3VyZSh0aGlzLnRyYWNlTWVhc3VyZSwgdGhpcy50cmFjZVN0YXJ0TWFyaywgdGhpcy50cmFjZVN0b3BNYXJrKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRyYWNlTWV0cmljcygpO1xyXG4gICAgICAgIGxvZ1RyYWNlKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVjb3JkcyBhIHRyYWNlIHdpdGggcHJlZGV0ZXJtaW5lZCB2YWx1ZXMuIElmIHRoaXMgbWV0aG9kIGlzIHVzZWQgYSB0cmFjZSBpcyBjcmVhdGVkIGFuZCBsb2dnZWRcclxuICAgICAqIGRpcmVjdGx5LiBObyBuZWVkIHRvIHVzZSBzdGFydCBhbmQgc3RvcCBtZXRob2RzLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0VGltZSBUcmFjZSBzdGFydCB0aW1lIHNpbmNlIGVwb2NoIGluIG1pbGxpc2VjXHJcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGR1cmFjdGlvbiBvZiB0aGUgdHJhY2UgaW4gbWlsbGlzZWNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB3aGljaCBjYW4gb3B0aW9uYWxseSBob2xkIG1hcHMgb2YgY3VzdG9tIG1ldHJpY3MgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzXHJcbiAgICAgKi9cclxuICAgIFRyYWNlLnByb3RvdHlwZS5yZWNvcmQgPSBmdW5jdGlvbiAoc3RhcnRUaW1lLCBkdXJhdGlvbiwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChzdGFydFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vbnBvc2l0aXZlIHRyYWNlIHN0YXJ0VGltZVwiIC8qIE5PTlBPU0lUSVZFX1RSQUNFX1NUQVJUX1RJTUUgKi8sIHtcclxuICAgICAgICAgICAgICAgIHRyYWNlTmFtZTogdGhpcy5uYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vbnBvc2l0aXZlIHRyYWNlIGR1cmF0aW9uXCIgLyogTk9OUE9TSVRJVkVfVFJBQ0VfRFVSQVRJT04gKi8sIHtcclxuICAgICAgICAgICAgICAgIHRyYWNlTmFtZTogdGhpcy5uYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmR1cmF0aW9uVXMgPSBNYXRoLmZsb29yKGR1cmF0aW9uICogMTAwMCk7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVVcyA9IE1hdGguZmxvb3Ioc3RhcnRUaW1lICogMTAwMCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tQXR0cmlidXRlcyA9IF9fYXNzaWduKHt9LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm1ldHJpY3MpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG9wdGlvbnMubWV0cmljcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0cmljID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIob3B0aW9ucy5tZXRyaWNzW21ldHJpY10pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlcnNbbWV0cmljXSA9IE51bWJlcihNYXRoLmZsb29yKG9wdGlvbnMubWV0cmljc1ttZXRyaWNdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nVHJhY2UodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbmNyZW1lbnRzIGEgY3VzdG9tIG1ldHJpYyBieSBhIGNlcnRhaW4gbnVtYmVyIG9yIDEgaWYgbnVtYmVyIG5vdCBzcGVjaWZpZWQuIFdpbGwgY3JlYXRlIGEgbmV3XHJcbiAgICAgKiBjdXN0b20gbWV0cmljIGlmIG9uZSB3aXRoIHRoZSBnaXZlbiBuYW1lIGRvZXMgbm90IGV4aXN0LiBUaGUgdmFsdWUgd2lsbCBiZSBmbG9vcmVkIGRvd24gdG8gYW5cclxuICAgICAqIGludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gY291bnRlciBOYW1lIG9mIHRoZSBjdXN0b20gbWV0cmljXHJcbiAgICAgKiBAcGFyYW0gbnVtQXNJbnRlZ2VyIEluY3JlbWVudCBieSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBUcmFjZS5wcm90b3R5cGUuaW5jcmVtZW50TWV0cmljID0gZnVuY3Rpb24gKGNvdW50ZXIsIG51bUFzSW50ZWdlcikge1xyXG4gICAgICAgIGlmIChudW1Bc0ludGVnZXIgPT09IHZvaWQgMCkgeyBudW1Bc0ludGVnZXIgPSAxOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlcnNbY291bnRlcl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnB1dE1ldHJpYyhjb3VudGVyLCBudW1Bc0ludGVnZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXRNZXRyaWMoY291bnRlciwgdGhpcy5jb3VudGVyc1tjb3VudGVyXSArIG51bUFzSW50ZWdlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhIGN1c3RvbSBtZXRyaWMgdG8gYSBzcGVjaWZpZWQgdmFsdWUuIFdpbGwgY3JlYXRlIGEgbmV3IGN1c3RvbSBtZXRyaWMgaWYgb25lIHdpdGggdGhlXHJcbiAgICAgKiBnaXZlbiBuYW1lIGRvZXMgbm90IGV4aXN0LiBUaGUgdmFsdWUgd2lsbCBiZSBmbG9vcmVkIGRvd24gdG8gYW4gaW50ZWdlci5cclxuICAgICAqIEBwYXJhbSBjb3VudGVyIE5hbWUgb2YgdGhlIGN1c3RvbSBtZXRyaWNcclxuICAgICAqIEBwYXJhbSBudW1Bc0ludGVnZXIgU2V0IGN1c3RvbSBtZXRyaWMgdG8gdGhpcyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBUcmFjZS5wcm90b3R5cGUucHV0TWV0cmljID0gZnVuY3Rpb24gKGNvdW50ZXIsIG51bUFzSW50ZWdlcikge1xyXG4gICAgICAgIGlmIChpc1ZhbGlkTWV0cmljTmFtZShjb3VudGVyLCB0aGlzLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlcnNbY291bnRlcl0gPSBjb252ZXJ0TWV0cmljVmFsdWVUb0ludGVnZXIobnVtQXNJbnRlZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZCBjdXN0b20gbWV0cmljIG5hbWVcIiAvKiBJTlZBTElEX0NVU1RPTV9NRVRSSUNfTkFNRSAqLywge1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tTWV0cmljTmFtZTogY291bnRlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tIG1ldHJpYyBieSB0aGF0IG5hbWUuIElmIGEgY3VzdG9tIG1ldHJpYyB3aXRoIHRoYXQgbmFtZSBkb2VzXHJcbiAgICAgKiBub3QgZXhpc3Qgd2lsbCByZXR1cm4gemVyby5cclxuICAgICAqIEBwYXJhbSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIFRyYWNlLnByb3RvdHlwZS5nZXRNZXRyaWMgPSBmdW5jdGlvbiAoY291bnRlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXJzW2NvdW50ZXJdIHx8IDA7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGEgY3VzdG9tIGF0dHJpYnV0ZSBvZiBhIHRyYWNlIHRvIGEgY2VydGFpbiB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBhdHRyXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgVHJhY2UucHJvdG90eXBlLnB1dEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBpc1ZhbGlkTmFtZSA9IGlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lKGF0dHIpO1xyXG4gICAgICAgIHZhciBpc1ZhbGlkVmFsdWUgPSBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkTmFtZSAmJiBpc1ZhbGlkVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21BdHRyaWJ1dGVzW2F0dHJdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVGhyb3cgYXBwcm9wcmlhdGUgZXJyb3Igd2hlbiB0aGUgYXR0cmlidXRlIG5hbWUgb3IgdmFsdWUgaXMgaW52YWxpZC5cclxuICAgICAgICBpZiAoIWlzVmFsaWROYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZCBhdHRyaWJ1dGUgbmFtZVwiIC8qIElOVkFMSURfQVRUUklCVVRFX05BTUUgKi8sIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IGF0dHJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNWYWxpZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZCBhdHRyaWJ1dGUgdmFsdWVcIiAvKiBJTlZBTElEX0FUVFJJQlVURV9WQUxVRSAqLywge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgYSBjdXN0b20gYXR0cmlidXRlIG9mIGEgdHJhY2UgaXMgc2V0IHRvLlxyXG4gICAgICogQHBhcmFtIGF0dHJcclxuICAgICAqL1xyXG4gICAgVHJhY2UucHJvdG90eXBlLmdldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tQXR0cmlidXRlc1thdHRyXTtcclxuICAgIH07XHJcbiAgICBUcmFjZS5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXN0b21BdHRyaWJ1dGVzW2F0dHJdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgdGhpcy5jdXN0b21BdHRyaWJ1dGVzW2F0dHJdO1xyXG4gICAgfTtcclxuICAgIFRyYWNlLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgdGhpcy5jdXN0b21BdHRyaWJ1dGVzKTtcclxuICAgIH07XHJcbiAgICBUcmFjZS5wcm90b3R5cGUuc2V0U3RhcnRUaW1lID0gZnVuY3Rpb24gKHN0YXJ0VGltZSkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lVXMgPSBzdGFydFRpbWU7XHJcbiAgICB9O1xyXG4gICAgVHJhY2UucHJvdG90eXBlLnNldER1cmF0aW9uID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvblVzID0gZHVyYXRpb247XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGVzIGFuZCBhc3NpZ25zIHRoZSBkdXJhdGlvbiBhbmQgc3RhcnQgdGltZSBvZiB0aGUgdHJhY2UgdXNpbmcgdGhlIG1lYXN1cmUgcGVyZm9ybWFuY2VcclxuICAgICAqIGVudHJ5LlxyXG4gICAgICovXHJcbiAgICBUcmFjZS5wcm90b3R5cGUuY2FsY3VsYXRlVHJhY2VNZXRyaWNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwZXJmTWVhc3VyZUVudHJpZXMgPSB0aGlzLmFwaS5nZXRFbnRyaWVzQnlOYW1lKHRoaXMudHJhY2VNZWFzdXJlKTtcclxuICAgICAgICB2YXIgcGVyZk1lYXN1cmVFbnRyeSA9IHBlcmZNZWFzdXJlRW50cmllcyAmJiBwZXJmTWVhc3VyZUVudHJpZXNbMF07XHJcbiAgICAgICAgaWYgKHBlcmZNZWFzdXJlRW50cnkpIHtcclxuICAgICAgICAgICAgdGhpcy5kdXJhdGlvblVzID0gTWF0aC5mbG9vcihwZXJmTWVhc3VyZUVudHJ5LmR1cmF0aW9uICogMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lVXMgPSBNYXRoLmZsb29yKChwZXJmTWVhc3VyZUVudHJ5LnN0YXJ0VGltZSArIHRoaXMuYXBpLmdldFRpbWVPcmlnaW4oKSkgKiAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gbmF2aWdhdGlvblRpbWluZ3MgQSBzaW5nbGUgZWxlbWVudCBhcnJheSB3aGljaCBjb250YWlucyB0aGUgbmF2aWdhdGlvblRJbWluZyBvYmplY3Qgb2ZcclxuICAgICAqIHRoZSBwYWdlIGxvYWRcclxuICAgICAqIEBwYXJhbSBwYWludFRpbWluZ3MgQSBhcnJheSB3aGljaCBjb250YWlucyBwYWludFRpbWluZyBvYmplY3Qgb2YgdGhlIHBhZ2UgbG9hZFxyXG4gICAgICogQHBhcmFtIGZpcnN0SW5wdXREZWxheSBGaXJzdCBpbnB1dCBkZWxheSBpbiBtaWxsaXNlY1xyXG4gICAgICovXHJcbiAgICBUcmFjZS5jcmVhdGVPb2JUcmFjZSA9IGZ1bmN0aW9uIChuYXZpZ2F0aW9uVGltaW5ncywgcGFpbnRUaW1pbmdzLCBmaXJzdElucHV0RGVsYXkpIHtcclxuICAgICAgICB2YXIgcm91dGUgPSBBcGkuZ2V0SW5zdGFuY2UoKS5nZXRVcmwoKTtcclxuICAgICAgICBpZiAoIXJvdXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRyYWNlID0gbmV3IFRyYWNlKE9PQl9UUkFDRV9QQUdFX0xPQURfUFJFRklYICsgcm91dGUsIHRydWUpO1xyXG4gICAgICAgIHZhciB0aW1lT3JpZ2luVXMgPSBNYXRoLmZsb29yKEFwaS5nZXRJbnN0YW5jZSgpLmdldFRpbWVPcmlnaW4oKSAqIDEwMDApO1xyXG4gICAgICAgIHRyYWNlLnNldFN0YXJ0VGltZSh0aW1lT3JpZ2luVXMpO1xyXG4gICAgICAgIC8vIG5hdmlnYXRpb25UaW1pbmdzIGluY2x1ZGVzIG9ubHkgb25lIGVsZW1lbnQuXHJcbiAgICAgICAgaWYgKG5hdmlnYXRpb25UaW1pbmdzICYmIG5hdmlnYXRpb25UaW1pbmdzWzBdKSB7XHJcbiAgICAgICAgICAgIHRyYWNlLnNldER1cmF0aW9uKE1hdGguZmxvb3IobmF2aWdhdGlvblRpbWluZ3NbMF0uZHVyYXRpb24gKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIHRyYWNlLnB1dE1ldHJpYygnZG9tSW50ZXJhY3RpdmUnLCBNYXRoLmZsb29yKG5hdmlnYXRpb25UaW1pbmdzWzBdLmRvbUludGVyYWN0aXZlICogMTAwMCkpO1xyXG4gICAgICAgICAgICB0cmFjZS5wdXRNZXRyaWMoJ2RvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCcsIE1hdGguZmxvb3IobmF2aWdhdGlvblRpbWluZ3NbMF0uZG9tQ29udGVudExvYWRlZEV2ZW50RW5kICogMTAwMCkpO1xyXG4gICAgICAgICAgICB0cmFjZS5wdXRNZXRyaWMoJ2xvYWRFdmVudEVuZCcsIE1hdGguZmxvb3IobmF2aWdhdGlvblRpbWluZ3NbMF0ubG9hZEV2ZW50RW5kICogMTAwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRklSU1RfUEFJTlQgPSAnZmlyc3QtcGFpbnQnO1xyXG4gICAgICAgIHZhciBGSVJTVF9DT05URU5URlVMX1BBSU5UID0gJ2ZpcnN0LWNvbnRlbnRmdWwtcGFpbnQnO1xyXG4gICAgICAgIGlmIChwYWludFRpbWluZ3MpIHtcclxuICAgICAgICAgICAgdmFyIGZpcnN0UGFpbnQgPSBwYWludFRpbWluZ3MuZmluZChmdW5jdGlvbiAocGFpbnRPYmplY3QpIHsgcmV0dXJuIHBhaW50T2JqZWN0Lm5hbWUgPT09IEZJUlNUX1BBSU5UOyB9KTtcclxuICAgICAgICAgICAgaWYgKGZpcnN0UGFpbnQgJiYgZmlyc3RQYWludC5zdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRyYWNlLnB1dE1ldHJpYyhGSVJTVF9QQUlOVF9DT1VOVEVSX05BTUUsIE1hdGguZmxvb3IoZmlyc3RQYWludC5zdGFydFRpbWUgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGZpcnN0Q29udGVudGZ1bFBhaW50ID0gcGFpbnRUaW1pbmdzLmZpbmQoZnVuY3Rpb24gKHBhaW50T2JqZWN0KSB7IHJldHVybiBwYWludE9iamVjdC5uYW1lID09PSBGSVJTVF9DT05URU5URlVMX1BBSU5UOyB9KTtcclxuICAgICAgICAgICAgaWYgKGZpcnN0Q29udGVudGZ1bFBhaW50ICYmIGZpcnN0Q29udGVudGZ1bFBhaW50LnN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgdHJhY2UucHV0TWV0cmljKEZJUlNUX0NPTlRFTlRGVUxfUEFJTlRfQ09VTlRFUl9OQU1FLCBNYXRoLmZsb29yKGZpcnN0Q29udGVudGZ1bFBhaW50LnN0YXJ0VGltZSAqIDEwMDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlyc3RJbnB1dERlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0cmFjZS5wdXRNZXRyaWMoRklSU1RfSU5QVVRfREVMQVlfQ09VTlRFUl9OQU1FLCBNYXRoLmZsb29yKGZpcnN0SW5wdXREZWxheSAqIDEwMDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dUcmFjZSh0cmFjZSk7XHJcbiAgICB9O1xyXG4gICAgVHJhY2UuY3JlYXRlVXNlclRpbWluZ1RyYWNlID0gZnVuY3Rpb24gKG1lYXN1cmVOYW1lKSB7XHJcbiAgICAgICAgdmFyIHRyYWNlID0gbmV3IFRyYWNlKG1lYXN1cmVOYW1lLCBmYWxzZSwgbWVhc3VyZU5hbWUpO1xyXG4gICAgICAgIGxvZ1RyYWNlKHRyYWNlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJhY2U7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ldHdvcmtSZXF1ZXN0RW50cnkoZW50cnkpIHtcclxuICAgIHZhciBwZXJmb3JtYW5jZUVudHJ5ID0gZW50cnk7XHJcbiAgICBpZiAoIXBlcmZvcm1hbmNlRW50cnkgfHwgcGVyZm9ybWFuY2VFbnRyeS5yZXNwb25zZVN0YXJ0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgdGltZU9yaWdpbiA9IEFwaS5nZXRJbnN0YW5jZSgpLmdldFRpbWVPcmlnaW4oKTtcclxuICAgIHZhciBzdGFydFRpbWVVcyA9IE1hdGguZmxvb3IoKHBlcmZvcm1hbmNlRW50cnkuc3RhcnRUaW1lICsgdGltZU9yaWdpbikgKiAxMDAwKTtcclxuICAgIHZhciB0aW1lVG9SZXNwb25zZUluaXRpYXRlZFVzID0gcGVyZm9ybWFuY2VFbnRyeS5yZXNwb25zZVN0YXJ0XHJcbiAgICAgICAgPyBNYXRoLmZsb29yKChwZXJmb3JtYW5jZUVudHJ5LnJlc3BvbnNlU3RhcnQgLSBwZXJmb3JtYW5jZUVudHJ5LnN0YXJ0VGltZSkgKiAxMDAwKVxyXG4gICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgdmFyIHRpbWVUb1Jlc3BvbnNlQ29tcGxldGVkVXMgPSBNYXRoLmZsb29yKChwZXJmb3JtYW5jZUVudHJ5LnJlc3BvbnNlRW5kIC0gcGVyZm9ybWFuY2VFbnRyeS5zdGFydFRpbWUpICogMTAwMCk7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHF1ZXJ5IHBhcmFtcyBmcm9tIGxvZ2dlZCBuZXR3b3JrIHJlcXVlc3QgdXJsLlxyXG4gICAgdmFyIHVybCA9IHBlcmZvcm1hbmNlRW50cnkubmFtZSAmJiBwZXJmb3JtYW5jZUVudHJ5Lm5hbWUuc3BsaXQoJz8nKVswXTtcclxuICAgIHZhciBuZXR3b3JrUmVxdWVzdCA9IHtcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICByZXNwb25zZVBheWxvYWRCeXRlczogcGVyZm9ybWFuY2VFbnRyeS50cmFuc2ZlclNpemUsXHJcbiAgICAgICAgc3RhcnRUaW1lVXM6IHN0YXJ0VGltZVVzLFxyXG4gICAgICAgIHRpbWVUb1Jlc3BvbnNlSW5pdGlhdGVkVXM6IHRpbWVUb1Jlc3BvbnNlSW5pdGlhdGVkVXMsXHJcbiAgICAgICAgdGltZVRvUmVzcG9uc2VDb21wbGV0ZWRVczogdGltZVRvUmVzcG9uc2VDb21wbGV0ZWRVc1xyXG4gICAgfTtcclxuICAgIGxvZ05ldHdvcmtSZXF1ZXN0KG5ldHdvcmtSZXF1ZXN0KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgRklEX1dBSVRfVElNRV9NUyA9IDUwMDA7XHJcbmZ1bmN0aW9uIHNldHVwT29iUmVzb3VyY2VzKCkge1xyXG4gICAgLy8gRG8gbm90IGluaXRpYWxpemUgdW5sZXNzIGlpZCBpcyBhdmFpbGFibGUuXHJcbiAgICBpZiAoIWdldElpZCgpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gVGhlIGxvYWQgZXZlbnQgbWlnaHQgbm90IGhhdmUgZmlyZWQgeWV0LCBhbmQgdGhhdCBtZWFucyBwZXJmb3JtYW5jZSBuYXZpZ2F0aW9uIHRpbWluZ1xyXG4gICAgLy8gb2JqZWN0IGhhcyBhIGR1cmF0aW9uIG9mIDAuIFRoZSBzZXR1cCBzaG91bGQgcnVuIGFmdGVyIGFsbCBjdXJyZW50IHRhc2tzIGluIGpzIHF1ZXVlLlxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzZXR1cE9vYlRyYWNlcygpOyB9LCAwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0dXBOZXR3b3JrUmVxdWVzdHMoKTsgfSwgMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldHVwVXNlclRpbWluZ1RyYWNlcygpOyB9LCAwKTtcclxufVxyXG5mdW5jdGlvbiBzZXR1cE5ldHdvcmtSZXF1ZXN0cygpIHtcclxuICAgIHZhciBhcGkgPSBBcGkuZ2V0SW5zdGFuY2UoKTtcclxuICAgIHZhciByZXNvdXJjZXMgPSBhcGkuZ2V0RW50cmllc0J5VHlwZSgncmVzb3VyY2UnKTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcmVzb3VyY2VzXzEgPSByZXNvdXJjZXM7IF9pIDwgcmVzb3VyY2VzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHJlc291cmNlID0gcmVzb3VyY2VzXzFbX2ldO1xyXG4gICAgICAgIGNyZWF0ZU5ldHdvcmtSZXF1ZXN0RW50cnkocmVzb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgYXBpLnNldHVwT2JzZXJ2ZXIoJ3Jlc291cmNlJywgY3JlYXRlTmV0d29ya1JlcXVlc3RFbnRyeSk7XHJcbn1cclxuZnVuY3Rpb24gc2V0dXBPb2JUcmFjZXMoKSB7XHJcbiAgICB2YXIgYXBpID0gQXBpLmdldEluc3RhbmNlKCk7XHJcbiAgICB2YXIgbmF2aWdhdGlvblRpbWluZ3MgPSBhcGkuZ2V0RW50cmllc0J5VHlwZSgnbmF2aWdhdGlvbicpO1xyXG4gICAgdmFyIHBhaW50VGltaW5ncyA9IGFwaS5nZXRFbnRyaWVzQnlUeXBlKCdwYWludCcpO1xyXG4gICAgLy8gSWYgRmlyc3QgSW5wdXQgRGVzbHkgcG9seWZpbGwgaXMgYWRkZWQgdG8gdGhlIHBhZ2UsIHJlcG9ydCB0aGUgZmlkIHZhbHVlLlxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvZmlyc3QtaW5wdXQtZGVsYXlcclxuICAgIGlmIChhcGkub25GaXJzdElucHV0RGVsYXkpIHtcclxuICAgICAgICAvLyBJZiB0aGUgZmlkIGNhbGwgYmFjayBpcyBub3QgY2FsbGVkIGZvciBjZXJ0YWluIHRpbWUsIGNvbnRpbnVlIHdpdGhvdXQgaXQuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICB2YXIgdGltZW91dElkXzEgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgVHJhY2UuY3JlYXRlT29iVHJhY2UobmF2aWdhdGlvblRpbWluZ3MsIHBhaW50VGltaW5ncyk7XHJcbiAgICAgICAgICAgIHRpbWVvdXRJZF8xID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0sIEZJRF9XQUlUX1RJTUVfTVMpO1xyXG4gICAgICAgIGFwaS5vbkZpcnN0SW5wdXREZWxheShmdW5jdGlvbiAoZmlkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SWRfMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZF8xKTtcclxuICAgICAgICAgICAgICAgIFRyYWNlLmNyZWF0ZU9vYlRyYWNlKG5hdmlnYXRpb25UaW1pbmdzLCBwYWludFRpbWluZ3MsIGZpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIFRyYWNlLmNyZWF0ZU9vYlRyYWNlKG5hdmlnYXRpb25UaW1pbmdzLCBwYWludFRpbWluZ3MpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldHVwVXNlclRpbWluZ1RyYWNlcygpIHtcclxuICAgIHZhciBhcGkgPSBBcGkuZ2V0SW5zdGFuY2UoKTtcclxuICAgIC8vIFJ1biB0aHJvdWdoIHRoZSBtZWFzdXJlIHBlcmZvcm1hbmNlIGVudHJpZXMgY29sbGVjdGVkIHVwIHRvIHRoaXMgcG9pbnQuXHJcbiAgICB2YXIgbWVhc3VyZXMgPSBhcGkuZ2V0RW50cmllc0J5VHlwZSgnbWVhc3VyZScpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBtZWFzdXJlc18xID0gbWVhc3VyZXM7IF9pIDwgbWVhc3VyZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgbWVhc3VyZSA9IG1lYXN1cmVzXzFbX2ldO1xyXG4gICAgICAgIGNyZWF0ZVVzZXJUaW1pbmdUcmFjZShtZWFzdXJlKTtcclxuICAgIH1cclxuICAgIC8vIFNldHVwIGFuIG9ic2VydmVyIHRvIGNhcHR1cmUgdGhlIG1lYXN1cmVzIGZyb20gdGhpcyBwb2ludCBvbi5cclxuICAgIGFwaS5zZXR1cE9ic2VydmVyKCdtZWFzdXJlJywgY3JlYXRlVXNlclRpbWluZ1RyYWNlKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVVc2VyVGltaW5nVHJhY2UobWVhc3VyZSkge1xyXG4gICAgdmFyIG1lYXN1cmVOYW1lID0gbWVhc3VyZS5uYW1lO1xyXG4gICAgLy8gRG8gbm90IGNyZWF0ZSBhIHRyYWNlLCBpZiB0aGUgdXNlciB0aW1pbmcgbWFya3MgYW5kIG1lYXN1cmVzIGFyZSBjcmVhdGVkIGJ5IHRoZSBzZGsgaXRzZWxmLlxyXG4gICAgaWYgKG1lYXN1cmVOYW1lLnN1YnN0cmluZygwLCBUUkFDRV9NRUFTVVJFX1BSRUZJWC5sZW5ndGgpID09PVxyXG4gICAgICAgIFRSQUNFX01FQVNVUkVfUFJFRklYKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgVHJhY2UuY3JlYXRlVXNlclRpbWluZ1RyYWNlKG1lYXN1cmVOYW1lKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgUGVyZm9ybWFuY2VDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGVyZm9ybWFuY2VDb250cm9sbGVyKGFwcCkge1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIGlmIChBcGkuZ2V0SW5zdGFuY2UoKS5yZXF1aXJlZEFwaXNBdmFpbGFibGUoKSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpc0F2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBUcmFuc3BvcnRTZXJ2aWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0SW5pdGlhbGl6YXRpb25Qcm9taXNlKCkudGhlbihzZXR1cE9vYlJlc291cmNlcywgc2V0dXBPb2JSZXNvdXJjZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZUxvZ2dlci5pbmZvKFwiRW52aXJvbm1lbnQgZG9lc24ndCBzdXBwb3J0IEluZGV4ZWREQjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBlcmZvcm1hbmNlQ29udHJvbGxlci5wcm90b3R5cGUudHJhY2UgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJhY2UobmFtZSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBlcmZvcm1hbmNlQ29udHJvbGxlci5wcm90b3R5cGUsIFwiaW5zdHJ1bWVudGF0aW9uRW5hYmxlZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5pbnN0cnVtZW50YXRpb25FbmFibGVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmluc3RydW1lbnRhdGlvbkVuYWJsZWQgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBlcmZvcm1hbmNlQ29udHJvbGxlci5wcm90b3R5cGUsIFwiZGF0YUNvbGxlY3Rpb25FbmFibGVkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmRhdGFDb2xsZWN0aW9uRW5hYmxlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5kYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFBlcmZvcm1hbmNlQ29udHJvbGxlcjtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIERFRkFVTFRfRU5UUllfTkFNRSA9ICdbREVGQVVMVF0nO1xyXG5mdW5jdGlvbiByZWdpc3RlclBlcmZvcm1hbmNlKGluc3RhbmNlKSB7XHJcbiAgICB2YXIgZmFjdG9yeU1ldGhvZCA9IGZ1bmN0aW9uIChhcHAsIGluc3RhbGxhdGlvbnMpIHtcclxuICAgICAgICBpZiAoYXBwLm5hbWUgIT09IERFRkFVTFRfRU5UUllfTkFNRSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIkZCIG5vdCBkZWZhdWx0XCIgLyogRkJfTk9UX0RFRkFVTFQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJubyB3aW5kb3dcIiAvKiBOT19XSU5ET1cgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXR1cEFwaSh3aW5kb3cpO1xyXG4gICAgICAgIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmZpcmViYXNlQXBwSW5zdGFuY2UgPSBhcHA7XHJcbiAgICAgICAgU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCkuaW5zdGFsbGF0aW9uc1NlcnZpY2UgPSBpbnN0YWxsYXRpb25zO1xyXG4gICAgICAgIHJldHVybiBuZXcgUGVyZm9ybWFuY2VDb250cm9sbGVyKGFwcCk7XHJcbiAgICB9O1xyXG4gICAgLy8gUmVnaXN0ZXIgcGVyZm9ybWFuY2Ugd2l0aCBmaXJlYmFzZS1hcHAuXHJcbiAgICBpbnN0YW5jZS5JTlRFUk5BTC5yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KCdwZXJmb3JtYW5jZScsIGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgICAgICAvKiBEZXBlbmRlbmNpZXMgKi9cclxuICAgICAgICAvLyBnZXRJbW1lZGlhdGUgZm9yIEZpcmViYXNlQXBwIHdpbGwgYWx3YXlzIHN1Y2NlZWRcclxuICAgICAgICB2YXIgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcclxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNhbGwgd2lsbCBhbHdheXMgc3VjY2VlZCBiZWNhdXNlIHBlcmYgaGFzIGBpbXBvcnQgJ0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zJ2BcclxuICAgICAgICB2YXIgaW5zdGFsbGF0aW9ucyA9IGNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZ2V0UHJvdmlkZXIoJ2luc3RhbGxhdGlvbnMnKVxyXG4gICAgICAgICAgICAuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhY3RvcnlNZXRob2QoYXBwLCBpbnN0YWxsYXRpb25zKTtcclxuICAgIH0sIFwiUFVCTElDXCIgLyogUFVCTElDICovKSk7XHJcbiAgICBpbnN0YW5jZS5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbik7XHJcbn1cclxucmVnaXN0ZXJQZXJmb3JtYW5jZShmaXJlYmFzZSk7XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUGVyZm9ybWFuY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCAnQGZpcmViYXNlL3BlcmZvcm1hbmNlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5pZGIgPSB7fSkpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gdG9BcnJheShhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0Q2FsbChvYmosIG1ldGhvZCwgYXJncykge1xuICAgIHZhciByZXF1ZXN0O1xuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXF1ZXN0ID0gb2JqW21ldGhvZF0uYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuXG4gICAgcC5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICByZXR1cm4gcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb21pc2lmeUN1cnNvclJlcXVlc3RDYWxsKG9iaiwgbWV0aG9kLCBhcmdzKSB7XG4gICAgdmFyIHAgPSBwcm9taXNpZnlSZXF1ZXN0Q2FsbChvYmosIG1ldGhvZCwgYXJncyk7XG4gICAgcmV0dXJuIHAudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgcmV0dXJuIG5ldyBDdXJzb3IodmFsdWUsIHAucmVxdWVzdCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eVByb3BlcnRpZXMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgcHJvcGVydGllcykge1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJveHlDbGFzcy5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1t0YXJnZXRQcm9wXVtwcm9wXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICB0aGlzW3RhcmdldFByb3BdW3Byb3BdID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5UmVxdWVzdE1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdENhbGwodGhpc1t0YXJnZXRQcm9wXSwgcHJvcCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eU1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpc1t0YXJnZXRQcm9wXVtwcm9wXS5hcHBseSh0aGlzW3RhcmdldFByb3BdLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5Q3Vyc29yUmVxdWVzdE1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5Q3Vyc29yUmVxdWVzdENhbGwodGhpc1t0YXJnZXRQcm9wXSwgcHJvcCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBJbmRleChpbmRleCkge1xuICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gIH1cblxuICBwcm94eVByb3BlcnRpZXMoSW5kZXgsICdfaW5kZXgnLCBbXG4gICAgJ25hbWUnLFxuICAgICdrZXlQYXRoJyxcbiAgICAnbXVsdGlFbnRyeScsXG4gICAgJ3VuaXF1ZSdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhJbmRleCwgJ19pbmRleCcsIElEQkluZGV4LCBbXG4gICAgJ2dldCcsXG4gICAgJ2dldEtleScsXG4gICAgJ2dldEFsbCcsXG4gICAgJ2dldEFsbEtleXMnLFxuICAgICdjb3VudCdcbiAgXSk7XG5cbiAgcHJveHlDdXJzb3JSZXF1ZXN0TWV0aG9kcyhJbmRleCwgJ19pbmRleCcsIElEQkluZGV4LCBbXG4gICAgJ29wZW5DdXJzb3InLFxuICAgICdvcGVuS2V5Q3Vyc29yJ1xuICBdKTtcblxuICBmdW5jdGlvbiBDdXJzb3IoY3Vyc29yLCByZXF1ZXN0KSB7XG4gICAgdGhpcy5fY3Vyc29yID0gY3Vyc29yO1xuICAgIHRoaXMuX3JlcXVlc3QgPSByZXF1ZXN0O1xuICB9XG5cbiAgcHJveHlQcm9wZXJ0aWVzKEN1cnNvciwgJ19jdXJzb3InLCBbXG4gICAgJ2RpcmVjdGlvbicsXG4gICAgJ2tleScsXG4gICAgJ3ByaW1hcnlLZXknLFxuICAgICd2YWx1ZSdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhDdXJzb3IsICdfY3Vyc29yJywgSURCQ3Vyc29yLCBbXG4gICAgJ3VwZGF0ZScsXG4gICAgJ2RlbGV0ZSdcbiAgXSk7XG5cbiAgLy8gcHJveHkgJ25leHQnIG1ldGhvZHNcbiAgWydhZHZhbmNlJywgJ2NvbnRpbnVlJywgJ2NvbnRpbnVlUHJpbWFyeUtleSddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kTmFtZSkge1xuICAgIGlmICghKG1ldGhvZE5hbWUgaW4gSURCQ3Vyc29yLnByb3RvdHlwZSkpIHJldHVybjtcbiAgICBDdXJzb3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3Vyc29yID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnNvci5fY3Vyc29yW21ldGhvZE5hbWVdLmFwcGx5KGN1cnNvci5fY3Vyc29yLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QoY3Vyc29yLl9yZXF1ZXN0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIHJldHVybiBuZXcgQ3Vyc29yKHZhbHVlLCBjdXJzb3IuX3JlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIE9iamVjdFN0b3JlKHN0b3JlKSB7XG4gICAgdGhpcy5fc3RvcmUgPSBzdG9yZTtcbiAgfVxuXG4gIE9iamVjdFN0b3JlLnByb3RvdHlwZS5jcmVhdGVJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgSW5kZXgodGhpcy5fc3RvcmUuY3JlYXRlSW5kZXguYXBwbHkodGhpcy5fc3RvcmUsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIE9iamVjdFN0b3JlLnByb3RvdHlwZS5pbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgSW5kZXgodGhpcy5fc3RvcmUuaW5kZXguYXBwbHkodGhpcy5fc3RvcmUsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIFtcbiAgICAnbmFtZScsXG4gICAgJ2tleVBhdGgnLFxuICAgICdpbmRleE5hbWVzJyxcbiAgICAnYXV0b0luY3JlbWVudCdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ3B1dCcsXG4gICAgJ2FkZCcsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2NsZWFyJyxcbiAgICAnZ2V0JyxcbiAgICAnZ2V0QWxsJyxcbiAgICAnZ2V0S2V5JyxcbiAgICAnZ2V0QWxsS2V5cycsXG4gICAgJ2NvdW50J1xuICBdKTtcblxuICBwcm94eUN1cnNvclJlcXVlc3RNZXRob2RzKE9iamVjdFN0b3JlLCAnX3N0b3JlJywgSURCT2JqZWN0U3RvcmUsIFtcbiAgICAnb3BlbkN1cnNvcicsXG4gICAgJ29wZW5LZXlDdXJzb3InXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ2RlbGV0ZUluZGV4J1xuICBdKTtcblxuICBmdW5jdGlvbiBUcmFuc2FjdGlvbihpZGJUcmFuc2FjdGlvbikge1xuICAgIHRoaXMuX3R4ID0gaWRiVHJhbnNhY3Rpb247XG4gICAgdGhpcy5jb21wbGV0ZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWRiVHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgaWRiVHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QoaWRiVHJhbnNhY3Rpb24uZXJyb3IpO1xuICAgICAgfTtcbiAgICAgIGlkYlRyYW5zYWN0aW9uLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KGlkYlRyYW5zYWN0aW9uLmVycm9yKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBUcmFuc2FjdGlvbi5wcm90b3R5cGUub2JqZWN0U3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE9iamVjdFN0b3JlKHRoaXMuX3R4Lm9iamVjdFN0b3JlLmFwcGx5KHRoaXMuX3R4LCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBwcm94eVByb3BlcnRpZXMoVHJhbnNhY3Rpb24sICdfdHgnLCBbXG4gICAgJ29iamVjdFN0b3JlTmFtZXMnLFxuICAgICdtb2RlJ1xuICBdKTtcblxuICBwcm94eU1ldGhvZHMoVHJhbnNhY3Rpb24sICdfdHgnLCBJREJUcmFuc2FjdGlvbiwgW1xuICAgICdhYm9ydCdcbiAgXSk7XG5cbiAgZnVuY3Rpb24gVXBncmFkZURCKGRiLCBvbGRWZXJzaW9uLCB0cmFuc2FjdGlvbikge1xuICAgIHRoaXMuX2RiID0gZGI7XG4gICAgdGhpcy5vbGRWZXJzaW9uID0gb2xkVmVyc2lvbjtcbiAgICB0aGlzLnRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgfVxuXG4gIFVwZ3JhZGVEQi5wcm90b3R5cGUuY3JlYXRlT2JqZWN0U3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE9iamVjdFN0b3JlKHRoaXMuX2RiLmNyZWF0ZU9iamVjdFN0b3JlLmFwcGx5KHRoaXMuX2RiLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBwcm94eVByb3BlcnRpZXMoVXBncmFkZURCLCAnX2RiJywgW1xuICAgICduYW1lJyxcbiAgICAndmVyc2lvbicsXG4gICAgJ29iamVjdFN0b3JlTmFtZXMnXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhVcGdyYWRlREIsICdfZGInLCBJREJEYXRhYmFzZSwgW1xuICAgICdkZWxldGVPYmplY3RTdG9yZScsXG4gICAgJ2Nsb3NlJ1xuICBdKTtcblxuICBmdW5jdGlvbiBEQihkYikge1xuICAgIHRoaXMuX2RiID0gZGI7XG4gIH1cblxuICBEQi5wcm90b3R5cGUudHJhbnNhY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zYWN0aW9uKHRoaXMuX2RiLnRyYW5zYWN0aW9uLmFwcGx5KHRoaXMuX2RiLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBwcm94eVByb3BlcnRpZXMoREIsICdfZGInLCBbXG4gICAgJ25hbWUnLFxuICAgICd2ZXJzaW9uJyxcbiAgICAnb2JqZWN0U3RvcmVOYW1lcydcbiAgXSk7XG5cbiAgcHJveHlNZXRob2RzKERCLCAnX2RiJywgSURCRGF0YWJhc2UsIFtcbiAgICAnY2xvc2UnXG4gIF0pO1xuXG4gIC8vIEFkZCBjdXJzb3IgaXRlcmF0b3JzXG4gIC8vIFRPRE86IHJlbW92ZSB0aGlzIG9uY2UgYnJvd3NlcnMgZG8gdGhlIHJpZ2h0IHRoaW5nIHdpdGggcHJvbWlzZXNcbiAgWydvcGVuQ3Vyc29yJywgJ29wZW5LZXlDdXJzb3InXS5mb3JFYWNoKGZ1bmN0aW9uKGZ1bmNOYW1lKSB7XG4gICAgW09iamVjdFN0b3JlLCBJbmRleF0uZm9yRWFjaChmdW5jdGlvbihDb25zdHJ1Y3Rvcikge1xuICAgICAgLy8gRG9uJ3QgY3JlYXRlIGl0ZXJhdGVLZXlDdXJzb3IgaWYgb3BlbktleUN1cnNvciBkb2Vzbid0IGV4aXN0LlxuICAgICAgaWYgKCEoZnVuY05hbWUgaW4gQ29uc3RydWN0b3IucHJvdG90eXBlKSkgcmV0dXJuO1xuXG4gICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGVbZnVuY05hbWUucmVwbGFjZSgnb3BlbicsICdpdGVyYXRlJyldID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBuYXRpdmVPYmplY3QgPSB0aGlzLl9zdG9yZSB8fCB0aGlzLl9pbmRleDtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuYXRpdmVPYmplY3RbZnVuY05hbWVdLmFwcGx5KG5hdGl2ZU9iamVjdCwgYXJncy5zbGljZSgwLCAtMSkpO1xuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHBvbHlmaWxsIGdldEFsbFxuICBbSW5kZXgsIE9iamVjdFN0b3JlXS5mb3JFYWNoKGZ1bmN0aW9uKENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRBbGwpIHJldHVybjtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24ocXVlcnksIGNvdW50KSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgIGluc3RhbmNlLml0ZXJhdGVDdXJzb3IocXVlcnksIGZ1bmN0aW9uKGN1cnNvcikge1xuICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXMucHVzaChjdXJzb3IudmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGNvdW50ICE9PSB1bmRlZmluZWQgJiYgaXRlbXMubGVuZ3RoID09IGNvdW50KSB7XG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb3BlbkRiKG5hbWUsIHZlcnNpb24sIHVwZ3JhZGVDYWxsYmFjaykge1xuICAgIHZhciBwID0gcHJvbWlzaWZ5UmVxdWVzdENhbGwoaW5kZXhlZERCLCAnb3BlbicsIFtuYW1lLCB2ZXJzaW9uXSk7XG4gICAgdmFyIHJlcXVlc3QgPSBwLnJlcXVlc3Q7XG5cbiAgICBpZiAocmVxdWVzdCkge1xuICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAodXBncmFkZUNhbGxiYWNrKSB7XG4gICAgICAgICAgdXBncmFkZUNhbGxiYWNrKG5ldyBVcGdyYWRlREIocmVxdWVzdC5yZXN1bHQsIGV2ZW50Lm9sZFZlcnNpb24sIHJlcXVlc3QudHJhbnNhY3Rpb24pKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcC50aGVuKGZ1bmN0aW9uKGRiKSB7XG4gICAgICByZXR1cm4gbmV3IERCKGRiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZURiKG5hbWUpIHtcbiAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdENhbGwoaW5kZXhlZERCLCAnZGVsZXRlRGF0YWJhc2UnLCBbbmFtZV0pO1xuICB9XG5cbiAgZXhwb3J0cy5vcGVuRGIgPSBvcGVuRGI7XG4gIGV4cG9ydHMuZGVsZXRlRGIgPSBkZWxldGVEYjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9