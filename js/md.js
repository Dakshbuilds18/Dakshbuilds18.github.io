// Minimal Markdown renderer — no dependencies, works offline and on file://
// Supports: ## headings, **bold**, *italic*, `code`, ``` code blocks,
// [links](url), ![images](src), - bullet lists, 1. numbered lists,
// > blockquotes, --- rules, and paragraphs.
function renderMarkdown(src) {
  if (!src) return "";

  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Pull out fenced code blocks first so nothing inside them gets formatted
  const codeBlocks = [];
  src = src.replace(/```([\s\S]*?)```/g, (m, code) => {
    codeBlocks.push("<pre><code>" + esc(code.replace(/^\n/, "")) + "</code></pre>");
    return "\n@@CODEBLOCK" + (codeBlocks.length - 1) + "@@\n";
  });

  const inline = text => esc(text)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="md-img"><img src="$2" alt="$1" loading="lazy"><figcaption>$1</figcaption></figure>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");

  const lines = src.split("\n");
  const out = [];
  let list = null;          // "ul" | "ol" | null
  let para = [];

  const closeList = () => { if (list) { out.push("</" + list + ">"); list = null; } };
  const flushPara = () => {
    if (para.length) { out.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    const codeMatch = line.match(/^@@CODEBLOCK(\d+)@@$/);
    if (codeMatch) { flushPara(); closeList(); out.push(codeBlocks[+codeMatch[1]]); continue; }

    if (/^\s*$/.test(line)) { flushPara(); closeList(); continue; }

    const h = line.match(/^(#{1,4})\s+(.*)/);
    if (h) { flushPara(); closeList(); const lvl = h[1].length + 1; out.push("<h" + lvl + ">" + inline(h[2]) + "</h" + lvl + ">"); continue; }

    if (/^---+$/.test(line)) { flushPara(); closeList(); out.push("<hr>"); continue; }

    const q = line.match(/^>\s?(.*)/);
    if (q) { flushPara(); closeList(); out.push("<blockquote>" + inline(q[1]) + "</blockquote>"); continue; }

    const ul = line.match(/^[-*]\s+(.*)/);
    const ol = line.match(/^\d+\.\s+(.*)/);
    if (ul || ol) {
      flushPara();
      const type = ul ? "ul" : "ol";
      if (list !== type) { closeList(); out.push("<" + type + ">"); list = type; }
      out.push("<li>" + inline((ul || ol)[1]) + "</li>");
      continue;
    }

    closeList();
    para.push(line);
  }
  flushPara();
  closeList();
  return out.join("\n");
}
