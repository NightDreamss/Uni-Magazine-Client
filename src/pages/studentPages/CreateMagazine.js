import React from "react";
import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/CreateMagazine";

const CreateMagazine = ({ user, student, posts, setPost, id }) => {
  return (
    <div className="min-h-screen mt-20 px-4 lg:px-8 md:px-24 bg-gradient-to-t to-green-100 from-white">
      <Form id={id} user={user} setPost={setPost} />

      <Posts
        title={"Your Magazines"}
        user={user}
        posts={posts}
        student={student}
        setPost={setPost}
      />
    </div>
  );
};

export default CreateMagazine;
