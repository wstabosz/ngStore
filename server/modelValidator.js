function ModelValidator(settings) {

    settings = settings || { models: {} };

    var _this = this;

    this.validateModel = function(item) {

        var type = item.type || '';
        var model = settings.models[type];
        var result = null;

        result = processBranch(model,item);
        if(result) {
            result._type = type;
        }
        return result;
    };

    this.models = settings.models;

    var processBranch = function(model, branch) {
        if ((!model) || (!branch)) return null;

        var context = {};
        context.result = {};

        for (var key in model) {

            context.defaultValue = null;

            // check if the key from the item exists in the model
            if (model.hasOwnProperty(key) ) {

                context.key = key;
                context.modelItem = model[key];
                context.branchItem = branch[key] || null;
                context.isTypeMatch = false;
                context.doRecurse = isObject(context.modelItem);

                processArray(context);
                processDefault(context);
                processModel(context);
                processLength(context);

                // check if the value was set in one of the process methods
                if (!context.result.hasOwnProperty(key)) {

                    // check if the two values are of the same type
                    if (context.isTypeMatch) {

                        if (context.doRecurse) {
                            context.result[key] = processBranch(context.modelItem, context.branchItem);
                        } else {
                            context.result[key] = context.branchItem;
                        }

                    }

                }

            }

            if (!context.result.hasOwnProperty(key)) {
                context.result[key] = context.defaultValue;
            }
        }

        return context.result;
    };

    var processArray = function(context) {

        if( isArray(context.modelItem) ) {
            if (isArray(context.branchItem) ) {

                var arrayResult = [];
                for(var i=0;i< context.branchItem.length;i++) {
                    // determine if this item's data type is allowed in the array
                    var isAllowed= false;
                    var branchItem = context.branchItem[i];

                    var j = 0;
                    while ((!isAllowed) && (j<context.modelItem.length)) {
                        var modelItem = context.modelItem[j];

                        if(modelItem.hasOwnProperty('model')) {
                            var modelType = modelItem.model || true;
                            var branchType = branchItem.type || false;
                            // default Types to opposite values so that they fail equality test
                            if (modelType === branchType) {
                                isAllowed = true;
                                branchItem = _this.validateModel(branchItem);
                            }
                        } else {
                            isAllowed = isAllowed || isSameType(modelItem,branchItem);
                        }

                        j++;
                    }

                    if (isAllowed) {
                        arrayResult.push(branchItem);
                    }
                }
                context.result[context.key] = arrayResult;
            } else {
                context.result[context.key] = [];
            }
        }

    };

    var processDefault = function(context) {
        if(context.modelItem.hasOwnProperty('_default') ) {
            context.defaultValue = context.modelItem._default;
            context.isTypeMatch = isSameType(context.modelItem._default,context.branchItem);
            context.doRecurse = false;
        } else {
            context.isTypeMatch = isSameType(context.modelItem,context.branchItem);
        }
    };

    var processModel = function(context) {

        if(context.modelItem.hasOwnProperty('model')) {
            var modelName = context.modelItem.model;
            if (settings.models.hasOwnProperty(modelName)) {
                context.result[context.key] = processBranch(settings.models[modelName], context.branchItem);
            } else {
                context.result[context.key] = null;
            }
        }

    };

    var processLength = function(context) {
        if(context.modelItem.hasOwnProperty('_length') ) {

            // it's a string with a max length
            if (typeof context.branchItem === 'string') {
                context.result[context.key] = context.branchItem.substr(0, context.modelItem._length);
            }

        }
    };

    var isArray = function(obj) {
        return (Object.prototype.toString.call(obj) === '[object Array]');
    };

    var isObject = function (obj) {
        return (Object.prototype.toString.call(obj) === '[object Object]');
    };

    var isSameType = function (a,b) {
        return (Object.prototype.toString.call(a) === Object.prototype.toString.call(b));
    };

}
