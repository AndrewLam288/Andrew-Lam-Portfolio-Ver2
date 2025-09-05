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
      logo { url }
    }
  }
`;

const SKILLSET_QUERY = /* GraphQL */ `
  query SkillSet {
    skillSets(orderBy: order_ASC, first: 200, stage: PUBLISHED) {
      id
      name
      logo
      order
    }
  }
`;

const EXPERTISE_QUERY = /* GraphQL */ `
  { expertises(orderBy: title_ASC, first: 20) { id title description } }
`;

const ABOUT_QUERY = /* GraphQL */ `
  query About {
    abouts(first: 1, stage: PUBLISHED) {
      id
      content { html }
    }
  }
`;

const EDUCATION_QUERY = /* GraphQL */ `
  query Education {
    educations(orderBy: order_ASC, stage: PUBLISHED) {
      id
      school
      range
      note
      order
      logo { url }
    }
  }
`;

const EXPERIENCE_QUERY = /* GraphQL */ `
  query Experience {
    experiences(orderBy: order_ASC, stage: PUBLISHED) {
      id
      role
      org
      range
      note
      order
      logo { url }
    }
  }
`;

const CAREER_STATS_QUERY = /* GraphQL */ `
  query CareerStats {
    careerStats(first: 1, stage: PUBLISHED) {
      id
      years
      certs
      projects
      techs
    }
  }
`;


export async function fetchCareerStats() {
  try {
    const { careerStats } = await hygraph.request(CAREER_STATS_QUERY);
    const s = careerStats?.[0] || {};
    return {
      years: s.years ?? 0,
      certificates: s.certs ?? 0,
      projects: s.projects ?? 0,
      techs: s.techs ?? 0,
    };
  } catch {
    return { years: 0, certificates: 0, projects: 0, techs: 0 };
  }
}

export async function fetchAboutHtml() {
  const { abouts } = await hygraph.request(ABOUT_QUERY);
  return abouts?.[0]?.content?.html || "";
}

export async function fetchEducation() {
  const { educations } = await hygraph.request(EDUCATION_QUERY);
  return (educations || []).map((e, i) => ({
    id: e.id,
    school: e.school,
    range: e.range,
    note: e.note || "",
    logoUrl: e.logo?.url || null,
    order: Number.isFinite(e.order) ? e.order : i + 1,
  }));
}

export async function fetchExperience() {
  const { experiences } = await hygraph.request(EXPERIENCE_QUERY);
  return (experiences || []).map((x, i) => ({
    id: x.id,
    role: x.role,
    org: x.org,
    range: x.range,
    note: x.note || "",
    logoUrl: x.logo?.url || null,
    order: Number.isFinite(x.order) ? x.order : i + 1,
  }));
}

export async function fetchCertificatesPreview(limit = 3) {
  const all = await fetchCertificates();
  return all.slice(0, limit);
}

export async function fetchSkills() {
  const { skillSets } = await hygraph.request(SKILLSET_QUERY);
  return (skillSets ?? []).map((s, i) => ({
    id: s.id,
    name: s.name,
    icon: s.logo,
    order: Number.isFinite(s.order) ? s.order : i + 1,
  }));
}

export async function fetchExpertise() {
  const { expertises } = await hygraph.request(EXPERTISE_QUERY);
  return expertises || [];
}

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
      date: new Date(c.date).toLocaleString('en-US', { month: 'long', year: 'numeric' }),
      imgUrl: c.image?.url ? `${c.image.url}?width=2200&quality=92&format=webp` : null,
      logoUrl: c.logo?.url || null,
    }));
  } catch (err) {
    console.error('[fetchCertificates] ', err);
    return [];
  }
}
