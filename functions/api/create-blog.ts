type Env = {
  ADMIN_SECRET: string;
  GITHUB_TOKEN: string;
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
  GITHUB_BRANCH?: string;
};

type CreateBlogPayload = {
  adminSecret?: string;
  title?: string;
  slug?: string;
  description?: string;
  excerpt?: string;
  category?: string;
  icon?: string;
  body?: string;
  relatedSymbols?: string;
};

const SITE_URL = 'https://kahveyorumla.com';

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function slugify(input: string) {
  return input
    .toLocaleLowerCase('tr-TR')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function toBase64Unicode(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function escapeText(value: string) {
  return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
}

function splitParagraphs(value: string) {
  return escapeText(value)
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toLocaleUpperCase('tr-TR') + part.slice(1))
    .join(' ');
}

function relatedSymbolsFromInput(value?: string) {
  return (value || '')
    .split(',')
    .map((item) => slugify(item))
    .filter(Boolean)
    .slice(0, 8)
    .map((slug) => ({
      href: `/sembol-sozlugu/${slug}/`,
      label: `Kahve falında ${titleFromSlug(slug)} görmek`,
    }));
}

function makePageTsx(payload: Required<Pick<CreateBlogPayload, 'title' | 'slug' | 'description' | 'excerpt' | 'category' | 'icon' | 'body'>> & { relatedSymbols?: string }) {
  const canonical = `${SITE_URL}/blog/${payload.slug}/`;
  const paragraphs = splitParagraphs(payload.body);
  const related = relatedSymbolsFromInput(payload.relatedSymbols);

  return `import type { Metadata } from 'next';
import Link from 'next/link';

const paragraphs = ${JSON.stringify(paragraphs, null, 2)};

const relatedSymbols = ${JSON.stringify(related, null, 2)};

export const metadata: Metadata = {
  title: ${JSON.stringify(`${payload.title} | Kahve Yorumla`)},
  description: ${JSON.stringify(payload.description)},
  alternates: {
    canonical: ${JSON.stringify(canonical)},
  },
  openGraph: {
    title: ${JSON.stringify(payload.title)},
    description: ${JSON.stringify(payload.excerpt)},
    url: ${JSON.stringify(canonical)},
    siteName: 'Kahve Yorumla',
    locale: 'tr_TR',
    type: 'article',
  },
};

export default function BlogPostPage() {
  return (
    <main className="container-page py-12">
      <nav className="mb-8 text-sm text-kahve-400">
        <Link href="/" className="hover:text-kahve-700">
          Ana Sayfa
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog/" className="hover:text-kahve-700">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span>${payload.title.replace(/</g, '&lt;')}</span>
      </nav>

      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-kahve-300">
          ${payload.icon} ${payload.category}
        </p>

        <h1 className="heading-serif text-4xl leading-tight text-kahve-900 md:text-5xl">
          ${payload.title.replace(/</g, '&lt;')}
        </h1>

        <p className="mt-5 text-lg leading-8 text-kahve-500">
          ${payload.excerpt.replace(/</g, '&lt;')}
        </p>

        <div className="my-8 rounded-3xl border border-kahve-100 bg-white/70 p-6 shadow-soft">
          <p className="text-sm font-semibold text-kahve-700">Kısa özet</p>
          <p className="mt-2 text-sm leading-7 text-kahve-500">
            ${payload.description.replace(/</g, '&lt;')}
          </p>
        </div>

        <section className="space-y-6 text-base leading-8 text-kahve-600">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {relatedSymbols.length > 0 ? (
          <div className="mt-10 rounded-3xl border border-kahve-100 bg-krem-50 p-6">
            <h2 className="heading-serif text-2xl text-kahve-900">
              Benzer semboller
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedSymbols.map((symbol) => (
                <Link key={symbol.href} href={symbol.href} className="btn-secondary">
                  {symbol.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10 rounded-3xl bg-kahve-900 p-7 text-white">
          <h2 className="heading-serif text-2xl">
            Ücretsiz sanal kahve falı baktır
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/80">
            Fincanında farklı semboller gördüysen, sembolleri tek tek yorumlamak yerine
            fincanın genel görünümünü birlikte değerlendirmek daha doğru olur. Kahve
            Yorumla’da fincan fotoğrafını yükleyerek ücretsiz sanal kahve falı yorumunu
            alabilirsin.
          </p>
          <Link href="/fal-yukle/" className="btn-primary mt-5 inline-flex">
            Falımı Yorumla
          </Link>
        </div>
      </article>
    </main>
  );
}
`;
}

async function githubFileExists(env: Env, path: string, branch: string) {
  const url = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, '/')}?ref=${encodeURIComponent(branch)}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'kahve-yorumla-admin-panel',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (response.status === 404) return false;
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub dosya kontrolü başarısız: ${response.status} ${text}`);
  }
  return true;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  try {
    if (!env.ADMIN_SECRET || !env.GITHUB_TOKEN || !env.GITHUB_OWNER || !env.GITHUB_REPO) {
      return jsonResponse(
        {
          ok: false,
          error:
            'Cloudflare environment variables eksik. ADMIN_SECRET, GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO zorunlu.',
        },
        500,
      );
    }

    const payload = (await request.json()) as CreateBlogPayload;
    const authHeader = request.headers.get('Authorization') || '';
    const bearerSecret = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    const givenSecret = payload.adminSecret || bearerSecret;

    if (givenSecret !== env.ADMIN_SECRET) {
      return jsonResponse({ ok: false, error: 'Admin şifresi hatalı.' }, 401);
    }

    const title = escapeText(payload.title || '');
    const slug = slugify(payload.slug || title);
    const description = escapeText(payload.description || '');
    const excerpt = escapeText(payload.excerpt || description);
    const category = escapeText(payload.category || 'Kahve Falı Sembolleri');
    const icon = escapeText(payload.icon || '☕');
    const body = escapeText(payload.body || '');

    if (!title || title.length < 10) {
      return jsonResponse({ ok: false, error: 'Başlık en az 10 karakter olmalı.' }, 400);
    }
    if (!slug || slug.length < 3) {
      return jsonResponse({ ok: false, error: 'Slug oluşturulamadı.' }, 400);
    }
    if (!description || description.length < 50) {
      return jsonResponse({ ok: false, error: 'Meta description en az 50 karakter olmalı.' }, 400);
    }
    if (!body || body.length < 600) {
      return jsonResponse({ ok: false, error: 'Yazı içeriği en az 600 karakter olmalı.' }, 400);
    }

    const branch = env.GITHUB_BRANCH || 'main';
    const path = `src/app/blog/${slug}/page.tsx`;
    const exists = await githubFileExists(env, path, branch);

    if (exists) {
      return jsonResponse(
        {
          ok: false,
          error: `Bu slug ile dosya zaten var: ${path}. Farklı slug kullan veya mevcut dosyayı elle düzenle.`,
        },
        409,
      );
    }

    const fileContent = makePageTsx({
      title,
      slug,
      description,
      excerpt,
      category,
      icon,
      body,
      relatedSymbols: payload.relatedSymbols || '',
    });

    const githubUrl = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${path}`;

    const githubResponse = await fetch(githubUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'kahve-yorumla-admin-panel',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({
        message: `Blog yazısı ekle: ${title}`,
        content: toBase64Unicode(fileContent),
        branch,
      }),
    });

    const githubResult = await githubResponse.json();

    if (!githubResponse.ok) {
      return jsonResponse(
        {
          ok: false,
          error: 'GitHub commit oluşturulamadı.',
          details: githubResult,
        },
        githubResponse.status,
      );
    }

    return jsonResponse({
      ok: true,
      message: 'Blog yazısı GitHub’a commit edildi. Cloudflare birkaç dakika içinde otomatik deploy eder.',
      path,
      url: `${SITE_URL}/blog/${slug}/`,
      github: githubResult?.content?.html_url,
    });
  } catch (error) {
    return jsonResponse(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Bilinmeyen hata oluştu.',
      },
      500,
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
    },
  });
}
