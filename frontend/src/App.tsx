import "./App.css";
import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
  query ExampleQuery {
    test {
      title
      author
    }
  }
`;

function Books() {
  const { data, loading, error } = useQuery(BOOKS);
  console.log(data);

  if (loading) {
    <div>ロード中・・・</div>;
  }
  if (error) {
    <div>エラー</div>;
  }
  return data.test.map(({ title, author }) => (
    <div key={author}>
      <p>
        {author}: {title}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <Books />
    </div>
  );
}

export default App;
