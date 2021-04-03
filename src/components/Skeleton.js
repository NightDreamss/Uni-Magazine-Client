const Skeleton = ({ postSkeleton, studentSkeleton, manageSkeleton }) => {
  return (
    <>
      {postSkeleton ? (
        <div>
          <div className="w-full h-8 rounded shadow skeleton-box mb-2" />
          <div className="w-full h-56 mb-6 rounded shadow-lg skeleton-box md:h-64 xl:h-80" />
          <div className="w-full h-20 mb-2 rounded shadow skeleton-box" />
        </div>
      ) : studentSkeleton ? (
        <div className="flex flex-col items-center">
          <div className="object-cover w-12 h-12 my-auto rounded-full shadow skeleton-box mb-2" />
          <div className="h-6 w-full rounded shadow skeleton-box mb-2" />
          <div className="h-6 w-full rounded shadow skeleton-box" />
        </div>
      ) : manageSkeleton ? (
        <tr>
          <td className="px-6 py-4 border-b border-gray-200 bg-white">
            <div className="flex items-center pr-4">
              <div className="flex-shrink-0">
                <div className="block relative">
                  <div className="mx-auto object-cover rounded-full h-10 w-10 shadow skeleton-box" />
                </div>
              </div>
              <div className="ml-3">
                <div className="shadow skeleton-box w-40 h-6"></div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 border-b border-gray-200 bg-white">
            <div className="shadow skeleton-box w-32 h-6 mx-auto" />
          </td>
          <td className="px-6 py-4 border-b border-gray-200 bg-white">
            <div className="shadow skeleton-box w-32 h-6 mx-auto" />
          </td>
          <td className="px-6 py-4 border-b border-gray-200 bg-white">
            <div className="shadow skeleton-box w-32 h-6 float-right" />
          </td>
        </tr>
      ) : (
        ""
      )}
    </>
  );
};

export default Skeleton;
