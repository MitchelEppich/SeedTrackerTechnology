// Entry filters
const entryFilters = ({ OR = [], date_of, context_of }) => {
  const filter = date_of || context_of ? {} : null;

  if (date_of) {
    filter.createdAt = date_of;
  }
  if (context_of) {
    filter.context = context_of;
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(entryFilters(OR[i]));
  }
  return filters;
};

module.exports = {
  entryFilters
};
