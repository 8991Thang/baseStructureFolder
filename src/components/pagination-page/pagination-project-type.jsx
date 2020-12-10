import { FcLeft, FcRight } from "react-icons/fc";
import ReactPaginate from "react-paginate";

export const PaginationProjectType = () => {
  return (
    <div className="flex justify-center mt-10 mb-20">
      <ReactPaginate
        previousLabel={<FcLeft className="text-2xl" />}
        nextLabel={<FcRight className="text-2xl" />}
        breakLabel={"..."}
        breakClassName={"break-me"}
        // pageCount={this.state.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        // onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};
