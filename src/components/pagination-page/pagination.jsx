import { FcLeft, FcRight } from "react-icons/fc";
import ReactPaginate from "react-paginate";

export const Pagination = () => {
  return (
    <div className="flex justify-center mt-10 mb-20">
      <ReactPaginate
        previousLabel={<FcLeft className="text-2xl outline-none border-none" />}
        nextLabel={<FcRight className="text-2xl" />}
        breakLabel={"..."}
        breakClassName={"break-me"}
        // pageCount={this.state.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        // onPageChange={this.handlePageClick}
        containerClassName={"w-1/2 outline-none flex justify-around"}
        subContainerClassName={""}
        activeClassName={"bg-red-500 p-2 text-white rounded-2xl"}
      />
    </div>
  );
};
