import React from "react";
import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/CreateMagazine";
import moment from "moment";

export const Magazine = ({
  user,
  student,
  posts,
  admin,
  setPost,
  id,
  guest,
  closureSettings,
  createMagazine,
}) => {
  const closure = closureSettings.length
    ? moment().isBetween(
        closureSettings[0].start,
        closureSettings[0].end,
        "days",
        "()"
      )
    : false;

  return (
    <div className="min-h-screen mt-20 px-4 lg:px-8 md:px-24 bg-gradient-to-t to-green-100 from-white">
      {student ? (
        <div>
          <Posts
            title={"All Published Magazines"}
            posts={posts}
            guest={guest}
            user={user}
            closure={closure}
            closureSettings={closureSettings}
            createMagazine={createMagazine}
          />
        </div>
      ) : admin ? (
        <div>
          {id ? <Form id={id} user={user} setPost={setPost} /> : ""}

          <Posts
            title={"All Magazines"}
            posts={posts}
            admin={admin}
            user={user}
            setPost={setPost}
          />
        </div>
      ) : (
        <Posts title={"All Published Magazines"} posts={posts} guest={guest} />
      )}
    </div>
  );
};

export default Magazine;
