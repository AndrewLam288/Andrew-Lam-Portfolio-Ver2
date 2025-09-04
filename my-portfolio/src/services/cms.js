import { hygraph } from '../lib/gql';

const PROJECTS_QUERY = /* GraphQL */ `
  {
    projects(orderBy: date_DESC, first: 24) {
      id
      title
      slug
      shortDescription
      date
      visibility
      demoUrl
      repoUrl
    }
  }
`;

const CERTS_QUERY = /* GraphQL */ `
  query Certs {
    certificates(orderBy: date_DESC, first: 50) {
      id
      title
      issuer
      date
      image { url }
    }
  }
`;

export async function fetchProjects() {
  const { projects } = await hygraph.request(PROJECTS_QUERY);
  return projects.map(p => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    date: new Date(p.date).toLocaleString('en-US', {
      month: 'short',
      year: 'numeric'
    }),
    visibility: p.visibility,            // 'PUBLIC' | 'PRIVATE'
    shortDescription: p.shortDescription || '',
    demoUrl: p.demoUrl || null,
    repoUrl: p.repoUrl || null,
  }));
}

export async function fetchCertificates() {
  try {
    const { certificates } = await hygraph.request(CERTS_QUERY);

    return certificates.map((c) => ({
      id: c.id,
      title: c.title,
      issuer: c.issuer,
      // Hygraph returns YYYY-MM-DD; format for the UI
      date: new Date(c.date).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric',
      }),
      // high-res image URL for crisp zoom in your modal
      imgUrl: c.image?.url
        ? `${c.image.url}?width=2200&quality=92&format=webp`
        : null,
    }));
  } catch (err) {
    console.error('[fetchCertificates] ', err);
    return [];
  }
}
