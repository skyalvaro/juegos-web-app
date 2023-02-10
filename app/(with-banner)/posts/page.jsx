import { ListOfPosts } from './ListOfPosts'

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export default async function PostsPage({ params }) {
  return (
    <section>
      <ListOfPosts />
    </section>
  );
}
