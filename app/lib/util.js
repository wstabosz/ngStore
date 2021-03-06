Number.prototype.formatMoney = function(c, d, t){
    var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

var pageArray = function(array, pageNumber, itemsPerPage) {

    var result = [];
    if (!array.length) return result;

    var end = pageNumber * itemsPerPage;
    var lastOffset = array.length;
    end = (end > lastOffset) ? lastOffset  : end;

    var start = end - itemsPerPage;
    start = (start < 0) ? 0 : start;

    result = array.slice(start,end);
    return result;
};
