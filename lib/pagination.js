function paginate(options) {
  var total = options.total;
  var perpage = options.perpage;
  var edge = options.edge || 2;
  var page = options.page || 1;

  var totalPages = parseInt((total - 1) / perpage, 10) + 1;

  var prevPage = page > 1 ? page - 1 : null;
  var nextPage = page < totalPages ? page + 1 : null;

  var pagesOverflow = 5 + edge * 2;
  var hasLeftEdge = totalPages > pagesOverflow && page > edge + 3;
  var hasRightEdge = totalPages > pagesOverflow && page + edge + 2 < totalPages;

  // calculate pages
  var pageList = [];
  var left = 2, right = totalPages - 1;
  if (hasLeftEdge && !hasRightEdge) {
    left = Math.max(4, totalPages - 2 * edge - 2);
  } else if (!hasLeftEdge && hasRightEdge) {
    right = Math.min(2 * edge + 3, totalPages - 1);
  } else if (hasLeftEdge && hasRightEdge) {
    left = page - edge;
    right = page + edge;
  }
  for (var i = left; i <= right; i++) {
    pageList.push(i);
  }
  return {
    total: total,
    perpage: perpage,
    edge: edge,
    page: page,
    totalPages: totalPages,
    prev: prevPage,
    next: nextPage,
    hasLeftEdge: hasLeftEdge,
    hasRightEdge: hasRightEdge,
    pageList: pageList,
  }
}

module.exports = paginate;
