(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["storage"],{

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: registerStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStorage", function() { return registerStorage; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.esm.js");





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
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain name for firebase storage.
 */
var DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */
var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */
var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */
var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;

/**
 * An error returned by the Firebase Storage SDK.
 * @public
 */
var FirebaseStorageError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FirebaseStorageError, _super);
    /**
     * @param code - A StorageErrorCode string to be prefixed with 'storage/' and
     *  added to the end of the message.
     * @param message  - Error message.
     */
    function FirebaseStorageError(code, message) {
        var _this = _super.call(this, prependCode(code), "Firebase Storage: " + message + " (" + prependCode(code) + ")") || this;
        /**
         * Stores custom error data unque to FirebaseStorageError.
         */
        _this.customData = { serverResponse: null };
        // Without this, `instanceof FirebaseStorageError`, in tests for example,
        // returns false.
        Object.setPrototypeOf(_this, FirebaseStorageError.prototype);
        return _this;
    }
    /**
     * Compares a StorageErrorCode against this error's code, filtering out the prefix.
     */
    FirebaseStorageError.prototype._codeEquals = function (code) {
        return prependCode(code) === this.code;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        /**
         * Error message including serverResponse if available.
         */
        get: function () {
            if (this.customData.serverResponse) {
                return this.message + "\n" + this.customData.serverResponse;
            }
            else {
                return this.message;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        /**
         * Optional response message that was added by the server.
         */
        get: function () {
            return this.customData.serverResponse;
        },
        set: function (serverResponse) {
            this.customData.serverResponse = serverResponse;
        },
        enumerable: false,
        configurable: true
    });
    return FirebaseStorageError;
}(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["FirebaseError"]));
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new FirebaseStorageError("unknown" /* UNKNOWN */, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError("object-not-found" /* OBJECT_NOT_FOUND */, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError("quota-exceeded" /* QUOTA_EXCEEDED */, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new FirebaseStorageError("unauthenticated" /* UNAUTHENTICATED */, message);
}
function unauthorized(path) {
    return new FirebaseStorageError("unauthorized" /* UNAUTHORIZED */, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError("retry-limit-exceeded" /* RETRY_LIMIT_EXCEEDED */, 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new FirebaseStorageError("canceled" /* CANCELED */, 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new FirebaseStorageError("invalid-url" /* INVALID_URL */, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError("invalid-default-bucket" /* INVALID_DEFAULT_BUCKET */, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new FirebaseStorageError("no-default-bucket" /* NO_DEFAULT_BUCKET */, 'No default bucket ' +
        "found. Did you set the '" +
        CONFIG_STORAGE_BUCKET_KEY +
        "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new FirebaseStorageError("cannot-slice-blob" /* CANNOT_SLICE_BLOB */, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError("server-file-wrong-size" /* SERVER_FILE_WRONG_SIZE */, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError("no-download-url" /* NO_DOWNLOAD_URL */, 'The given file does not have any download URLs.');
}
function invalidArgument(message) {
    return new FirebaseStorageError("invalid-argument" /* INVALID_ARGUMENT */, message);
}
function appDeleted() {
    return new FirebaseStorageError("app-deleted" /* APP_DELETED */, 'The Firebase app was deleted.');
}
/**
 * @param name - The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError("invalid-root-operation" /* INVALID_ROOT_OPERATION */, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError("invalid-format" /* INVALID_FORMAT */, "String does not match format '" + format + "': " + message);
}
/**
 * @param message - A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError("internal-error" /* INTERNAL_ERROR */, 'Internal error: ' + message);
}

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
 * An enumeration of the possible string formats for upload.
 * @public
 */
var StringFormat = {
    /**
     * Indicates the string should be interpreted "raw", that is, as normal text.
     * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
     * sequence.
     * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
     * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
     */
    RAW: 'raw',
    /**
     * Indicates the string should be interpreted as base64-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */
    BASE64: 'base64',
    /**
     * Indicates the string should be interpreted as base64url-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */
    BASE64URL: 'base64url',
    /**
     * Indicates the string is a data URL, such as one obtained from
     * canvas.toDataURL().
     * Example: the string 'data:application/octet-stream;base64,aaaa'
     * becomes the byte sequence
     * 69 a6 9a
     * (the content-type "application/octet-stream" is also applied, but can
     * be overridden in the metadata object).
     */
    DATA_URL: 'data_url'
};
var StringData = /** @class */ (function () {
    function StringData(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
    }
    return StringData;
}());
function dataFromString(format, stringData) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
        // do nothing
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    var b = [];
    for (var i = 0; i < value.length; i++) {
        var c = value.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) === 55296) {
                    // The start of a surrogate pair.
                    var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = value.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) === 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    var decoded;
    try {
        decoded = decodeURIComponent(value);
    }
    catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch (format) {
        case StringFormat.BASE64: {
            var hasMinus = value.indexOf('-') !== -1;
            var hasUnder = value.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            var hasPlus = value.indexOf('+') !== -1;
            var hasSlash = value.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
        // do nothing
    }
    var bytes;
    try {
        bytes = atob(value);
    }
    catch (e) {
        throw invalidFormat(format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
var DataURLParts = /** @class */ (function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}());
function dataURLBytes_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

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
 * An event that is triggered on a task.
 */
var TaskEvent = {
    /**
     * For this event,
     * <ul>
     *   <li>The `next` function is triggered on progress updates and when the
     *       task is paused/resumed with an `UploadTaskSnapshot` as the first
     *       argument.</li>
     *   <li>The `error` function is triggered if the upload is canceled or fails
     *       for another reason.</li>
     *   <li>The `complete` function is triggered if the upload completes
     *       successfully.</li>
     * </ul>
     */
    STATE_CHANGED: 'state_changed'
};
/**
 * Represents the current state of a running upload.
 */
var TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case "running" /* RUNNING */:
        case "pausing" /* PAUSING */:
        case "canceling" /* CANCELING */:
            return TaskState.RUNNING;
        case "paused" /* PAUSED */:
            return TaskState.PAUSED;
        case "success" /* SUCCESS */:
            return TaskState.SUCCESS;
        case "canceled" /* CANCELED */:
            return TaskState.CANCELED;
        case "error" /* ERROR */:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

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
 * Error codes for requests made by the the XhrIo wrapper.
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

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
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = /** @class */ (function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(function (resolve) {
            _this.xhr_.addEventListener('abort', function () {
                _this.errorCode_ = ErrorCode.ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function () {
                _this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function () {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, body, headers) {
        if (this.sent_) {
            throw internalError('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (headers !== undefined) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    this.xhr_.setRequestHeader(key, headers[key].toString());
                }
            }
        }
        if (body !== undefined) {
            this.xhr_.send(body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw internalError('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (this.xhr_.upload != null) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (this.xhr_.upload != null) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
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
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = /** @class */ (function () {
    function XhrIoPool() {
    }
    XhrIoPool.prototype.createXhrIo = function () {
        return new NetworkXhrIo();
    };
    return XhrIoPool;
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
function isJustDef(p) {
    return p !== void 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(p) {
    return typeof p === 'function';
}
function isNonArrayObject(p) {
    return typeof p === 'object' && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}
function validateNumber(argument, minValue, maxValue, value) {
    if (value < minValue) {
        throw invalidArgument("Invalid value for '" + argument + "'. Expected " + minValue + " or greater.");
    }
    if (value > maxValue) {
        throw invalidArgument("Invalid value for '" + argument + "'. Expected " + maxValue + " or less.");
    }
}

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
function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < args.length; i++) {
            bb.append(args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (isNativeBlobDefined()) {
            return new Blob(args);
        }
        else {
            throw new FirebaseStorageError("unsupported-environment" /* UNSUPPORTED_ENVIRONMENT */, "This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

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
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
var FbsBlob = /** @class */ (function () {
    function FbsBlob(data, elideCopy) {
        var size = 0;
        var blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isNativeBlobDefined()) {
            var blobby = args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(getBlob.apply(null, blobby));
        }
        else {
            var uint8Arrays = args.map(function (val) {
                if (isString(val)) {
                    return dataFromString(StringFormat.RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
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
 * Firebase Storage location data.
 */
var Location = /** @class */ (function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "isRoot", {
        get: function () {
            return this.path.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw invalidDefaultBucket(bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-_]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
        var firebaseStoragePath = '(/([^?#]*).*)?$';
        var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
        var firebaseStorageIndices = { bucket: 1, path: 3 };
        var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
        var cloudStoragePath = '([^?#]*)';
        var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
        var cloudStorageIndices = { bucket: 1, path: 2 };
        var groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw invalidUrl(url);
        }
        return location;
    };
    return Location;
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
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) {
        return obj;
    }
    else {
        return null;
    }
}

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
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length === 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath
        .split('/')
        .filter(function (component) { return component.length > 0; })
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

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
function makeUrl(urlPart) {
    return "https://" + DEFAULT_HOST + "/v0" + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
        }
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

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
function noXform_(metadata, value) {
    return value;
}
var Mapping = /** @class */ (function () {
    function Mapping(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
    return Mapping;
}());
var mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) {
        return fullPath;
    }
    else {
        return lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(_metadata, size) {
        if (size !== undefined) {
            return Number(size);
        }
        else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, service) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new Location(bucket, path);
        return service._makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(service, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
}
function fromResourceString(service, resourceString, mappings) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
    }
    var tokens = obj['downloadTokens'];
    if (tokens.length === 0) {
        return null;
    }
    var encode = encodeURIComponent;
    var tokensList = tokens.split(',');
    var urls = tokensList.map(function (token) {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        var base = makeUrl(urlPart);
        var queryString = makeQueryString({
            alt: 'media',
            token: token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
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
var PREFIXES_KEY = 'prefixes';
var ITEMS_KEY = 'items';
function fromBackendResponse(service, bucket, resource) {
    var listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
    };
    if (resource[PREFIXES_KEY]) {
        for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
            var path = _a[_i];
            var pathWithoutTrailingSlash = path.replace(/\/$/, '');
            var reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
        }
    }
    if (resource[ITEMS_KEY]) {
        for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
            var item = _c[_b];
            var reference = service._makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
        }
    }
    return listResult;
}
function fromResponseString(service, bucket, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromBackendResponse(service, bucket, resource);
}

var RequestInfo = /** @class */ (function () {
    function RequestInfo(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
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
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw unknown();
    }
}
function metadataHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(service, bucket) {
    function handler(xhr, text) {
        var listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = unauthenticated();
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = quotaExceeded(location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = unauthorized(location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
        }
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function getMetadata(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list(service, location, delimiter, pageToken, maxResults) {
    var urlParams = {};
    if (location.isRoot) {
        urlParams['prefix'] = '';
    }
    else {
        urlParams['prefix'] = location.path + '/';
    }
    if (delimiter && delimiter.length > 0) {
        urlParams['delimiter'] = delimiter;
    }
    if (pageToken) {
        urlParams['pageToken'] = pageToken;
    }
    if (maxResults) {
        urlParams['maxResults'] = maxResults;
    }
    var urlPart = location.bucketOnlyServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(service, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'PATCH';
    var body = toResourceString(metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = service.maxOperationRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(service, location) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'DELETE';
    var timeout = service.maxOperationRetryTime;
    function handler(_xhr, _text) { }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, metadata) {
    var metadataClone = Object.assign({}, metadata);
    metadataClone['fullPath'] = location.path;
    metadataClone['size'] = blob.size();
    if (!metadataClone['contentType']) {
        metadataClone['contentType'] = determineContentType_(null, blob);
    }
    return metadataClone;
}
/**
 * Prepare RequestInfo for uploads as Content-Type: multipart.
 */
function multipartUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata_ = metadataForUpload_(location, blob, metadata);
    var metadataString = toResourceString(metadata_, mappings);
    var preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata_['contentType'] +
        '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw cannotSliceBlob();
    }
    var urlParams = { name: metadata_['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 */
var ResumableUploadStatus = /** @class */ (function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}());
function checkResumeHeader_(xhr, allowed) {
    var status = null;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    var allowedStatus = allowed || ['active'];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadataForUpload = metadataForUpload_(location, blob, metadata);
    var urlParams = { name: metadataForUpload['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = toResourceString(metadataForUpload, mappings);
    var timeout = service.maxUploadRetryTime;
    function handler(xhr) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(service, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString = null;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) {
            // null or empty string
            handlerCheck(false);
        }
        var size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    }
    else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) {
        throw serverFileWrongSize();
    }
    var bytesLeft = status_.total - status_.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status_.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status_.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status_.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(service, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = service.maxUploadRetryTime;
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

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
var Observer = /** @class */ (function () {
    function Observer(nextOrObserver, error, complete) {
        var asFunctions = isFunction(nextOrObserver) || error != null || complete != null;
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error;
            this.complete = complete;
        }
        else {
            var observer = nextOrObserver;
            this.next = observer.next;
            this.error = observer.error;
            this.complete = observer.complete;
        }
    }
    return Observer;
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
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(function () { return f.apply(void 0, argsToForward); });
    };
}

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
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @public
 */
var UploadTask = /** @class */ (function () {
    /**
     * @param ref - The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob - The blob to upload.
     */
    function UploadTask(ref, blob, metadata) {
        var _this = this;
        if (metadata === void 0) { metadata = null; }
        /**
         * Number of bytes transferred so far.
         */
        this._transferred = 0;
        this._needToFetchStatus = false;
        this._needToFetchMetadata = false;
        this._observers = [];
        this._error = undefined;
        this._uploadUrl = undefined;
        this._request = undefined;
        this._chunkMultiplier = 1;
        this._resolve = undefined;
        this._reject = undefined;
        this._ref = ref;
        this._blob = blob;
        this._metadata = metadata;
        this._mappings = getMappings();
        this._resumable = this._shouldDoResumable(this._blob);
        this._state = "running" /* RUNNING */;
        this._errorHandler = function (error) {
            _this._request = undefined;
            _this._chunkMultiplier = 1;
            if (error._codeEquals("canceled" /* CANCELED */)) {
                _this._needToFetchStatus = true;
                _this.completeTransitions_();
            }
            else {
                _this._error = error;
                _this._transition("error" /* ERROR */);
            }
        };
        this._metadataErrorHandler = function (error) {
            _this._request = undefined;
            if (error._codeEquals("canceled" /* CANCELED */)) {
                _this.completeTransitions_();
            }
            else {
                _this._error = error;
                _this._transition("error" /* ERROR */);
            }
        };
        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
            _this._start();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this._promise.then(null, function () { });
    }
    UploadTask.prototype._makeProgressCallback = function () {
        var _this = this;
        var sizeBefore = this._transferred;
        return function (loaded) { return _this._updateProgress(sizeBefore + loaded); };
    };
    UploadTask.prototype._shouldDoResumable = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype._start = function () {
        if (this._state !== "running" /* RUNNING */) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this._request !== undefined) {
            return;
        }
        if (this._resumable) {
            if (this._uploadUrl === undefined) {
                this._createResumable();
            }
            else {
                if (this._needToFetchStatus) {
                    this._fetchStatus();
                }
                else {
                    if (this._needToFetchMetadata) {
                        // Happens if we miss the metadata on upload completion.
                        this._fetchMetadata();
                    }
                    else {
                        this._continueUpload();
                    }
                }
            }
        }
        else {
            this._oneShotUpload();
        }
    };
    UploadTask.prototype._resolveToken = function (callback) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._ref.storage._getAuthToken().then(function (authToken) {
            switch (_this._state) {
                case "running" /* RUNNING */:
                    callback(authToken);
                    break;
                case "canceling" /* CANCELING */:
                    _this._transition("canceled" /* CANCELED */);
                    break;
                case "pausing" /* PAUSING */:
                    _this._transition("paused" /* PAUSED */);
                    break;
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype._createResumable = function () {
        var _this = this;
        this._resolveToken(function (authToken) {
            var requestInfo = createResumableUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);
            var createRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
            _this._request = createRequest;
            createRequest.getPromise().then(function (url) {
                _this._request = undefined;
                _this._uploadUrl = url;
                _this._needToFetchStatus = false;
                _this.completeTransitions_();
            }, _this._errorHandler);
        });
    };
    UploadTask.prototype._fetchStatus = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this._uploadUrl;
        this._resolveToken(function (authToken) {
            var requestInfo = getResumableUploadStatus(_this._ref.storage, _this._ref._location, url, _this._blob);
            var statusRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
            _this._request = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this._request = undefined;
                _this._updateProgress(status.current);
                _this._needToFetchStatus = false;
                if (status.finalized) {
                    _this._needToFetchMetadata = true;
                }
                _this.completeTransitions_();
            }, _this._errorHandler);
        });
    };
    UploadTask.prototype._continueUpload = function () {
        var _this = this;
        var chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        var status = new ResumableUploadStatus(this._transferred, this._blob.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this._uploadUrl;
        this._resolveToken(function (authToken) {
            var requestInfo;
            try {
                requestInfo = continueResumableUpload(_this._ref._location, _this._ref.storage, url, _this._blob, chunkSize, _this._mappings, status, _this._makeProgressCallback());
            }
            catch (e) {
                _this._error = e;
                _this._transition("error" /* ERROR */);
                return;
            }
            var uploadRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
            _this._request = uploadRequest;
            uploadRequest.getPromise().then(function (newStatus) {
                _this._increaseMultiplier();
                _this._request = undefined;
                _this._updateProgress(newStatus.current);
                if (newStatus.finalized) {
                    _this._metadata = newStatus.metadata;
                    _this._transition("success" /* SUCCESS */);
                }
                else {
                    _this.completeTransitions_();
                }
            }, _this._errorHandler);
        });
    };
    UploadTask.prototype._increaseMultiplier = function () {
        var currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this._chunkMultiplier *= 2;
        }
    };
    UploadTask.prototype._fetchMetadata = function () {
        var _this = this;
        this._resolveToken(function (authToken) {
            var requestInfo = getMetadata(_this._ref.storage, _this._ref._location, _this._mappings);
            var metadataRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
            _this._request = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this._request = undefined;
                _this._metadata = metadata;
                _this._transition("success" /* SUCCESS */);
            }, _this._metadataErrorHandler);
        });
    };
    UploadTask.prototype._oneShotUpload = function () {
        var _this = this;
        this._resolveToken(function (authToken) {
            var requestInfo = multipartUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);
            var multipartRequest = _this._ref.storage._makeRequest(requestInfo, authToken);
            _this._request = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this._request = undefined;
                _this._metadata = metadata;
                _this._updateProgress(_this._blob.size());
                _this._transition("success" /* SUCCESS */);
            }, _this._errorHandler);
        });
    };
    UploadTask.prototype._updateProgress = function (transferred) {
        var old = this._transferred;
        this._transferred = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this._transferred !== old) {
            this._notifyObservers();
        }
    };
    UploadTask.prototype._transition = function (state) {
        if (this._state === state) {
            return;
        }
        switch (state) {
            case "canceling" /* CANCELING */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                if (this._request !== undefined) {
                    this._request.cancel();
                }
                break;
            case "pausing" /* PAUSING */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this._state = state;
                if (this._request !== undefined) {
                    this._request.cancel();
                }
                break;
            case "running" /* RUNNING */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this._state === "paused" /* PAUSED */;
                this._state = state;
                if (wasPaused) {
                    this._notifyObservers();
                    this._start();
                }
                break;
            case "paused" /* PAUSED */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                this._notifyObservers();
                break;
            case "canceled" /* CANCELED */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._error = canceled();
                this._state = state;
                this._notifyObservers();
                break;
            case "error" /* ERROR */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
            case "success" /* SUCCESS */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this._state) {
            case "pausing" /* PAUSING */:
                this._transition("paused" /* PAUSED */);
                break;
            case "canceling" /* CANCELING */:
                this._transition("canceled" /* CANCELED */);
                break;
            case "running" /* RUNNING */:
                this._start();
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        /**
         * A snapshot of the current task state.
         */
        get: function () {
            var externalState = taskStateFromInternalTaskState(this._state);
            return {
                bytesTransferred: this._transferred,
                totalBytes: this._blob.size(),
                state: externalState,
                metadata: this._metadata,
                task: this,
                ref: this._ref
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type - The type of event to listen for.
     * @param nextOrObserver -
     *     The `next` function, which gets called for each item in
     *     the event stream, or an observer object with some or all of these three
     *     properties (`next`, `error`, `complete`).
     * @param error - A function that gets called with a `FirebaseStorageError`
     *     if the event stream ends due to an error.
     * @param completed - A function that gets called if the
     *     event stream ends normally.
     * @returns
     *     If only the event argument is passed, returns a function you can use to
     *     add callbacks (see the examples above). If more than just the event
     *     argument is passed, returns a function you can call to unregister the
     *     callbacks.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        var _this = this;
        var observer = new Observer(nextOrObserver, error, completed);
        this._addObserver(observer);
        return function () {
            _this._removeObserver(observer);
        };
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
     * @param onRejected - The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this._promise.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype._addObserver = function (observer) {
        this._observers.push(observer);
        this._notifyObserver(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype._removeObserver = function (observer) {
        var i = this._observers.indexOf(observer);
        if (i !== -1) {
            this._observers.splice(i, 1);
        }
    };
    UploadTask.prototype._notifyObservers = function () {
        var _this = this;
        this._finishPromise();
        var observers = this._observers.slice();
        observers.forEach(function (observer) {
            _this._notifyObserver(observer);
        });
    };
    UploadTask.prototype._finishPromise = function () {
        if (this._resolve !== undefined) {
            var triggered = true;
            switch (taskStateFromInternalTaskState(this._state)) {
                case TaskState.SUCCESS:
                    async(this._resolve.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    var toCall = this._reject;
                    async(toCall.bind(null, this._error))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this._resolve = undefined;
                this._reject = undefined;
            }
        }
    };
    UploadTask.prototype._notifyObserver = function (observer) {
        var externalState = taskStateFromInternalTaskState(this._state);
        switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) {
                    async(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case TaskState.SUCCESS:
                if (observer.complete) {
                    async(observer.complete.bind(observer))();
                }
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) {
                    async(observer.error.bind(observer, this._error))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) {
                    async(observer.error.bind(observer, this._error))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @returns True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        var valid = this._state === "paused" /* PAUSED */ ||
            this._state === "pausing" /* PAUSING */;
        if (valid) {
            this._transition("running" /* RUNNING */);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @returns True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        var valid = this._state === "running" /* RUNNING */;
        if (valid) {
            this._transition("pausing" /* PAUSING */);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @returns True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        var valid = this._state === "running" /* RUNNING */ ||
            this._state === "pausing" /* PAUSING */;
        if (valid) {
            this._transition("canceling" /* CANCELING */);
        }
        return valid;
    };
    return UploadTask;
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
/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @public
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
var Reference = /** @class */ (function () {
    function Reference(_service, location) {
        this._service = _service;
        if (location instanceof Location) {
            this._location = location;
        }
        else {
            this._location = Location.makeFromUrl(location);
        }
    }
    /**
     * Returns the URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        return 'gs://' + this._location.bucket + '/' + this._location.path;
    };
    Reference.prototype._newRef = function (service, location) {
        return new Reference(service, location);
    };
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * A reference to the root of this object's bucket.
         */
        get: function () {
            var location = new Location(this._location.bucket, '');
            return this._newRef(this._service, location);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        /**
         * The name of the bucket containing this reference's object.
         */
        get: function () {
            return this._location.bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        /**
         * The full path of this object.
         */
        get: function () {
            return this._location.path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        /**
         * The short name of this object, which is the last component of the full path.
         * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
         */
        get: function () {
            return lastComponent(this._location.path);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        /**
         * The `StorageService` instance this `StorageReference` is associated with.
         */
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
         * this reference is the root.
         */
        get: function () {
            var newPath = parent(this._location.path);
            if (newPath === null) {
                return null;
            }
            var location = new Location(this._location.bucket, newPath);
            return new Reference(this._service, location);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Utility function to throw an error in methods that do not accept a root reference.
     */
    Reference.prototype._throwIfRoot = function (name) {
        if (this._location.path === '') {
            throw invalidRootOperation(name);
        }
    };
    return Reference;
}());
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns An UploadTask
 */
function uploadBytesResumable(ref, data, metadata) {
    ref._throwIfRoot('uploadBytesResumable');
    return new UploadTask(ref, new FbsBlob(data), metadata);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - StorageReference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */
function listAll(ref) {
    var accumulator = {
        prefixes: [],
        items: []
    };
    return listAllHelper(ref, accumulator).then(function () { return accumulator; });
}
/**
 * Separated from listAll because async functions can't use "arguments".
 * @param ref
 * @param accumulator
 * @param pageToken
 */
function listAllHelper(ref, accumulator, pageToken) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var opt, nextPage;
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
            switch (_c.label) {
                case 0:
                    opt = {
                        // maxResults is 1000 by default.
                        pageToken: pageToken
                    };
                    return [4 /*yield*/, list$1(ref, opt)];
                case 1:
                    nextPage = _c.sent();
                    (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);
                    (_b = accumulator.items).push.apply(_b, nextPage.items);
                    if (!(nextPage.nextPageToken != null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, listAllHelper(ref, accumulator, nextPage.nextPageToken)];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - StorageReference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */
function list$1(ref, options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var authToken, op, requestInfo;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (options != null) {
                        if (typeof options.maxResults === 'number') {
                            validateNumber('options.maxResults', 
                            /* minValue= */ 1, 
                            /* maxValue= */ 1000, options.maxResults);
                        }
                    }
                    return [4 /*yield*/, ref.storage._getAuthToken()];
                case 1:
                    authToken = _a.sent();
                    op = options || {};
                    requestInfo = list(ref.storage, ref._location, 
                    /*delimiter= */ '/', op.pageToken, op.maxResults);
                    return [2 /*return*/, ref.storage._makeRequest(requestInfo, authToken).getPromise()];
            }
        });
    });
}
/**
 * A promise that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - StorageReference to get metadata from.
 */
function getMetadata$1(ref) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var authToken, requestInfo;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ref._throwIfRoot('getMetadata');
                    return [4 /*yield*/, ref.storage._getAuthToken()];
                case 1:
                    authToken = _a.sent();
                    requestInfo = getMetadata(ref.storage, ref._location, getMappings());
                    return [2 /*return*/, ref.storage._makeRequest(requestInfo, authToken).getPromise()];
            }
        });
    });
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - StorageReference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A promise that resolves
 *     with the new metadata for this object.
 *     See `firebaseStorage.Reference.prototype.getMetadata`
 */
function updateMetadata$1(ref, metadata) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var authToken, requestInfo;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ref._throwIfRoot('updateMetadata');
                    return [4 /*yield*/, ref.storage._getAuthToken()];
                case 1:
                    authToken = _a.sent();
                    requestInfo = updateMetadata(ref.storage, ref._location, metadata, getMappings());
                    return [2 /*return*/, ref.storage._makeRequest(requestInfo, authToken).getPromise()];
            }
        });
    });
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A promise that resolves with the download
 *     URL for this object.
 */
function getDownloadURL(ref) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var authToken, requestInfo;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ref._throwIfRoot('getDownloadURL');
                    return [4 /*yield*/, ref.storage._getAuthToken()];
                case 1:
                    authToken = _a.sent();
                    requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
                    return [2 /*return*/, ref.storage
                            ._makeRequest(requestInfo, authToken)
                            .getPromise()
                            .then(function (url) {
                            if (url === null) {
                                throw noDownloadURL();
                            }
                            return url;
                        })];
            }
        });
    });
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - StorageReference for object to delete.
 * @returns A promise that resolves if the deletion succeeds.
 */
function deleteObject$1(ref) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
        var authToken, requestInfo;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ref._throwIfRoot('deleteObject');
                    return [4 /*yield*/, ref.storage._getAuthToken()];
                case 1:
                    authToken = _a.sent();
                    requestInfo = deleteObject(ref.storage, ref._location);
                    return [2 /*return*/, ref.storage._makeRequest(requestInfo, authToken).getPromise()];
            }
        });
    });
}
/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 *
 * @param ref - StorageReference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 */
function _getChild(ref, childPath) {
    var newPath = child(ref._location.path, childPath);
    var location = new Location(ref._location.bucket, newPath);
    return new Reference(ref.storage, location);
}

/**
 * @license
 * Copyright 2020 Google LLC
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
var UploadTaskSnapshotCompat = /** @class */ (function () {
    function UploadTaskSnapshotCompat(_delegate, task, ref) {
        this._delegate = _delegate;
        this.task = task;
        this.ref = ref;
    }
    Object.defineProperty(UploadTaskSnapshotCompat.prototype, "bytesTransferred", {
        get: function () {
            return this._delegate.bytesTransferred;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UploadTaskSnapshotCompat.prototype, "metadata", {
        get: function () {
            return this._delegate.metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UploadTaskSnapshotCompat.prototype, "state", {
        get: function () {
            return this._delegate.state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UploadTaskSnapshotCompat.prototype, "totalBytes", {
        get: function () {
            return this._delegate.totalBytes;
        },
        enumerable: false,
        configurable: true
    });
    return UploadTaskSnapshotCompat;
}());

/**
 * @license
 * Copyright 2020 Google LLC
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
var UploadTaskCompat = /** @class */ (function () {
    function UploadTaskCompat(_delegate, _ref) {
        this._delegate = _delegate;
        this._ref = _ref;
        this.cancel = this._delegate.cancel.bind(this._delegate);
        this.catch = this._delegate.catch.bind(this._delegate);
        this.pause = this._delegate.pause.bind(this._delegate);
        this.resume = this._delegate.resume.bind(this._delegate);
    }
    Object.defineProperty(UploadTaskCompat.prototype, "snapshot", {
        get: function () {
            return new UploadTaskSnapshotCompat(this._delegate.snapshot, this, this._ref);
        },
        enumerable: false,
        configurable: true
    });
    UploadTaskCompat.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        return this._delegate.then(function (snapshot) {
            if (onFulfilled) {
                return onFulfilled(new UploadTaskSnapshotCompat(snapshot, _this, _this._ref));
            }
        }, onRejected);
    };
    UploadTaskCompat.prototype.on = function (type, nextOrObserver, error, completed) {
        var _this = this;
        var wrappedNextOrObserver = undefined;
        if (!!nextOrObserver) {
            if (typeof nextOrObserver === 'function') {
                wrappedNextOrObserver = function (taskSnapshot) {
                    return nextOrObserver(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
                };
            }
            else {
                wrappedNextOrObserver = {
                    next: !!nextOrObserver.next
                        ? function (taskSnapshot) {
                            return nextOrObserver.next(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
                        }
                        : undefined,
                    complete: nextOrObserver.complete || undefined,
                    error: nextOrObserver.error || undefined
                };
            }
        }
        return this._delegate.on(type, wrappedNextOrObserver, error || undefined, completed || undefined);
    };
    return UploadTaskCompat;
}());

/**
 * @license
 * Copyright 2020 Google LLC
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
var ListResultCompat = /** @class */ (function () {
    function ListResultCompat(_delegate, _service) {
        this._delegate = _delegate;
        this._service = _service;
    }
    Object.defineProperty(ListResultCompat.prototype, "prefixes", {
        get: function () {
            var _this = this;
            return this._delegate.prefixes.map(function (ref) { return new ReferenceCompat(ref, _this._service); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListResultCompat.prototype, "items", {
        get: function () {
            var _this = this;
            return this._delegate.items.map(function (ref) { return new ReferenceCompat(ref, _this._service); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListResultCompat.prototype, "nextPageToken", {
        get: function () {
            return this._delegate.nextPageToken || null;
        },
        enumerable: false,
        configurable: true
    });
    return ListResultCompat;
}());

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ReferenceCompat = /** @class */ (function () {
    function ReferenceCompat(_delegate, storage) {
        this._delegate = _delegate;
        this.storage = storage;
    }
    Object.defineProperty(ReferenceCompat.prototype, "name", {
        get: function () {
            return this._delegate.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReferenceCompat.prototype, "bucket", {
        get: function () {
            return this._delegate.bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReferenceCompat.prototype, "fullPath", {
        get: function () {
            return this._delegate.fullPath;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceCompat.prototype.toString = function () {
        return this._delegate.toString();
    };
    /**
     * @returns A reference to the object obtained by
     * appending childPath, removing any duplicate, beginning, or trailing
     * slashes.
     */
    ReferenceCompat.prototype.child = function (childPath) {
        var reference = _getChild(this._delegate, childPath);
        return new ReferenceCompat(reference, this.storage);
    };
    Object.defineProperty(ReferenceCompat.prototype, "root", {
        get: function () {
            return new ReferenceCompat(this._delegate.root, this.storage);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReferenceCompat.prototype, "parent", {
        /**
         * @returns A reference to the parent of the
         * current object, or null if the current object is the root.
         */
        get: function () {
            var reference = this._delegate.parent;
            if (reference == null) {
                return null;
            }
            return new ReferenceCompat(reference, this.storage);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data - The blob to upload.
     * @returns An UploadTask that lets you control and
     * observe the upload.
     */
    ReferenceCompat.prototype.put = function (data, metadata) {
        this._throwIfRoot('put');
        return new UploadTaskCompat(uploadBytesResumable(this._delegate, data, metadata), this);
    };
    /**
     * Uploads a string to this object's location.
     * @param value - The string to upload.
     * @param format - The format of the string to upload.
     * @returns An UploadTask that lets you control and
     * observe the upload.
     */
    ReferenceCompat.prototype.putString = function (value, format, metadata) {
        if (format === void 0) { format = StringFormat.RAW; }
        this._throwIfRoot('putString');
        var data = dataFromString(format, value);
        var metadataClone = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, metadata);
        if (metadataClone['contentType'] == null && data.contentType != null) {
            metadataClone['contentType'] = data.contentType;
        }
        return new UploadTaskCompat(new UploadTask(this._delegate, new FbsBlob(data.data, true), metadataClone), this);
    };
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     *
     * @returns A Promise that resolves with all the items and prefixes under
     *  the current storage reference. `prefixes` contains references to
     *  sub-directories and `items` contains references to objects in this
     *  folder. `nextPageToken` is never returned.
     */
    ReferenceCompat.prototype.listAll = function () {
        var _this = this;
        return listAll(this._delegate).then(function (r) { return new ListResultCompat(r, _this.storage); });
    };
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure. Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     *
     * @param options - See ListOptions for details.
     * @returns A Promise that resolves with the items and prefixes.
     * `prefixes` contains references to sub-folders and `items`
     * contains references to objects in this folder. `nextPageToken`
     * can be used to get the rest of the results.
     */
    ReferenceCompat.prototype.list = function (options) {
        var _this = this;
        return list$1(this._delegate, options).then(function (r) { return new ListResultCompat(r, _this.storage); });
    };
    /**
     * A promise that resolves with the metadata for this object. If this
     * object doesn't exist or metadata cannot be retreived, the promise is
     * rejected.
     */
    ReferenceCompat.prototype.getMetadata = function () {
        return getMetadata$1(this._delegate);
    };
    /**
     * Updates the metadata for this object.
     * @param metadata - The new metadata for the object.
     * Only values that have been explicitly set will be changed. Explicitly
     * setting a value to null will remove the metadata.
     * @returns A promise that resolves
     * with the new metadata for this object.
     * @see firebaseStorage.Reference.prototype.getMetadata
     */
    ReferenceCompat.prototype.updateMetadata = function (metadata) {
        return updateMetadata$1(this._delegate, metadata);
    };
    /**
     * @returns A promise that resolves with the download
     * URL for this object.
     */
    ReferenceCompat.prototype.getDownloadURL = function () {
        return getDownloadURL(this._delegate);
    };
    /**
     * Deletes the object at this location.
     * @returns A promise that resolves if the deletion succeeds.
     */
    ReferenceCompat.prototype.delete = function () {
        this._throwIfRoot('delete');
        return deleteObject$1(this._delegate);
    };
    ReferenceCompat.prototype._throwIfRoot = function (name) {
        if (this._delegate._location.path === '') {
            throw invalidRootOperation(name);
        }
    };
    return ReferenceCompat;
}());

/**
 * A request whose promise always fails.
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (_appDelete) {
    };
    return FailRequest;
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
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    function triggerCallback() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    function handler(success) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

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
var NetworkRequest = /** @class */ (function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        var _this = this;
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            xhr
                .send(self.url_, self.method_, self.body_, self.headers_)
                .then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = self.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough - True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (isJustDef(result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (xhr !== null) {
                    var err = unknown();
                    err.serverResponse = xhr.getResponseText();
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        var err = self.appDelete_ ? appDeleted() : canceled();
                        reject(err);
                    }
                    else {
                        var err = retryLimitExceeded();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            stop(this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}());
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */
var RequestEndStatus = /** @class */ (function () {
    function RequestEndStatus(wasSuccessCode, xhr, canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!canceled;
    }
    return RequestEndStatus;
}());
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers, firebaseVersion) {
    headers['X-Firebase-Storage-Version'] =
        'webjs/' + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : 'AppManager');
}
function addGmpidHeader_(headers, appId) {
    if (appId) {
        headers['X-Firebase-GMPID'] = appId;
    }
}
function makeRequest(requestInfo, appId, authToken, pool, firebaseVersion) {
    var queryPart = makeQueryString(requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers, firebaseVersion);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}

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
function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
}
/**
 * Returns a firebaseStorage.Reference for the given url.
 */
function refFromURL(service, url) {
    return new Reference(service, url);
}
/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */
function refFromPath(ref, path) {
    if (ref instanceof StorageService) {
        var service = ref;
        if (service._bucket == null) {
            throw noDefaultBucket();
        }
        var reference = new Reference(service, service._bucket);
        if (path != null) {
            return refFromPath(reference, path);
        }
        else {
            return reference;
        }
    }
    else {
        // ref is a Reference
        if (path !== undefined) {
            if (path.includes('..')) {
                throw invalidArgument('`path` param cannot contain ".."');
            }
            return _getChild(ref, path);
        }
        else {
            return ref;
        }
    }
}
function ref(serviceOrRef, pathOrUrl) {
    if (pathOrUrl && isUrl(pathOrUrl)) {
        if (serviceOrRef instanceof StorageService) {
            return refFromURL(serviceOrRef, pathOrUrl);
        }
        else {
            throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
        }
    }
    else {
        return refFromPath(serviceOrRef, pathOrUrl);
    }
}
function extractBucket(config) {
    var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
    if (bucketString == null) {
        return null;
    }
    return Location.makeFromBucketSpec(bucketString);
}
/**
 * A service that provides Firebase Storage Reference instances.
 * @public
 * @param opt_url - gs:// url to a custom Storage Bucket
 */
var StorageService = /** @class */ (function () {
    function StorageService(
    /**
     * FirebaseApp associated with this StorageService instance.
     */
    app, _authProvider, _pool, _url, _firebaseVersion) {
        this.app = app;
        this._authProvider = _authProvider;
        this._pool = _pool;
        this._url = _url;
        this._firebaseVersion = _firebaseVersion;
        this._bucket = null;
        this._appId = null;
        this._deleted = false;
        this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this._requests = new Set();
        if (_url != null) {
            this._bucket = Location.makeFromBucketSpec(_url);
        }
        else {
            this._bucket = extractBucket(this.app.options);
        }
    }
    Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
        /**
         * The maximum time to retry uploads in milliseconds.
         */
        get: function () {
            return this._maxUploadRetryTime;
        },
        set: function (time) {
            validateNumber('time', 
            /* minValue=*/ 0, 
            /* maxValue= */ Number.POSITIVE_INFINITY, time);
            this._maxUploadRetryTime = time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
        /**
         * The maximum time to retry operations other than uploads or downloads in
         * milliseconds.
         */
        get: function () {
            return this._maxOperationRetryTime;
        },
        set: function (time) {
            validateNumber('time', 
            /* minValue=*/ 0, 
            /* maxValue= */ Number.POSITIVE_INFINITY, time);
            this._maxOperationRetryTime = time;
        },
        enumerable: false,
        configurable: true
    });
    StorageService.prototype._getAuthToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var auth, tokenData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auth = this._authProvider.getImmediate({ optional: true });
                        if (!auth) return [3 /*break*/, 2];
                        return [4 /*yield*/, auth.getToken()];
                    case 1:
                        tokenData = _a.sent();
                        if (tokenData !== null) {
                            return [2 /*return*/, tokenData.accessToken];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    StorageService.prototype._delete = function () {
        this._deleted = true;
        this._requests.forEach(function (request) { return request.cancel(); });
        this._requests.clear();
        return Promise.resolve();
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     */
    StorageService.prototype._makeStorageReference = function (loc) {
        return new Reference(this, loc);
    };
    /**
     * @param requestInfo - HTTP RequestInfo object
     * @param authToken - Firebase auth token
     */
    StorageService.prototype._makeRequest = function (requestInfo, authToken) {
        var _this = this;
        if (!this._deleted) {
            var request_1 = makeRequest(requestInfo, this._appId, authToken, this._pool, this._firebaseVersion);
            this._requests.add(request_1);
            // Request removes itself from set when complete.
            request_1.getPromise().then(function () { return _this._requests.delete(request_1); }, function () { return _this._requests.delete(request_1); });
            return request_1;
        }
        else {
            return new FailRequest(appDeleted());
        }
    };
    return StorageService;
}());

/**
 * @license
 * Copyright 2020 Google LLC
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
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 */
var StorageServiceCompat = /** @class */ (function () {
    function StorageServiceCompat(app, _delegate) {
        var _this = this;
        this.app = app;
        this._delegate = _delegate;
        this.INTERNAL = {
            /**
             * Called when the associated app is deleted.
             */
            delete: function () {
                return _this._delegate._delete();
            }
        };
    }
    Object.defineProperty(StorageServiceCompat.prototype, "maxOperationRetryTime", {
        get: function () {
            return this._delegate.maxOperationRetryTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StorageServiceCompat.prototype, "maxUploadRetryTime", {
        get: function () {
            return this._delegate.maxUploadRetryTime;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    StorageServiceCompat.prototype.ref = function (path) {
        if (isUrl(path)) {
            throw invalidArgument('ref() expected a child path but got a URL, use refFromURL instead.');
        }
        return new ReferenceCompat(ref(this._delegate, path), this);
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    StorageServiceCompat.prototype.refFromURL = function (url) {
        if (!isUrl(url)) {
            throw invalidArgument('refFromURL() expected a full URL but got a child path, use ref() instead.');
        }
        try {
            Location.makeFromUrl(url);
        }
        catch (e) {
            throw invalidArgument('refFromUrl() expected a valid full URL but got an invalid one.');
        }
        return new ReferenceCompat(ref(this._delegate, url), this);
    };
    StorageServiceCompat.prototype.setMaxUploadRetryTime = function (time) {
        this._delegate.maxUploadRetryTime = time;
    };
    StorageServiceCompat.prototype.setMaxOperationRetryTime = function (time) {
        this._delegate.maxOperationRetryTime = time;
    };
    return StorageServiceCompat;
}());

var name = "@firebase/storage";
var version = "0.4.3";

/**
 * @license
 * Copyright 2020 Google LLC
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
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage';
function factory(container, url) {
    // Dependencies
    // TODO: This should eventually be 'app-compat'
    var app = container.getProvider('app').getImmediate();
    var authProvider = container.getProvider('auth-internal');
    // TODO: get StorageService instance from component framework instead
    // of creating a new one.
    var storageServiceCompat = new StorageServiceCompat(app, new StorageService(app, authProvider, new XhrIoPool(), url, _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION));
    return storageServiceCompat;
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: TaskState,
        TaskEvent: TaskEvent,
        StringFormat: StringFormat,
        Storage: StorageService,
        Reference: ReferenceCompat
    };
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__["Component"](STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */)
        .setServiceProps(namespaceExports)
        .setMultipleInstances(true));
    instance.registerVersion(name, version);
}
registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2Uvc3RvcmFnZS9kaXN0L2luZGV4LmVzbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQytDO0FBQ3JDO0FBQ0M7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMsQ0FBQyw0REFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBLGFBQWEsMkRBQTJEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDZCQUE2QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdCQUFnQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHVDQUF1QyxFQUFFO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw4Q0FBOEMsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtREFBbUQ7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELG9CQUFvQixFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUFTO0FBQ3BCO0FBQ0E7QUFDQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBUztBQUNwQjtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQVM7QUFDcEI7QUFDQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQVM7QUFDcEI7QUFDQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdURBQVM7QUFDcEI7QUFDQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsaURBQWlELEVBQUU7QUFDbEgsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGlEQUFpRCxFQUFFO0FBQy9HLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJCQUEyQjtBQUMzRDtBQUNBO0FBQ0EsNEJBQTRCLHNEQUFRLEdBQUc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELCtDQUErQyxFQUFFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLCtDQUErQyxFQUFFO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw0REFBYztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw0REFBYztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0EsZ0VBQWdFLGlCQUFpQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHlCQUF5QixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsMENBQTBDLEVBQUUsZUFBZSwwQ0FBMEMsRUFBRTtBQUM1SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUhBQXlILHFEQUFRO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNkRBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQVE7O0FBRUc7QUFDM0I7Ozs7Ozs7Ozs7Ozs7QUNqbUhBO0FBQUE7QUFBMkI7QUFDM0IiLCJmaWxlIjoic3RhdGljL2NodW5rcy9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgX19leHRlbmRzLCBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yLCBfX2Fzc2lnbiwgX19zcHJlYWRBcnJheXMgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IENvbnN0YW50cyB1c2VkIGluIHRoZSBGaXJlYmFzZSBTdG9yYWdlIGxpYnJhcnkuXHJcbiAqL1xyXG4vKipcclxuICogRG9tYWluIG5hbWUgZm9yIGZpcmViYXNlIHN0b3JhZ2UuXHJcbiAqL1xyXG52YXIgREVGQVVMVF9IT1NUID0gJ2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbSc7XHJcbi8qKlxyXG4gKiBUaGUga2V5IGluIEZpcmViYXNlIGNvbmZpZyBqc29uIGZvciB0aGUgc3RvcmFnZSBidWNrZXQuXHJcbiAqL1xyXG52YXIgQ09ORklHX1NUT1JBR0VfQlVDS0VUX0tFWSA9ICdzdG9yYWdlQnVja2V0JztcclxuLyoqXHJcbiAqIDIgbWludXRlc1xyXG4gKlxyXG4gKiBUaGUgdGltZW91dCBmb3IgYWxsIG9wZXJhdGlvbnMgZXhjZXB0IHVwbG9hZC5cclxuICovXHJcbnZhciBERUZBVUxUX01BWF9PUEVSQVRJT05fUkVUUllfVElNRSA9IDIgKiA2MCAqIDEwMDA7XHJcbi8qKlxyXG4gKiAxMCBtaW51dGVzXHJcbiAqXHJcbiAqIFRoZSB0aW1lb3V0IGZvciB1cGxvYWQuXHJcbiAqL1xyXG52YXIgREVGQVVMVF9NQVhfVVBMT0FEX1JFVFJZX1RJTUUgPSAxMCAqIDYwICogMTAwMDtcblxuLyoqXHJcbiAqIEFuIGVycm9yIHJldHVybmVkIGJ5IHRoZSBGaXJlYmFzZSBTdG9yYWdlIFNESy5cclxuICogQHB1YmxpY1xyXG4gKi9cclxudmFyIEZpcmViYXNlU3RvcmFnZUVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZpcmViYXNlU3RvcmFnZUVycm9yLCBfc3VwZXIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gY29kZSAtIEEgU3RvcmFnZUVycm9yQ29kZSBzdHJpbmcgdG8gYmUgcHJlZml4ZWQgd2l0aCAnc3RvcmFnZS8nIGFuZFxyXG4gICAgICogIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAgLSBFcnJvciBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBGaXJlYmFzZVN0b3JhZ2VFcnJvcihjb2RlLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJlcGVuZENvZGUoY29kZSksIFwiRmlyZWJhc2UgU3RvcmFnZTogXCIgKyBtZXNzYWdlICsgXCIgKFwiICsgcHJlcGVuZENvZGUoY29kZSkgKyBcIilcIikgfHwgdGhpcztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdG9yZXMgY3VzdG9tIGVycm9yIGRhdGEgdW5xdWUgdG8gRmlyZWJhc2VTdG9yYWdlRXJyb3IuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX3RoaXMuY3VzdG9tRGF0YSA9IHsgc2VydmVyUmVzcG9uc2U6IG51bGwgfTtcclxuICAgICAgICAvLyBXaXRob3V0IHRoaXMsIGBpbnN0YW5jZW9mIEZpcmViYXNlU3RvcmFnZUVycm9yYCwgaW4gdGVzdHMgZm9yIGV4YW1wbGUsXHJcbiAgICAgICAgLy8gcmV0dXJucyBmYWxzZS5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wYXJlcyBhIFN0b3JhZ2VFcnJvckNvZGUgYWdhaW5zdCB0aGlzIGVycm9yJ3MgY29kZSwgZmlsdGVyaW5nIG91dCB0aGUgcHJlZml4LlxyXG4gICAgICovXHJcbiAgICBGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUuX2NvZGVFcXVhbHMgPSBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICAgIHJldHVybiBwcmVwZW5kQ29kZShjb2RlKSA9PT0gdGhpcy5jb2RlO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUsIFwibWVzc2FnZVwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgc2VydmVyUmVzcG9uc2UgaWYgYXZhaWxhYmxlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXN0b21EYXRhLnNlcnZlclJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlICsgXCJcXG5cIiArIHRoaXMuY3VzdG9tRGF0YS5zZXJ2ZXJSZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VTdG9yYWdlRXJyb3IucHJvdG90eXBlLCBcInNlcnZlclJlc3BvbnNlXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcHRpb25hbCByZXNwb25zZSBtZXNzYWdlIHRoYXQgd2FzIGFkZGVkIGJ5IHRoZSBzZXJ2ZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1c3RvbURhdGEuc2VydmVyUmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzZXJ2ZXJSZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbURhdGEuc2VydmVyUmVzcG9uc2UgPSBzZXJ2ZXJSZXNwb25zZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gRmlyZWJhc2VTdG9yYWdlRXJyb3I7XHJcbn0oRmlyZWJhc2VFcnJvcikpO1xyXG5mdW5jdGlvbiBwcmVwZW5kQ29kZShjb2RlKSB7XHJcbiAgICByZXR1cm4gJ3N0b3JhZ2UvJyArIGNvZGU7XHJcbn1cclxuZnVuY3Rpb24gdW5rbm93bigpIHtcclxuICAgIHZhciBtZXNzYWdlID0gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQsIHBsZWFzZSBjaGVjayB0aGUgZXJyb3IgcGF5bG9hZCBmb3IgJyArXHJcbiAgICAgICAgJ3NlcnZlciByZXNwb25zZS4nO1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihcInVua25vd25cIiAvKiBVTktOT1dOICovLCBtZXNzYWdlKTtcclxufVxyXG5mdW5jdGlvbiBvYmplY3ROb3RGb3VuZChwYXRoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKFwib2JqZWN0LW5vdC1mb3VuZFwiIC8qIE9CSkVDVF9OT1RfRk9VTkQgKi8sIFwiT2JqZWN0ICdcIiArIHBhdGggKyBcIicgZG9lcyBub3QgZXhpc3QuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHF1b3RhRXhjZWVkZWQoYnVja2V0KSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKFwicXVvdGEtZXhjZWVkZWRcIiAvKiBRVU9UQV9FWENFRURFRCAqLywgXCJRdW90YSBmb3IgYnVja2V0ICdcIiArXHJcbiAgICAgICAgYnVja2V0ICtcclxuICAgICAgICBcIicgZXhjZWVkZWQsIHBsZWFzZSB2aWV3IHF1b3RhIG9uIFwiICtcclxuICAgICAgICAnaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3ByaWNpbmcvLicpO1xyXG59XHJcbmZ1bmN0aW9uIHVuYXV0aGVudGljYXRlZCgpIHtcclxuICAgIHZhciBtZXNzYWdlID0gJ1VzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQsIHBsZWFzZSBhdXRoZW50aWNhdGUgdXNpbmcgRmlyZWJhc2UgJyArXHJcbiAgICAgICAgJ0F1dGhlbnRpY2F0aW9uIGFuZCB0cnkgYWdhaW4uJztcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoXCJ1bmF1dGhlbnRpY2F0ZWRcIiAvKiBVTkFVVEhFTlRJQ0FURUQgKi8sIG1lc3NhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIHVuYXV0aG9yaXplZChwYXRoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKFwidW5hdXRob3JpemVkXCIgLyogVU5BVVRIT1JJWkVEICovLCBcIlVzZXIgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyAnXCIgKyBwYXRoICsgXCInLlwiKTtcclxufVxyXG5mdW5jdGlvbiByZXRyeUxpbWl0RXhjZWVkZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKFwicmV0cnktbGltaXQtZXhjZWVkZWRcIiAvKiBSRVRSWV9MSU1JVF9FWENFRURFRCAqLywgJ01heCByZXRyeSB0aW1lIGZvciBvcGVyYXRpb24gZXhjZWVkZWQsIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbn1cclxuZnVuY3Rpb24gY2FuY2VsZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKFwiY2FuY2VsZWRcIiAvKiBDQU5DRUxFRCAqLywgJ1VzZXIgY2FuY2VsZWQgdGhlIHVwbG9hZC9kb3dubG9hZC4nKTtcclxufVxyXG5mdW5jdGlvbiBpbnZhbGlkVXJsKHVybCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihcImludmFsaWQtdXJsXCIgLyogSU5WQUxJRF9VUkwgKi8sIFwiSW52YWxpZCBVUkwgJ1wiICsgdXJsICsgXCInLlwiKTtcclxufVxyXG5mdW5jdGlvbiBpbnZhbGlkRGVmYXVsdEJ1Y2tldChidWNrZXQpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoXCJpbnZhbGlkLWRlZmF1bHQtYnVja2V0XCIgLyogSU5WQUxJRF9ERUZBVUxUX0JVQ0tFVCAqLywgXCJJbnZhbGlkIGRlZmF1bHQgYnVja2V0ICdcIiArIGJ1Y2tldCArIFwiJy5cIik7XHJcbn1cclxuZnVuY3Rpb24gbm9EZWZhdWx0QnVja2V0KCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihcIm5vLWRlZmF1bHQtYnVja2V0XCIgLyogTk9fREVGQVVMVF9CVUNLRVQgKi8sICdObyBkZWZhdWx0IGJ1Y2tldCAnICtcclxuICAgICAgICBcImZvdW5kLiBEaWQgeW91IHNldCB0aGUgJ1wiICtcclxuICAgICAgICBDT05GSUdfU1RPUkFHRV9CVUNLRVRfS0VZICtcclxuICAgICAgICBcIicgcHJvcGVydHkgd2hlbiBpbml0aWFsaXppbmcgdGhlIGFwcD9cIik7XHJcbn1cclxuZnVuY3Rpb24gY2Fubm90U2xpY2VCbG9iKCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihcImNhbm5vdC1zbGljZS1ibG9iXCIgLyogQ0FOTk9UX1NMSUNFX0JMT0IgKi8sICdDYW5ub3Qgc2xpY2UgYmxvYiBmb3IgdXBsb2FkLiBQbGVhc2UgcmV0cnkgdGhlIHVwbG9hZC4nKTtcclxufVxyXG5mdW5jdGlvbiBzZXJ2ZXJGaWxlV3JvbmdTaXplKCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihcInNlcnZlci1maWxlLXdyb25nLXNpemVcIiAvKiBTRVJWRVJfRklMRV9XUk9OR19TSVpFICovLCAnU2VydmVyIHJlY29yZGVkIGluY29ycmVjdCB1cGxvYWQgZmlsZSBzaXplLCBwbGVhc2UgcmV0cnkgdGhlIHVwbG9hZC4nKTtcclxufVxyXG5mdW5jdGlvbiBub0Rvd25sb2FkVVJMKCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihcIm5vLWRvd25sb2FkLXVybFwiIC8qIE5PX0RPV05MT0FEX1VSTCAqLywgJ1RoZSBnaXZlbiBmaWxlIGRvZXMgbm90IGhhdmUgYW55IGRvd25sb2FkIFVSTHMuJyk7XHJcbn1cclxuZnVuY3Rpb24gaW52YWxpZEFyZ3VtZW50KG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoXCJpbnZhbGlkLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9BUkdVTUVOVCAqLywgbWVzc2FnZSk7XHJcbn1cclxuZnVuY3Rpb24gYXBwRGVsZXRlZCgpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoXCJhcHAtZGVsZXRlZFwiIC8qIEFQUF9ERUxFVEVEICovLCAnVGhlIEZpcmViYXNlIGFwcCB3YXMgZGVsZXRlZC4nKTtcclxufVxyXG4vKipcclxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgd2FzIGludmFsaWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbnZhbGlkUm9vdE9wZXJhdGlvbihuYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKFwiaW52YWxpZC1yb290LW9wZXJhdGlvblwiIC8qIElOVkFMSURfUk9PVF9PUEVSQVRJT04gKi8sIFwiVGhlIG9wZXJhdGlvbiAnXCIgK1xyXG4gICAgICAgIG5hbWUgK1xyXG4gICAgICAgIFwiJyBjYW5ub3QgYmUgcGVyZm9ybWVkIG9uIGEgcm9vdCByZWZlcmVuY2UsIGNyZWF0ZSBhIG5vbi1yb290IFwiICtcclxuICAgICAgICBcInJlZmVyZW5jZSB1c2luZyBjaGlsZCwgc3VjaCBhcyAuY2hpbGQoJ2ZpbGUucG5nJykuXCIpO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIGZvcm1hdCB0aGF0IHdhcyBub3QgdmFsaWQuXHJcbiAqIEBwYXJhbSBtZXNzYWdlIC0gQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGZvcm1hdCB2aW9sYXRpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBpbnZhbGlkRm9ybWF0KGZvcm1hdCwgbWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihcImludmFsaWQtZm9ybWF0XCIgLyogSU5WQUxJRF9GT1JNQVQgKi8sIFwiU3RyaW5nIGRvZXMgbm90IG1hdGNoIGZvcm1hdCAnXCIgKyBmb3JtYXQgKyBcIic6IFwiICsgbWVzc2FnZSk7XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBtZXNzYWdlIC0gQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGludGVybmFsIGVycm9yLlxyXG4gKi9cclxuZnVuY3Rpb24gaW50ZXJuYWxFcnJvcihtZXNzYWdlKSB7XHJcbiAgICB0aHJvdyBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoXCJpbnRlcm5hbC1lcnJvclwiIC8qIElOVEVSTkFMX0VSUk9SICovLCAnSW50ZXJuYWwgZXJyb3I6ICcgKyBtZXNzYWdlKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQW4gZW51bWVyYXRpb24gb2YgdGhlIHBvc3NpYmxlIHN0cmluZyBmb3JtYXRzIGZvciB1cGxvYWQuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbnZhciBTdHJpbmdGb3JtYXQgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyB0aGUgc3RyaW5nIHNob3VsZCBiZSBpbnRlcnByZXRlZCBcInJhd1wiLCB0aGF0IGlzLCBhcyBub3JtYWwgdGV4dC5cclxuICAgICAqIFRoZSBzdHJpbmcgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBVVEYtMTYsIHRoZW4gdXBsb2FkZWQgYXMgYSBVVEYtOCBieXRlXHJcbiAgICAgKiBzZXF1ZW5jZS5cclxuICAgICAqIEV4YW1wbGU6IFRoZSBzdHJpbmcgJ0hlbGxvISBcXFxcdWQ4M2RcXFxcdWRlMGEnIGJlY29tZXMgdGhlIGJ5dGUgc2VxdWVuY2VcclxuICAgICAqIDQ4IDY1IDZjIDZjIDZmIDIxIDIwIGYwIDlmIDk4IDhhXHJcbiAgICAgKi9cclxuICAgIFJBVzogJ3JhdycsXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyB0aGUgc3RyaW5nIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBiYXNlNjQtZW5jb2RlZCBkYXRhLlxyXG4gICAgICogUGFkZGluZyBjaGFyYWN0ZXJzICh0cmFpbGluZyAnPSdzKSBhcmUgb3B0aW9uYWwuXHJcbiAgICAgKiBFeGFtcGxlOiBUaGUgc3RyaW5nICdyV21PKytFNnQ3L3Jsdz09JyBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXHJcbiAgICAgKiBhZCA2OSA4ZSBmYiBlMSAzYSBiNyBiZiBlYiA5N1xyXG4gICAgICovXHJcbiAgICBCQVNFNjQ6ICdiYXNlNjQnLFxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIHN0cmluZyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXMgYmFzZTY0dXJsLWVuY29kZWQgZGF0YS5cclxuICAgICAqIFBhZGRpbmcgY2hhcmFjdGVycyAodHJhaWxpbmcgJz0ncykgYXJlIG9wdGlvbmFsLlxyXG4gICAgICogRXhhbXBsZTogVGhlIHN0cmluZyAncldtTy0tRTZ0N19ybHc9PScgYmVjb21lcyB0aGUgYnl0ZSBzZXF1ZW5jZVxyXG4gICAgICogYWQgNjkgOGUgZmIgZTEgM2EgYjcgYmYgZWIgOTdcclxuICAgICAqL1xyXG4gICAgQkFTRTY0VVJMOiAnYmFzZTY0dXJsJyxcclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHRoZSBzdHJpbmcgaXMgYSBkYXRhIFVSTCwgc3VjaCBhcyBvbmUgb2J0YWluZWQgZnJvbVxyXG4gICAgICogY2FudmFzLnRvRGF0YVVSTCgpLlxyXG4gICAgICogRXhhbXBsZTogdGhlIHN0cmluZyAnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LGFhYWEnXHJcbiAgICAgKiBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXHJcbiAgICAgKiA2OSBhNiA5YVxyXG4gICAgICogKHRoZSBjb250ZW50LXR5cGUgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiBpcyBhbHNvIGFwcGxpZWQsIGJ1dCBjYW5cclxuICAgICAqIGJlIG92ZXJyaWRkZW4gaW4gdGhlIG1ldGFkYXRhIG9iamVjdCkuXHJcbiAgICAgKi9cclxuICAgIERBVEFfVVJMOiAnZGF0YV91cmwnXHJcbn07XHJcbnZhciBTdHJpbmdEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RyaW5nRGF0YShkYXRhLCBjb250ZW50VHlwZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nRGF0YTtcclxufSgpKTtcclxuZnVuY3Rpb24gZGF0YUZyb21TdHJpbmcoZm9ybWF0LCBzdHJpbmdEYXRhKSB7XHJcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LlJBVzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdEYXRhKHV0ZjhCeXRlc18oc3RyaW5nRGF0YSkpO1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NDpcclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjRVUkw6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRGF0YShiYXNlNjRCeXRlc18oZm9ybWF0LCBzdHJpbmdEYXRhKSk7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuREFUQV9VUkw6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRGF0YShkYXRhVVJMQnl0ZXNfKHN0cmluZ0RhdGEpLCBkYXRhVVJMQ29udGVudFR5cGVfKHN0cmluZ0RhdGEpKTtcclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgICAvLyBhc3NlcnQoZmFsc2UpO1xyXG4gICAgdGhyb3cgdW5rbm93bigpO1xyXG59XHJcbmZ1bmN0aW9uIHV0ZjhCeXRlc18odmFsdWUpIHtcclxuICAgIHZhciBiID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDw9IDEyNykge1xyXG4gICAgICAgICAgICBiLnB1c2goYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYyA8PSAyMDQ3KSB7XHJcbiAgICAgICAgICAgICAgICBiLnB1c2goMTkyIHwgKGMgPj4gNiksIDEyOCB8IChjICYgNjMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgoYyAmIDY0NTEyKSA9PT0gNTUyOTYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgc3RhcnQgb2YgYSBzdXJyb2dhdGUgcGFpci5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQgPSBpIDwgdmFsdWUubGVuZ3RoIC0gMSAmJiAodmFsdWUuY2hhckNvZGVBdChpICsgMSkgJiA2NDUxMikgPT09IDU2MzIwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHNlY29uZCBzdXJyb2dhdGUgd2Fzbid0IHRoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnB1c2goMjM5LCAxOTEsIDE4OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGkgPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG8gPSB2YWx1ZS5jaGFyQ29kZUF0KCsraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSA2NTUzNiB8ICgoaGkgJiAxMDIzKSA8PCAxMCkgfCAobG8gJiAxMDIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5wdXNoKDI0MCB8IChjID4+IDE4KSwgMTI4IHwgKChjID4+IDEyKSAmIDYzKSwgMTI4IHwgKChjID4+IDYpICYgNjMpLCAxMjggfCAoYyAmIDYzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjICYgNjQ1MTIpID09PSA1NjMyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnZhbGlkIGxvdyBzdXJyb2dhdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIucHVzaCgyMzksIDE5MSwgMTg5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIucHVzaCgyMjQgfCAoYyA+PiAxMiksIDEyOCB8ICgoYyA+PiA2KSAmIDYzKSwgMTI4IHwgKGMgJiA2MykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShiKTtcclxufVxyXG5mdW5jdGlvbiBwZXJjZW50RW5jb2RlZEJ5dGVzXyh2YWx1ZSkge1xyXG4gICAgdmFyIGRlY29kZWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KFN0cmluZ0Zvcm1hdC5EQVRBX1VSTCwgJ01hbGZvcm1lZCBkYXRhIFVSTC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1dGY4Qnl0ZXNfKGRlY29kZWQpO1xyXG59XHJcbmZ1bmN0aW9uIGJhc2U2NEJ5dGVzXyhmb3JtYXQsIHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NDoge1xyXG4gICAgICAgICAgICB2YXIgaGFzTWludXMgPSB2YWx1ZS5pbmRleE9mKCctJykgIT09IC0xO1xyXG4gICAgICAgICAgICB2YXIgaGFzVW5kZXIgPSB2YWx1ZS5pbmRleE9mKCdfJykgIT09IC0xO1xyXG4gICAgICAgICAgICBpZiAoaGFzTWludXMgfHwgaGFzVW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnZhbGlkQ2hhciA9IGhhc01pbnVzID8gJy0nIDogJ18nO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChmb3JtYXQsIFwiSW52YWxpZCBjaGFyYWN0ZXIgJ1wiICtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkQ2hhciArXHJcbiAgICAgICAgICAgICAgICAgICAgXCInIGZvdW5kOiBpcyBpdCBiYXNlNjR1cmwgZW5jb2RlZD9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NFVSTDoge1xyXG4gICAgICAgICAgICB2YXIgaGFzUGx1cyA9IHZhbHVlLmluZGV4T2YoJysnKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIHZhciBoYXNTbGFzaCA9IHZhbHVlLmluZGV4T2YoJy8nKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIGlmIChoYXNQbHVzIHx8IGhhc1NsYXNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW52YWxpZENoYXIgPSBoYXNQbHVzID8gJysnIDogJy8nO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChmb3JtYXQsIFwiSW52YWxpZCBjaGFyYWN0ZXIgJ1wiICsgaW52YWxpZENoYXIgKyBcIicgZm91bmQ6IGlzIGl0IGJhc2U2NCBlbmNvZGVkP1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgICB2YXIgYnl0ZXM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJ5dGVzID0gYXRvYih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGludmFsaWRGb3JtYXQoZm9ybWF0LCAnSW52YWxpZCBjaGFyYWN0ZXIgZm91bmQnKTtcclxuICAgIH1cclxuICAgIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVzLmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBieXRlcy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcbnZhciBEYXRhVVJMUGFydHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEYXRhVVJMUGFydHMoZGF0YVVSTCkge1xyXG4gICAgICAgIHRoaXMuYmFzZTY0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IG51bGw7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBkYXRhVVJMLm1hdGNoKC9eZGF0YTooW14sXSspPywvKTtcclxuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KFN0cmluZ0Zvcm1hdC5EQVRBX1VSTCwgXCJNdXN0IGJlIGZvcm1hdHRlZCAnZGF0YTpbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1pZGRsZSA9IG1hdGNoZXNbMV0gfHwgbnVsbDtcclxuICAgICAgICBpZiAobWlkZGxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlNjQgPSBlbmRzV2l0aChtaWRkbGUsICc7YmFzZTY0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFR5cGUgPSB0aGlzLmJhc2U2NFxyXG4gICAgICAgICAgICAgICAgPyBtaWRkbGUuc3Vic3RyaW5nKDAsIG1pZGRsZS5sZW5ndGggLSAnO2Jhc2U2NCcubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzdCA9IGRhdGFVUkwuc3Vic3RyaW5nKGRhdGFVUkwuaW5kZXhPZignLCcpICsgMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRGF0YVVSTFBhcnRzO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBkYXRhVVJMQnl0ZXNfKGRhdGFVcmwpIHtcclxuICAgIHZhciBwYXJ0cyA9IG5ldyBEYXRhVVJMUGFydHMoZGF0YVVybCk7XHJcbiAgICBpZiAocGFydHMuYmFzZTY0KSB7XHJcbiAgICAgICAgcmV0dXJuIGJhc2U2NEJ5dGVzXyhTdHJpbmdGb3JtYXQuQkFTRTY0LCBwYXJ0cy5yZXN0KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50RW5jb2RlZEJ5dGVzXyhwYXJ0cy5yZXN0KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkYXRhVVJMQ29udGVudFR5cGVfKGRhdGFVcmwpIHtcclxuICAgIHZhciBwYXJ0cyA9IG5ldyBEYXRhVVJMUGFydHMoZGF0YVVybCk7XHJcbiAgICByZXR1cm4gcGFydHMuY29udGVudFR5cGU7XHJcbn1cclxuZnVuY3Rpb24gZW5kc1dpdGgocywgZW5kKSB7XHJcbiAgICB2YXIgbG9uZ0Vub3VnaCA9IHMubGVuZ3RoID49IGVuZC5sZW5ndGg7XHJcbiAgICBpZiAoIWxvbmdFbm91Z2gpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5zdWJzdHJpbmcocy5sZW5ndGggLSBlbmQubGVuZ3RoKSA9PT0gZW5kO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0aGF0IGlzIHRyaWdnZXJlZCBvbiBhIHRhc2suXHJcbiAqL1xyXG52YXIgVGFza0V2ZW50ID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgdGhpcyBldmVudCxcclxuICAgICAqIDx1bD5cclxuICAgICAqICAgPGxpPlRoZSBgbmV4dGAgZnVuY3Rpb24gaXMgdHJpZ2dlcmVkIG9uIHByb2dyZXNzIHVwZGF0ZXMgYW5kIHdoZW4gdGhlXHJcbiAgICAgKiAgICAgICB0YXNrIGlzIHBhdXNlZC9yZXN1bWVkIHdpdGggYW4gYFVwbG9hZFRhc2tTbmFwc2hvdGAgYXMgdGhlIGZpcnN0XHJcbiAgICAgKiAgICAgICBhcmd1bWVudC48L2xpPlxyXG4gICAgICogICA8bGk+VGhlIGBlcnJvcmAgZnVuY3Rpb24gaXMgdHJpZ2dlcmVkIGlmIHRoZSB1cGxvYWQgaXMgY2FuY2VsZWQgb3IgZmFpbHNcclxuICAgICAqICAgICAgIGZvciBhbm90aGVyIHJlYXNvbi48L2xpPlxyXG4gICAgICogICA8bGk+VGhlIGBjb21wbGV0ZWAgZnVuY3Rpb24gaXMgdHJpZ2dlcmVkIGlmIHRoZSB1cGxvYWQgY29tcGxldGVzXHJcbiAgICAgKiAgICAgICBzdWNjZXNzZnVsbHkuPC9saT5cclxuICAgICAqIDwvdWw+XHJcbiAgICAgKi9cclxuICAgIFNUQVRFX0NIQU5HRUQ6ICdzdGF0ZV9jaGFuZ2VkJ1xyXG59O1xyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiBhIHJ1bm5pbmcgdXBsb2FkLlxyXG4gKi9cclxudmFyIFRhc2tTdGF0ZSA9IHtcclxuICAgIC8qKiBUaGUgdGFzayBpcyBjdXJyZW50bHkgdHJhbnNmZXJyaW5nIGRhdGEuICovXHJcbiAgICBSVU5OSU5HOiAncnVubmluZycsXHJcbiAgICAvKiogVGhlIHRhc2sgd2FzIHBhdXNlZCBieSB0aGUgdXNlci4gKi9cclxuICAgIFBBVVNFRDogJ3BhdXNlZCcsXHJcbiAgICAvKiogVGhlIHRhc2sgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS4gKi9cclxuICAgIFNVQ0NFU1M6ICdzdWNjZXNzJyxcclxuICAgIC8qKiBUaGUgdGFzayB3YXMgY2FuY2VsZWQuICovXHJcbiAgICBDQU5DRUxFRDogJ2NhbmNlbGVkJyxcclxuICAgIC8qKiBUaGUgdGFzayBmYWlsZWQgd2l0aCBhbiBlcnJvci4gKi9cclxuICAgIEVSUk9SOiAnZXJyb3InXHJcbn07XHJcbmZ1bmN0aW9uIHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZShzdGF0ZSkge1xyXG4gICAgc3dpdGNoIChzdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgXCJydW5uaW5nXCIgLyogUlVOTklORyAqLzpcclxuICAgICAgICBjYXNlIFwicGF1c2luZ1wiIC8qIFBBVVNJTkcgKi86XHJcbiAgICAgICAgY2FzZSBcImNhbmNlbGluZ1wiIC8qIENBTkNFTElORyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5SVU5OSU5HO1xyXG4gICAgICAgIGNhc2UgXCJwYXVzZWRcIiAvKiBQQVVTRUQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBUYXNrU3RhdGUuUEFVU0VEO1xyXG4gICAgICAgIGNhc2UgXCJzdWNjZXNzXCIgLyogU1VDQ0VTUyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5TVUNDRVNTO1xyXG4gICAgICAgIGNhc2UgXCJjYW5jZWxlZFwiIC8qIENBTkNFTEVEICovOlxyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLkNBTkNFTEVEO1xyXG4gICAgICAgIGNhc2UgXCJlcnJvclwiIC8qIEVSUk9SICovOlxyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLkVSUk9SO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOiBhc3NlcnQoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLkVSUk9SO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBFcnJvciBjb2RlcyBmb3IgcmVxdWVzdHMgbWFkZSBieSB0aGUgdGhlIFhocklvIHdyYXBwZXIuXHJcbiAqL1xyXG52YXIgRXJyb3JDb2RlO1xyXG4oZnVuY3Rpb24gKEVycm9yQ29kZSkge1xyXG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIk5PX0VSUk9SXCJdID0gMF0gPSBcIk5PX0VSUk9SXCI7XHJcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiTkVUV09SS19FUlJPUlwiXSA9IDFdID0gXCJORVRXT1JLX0VSUk9SXCI7XHJcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiQUJPUlRcIl0gPSAyXSA9IFwiQUJPUlRcIjtcclxufSkoRXJyb3JDb2RlIHx8IChFcnJvckNvZGUgPSB7fSkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogV2UgdXNlIHRoaXMgaW5zdGVhZCBvZiBnb29nLm5ldC5YaHJJbyBiZWNhdXNlIGdvb2cubmV0LlhocklvIGlzIGh5dXV1dWdlIGFuZFxyXG4gKiBkb2Vzbid0IHdvcmsgaW4gUmVhY3QgTmF0aXZlIG9uIEFuZHJvaWQuXHJcbiAqL1xyXG52YXIgTmV0d29ya1hocklvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmV0d29ya1hocklvKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZW50XyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMueGhyXyA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHRoaXMuZXJyb3JDb2RlXyA9IEVycm9yQ29kZS5OT19FUlJPUjtcclxuICAgICAgICB0aGlzLnNlbmRQcm9taXNlXyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnhocl8uYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLkFCT1JUO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfdGhpcy54aHJfLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZXJyb3JDb2RlXyA9IEVycm9yQ29kZS5ORVRXT1JLX0VSUk9SO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfdGhpcy54aHJfLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodXJsLCBtZXRob2QsIGJvZHksIGhlYWRlcnMpIHtcclxuICAgICAgICBpZiAodGhpcy5zZW50Xykge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnRlcm5hbEVycm9yKCdjYW5ub3QgLnNlbmQoKSBtb3JlIHRoYW4gb25jZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbnRfID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnhocl8ub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGhlYWRlcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGhyXy5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib2R5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnhocl8uc2VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kUHJvbWlzZV87XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgTmV0d29ya1hocklvLnByb3RvdHlwZS5nZXRFcnJvckNvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0RXJyb3JDb2RlKCkgYmVmb3JlIHNlbmRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JDb2RlXztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VudF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgaW50ZXJuYWxFcnJvcignY2Fubm90IC5nZXRTdGF0dXMoKSBiZWZvcmUgc2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54aHJfLnN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmdldFJlc3BvbnNlVGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VudF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgaW50ZXJuYWxFcnJvcignY2Fubm90IC5nZXRSZXNwb25zZVRleHQoKSBiZWZvcmUgc2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy54aHJfLnJlc3BvbnNlVGV4dDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFib3J0cyB0aGUgcmVxdWVzdC5cclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMueGhyXy5hYm9ydCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtYaHJJby5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbiAoaGVhZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueGhyXy5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtYaHJJby5wcm90b3R5cGUuYWRkVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmICh0aGlzLnhocl8udXBsb2FkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgTmV0d29ya1hocklvLnByb3RvdHlwZS5yZW1vdmVVcGxvYWRQcm9ncmVzc0xpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueGhyXy51cGxvYWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnhocl8udXBsb2FkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgbGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTmV0d29ya1hocklvO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRmFjdG9yeS1saWtlIGNsYXNzIGZvciBjcmVhdGluZyBYaHJJbyBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgWGhySW9Qb29sID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gWGhySW9Qb29sKCkge1xyXG4gICAgfVxyXG4gICAgWGhySW9Qb29sLnByb3RvdHlwZS5jcmVhdGVYaHJJbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtYaHJJbygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBYaHJJb1Bvb2w7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGlzSnVzdERlZihwKSB7XHJcbiAgICByZXR1cm4gcCAhPT0gdm9pZCAwO1xyXG59XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24ocCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBwID09PSAnZnVuY3Rpb24nO1xyXG59XHJcbmZ1bmN0aW9uIGlzTm9uQXJyYXlPYmplY3QocCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBwID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShwKTtcclxufVxyXG5mdW5jdGlvbiBpc1N0cmluZyhwKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHAgPT09ICdzdHJpbmcnIHx8IHAgaW5zdGFuY2VvZiBTdHJpbmc7XHJcbn1cclxuZnVuY3Rpb24gaXNOYXRpdmVCbG9iKHApIHtcclxuICAgIHJldHVybiBpc05hdGl2ZUJsb2JEZWZpbmVkKCkgJiYgcCBpbnN0YW5jZW9mIEJsb2I7XHJcbn1cclxuZnVuY3Rpb24gaXNOYXRpdmVCbG9iRGVmaW5lZCgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIoYXJndW1lbnQsIG1pblZhbHVlLCBtYXhWYWx1ZSwgdmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA8IG1pblZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50KFwiSW52YWxpZCB2YWx1ZSBmb3IgJ1wiICsgYXJndW1lbnQgKyBcIicuIEV4cGVjdGVkIFwiICsgbWluVmFsdWUgKyBcIiBvciBncmVhdGVyLlwiKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSA+IG1heFZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50KFwiSW52YWxpZCB2YWx1ZSBmb3IgJ1wiICsgYXJndW1lbnQgKyBcIicuIEV4cGVjdGVkIFwiICsgbWF4VmFsdWUgKyBcIiBvciBsZXNzLlwiKTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCbG9iQnVpbGRlcigpIHtcclxuICAgIGlmICh0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIEJsb2JCdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIFdlYktpdEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBXZWJLaXRCbG9iQnVpbGRlcjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENvbmNhdGVuYXRlcyBvbmUgb3IgbW9yZSB2YWx1ZXMgdG9nZXRoZXIgYW5kIGNvbnZlcnRzIHRoZW0gdG8gYSBCbG9iLlxyXG4gKlxyXG4gKiBAcGFyYW0gYXJncyBUaGUgdmFsdWVzIHRoYXQgd2lsbCBtYWtlIHVwIHRoZSByZXN1bHRpbmcgYmxvYi5cclxuICogQHJldHVybiBUaGUgYmxvYi5cclxuICovXHJcbmZ1bmN0aW9uIGdldEJsb2IoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgQmxvYkJ1aWxkZXIgPSBnZXRCbG9iQnVpbGRlcigpO1xyXG4gICAgaWYgKEJsb2JCdWlsZGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmIuYXBwZW5kKGFyZ3NbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmIuZ2V0QmxvYigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoXCJ1bnN1cHBvcnRlZC1lbnZpcm9ubWVudFwiIC8qIFVOU1VQUE9SVEVEX0VOVklST05NRU5UICovLCBcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCBjcmVhdGluZyBCbG9ic1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFNsaWNlcyB0aGUgYmxvYi4gVGhlIHJldHVybmVkIGJsb2IgY29udGFpbnMgZGF0YSBmcm9tIHRoZSBzdGFydCBieXRlXHJcbiAqIChpbmNsdXNpdmUpIHRpbGwgdGhlIGVuZCBieXRlIChleGNsdXNpdmUpLiBOZWdhdGl2ZSBpbmRpY2VzIGNhbm5vdCBiZSB1c2VkLlxyXG4gKlxyXG4gKiBAcGFyYW0gYmxvYiBUaGUgYmxvYiB0byBiZSBzbGljZWQuXHJcbiAqIEBwYXJhbSBzdGFydCBJbmRleCBvZiB0aGUgc3RhcnRpbmcgYnl0ZS5cclxuICogQHBhcmFtIGVuZCBJbmRleCBvZiB0aGUgZW5kaW5nIGJ5dGUuXHJcbiAqIEByZXR1cm4gVGhlIGJsb2Igc2xpY2Ugb3IgbnVsbCBpZiBub3Qgc3VwcG9ydGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gc2xpY2VCbG9iKGJsb2IsIHN0YXJ0LCBlbmQpIHtcclxuICAgIGlmIChibG9iLndlYmtpdFNsaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2Iud2Via2l0U2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChibG9iLm1velNsaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2IubW96U2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChibG9iLnNsaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2Iuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQHBhcmFtIG9wdF9lbGlkZUNvcHkgLSBJZiB0cnVlLCBkb2Vzbid0IGNvcHkgbXV0YWJsZSBpbnB1dCBkYXRhXHJcbiAqICAgICAoZS5nLiBVaW50OEFycmF5cykuIFBhc3MgdHJ1ZSBvbmx5IGlmIHlvdSBrbm93IHRoZSBvYmplY3RzIHdpbGwgbm90IGJlXHJcbiAqICAgICBtb2RpZmllZCBhZnRlciB0aGlzIGJsb2IncyBjb25zdHJ1Y3Rpb24uXHJcbiAqL1xyXG52YXIgRmJzQmxvYiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZic0Jsb2IoZGF0YSwgZWxpZGVDb3B5KSB7XHJcbiAgICAgICAgdmFyIHNpemUgPSAwO1xyXG4gICAgICAgIHZhciBibG9iVHlwZSA9ICcnO1xyXG4gICAgICAgIGlmIChpc05hdGl2ZUJsb2IoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhXyA9IGRhdGE7XHJcbiAgICAgICAgICAgIHNpemUgPSBkYXRhLnNpemU7XHJcbiAgICAgICAgICAgIGJsb2JUeXBlID0gZGF0YS50eXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgaWYgKGVsaWRlQ29weSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXyA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXyA9IG5ldyBVaW50OEFycmF5KGRhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfLnNldChuZXcgVWludDhBcnJheShkYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2l6ZSA9IHRoaXMuZGF0YV8ubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAoZWxpZGVDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfID0gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfLnNldChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaXplID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2l6ZV8gPSBzaXplO1xyXG4gICAgICAgIHRoaXMudHlwZV8gPSBibG9iVHlwZTtcclxuICAgIH1cclxuICAgIEZic0Jsb2IucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZV87XHJcbiAgICB9O1xyXG4gICAgRmJzQmxvYi5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlXztcclxuICAgIH07XHJcbiAgICBGYnNCbG9iLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydEJ5dGUsIGVuZEJ5dGUpIHtcclxuICAgICAgICBpZiAoaXNOYXRpdmVCbG9iKHRoaXMuZGF0YV8pKSB7XHJcbiAgICAgICAgICAgIHZhciByZWFsQmxvYiA9IHRoaXMuZGF0YV87XHJcbiAgICAgICAgICAgIHZhciBzbGljZWQgPSBzbGljZUJsb2IocmVhbEJsb2IsIHN0YXJ0Qnl0ZSwgZW5kQnl0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzbGljZWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmJzQmxvYihzbGljZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHNsaWNlID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhXy5idWZmZXIsIHN0YXJ0Qnl0ZSwgZW5kQnl0ZSAtIHN0YXJ0Qnl0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmJzQmxvYihzbGljZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEZic0Jsb2IuZ2V0QmxvYiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSkge1xyXG4gICAgICAgICAgICB2YXIgYmxvYmJ5ID0gYXJncy5tYXAoZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZic0Jsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmRhdGFfO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmJzQmxvYihnZXRCbG9iLmFwcGx5KG51bGwsIGJsb2JieSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHVpbnQ4QXJyYXlzID0gYXJncy5tYXAoZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUZyb21TdHJpbmcoU3RyaW5nRm9ybWF0LlJBVywgdmFsKS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmxvYnMgZG9uJ3QgZXhpc3QsIHNvIHRoaXMgaGFzIHRvIGJlIGEgVWludDhBcnJheS5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmRhdGFfO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGZpbmFsTGVuZ3RoXzEgPSAwO1xyXG4gICAgICAgICAgICB1aW50OEFycmF5cy5mb3JFYWNoKGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgZmluYWxMZW5ndGhfMSArPSBhcnJheS5ieXRlTGVuZ3RoO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIG1lcmdlZF8xID0gbmV3IFVpbnQ4QXJyYXkoZmluYWxMZW5ndGhfMSk7XHJcbiAgICAgICAgICAgIHZhciBpbmRleF8xID0gMDtcclxuICAgICAgICAgICAgdWludDhBcnJheXMuZm9yRWFjaChmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWRfMVtpbmRleF8xKytdID0gYXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZic0Jsb2IobWVyZ2VkXzEsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBGYnNCbG9iLnByb3RvdHlwZS51cGxvYWREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFfO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGYnNCbG9iO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRmlyZWJhc2UgU3RvcmFnZSBsb2NhdGlvbiBkYXRhLlxyXG4gKi9cclxudmFyIExvY2F0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTG9jYXRpb24oYnVja2V0LCBwYXRoKSB7XHJcbiAgICAgICAgdGhpcy5idWNrZXQgPSBidWNrZXQ7XHJcbiAgICAgICAgdGhpcy5wYXRoXyA9IHBhdGg7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9jYXRpb24ucHJvdG90eXBlLCBcInBhdGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXRoXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9jYXRpb24ucHJvdG90eXBlLCBcImlzUm9vdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhdGgubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5mdWxsU2VydmVyVXJsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICAgICAgcmV0dXJuICcvYi8nICsgZW5jb2RlKHRoaXMuYnVja2V0KSArICcvby8nICsgZW5jb2RlKHRoaXMucGF0aCk7XHJcbiAgICB9O1xyXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcclxuICAgICAgICByZXR1cm4gJy9iLycgKyBlbmNvZGUodGhpcy5idWNrZXQpICsgJy9vJztcclxuICAgIH07XHJcbiAgICBMb2NhdGlvbi5tYWtlRnJvbUJ1Y2tldFNwZWMgPSBmdW5jdGlvbiAoYnVja2V0U3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGJ1Y2tldExvY2F0aW9uO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGJ1Y2tldExvY2F0aW9uID0gTG9jYXRpb24ubWFrZUZyb21VcmwoYnVja2V0U3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gTm90IHZhbGlkIFVSTCwgdXNlIGFzLWlzLiBUaGlzIGxldHMgeW91IHB1dCBiYXJlIGJ1Y2tldCBuYW1lcyBpblxyXG4gICAgICAgICAgICAvLyBjb25maWcuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTG9jYXRpb24oYnVja2V0U3RyaW5nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidWNrZXRMb2NhdGlvbi5wYXRoID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYnVja2V0TG9jYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnZhbGlkRGVmYXVsdEJ1Y2tldChidWNrZXRTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMb2NhdGlvbi5tYWtlRnJvbVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHZhciBidWNrZXREb21haW4gPSAnKFtBLVphLXowLTkuXFxcXC1fXSspJztcclxuICAgICAgICBmdW5jdGlvbiBnc01vZGlmeShsb2MpIHtcclxuICAgICAgICAgICAgaWYgKGxvYy5wYXRoLmNoYXJBdChsb2MucGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICBsb2MucGF0aF8gPSBsb2MucGF0aF8uc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnc1BhdGggPSAnKC8oLiopKT8kJztcclxuICAgICAgICB2YXIgZ3NSZWdleCA9IG5ldyBSZWdFeHAoJ15nczovLycgKyBidWNrZXREb21haW4gKyBnc1BhdGgsICdpJyk7XHJcbiAgICAgICAgdmFyIGdzSW5kaWNlcyA9IHsgYnVja2V0OiAxLCBwYXRoOiAzIH07XHJcbiAgICAgICAgZnVuY3Rpb24gaHR0cE1vZGlmeShsb2MpIHtcclxuICAgICAgICAgICAgbG9jLnBhdGhfID0gZGVjb2RlVVJJQ29tcG9uZW50KGxvYy5wYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSAndltBLVphLXowLTlfXSsnO1xyXG4gICAgICAgIHZhciBmaXJlYmFzZVN0b3JhZ2VIb3N0ID0gREVGQVVMVF9IT1NULnJlcGxhY2UoL1suXS9nLCAnXFxcXC4nKTtcclxuICAgICAgICB2YXIgZmlyZWJhc2VTdG9yYWdlUGF0aCA9ICcoLyhbXj8jXSopLiopPyQnO1xyXG4gICAgICAgIHZhciBmaXJlYmFzZVN0b3JhZ2VSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXmh0dHBzPzovL1wiICsgZmlyZWJhc2VTdG9yYWdlSG9zdCArIFwiL1wiICsgdmVyc2lvbiArIFwiL2IvXCIgKyBidWNrZXREb21haW4gKyBcIi9vXCIgKyBmaXJlYmFzZVN0b3JhZ2VQYXRoLCAnaScpO1xyXG4gICAgICAgIHZhciBmaXJlYmFzZVN0b3JhZ2VJbmRpY2VzID0geyBidWNrZXQ6IDEsIHBhdGg6IDMgfTtcclxuICAgICAgICB2YXIgY2xvdWRTdG9yYWdlSG9zdCA9ICcoPzpzdG9yYWdlLmdvb2dsZWFwaXMuY29tfHN0b3JhZ2UuY2xvdWQuZ29vZ2xlLmNvbSknO1xyXG4gICAgICAgIHZhciBjbG91ZFN0b3JhZ2VQYXRoID0gJyhbXj8jXSopJztcclxuICAgICAgICB2YXIgY2xvdWRTdG9yYWdlUmVnRXhwID0gbmV3IFJlZ0V4cChcIl5odHRwcz86Ly9cIiArIGNsb3VkU3RvcmFnZUhvc3QgKyBcIi9cIiArIGJ1Y2tldERvbWFpbiArIFwiL1wiICsgY2xvdWRTdG9yYWdlUGF0aCwgJ2knKTtcclxuICAgICAgICB2YXIgY2xvdWRTdG9yYWdlSW5kaWNlcyA9IHsgYnVja2V0OiAxLCBwYXRoOiAyIH07XHJcbiAgICAgICAgdmFyIGdyb3VwcyA9IFtcclxuICAgICAgICAgICAgeyByZWdleDogZ3NSZWdleCwgaW5kaWNlczogZ3NJbmRpY2VzLCBwb3N0TW9kaWZ5OiBnc01vZGlmeSB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWdleDogZmlyZWJhc2VTdG9yYWdlUmVnRXhwLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlczogZmlyZWJhc2VTdG9yYWdlSW5kaWNlcyxcclxuICAgICAgICAgICAgICAgIHBvc3RNb2RpZnk6IGh0dHBNb2RpZnlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVnZXg6IGNsb3VkU3RvcmFnZVJlZ0V4cCxcclxuICAgICAgICAgICAgICAgIGluZGljZXM6IGNsb3VkU3RvcmFnZUluZGljZXMsXHJcbiAgICAgICAgICAgICAgICBwb3N0TW9kaWZ5OiBodHRwTW9kaWZ5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBncm91cCA9IGdyb3Vwc1tpXTtcclxuICAgICAgICAgICAgdmFyIGNhcHR1cmVzID0gZ3JvdXAucmVnZXguZXhlYyh1cmwpO1xyXG4gICAgICAgICAgICBpZiAoY2FwdHVyZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBidWNrZXRWYWx1ZSA9IGNhcHR1cmVzW2dyb3VwLmluZGljZXMuYnVja2V0XTtcclxuICAgICAgICAgICAgICAgIHZhciBwYXRoVmFsdWUgPSBjYXB0dXJlc1tncm91cC5pbmRpY2VzLnBhdGhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXRoVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKGJ1Y2tldFZhbHVlLCBwYXRoVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAucG9zdE1vZGlmeShsb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnZhbGlkVXJsKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTG9jYXRpb247XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBPYmplY3QgcmVzdWx0aW5nIGZyb20gcGFyc2luZyB0aGUgZ2l2ZW4gSlNPTiwgb3IgbnVsbCBpZiB0aGVcclxuICogZ2l2ZW4gc3RyaW5nIGRvZXMgbm90IHJlcHJlc2VudCBhIEpTT04gb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24ganNvbk9iamVjdE9yTnVsbChzKSB7XHJcbiAgICB2YXIgb2JqO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBvYmogPSBKU09OLnBhcnNlKHMpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChpc05vbkFycmF5T2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgQ29udGFpbnMgaGVscGVyIG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBwYXRocy5cclxuICovXHJcbi8qKlxyXG4gKiBAcmV0dXJuIE51bGwgaWYgdGhlIHBhdGggaXMgYWxyZWFkeSBhdCB0aGUgcm9vdC5cclxuICovXHJcbmZ1bmN0aW9uIHBhcmVudChwYXRoKSB7XHJcbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBpbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy8nKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3UGF0aCA9IHBhdGguc2xpY2UoMCwgaW5kZXgpO1xyXG4gICAgcmV0dXJuIG5ld1BhdGg7XHJcbn1cclxuZnVuY3Rpb24gY2hpbGQocGF0aCwgY2hpbGRQYXRoKSB7XHJcbiAgICB2YXIgY2Fub25pY2FsQ2hpbGRQYXRoID0gY2hpbGRQYXRoXHJcbiAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjb21wb25lbnQpIHsgcmV0dXJuIGNvbXBvbmVudC5sZW5ndGggPiAwOyB9KVxyXG4gICAgICAgIC5qb2luKCcvJyk7XHJcbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gY2Fub25pY2FsQ2hpbGRQYXRoO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLycgKyBjYW5vbmljYWxDaGlsZFBhdGg7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGxhc3QgY29tcG9uZW50IG9mIGEgcGF0aC5cclxuICogJy9mb28vYmFyJyAtPiAnYmFyJ1xyXG4gKiAnL2Zvby9iYXIvYmF6LycgLT4gJ2Jhei8nXHJcbiAqICcvYScgLT4gJ2EnXHJcbiAqL1xyXG5mdW5jdGlvbiBsYXN0Q29tcG9uZW50KHBhdGgpIHtcclxuICAgIHZhciBpbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy8nLCBwYXRoLmxlbmd0aCAtIDIpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGguc2xpY2UoaW5kZXggKyAxKTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlVXJsKHVybFBhcnQpIHtcclxuICAgIHJldHVybiBcImh0dHBzOi8vXCIgKyBERUZBVUxUX0hPU1QgKyBcIi92MFwiICsgdXJsUGFydDtcclxufVxyXG5mdW5jdGlvbiBtYWtlUXVlcnlTdHJpbmcocGFyYW1zKSB7XHJcbiAgICB2YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xyXG4gICAgdmFyIHF1ZXJ5UGFydCA9ICc/JztcclxuICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgdmFyIG5leHRQYXJ0ID0gZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUocGFyYW1zW2tleV0pO1xyXG4gICAgICAgICAgICBxdWVyeVBhcnQgPSBxdWVyeVBhcnQgKyBuZXh0UGFydCArICcmJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaG9wIG9mZiB0aGUgZXh0cmEgJyYnIG9yICc/JyBvbiB0aGUgZW5kXHJcbiAgICBxdWVyeVBhcnQgPSBxdWVyeVBhcnQuc2xpY2UoMCwgLTEpO1xyXG4gICAgcmV0dXJuIHF1ZXJ5UGFydDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBub1hmb3JtXyhtZXRhZGF0YSwgdmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG52YXIgTWFwcGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hcHBpbmcoc2VydmVyLCBsb2NhbCwgd3JpdGFibGUsIHhmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XHJcbiAgICAgICAgdGhpcy5sb2NhbCA9IGxvY2FsIHx8IHNlcnZlcjtcclxuICAgICAgICB0aGlzLndyaXRhYmxlID0gISF3cml0YWJsZTtcclxuICAgICAgICB0aGlzLnhmb3JtID0geGZvcm0gfHwgbm9YZm9ybV87XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWFwcGluZztcclxufSgpKTtcclxudmFyIG1hcHBpbmdzXyA9IG51bGw7XHJcbmZ1bmN0aW9uIHhmb3JtUGF0aChmdWxsUGF0aCkge1xyXG4gICAgaWYgKCFpc1N0cmluZyhmdWxsUGF0aCkgfHwgZnVsbFBhdGgubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHJldHVybiBmdWxsUGF0aDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBsYXN0Q29tcG9uZW50KGZ1bGxQYXRoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRNYXBwaW5ncygpIHtcclxuICAgIGlmIChtYXBwaW5nc18pIHtcclxuICAgICAgICByZXR1cm4gbWFwcGluZ3NfO1xyXG4gICAgfVxyXG4gICAgdmFyIG1hcHBpbmdzID0gW107XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdidWNrZXQnKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdnZW5lcmF0aW9uJykpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnbWV0YWdlbmVyYXRpb24nKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCduYW1lJywgJ2Z1bGxQYXRoJywgdHJ1ZSkpO1xyXG4gICAgZnVuY3Rpb24gbWFwcGluZ3NYZm9ybVBhdGgoX21ldGFkYXRhLCBmdWxsUGF0aCkge1xyXG4gICAgICAgIHJldHVybiB4Zm9ybVBhdGgoZnVsbFBhdGgpO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hbWVNYXBwaW5nID0gbmV3IE1hcHBpbmcoJ25hbWUnKTtcclxuICAgIG5hbWVNYXBwaW5nLnhmb3JtID0gbWFwcGluZ3NYZm9ybVBhdGg7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5hbWVNYXBwaW5nKTtcclxuICAgIC8qKlxyXG4gICAgICogQ29lcmNlcyB0aGUgc2Vjb25kIHBhcmFtIHRvIGEgbnVtYmVyLCBpZiBpdCBpcyBkZWZpbmVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB4Zm9ybVNpemUoX21ldGFkYXRhLCBzaXplKSB7XHJcbiAgICAgICAgaWYgKHNpemUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHNpemVNYXBwaW5nID0gbmV3IE1hcHBpbmcoJ3NpemUnKTtcclxuICAgIHNpemVNYXBwaW5nLnhmb3JtID0geGZvcm1TaXplO1xyXG4gICAgbWFwcGluZ3MucHVzaChzaXplTWFwcGluZyk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCd0aW1lQ3JlYXRlZCcpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ3VwZGF0ZWQnKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdtZDVIYXNoJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY2FjaGVDb250cm9sJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY29udGVudERpc3Bvc2l0aW9uJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY29udGVudEVuY29kaW5nJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY29udGVudExhbmd1YWdlJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY29udGVudFR5cGUnLCBudWxsLCB0cnVlKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdtZXRhZGF0YScsICdjdXN0b21NZXRhZGF0YScsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzXyA9IG1hcHBpbmdzO1xyXG4gICAgcmV0dXJuIG1hcHBpbmdzXztcclxufVxyXG5mdW5jdGlvbiBhZGRSZWYobWV0YWRhdGEsIHNlcnZpY2UpIHtcclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmVmKCkge1xyXG4gICAgICAgIHZhciBidWNrZXQgPSBtZXRhZGF0YVsnYnVja2V0J107XHJcbiAgICAgICAgdmFyIHBhdGggPSBtZXRhZGF0YVsnZnVsbFBhdGgnXTtcclxuICAgICAgICB2YXIgbG9jID0gbmV3IExvY2F0aW9uKGJ1Y2tldCwgcGF0aCk7XHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2UuX21ha2VTdG9yYWdlUmVmZXJlbmNlKGxvYyk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWV0YWRhdGEsICdyZWYnLCB7IGdldDogZ2VuZXJhdGVSZWYgfSk7XHJcbn1cclxuZnVuY3Rpb24gZnJvbVJlc291cmNlKHNlcnZpY2UsIHJlc291cmNlLCBtYXBwaW5ncykge1xyXG4gICAgdmFyIG1ldGFkYXRhID0ge307XHJcbiAgICBtZXRhZGF0YVsndHlwZSddID0gJ2ZpbGUnO1xyXG4gICAgdmFyIGxlbiA9IG1hcHBpbmdzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB2YXIgbWFwcGluZyA9IG1hcHBpbmdzW2ldO1xyXG4gICAgICAgIG1ldGFkYXRhW21hcHBpbmcubG9jYWxdID0gbWFwcGluZy54Zm9ybShtZXRhZGF0YSwgcmVzb3VyY2VbbWFwcGluZy5zZXJ2ZXJdKTtcclxuICAgIH1cclxuICAgIGFkZFJlZihtZXRhZGF0YSwgc2VydmljZSk7XHJcbiAgICByZXR1cm4gbWV0YWRhdGE7XHJcbn1cclxuZnVuY3Rpb24gZnJvbVJlc291cmNlU3RyaW5nKHNlcnZpY2UsIHJlc291cmNlU3RyaW5nLCBtYXBwaW5ncykge1xyXG4gICAgdmFyIG9iaiA9IGpzb25PYmplY3RPck51bGwocmVzb3VyY2VTdHJpbmcpO1xyXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc291cmNlID0gb2JqO1xyXG4gICAgcmV0dXJuIGZyb21SZXNvdXJjZShzZXJ2aWNlLCByZXNvdXJjZSwgbWFwcGluZ3MpO1xyXG59XHJcbmZ1bmN0aW9uIGRvd25sb2FkVXJsRnJvbVJlc291cmNlU3RyaW5nKG1ldGFkYXRhLCByZXNvdXJjZVN0cmluZykge1xyXG4gICAgdmFyIG9iaiA9IGpzb25PYmplY3RPck51bGwocmVzb3VyY2VTdHJpbmcpO1xyXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1N0cmluZyhvYmpbJ2Rvd25sb2FkVG9rZW5zJ10pKSB7XHJcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIG9iamVjdHMgYXJlIHVwbG9hZGVkIHRocm91Z2ggR0NTIGFuZCByZXRyaWV2ZWRcclxuICAgICAgICAvLyB0aHJvdWdoIGxpc3QsIHNvIHdlIGRvbid0IHdhbnQgdG8gdGhyb3cgYW4gRXJyb3IuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgdG9rZW5zID0gb2JqWydkb3dubG9hZFRva2VucyddO1xyXG4gICAgaWYgKHRva2Vucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICB2YXIgdG9rZW5zTGlzdCA9IHRva2Vucy5zcGxpdCgnLCcpO1xyXG4gICAgdmFyIHVybHMgPSB0b2tlbnNMaXN0Lm1hcChmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICB2YXIgYnVja2V0ID0gbWV0YWRhdGFbJ2J1Y2tldCddO1xyXG4gICAgICAgIHZhciBwYXRoID0gbWV0YWRhdGFbJ2Z1bGxQYXRoJ107XHJcbiAgICAgICAgdmFyIHVybFBhcnQgPSAnL2IvJyArIGVuY29kZShidWNrZXQpICsgJy9vLycgKyBlbmNvZGUocGF0aCk7XHJcbiAgICAgICAgdmFyIGJhc2UgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgICAgIHZhciBxdWVyeVN0cmluZyA9IG1ha2VRdWVyeVN0cmluZyh7XHJcbiAgICAgICAgICAgIGFsdDogJ21lZGlhJyxcclxuICAgICAgICAgICAgdG9rZW46IHRva2VuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGJhc2UgKyBxdWVyeVN0cmluZztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHVybHNbMF07XHJcbn1cclxuZnVuY3Rpb24gdG9SZXNvdXJjZVN0cmluZyhtZXRhZGF0YSwgbWFwcGluZ3MpIHtcclxuICAgIHZhciByZXNvdXJjZSA9IHt9O1xyXG4gICAgdmFyIGxlbiA9IG1hcHBpbmdzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB2YXIgbWFwcGluZyA9IG1hcHBpbmdzW2ldO1xyXG4gICAgICAgIGlmIChtYXBwaW5nLndyaXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHJlc291cmNlW21hcHBpbmcuc2VydmVyXSA9IG1ldGFkYXRhW21hcHBpbmcubG9jYWxdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXNvdXJjZSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIFBSRUZJWEVTX0tFWSA9ICdwcmVmaXhlcyc7XHJcbnZhciBJVEVNU19LRVkgPSAnaXRlbXMnO1xyXG5mdW5jdGlvbiBmcm9tQmFja2VuZFJlc3BvbnNlKHNlcnZpY2UsIGJ1Y2tldCwgcmVzb3VyY2UpIHtcclxuICAgIHZhciBsaXN0UmVzdWx0ID0ge1xyXG4gICAgICAgIHByZWZpeGVzOiBbXSxcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgbmV4dFBhZ2VUb2tlbjogcmVzb3VyY2VbJ25leHRQYWdlVG9rZW4nXVxyXG4gICAgfTtcclxuICAgIGlmIChyZXNvdXJjZVtQUkVGSVhFU19LRVldKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHJlc291cmNlW1BSRUZJWEVTX0tFWV07IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gX2FbX2ldO1xyXG4gICAgICAgICAgICB2YXIgcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xyXG4gICAgICAgICAgICB2YXIgcmVmZXJlbmNlID0gc2VydmljZS5fbWFrZVN0b3JhZ2VSZWZlcmVuY2UobmV3IExvY2F0aW9uKGJ1Y2tldCwgcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoKSk7XHJcbiAgICAgICAgICAgIGxpc3RSZXN1bHQucHJlZml4ZXMucHVzaChyZWZlcmVuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChyZXNvdXJjZVtJVEVNU19LRVldKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IHJlc291cmNlW0lURU1TX0tFWV07IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gX2NbX2JdO1xyXG4gICAgICAgICAgICB2YXIgcmVmZXJlbmNlID0gc2VydmljZS5fbWFrZVN0b3JhZ2VSZWZlcmVuY2UobmV3IExvY2F0aW9uKGJ1Y2tldCwgaXRlbVsnbmFtZSddKSk7XHJcbiAgICAgICAgICAgIGxpc3RSZXN1bHQuaXRlbXMucHVzaChyZWZlcmVuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBsaXN0UmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGZyb21SZXNwb25zZVN0cmluZyhzZXJ2aWNlLCBidWNrZXQsIHJlc291cmNlU3RyaW5nKSB7XHJcbiAgICB2YXIgb2JqID0ganNvbk9iamVjdE9yTnVsbChyZXNvdXJjZVN0cmluZyk7XHJcbiAgICBpZiAob2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzb3VyY2UgPSBvYmo7XHJcbiAgICByZXR1cm4gZnJvbUJhY2tlbmRSZXNwb25zZShzZXJ2aWNlLCBidWNrZXQsIHJlc291cmNlKTtcclxufVxuXG52YXIgUmVxdWVzdEluZm8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIHdpdGggd2hpY2ggdG8gcmVzb2x2ZSB0aGUgcmVxdWVzdCdzIHByb21pc2UuIE9ubHkgY2FsbGVkXHJcbiAgICAgKiBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsLiBUaHJvdyBmcm9tIHRoaXMgZnVuY3Rpb24gdG8gcmVqZWN0IHRoZVxyXG4gICAgICogcmV0dXJuZWQgUmVxdWVzdCdzIHByb21pc2Ugd2l0aCB0aGUgdGhyb3duIGVycm9yLlxyXG4gICAgICogTm90ZTogVGhlIFhocklvIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIG1heSBiZSByZXVzZWQgYWZ0ZXIgdGhpcyBjYWxsYmFja1xyXG4gICAgICogcmV0dXJucy4gRG8gbm90IGtlZXAgYSByZWZlcmVuY2UgdG8gaXQgaW4gYW55IHdheS5cclxuICAgICAqL1xyXG4gICAgaGFuZGxlciwgdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgICB0aGlzLnVybFBhcmFtcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm9keSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxlZCB3aXRoIHRoZSBjdXJyZW50IG51bWJlciBvZiBieXRlcyB1cGxvYWRlZCBhbmQgdG90YWwgc2l6ZSAoLTEgaWYgbm90XHJcbiAgICAgICAgICogY29tcHV0YWJsZSkgb2YgdGhlIHJlcXVlc3QgYm9keSAoaS5lLiB1c2VkIHRvIHJlcG9ydCB1cGxvYWQgcHJvZ3Jlc3MpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzQ29kZXMgPSBbMjAwXTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxSZXRyeUNvZGVzID0gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVxdWVzdEluZm87XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaHJvd3MgdGhlIFVOS05PV04gRmlyZWJhc2VTdG9yYWdlRXJyb3IgaWYgY25kbiBpcyBmYWxzZS5cclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZXJDaGVjayhjbmRuKSB7XHJcbiAgICBpZiAoIWNuZG4pIHtcclxuICAgICAgICB0aHJvdyB1bmtub3duKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWV0YWRhdGFIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSB7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhociwgdGV4dCkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YSA9IGZyb21SZXNvdXJjZVN0cmluZyhzZXJ2aWNlLCB0ZXh0LCBtYXBwaW5ncyk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKG1ldGFkYXRhICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBsaXN0SGFuZGxlcihzZXJ2aWNlLCBidWNrZXQpIHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyLCB0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGxpc3RSZXN1bHQgPSBmcm9tUmVzcG9uc2VTdHJpbmcoc2VydmljZSwgYnVja2V0LCB0ZXh0KTtcclxuICAgICAgICBoYW5kbGVyQ2hlY2sobGlzdFJlc3VsdCAhPT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBkb3dubG9hZFVybEhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpIHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyLCB0ZXh0KSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gZnJvbVJlc291cmNlU3RyaW5nKHNlcnZpY2UsIHRleHQsIG1hcHBpbmdzKTtcclxuICAgICAgICBoYW5kbGVyQ2hlY2sobWV0YWRhdGEgIT09IG51bGwpO1xyXG4gICAgICAgIHJldHVybiBkb3dubG9hZFVybEZyb21SZXNvdXJjZVN0cmluZyhtZXRhZGF0YSwgdGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pIHtcclxuICAgIGZ1bmN0aW9uIGVycm9ySGFuZGxlcih4aHIsIGVycikge1xyXG4gICAgICAgIHZhciBuZXdFcnI7XHJcbiAgICAgICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIG5ld0VyciA9IHVuYXV0aGVudGljYXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDAyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdFcnIgPSBxdW90YUV4Y2VlZGVkKGxvY2F0aW9uLmJ1Y2tldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLmdldFN0YXR1cygpID09PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFcnIgPSB1bmF1dGhvcml6ZWQobG9jYXRpb24ucGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFcnIgPSBlcnI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3RXJyLnNlcnZlclJlc3BvbnNlID0gZXJyLnNlcnZlclJlc3BvbnNlO1xyXG4gICAgICAgIHJldHVybiBuZXdFcnI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JIYW5kbGVyO1xyXG59XHJcbmZ1bmN0aW9uIG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbikge1xyXG4gICAgdmFyIHNoYXJlZCA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoeGhyLCBlcnIpIHtcclxuICAgICAgICB2YXIgbmV3RXJyID0gc2hhcmVkKHhociwgZXJyKTtcclxuICAgICAgICBpZiAoeGhyLmdldFN0YXR1cygpID09PSA0MDQpIHtcclxuICAgICAgICAgICAgbmV3RXJyID0gb2JqZWN0Tm90Rm91bmQobG9jYXRpb24ucGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0Vyci5zZXJ2ZXJSZXNwb25zZSA9IGVyci5zZXJ2ZXJSZXNwb25zZTtcclxuICAgICAgICByZXR1cm4gbmV3RXJyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ySGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBnZXRNZXRhZGF0YShzZXJ2aWNlLCBsb2NhdGlvbiwgbWFwcGluZ3MpIHtcclxuICAgIHZhciB1cmxQYXJ0ID0gbG9jYXRpb24uZnVsbFNlcnZlclVybCgpO1xyXG4gICAgdmFyIHVybCA9IG1ha2VVcmwodXJsUGFydCk7XHJcbiAgICB2YXIgbWV0aG9kID0gJ0dFVCc7XHJcbiAgICB2YXIgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xyXG4gICAgdmFyIHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gbGlzdChzZXJ2aWNlLCBsb2NhdGlvbiwgZGVsaW1pdGVyLCBwYWdlVG9rZW4sIG1heFJlc3VsdHMpIHtcclxuICAgIHZhciB1cmxQYXJhbXMgPSB7fTtcclxuICAgIGlmIChsb2NhdGlvbi5pc1Jvb3QpIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ3ByZWZpeCddID0gJyc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ3ByZWZpeCddID0gbG9jYXRpb24ucGF0aCArICcvJztcclxuICAgIH1cclxuICAgIGlmIChkZWxpbWl0ZXIgJiYgZGVsaW1pdGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ2RlbGltaXRlciddID0gZGVsaW1pdGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhZ2VUb2tlbikge1xyXG4gICAgICAgIHVybFBhcmFtc1sncGFnZVRva2VuJ10gPSBwYWdlVG9rZW47XHJcbiAgICB9XHJcbiAgICBpZiAobWF4UmVzdWx0cykge1xyXG4gICAgICAgIHVybFBhcmFtc1snbWF4UmVzdWx0cyddID0gbWF4UmVzdWx0cztcclxuICAgIH1cclxuICAgIHZhciB1cmxQYXJ0ID0gbG9jYXRpb24uYnVja2V0T25seVNlcnZlclVybCgpO1xyXG4gICAgdmFyIHVybCA9IG1ha2VVcmwodXJsUGFydCk7XHJcbiAgICB2YXIgbWV0aG9kID0gJ0dFVCc7XHJcbiAgICB2YXIgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xyXG4gICAgdmFyIHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBsaXN0SGFuZGxlcihzZXJ2aWNlLCBsb2NhdGlvbi5idWNrZXQpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLnVybFBhcmFtcyA9IHVybFBhcmFtcztcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gZ2V0RG93bmxvYWRVcmwoc2VydmljZSwgbG9jYXRpb24sIG1hcHBpbmdzKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdHRVQnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgZG93bmxvYWRVcmxIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZU1ldGFkYXRhKHNlcnZpY2UsIGxvY2F0aW9uLCBtZXRhZGF0YSwgbWFwcGluZ3MpIHtcclxuICAgIHZhciB1cmxQYXJ0ID0gbG9jYXRpb24uZnVsbFNlcnZlclVybCgpO1xyXG4gICAgdmFyIHVybCA9IG1ha2VVcmwodXJsUGFydCk7XHJcbiAgICB2YXIgbWV0aG9kID0gJ1BBVENIJztcclxuICAgIHZhciBib2R5ID0gdG9SZXNvdXJjZVN0cmluZyhtZXRhZGF0YSwgbWFwcGluZ3MpO1xyXG4gICAgdmFyIGhlYWRlcnMgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcgfTtcclxuICAgIHZhciB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncyksIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXF1ZXN0SW5mby5ib2R5ID0gYm9keTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0KHNlcnZpY2UsIGxvY2F0aW9uKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdERUxFVEUnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoX3hociwgX3RleHQpIHsgfVxyXG4gICAgdmFyIHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBoYW5kbGVyLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLnN1Y2Nlc3NDb2RlcyA9IFsyMDAsIDIwNF07XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbmZ1bmN0aW9uIGRldGVybWluZUNvbnRlbnRUeXBlXyhtZXRhZGF0YSwgYmxvYikge1xyXG4gICAgcmV0dXJuICgobWV0YWRhdGEgJiYgbWV0YWRhdGFbJ2NvbnRlbnRUeXBlJ10pIHx8XHJcbiAgICAgICAgKGJsb2IgJiYgYmxvYi50eXBlKCkpIHx8XHJcbiAgICAgICAgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpO1xyXG59XHJcbmZ1bmN0aW9uIG1ldGFkYXRhRm9yVXBsb2FkXyhsb2NhdGlvbiwgYmxvYiwgbWV0YWRhdGEpIHtcclxuICAgIHZhciBtZXRhZGF0YUNsb25lID0gT2JqZWN0LmFzc2lnbih7fSwgbWV0YWRhdGEpO1xyXG4gICAgbWV0YWRhdGFDbG9uZVsnZnVsbFBhdGgnXSA9IGxvY2F0aW9uLnBhdGg7XHJcbiAgICBtZXRhZGF0YUNsb25lWydzaXplJ10gPSBibG9iLnNpemUoKTtcclxuICAgIGlmICghbWV0YWRhdGFDbG9uZVsnY29udGVudFR5cGUnXSkge1xyXG4gICAgICAgIG1ldGFkYXRhQ2xvbmVbJ2NvbnRlbnRUeXBlJ10gPSBkZXRlcm1pbmVDb250ZW50VHlwZV8obnVsbCwgYmxvYik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWV0YWRhdGFDbG9uZTtcclxufVxyXG4vKipcclxuICogUHJlcGFyZSBSZXF1ZXN0SW5mbyBmb3IgdXBsb2FkcyBhcyBDb250ZW50LVR5cGU6IG11bHRpcGFydC5cclxuICovXHJcbmZ1bmN0aW9uIG11bHRpcGFydFVwbG9hZChzZXJ2aWNlLCBsb2NhdGlvbiwgbWFwcGluZ3MsIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciBoZWFkZXJzID0ge1xyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLVByb3RvY29sJzogJ211bHRpcGFydCdcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBnZW5Cb3VuZGFyeSgpIHtcclxuICAgICAgICB2YXIgc3RyID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgc3RyID0gc3RyICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNsaWNlKDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgdmFyIGJvdW5kYXJ5ID0gZ2VuQm91bmRhcnkoKTtcclxuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ211bHRpcGFydC9yZWxhdGVkOyBib3VuZGFyeT0nICsgYm91bmRhcnk7XHJcbiAgICB2YXIgbWV0YWRhdGFfID0gbWV0YWRhdGFGb3JVcGxvYWRfKGxvY2F0aW9uLCBibG9iLCBtZXRhZGF0YSk7XHJcbiAgICB2YXIgbWV0YWRhdGFTdHJpbmcgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhXywgbWFwcGluZ3MpO1xyXG4gICAgdmFyIHByZUJsb2JQYXJ0ID0gJy0tJyArXHJcbiAgICAgICAgYm91bmRhcnkgK1xyXG4gICAgICAgICdcXHJcXG4nICtcclxuICAgICAgICAnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XFxyXFxuXFxyXFxuJyArXHJcbiAgICAgICAgbWV0YWRhdGFTdHJpbmcgK1xyXG4gICAgICAgICdcXHJcXG4tLScgK1xyXG4gICAgICAgIGJvdW5kYXJ5ICtcclxuICAgICAgICAnXFxyXFxuJyArXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZTogJyArXHJcbiAgICAgICAgbWV0YWRhdGFfWydjb250ZW50VHlwZSddICtcclxuICAgICAgICAnXFxyXFxuXFxyXFxuJztcclxuICAgIHZhciBwb3N0QmxvYlBhcnQgPSAnXFxyXFxuLS0nICsgYm91bmRhcnkgKyAnLS0nO1xyXG4gICAgdmFyIGJvZHkgPSBGYnNCbG9iLmdldEJsb2IocHJlQmxvYlBhcnQsIGJsb2IsIHBvc3RCbG9iUGFydCk7XHJcbiAgICBpZiAoYm9keSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IGNhbm5vdFNsaWNlQmxvYigpO1xyXG4gICAgfVxyXG4gICAgdmFyIHVybFBhcmFtcyA9IHsgbmFtZTogbWV0YWRhdGFfWydmdWxsUGF0aCddIH07XHJcbiAgICB2YXIgdXJsID0gbWFrZVVybCh1cmxQYXJ0KTtcclxuICAgIHZhciBtZXRob2QgPSAnUE9TVCc7XHJcbiAgICB2YXIgdGltZW91dCA9IHNlcnZpY2UubWF4VXBsb2FkUmV0cnlUaW1lO1xyXG4gICAgdmFyIHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLnVybFBhcmFtcyA9IHVybFBhcmFtcztcclxuICAgIHJlcXVlc3RJbmZvLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgcmVxdWVzdEluZm8uYm9keSA9IGJvZHkudXBsb2FkRGF0YSgpO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG4vKipcclxuICogQHBhcmFtIGN1cnJlbnQgVGhlIG51bWJlciBvZiBieXRlcyB0aGF0IGhhdmUgYmVlbiB1cGxvYWRlZCBzbyBmYXIuXHJcbiAqIEBwYXJhbSB0b3RhbCBUaGUgdG90YWwgbnVtYmVyIG9mIGJ5dGVzIGluIHRoZSB1cGxvYWQuXHJcbiAqIEBwYXJhbSBvcHRfZmluYWxpemVkIFRydWUgaWYgdGhlIHNlcnZlciBoYXMgZmluaXNoZWQgdGhlIHVwbG9hZC5cclxuICogQHBhcmFtIG9wdF9tZXRhZGF0YSBUaGUgdXBsb2FkIG1ldGFkYXRhLCBzaG91bGRcclxuICogICAgIG9ubHkgYmUgcGFzc2VkIGlmIG9wdF9maW5hbGl6ZWQgaXMgdHJ1ZS5cclxuICovXHJcbnZhciBSZXN1bWFibGVVcGxvYWRTdGF0dXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXN1bWFibGVVcGxvYWRTdGF0dXMoY3VycmVudCwgdG90YWwsIGZpbmFsaXplZCwgbWV0YWRhdGEpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIHRoaXMudG90YWwgPSB0b3RhbDtcclxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9ICEhZmluYWxpemVkO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc3VtYWJsZVVwbG9hZFN0YXR1cztcclxufSgpKTtcclxuZnVuY3Rpb24gY2hlY2tSZXN1bWVIZWFkZXJfKHhociwgYWxsb3dlZCkge1xyXG4gICAgdmFyIHN0YXR1cyA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0YXR1cyA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1Hb29nLVVwbG9hZC1TdGF0dXMnKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHZhciBhbGxvd2VkU3RhdHVzID0gYWxsb3dlZCB8fCBbJ2FjdGl2ZSddO1xyXG4gICAgaGFuZGxlckNoZWNrKCEhc3RhdHVzICYmIGFsbG93ZWRTdGF0dXMuaW5kZXhPZihzdGF0dXMpICE9PSAtMSk7XHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVJlc3VtYWJsZVVwbG9hZChzZXJ2aWNlLCBsb2NhdGlvbiwgbWFwcGluZ3MsIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciBtZXRhZGF0YUZvclVwbG9hZCA9IG1ldGFkYXRhRm9yVXBsb2FkXyhsb2NhdGlvbiwgYmxvYiwgbWV0YWRhdGEpO1xyXG4gICAgdmFyIHVybFBhcmFtcyA9IHsgbmFtZTogbWV0YWRhdGFGb3JVcGxvYWRbJ2Z1bGxQYXRoJ10gfTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdQT1NUJztcclxuICAgIHZhciBoZWFkZXJzID0ge1xyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLVByb3RvY29sJzogJ3Jlc3VtYWJsZScsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6ICdzdGFydCcsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtSGVhZGVyLUNvbnRlbnQtTGVuZ3RoJzogYmxvYi5zaXplKCksXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtSGVhZGVyLUNvbnRlbnQtVHlwZSc6IG1ldGFkYXRhRm9yVXBsb2FkWydjb250ZW50VHlwZSddLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcclxuICAgIH07XHJcbiAgICB2YXIgYm9keSA9IHRvUmVzb3VyY2VTdHJpbmcobWV0YWRhdGFGb3JVcGxvYWQsIG1hcHBpbmdzKTtcclxuICAgIHZhciB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhocikge1xyXG4gICAgICAgIGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIpO1xyXG4gICAgICAgIHZhciB1cmw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXJsID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVVSTCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ2hlY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVyQ2hlY2soaXNTdHJpbmcodXJsKSk7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby51cmxQYXJhbXMgPSB1cmxQYXJhbXM7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5O1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG4vKipcclxuICogQHBhcmFtIHVybCBGcm9tIGEgY2FsbCB0byBmYnMucmVxdWVzdHMuY3JlYXRlUmVzdW1hYmxlVXBsb2FkLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmVzdW1hYmxlVXBsb2FkU3RhdHVzKHNlcnZpY2UsIGxvY2F0aW9uLCB1cmwsIGJsb2IpIHtcclxuICAgIHZhciBoZWFkZXJzID0geyAnWC1Hb29nLVVwbG9hZC1Db21tYW5kJzogJ3F1ZXJ5JyB9O1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlcih4aHIpIHtcclxuICAgICAgICB2YXIgc3RhdHVzID0gY2hlY2tSZXN1bWVIZWFkZXJfKHhociwgWydhY3RpdmUnLCAnZmluYWwnXSk7XHJcbiAgICAgICAgdmFyIHNpemVTdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNpemVTdHJpbmcgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtR29vZy1VcGxvYWQtU2l6ZS1SZWNlaXZlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ2hlY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpemVTdHJpbmcpIHtcclxuICAgICAgICAgICAgLy8gbnVsbCBvciBlbXB0eSBzdHJpbmdcclxuICAgICAgICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNpemUgPSBOdW1iZXIoc2l6ZVN0cmluZyk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKCFpc05hTihzaXplKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXMoc2l6ZSwgYmxvYi5zaXplKCksIHN0YXR1cyA9PT0gJ2ZpbmFsJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuLyoqXHJcbiAqIEFueSB1cGxvYWRzIHZpYSB0aGUgcmVzdW1hYmxlIHVwbG9hZCBBUEkgbXVzdCB0cmFuc2ZlciBhIG51bWJlciBvZiBieXRlc1xyXG4gKiB0aGF0IGlzIGEgbXVsdGlwbGUgb2YgdGhpcyBudW1iZXIuXHJcbiAqL1xyXG52YXIgUkVTVU1BQkxFX1VQTE9BRF9DSFVOS19TSVpFID0gMjU2ICogMTAyNDtcclxuLyoqXHJcbiAqIEBwYXJhbSB1cmwgRnJvbSBhIGNhbGwgdG8gZmJzLnJlcXVlc3RzLmNyZWF0ZVJlc3VtYWJsZVVwbG9hZC5cclxuICogQHBhcmFtIGNodW5rU2l6ZSBOdW1iZXIgb2YgYnl0ZXMgdG8gdXBsb2FkLlxyXG4gKiBAcGFyYW0gc3RhdHVzIFRoZSBwcmV2aW91cyBzdGF0dXMuXHJcbiAqICAgICBJZiBub3QgcGFzc2VkIG9yIG51bGwsIHdlIHN0YXJ0IGZyb20gdGhlIGJlZ2lubmluZy5cclxuICogQHRocm93cyBmYnMuRXJyb3IgSWYgdGhlIHVwbG9hZCBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGUgcGFzc2VkIGluIHN0YXR1c1xyXG4gKiAgICAgaGFzIGEgZmluYWwgc2l6ZSBpbmNvbnNpc3RlbnQgd2l0aCB0aGUgYmxvYiwgb3IgdGhlIGJsb2IgY2Fubm90IGJlIHNsaWNlZFxyXG4gKiAgICAgZm9yIHVwbG9hZC5cclxuICovXHJcbmZ1bmN0aW9uIGNvbnRpbnVlUmVzdW1hYmxlVXBsb2FkKGxvY2F0aW9uLCBzZXJ2aWNlLCB1cmwsIGJsb2IsIGNodW5rU2l6ZSwgbWFwcGluZ3MsIHN0YXR1cywgcHJvZ3Jlc3NDYWxsYmFjaykge1xyXG4gICAgLy8gVE9ETyhhbmR5c290byk6IHN0YW5kYXJkaXplIG9uIGludGVybmFsIGFzc2VydHNcclxuICAgIC8vIGFzc2VydCghKG9wdF9zdGF0dXMgJiYgb3B0X3N0YXR1cy5maW5hbGl6ZWQpKTtcclxuICAgIHZhciBzdGF0dXNfID0gbmV3IFJlc3VtYWJsZVVwbG9hZFN0YXR1cygwLCAwKTtcclxuICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICBzdGF0dXNfLmN1cnJlbnQgPSBzdGF0dXMuY3VycmVudDtcclxuICAgICAgICBzdGF0dXNfLnRvdGFsID0gc3RhdHVzLnRvdGFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RhdHVzXy5jdXJyZW50ID0gMDtcclxuICAgICAgICBzdGF0dXNfLnRvdGFsID0gYmxvYi5zaXplKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvYi5zaXplKCkgIT09IHN0YXR1c18udG90YWwpIHtcclxuICAgICAgICB0aHJvdyBzZXJ2ZXJGaWxlV3JvbmdTaXplKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgYnl0ZXNMZWZ0ID0gc3RhdHVzXy50b3RhbCAtIHN0YXR1c18uY3VycmVudDtcclxuICAgIHZhciBieXRlc1RvVXBsb2FkID0gYnl0ZXNMZWZ0O1xyXG4gICAgaWYgKGNodW5rU2l6ZSA+IDApIHtcclxuICAgICAgICBieXRlc1RvVXBsb2FkID0gTWF0aC5taW4oYnl0ZXNUb1VwbG9hZCwgY2h1bmtTaXplKTtcclxuICAgIH1cclxuICAgIHZhciBzdGFydEJ5dGUgPSBzdGF0dXNfLmN1cnJlbnQ7XHJcbiAgICB2YXIgZW5kQnl0ZSA9IHN0YXJ0Qnl0ZSArIGJ5dGVzVG9VcGxvYWQ7XHJcbiAgICB2YXIgdXBsb2FkQ29tbWFuZCA9IGJ5dGVzVG9VcGxvYWQgPT09IGJ5dGVzTGVmdCA/ICd1cGxvYWQsIGZpbmFsaXplJyA6ICd1cGxvYWQnO1xyXG4gICAgdmFyIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6IHVwbG9hZENvbW1hbmQsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtT2Zmc2V0Jzogc3RhdHVzXy5jdXJyZW50XHJcbiAgICB9O1xyXG4gICAgdmFyIGJvZHkgPSBibG9iLnNsaWNlKHN0YXJ0Qnl0ZSwgZW5kQnl0ZSk7XHJcbiAgICBpZiAoYm9keSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IGNhbm5vdFNsaWNlQmxvYigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlcih4aHIsIHRleHQpIHtcclxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogVmVyaWZ5IHRoZSBNRDUgb2YgZWFjaCB1cGxvYWRlZCByYW5nZTpcclxuICAgICAgICAvLyB0aGUgJ3gtcmFuZ2UtbWQ1JyBoZWFkZXIgY29tZXMgYmFjayB3aXRoIHN0YXR1cyBjb2RlIDMwOCByZXNwb25zZXMuXHJcbiAgICAgICAgLy8gV2UnbGwgb25seSBiZSBhYmxlIHRvIGJhaWwgb3V0IHRob3VnaCwgYmVjYXVzZSB5b3UgY2FuJ3QgcmUtdXBsb2FkIGFcclxuICAgICAgICAvLyByYW5nZSB0aGF0IHlvdSBwcmV2aW91c2x5IHVwbG9hZGVkLlxyXG4gICAgICAgIHZhciB1cGxvYWRTdGF0dXMgPSBjaGVja1Jlc3VtZUhlYWRlcl8oeGhyLCBbJ2FjdGl2ZScsICdmaW5hbCddKTtcclxuICAgICAgICB2YXIgbmV3Q3VycmVudCA9IHN0YXR1c18uY3VycmVudCArIGJ5dGVzVG9VcGxvYWQ7XHJcbiAgICAgICAgdmFyIHNpemUgPSBibG9iLnNpemUoKTtcclxuICAgICAgICB2YXIgbWV0YWRhdGE7XHJcbiAgICAgICAgaWYgKHVwbG9hZFN0YXR1cyA9PT0gJ2ZpbmFsJykge1xyXG4gICAgICAgICAgICBtZXRhZGF0YSA9IG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncykoeGhyLCB0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXMobmV3Q3VycmVudCwgc2l6ZSwgdXBsb2FkU3RhdHVzID09PSAnZmluYWwnLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcbiAgICB2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5LnVwbG9hZERhdGEoKTtcclxuICAgIHJlcXVlc3RJbmZvLnByb2dyZXNzQ2FsbGJhY2sgPSBwcm9ncmVzc0NhbGxiYWNrIHx8IG51bGw7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9ic2VydmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcclxuICAgICAgICB2YXIgYXNGdW5jdGlvbnMgPSBpc0Z1bmN0aW9uKG5leHRPck9ic2VydmVyKSB8fCBlcnJvciAhPSBudWxsIHx8IGNvbXBsZXRlICE9IG51bGw7XHJcbiAgICAgICAgaWYgKGFzRnVuY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IG5leHRPck9ic2VydmVyO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5leHRPck9ic2VydmVyO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQgPSBvYnNlcnZlci5uZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gb2JzZXJ2ZXIuZXJyb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBvYnNlcnZlci5jb21wbGV0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JzZXJ2ZXI7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGYgd2l0aCBpdHMgYXJndW1lbnRzIGFzeW5jaHJvbm91c2x5IGFzIGFcclxuICogbWljcm90YXNrLCBpLmUuIGFzIHNvb24gYXMgcG9zc2libGUgYWZ0ZXIgdGhlIGN1cnJlbnQgc2NyaXB0IHJldHVybnMgYmFja1xyXG4gKiBpbnRvIGJyb3dzZXIgY29kZS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmZ1bmN0aW9uIGFzeW5jKGYpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3NUb0ZvcndhcmQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzVG9Gb3J3YXJkW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYuYXBwbHkodm9pZCAwLCBhcmdzVG9Gb3J3YXJkKTsgfSk7XHJcbiAgICB9O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgYmxvYiBiZWluZyB1cGxvYWRlZC4gQ2FuIGJlIHVzZWQgdG8gcGF1c2UvcmVzdW1lL2NhbmNlbCB0aGVcclxuICogdXBsb2FkIGFuZCBtYW5hZ2UgY2FsbGJhY2tzIGZvciB2YXJpb3VzIGV2ZW50cy5cclxuICogQHB1YmxpY1xyXG4gKi9cclxudmFyIFVwbG9hZFRhc2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSByZWYgLSBUaGUgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBvYmplY3QgdGhpcyB0YXNrIGNhbWVcclxuICAgICAqICAgICBmcm9tLCB1bnR5cGVkIHRvIGF2b2lkIGN5Y2xpYyBkZXBlbmRlbmNpZXMuXHJcbiAgICAgKiBAcGFyYW0gYmxvYiAtIFRoZSBibG9iIHRvIHVwbG9hZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVXBsb2FkVGFzayhyZWYsIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAobWV0YWRhdGEgPT09IHZvaWQgMCkgeyBtZXRhZGF0YSA9IG51bGw7IH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOdW1iZXIgb2YgYnl0ZXMgdHJhbnNmZXJyZWQgc28gZmFyLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3RyYW5zZmVycmVkID0gMDtcclxuICAgICAgICB0aGlzLl9uZWVkVG9GZXRjaFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX25lZWRUb0ZldGNoTWV0YWRhdGEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vYnNlcnZlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl91cGxvYWRVcmwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9jaHVua011bHRpcGxpZXIgPSAxO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX3JlZiA9IHJlZjtcclxuICAgICAgICB0aGlzLl9ibG9iID0gYmxvYjtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgICAgIHRoaXMuX21hcHBpbmdzID0gZ2V0TWFwcGluZ3MoKTtcclxuICAgICAgICB0aGlzLl9yZXN1bWFibGUgPSB0aGlzLl9zaG91bGREb1Jlc3VtYWJsZSh0aGlzLl9ibG9iKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFwicnVubmluZ1wiIC8qIFJVTk5JTkcgKi87XHJcbiAgICAgICAgdGhpcy5fZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBfdGhpcy5fY2h1bmtNdWx0aXBsaWVyID0gMTtcclxuICAgICAgICAgICAgaWYgKGVycm9yLl9jb2RlRXF1YWxzKFwiY2FuY2VsZWRcIiAvKiBDQU5DRUxFRCAqLykpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9uZWVkVG9GZXRjaFN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2Vycm9yID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fdHJhbnNpdGlvbihcImVycm9yXCIgLyogRVJST1IgKi8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YUVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKGVycm9yLl9jb2RlRXF1YWxzKFwiY2FuY2VsZWRcIiAvKiBDQU5DRUxFRCAqLykpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIF90aGlzLl90cmFuc2l0aW9uKFwiZXJyb3JcIiAvKiBFUlJPUiAqLyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgX3RoaXMuX3JlamVjdCA9IHJlamVjdDtcclxuICAgICAgICAgICAgX3RoaXMuX3N0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gUHJldmVudCB1bmNhdWdodCByZWplY3Rpb25zIG9uIHRoZSBpbnRlcm5hbCBwcm9taXNlIGZyb20gYnViYmxpbmcgb3V0XHJcbiAgICAgICAgLy8gdG8gdGhlIHRvcCBsZXZlbCB3aXRoIGEgZHVtbXkgaGFuZGxlci5cclxuICAgICAgICB0aGlzLl9wcm9taXNlLnRoZW4obnVsbCwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH1cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLl9tYWtlUHJvZ3Jlc3NDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzaXplQmVmb3JlID0gdGhpcy5fdHJhbnNmZXJyZWQ7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChsb2FkZWQpIHsgcmV0dXJuIF90aGlzLl91cGRhdGVQcm9ncmVzcyhzaXplQmVmb3JlICsgbG9hZGVkKTsgfTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5fc2hvdWxkRG9SZXN1bWFibGUgPSBmdW5jdGlvbiAoYmxvYikge1xyXG4gICAgICAgIHJldHVybiBibG9iLnNpemUoKSA+IDI1NiAqIDEwMjQ7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuX3N0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gXCJydW5uaW5nXCIgLyogUlVOTklORyAqLykge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgc29tZW9uZSBwYXVzZXMgdXMgaW4gYSByZXN1bWUgY2FsbGJhY2ssIGZvciBleGFtcGxlLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcmVzdW1hYmxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl91cGxvYWRVcmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlUmVzdW1hYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmVlZFRvRmV0Y2hTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mZXRjaFN0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25lZWRUb0ZldGNoTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFwcGVucyBpZiB3ZSBtaXNzIHRoZSBtZXRhZGF0YSBvbiB1cGxvYWQgY29tcGxldGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmV0Y2hNZXRhZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGludWVVcGxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uZVNob3RVcGxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuX3Jlc29sdmVUb2tlbiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMuX3JlZi5zdG9yYWdlLl9nZXRBdXRoVG9rZW4oKS50aGVuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfdGhpcy5fc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJydW5uaW5nXCIgLyogUlVOTklORyAqLzpcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhhdXRoVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNhbmNlbGluZ1wiIC8qIENBTkNFTElORyAqLzpcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fdHJhbnNpdGlvbihcImNhbmNlbGVkXCIgLyogQ0FOQ0VMRUQgKi8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInBhdXNpbmdcIiAvKiBQQVVTSU5HICovOlxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl90cmFuc2l0aW9uKFwicGF1c2VkXCIgLyogUEFVU0VEICovKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vIFRPRE8oYW5keXNvdG8pOiBhc3NlcnQgZmFsc2VcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLl9jcmVhdGVSZXN1bWFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9yZXNvbHZlVG9rZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBjcmVhdGVSZXN1bWFibGVVcGxvYWQoX3RoaXMuX3JlZi5zdG9yYWdlLCBfdGhpcy5fcmVmLl9sb2NhdGlvbiwgX3RoaXMuX21hcHBpbmdzLCBfdGhpcy5fYmxvYiwgX3RoaXMuX21ldGFkYXRhKTtcclxuICAgICAgICAgICAgdmFyIGNyZWF0ZVJlcXVlc3QgPSBfdGhpcy5fcmVmLnN0b3JhZ2UuX21ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pO1xyXG4gICAgICAgICAgICBfdGhpcy5fcmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3Q7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fdXBsb2FkVXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX25lZWRUb0ZldGNoU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xyXG4gICAgICAgICAgICB9LCBfdGhpcy5fZXJyb3JIYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5fZmV0Y2hTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KHRoaXMudXBsb2FkVXJsXyAhPT0gbnVsbCk7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX3VwbG9hZFVybDtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlVG9rZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBnZXRSZXN1bWFibGVVcGxvYWRTdGF0dXMoX3RoaXMuX3JlZi5zdG9yYWdlLCBfdGhpcy5fcmVmLl9sb2NhdGlvbiwgdXJsLCBfdGhpcy5fYmxvYik7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNSZXF1ZXN0ID0gX3RoaXMuX3JlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKTtcclxuICAgICAgICAgICAgX3RoaXMuX3JlcXVlc3QgPSBzdGF0dXNSZXF1ZXN0O1xyXG4gICAgICAgICAgICBzdGF0dXNSZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIF90aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZVByb2dyZXNzKHN0YXR1cy5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9uZWVkVG9GZXRjaFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbmVlZFRvRmV0Y2hNZXRhZGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xyXG4gICAgICAgICAgICB9LCBfdGhpcy5fZXJyb3JIYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5fY29udGludWVVcGxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgY2h1bmtTaXplID0gUkVTVU1BQkxFX1VQTE9BRF9DSFVOS19TSVpFICogdGhpcy5fY2h1bmtNdWx0aXBsaWVyO1xyXG4gICAgICAgIHZhciBzdGF0dXMgPSBuZXcgUmVzdW1hYmxlVXBsb2FkU3RhdHVzKHRoaXMuX3RyYW5zZmVycmVkLCB0aGlzLl9ibG9iLnNpemUoKSk7XHJcbiAgICAgICAgLy8gVE9ETyhhbmR5c290byk6IGFzc2VydCh0aGlzLnVwbG9hZFVybF8gIT09IG51bGwpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLl91cGxvYWRVcmw7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZVRva2VuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEluZm8gPSBjb250aW51ZVJlc3VtYWJsZVVwbG9hZChfdGhpcy5fcmVmLl9sb2NhdGlvbiwgX3RoaXMuX3JlZi5zdG9yYWdlLCB1cmwsIF90aGlzLl9ibG9iLCBjaHVua1NpemUsIF90aGlzLl9tYXBwaW5ncywgc3RhdHVzLCBfdGhpcy5fbWFrZVByb2dyZXNzQ2FsbGJhY2soKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvciA9IGU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fdHJhbnNpdGlvbihcImVycm9yXCIgLyogRVJST1IgKi8pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB1cGxvYWRSZXF1ZXN0ID0gX3RoaXMuX3JlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKTtcclxuICAgICAgICAgICAgX3RoaXMuX3JlcXVlc3QgPSB1cGxvYWRSZXF1ZXN0O1xyXG4gICAgICAgICAgICB1cGxvYWRSZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKGZ1bmN0aW9uIChuZXdTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9pbmNyZWFzZU11bHRpcGxpZXIoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZVByb2dyZXNzKG5ld1N0YXR1cy5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0dXMuZmluYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21ldGFkYXRhID0gbmV3U3RhdHVzLm1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl90cmFuc2l0aW9uKFwic3VjY2Vzc1wiIC8qIFNVQ0NFU1MgKi8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgX3RoaXMuX2Vycm9ySGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuX2luY3JlYXNlTXVsdGlwbGllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VycmVudFNpemUgPSBSRVNVTUFCTEVfVVBMT0FEX0NIVU5LX1NJWkUgKiB0aGlzLl9jaHVua011bHRpcGxpZXI7XHJcbiAgICAgICAgLy8gTWF4IGNodW5rIHNpemUgaXMgMzJNLlxyXG4gICAgICAgIGlmIChjdXJyZW50U2l6ZSA8IDMyICogMTAyNCAqIDEwMjQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2h1bmtNdWx0aXBsaWVyICo9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLl9mZXRjaE1ldGFkYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZVRva2VuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gZ2V0TWV0YWRhdGEoX3RoaXMuX3JlZi5zdG9yYWdlLCBfdGhpcy5fcmVmLl9sb2NhdGlvbiwgX3RoaXMuX21hcHBpbmdzKTtcclxuICAgICAgICAgICAgdmFyIG1ldGFkYXRhUmVxdWVzdCA9IF90aGlzLl9yZWYuc3RvcmFnZS5fbWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgIF90aGlzLl9yZXF1ZXN0ID0gbWV0YWRhdGFSZXF1ZXN0O1xyXG4gICAgICAgICAgICBtZXRhZGF0YVJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3RyYW5zaXRpb24oXCJzdWNjZXNzXCIgLyogU1VDQ0VTUyAqLyk7XHJcbiAgICAgICAgICAgIH0sIF90aGlzLl9tZXRhZGF0YUVycm9ySGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuX29uZVNob3RVcGxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9yZXNvbHZlVG9rZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBtdWx0aXBhcnRVcGxvYWQoX3RoaXMuX3JlZi5zdG9yYWdlLCBfdGhpcy5fcmVmLl9sb2NhdGlvbiwgX3RoaXMuX21hcHBpbmdzLCBfdGhpcy5fYmxvYiwgX3RoaXMuX21ldGFkYXRhKTtcclxuICAgICAgICAgICAgdmFyIG11bHRpcGFydFJlcXVlc3QgPSBfdGhpcy5fcmVmLnN0b3JhZ2UuX21ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pO1xyXG4gICAgICAgICAgICBfdGhpcy5fcmVxdWVzdCA9IG11bHRpcGFydFJlcXVlc3Q7XHJcbiAgICAgICAgICAgIG11bHRpcGFydFJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZVByb2dyZXNzKF90aGlzLl9ibG9iLnNpemUoKSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fdHJhbnNpdGlvbihcInN1Y2Nlc3NcIiAvKiBTVUNDRVNTICovKTtcclxuICAgICAgICAgICAgfSwgX3RoaXMuX2Vycm9ySGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuX3VwZGF0ZVByb2dyZXNzID0gZnVuY3Rpb24gKHRyYW5zZmVycmVkKSB7XHJcbiAgICAgICAgdmFyIG9sZCA9IHRoaXMuX3RyYW5zZmVycmVkO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zZmVycmVkID0gdHJhbnNmZXJyZWQ7XHJcbiAgICAgICAgLy8gQSBwcm9ncmVzcyB1cGRhdGUgY2FuIG1ha2UgdGhlIFwidHJhbnNmZXJyZWRcIiB2YWx1ZSBzbWFsbGVyIChlLmcuIGFcclxuICAgICAgICAvLyBwYXJ0aWFsIHVwbG9hZCBub3QgY29tcGxldGVkIGJ5IHNlcnZlciwgYWZ0ZXIgd2hpY2ggdGhlIFwidHJhbnNmZXJyZWRcIlxyXG4gICAgICAgIC8vIHZhbHVlIG1heSByZXNldCB0byB0aGUgdmFsdWUgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgcmVxdWVzdCkuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zZmVycmVkICE9PSBvbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLl90cmFuc2l0aW9uID0gZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNhbmNlbGluZ1wiIC8qIENBTkNFTElORyAqLzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1ZXN0LmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXVzaW5nXCIgLyogUEFVU0lORyAqLzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWVzdC5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicnVubmluZ1wiIC8qIFJVTk5JTkcgKi86XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdhc1BhdXNlZCA9IHRoaXMuX3N0YXRlID09PSBcInBhdXNlZFwiIC8qIFBBVVNFRCAqLztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAod2FzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGF1c2VkXCIgLyogUEFVU0VEICovOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxlZFwiIC8qIENBTkNFTEVEICovOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNFRCB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBjYW5jZWxlZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlcnJvclwiIC8qIEVSUk9SICovOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdWNjZXNzXCIgLyogU1VDQ0VTUyAqLzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcnMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5jb21wbGV0ZVRyYW5zaXRpb25zXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXVzaW5nXCIgLyogUEFVU0lORyAqLzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24oXCJwYXVzZWRcIiAvKiBQQVVTRUQgKi8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxpbmdcIiAvKiBDQU5DRUxJTkcgKi86XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwiY2FuY2VsZWRcIiAvKiBDQU5DRUxFRCAqLyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJ1bm5pbmdcIiAvKiBSVU5OSU5HICovOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVXBsb2FkVGFzay5wcm90b3R5cGUsIFwic25hcHNob3RcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgc25hcHNob3Qgb2YgdGhlIGN1cnJlbnQgdGFzayBzdGF0ZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGV4dGVybmFsU3RhdGUgPSB0YXNrU3RhdGVGcm9tSW50ZXJuYWxUYXNrU3RhdGUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYnl0ZXNUcmFuc2ZlcnJlZDogdGhpcy5fdHJhbnNmZXJyZWQsXHJcbiAgICAgICAgICAgICAgICB0b3RhbEJ5dGVzOiB0aGlzLl9ibG9iLnNpemUoKSxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBleHRlcm5hbFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHRoaXMuX21ldGFkYXRhLFxyXG4gICAgICAgICAgICAgICAgdGFzazogdGhpcyxcclxuICAgICAgICAgICAgICAgIHJlZjogdGhpcy5fcmVmXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgY2FsbGJhY2sgZm9yIGFuIGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHR5cGUgLSBUaGUgdHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLlxyXG4gICAgICogQHBhcmFtIG5leHRPck9ic2VydmVyIC1cclxuICAgICAqICAgICBUaGUgYG5leHRgIGZ1bmN0aW9uLCB3aGljaCBnZXRzIGNhbGxlZCBmb3IgZWFjaCBpdGVtIGluXHJcbiAgICAgKiAgICAgdGhlIGV2ZW50IHN0cmVhbSwgb3IgYW4gb2JzZXJ2ZXIgb2JqZWN0IHdpdGggc29tZSBvciBhbGwgb2YgdGhlc2UgdGhyZWVcclxuICAgICAqICAgICBwcm9wZXJ0aWVzIChgbmV4dGAsIGBlcnJvcmAsIGBjb21wbGV0ZWApLlxyXG4gICAgICogQHBhcmFtIGVycm9yIC0gQSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdpdGggYSBgRmlyZWJhc2VTdG9yYWdlRXJyb3JgXHJcbiAgICAgKiAgICAgaWYgdGhlIGV2ZW50IHN0cmVhbSBlbmRzIGR1ZSB0byBhbiBlcnJvci5cclxuICAgICAqIEBwYXJhbSBjb21wbGV0ZWQgLSBBIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgaWYgdGhlXHJcbiAgICAgKiAgICAgZXZlbnQgc3RyZWFtIGVuZHMgbm9ybWFsbHkuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogICAgIElmIG9ubHkgdGhlIGV2ZW50IGFyZ3VtZW50IGlzIHBhc3NlZCwgcmV0dXJucyBhIGZ1bmN0aW9uIHlvdSBjYW4gdXNlIHRvXHJcbiAgICAgKiAgICAgYWRkIGNhbGxiYWNrcyAoc2VlIHRoZSBleGFtcGxlcyBhYm92ZSkuIElmIG1vcmUgdGhhbiBqdXN0IHRoZSBldmVudFxyXG4gICAgICogICAgIGFyZ3VtZW50IGlzIHBhc3NlZCwgcmV0dXJucyBhIGZ1bmN0aW9uIHlvdSBjYW4gY2FsbCB0byB1bnJlZ2lzdGVyIHRoZVxyXG4gICAgICogICAgIGNhbGxiYWNrcy5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAodHlwZSwgbmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBPYnNlcnZlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlZCk7XHJcbiAgICAgICAgdGhpcy5fYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9yZW1vdmVPYnNlcnZlcihvYnNlcnZlcik7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgb2JqZWN0IGJlaGF2ZXMgbGlrZSBhIFByb21pc2UsIGFuZCByZXNvbHZlcyB3aXRoIGl0cyBzbmFwc2hvdCBkYXRhXHJcbiAgICAgKiB3aGVuIHRoZSB1cGxvYWQgY29tcGxldGVzLlxyXG4gICAgICogQHBhcmFtIG9uRnVsZmlsbGVkIC0gVGhlIGZ1bGZpbGxtZW50IGNhbGxiYWNrLiBQcm9taXNlIGNoYWluaW5nIHdvcmtzIGFzIG5vcm1hbC5cclxuICAgICAqIEBwYXJhbSBvblJlamVjdGVkIC0gVGhlIHJlamVjdGlvbiBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xyXG4gICAgICAgIC8vIFRoZXNlIGNhc3RzIGFyZSBuZWVkZWQgc28gdGhhdCBUeXBlU2NyaXB0IGNhbiBpbmZlciB0aGUgdHlwZXMgb2YgdGhlXHJcbiAgICAgICAgLy8gcmVzdWx0aW5nIFByb21pc2UuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFcXVpdmFsZW50IHRvIGNhbGxpbmcgYHRoZW4obnVsbCwgb25SZWplY3RlZClgLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIGdpdmVuIG9ic2VydmVyLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5fYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLl9vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXIob2JzZXJ2ZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gb2JzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLl9yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHZhciBpID0gdGhpcy5fb2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgIGlmIChpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5fbm90aWZ5T2JzZXJ2ZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fZmluaXNoUHJvbWlzZSgpO1xyXG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLl9vYnNlcnZlcnMuc2xpY2UoKTtcclxuICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgX3RoaXMuX25vdGlmeU9ic2VydmVyKG9ic2VydmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5fZmluaXNoUHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcmVzb2x2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLl9zdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlNVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmModGhpcy5fcmVzb2x2ZS5iaW5kKG51bGwsIHRoaXMuc25hcHNob3QpKSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuQ0FOQ0VMRUQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5FUlJPUjpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9DYWxsID0gdGhpcy5fcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKHRvQ2FsbC5iaW5kKG51bGwsIHRoaXMuX2Vycm9yKSkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRyaWdnZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5fbm90aWZ5T2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICB2YXIgZXh0ZXJuYWxTdGF0ZSA9IHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3dpdGNoIChleHRlcm5hbFN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlJVTk5JTkc6XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlBBVVNFRDpcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyLCB0aGlzLnNuYXBzaG90KSkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIuY29tcGxldGUuYmluZChvYnNlcnZlcikpKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuQ0FOQ0VMRUQ6XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLkVSUk9SOlxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciwgdGhpcy5fZXJyb3IpKSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlci5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIsIHRoaXMuX2Vycm9yKSkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN1bWVzIGEgcGF1c2VkIHRhc2suIEhhcyBubyBlZmZlY3Qgb24gYSBjdXJyZW50bHkgcnVubmluZyBvciBmYWlsZWQgdGFzay5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHRoaXMuX3N0YXRlID09PSBcInBhdXNlZFwiIC8qIFBBVVNFRCAqLyB8fFxyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9PT0gXCJwYXVzaW5nXCIgLyogUEFVU0lORyAqLztcclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcInJ1bm5pbmdcIiAvKiBSVU5OSU5HICovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUGF1c2VzIGEgY3VycmVudGx5IHJ1bm5pbmcgdGFzay4gSGFzIG5vIGVmZmVjdCBvbiBhIHBhdXNlZCBvciBmYWlsZWQgdGFzay5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkID0gdGhpcy5fc3RhdGUgPT09IFwicnVubmluZ1wiIC8qIFJVTk5JTkcgKi87XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24oXCJwYXVzaW5nXCIgLyogUEFVU0lORyAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbmNlbHMgYSBjdXJyZW50bHkgcnVubmluZyBvciBwYXVzZWQgdGFzay4gSGFzIG5vIGVmZmVjdCBvbiBhIGNvbXBsZXRlIG9yXHJcbiAgICAgKiBmYWlsZWQgdGFzay5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHRoaXMuX3N0YXRlID09PSBcInJ1bm5pbmdcIiAvKiBSVU5OSU5HICovIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID09PSBcInBhdXNpbmdcIiAvKiBQQVVTSU5HICovO1xyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwiY2FuY2VsaW5nXCIgLyogQ0FOQ0VMSU5HICovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBVcGxvYWRUYXNrO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUHJvdmlkZXMgbWV0aG9kcyB0byBpbnRlcmFjdCB3aXRoIGEgYnVja2V0IGluIHRoZSBGaXJlYmFzZSBTdG9yYWdlIHNlcnZpY2UuXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIF9sb2NhdGlvbiAtIEFuIGZicy5sb2NhdGlvbiwgb3IgdGhlIFVSTCBhdFxyXG4gKiAgICAgd2hpY2ggdG8gYmFzZSB0aGlzIG9iamVjdCwgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybXM6XHJcbiAqICAgICAgICAgZ3M6Ly88YnVja2V0Pi88b2JqZWN0LXBhdGg+XHJcbiAqICAgICAgICAgaHR0cFtzXTovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9cclxuICogICAgICAgICAgICAgICAgICAgICA8YXBpLXZlcnNpb24+L2IvPGJ1Y2tldD4vby88b2JqZWN0LXBhdGg+XHJcbiAqICAgICBBbnkgcXVlcnkgb3IgZnJhZ21lbnQgc3RyaW5ncyB3aWxsIGJlIGlnbm9yZWQgaW4gdGhlIGh0dHBbc11cclxuICogICAgIGZvcm1hdC4gSWYgbm8gdmFsdWUgaXMgcGFzc2VkLCB0aGUgc3RvcmFnZSBvYmplY3Qgd2lsbCB1c2UgYSBVUkwgYmFzZWQgb25cclxuICogICAgIHRoZSBwcm9qZWN0IElEIG9mIHRoZSBiYXNlIGZpcmViYXNlLkFwcCBpbnN0YW5jZS5cclxuICovXHJcbnZhciBSZWZlcmVuY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWZlcmVuY2UoX3NlcnZpY2UsIGxvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IF9zZXJ2aWNlO1xyXG4gICAgICAgIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2NhdGlvbiA9IExvY2F0aW9uLm1ha2VGcm9tVXJsKGxvY2F0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIFVSTCBmb3IgdGhlIGJ1Y2tldCBhbmQgcGF0aCB0aGlzIG9iamVjdCByZWZlcmVuY2VzLFxyXG4gICAgICogICAgIGluIHRoZSBmb3JtIGdzOi8vPGJ1Y2tldD4vPG9iamVjdC1wYXRoPlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICdnczovLycgKyB0aGlzLl9sb2NhdGlvbi5idWNrZXQgKyAnLycgKyB0aGlzLl9sb2NhdGlvbi5wYXRoO1xyXG4gICAgfTtcclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUuX25ld1JlZiA9IGZ1bmN0aW9uIChzZXJ2aWNlLCBsb2NhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlKHNlcnZpY2UsIGxvY2F0aW9uKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJyb290XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBvZiB0aGlzIG9iamVjdCdzIGJ1Y2tldC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMuX2xvY2F0aW9uLmJ1Y2tldCwgJycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmV3UmVmKHRoaXMuX3NlcnZpY2UsIGxvY2F0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJidWNrZXRcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBidWNrZXQgY29udGFpbmluZyB0aGlzIHJlZmVyZW5jZSdzIG9iamVjdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uLmJ1Y2tldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJmdWxsUGF0aFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGZ1bGwgcGF0aCBvZiB0aGlzIG9iamVjdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uLnBhdGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZmVyZW5jZS5wcm90b3R5cGUsIFwibmFtZVwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHNob3J0IG5hbWUgb2YgdGhpcyBvYmplY3QsIHdoaWNoIGlzIHRoZSBsYXN0IGNvbXBvbmVudCBvZiB0aGUgZnVsbCBwYXRoLlxyXG4gICAgICAgICAqIEZvciBleGFtcGxlLCBpZiBmdWxsUGF0aCBpcyAnZnVsbC9wYXRoL2ltYWdlLnBuZycsIG5hbWUgaXMgJ2ltYWdlLnBuZycuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXN0Q29tcG9uZW50KHRoaXMuX2xvY2F0aW9uLnBhdGgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWZlcmVuY2UucHJvdG90eXBlLCBcInN0b3JhZ2VcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBgU3RvcmFnZVNlcnZpY2VgIGluc3RhbmNlIHRoaXMgYFN0b3JhZ2VSZWZlcmVuY2VgIGlzIGFzc29jaWF0ZWQgd2l0aC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZmVyZW5jZS5wcm90b3R5cGUsIFwicGFyZW50XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGBTdG9yYWdlUmVmZXJlbmNlYCBwb2ludGluZyB0byB0aGUgcGFyZW50IGxvY2F0aW9uIG9mIHRoaXMgYFN0b3JhZ2VSZWZlcmVuY2VgLCBvciBudWxsIGlmXHJcbiAgICAgICAgICogdGhpcyByZWZlcmVuY2UgaXMgdGhlIHJvb3QuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdQYXRoID0gcGFyZW50KHRoaXMuX2xvY2F0aW9uLnBhdGgpO1xyXG4gICAgICAgICAgICBpZiAobmV3UGF0aCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMuX2xvY2F0aW9uLmJ1Y2tldCwgbmV3UGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlKHRoaXMuX3NlcnZpY2UsIGxvY2F0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gdGhyb3cgYW4gZXJyb3IgaW4gbWV0aG9kcyB0aGF0IGRvIG5vdCBhY2NlcHQgYSByb290IHJlZmVyZW5jZS5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS5fdGhyb3dJZlJvb3QgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2NhdGlvbi5wYXRoID09PSAnJykge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnZhbGlkUm9vdE9wZXJhdGlvbihuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlZmVyZW5jZTtcclxufSgpKTtcclxuLyoqXHJcbiAqIFVwbG9hZHMgZGF0YSB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxyXG4gKiBUaGUgdXBsb2FkIGNhbiBiZSBwYXVzZWQgYW5kIHJlc3VtZWQsIGFuZCBleHBvc2VzIHByb2dyZXNzIHVwZGF0ZXMuXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2Ugd2hlcmUgZGF0YSBzaG91bGQgYmUgdXBsb2FkZWQuXHJcbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gdXBsb2FkLlxyXG4gKiBAcGFyYW0gbWV0YWRhdGEgLSBNZXRhZGF0YSBmb3IgdGhlIG5ld2x5IHVwbG9hZGVkIGRhdGEuXHJcbiAqIEByZXR1cm5zIEFuIFVwbG9hZFRhc2tcclxuICovXHJcbmZ1bmN0aW9uIHVwbG9hZEJ5dGVzUmVzdW1hYmxlKHJlZiwgZGF0YSwgbWV0YWRhdGEpIHtcclxuICAgIHJlZi5fdGhyb3dJZlJvb3QoJ3VwbG9hZEJ5dGVzUmVzdW1hYmxlJyk7XHJcbiAgICByZXR1cm4gbmV3IFVwbG9hZFRhc2socmVmLCBuZXcgRmJzQmxvYihkYXRhKSwgbWV0YWRhdGEpO1xyXG59XHJcbi8qKlxyXG4gKiBMaXN0IGFsbCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cclxuICpcclxuICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgZm9yIGNhbGxpbmcgbGlzdCgpIHJlcGVhdGVkbHkgdW50aWwgdGhlcmUgYXJlXHJcbiAqIG5vIG1vcmUgcmVzdWx0cy4gVGhlIGRlZmF1bHQgcGFnaW5hdGlvbiBzaXplIGlzIDEwMDAuXHJcbiAqXHJcbiAqIE5vdGU6IFRoZSByZXN1bHRzIG1heSBub3QgYmUgY29uc2lzdGVudCBpZiBvYmplY3RzIGFyZSBjaGFuZ2VkIHdoaWxlIHRoaXNcclxuICogb3BlcmF0aW9uIGlzIHJ1bm5pbmcuXHJcbiAqXHJcbiAqIFdhcm5pbmc6IGxpc3RBbGwgbWF5IHBvdGVudGlhbGx5IGNvbnN1bWUgdG9vIG1hbnkgcmVzb3VyY2VzIGlmIHRoZXJlIGFyZVxyXG4gKiB0b28gbWFueSByZXN1bHRzLlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHRvIGdldCBsaXN0IGZyb20uXHJcbiAqXHJcbiAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYWxsIHRoZSBpdGVtcyBhbmQgcHJlZml4ZXMgdW5kZXJcclxuICogICAgICB0aGUgY3VycmVudCBzdG9yYWdlIHJlZmVyZW5jZS4gYHByZWZpeGVzYCBjb250YWlucyByZWZlcmVuY2VzIHRvXHJcbiAqICAgICAgc3ViLWRpcmVjdG9yaWVzIGFuZCBgaXRlbXNgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiB0aGlzXHJcbiAqICAgICAgZm9sZGVyLiBgbmV4dFBhZ2VUb2tlbmAgaXMgbmV2ZXIgcmV0dXJuZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBsaXN0QWxsKHJlZikge1xyXG4gICAgdmFyIGFjY3VtdWxhdG9yID0ge1xyXG4gICAgICAgIHByZWZpeGVzOiBbXSxcclxuICAgICAgICBpdGVtczogW11cclxuICAgIH07XHJcbiAgICByZXR1cm4gbGlzdEFsbEhlbHBlcihyZWYsIGFjY3VtdWxhdG9yKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFjY3VtdWxhdG9yOyB9KTtcclxufVxyXG4vKipcclxuICogU2VwYXJhdGVkIGZyb20gbGlzdEFsbCBiZWNhdXNlIGFzeW5jIGZ1bmN0aW9ucyBjYW4ndCB1c2UgXCJhcmd1bWVudHNcIi5cclxuICogQHBhcmFtIHJlZlxyXG4gKiBAcGFyYW0gYWNjdW11bGF0b3JcclxuICogQHBhcmFtIHBhZ2VUb2tlblxyXG4gKi9cclxuZnVuY3Rpb24gbGlzdEFsbEhlbHBlcihyZWYsIGFjY3VtdWxhdG9yLCBwYWdlVG9rZW4pIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3B0LCBuZXh0UGFnZTtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4UmVzdWx0cyBpcyAxMDAwIGJ5IGRlZmF1bHQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VUb2tlbjogcGFnZVRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBsaXN0JDEocmVmLCBvcHQpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBhY2N1bXVsYXRvci5wcmVmaXhlcykucHVzaC5hcHBseShfYSwgbmV4dFBhZ2UucHJlZml4ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIChfYiA9IGFjY3VtdWxhdG9yLml0ZW1zKS5wdXNoLmFwcGx5KF9iLCBuZXh0UGFnZS5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEobmV4dFBhZ2UubmV4dFBhZ2VUb2tlbiAhPSBudWxsKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbGlzdEFsbEhlbHBlcihyZWYsIGFjY3VtdWxhdG9yLCBuZXh0UGFnZS5uZXh0UGFnZVRva2VuKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4vKipcclxuICogTGlzdCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cclxuICpcclxuICogTGlzdCBBUEkgaXMgb25seSBhdmFpbGFibGUgZm9yIEZpcmViYXNlIFJ1bGVzIFZlcnNpb24gMi5cclxuICpcclxuICogR0NTIGlzIGEga2V5LWJsb2Igc3RvcmUuIEZpcmViYXNlIFN0b3JhZ2UgaW1wb3NlcyB0aGUgc2VtYW50aWMgb2YgJy8nXHJcbiAqIGRlbGltaXRlZCBmb2xkZXIgc3RydWN0dXJlLlxyXG4gKiBSZWZlciB0byBHQ1MncyBMaXN0IEFQSSBpZiB5b3Ugd2FudCB0byBsZWFybiBtb3JlLlxyXG4gKlxyXG4gKiBUbyBhZGhlcmUgdG8gRmlyZWJhc2UgUnVsZXMncyBTZW1hbnRpY3MsIEZpcmViYXNlIFN0b3JhZ2UgZG9lcyBub3RcclxuICogc3VwcG9ydCBvYmplY3RzIHdob3NlIHBhdGhzIGVuZCB3aXRoIFwiL1wiIG9yIGNvbnRhaW4gdHdvIGNvbnNlY3V0aXZlXHJcbiAqIFwiL1wicy4gRmlyZWJhc2UgU3RvcmFnZSBMaXN0IEFQSSB3aWxsIGZpbHRlciB0aGVzZSB1bnN1cHBvcnRlZCBvYmplY3RzLlxyXG4gKiBsaXN0KCkgbWF5IGZhaWwgaWYgdGhlcmUgYXJlIHRvbyBtYW55IHVuc3VwcG9ydGVkIG9iamVjdHMgaW4gdGhlIGJ1Y2tldC5cclxuICogQHB1YmxpY1xyXG4gKlxyXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB0byBnZXQgbGlzdCBmcm9tLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFNlZSBMaXN0T3B0aW9ucyBmb3IgZGV0YWlscy5cclxuICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgaXRlbXMgYW5kIHByZWZpeGVzLlxyXG4gKiAgICAgIGBwcmVmaXhlc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0byBzdWItZm9sZGVycyBhbmQgYGl0ZW1zYFxyXG4gKiAgICAgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiB0aGlzIGZvbGRlci4gYG5leHRQYWdlVG9rZW5gXHJcbiAqICAgICAgY2FuIGJlIHVzZWQgdG8gZ2V0IHRoZSByZXN0IG9mIHRoZSByZXN1bHRzLlxyXG4gKi9cclxuZnVuY3Rpb24gbGlzdCQxKHJlZiwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhdXRoVG9rZW4sIG9wLCByZXF1ZXN0SW5mbztcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tYXhSZXN1bHRzID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVOdW1iZXIoJ29wdGlvbnMubWF4UmVzdWx0cycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbWluVmFsdWU9ICovIDEsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbWF4VmFsdWU9ICovIDEwMDAsIG9wdGlvbnMubWF4UmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVmLnN0b3JhZ2UuX2dldEF1dGhUb2tlbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBhdXRoVG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJbmZvID0gbGlzdChyZWYuc3RvcmFnZSwgcmVmLl9sb2NhdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgLypkZWxpbWl0ZXI9ICovICcvJywgb3AucGFnZVRva2VuLCBvcC5tYXhSZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVmLnN0b3JhZ2UuX21ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pLmdldFByb21pc2UoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuIElmIHRoaXNcclxuICogb2JqZWN0IGRvZXNuJ3QgZXhpc3Qgb3IgbWV0YWRhdGEgY2Fubm90IGJlIHJldHJlaXZlZCwgdGhlIHByb21pc2UgaXNcclxuICogcmVqZWN0ZWQuXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2UgdG8gZ2V0IG1ldGFkYXRhIGZyb20uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNZXRhZGF0YSQxKHJlZikge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhdXRoVG9rZW4sIHJlcXVlc3RJbmZvO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZi5fdGhyb3dJZlJvb3QoJ2dldE1ldGFkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVmLnN0b3JhZ2UuX2dldEF1dGhUb2tlbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBhdXRoVG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEluZm8gPSBnZXRNZXRhZGF0YShyZWYuc3RvcmFnZSwgcmVmLl9sb2NhdGlvbiwgZ2V0TWFwcGluZ3MoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKS5nZXRQcm9taXNlKCldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4vKipcclxuICogVXBkYXRlcyB0aGUgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHRvIHVwZGF0ZSBtZXRhZGF0YSBmb3IuXHJcbiAqIEBwYXJhbSBtZXRhZGF0YSAtIFRoZSBuZXcgbWV0YWRhdGEgZm9yIHRoZSBvYmplY3QuXHJcbiAqICAgICBPbmx5IHZhbHVlcyB0aGF0IGhhdmUgYmVlbiBleHBsaWNpdGx5IHNldCB3aWxsIGJlIGNoYW5nZWQuIEV4cGxpY2l0bHlcclxuICogICAgIHNldHRpbmcgYSB2YWx1ZSB0byBudWxsIHdpbGwgcmVtb3ZlIHRoZSBtZXRhZGF0YS5cclxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXNcclxuICogICAgIHdpdGggdGhlIG5ldyBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuXHJcbiAqICAgICBTZWUgYGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UucHJvdG90eXBlLmdldE1ldGFkYXRhYFxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlTWV0YWRhdGEkMShyZWYsIG1ldGFkYXRhKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGF1dGhUb2tlbiwgcmVxdWVzdEluZm87XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmLl90aHJvd0lmUm9vdCgndXBkYXRlTWV0YWRhdGEnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWYuc3RvcmFnZS5fZ2V0QXV0aFRva2VuKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhUb2tlbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SW5mbyA9IHVwZGF0ZU1ldGFkYXRhKHJlZi5zdG9yYWdlLCByZWYuX2xvY2F0aW9uLCBtZXRhZGF0YSwgZ2V0TWFwcGluZ3MoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKS5nZXRQcm9taXNlKCldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZG93bmxvYWQgVVJMIGZvciB0aGUgZ2l2ZW4gUmVmZXJlbmNlLlxyXG4gKiBAcHVibGljXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRvd25sb2FkXHJcbiAqICAgICBVUkwgZm9yIHRoaXMgb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RG93bmxvYWRVUkwocmVmKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGF1dGhUb2tlbiwgcmVxdWVzdEluZm87XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmLl90aHJvd0lmUm9vdCgnZ2V0RG93bmxvYWRVUkwnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWYuc3RvcmFnZS5fZ2V0QXV0aFRva2VuKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhUb2tlbiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SW5mbyA9IGdldERvd25sb2FkVXJsKHJlZi5zdG9yYWdlLCByZWYuX2xvY2F0aW9uLCBnZXRNYXBwaW5ncygpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVmLnN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5fbWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRQcm9taXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBub0Rvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKiBEZWxldGVzIHRoZSBvYmplY3QgYXQgdGhpcyBsb2NhdGlvbi5cclxuICogQHB1YmxpY1xyXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSBmb3Igb2JqZWN0IHRvIGRlbGV0ZS5cclxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGRlbGV0aW9uIHN1Y2NlZWRzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0JDEocmVmKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGF1dGhUb2tlbiwgcmVxdWVzdEluZm87XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmLl90aHJvd0lmUm9vdCgnZGVsZXRlT2JqZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVmLnN0b3JhZ2UuX2dldEF1dGhUb2tlbigpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBhdXRoVG9rZW4gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEluZm8gPSBkZWxldGVPYmplY3QocmVmLnN0b3JhZ2UsIHJlZi5fbG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZWYuc3RvcmFnZS5fbWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbikuZ2V0UHJvbWlzZSgpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgcmVmZXJlbmNlIGZvciBvYmplY3Qgb2J0YWluZWQgYnkgYXBwZW5kaW5nIGBjaGlsZFBhdGhgIHRvIGByZWZgLlxyXG4gKlxyXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB0byBnZXQgY2hpbGQgb2YuXHJcbiAqIEBwYXJhbSBjaGlsZFBhdGggLSBDaGlsZCBwYXRoIGZyb20gcHJvdmlkZWQgcmVmLlxyXG4gKiBAcmV0dXJucyBBIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IG9idGFpbmVkIGJ5XHJcbiAqIGFwcGVuZGluZyBjaGlsZFBhdGgsIHJlbW92aW5nIGFueSBkdXBsaWNhdGUsIGJlZ2lubmluZywgb3IgdHJhaWxpbmdcclxuICogc2xhc2hlcy5cclxuICovXHJcbmZ1bmN0aW9uIF9nZXRDaGlsZChyZWYsIGNoaWxkUGF0aCkge1xyXG4gICAgdmFyIG5ld1BhdGggPSBjaGlsZChyZWYuX2xvY2F0aW9uLnBhdGgsIGNoaWxkUGF0aCk7XHJcbiAgICB2YXIgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24ocmVmLl9sb2NhdGlvbi5idWNrZXQsIG5ld1BhdGgpO1xyXG4gICAgcmV0dXJuIG5ldyBSZWZlcmVuY2UocmVmLnN0b3JhZ2UsIGxvY2F0aW9uKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgVXBsb2FkVGFza1NuYXBzaG90Q29tcGF0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVXBsb2FkVGFza1NuYXBzaG90Q29tcGF0KF9kZWxlZ2F0ZSwgdGFzaywgcmVmKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUgPSBfZGVsZWdhdGU7XHJcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcclxuICAgICAgICB0aGlzLnJlZiA9IHJlZjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShVcGxvYWRUYXNrU25hcHNob3RDb21wYXQucHJvdG90eXBlLCBcImJ5dGVzVHJhbnNmZXJyZWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuYnl0ZXNUcmFuc2ZlcnJlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVXBsb2FkVGFza1NuYXBzaG90Q29tcGF0LnByb3RvdHlwZSwgXCJtZXRhZGF0YVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5tZXRhZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVXBsb2FkVGFza1NuYXBzaG90Q29tcGF0LnByb3RvdHlwZSwgXCJzdGF0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5zdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVXBsb2FkVGFza1NuYXBzaG90Q29tcGF0LnByb3RvdHlwZSwgXCJ0b3RhbEJ5dGVzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnRvdGFsQnl0ZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFVwbG9hZFRhc2tTbmFwc2hvdENvbXBhdDtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIFVwbG9hZFRhc2tDb21wYXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVcGxvYWRUYXNrQ29tcGF0KF9kZWxlZ2F0ZSwgX3JlZikge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gX2RlbGVnYXRlO1xyXG4gICAgICAgIHRoaXMuX3JlZiA9IF9yZWY7XHJcbiAgICAgICAgdGhpcy5jYW5jZWwgPSB0aGlzLl9kZWxlZ2F0ZS5jYW5jZWwuYmluZCh0aGlzLl9kZWxlZ2F0ZSk7XHJcbiAgICAgICAgdGhpcy5jYXRjaCA9IHRoaXMuX2RlbGVnYXRlLmNhdGNoLmJpbmQodGhpcy5fZGVsZWdhdGUpO1xyXG4gICAgICAgIHRoaXMucGF1c2UgPSB0aGlzLl9kZWxlZ2F0ZS5wYXVzZS5iaW5kKHRoaXMuX2RlbGVnYXRlKTtcclxuICAgICAgICB0aGlzLnJlc3VtZSA9IHRoaXMuX2RlbGVnYXRlLnJlc3VtZS5iaW5kKHRoaXMuX2RlbGVnYXRlKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShVcGxvYWRUYXNrQ29tcGF0LnByb3RvdHlwZSwgXCJzbmFwc2hvdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXBsb2FkVGFza1NuYXBzaG90Q29tcGF0KHRoaXMuX2RlbGVnYXRlLnNuYXBzaG90LCB0aGlzLCB0aGlzLl9yZWYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFVwbG9hZFRhc2tDb21wYXQucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS50aGVuKGZ1bmN0aW9uIChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgICBpZiAob25GdWxmaWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvbkZ1bGZpbGxlZChuZXcgVXBsb2FkVGFza1NuYXBzaG90Q29tcGF0KHNuYXBzaG90LCBfdGhpcywgX3RoaXMuX3JlZikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgb25SZWplY3RlZCk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFza0NvbXBhdC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAodHlwZSwgbmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZWQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB3cmFwcGVkTmV4dE9yT2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKCEhbmV4dE9yT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXh0T3JPYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlZE5leHRPck9ic2VydmVyID0gZnVuY3Rpb24gKHRhc2tTbmFwc2hvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcihuZXcgVXBsb2FkVGFza1NuYXBzaG90Q29tcGF0KHRhc2tTbmFwc2hvdCwgX3RoaXMsIF90aGlzLl9yZWYpKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkTmV4dE9yT2JzZXJ2ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogISFuZXh0T3JPYnNlcnZlci5uZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKHRhc2tTbmFwc2hvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyLm5leHQobmV3IFVwbG9hZFRhc2tTbmFwc2hvdENvbXBhdCh0YXNrU25hcHNob3QsIF90aGlzLCBfdGhpcy5fcmVmKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IG5leHRPck9ic2VydmVyLmNvbXBsZXRlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbmV4dE9yT2JzZXJ2ZXIuZXJyb3IgfHwgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5vbih0eXBlLCB3cmFwcGVkTmV4dE9yT2JzZXJ2ZXIsIGVycm9yIHx8IHVuZGVmaW5lZCwgY29tcGxldGVkIHx8IHVuZGVmaW5lZCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFVwbG9hZFRhc2tDb21wYXQ7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBMaXN0UmVzdWx0Q29tcGF0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGlzdFJlc3VsdENvbXBhdChfZGVsZWdhdGUsIF9zZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUgPSBfZGVsZWdhdGU7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IF9zZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpc3RSZXN1bHRDb21wYXQucHJvdG90eXBlLCBcInByZWZpeGVzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnByZWZpeGVzLm1hcChmdW5jdGlvbiAocmVmKSB7IHJldHVybiBuZXcgUmVmZXJlbmNlQ29tcGF0KHJlZiwgX3RoaXMuX3NlcnZpY2UpOyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGlzdFJlc3VsdENvbXBhdC5wcm90b3R5cGUsIFwiaXRlbXNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaXRlbXMubWFwKGZ1bmN0aW9uIChyZWYpIHsgcmV0dXJuIG5ldyBSZWZlcmVuY2VDb21wYXQocmVmLCBfdGhpcy5fc2VydmljZSk7IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaXN0UmVzdWx0Q29tcGF0LnByb3RvdHlwZSwgXCJuZXh0UGFnZVRva2VuXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLm5leHRQYWdlVG9rZW4gfHwgbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gTGlzdFJlc3VsdENvbXBhdDtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgUmVmZXJlbmNlQ29tcGF0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVmZXJlbmNlQ29tcGF0KF9kZWxlZ2F0ZSwgc3RvcmFnZSkge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gX2RlbGVnYXRlO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlQ29tcGF0LnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLm5hbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZmVyZW5jZUNvbXBhdC5wcm90b3R5cGUsIFwiYnVja2V0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmJ1Y2tldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlQ29tcGF0LnByb3RvdHlwZSwgXCJmdWxsUGF0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5mdWxsUGF0aDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBSZWZlcmVuY2VDb21wYXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS50b1N0cmluZygpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgQSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdCBvYnRhaW5lZCBieVxyXG4gICAgICogYXBwZW5kaW5nIGNoaWxkUGF0aCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZSwgYmVnaW5uaW5nLCBvciB0cmFpbGluZ1xyXG4gICAgICogc2xhc2hlcy5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlQ29tcGF0LnByb3RvdHlwZS5jaGlsZCA9IGZ1bmN0aW9uIChjaGlsZFBhdGgpIHtcclxuICAgICAgICB2YXIgcmVmZXJlbmNlID0gX2dldENoaWxkKHRoaXMuX2RlbGVnYXRlLCBjaGlsZFBhdGgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlQ29tcGF0KHJlZmVyZW5jZSwgdGhpcy5zdG9yYWdlKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlQ29tcGF0LnByb3RvdHlwZSwgXCJyb290XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2VDb21wYXQodGhpcy5fZGVsZWdhdGUucm9vdCwgdGhpcy5zdG9yYWdlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlQ29tcGF0LnByb3RvdHlwZSwgXCJwYXJlbnRcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm5zIEEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgb2YgdGhlXHJcbiAgICAgICAgICogY3VycmVudCBvYmplY3QsIG9yIG51bGwgaWYgdGhlIGN1cnJlbnQgb2JqZWN0IGlzIHRoZSByb290LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVmZXJlbmNlID0gdGhpcy5fZGVsZWdhdGUucGFyZW50O1xyXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlQ29tcGF0KHJlZmVyZW5jZSwgdGhpcy5zdG9yYWdlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFVwbG9hZHMgYSBibG9iIHRvIHRoaXMgb2JqZWN0J3MgbG9jYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSAtIFRoZSBibG9iIHRvIHVwbG9hZC5cclxuICAgICAqIEByZXR1cm5zIEFuIFVwbG9hZFRhc2sgdGhhdCBsZXRzIHlvdSBjb250cm9sIGFuZFxyXG4gICAgICogb2JzZXJ2ZSB0aGUgdXBsb2FkLlxyXG4gICAgICovXHJcbiAgICBSZWZlcmVuY2VDb21wYXQucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChkYXRhLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3Rocm93SWZSb290KCdwdXQnKTtcclxuICAgICAgICByZXR1cm4gbmV3IFVwbG9hZFRhc2tDb21wYXQodXBsb2FkQnl0ZXNSZXN1bWFibGUodGhpcy5fZGVsZWdhdGUsIGRhdGEsIG1ldGFkYXRhKSwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGxvYWRzIGEgc3RyaW5nIHRvIHRoaXMgb2JqZWN0J3MgbG9jYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgc3RyaW5nIHRvIHVwbG9hZC5cclxuICAgICAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgZm9ybWF0IG9mIHRoZSBzdHJpbmcgdG8gdXBsb2FkLlxyXG4gICAgICogQHJldHVybnMgQW4gVXBsb2FkVGFzayB0aGF0IGxldHMgeW91IGNvbnRyb2wgYW5kXHJcbiAgICAgKiBvYnNlcnZlIHRoZSB1cGxvYWQuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZUNvbXBhdC5wcm90b3R5cGUucHV0U3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBmb3JtYXQsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IFN0cmluZ0Zvcm1hdC5SQVc7IH1cclxuICAgICAgICB0aGlzLl90aHJvd0lmUm9vdCgncHV0U3RyaW5nJyk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBkYXRhRnJvbVN0cmluZyhmb3JtYXQsIHZhbHVlKTtcclxuICAgICAgICB2YXIgbWV0YWRhdGFDbG9uZSA9IF9fYXNzaWduKHt9LCBtZXRhZGF0YSk7XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhQ2xvbmVbJ2NvbnRlbnRUeXBlJ10gPT0gbnVsbCAmJiBkYXRhLmNvbnRlbnRUeXBlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbWV0YWRhdGFDbG9uZVsnY29udGVudFR5cGUnXSA9IGRhdGEuY29udGVudFR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVXBsb2FkVGFza0NvbXBhdChuZXcgVXBsb2FkVGFzayh0aGlzLl9kZWxlZ2F0ZSwgbmV3IEZic0Jsb2IoZGF0YS5kYXRhLCB0cnVlKSwgbWV0YWRhdGFDbG9uZSksIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBhbGwgaXRlbXMgKGZpbGVzKSBhbmQgcHJlZml4ZXMgKGZvbGRlcnMpIHVuZGVyIHRoaXMgc3RvcmFnZSByZWZlcmVuY2UuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgZm9yIGNhbGxpbmcgbGlzdCgpIHJlcGVhdGVkbHkgdW50aWwgdGhlcmUgYXJlXHJcbiAgICAgKiBubyBtb3JlIHJlc3VsdHMuIFRoZSBkZWZhdWx0IHBhZ2luYXRpb24gc2l6ZSBpcyAxMDAwLlxyXG4gICAgICpcclxuICAgICAqIE5vdGU6IFRoZSByZXN1bHRzIG1heSBub3QgYmUgY29uc2lzdGVudCBpZiBvYmplY3RzIGFyZSBjaGFuZ2VkIHdoaWxlIHRoaXNcclxuICAgICAqIG9wZXJhdGlvbiBpcyBydW5uaW5nLlxyXG4gICAgICpcclxuICAgICAqIFdhcm5pbmc6IGxpc3RBbGwgbWF5IHBvdGVudGlhbGx5IGNvbnN1bWUgdG9vIG1hbnkgcmVzb3VyY2VzIGlmIHRoZXJlIGFyZVxyXG4gICAgICogdG9vIG1hbnkgcmVzdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFsbCB0aGUgaXRlbXMgYW5kIHByZWZpeGVzIHVuZGVyXHJcbiAgICAgKiAgdGhlIGN1cnJlbnQgc3RvcmFnZSByZWZlcmVuY2UuIGBwcmVmaXhlc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0b1xyXG4gICAgICogIHN1Yi1kaXJlY3RvcmllcyBhbmQgYGl0ZW1zYCBjb250YWlucyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gdGhpc1xyXG4gICAgICogIGZvbGRlci4gYG5leHRQYWdlVG9rZW5gIGlzIG5ldmVyIHJldHVybmVkLlxyXG4gICAgICovXHJcbiAgICBSZWZlcmVuY2VDb21wYXQucHJvdG90eXBlLmxpc3RBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbGlzdEFsbCh0aGlzLl9kZWxlZ2F0ZSkudGhlbihmdW5jdGlvbiAocikgeyByZXR1cm4gbmV3IExpc3RSZXN1bHRDb21wYXQociwgX3RoaXMuc3RvcmFnZSk7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBMaXN0IEFQSSBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgRmlyZWJhc2UgUnVsZXMgVmVyc2lvbiAyLlxyXG4gICAgICpcclxuICAgICAqIEdDUyBpcyBhIGtleS1ibG9iIHN0b3JlLiBGaXJlYmFzZSBTdG9yYWdlIGltcG9zZXMgdGhlIHNlbWFudGljIG9mICcvJ1xyXG4gICAgICogZGVsaW1pdGVkIGZvbGRlciBzdHJ1Y3R1cmUuIFJlZmVyIHRvIEdDUydzIExpc3QgQVBJIGlmIHlvdSB3YW50IHRvIGxlYXJuIG1vcmUuXHJcbiAgICAgKlxyXG4gICAgICogVG8gYWRoZXJlIHRvIEZpcmViYXNlIFJ1bGVzJ3MgU2VtYW50aWNzLCBGaXJlYmFzZSBTdG9yYWdlIGRvZXMgbm90XHJcbiAgICAgKiBzdXBwb3J0IG9iamVjdHMgd2hvc2UgcGF0aHMgZW5kIHdpdGggXCIvXCIgb3IgY29udGFpbiB0d28gY29uc2VjdXRpdmVcclxuICAgICAqIFwiL1wicy4gRmlyZWJhc2UgU3RvcmFnZSBMaXN0IEFQSSB3aWxsIGZpbHRlciB0aGVzZSB1bnN1cHBvcnRlZCBvYmplY3RzLlxyXG4gICAgICogbGlzdCgpIG1heSBmYWlsIGlmIHRoZXJlIGFyZSB0b28gbWFueSB1bnN1cHBvcnRlZCBvYmplY3RzIGluIHRoZSBidWNrZXQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBTZWUgTGlzdE9wdGlvbnMgZm9yIGRldGFpbHMuXHJcbiAgICAgKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpdGVtcyBhbmQgcHJlZml4ZXMuXHJcbiAgICAgKiBgcHJlZml4ZXNgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gc3ViLWZvbGRlcnMgYW5kIGBpdGVtc2BcclxuICAgICAqIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiB0aGlzIGZvbGRlci4gYG5leHRQYWdlVG9rZW5gXHJcbiAgICAgKiBjYW4gYmUgdXNlZCB0byBnZXQgdGhlIHJlc3Qgb2YgdGhlIHJlc3VsdHMuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZUNvbXBhdC5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbGlzdCQxKHRoaXMuX2RlbGVnYXRlLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChyKSB7IHJldHVybiBuZXcgTGlzdFJlc3VsdENvbXBhdChyLCBfdGhpcy5zdG9yYWdlKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuIElmIHRoaXNcclxuICAgICAqIG9iamVjdCBkb2Vzbid0IGV4aXN0IG9yIG1ldGFkYXRhIGNhbm5vdCBiZSByZXRyZWl2ZWQsIHRoZSBwcm9taXNlIGlzXHJcbiAgICAgKiByZWplY3RlZC5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlQ29tcGF0LnByb3RvdHlwZS5nZXRNZXRhZGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0TWV0YWRhdGEkMSh0aGlzLl9kZWxlZ2F0ZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gbWV0YWRhdGEgLSBUaGUgbmV3IG1ldGFkYXRhIGZvciB0aGUgb2JqZWN0LlxyXG4gICAgICogT25seSB2YWx1ZXMgdGhhdCBoYXZlIGJlZW4gZXhwbGljaXRseSBzZXQgd2lsbCBiZSBjaGFuZ2VkLiBFeHBsaWNpdGx5XHJcbiAgICAgKiBzZXR0aW5nIGEgdmFsdWUgdG8gbnVsbCB3aWxsIHJlbW92ZSB0aGUgbWV0YWRhdGEuXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlc1xyXG4gICAgICogd2l0aCB0aGUgbmV3IG1ldGFkYXRhIGZvciB0aGlzIG9iamVjdC5cclxuICAgICAqIEBzZWUgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZS5wcm90b3R5cGUuZ2V0TWV0YWRhdGFcclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlQ29tcGF0LnByb3RvdHlwZS51cGRhdGVNZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVNZXRhZGF0YSQxKHRoaXMuX2RlbGVnYXRlLCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkb3dubG9hZFxyXG4gICAgICogVVJMIGZvciB0aGlzIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlQ29tcGF0LnByb3RvdHlwZS5nZXREb3dubG9hZFVSTCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RG93bmxvYWRVUkwodGhpcy5fZGVsZWdhdGUpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlcyB0aGUgb2JqZWN0IGF0IHRoaXMgbG9jYXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyBpZiB0aGUgZGVsZXRpb24gc3VjY2VlZHMuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZUNvbXBhdC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3Rocm93SWZSb290KCdkZWxldGUnKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlT2JqZWN0JDEodGhpcy5fZGVsZWdhdGUpO1xyXG4gICAgfTtcclxuICAgIFJlZmVyZW5jZUNvbXBhdC5wcm90b3R5cGUuX3Rocm93SWZSb290ID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVsZWdhdGUuX2xvY2F0aW9uLnBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludmFsaWRSb290T3BlcmF0aW9uKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVmZXJlbmNlQ29tcGF0O1xyXG59KCkpO1xuXG4vKipcclxuICogQSByZXF1ZXN0IHdob3NlIHByb21pc2UgYWx3YXlzIGZhaWxzLlxyXG4gKi9cclxudmFyIEZhaWxSZXF1ZXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRmFpbFJlcXVlc3QoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLnByb21pc2VfID0gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBGYWlsUmVxdWVzdC5wcm90b3R5cGUuZ2V0UHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlXztcclxuICAgIH07XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIEZhaWxSZXF1ZXN0LnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoX2FwcERlbGV0ZSkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGYWlsUmVxdWVzdDtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBwYXJhbSBmIE1heSBiZSBpbnZva2VkXHJcbiAqICAgICBiZWZvcmUgdGhlIGZ1bmN0aW9uIHJldHVybnMuXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBHZXQgYWxsIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvblxyXG4gKiAgICAgcGFzc2VkIHRvIGYsIGluY2x1ZGluZyB0aGUgaW5pdGlhbCBib29sZWFuLlxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnQoZiwgXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmNhbGxiYWNrLCB0aW1lb3V0KSB7XHJcbiAgICAvLyBUT0RPKGFuZHlzb3RvKTogbWFrZSB0aGlzIGNvZGUgY2xlYW5lciAocHJvYmFibHkgcmVmYWN0b3IgaW50byBhbiBhY3R1YWxcclxuICAgIC8vIHR5cGUgaW5zdGVhZCBvZiBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyB3aXRoIHN0YXRlIHNoYXJlZCBpbiB0aGUgY2xvc3VyZSlcclxuICAgIHZhciB3YWl0U2Vjb25kcyA9IDE7XHJcbiAgICAvLyBXb3VsZCB0eXBlIHRoaXMgYXMgXCJudW1iZXJcIiBidXQgdGhhdCBkb2Vzbid0IHdvcmsgZm9yIE5vZGUgc28gwq9cXF8o44OEKV8vwq9cclxuICAgIC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gZXhjbHVkZSBOb2RlIHR5cGUgZGVmaW5pdGlvbiBmb3Igc3RvcmFnZSBiZWNhdXNlIHN0b3JhZ2Ugb25seSB3b3JrcyBpbiBicm93c2VyXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgdmFyIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICB2YXIgaGl0VGltZW91dCA9IGZhbHNlO1xyXG4gICAgdmFyIGNhbmNlbFN0YXRlID0gMDtcclxuICAgIGZ1bmN0aW9uIGNhbmNlbGVkKCkge1xyXG4gICAgICAgIHJldHVybiBjYW5jZWxTdGF0ZSA9PT0gMjtcclxuICAgIH1cclxuICAgIHZhciB0cmlnZ2VyZWRDYWxsYmFjayA9IGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckNhbGxiYWNrKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRyaWdnZXJlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJlZENhbGxiYWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsbFdpdGhEZWxheShtaWxsaXMpIHtcclxuICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgZihoYW5kbGVyLCBjYW5jZWxlZCgpKTtcclxuICAgICAgICB9LCBtaWxsaXMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlcihzdWNjZXNzKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJpZ2dlcmVkQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQ2FsbGJhY2suY2FsbC5hcHBseSh0cmlnZ2VyQ2FsbGJhY2ssIF9fc3ByZWFkQXJyYXlzKFtudWxsLCBzdWNjZXNzXSwgYXJncykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtdXN0U3RvcCA9IGNhbmNlbGVkKCkgfHwgaGl0VGltZW91dDtcclxuICAgICAgICBpZiAobXVzdFN0b3ApIHtcclxuICAgICAgICAgICAgdHJpZ2dlckNhbGxiYWNrLmNhbGwuYXBwbHkodHJpZ2dlckNhbGxiYWNrLCBfX3NwcmVhZEFycmF5cyhbbnVsbCwgc3VjY2Vzc10sIGFyZ3MpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2FpdFNlY29uZHMgPCA2NCkge1xyXG4gICAgICAgICAgICAvKiBUT0RPKGFuZHlzb3RvKTogZG9uJ3QgYmFjayBvZmYgc28gcXVpY2tseSBpZiB3ZSBrbm93IHdlJ3JlIG9mZmxpbmUuICovXHJcbiAgICAgICAgICAgIHdhaXRTZWNvbmRzICo9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3YWl0TWlsbGlzO1xyXG4gICAgICAgIGlmIChjYW5jZWxTdGF0ZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBjYW5jZWxTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIHdhaXRNaWxsaXMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2FpdE1pbGxpcyA9ICh3YWl0U2Vjb25kcyArIE1hdGgucmFuZG9tKCkpICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbFdpdGhEZWxheSh3YWl0TWlsbGlzKTtcclxuICAgIH1cclxuICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XHJcbiAgICBmdW5jdGlvbiBzdG9wKHdhc1RpbWVvdXQpIHtcclxuICAgICAgICBpZiAoc3RvcHBlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3BwZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0cmlnZ2VyZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lb3V0SWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKCF3YXNUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIGNhbGxXaXRoRGVsYXkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXdhc1RpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbFN0YXRlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhbGxXaXRoRGVsYXkoMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBoaXRUaW1lb3V0ID0gdHJ1ZTtcclxuICAgICAgICBzdG9wKHRydWUpO1xyXG4gICAgfSwgdGltZW91dCk7XHJcbiAgICByZXR1cm4gc3RvcDtcclxufVxyXG4vKipcclxuICogU3RvcHMgdGhlIHJldHJ5IGxvb3AgZnJvbSByZXBlYXRpbmcuXHJcbiAqIElmIHRoZSBmdW5jdGlvbiBpcyBjdXJyZW50bHkgXCJpbiBiZXR3ZWVuXCIgcmV0cmllcywgaXQgaXMgaW52b2tlZCBpbW1lZGlhdGVseVxyXG4gKiB3aXRoIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGFzIFwidHJ1ZVwiLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaW52b2tlZCBvbmNlIG1vcmVcclxuICogYWZ0ZXIgdGhlIGN1cnJlbnQgaW52b2NhdGlvbiBmaW5pc2hlcyBpZmYgdGhlIGN1cnJlbnQgaW52b2NhdGlvbiB3b3VsZCBoYXZlXHJcbiAqIHRyaWdnZXJlZCBhbm90aGVyIHJldHJ5LlxyXG4gKi9cclxuZnVuY3Rpb24gc3RvcChpZCkge1xyXG4gICAgaWQoZmFsc2UpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBOZXR3b3JrUmVxdWVzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5ldHdvcmtSZXF1ZXN0KHVybCwgbWV0aG9kLCBoZWFkZXJzLCBib2R5LCBzdWNjZXNzQ29kZXMsIGFkZGl0aW9uYWxSZXRyeUNvZGVzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaywgdGltZW91dCwgcHJvZ3Jlc3NDYWxsYmFjaywgcG9vbCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nWGhyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5iYWNrb2ZmSWRfID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNhbmNlbGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXBwRGVsZXRlXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXJsXyA9IHVybDtcclxuICAgICAgICB0aGlzLm1ldGhvZF8gPSBtZXRob2Q7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJzXyA9IGhlYWRlcnM7XHJcbiAgICAgICAgdGhpcy5ib2R5XyA9IGJvZHk7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzQ29kZXNfID0gc3VjY2Vzc0NvZGVzLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2Rlc18gPSBhZGRpdGlvbmFsUmV0cnlDb2Rlcy5zbGljZSgpO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrXyA9IGVycm9yQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrXyA9IHByb2dyZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0XyA9IHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5wb29sXyA9IHBvb2w7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlXyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVzb2x2ZV8gPSByZXNvbHZlO1xyXG4gICAgICAgICAgICBfdGhpcy5yZWplY3RfID0gcmVqZWN0O1xyXG4gICAgICAgICAgICBfdGhpcy5zdGFydF8oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWN0dWFsbHkgc3RhcnRzIHRoZSByZXRyeSBsb29wLlxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrUmVxdWVzdC5wcm90b3R5cGUuc3RhcnRfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBmdW5jdGlvbiBkb1RoZVJlcXVlc3QoYmFja29mZkNhbGxiYWNrLCBjYW5jZWxlZCkge1xyXG4gICAgICAgICAgICBpZiAoY2FuY2VsZWQpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tvZmZDYWxsYmFjayhmYWxzZSwgbmV3IFJlcXVlc3RFbmRTdGF0dXMoZmFsc2UsIG51bGwsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgeGhyID0gc2VsZi5wb29sXy5jcmVhdGVYaHJJbygpO1xyXG4gICAgICAgICAgICBzZWxmLnBlbmRpbmdYaHJfID0geGhyO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBwcm9ncmVzc0xpc3RlbmVyKHByb2dyZXNzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsb2FkZWQgPSBwcm9ncmVzc0V2ZW50LmxvYWRlZDtcclxuICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IHByb2dyZXNzRXZlbnQubGVuZ3RoQ29tcHV0YWJsZSA/IHByb2dyZXNzRXZlbnQudG90YWwgOiAtMTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnByb2dyZXNzQ2FsbGJhY2tfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9ncmVzc0NhbGxiYWNrXyhsb2FkZWQsIHRvdGFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5wcm9ncmVzc0NhbGxiYWNrXyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgeGhyLmFkZFVwbG9hZFByb2dyZXNzTGlzdGVuZXIocHJvZ3Jlc3NMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICB4aHJcclxuICAgICAgICAgICAgICAgIC5zZW5kKHNlbGYudXJsXywgc2VsZi5tZXRob2RfLCBzZWxmLmJvZHlfLCBzZWxmLmhlYWRlcnNfKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucHJvZ3Jlc3NDYWxsYmFja18gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB4aHIucmVtb3ZlVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lcihwcm9ncmVzc0xpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZ1hocl8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgeGhyID0geGhyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhpdFNlcnZlciA9IHhoci5nZXRFcnJvckNvZGUoKSA9PT0gRXJyb3JDb2RlLk5PX0VSUk9SO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHhoci5nZXRTdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgIGlmICghaGl0U2VydmVyIHx8IHNlbGYuaXNSZXRyeVN0YXR1c0NvZGVfKHN0YXR1cykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2FzQ2FuY2VsZWQgPSB4aHIuZ2V0RXJyb3JDb2RlKCkgPT09IEVycm9yQ29kZS5BQk9SVDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrb2ZmQ2FsbGJhY2soZmFsc2UsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKGZhbHNlLCBudWxsLCB3YXNDYW5jZWxlZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzQ29kZSA9IHNlbGYuc3VjY2Vzc0NvZGVzXy5pbmRleE9mKHN0YXR1cykgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgYmFja29mZkNhbGxiYWNrKHRydWUsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKHN1Y2Nlc3NDb2RlLCB4aHIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSByZXF1ZXN0V2VudFRocm91Z2ggLSBUcnVlIGlmIHRoZSByZXF1ZXN0IGV2ZW50dWFsbHkgd2VudFxyXG4gICAgICAgICAqICAgICB0aHJvdWdoLCBmYWxzZSBpZiBpdCBoaXQgdGhlIHJldHJ5IGxpbWl0IG9yIHdhcyBjYW5jZWxlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBiYWNrb2ZmRG9uZShyZXF1ZXN0V2VudFRocm91Z2gsIHN0YXR1cykge1xyXG4gICAgICAgICAgICB2YXIgcmVzb2x2ZSA9IHNlbGYucmVzb2x2ZV87XHJcbiAgICAgICAgICAgIHZhciByZWplY3QgPSBzZWxmLnJlamVjdF87XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBzdGF0dXMueGhyO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzLndhc1N1Y2Nlc3NDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZWxmLmNhbGxiYWNrXyh4aHIsIHhoci5nZXRSZXNwb25zZVRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSnVzdERlZihyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gdW5rbm93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVyci5zZXJ2ZXJSZXNwb25zZSA9IHhoci5nZXRSZXNwb25zZVRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5lcnJvckNhbGxiYWNrXykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc2VsZi5lcnJvckNhbGxiYWNrXyh4aHIsIGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5jYW5jZWxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gc2VsZi5hcHBEZWxldGVfID8gYXBwRGVsZXRlZCgpIDogY2FuY2VsZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmV0cnlMaW1pdEV4Y2VlZGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYW5jZWxlZF8pIHtcclxuICAgICAgICAgICAgYmFja29mZkRvbmUoZmFsc2UsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKGZhbHNlLCBudWxsLCB0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tvZmZJZF8gPSBzdGFydChkb1RoZVJlcXVlc3QsIGJhY2tvZmZEb25lLCB0aGlzLnRpbWVvdXRfKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBOZXR3b3JrUmVxdWVzdC5wcm90b3R5cGUuZ2V0UHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlXztcclxuICAgIH07XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIE5ldHdvcmtSZXF1ZXN0LnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoYXBwRGVsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxlZF8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwRGVsZXRlXyA9IGFwcERlbGV0ZSB8fCBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5iYWNrb2ZmSWRfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0b3AodGhpcy5iYWNrb2ZmSWRfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ1hocl8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nWGhyXy5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOZXR3b3JrUmVxdWVzdC5wcm90b3R5cGUuaXNSZXRyeVN0YXR1c0NvZGVfID0gZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgIC8vIFRoZSBjb2RlcyBmb3Igd2hpY2ggdG8gcmV0cnkgY2FtZSBmcm9tIHRoaXMgcGFnZTpcclxuICAgICAgICAvLyBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vc3RvcmFnZS9kb2NzL2V4cG9uZW50aWFsLWJhY2tvZmZcclxuICAgICAgICB2YXIgaXNGaXZlSHVuZHJlZENvZGUgPSBzdGF0dXMgPj0gNTAwICYmIHN0YXR1cyA8IDYwMDtcclxuICAgICAgICB2YXIgZXh0cmFSZXRyeUNvZGVzID0gW1xyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0IFRpbWVvdXQ6IHdlYiBzZXJ2ZXIgZGlkbid0IHJlY2VpdmUgZnVsbCByZXF1ZXN0IGluIHRpbWUuXHJcbiAgICAgICAgICAgIDQwOCxcclxuICAgICAgICAgICAgLy8gVG9vIE1hbnkgUmVxdWVzdHM6IHlvdSdyZSBnZXR0aW5nIHJhdGUtbGltaXRlZCwgYmFzaWNhbGx5LlxyXG4gICAgICAgICAgICA0MjlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBpc0V4dHJhUmV0cnlDb2RlID0gZXh0cmFSZXRyeUNvZGVzLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTE7XHJcbiAgICAgICAgdmFyIGlzUmVxdWVzdFNwZWNpZmljUmV0cnlDb2RlID0gdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2Rlc18uaW5kZXhPZihzdGF0dXMpICE9PSAtMTtcclxuICAgICAgICByZXR1cm4gaXNGaXZlSHVuZHJlZENvZGUgfHwgaXNFeHRyYVJldHJ5Q29kZSB8fCBpc1JlcXVlc3RTcGVjaWZpY1JldHJ5Q29kZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTmV0d29ya1JlcXVlc3Q7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2YgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlc3VsdCBvZiBhIG5ldHdvcmsgcmVxdWVzdC5cclxuICogQHBhcmFtIG9wdF9jYW5jZWxlZCAtIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gKi9cclxudmFyIFJlcXVlc3RFbmRTdGF0dXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXF1ZXN0RW5kU3RhdHVzKHdhc1N1Y2Nlc3NDb2RlLCB4aHIsIGNhbmNlbGVkKSB7XHJcbiAgICAgICAgdGhpcy53YXNTdWNjZXNzQ29kZSA9IHdhc1N1Y2Nlc3NDb2RlO1xyXG4gICAgICAgIHRoaXMueGhyID0geGhyO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsZWQgPSAhIWNhbmNlbGVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlcXVlc3RFbmRTdGF0dXM7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGFkZEF1dGhIZWFkZXJfKGhlYWRlcnMsIGF1dGhUb2tlbikge1xyXG4gICAgaWYgKGF1dGhUb2tlbiAhPT0gbnVsbCAmJiBhdXRoVG9rZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdGaXJlYmFzZSAnICsgYXV0aFRva2VuO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZFZlcnNpb25IZWFkZXJfKGhlYWRlcnMsIGZpcmViYXNlVmVyc2lvbikge1xyXG4gICAgaGVhZGVyc1snWC1GaXJlYmFzZS1TdG9yYWdlLVZlcnNpb24nXSA9XHJcbiAgICAgICAgJ3dlYmpzLycgKyAoZmlyZWJhc2VWZXJzaW9uICE9PSBudWxsICYmIGZpcmViYXNlVmVyc2lvbiAhPT0gdm9pZCAwID8gZmlyZWJhc2VWZXJzaW9uIDogJ0FwcE1hbmFnZXInKTtcclxufVxyXG5mdW5jdGlvbiBhZGRHbXBpZEhlYWRlcl8oaGVhZGVycywgYXBwSWQpIHtcclxuICAgIGlmIChhcHBJZCkge1xyXG4gICAgICAgIGhlYWRlcnNbJ1gtRmlyZWJhc2UtR01QSUQnXSA9IGFwcElkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhcHBJZCwgYXV0aFRva2VuLCBwb29sLCBmaXJlYmFzZVZlcnNpb24pIHtcclxuICAgIHZhciBxdWVyeVBhcnQgPSBtYWtlUXVlcnlTdHJpbmcocmVxdWVzdEluZm8udXJsUGFyYW1zKTtcclxuICAgIHZhciB1cmwgPSByZXF1ZXN0SW5mby51cmwgKyBxdWVyeVBhcnQ7XHJcbiAgICB2YXIgaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3RJbmZvLmhlYWRlcnMpO1xyXG4gICAgYWRkR21waWRIZWFkZXJfKGhlYWRlcnMsIGFwcElkKTtcclxuICAgIGFkZEF1dGhIZWFkZXJfKGhlYWRlcnMsIGF1dGhUb2tlbik7XHJcbiAgICBhZGRWZXJzaW9uSGVhZGVyXyhoZWFkZXJzLCBmaXJlYmFzZVZlcnNpb24pO1xyXG4gICAgcmV0dXJuIG5ldyBOZXR3b3JrUmVxdWVzdCh1cmwsIHJlcXVlc3RJbmZvLm1ldGhvZCwgaGVhZGVycywgcmVxdWVzdEluZm8uYm9keSwgcmVxdWVzdEluZm8uc3VjY2Vzc0NvZGVzLCByZXF1ZXN0SW5mby5hZGRpdGlvbmFsUmV0cnlDb2RlcywgcmVxdWVzdEluZm8uaGFuZGxlciwgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyLCByZXF1ZXN0SW5mby50aW1lb3V0LCByZXF1ZXN0SW5mby5wcm9ncmVzc0NhbGxiYWNrLCBwb29sKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VybChwYXRoKSB7XHJcbiAgICByZXR1cm4gL15bQS1aYS16XSs6XFwvXFwvLy50ZXN0KHBhdGgpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBmb3IgdGhlIGdpdmVuIHVybC5cclxuICovXHJcbmZ1bmN0aW9uIHJlZkZyb21VUkwoc2VydmljZSwgdXJsKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZmVyZW5jZShzZXJ2aWNlLCB1cmwpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBmb3IgdGhlIGdpdmVuIHBhdGggaW4gdGhlIGRlZmF1bHRcclxuICogYnVja2V0LlxyXG4gKi9cclxuZnVuY3Rpb24gcmVmRnJvbVBhdGgocmVmLCBwYXRoKSB7XHJcbiAgICBpZiAocmVmIGluc3RhbmNlb2YgU3RvcmFnZVNlcnZpY2UpIHtcclxuICAgICAgICB2YXIgc2VydmljZSA9IHJlZjtcclxuICAgICAgICBpZiAoc2VydmljZS5fYnVja2V0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbm9EZWZhdWx0QnVja2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHNlcnZpY2UsIHNlcnZpY2UuX2J1Y2tldCk7XHJcbiAgICAgICAgaWYgKHBhdGggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVmRnJvbVBhdGgocmVmZXJlbmNlLCBwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gcmVmIGlzIGEgUmVmZXJlbmNlXHJcbiAgICAgICAgaWYgKHBhdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmNsdWRlcygnLi4nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50KCdgcGF0aGAgcGFyYW0gY2Fubm90IGNvbnRhaW4gXCIuLlwiJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIF9nZXRDaGlsZChyZWYsIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVmKHNlcnZpY2VPclJlZiwgcGF0aE9yVXJsKSB7XHJcbiAgICBpZiAocGF0aE9yVXJsICYmIGlzVXJsKHBhdGhPclVybCkpIHtcclxuICAgICAgICBpZiAoc2VydmljZU9yUmVmIGluc3RhbmNlb2YgU3RvcmFnZVNlcnZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZkZyb21VUkwoc2VydmljZU9yUmVmLCBwYXRoT3JVcmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50KCdUbyB1c2UgcmVmKHNlcnZpY2UsIHVybCksIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgU3RvcmFnZSBpbnN0YW5jZS4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVmRnJvbVBhdGgoc2VydmljZU9yUmVmLCBwYXRoT3JVcmwpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGV4dHJhY3RCdWNrZXQoY29uZmlnKSB7XHJcbiAgICB2YXIgYnVja2V0U3RyaW5nID0gY29uZmlnID09PSBudWxsIHx8IGNvbmZpZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uZmlnW0NPTkZJR19TVE9SQUdFX0JVQ0tFVF9LRVldO1xyXG4gICAgaWYgKGJ1Y2tldFN0cmluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTG9jYXRpb24ubWFrZUZyb21CdWNrZXRTcGVjKGJ1Y2tldFN0cmluZyk7XHJcbn1cclxuLyoqXHJcbiAqIEEgc2VydmljZSB0aGF0IHByb3ZpZGVzIEZpcmViYXNlIFN0b3JhZ2UgUmVmZXJlbmNlIGluc3RhbmNlcy5cclxuICogQHB1YmxpY1xyXG4gKiBAcGFyYW0gb3B0X3VybCAtIGdzOi8vIHVybCB0byBhIGN1c3RvbSBTdG9yYWdlIEJ1Y2tldFxyXG4gKi9cclxudmFyIFN0b3JhZ2VTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RvcmFnZVNlcnZpY2UoXHJcbiAgICAvKipcclxuICAgICAqIEZpcmViYXNlQXBwIGFzc29jaWF0ZWQgd2l0aCB0aGlzIFN0b3JhZ2VTZXJ2aWNlIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBhcHAsIF9hdXRoUHJvdmlkZXIsIF9wb29sLCBfdXJsLCBfZmlyZWJhc2VWZXJzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgdGhpcy5fYXV0aFByb3ZpZGVyID0gX2F1dGhQcm92aWRlcjtcclxuICAgICAgICB0aGlzLl9wb29sID0gX3Bvb2w7XHJcbiAgICAgICAgdGhpcy5fdXJsID0gX3VybDtcclxuICAgICAgICB0aGlzLl9maXJlYmFzZVZlcnNpb24gPSBfZmlyZWJhc2VWZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuX2J1Y2tldCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYXBwSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2RlbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9tYXhPcGVyYXRpb25SZXRyeVRpbWUgPSBERUZBVUxUX01BWF9PUEVSQVRJT05fUkVUUllfVElNRTtcclxuICAgICAgICB0aGlzLl9tYXhVcGxvYWRSZXRyeVRpbWUgPSBERUZBVUxUX01BWF9VUExPQURfUkVUUllfVElNRTtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0cyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBpZiAoX3VybCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1Y2tldCA9IExvY2F0aW9uLm1ha2VGcm9tQnVja2V0U3BlYyhfdXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1Y2tldCA9IGV4dHJhY3RCdWNrZXQodGhpcy5hcHAub3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZSwgXCJtYXhVcGxvYWRSZXRyeVRpbWVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIHRpbWUgdG8gcmV0cnkgdXBsb2FkcyBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlTnVtYmVyKCd0aW1lJywgXHJcbiAgICAgICAgICAgIC8qIG1pblZhbHVlPSovIDAsIFxyXG4gICAgICAgICAgICAvKiBtYXhWYWx1ZT0gKi8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCB0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fbWF4VXBsb2FkUmV0cnlUaW1lID0gdGltZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmFnZVNlcnZpY2UucHJvdG90eXBlLCBcIm1heE9wZXJhdGlvblJldHJ5VGltZVwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1heGltdW0gdGltZSB0byByZXRyeSBvcGVyYXRpb25zIG90aGVyIHRoYW4gdXBsb2FkcyBvciBkb3dubG9hZHMgaW5cclxuICAgICAgICAgKiBtaWxsaXNlY29uZHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhPcGVyYXRpb25SZXRyeVRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlTnVtYmVyKCd0aW1lJywgXHJcbiAgICAgICAgICAgIC8qIG1pblZhbHVlPSovIDAsIFxyXG4gICAgICAgICAgICAvKiBtYXhWYWx1ZT0gKi8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCB0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fbWF4T3BlcmF0aW9uUmV0cnlUaW1lID0gdGltZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuX2dldEF1dGhUb2tlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhdXRoLCB0b2tlbkRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGggPSB0aGlzLl9hdXRoUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHsgb3B0aW9uYWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXV0aCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF1dGguZ2V0VG9rZW4oKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkRhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbkRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0b2tlbkRhdGEuYWNjZXNzVG9rZW5dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIHJ1bm5pbmcgcmVxdWVzdHMgYW5kIHByZXZlbnQgbW9yZSBmcm9tIGJlaW5nIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5fZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2RlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3RzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVlc3QpIHsgcmV0dXJuIHJlcXVlc3QuY2FuY2VsKCk7IH0pO1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3RzLmNsZWFyKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIG5ldyBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIG9iamVjdCByZWZlcmVuY2luZyB0aGlzIFN0b3JhZ2VTZXJ2aWNlXHJcbiAgICAgKiBhdCB0aGUgZ2l2ZW4gTG9jYXRpb24uXHJcbiAgICAgKi9cclxuICAgIFN0b3JhZ2VTZXJ2aWNlLnByb3RvdHlwZS5fbWFrZVN0b3JhZ2VSZWZlcmVuY2UgPSBmdW5jdGlvbiAobG9jKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2UodGhpcywgbG9jKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0SW5mbyAtIEhUVFAgUmVxdWVzdEluZm8gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gYXV0aFRva2VuIC0gRmlyZWJhc2UgYXV0aCB0b2tlblxyXG4gICAgICovXHJcbiAgICBTdG9yYWdlU2VydmljZS5wcm90b3R5cGUuX21ha2VSZXF1ZXN0ID0gZnVuY3Rpb24gKHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5fZGVsZXRlZCkge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdF8xID0gbWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIHRoaXMuX2FwcElkLCBhdXRoVG9rZW4sIHRoaXMuX3Bvb2wsIHRoaXMuX2ZpcmViYXNlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RzLmFkZChyZXF1ZXN0XzEpO1xyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0IHJlbW92ZXMgaXRzZWxmIGZyb20gc2V0IHdoZW4gY29tcGxldGUuXHJcbiAgICAgICAgICAgIHJlcXVlc3RfMS5nZXRQcm9taXNlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fcmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RfMSk7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9yZXF1ZXN0cy5kZWxldGUocmVxdWVzdF8xKTsgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0XzE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZhaWxSZXF1ZXN0KGFwcERlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTdG9yYWdlU2VydmljZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEEgc2VydmljZSB0aGF0IHByb3ZpZGVzIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UgaW5zdGFuY2VzLlxyXG4gKiBAcGFyYW0gb3B0X3VybCBnczovLyB1cmwgdG8gYSBjdXN0b20gU3RvcmFnZSBCdWNrZXRcclxuICovXHJcbnZhciBTdG9yYWdlU2VydmljZUNvbXBhdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0b3JhZ2VTZXJ2aWNlQ29tcGF0KGFwcCwgX2RlbGVnYXRlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZSA9IF9kZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLklOVEVSTkFMID0ge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIGFzc29jaWF0ZWQgYXBwIGlzIGRlbGV0ZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fZGVsZWdhdGUuX2RlbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdG9yYWdlU2VydmljZUNvbXBhdC5wcm90b3R5cGUsIFwibWF4T3BlcmF0aW9uUmV0cnlUaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RvcmFnZVNlcnZpY2VDb21wYXQucHJvdG90eXBlLCBcIm1heFVwbG9hZFJldHJ5VGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBmb3IgdGhlIGdpdmVuIHBhdGggaW4gdGhlIGRlZmF1bHRcclxuICAgICAqIGJ1Y2tldC5cclxuICAgICAqL1xyXG4gICAgU3RvcmFnZVNlcnZpY2VDb21wYXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgaWYgKGlzVXJsKHBhdGgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludmFsaWRBcmd1bWVudCgncmVmKCkgZXhwZWN0ZWQgYSBjaGlsZCBwYXRoIGJ1dCBnb3QgYSBVUkwsIHVzZSByZWZGcm9tVVJMIGluc3RlYWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlQ29tcGF0KHJlZih0aGlzLl9kZWxlZ2F0ZSwgcGF0aCksIHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2Ugb2JqZWN0IGZvciB0aGUgZ2l2ZW4gYWJzb2x1dGUgVVJMLFxyXG4gICAgICogd2hpY2ggbXVzdCBiZSBhIGdzOi8vIG9yIGh0dHBbc106Ly8gVVJMLlxyXG4gICAgICovXHJcbiAgICBTdG9yYWdlU2VydmljZUNvbXBhdC5wcm90b3R5cGUucmVmRnJvbVVSTCA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICBpZiAoIWlzVXJsKHVybCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50KCdyZWZGcm9tVVJMKCkgZXhwZWN0ZWQgYSBmdWxsIFVSTCBidXQgZ290IGEgY2hpbGQgcGF0aCwgdXNlIHJlZigpIGluc3RlYWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIExvY2F0aW9uLm1ha2VGcm9tVXJsKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludmFsaWRBcmd1bWVudCgncmVmRnJvbVVybCgpIGV4cGVjdGVkIGEgdmFsaWQgZnVsbCBVUkwgYnV0IGdvdCBhbiBpbnZhbGlkIG9uZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2VDb21wYXQocmVmKHRoaXMuX2RlbGVnYXRlLCB1cmwpLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBTdG9yYWdlU2VydmljZUNvbXBhdC5wcm90b3R5cGUuc2V0TWF4VXBsb2FkUmV0cnlUaW1lID0gZnVuY3Rpb24gKHRpbWUpIHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5tYXhVcGxvYWRSZXRyeVRpbWUgPSB0aW1lO1xyXG4gICAgfTtcclxuICAgIFN0b3JhZ2VTZXJ2aWNlQ29tcGF0LnByb3RvdHlwZS5zZXRNYXhPcGVyYXRpb25SZXRyeVRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlLm1heE9wZXJhdGlvblJldHJ5VGltZSA9IHRpbWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0b3JhZ2VTZXJ2aWNlQ29tcGF0O1xyXG59KCkpO1xuXG52YXIgbmFtZSA9IFwiQGZpcmViYXNlL3N0b3JhZ2VcIjtcbnZhciB2ZXJzaW9uID0gXCIwLjQuM1wiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVHlwZSBjb25zdGFudCBmb3IgRmlyZWJhc2UgU3RvcmFnZS5cclxuICovXHJcbnZhciBTVE9SQUdFX1RZUEUgPSAnc3RvcmFnZSc7XHJcbmZ1bmN0aW9uIGZhY3RvcnkoY29udGFpbmVyLCB1cmwpIHtcclxuICAgIC8vIERlcGVuZGVuY2llc1xyXG4gICAgLy8gVE9ETzogVGhpcyBzaG91bGQgZXZlbnR1YWxseSBiZSAnYXBwLWNvbXBhdCdcclxuICAgIHZhciBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgdmFyIGF1dGhQcm92aWRlciA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXV0aC1pbnRlcm5hbCcpO1xyXG4gICAgLy8gVE9ETzogZ2V0IFN0b3JhZ2VTZXJ2aWNlIGluc3RhbmNlIGZyb20gY29tcG9uZW50IGZyYW1ld29yayBpbnN0ZWFkXHJcbiAgICAvLyBvZiBjcmVhdGluZyBhIG5ldyBvbmUuXHJcbiAgICB2YXIgc3RvcmFnZVNlcnZpY2VDb21wYXQgPSBuZXcgU3RvcmFnZVNlcnZpY2VDb21wYXQoYXBwLCBuZXcgU3RvcmFnZVNlcnZpY2UoYXBwLCBhdXRoUHJvdmlkZXIsIG5ldyBYaHJJb1Bvb2woKSwgdXJsLCBmaXJlYmFzZS5TREtfVkVSU0lPTikpO1xyXG4gICAgcmV0dXJuIHN0b3JhZ2VTZXJ2aWNlQ29tcGF0O1xyXG59XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyU3RvcmFnZShpbnN0YW5jZSkge1xyXG4gICAgdmFyIG5hbWVzcGFjZUV4cG9ydHMgPSB7XHJcbiAgICAgICAgLy8gbm8taW5saW5lXHJcbiAgICAgICAgVGFza1N0YXRlOiBUYXNrU3RhdGUsXHJcbiAgICAgICAgVGFza0V2ZW50OiBUYXNrRXZlbnQsXHJcbiAgICAgICAgU3RyaW5nRm9ybWF0OiBTdHJpbmdGb3JtYXQsXHJcbiAgICAgICAgU3RvcmFnZTogU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgUmVmZXJlbmNlOiBSZWZlcmVuY2VDb21wYXRcclxuICAgIH07XHJcbiAgICBpbnN0YW5jZS5JTlRFUk5BTC5yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KFNUT1JBR0VfVFlQRSwgZmFjdG9yeSwgXCJQVUJMSUNcIiAvKiBQVUJMSUMgKi8pXHJcbiAgICAgICAgLnNldFNlcnZpY2VQcm9wcyhuYW1lc3BhY2VFeHBvcnRzKVxyXG4gICAgICAgIC5zZXRNdWx0aXBsZUluc3RhbmNlcyh0cnVlKSk7XHJcbiAgICBpbnN0YW5jZS5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbik7XHJcbn1cclxucmVnaXN0ZXJTdG9yYWdlKGZpcmViYXNlKTtcblxuZXhwb3J0IHsgcmVnaXN0ZXJTdG9yYWdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgJ0BmaXJlYmFzZS9zdG9yYWdlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=