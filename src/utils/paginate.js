import _ from "lodash";

export default function Paginate(allItems, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(allItems).slice(startIndex).take(pageSize).value();
}