import React from "react";
import Title from "../../components/Title";
import { Bar } from "react-chartjs-2";
import moment from "moment";

export const AdminHome = ({ posts, registeredUsers }) => {
  const startOfYear = moment().clone().startOf("year").format("YYYY-MM-DD");
  const endOfYear = moment().clone().endOf("year").format("YYYY-MM-DD");
  const start = moment(startOfYear);
  const end = moment(endOfYear);
  let monthPost = [];
  let monthNames = [];
  let totalPost = 0;

  let students = registeredUsers.reduce((filtered, post) => {
    if (post.account === "1") {
      let showPosts = { post };
      filtered.push(showPosts);
    }
    return filtered;
  }, []);

  while (end > start || start.format("M") === end.format("M")) {
    const startOfMonth = moment(start).startOf("month");
    const monthName = [];

    let postData = posts.reduce((filtered, post) => {
      if (moment(post.dateCreated).isSame(startOfMonth, "month")) {
        let postCounter = true;
        filtered.push(postCounter);
      }
      return filtered;
    }, []);

    moment().isSame(startOfMonth, "month");
    monthName.push(moment(startOfMonth).startOf("month").format("MMMM"));
    monthPost.push(postData.length);
    totalPost = totalPost + postData.length;
    monthNames.push(monthName);
    start.add(1, "month");
  }

  const postGarphData = {
    labels: monthNames,
    datasets: [
      {
        label: "Post For The Year ",
        data: monthPost,
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(55, 199, 12, 0.2)",
          "rgba(190, 122, 135, 0.2)",
          "rgba(105, 106, 186, 0.2)",
          "rgba(175, 12, 122, 0.2)",
          "rgba(13, 162, 155, 0.2)",
          "rgba(220, 119, 24, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(55, 199, 12, 1)",
          "rgba(190, 122, 135, 1)",
          "rgba(105, 106, 186, 1)",
          "rgba(175, 12, 122, 1)",
          "rgba(13, 162, 155, 1)",
          "rgba(220, 119, 24, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="px-4 mt-20 mx-auto w-full lg:px-8 md:px-24 pt-12 bg-gradient-to-t to-green-100 from-white">
      <div className="container mb-6 sm:mx-auto md:mb-10">
        <Title title="Uni Magazine Reports" />
        <p className="mt-4">
          This is an overview of the statistical reports of the web application
        </p>
      </div>
      <div className="lg:grid lg:gap-4 lg:row-gap-2 lg:grid-cols-3">
        <div>
          <h1 className="pb-4 font-semibold text-xl">
            Overall Statistical numbers
          </h1>
          <div>
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {students.length}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Registered Students
            </p>
          </div>
          <div className="mt-12">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {totalPost}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Total Post
            </p>
          </div>
        </div>

        <div className="my-12 lg:mt-0 lg:col-span-3 lg:col-start-2">
          <h1 className="pb-4 font-semibold text-xl">
            Statistics Report Contributions Year Report
          </h1>
          <Bar data={postGarphData} options={options} />
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
