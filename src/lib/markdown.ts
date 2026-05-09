function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderInline(text: string): string {
  let out = escapeHtml(text);
  out = out.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_match, label: string, href: string) => {
      const safeHref = href.replace(/"/g, '&quot;');
      const isExternal = /^https?:\/\//i.test(safeHref);
      const rel = isExternal ? ' rel="noopener noreferrer"' : '';
      const target = isExternal ? ' target="_blank"' : '';
      return `<a href="${safeHref}"${target}${rel}>${label}</a>`;
    },
  );
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,!?;:]|$)/g, '$1<em>$2</em>');
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  return out;
}

interface Block {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'blockquote';
  content: string | string[];
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let buffer: string[] = [];
  let listBuffer: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let blockquoteBuffer: string[] = [];

  const flushParagraph = () => {
    if (buffer.length) {
      blocks.push({ type: 'p', content: buffer.join(' ') });
      buffer = [];
    }
  };

  const flushList = () => {
    if (listBuffer.length && listType) {
      blocks.push({ type: listType, content: listBuffer });
      listBuffer = [];
      listType = null;
    }
  };

  const flushBlockquote = () => {
    if (blockquoteBuffer.length) {
      blocks.push({ type: 'blockquote', content: blockquoteBuffer.join(' ') });
      blockquoteBuffer = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.trim() === '') {
      flushParagraph();
      flushList();
      flushBlockquote();
      continue;
    }

    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      flushBlockquote();
      blocks.push({ type: 'h3', content: line.slice(4).trim() });
      continue;
    }

    if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      flushBlockquote();
      blocks.push({ type: 'h2', content: line.slice(3).trim() });
      continue;
    }

    const ulMatch = /^- (.*)$/.exec(line);
    if (ulMatch) {
      flushParagraph();
      flushBlockquote();
      if (listType && listType !== 'ul') flushList();
      listType = 'ul';
      listBuffer.push(ulMatch[1]);
      continue;
    }

    const olMatch = /^\d+\.\s+(.*)$/.exec(line);
    if (olMatch) {
      flushParagraph();
      flushBlockquote();
      if (listType && listType !== 'ol') flushList();
      listType = 'ol';
      listBuffer.push(olMatch[1]);
      continue;
    }

    if (line.startsWith('> ')) {
      flushParagraph();
      flushList();
      blockquoteBuffer.push(line.slice(2));
      continue;
    }

    flushList();
    flushBlockquote();
    buffer.push(line.trim());
  }

  flushParagraph();
  flushList();
  flushBlockquote();

  return blocks
    .map((block) => {
      switch (block.type) {
        case 'h2':
          return `<h2>${renderInline(block.content as string)}</h2>`;
        case 'h3':
          return `<h3>${renderInline(block.content as string)}</h3>`;
        case 'p':
          return `<p>${renderInline(block.content as string)}</p>`;
        case 'blockquote':
          return `<blockquote>${renderInline(block.content as string)}</blockquote>`;
        case 'ul': {
          const items = (block.content as string[])
            .map((item) => `<li>${renderInline(item)}</li>`)
            .join('');
          return `<ul>${items}</ul>`;
        }
        case 'ol': {
          const items = (block.content as string[])
            .map((item) => `<li>${renderInline(item)}</li>`)
            .join('');
          return `<ol>${items}</ol>`;
        }
        default:
          return '';
      }
    })
    .join('\n');
}
