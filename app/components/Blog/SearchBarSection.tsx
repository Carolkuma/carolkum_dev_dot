import * as React from "react";
import { DocumentTextIcon } from "@heroicons/react/outline";

interface Props {
  search: string;
  setSearch: (input: string) => void;
  count: number;
}

const SearchBarSection: React.FC<Props> = (props) => {
  return (
    <div className="BlogPage__Header__Wrapper mb-16 grid grid-cols-4 text-white">
      <div className="col-span-2">
        <p className="BlogPage__SubHeader mb-12 leading-relaxed">
          Let's go through my journey together with great articles.
        </p>
        <div className="post-search-bar-input-wrapper mt-1 relative flex flex-row h-16 rounded-2xl border shadow-sm border-gray-300 items-center px-3 max-w-lg">
          <input
            type="blog-post-search-bar"
            name="blog-post-search-bar"
            id="text"
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value);
            }}
            className="focus:ring-none bg-transparent focus:outline-none active:ring-none block w-full pl-7 focus:appearance-none pr-12 text-lg border-gray-200 rounded-md"
            placeholder="Search posts"
          />
          <div className="absolute inset-y-0 right-10 pl-3 flex items-center pointer-events-none">
            <span className="mr-2">
              <DocumentTextIcon className="h-5 w-5 text-smTextColor" />
            </span>
            <p className="text-sm text-smTextColor opacity-80">{props.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarSection;
