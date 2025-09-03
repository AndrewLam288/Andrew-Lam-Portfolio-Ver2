import { Title, Feed, Post, Head, Date as DateTxt, Body } from "./Blogs.styles";

const posts = [
  { slug: "post-1", title: "Writing my first Senior Seminar paper", date: "August 28, 2025", excerpt: "Notes on speed, scope, and polish." },
];

export default function Blogs() {
  return (
    <>
      <Title>Blogs</Title>
      <Feed>
        {posts.map((p) => (
          <Post key={p.slug}>
            <Head>
              <DateTxt>{p.date}</DateTxt>
              <h4 style={{ margin: "4px 0 0" }}>{p.title}</h4>
            </Head>
            <Body>
              <p style={{ margin: 0 }}>{p.excerpt}</p>
            </Body>
          </Post>
        ))}
      </Feed>
    </>
  );
}
