// Add a page: create the HTML file (copy about.html), then add an entry here.
// The masthead links and the contents on the front page both read this list.
const pages = [
  {
    href: "index.html",
    title: "Front",
    blurb: "The door. Every page on the site is listed here.",
  },
  {
    href: "about.html",
    title: "About",
    blurb: "What jelp is, and how to add the next page.",
  },
];

function numberFor(index) {
  return String(index + 1).padStart(2, "0");
}

function currentHref() {
  const path = window.location.pathname;
  if (path.endsWith("/") || path.endsWith("/index.html")) return "index.html";
  const file = path.split("/").pop();
  return file || "index.html";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderPages() {
  const here = currentHref();
  const hereIndex = pages.findIndex((page) => page.href === here);

  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.innerHTML = pages
      .map((page, index) => {
        const current = page.href === here ? ' aria-current="page"' : "";
        return `<a href="${escapeHtml(page.href)}"${current}><span class="num">${numberFor(index)}</span> ${escapeHtml(page.title)}</a>`;
      })
      .join("");
  }

  const list = document.querySelector("[data-contents]");
  if (list) {
    list.hidden = false;
    list.innerHTML = pages
      .map((page, index) => {
        const hereMark =
          page.href === here ? '<span class="here">you are here</span>' : "";
        return `<li><a href="${escapeHtml(page.href)}"><span class="num">${numberFor(index)}</span><span class="title">${escapeHtml(page.title)}${hereMark}</span><span class="blurb">${escapeHtml(page.blurb)}</span></a></li>`;
      })
      .join("");
  }

  const signature = document.querySelector("[data-signature]");
  if (signature) {
    signature.textContent =
      hereIndex === -1
        ? "jelp"
        : `${numberFor(hereIndex)} / ${numberFor(pages.length - 1)}`;
  }
}

renderPages();
