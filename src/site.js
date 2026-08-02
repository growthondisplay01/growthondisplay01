import { saveContactSubmission } from './firebase.js';

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Loader ---------- */
const finishLoading = () => {
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('hide');
    document.getElementById('hero')?.classList.add('loaded');
  }, 1300);
};
if (document.readyState === 'complete') finishLoading();
else window.addEventListener('load', finishLoading, { once: true });
/* fallback in case load event is slow/blocked */
setTimeout(() => {
  document.getElementById('loader')?.classList.add('hide');
  document.getElementById('hero')?.classList.add('loaded');
}, 2600);

/* ---------- Sticky header + scroll progress ---------- */
const header = document.getElementById('siteHeader');
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
}, { passive:true });

/* ---------- Mobile menu ---------- */
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', navList.classList.contains('open') ? 'true' : 'false');
});
document.querySelectorAll('.nav-link, .nav-cta').forEach(l => l.addEventListener('click', () => {
  navList.classList.remove('open');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

/* ---------- Mouse parallax on hero blobs ---------- */
const heroSection = document.getElementById('hero');
heroSection.addEventListener('mousemove', (e) => {
  const { innerWidth:w, innerHeight:h } = window;
  const x = (e.clientX - w/2) / w;
  const y = (e.clientY - h/2) / h;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const f = parseFloat(el.dataset.parallax) * 400;
    el.style.transform = `translate(${x*f}px, ${y*f}px)`;
  });
});

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

/* stagger delay */
document.querySelectorAll('[data-reveal-stagger]').forEach(container => {
  [...container.children].forEach((child, i) => {
    child.style.transitionDelay = (i % 6) * 70 + 'ms';
  });
});

/* ---------- Data-driven content ---------- */
const icon = (path) => `<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

const services = [
  ["Digital Marketing","Integrated campaigns across channels built around one growth strategy.", '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/>'],
  ["Performance Marketing","Data-led campaigns optimized continuously for measurable results.", '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>'],
  ["Meta Ads","Facebook and Instagram advertising built to reach the right audience.", '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M15 8h-2a2 2 0 0 0-2 2v9M9 13h5"/>'],
  ["Google Ads","Search and display campaigns that capture high-intent demand.", '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>'],
  ["Search Engine Optimization","Technical and content SEO for durable, compounding visibility.", '<path d="M4 19h16M4 15h10M4 11h16M4 7h10"/>'],
  ["Website Development","Fast, modern, conversion-focused websites built to scale.", '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>'],
  ["Landing Page Development","Focused pages engineered to turn visitors into leads.", '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'],
  ["AI Automation","AI-powered workflows that save time and scale operations.", '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M9 15h6"/>'],
  ["WhatsApp Automation","Automated conversations that qualify and nurture leads instantly.", '<path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1"/><path d="M21 3l-6 6"/><path d="M8 12l2 2 4-4"/>'],
  ["CRM Integration","Connected systems that keep every lead and customer in view.", '<circle cx="7" cy="7" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="M8.5 8.2L11 15.5M15.5 8.2L13 15.5"/>'],
  ["Branding","Distinct visual identities that build recognition and trust.", '<path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z"/>'],
  ["Graphic Design","Clean, considered visuals across every touchpoint.", '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>'],
  ["Video Editing","Polished video content built for attention and retention.", '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/>'],
  ["Content Creation","Strategic content that informs, engages, and converts.", '<path d="M4 4h16v16H4z" opacity="0"/><path d="M6 4h9l5 5v11H6z"/><path d="M15 4v5h5"/>'],
  ["Social Media Management","Consistent, on-brand presence across every platform.", '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.6l6.8-3.2M8.6 13.4l6.8 3.2"/>'],
  ["Lead Generation","Systems that consistently bring in qualified prospects.", '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>'],
  ["Marketing Strategy","Clear, research-backed roadmaps aligned to business goals.", '<path d="M9 19V6l11-3v13"/><circle cx="6" cy="19" r="3"/><circle cx="17" cy="16" r="3"/>'],
];
document.getElementById('serviceGrid').innerHTML = services.map(([t,d,ic]) => `
  <div class="service-card">
    <div class="icon">${icon(ic)}</div>
    <h4>${t}</h4>
    <p>${d}</p>
  </div>`).join('');

const whys = [
  ["Strategy First Approach","Every action is guided by a clear plan, not guesswork."],
  ["Creative Thinking","Ideas that help your brand stand out, not blend in."],
  ["Data Driven Decisions","We measure what matters and adjust based on real numbers."],
  ["Transparent Communication","You always know what we're doing and why."],
  ["Customized Marketing Solutions","No templates — strategies built around your business."],
  ["Long-Term Growth Partnership","We aim for relationships that grow with your business."],
  ["Fast Response","Clear, timely communication whenever you need us."],
  ["Quality Execution","Careful, considered work at every stage of delivery."],
];
document.getElementById('whyGrid').innerHTML = whys.map(([t,d],i) => `
  <div class="why-card">
    <span class="num">0${i+1}</span>
    <h4>${t}</h4>
    <p>${d}</p>
  </div>`).join('');

const steps = [
  ["01","Discovery","Understanding your business, goals, audience, and current marketing landscape."],
  ["02","Research","Studying your market, competitors, and opportunities in depth."],
  ["03","Strategy","Building a clear, tailored roadmap aligned to your growth goals."],
  ["04","Design","Crafting the creative, brand, and digital assets your strategy needs."],
  ["05","Execution","Launching campaigns, content, and systems with precision."],
  ["06","Optimization","Reviewing performance and refining continuously for better results."],
  ["07","Growth","Scaling what works into sustainable, long-term business growth."],
];
document.getElementById('timeline').innerHTML = steps.map(([n,t,d]) => `
  <div class="step">
    <div class="marker">${n}</div>
    <div class="step-body">
      <h4>${t}</h4>
      <p>${d}</p>
    </div>
  </div>`).join('');

const industries = ["Real Estate","Healthcare","Interior Design","Retail","Restaurants","E-commerce","Education","Manufacturing","Technology","Finance","Professional Services","Startups"];
document.getElementById('industryGrid').innerHTML = industries.map(t => `
  <div class="industry-card">${t} ${icon('<path d="M7 17L17 7M7 7h10v10"/>')}</div>`).join('');

const insights = [
  ["Strategy","How to Build a Marketing Strategy That Actually Works","A practical look at aligning strategy with real business goals."],
  ["AI Automation","Where AI Fits Into Modern Marketing Teams","Exploring how automation supports, not replaces, good marketing."],
  ["Performance","Getting More From Your Meta & Google Ad Spend","Foundational principles for efficient, accountable ad performance."],
];
document.getElementById('insightGrid').innerHTML = insights.map(([tag,t,d]) => `
  <div class="insight-card">
    <div class="insight-thumb"></div>
    <div class="insight-body">
      <span class="tag">${tag}</span>
      <h4>${t}</h4>
      <p>${d}</p>
    </div>
  </div>`).join('');

const faqs = [
  ["What services does Growth on Display offer?","We offer a full range of digital marketing and AI automation services — including performance marketing, SEO, website development, branding, content, and CRM/WhatsApp automation — tailored to your business needs."],
  ["Do you work with businesses outside Ahmedabad?","Yes. While we're based in Ahmedabad, Gujarat, we partner with businesses across India."],
  ["How do you approach a new project?","Every engagement starts with Discovery and Research, followed by a tailored Strategy before any Design or Execution begins."],
  ["Can you handle both strategy and execution?","Yes — we work as an end-to-end partner, from planning through design, campaign execution, and ongoing optimization."],
  ["How do we get started?","Book a free consultation through the contact form, and we'll get in touch to understand your goals and next steps."],
];
document.getElementById('faqList').innerHTML = faqs.map(([q,a]) => `
  <div class="faq-item">
    <div class="faq-q"><span>${q}</span><span class="plus"></span></div>
    <div class="faq-a"><p>${a}</p></div>
  </div>`).join('');

document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => { o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
    if (!isOpen) { item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
  });
});

/* ---------- Contact form (saves to Firebase Firestore) ---------- */
window.handleSubmit = function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const status = document.getElementById('formStatus');
  const original = btn.textContent;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  btn.disabled = true;
  btn.textContent = 'Sending...';
  if (status) { status.textContent = ''; status.className = 'form-status'; }

  saveContactSubmission(data)
    .then(() => {
      btn.textContent = 'Message Sent';
      btn.style.opacity = '0.7';
      if (status) {
        status.textContent = 'Message sent successfully! We\u2019ll be in touch soon.';
        status.className = 'form-status success';
      }
      setTimeout(() => {
        btn.textContent = original;
        btn.style.opacity = '1';
        btn.disabled = false;
        form.reset();
      }, 2200);
    })
    .catch((err) => {
      console.error('Failed to save contact submission:', err);
      btn.textContent = 'Something went wrong — try again';
      btn.disabled = false;
      if (status) {
        status.textContent = 'Something went wrong — your message was not sent. Please try again.';
        status.className = 'form-status error';
      }
      setTimeout(() => { btn.textContent = original; }, 2800);
    });

  return false;
}
