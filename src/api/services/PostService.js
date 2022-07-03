import axios from "../http";

const PostService = {
  getPosts: async () => {
    const url = "/posts/20";
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  deletePost: async (id) => {
    const url = "/posts/delete-post";
    try {
      const { data } = await axios.post(url, id);

      return { data };
    } catch (error) {
      return { error };
    }
  },
};

export default PostService;
